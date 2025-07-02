import { TIPOS_DATA } from "./src/assets/data";

async function checkImageExists(url: string, timeout = 5000): Promise<boolean> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(url, {
      method: "HEAD",
      signal: controller.signal,
    });
    return res.ok;
  } catch (err) {
    return false;
  } finally {
    clearTimeout(id);
  }
}

async function main() {
  const allIds = new Set<string>();
  const childRefs = new Set<string>();
  const idCount: Record<string, number> = {};
  const brokenImages: string[] = [];

  for (const node of TIPOS_DATA) {
    allIds.add(node.id);
    idCount[node.id] = (idCount[node.id] || 0) + 1;

    for (const child of node.children) {
      childRefs.add(child);
    }

    for (const item of node.content || []) {
      if (item.type === "img" && typeof item.value === "string") {
        const exists = await checkImageExists(item.value, 5000); // 5 segundos de timeout
        if (!exists) {
          console.log(`${node.id}/${node.name} - ${item.value}`);
          brokenImages.push(`${node.id}/${node.name} - ${item.value}`);
        }
      }
    }
  }

  const orphans = [...allIds].filter(id => !childRefs.has(id));
  const invalidChildren = [...childRefs].filter(childId => !allIds.has(childId));
  const repeatedIds = Object.entries(idCount)
    .filter(([_, count]) => count > 1)
    .map(([id]) => id);

  console.log("📌 NODOS SIN PADRE:", orphans);
  console.log("📌 CHILDREN QUE NO EXISTEN:", invalidChildren);
  console.log("📌 IDS REPETIDOS:", repeatedIds);
  console.log("⚠️  IMÁGENES ROTAS:");
  console.log(brokenImages.join("\n"));
}

main();
