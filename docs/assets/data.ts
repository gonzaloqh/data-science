export const TIPOS_DATA : TopicNode[] = [
    {
      id: "main",
      title: "MAE DataScience",
      subtitle: "Resumen de la carrera de Data Science",
      content: [
        {
            type: "img",
            value: "https://postgrado.ucsp.edu.pe/wp-content/uploads/2023/01/banner-fc-ciencia-datos.jpg"
        },
        {
          type: "text",
          value: "Resumen MAE DataScience es una recopilación estructurada de los principales conceptos, métodos y aplicaciones dentro del ámbito de la Inteligencia Artificial (IA), organizada por tópicos clave. Esta app está diseñada como una guía de referencia rápida y educativa para estudiantes, profesionales y entusiastas del área, cubriendo desde fundamentos teóricos hasta enfoques prácticos actuales en machine learning, deep learning, procesamiento de lenguaje natural y más. Cada sección busca presentar información clara, concisa y contextualizada, facilitando el aprendizaje continuo y la consulta ágil de temas esenciales en ciencia de datos e IA."
        }
      ],
      children: ["estadistica", "data", "modelos_de_ia", "topicos_de_inteligencia_artificial", "mlops_y_automatizacion"]
    },
{
  id: "estadistica",
  title: "Estadística",
  subtitle: "Disciplina para recolectar, analizar e interpretar datos",
  content: [
    {
      type: "text",
      value:
        "La estadística es una rama de las matemáticas que se enfoca en el estudio de datos. Proporciona métodos para recopilar, organizar, analizar e interpretar información con el fin de describir fenómenos, identificar patrones y tomar decisiones informadas. Es fundamental en ciencia de datos, tanto en su vertiente descriptiva como en la inferencial."
    }
  ],
  children: [
    "fundamentos_matematicos",
    "probabilidad_y_estadistica",
    "series_temporales",
    "simulacion_y_metodos_estocasticos"
  ]
}
,{
  id: "fundamentos_matematicos",
  title: "Fundamentos Matemáticos",
  subtitle: "Base teórica esencial para el análisis y modelado de datos",
  content: [
    {
      type: "text",
      value:
        "Los fundamentos matemáticos constituyen el conjunto de conocimientos esenciales que sustentan el análisis cuantitativo en ciencia de datos. Incluyen conceptos como álgebra lineal, cálculo, teoría de funciones y lógica matemática, los cuales son necesarios para comprender y desarrollar modelos, algoritmos y métodos estadísticos complejos."
    }
  ],
  children: [
    "sistemas_de_ecuaciones",
    "fundamentos_estadisticos"
  ]
},
{
  id: "sistemas_de_ecuaciones",
  title: "Sistemas de Ecuaciones",
  subtitle: "Resolución algebraica de múltiples incógnitas relacionadas",
  content: [
    {
      type: "text",
      value:
        "Los sistemas de ecuaciones lineales son fundamentales en numerosos problemas de ciencia de datos, especialmente en el desarrollo y solución de modelos matemáticos. Su resolución permite encontrar los valores de variables que satisfacen múltiples ecuaciones simultáneamente. Métodos como la eliminación gaussiana, y las descomposiciones LU y QR, permiten resolver estos sistemas de manera eficiente, incluso cuando se trata de grandes volúmenes de datos o matrices dispersas."
    }
  ],
  children: [
    "descomposicion_lu",
    "descomposicion_qr"
  ]
}
,{
  id: "descomposicion_lu",
  title: "Descomposición LU",
  subtitle: "Factorización de matrices en componentes triangulares",
  content: [
    {
      type: "text",
      value:
        "La descomposición LU es un método de factorización de matrices que expresa una matriz cuadrada como el producto de dos matrices: una triangular inferior (L) y una triangular superior (U). Es fundamental para resolver sistemas de ecuaciones lineales, calcular determinantes y encontrar inversas de matrices de forma eficiente."
    },
    {
      type: "img",
      value: "https://media.licdn.com/dms/image/v2/D5612AQFF13MFM2qEWA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1728843684319?e=2147483647&v=beta&t=mL_EIkzY9eDw1qdUdd7hTAOG_xKjzR-kV0PC_j0r-yo"
    },
    {
      type: "text",
      value:
        "Este método reduce la complejidad computacional al evitar la necesidad de trabajar directamente con la matriz original en cada paso del proceso. Se aplica ampliamente en álgebra lineal numérica y análisis matricial en ciencia de datos, machine learning e ingeniería."
    }
  ],
  children: []
}
,{
  id: "descomposicion_qr",
  title: "Descomposición QR",
  subtitle: "Factorización de matrices en ortogonales y triangulares",
  content: [
    {
      type: "text",
      value:
        "La descomposición QR es una técnica de factorización matricial que expresa una matriz como el producto de una matriz ortogonal (Q) y una matriz triangular superior (R). Es especialmente útil en la resolución de sistemas sobredeterminados, es decir, aquellos con más ecuaciones que incógnitas."
    },
    {
      type: "img",
      value: "https://i.ytimg.com/vi/NqSjmb9UWzc/maxresdefault.jpg"
    },
    {
      type: "text",
      value:
        "Este método es ampliamente utilizado en algoritmos de regresión lineal, reducción de dimensiones y optimización numérica, ya que proporciona una base más estable numéricamente que otros métodos como la inversa de matrices."
    }
  ],
  children: []
},
{
  id: "fundamentos_estadisticos",
  title: "Fundamentos Estadísticos",
  subtitle: "Conceptos clave para describir y analizar distribuciones de datos",
  content: [
    {
      type: "text",
      value:
        "Los fundamentos estadísticos proporcionan las herramientas esenciales para describir y resumir conjuntos de datos. Estos conceptos permiten cuantificar características como tendencia central, dispersión y forma de una distribución, facilitando el análisis exploratorio y la toma de decisiones informadas."
    },
    {
      type: "text",
      value:
        "Entre los elementos clave se encuentran el valor esperado o esperanza matemática, que representa el promedio teórico; la varianza y la desviación estándar, que miden la dispersión; y los cuantiles, que permiten segmentar los datos en proporciones significativas."
    },
    {
      type: "text",
      value:
        "Estos conceptos son también la base para desarrollos más avanzados como la inferencia estadística y el modelado probabilístico. El teorema central del límite, en particular, justifica el uso de distribuciones normales en muchas aplicaciones prácticas."
    }
  ],
  children: [
    "esperanza_matematica_valor_esperado",
    "cuantiles",
    "varianza",
    "desviacion_estandar",
    "teorema_central_del_limite"
  ]
}
,

{
  id: "esperanza_matematica_valor_esperado",
  title: "Esperanza Matemática o Valor Esperado",
  subtitle: "Promedio ponderado de los posibles resultados de una variable aleatoria",
  content: [
    {
      type: "text",
      value:
        "La esperanza matemática, también conocida como valor esperado, representa el promedio teórico de una variable aleatoria, ponderado por las probabilidades de ocurrencia de cada valor. Es un concepto fundamental en probabilidad y estadística, ya que resume en un solo número el comportamiento central de una distribución."
    },
    {
      type: "img",
      value: "https://www.formulasexplicadas.com/wp-content/uploads/2025/06/esperanza-matematica-o-valor-esperado.png"
    },
    {
      type: "text",
      value:
        "Se utiliza ampliamente en modelos probabilísticos, teoría de decisiones, economía y machine learning, para predecir resultados esperados o definir criterios óptimos en presencia de incertidumbre."
    }
  ],
  children: []
},
{
  id: "cuantiles",
  title: "Cuantiles",
  subtitle: "Medidas que dividen una distribución ordenada en partes iguales",
  content: [
    {
      type: "text",
      value:
        "Los cuantiles son valores que dividen un conjunto de datos ordenados en intervalos con igual número de observaciones. Entre los más comunes están los cuartiles (que dividen en cuatro partes), los deciles (diez partes) y los percentiles (cien partes). Son útiles para analizar la dispersión y posición relativa de los datos dentro de una distribución."
    },
    {
      type: "img",
      value: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Boxplot_vs_PDF.svg/640px-Boxplot_vs_PDF.svg.png"
    },
    {
      type: "text",
      value:
        "Los cuantiles permiten identificar valores atípicos, comprender la simetría de una distribución y comparar grupos. Se utilizan frecuentemente en estadística descriptiva, análisis exploratorio y visualizaciones como los diagramas de caja (boxplots)."
    }
  ],
  children: []
}
,{
  id: "varianza",
  title: "Varianza",
  subtitle: "Medida de la dispersión de los datos respecto a su media",
  content: [
    {
      type: "text",
      value:
        "La varianza es una medida estadística que cuantifica la dispersión de un conjunto de datos respecto a su media. Se calcula como el promedio de los cuadrados de las diferencias entre cada valor y la media del conjunto. Cuanto mayor sea la varianza, más dispersos están los datos; si la varianza es baja, los datos están más concentrados alrededor del promedio."
    },
    {
      type: "img",
      value: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZabje8d6TBXY-w36u8S_v2Und9fpnNHGFXQ&s"
    },
    {
      type: "text",
      value:
        "La varianza es una herramienta clave en estadística descriptiva, teoría de la probabilidad y modelos estadísticos, y sirve de base para otros conceptos como la desviación estándar, la covarianza y el análisis de varianza (ANOVA)."
    }
  ],
  children: []
}
,
{
  id: "desviacion_estandar",
  title: "Desviación Estándar",
  subtitle: "Magnitud promedio de variación respecto a la media",
  content: [
    {
      type: "text",
      value:
        "La desviación estándar es una medida de dispersión que indica cuánto se alejan, en promedio, los valores de un conjunto de datos respecto a su media. Se expresa en las mismas unidades que los datos, lo que la hace especialmente útil para interpretar variabilidad en contextos reales."
    },
    {
      type: "img",
      value: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZmuxo7adnO0p8J8aAUOYszJTwhI41btt4hA&s"
    },
    {
      type: "text",
      value:
        "Una desviación estándar baja indica que los datos están agrupados cerca de la media, mientras que una alta sugiere mayor dispersión. Es ampliamente utilizada en análisis estadístico, control de calidad, finanzas y machine learning para cuantificar la incertidumbre o el riesgo."
    }
  ],
  children: []
}
,
{
  id: "teorema_central_del_limite",
  title: "Teorema Central del Límite",
  subtitle: "Base teórica de la inferencia estadística basada en medias",
  content: [
    {
      type: "text",
      value:
        "El teorema central del límite establece que, bajo ciertas condiciones, la distribución de las medias muestrales de una variable aleatoria se aproxima a una distribución normal a medida que el tamaño de la muestra aumenta, independientemente de la distribución original de los datos. Este principio es fundamental en estadística inferencial."
    },
    {
      type: "img",
      value: "https://www.proferecursos.com/wp-content/uploads/Que-es-el-Teorema-Central-del-Limite.jpg"
    },
    {
      type: "text",
      value:
        "Gracias al teorema central del límite, se pueden utilizar herramientas basadas en la normalidad (como intervalos de confianza o tests de hipótesis) incluso cuando los datos no siguen una distribución normal, siempre que se trabaje con muestras suficientemente grandes."
    }
  ],
  children: []
}
,
{
  id: "probabilidad_y_estadistica",
  title: "Probabilidad y Estadística",
  subtitle: "Herramientas fundamentales para modelar incertidumbre y analizar datos",
  content: [
    {
      type: "text",
      value:
        "La probabilidad y la estadística son dos ramas complementarias de las matemáticas que permiten modelar fenómenos aleatorios, analizar datos y tomar decisiones informadas en presencia de incertidumbre. Mientras que la probabilidad proporciona un marco teórico para entender el comportamiento de eventos aleatorios, la estadística se enfoca en extraer conclusiones a partir de datos observados."
    },
    {
      type: "text",
      value:
        "En ciencia de datos, estos campos son esenciales para diseñar experimentos, estimar parámetros, validar modelos y cuantificar el grado de certeza en los resultados. Conceptos como variables aleatorias, distribuciones de probabilidad y procesos estocásticos permiten representar la variabilidad inherente a los datos."
    },
    {
      type: "text",
      value:
        "La integración de probabilidad y estadística habilita el desarrollo de algoritmos robustos, inferencias confiables y análisis predictivos sólidos, lo que constituye la base matemática para gran parte del aprendizaje automático, la simulación y la modelización en data science."
    }
  ],
  children: [
    "teoria_de_probabilidad",
    "variables_aleatorias",
    "distribuciones_de_probabilidad",
    "procesos_estocasticos"
  ]
}
,
{
  id: "teoria_de_probabilidad",
  title: "Teoría de Probabilidad",
  subtitle: "Marco matemático para modelar la incertidumbre",
  content: [
    {
      type: "text",
      value:
        "La teoría de probabilidad es una rama de las matemáticas que estudia fenómenos aleatorios y cuantifica la incertidumbre asociada a ellos. A través de un conjunto de axiomas y reglas, permite asignar probabilidades a eventos, modelar sistemas inciertos y realizar inferencias cuantificables sobre el comportamiento de variables aleatorias."
    },
    {
      type: "text",
      value:
        "Esta teoría proporciona las bases para muchos métodos estadísticos y algoritmos en ciencia de datos, incluyendo inferencia bayesiana, simulaciones, y procesos estocásticos. Sus fundamentos se basan en conceptos como espacio muestral, eventos, y funciones de probabilidad."
    },
    {
      type: "text",
      value:
        "Comprender la teoría de probabilidad es esencial para construir modelos robustos en áreas como aprendizaje automático, análisis predictivo, riesgos financieros y sistemas complejos donde el comportamiento no es determinista."
    }
  ],
  children: [
    "teoria_de_probabilidad_fundamentos",
    "teoria_de_probabilidad_probabilidades",
    "teoria_de_probabilidad_conteo"
  ]
},

{
  id: "teoria_de_probabilidad_fundamentos",
  title: "Fundamentos de la Teoría de Probabilidad",
  subtitle: "Conceptos básicos para modelar fenómenos aleatorios",
  content: [
    {
      type: "text",
      value:
        "Los fundamentos de la teoría de probabilidad sientan las bases para el análisis de eventos inciertos mediante un enfoque matemático riguroso. Comprenden la definición del espacio muestral, la descripción formal de eventos aleatorios y el establecimiento de reglas para asignar probabilidades coherentes."
    },
    {
      type: "text",
      value:
        "Estos conceptos permiten construir modelos probabilísticos que representan fenómenos reales de manera cuantitativa. Aspectos clave incluyen la noción de independencia entre eventos, la combinación de eventos mediante operaciones de conjunto, y la interpretación frecuentista y axiomática de la probabilidad."
    },
    {
      type: "text",
      value:
        "Además, principios como la ley de los grandes números ofrecen una conexión entre las probabilidades teóricas y los resultados empíricos, justificando el uso de la estadística en contextos prácticos. Estos fundamentos son esenciales en ciencia de datos, inteligencia artificial y toma de decisiones bajo incertidumbre."
    }
  ],
  children: [
    "espacio_muestral",
    "eventos_aleatorios",
    "independencia",
    "ley_de_los_grandes_numeros"
  ]
},
{
  id: "espacio_muestral",
  title: "Espacio Muestral",
  subtitle: "Conjunto de todos los resultados posibles de un experimento aleatorio",
  content: [
    {
      type: "text",
      value:
        "El espacio muestral es el conjunto de todos los posibles resultados que pueden obtenerse al realizar un experimento aleatorio. Se representa comúnmente con la letra griega Ω (omega) y constituye la base sobre la cual se definen eventos y se asignan probabilidades."
    },
    {
      type: "img",
      value: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-5k6VOlpcJnrdXwXHGQWz5pQG11uzpveJYQ&s"
    },
    {
      type: "text",
      value:
        "Por ejemplo, al lanzar un dado, el espacio muestral es Ω = {1, 2, 3, 4, 5, 6}. Cada subconjunto del espacio muestral representa un evento, y el análisis de estos permite construir modelos probabilísticos. El concepto de espacio muestral es esencial para definir la probabilidad de eventos en cualquier contexto estadístico."
    }
  ],
  children: []
}
,
{
  id: "eventos_aleatorios",
  title: "Eventos Aleatorios",
  subtitle: "Subconjuntos del espacio muestral que representan posibles resultados",
  content: [
    {
      type: "text",
      value:
        "Un evento aleatorio es cualquier subconjunto del espacio muestral que representa uno o más resultados posibles de un experimento. Por ejemplo, al lanzar un dado, el evento 'obtener un número par' corresponde al conjunto {2, 4, 6}. Los eventos permiten describir situaciones específicas que nos interesan analizar o predecir."
    },
    {
      type: "text",
      value:
        "Los eventos pueden clasificarse como simples (formados por un único resultado) o compuestos (formados por múltiples resultados). Además, se pueden combinar mediante operaciones de conjuntos como la unión, intersección y complemento, lo que permite construir eventos más complejos."
    },
    {
      type: "text",
      value:
        "El estudio de eventos aleatorios es fundamental para asignar probabilidades, evaluar riesgos, y modelar sistemas inciertos. Su análisis es clave en teoría de la probabilidad, inferencia estadística y algoritmos de aprendizaje probabilístico."
    }
  ],
  children: []
}
,
{
  id: "independencia",
  title: "Independencia de Eventos",
  subtitle: "Relación entre eventos donde la ocurrencia de uno no afecta al otro",
  content: [
    {
      type: "text",
      value:
        "Dos eventos se consideran independientes cuando la ocurrencia de uno no afecta la probabilidad de ocurrencia del otro. Matemáticamente, A y B son independientes si se cumple que P(A ∩ B) = P(A) × P(B). Esta propiedad es esencial en la modelización de fenómenos donde los eventos no tienen influencia mutua."
    },
    {
      type: "text",
      value:
        "Por ejemplo, al lanzar dos monedas, el resultado de una no afecta al de la otra, por lo que los eventos 'cara en la primera moneda' y 'cara en la segunda moneda' son independientes. En cambio, si el resultado de un evento condiciona al otro, se dice que los eventos son dependientes."
    },
    {
      type: "text",
      value:
        "La independencia es un concepto clave en teoría de la probabilidad y aparece frecuentemente en algoritmos de aprendizaje automático, inferencia estadística, teoría bayesiana y simulaciones. Asumir independencia permite simplificar modelos, aunque hacerlo incorrectamente puede llevar a conclusiones erróneas."
    }
  ],
  children: []
}
,
{
  id: "ley_de_los_grandes_numeros",
  title: "Ley de los Grandes Números",
  subtitle: "Convergencia de la media muestral hacia la media poblacional",
  content: [
    {
      type: "text",
      value:
        "La ley de los grandes números establece que, al repetir un experimento aleatorio un gran número de veces, la media de los resultados obtenidos tiende a acercarse a la esperanza matemática (o valor esperado) de la variable aleatoria involucrada. Es decir, la media muestral converge a la media poblacional a medida que el tamaño de la muestra aumenta."
    },
    {
      type: "text",
      value:
        "Esta ley es fundamental en estadística porque justifica el uso de muestras grandes para hacer inferencias sobre una población. Se utiliza especialmente en simulaciones, muestreo aleatorio, estimación de parámetros y validación de modelos probabilísticos. Cuantas más observaciones se tengan, más confiables serán las estimaciones."
    },
    {
      type: "text",
      value:
        "En la práctica, la ley se usa para establecer cuán representativa es una muestra al estimar promedios o proporciones. Por ejemplo, en Monte Carlo o en estudios poblacionales, nos permite confiar en que nuestros resultados tenderán al valor teórico si el número de repeticiones o tamaño de muestra es suficientemente grande."
    }
  ],
  children: []
},
{
  id: "teoria_de_probabilidad_probabilidades",
  title: "Probabilidades",
  subtitle: "Medida numérica de la certeza o posibilidad de un evento",
  content: [
    {
      type: "text",
      value:
        "La probabilidad es una medida que cuantifica la posibilidad de que ocurra un evento aleatorio. Se expresa como un número entre 0 y 1, donde 0 representa imposibilidad y 1 certeza. Esta medida se asigna en base a modelos teóricos, frecuencias observadas o creencias subjetivas, según el enfoque utilizado."
    },
    {
      type: "text",
      value:
        "Existen distintas formas de calcular probabilidades, incluyendo la regla de Laplace (cuando todos los resultados son igualmente probables), reglas de adición y multiplicación, así como el uso de árboles de probabilidad o tablas de contingencia en situaciones más complejas."
    },
    {
      type: "text",
      value:
        "El estudio de las probabilidades permite modelar incertidumbre, tomar decisiones informadas y construir modelos estadísticos y de machine learning. Entre sus extensiones se encuentran la probabilidad condicional y los esquemas secuenciales, fundamentales en contextos dinámicos o dependientes."
    }
  ],
  children: [
    "condicionales",
    "secuenciales"
  ]
}
,{
  id: "condicionales",
  title: "Probabilidad Condicional",
  subtitle: "Probabilidad de un evento dado que otro ha ocurrido",
  content: [
    {
      type: "text",
      value:
        "La probabilidad condicional se utiliza para calcular la probabilidad de que ocurra un evento A dado que ya ha ocurrido otro evento B. Se representa como P(A|B) y se interpreta como la probabilidad de A bajo la condición de que B sea cierto. Es clave en contextos donde los eventos no son independientes y uno influye en la ocurrencia del otro."
    },
    {
      type: "text",
      value:
        "La fórmula general es: P(A|B) = P(A ∩ B) / P(B), siempre que P(B) > 0. Esto significa que la probabilidad de A dado B se obtiene dividiendo la probabilidad de que ocurran ambos eventos por la probabilidad de B. Por ejemplo, si el 30% de las personas tienen fiebre y el 10% tienen fiebre y COVID, entonces la probabilidad de tener COVID dado que se tiene fiebre es 10% / 30% = 0.33."
    },
    {
        type: "img",
        value: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAMLjXrPXmv0YIV96B14WDgXk_UL7wZc0dNw&s"
    },
    {
      type: "text",
      value:
        "Este concepto es esencial en análisis de riesgos, diagnóstico médico, sistemas de recomendación y en el Teorema de Bayes. Se aplica cuando la información previa modifica nuestras expectativas sobre un resultado. Por eso, entender la probabilidad condicional es fundamental para modelar dependencias entre variables."
    }
  ],
  children: []
}
,
{
  id: "secuenciales",
  title: "Probabilidades Secuenciales",
  subtitle: "Probabilidades en experimentos que ocurren en múltiples etapas",
  content: [
    {
      type: "text",
      value:
        "Las probabilidades secuenciales se aplican en situaciones donde se realizan experimentos en varias etapas y se desea conocer la probabilidad conjunta de una secuencia de eventos. En estos casos, cada paso puede depender de los resultados anteriores, por lo que se deben considerar las probabilidades condicionales a lo largo del proceso."
    },
    {
      type: "text",
      value:
        "La fórmula general para calcular la probabilidad de una secuencia de eventos dependientes es: P(A ∩ B) = P(A) × P(B | A). Para más etapas, se extiende como: P(A ∩ B ∩ C) = P(A) × P(B | A) × P(C | A ∩ B). Por ejemplo, si sacamos dos cartas sin reemplazo de una baraja, la probabilidad de obtener dos ases seguidos es: P(As₁ ∩ As₂) = (4/52) × (3/51) ≈ 0.0045."
    },
    {
      type: "text",
      value:
        "Se utilizan en contextos como cadenas de decisiones, muestreo sin reemplazo, pruebas sucesivas, juegos de azar, y procesos estocásticos como cadenas de Markov. También son fundamentales en machine learning para modelar procesos secuenciales (como texto o series temporales), donde el estado actual depende del anterior."
    }
  ],
  children: []
}
,{
  id: "teoria_de_probabilidad_conteo",
  title: "Técnicas de Conteo",
  subtitle: "Métodos para contar resultados posibles en eventos compuestos",
  content: [
    {
        type: "img",
        value: "https://i.ytimg.com/vi/nRgol4dhq3U/maxresdefault.jpg"
    },
    {
      type: "text",
      value:
        "Las técnicas de conteo permiten determinar cuántos resultados posibles existen en experimentos sin necesidad de enumerarlos uno a uno. Las dos herramientas más comunes son las permutaciones y las combinaciones. La elección entre ambas depende de si el orden de los elementos importa o no."
    },
    {
      type: "text",
      value:
        "Las permutaciones se usan cuando el orden importa. Por ejemplo, si queremos saber cuántas formas hay de asignar oro, plata y bronce entre 3 finalistas, usamos permutaciones: 3! = 6 formas distintas. La fórmula general para permutaciones de r elementos tomados de un conjunto de n es: P(n, r) = n! / (n - r)!"
    },
    {
      type: "text",
      value:
        "Las combinaciones se usan cuando el orden no importa. Por ejemplo, si queremos saber cuántos grupos de 3 personas pueden formarse a partir de un grupo de 10, usamos combinaciones: C(10, 3) = 120. La fórmula es: C(n, r) = n! / [r!(n - r)!]. Estas técnicas son clave para calcular espacios muestrales y probabilidades en contextos complejos."
    }
  ],
  children: [
    "permutaciones",
    "combinaciones"
  ]
}
,{
  id: "permutaciones",
  title: "Permutaciones",
  subtitle: "Reordenamientos posibles de elementos donde el orden importa",
  content: [
    {
      type: "text",
      value:
        "Las permutaciones son técnicas de conteo utilizadas para calcular el número de formas en que se pueden ordenar un conjunto de elementos. Se utilizan cuando el orden de los elementos es importante. Por ejemplo, en una carrera, no es lo mismo quedar primero que segundo."
    },
    {
      type: "text",
      value:
        "La fórmula general para calcular permutaciones sin repetición de r elementos tomados de un conjunto de n es: P(n, r) = n! / (n - r)!. Cuando se desea permutar todos los elementos del conjunto, la fórmula se simplifica a P(n, n) = n!. Por ejemplo, el número de formas de ordenar 3 libros diferentes es 3! = 6."
    },
    {
      type: "text",
      value:
        "Si los elementos incluyen repeticiones, se usa otra fórmula: P(n; k₁, k₂, ..., kₘ) = n! / (k₁! × k₂! × ... × kₘ!), donde k₁, k₂... son las cantidades de elementos repetidos. Por ejemplo, para la palabra 'ANA', hay 3 letras pero una 'A' se repite dos veces, entonces el número de permutaciones distintas es 3! / 2! = 3."
    },
    {
      type: "text",
      value:
        "Las permutaciones también se aplican en situaciones donde se asignan roles únicos, como en asignación de asientos, contraseñas, códigos o rankings. Si tenés 5 personas y querés ver de cuántas maneras pueden ocupar 3 posiciones diferentes, el resultado sería P(5,3) = 5 × 4 × 3 = 60 formas."
    },
    {
      type: "text",
      value:
        "En el caso de permutaciones con repetición (por ejemplo, formar palabras de longitud r a partir de un conjunto de n símbolos donde cada símbolo puede repetirse), se usa la fórmula: n^r. Si hay 4 dígitos (0-3) y se quieren formar códigos de 3 cifras con repetición, el total es 4^3 = 64."
    }
  ],
  children: [
    "con_repeticion",
    "ciclicas"
  ]
},
{
  id: "con_repeticion",
  title: "Permutaciones con Repetición",
  subtitle: "Conteo de arreglos donde los elementos pueden repetirse",
  content: [
    {
      type: "text",
      value:
        "Las permutaciones con repetición se usan cuando se desea contar cuántas formas distintas existen para ordenar elementos donde algunos pueden repetirse, o cuando se permiten repeticiones al formar secuencias. Este tipo de conteo es clave cuando se trabaja con dígitos, letras o símbolos que se pueden reutilizar."
    },
    {
      type: "text",
      value:
        "Si se tienen n elementos disponibles y se desean formar secuencias de longitud r, permitiendo que los elementos se repitan, se utiliza la fórmula: n^r. Por ejemplo, si se tienen 4 colores y se quiere formar una bandera de 3 franjas (donde se puede repetir el color), hay 4^3 = 64 posibles combinaciones."
    },
    {
      type: "text",
      value:
        "También se aplica en casos como la formación de contraseñas, códigos PIN, placas de autos o combinaciones con letras repetidas. Otra variante son las permutaciones con repetición de elementos dentro de un mismo conjunto, como en la palabra 'MAMA', que tiene 4 letras, con dos 'A' y dos 'M'. Su número de permutaciones distintas se calcula como: 4! / (2! × 2!) = 6."
    }
  ],
  children: []
}
,
{
  id: "ciclicas",
  title: "Permutaciones Cíclicas",
  subtitle: "Conteo de arreglos circulares donde el orden relativo importa",
  content: [
    {
      type: "text",
      value:
        "Las permutaciones cíclicas se utilizan cuando los elementos se organizan en forma circular, como en una mesa redonda. En este tipo de arreglo, las rotaciones se consideran equivalentes, ya que el orden relativo entre los elementos no cambia si se gira la configuración."
    },
    {
      type: "text",
      value:
        "Para calcular el número de permutaciones cíclicas de n elementos distintos, se usa la fórmula: (n – 1)!. Por ejemplo, si se sientan 4 personas en una mesa redonda, hay (4 – 1)! = 3! = 6 formas diferentes de ubicarlas, considerando que rotaciones no cambian la disposición."
    },
    {
      type: "text",
      value:
        "Estas permutaciones aparecen en problemas como asignación de asientos en reuniones, combinaciones de engranajes o diseño de collares. Si hay restricciones adicionales (por ejemplo, simetría por reflexión en un collar), se deben usar técnicas más avanzadas como conteo mediante grupos de simetría."
    }
  ],
  children: []
}
,{
  id: "combinaciones",
  title: "Combinaciones",
  subtitle: "Selección de elementos sin importar el orden",
  content: [
    {
      type: "text",
      value:
        "Las combinaciones se utilizan cuando se desea seleccionar elementos de un conjunto sin importar el orden. A diferencia de las permutaciones, donde cada ordenamiento cuenta como distinto, en las combinaciones solo interesa qué elementos se eligen, no cómo se ordenan."
    },
    {
      type: "text",
      value:
        "La fórmula para calcular el número de combinaciones posibles de r elementos tomados de un conjunto de n es: C(n, r) = n! / (r! × (n – r)!). Por ejemplo, para elegir 3 estudiantes de un grupo de 10 sin importar el orden, hay C(10, 3) = 120 formas distintas de hacerlo."
    },
    {
      type: "text",
      value:
        "Las combinaciones se aplican en contextos como muestreo sin reemplazo, selección de equipos, loterías, análisis de subconjuntos o problemas de optimización donde no se requiere secuenciar los elementos seleccionados."
    }
  ],
  children: [
    "comb_con_repeticion"
  ]
},
{
  id: "comb_con_repeticion",
  title: "Combinaciones con Repetición",
  subtitle: "Selección de elementos permitiendo repeticiones y sin importar el orden",
  content: [
    {
      type: "text",
      value:
        "Las combinaciones con repetición permiten seleccionar elementos de un conjunto cuando está permitido repetirlos, y el orden no importa. Este tipo de conteo se aplica, por ejemplo, al distribuir objetos idénticos entre categorías distintas o al elegir varios elementos del mismo tipo."
    },
    {
      type: "text",
      value:
        "La fórmula general para combinaciones con repetición es: C(n + r – 1, r), donde n es el número de tipos de elementos disponibles y r es la cantidad de elementos a seleccionar. Por ejemplo, si se desea elegir 3 caramelos de entre 5 sabores distintos (y se pueden repetir sabores), hay C(5 + 3 – 1, 3) = C(7, 3) = 35 formas."
    },
    {
      type: "text",
      value:
        "Este tipo de combinaciones es útil en problemas como particiones de enteros, combinatorias de bolsas con reemplazo, o selección de productos cuando hay disponibilidad ilimitada de cada tipo. También aparece en problemas de distribución de recursos entre grupos."
    }
  ],
  children: []
},
{
  id: "variables_aleatorias",
  title: "Variables Aleatorias",
  subtitle: "Funciones que asignan valores numéricos a los resultados de un experimento aleatorio",
  content: [
    {
      type: "text",
      value:
        "Una variable aleatoria es una función que asigna un valor numérico a cada resultado posible de un experimento aleatorio. Permite cuantificar fenómenos inciertos, facilitando el análisis estadístico y probabilístico."
    },
    {
      type: "text",
      value:
        "Existen dos tipos principales: discretas y continuas. Las variables aleatorias discretas toman un número finito o numerable de valores (como el número de caras al lanzar una moneda varias veces), mientras que las continuas pueden asumir cualquier valor dentro de un intervalo (como la altura de una persona)."
    },
    {
      type: "text",
      value:
        "Las variables aleatorias son fundamentales en estadística y ciencia de datos, ya que permiten modelar distribuciones de probabilidad, calcular esperanzas matemáticas, y evaluar riesgos o decisiones bajo incertidumbre."
    }
  ],
  children: [
    "discretas",
    "continuas"
  ]}
,
{
  id: "discretas",
  title: "Variables Aleatorias Discretas",
  subtitle: "Modelos probabilísticos con valores aislados y cuantificables",
  content: [
    {
      type: "text",
      value:
        "Una variable aleatoria discreta es aquella que puede tomar un número finito o contablemente infinito de valores. A cada valor se le asocia una probabilidad específica mediante la función de masa de probabilidad (PMF)."
    },
    {
      type: "text",
      value:
        "Por ejemplo, al lanzar un dado justo, la variable que representa el número obtenido es discreta y toma valores del 1 al 6. Cada uno tiene una probabilidad de 1/6. Además de la PMF, se puede definir una función acumulativa (CDF) que representa la probabilidad de que la variable tome un valor menor o igual a un número dado."
    },
    {
      type: "img",
      value: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Poisson_pmf.svg/640px-Poisson_pmf.svg.png"
    }
  ],
  children: [
    "funcion_de_probabilidad_pmf",
    "funcion_acumulativa_cdf"
  ]
},
{
  id: "continuas",
  title: "Variables Aleatorias Continuas",
  subtitle: "Modelos probabilísticos definidos sobre intervalos continuos",
  content: [
    {
      type: "text",
      value:
        "Una variable aleatoria continua puede tomar un número infinito no contable de valores dentro de un intervalo real. No se asocia una probabilidad directa a un valor puntual, sino a intervalos, mediante la función de densidad de probabilidad (PDF)."
    },
    {
      type: "text",
      value:
        "Ejemplos típicos incluyen la estatura de una persona, el tiempo de espera en una fila o la temperatura diaria. En estos casos, el valor exacto tiene probabilidad cero, pero se puede calcular la probabilidad de que la variable caiga dentro de un rango específico usando la integral de la PDF."
    },
    {
      type: "img",
      value: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Normal_distribution_pdf.svg/640px-Normal_distribution_pdf.svg.png"
    }
  ],
  children: [
    "funcion_de_densidad_pdf",
    "funcion_acumulativa_cdf"
  ]
}
,
{
  id: "funcion_de_probabilidad_pmf",
  title: "Función de Masa de Probabilidad (PMF)",
  subtitle: "Distribución de probabilidades para variables discretas",
  content: [
    {
      type: "text",
      value:
        "La función de masa de probabilidad (PMF, por sus siglas en inglés) describe la probabilidad de que una variable aleatoria discreta tome un valor específico. Es aplicable únicamente a variables discretas, como el número de caras al lanzar monedas o el número de llamadas en una hora."
    },
    {
      type: "text",
      value:
        "Para cada valor posible \( x \), la PMF asigna una probabilidad \( P(X = x) \). La suma de todas estas probabilidades debe ser igual a 1. Por ejemplo, si \( X \) es el resultado de lanzar un dado justo, entonces \( P(X = x) = 1/6 \) para \( x = 1, 2, 3, 4, 5, 6 \)."
    },
    {
      type: "text",
      value:
        "Se utiliza la PMF cuando queremos calcular probabilidades exactas en fenómenos discretos. Es fundamental para distribuciones como Bernoulli, Binomial y Poisson, y permite construir modelos probabilísticos precisos en contextos como muestreo, conteo de eventos, o experimentos repetidos."
    }
  ],
  children: []
},
{
  id: "funcion_acumulativa_cdf",
  title: "Función de Distribución Acumulada (CDF)",
  subtitle: "Probabilidad acumulada hasta un cierto valor",
  content: [
    {
      type: "text",
      value:
        "La función de distribución acumulada (CDF, por sus siglas en inglés) describe la probabilidad de que una variable aleatoria, sea discreta o continua, tome un valor menor o igual a un número dado. Formalmente, \( F(x) = P(X \leq x) \)."
    },
    {
      type: "text",
      value:
        "Se utiliza cuando queremos conocer la probabilidad acumulada hasta cierto punto, por ejemplo: '¿cuál es la probabilidad de que un estudiante obtenga menos de 70 puntos en un examen?' La CDF permite responder preguntas de este tipo de manera directa."
    },
    {
      type: "text",
      value:
        "En variables discretas, la CDF es una función escalonada que suma las probabilidades desde el valor mínimo hasta \( x \). En variables continuas, se obtiene integrando la función de densidad (PDF) desde menos infinito hasta \( x \). Es especialmente útil en análisis de percentiles, cuartiles, o para simular datos."
    }
  ],
  children: []
}
,
{
  id: "funcion_de_densidad_pdf",
  title: "Función de Densidad de Probabilidad (PDF)",
  subtitle: "Herramienta clave para variables aleatorias continuas",
  content: [
    {
      type: "text",
      value:
        "La función de densidad de probabilidad (PDF, por sus siglas en inglés) describe cómo se distribuye la probabilidad a lo largo de los posibles valores de una variable aleatoria continua. No da la probabilidad directa de un valor específico, sino que permite calcular la probabilidad de que una variable caiga dentro de un intervalo."
    },
    {
      type: "text",
      value:
        "Por ejemplo, para una variable con distribución normal estándar, la PDF permite calcular la probabilidad de que el valor esté entre 0 y 1 integrando la función en ese intervalo. Se representa como \( f(x) \), y la probabilidad de que \( X \) esté entre \( a \) y \( b \) se calcula como \( P(a \leq X \leq b) = \\int_a^b f(x) dx \)."
    },
    {
      type: "text",
      value:
        "Se utiliza cuando se modelan fenómenos continuos como tiempos, longitudes o temperaturas. La PDF es útil para estimar probabilidades en intervalos, construir modelos de regresión probabilística y realizar inferencia estadística en contextos como machine learning, bioestadística o ingeniería."
    }
  ],
  children: []
}
,
{
  id: "distribuciones_de_probabilidad",
  title: "Distribuciones de Probabilidad",
  subtitle: "Modelos matemáticos para describir fenómenos aleatorios",
  content: [
    {
      type: "text",
      value:
        "Las distribuciones de probabilidad permiten modelar y comprender el comportamiento de fenómenos aleatorios. Se dividen en dos grandes tipos: discretas y continuas, dependiendo del tipo de variable aleatoria que representan."
    },
    {
      type: "text",
      value:
        "Las distribuciones discretas se aplican cuando los resultados posibles son finitos o contables, como el número de llamadas en una hora. Las continuas se usan para variables que pueden tomar infinitos valores en un intervalo, como la temperatura o el peso."
    }
  ],
  children: [
    "dits_prob_discretas",
    "dits_prob_continuas"
  ]
}
,
{
  id: "dits_prob_discretas",
  title: "Distribuciones de Probabilidad Discretas",
  subtitle: "Modelos para variables aleatorias con valores contables",
  content: [
    {
      type: "text",
      value:
        "Las distribuciones discretas son útiles cuando se modelan eventos que se pueden contar. Son ideales en contextos de conteo de éxitos, fallos o eventos raros en intervalos."
    },
    {
      type: "text",
      value:
        "- **Bernoulli**: Se usa para experimentos con solo dos posibles resultados (éxito o fracaso), como lanzar una moneda.  - **Binomial**: Para modelar la cantidad de éxitos en un número fijo de ensayos independientes, como cuántas veces aparece cara al lanzar una moneda 10 veces.  - **Poisson**: Se aplica a eventos raros en un intervalo de tiempo o espacio, como el número de llamadas a un call center por hora."
    }
  ],
  children: [
    "bernoulli",
    "binomial",
    "poisson"
  ]
}
,
{
  id: "dits_prob_continuas",
  title: "Distribuciones de Probabilidad Continuas",
  subtitle: "Modelos para variables aleatorias que toman infinitos valores",
  content: [
    {
      type: "text",
      value:
        "Estas distribuciones son utilizadas cuando las variables pueden tomar cualquier valor dentro de un rango continuo. Son comunes en mediciones físicas, biológicas o financieras."
    },
    {
      type: "text",
      value:
        "- **Uniforme**: Todos los valores dentro de un intervalo son igualmente probables. Ejemplo: elegir un número al azar entre 0 y 1.  - **Exponencial**: Modela el tiempo entre eventos en un proceso de Poisson. Ejemplo: tiempo entre llegadas de clientes a una tienda.  - **Normal**: Representa fenómenos naturales que tienden a agruparse alrededor de un promedio. Ejemplo: estatura de personas, errores de medición."
    }
  ],
  children: [
    "uniforme",
    "exponencial",
    "normal"
  ]
}
,
{
  id: "bernoulli",
  title: "Distribución Bernoulli",
  subtitle: "Un solo experimento con dos posibles resultados",
  content: [
    {
      type: "text",
      value:
        "La distribución de Bernoulli modela experimentos con solo dos posibles resultados: éxito (1) y fracaso (0), con una probabilidad \( p \) de éxito. Es la base de muchas distribuciones discretas más complejas."
    },
    {
      type: "text",
      value:
        "Ejemplo: lanzar una moneda y registrar si sale cara (éxito) o cruz (fracaso). Si \( X \sim \text{Bernoulli}(p) \), entonces:  \( P(X = 1) = p \), \( P(X = 0) = 1 - p \)."
    },
    {
      type: "img",
      value: "https://www.probabilidadyestadistica.net/wp-content/uploads/2022/12/distribucion-de-bernoulli-formula.png"
    }
  ],
  children: []
}
,
{
  id: "binomial",
  title: "Distribución Binomial",
  subtitle: "Número de éxitos en múltiples ensayos de Bernoulli",
  content: [
    {
      type: "text",
      value:
        "Modela el número de éxitos en \( n \) ensayos independientes de una distribución Bernoulli con probabilidad de éxito \( p \). Es útil cuando se repite el mismo experimento varias veces."
    },
    {
      type: "text",
      value:
        "Ejemplo: ¿Cuántas veces aparece cara al lanzar una moneda 10 veces? Si \( X \sim \text{Binomial}(n, p) \), su fórmula es:  \( P(X = k) = \binom{n}{k} p^k (1-p)^{n-k} \)."
    },
    {
      type: "img",
      value: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Binomial_distribution_pmf.svg/512px-Binomial_distribution_pmf.svg.png"
    }
  ],
  children: []
}
,
{
  id: "poisson",
  title: "Distribución de Poisson",
  subtitle: "Conteo de eventos raros en intervalos fijos",
  content: [
    {
      type: "text",
      value:
        "Modela la cantidad de veces que ocurre un evento en un intervalo fijo de tiempo o espacio, cuando estos eventos ocurren de forma independiente y a una tasa constante \( \lambda \)."
    },
    {
      type: "text",
      value:
        "Ejemplo: número de llamadas que recibe un call center por hora. Si \( X \sim \text{Poisson}(\lambda) \), la fórmula es:  \( P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!} \)."
    },
    {
      type: "img",
      value: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Poisson_pmf.svg/512px-Poisson_pmf.svg.png"
    }
  ],
  children: []
}
,
{
  id: "uniforme",
  title: "Distribución Uniforme Continua",
  subtitle: "Todos los valores del intervalo son igualmente probables",
  content: [
    {
      type: "text",
      value:
        "La distribución uniforme continua asigna igual probabilidad a todos los valores dentro de un intervalo \([a, b]\). Es una de las distribuciones más simples y sirve como base para simulaciones."
    },
    {
      type: "text",
      value:
        "Ejemplo: escoger al azar un número entre 0 y 10. Si \( X \sim \text{Uniforme}(a, b) \), entonces su densidad es:  \( f(x) = \\frac{1}{b-a} \) si \( a \leq x \leq b \)."
    },
    {
      type: "img",
      value: "https://www.lifeder.com/wp-content/uploads/2020/11/distribucion-uniforme-continua.jpg"
    }
  ],
  children: []
}
,
{
  id: "exponencial",
  title: "Distribución Exponencial",
  subtitle: "Tiempo entre eventos en procesos de Poisson",
  content: [
    {
      type: "text",
      value:
        "La distribución exponencial modela el tiempo entre eventos que ocurren aleatoriamente a una tasa constante \( \lambda \). Es común en análisis de supervivencia o sistemas de colas."
    },
    {
      type: "text",
      value:
        "Ejemplo: tiempo entre llegadas de clientes. Si \( X \sim \text{Exponencial}(\lambda) \), su fórmula es:  \( f(x) = \lambda e^{-\lambda x} \) para \( x \geq 0 \)."
    },
    {
      type: "img",
      value: "https://i.ytimg.com/vi/AUap_SdE5iQ/hqdefault.jpg"
    }
  ],
  children: []
}
,
{
  id: "normal",
  title: "Distribución Normal",
  subtitle: "Distribución más común en fenómenos naturales",
  content: [
    {
      type: "text",
      value:
        "La distribución normal modela fenómenos que se agrupan alrededor de un valor medio. Es simétrica, en forma de campana, y fundamental en estadística e inferencia."
    },
    {
      type: "text",
      value:
        "Ejemplo: estatura de personas, errores de medición. Si \( X \sim N(\\mu, \\sigma^2) \), su fórmula es:  \( f(x) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-\\frac{(x - \\mu)^2}{2\\sigma^2}} \)."
    },
    {
      type: "img",
      value: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARcAAAC0CAMAAACJ8pgSAAAA81BMVEX////29vaCgoKPj4/s7OzHx8erq6u1tbW23LFStUH/np7/q6v8/Pzm5ubNzc3u7u7f3994eHjb29ulpaVmZmbc3NyJiYkAAAB3d3eysrKAgIC8vLyVlZWbm5vDw8PU1NTw9/tMTEzm8fhbW1tvb29hYWG11OhDQ0P/AADF3e2jyeLQ5PE/Pz8yMjI0ksbP5PFOncyGuNlyrtSu0OYeHh4nJycji8NiptCTwN3c6/QRERE7lch1w2PF5LxrqtKLutqTzYvO58pAryj/y8v/X1//gYH/PT3/oaS7bybfiG3/a2v/8fH/VFSxeSrbk3f/kZH/ubmN96McAAAQLUlEQVR4nO2dCXujSnaGT7EpmakCBAizCrCQ1d5kWW4vGiXuSW4ydzKT5Ob//5qA3O7WAlUqKCTlRp+fR7YQm1/VcupUnQPAWWedddZZZ5111u9UGP1+hVtwUTPp96pMbcMlbHHwactvxaUn7D5OTRoHF2Si4hUTDApZVb8zl5UCWS5e9Xti5tKqBp25lDI9kCww4jGxe8QtC4x+SC5pmh7wahxcVBkiHTTdVWRdcREgrX8wLpc379Ppcv6UHuqCnOVlAJLzLMer8oKJdiAul4/T15uHxcPbbHqTHuaSPO1LP3ItAiD9aF8OVI+ul6+3xa9/+meAq9nr4iDX5OqPrMIOBDAwEPOA/dHNy9Pq9z/+Q/GSfpteH+KiPFx2dAgu+O3l4eOvFReAp5er7q96+lzepp8V5zsXuHo5QIk5dS5P09vPPz+5FGAeOr/uiXO5XisbP7gUZeiy6wufNpfL6c3PNz+5wPy1jRtgH500F/w+X3u3xiWdvXV75dPmcrNRX9a4wG3XTcwpc1lsdjzrXOBtlnZ67RPmgl8fN95vcOm6Jp0wl6tpuvF+g0tRk26hQ/Fw0fKCg96XiDUK9HJDp1zS6ZZdu8kFHl87vDgPF8PBHgEMvShxP7Z0Om78NtvasMVlh5tQcXDR3dL/guMsSe76FnTsZ1js1JMtLoUpnHZ3eQ4uiQRyAis+oEvF8NrOO+Qy/7a9ZZsLnt1s7yJOHFyQo/ZNZCV2rCRaXG7psB5dT3f8LNtcin26Gw7wtLtJlFhEjzVkxZpRbuiu3cWvu93wDhd43SlTwnSi/fT1crco7HK5femswJwml7Sq6djlgncbIVE6TS6VLccuF7jdbYUE6SS5VPc0FVzg/XF3mxCdJJfrSsukisttV13SSXKpHhNWcakwc8ToFLk8VBeCSi41+7bWKXKpsF1KVXKpMnRE6AS5PNRYJZVcatqi1jpBLvOaPqaaS0ejJK5xQFyMoosxAMY9u7txwKLOiK3msuO+EiMOLthRPQTEim090OxySydcvs1rPqjh0o0fhtPPoAMeesNIVaRySVkXXC5rPf01XOBp24ElQtx+KSC2FuklFxSNOuByUztlVscl7WK+moOL4qA+AYRVKYz1cqVdF/6XdFZbK+q4wOO78Nvg9Hv7uhn2AxNJpR+zk3p0NaudYa3lcvkifvTI1U/jzZcOuODX+l63lksXg4ETs18eKvxRn6rnUmcJttCJcXmk+A3quXRg21G4xH96viDUg4VzWdD8TPVcilYpFXwnFC4ZLiw46sHCuby9U9a1ULjgpeiumlZejNFEoR4smku6pJmuFC7wJnqhUC0XrCDyPTyiVqK5PNV30kDnslgKnsWv5aLEtuPkB21fGM0njQvMBbthKPXIJxAj6sGCuTC6WyoXWgffRBQudxgiei8umEud4+W7qFxEd9UULuHF6H6jvKzispBJAJurCC3BXFLGSh8qF7ihtk3cotp1W71RP3ALWm6um/dRB+uC3hj+AjqXVGxXTeGiXdw/D9bef8RlYQgj4qzcdWLH00x3AZ0LvNX5sxqJZtdtvVc//C/Iswwp8Is/epJILtfLlL4Dg8tC6KiawsXNgv56P12WFxOQW4YekUB4XBZlJP0hBpe66ZVmonBRerq+0e4GrpwQbRLpg0jSyg0i6xF7RpXFhVngeEThYme+ba1vQAQhjJTilSjC47Iemc3Dn/+FsQN1FMEpWvtCfPtg9ks6bb+wXWRXTeEyvPg6Odj46Ok1bX2OS4FLnan2C30UIJILnj0JOAvNq8UpCpfg6/2FST1YHJfqpZVlaTUorg5r6/2tuEES3Y/pbl95U+K47HquExcSuSAz1GCnMsfff29bWCBukETrjzwvO5Cf4bLCfzkBdxAGmt6zgxiNYyC5NAhkcIMouejZ+dDtw2j7mCthXTWFS6IO6G5McVzeKmbGIv0OzJ6jRh6MBw6AlOBxPCFjdFcg8wZIvUPj7WPSmahBEoXL2CjuhXqwKC6VYz7zPobx0BlGDmRmUNRpneSqBcU7uIfAiLSRsVNeKgE3EoWLow1Gh+FSXfxdBXqybSU9aYiKCxlSpLgx1orWxfZDNHBlZO8cs5gK6qopXFDkMfIkieIipJP+kKipR1r7chFqG52kPSpGRaHjESQ5Iv0vIqcLHwStEqKNA0xt41PDAY+AAmGkRqYkMC8O9+JkihVOm+DmEW3+KHey9fLyff0LyEM7NCQDsCnGz0BfjhBgmwC2P0xvLJPyfiOK+fAkpqumcCGqv2HuJsEqLsuPinbPKNcF+WLyBd3QAhXNPjznxVDNRKEBZugYidXD+m6D+0OpmDwotHq0NTzCju6ZaDhSFcvzxcVl0f8RPYLRCHu56fj3OPNHlj20I+xQjqBi3lvU8VGWbRYY2zIVXdOSwjhfVTAh7S694KsxZENPlvXMjpMYciuWI2l3ALAmMauE6rkgjFlZIkVwYUz8JFJhxV2QwPTiGO69keVmUqAEtEMY01D7qX4eNqB+KyuJ4MJYr41HGEP5U6Zvwqu8gogx3Sckiq2eSx/uWA4YAVzwO8NbXbV0gO79YHvQ91AtF+RMRpNJ5/4X6kqghrp+SVuf49jryGpXd7dQumw/rjgyF+HrVlYS4AA/MheOdU6hrtG9hz8lYK76uFzoC8c25eDJ3vu2X1Z2XC71wQC7ypLnvXdetJ6NOioXSjDAjshIjRn985rYs5cMccVlldOyxNYB2ZqQ+ACekCqVMlbc1WVbvx1XPg+9jMtyIzDHppB4tQ4TlbQdDPDnfxnGYE565bgRD9txETersau2GQr447IKLjjpyaX/d9yKS6d5bdo6ernjsiCMinF2svJjtqtHIsz1ej20KzBccVmOrw9MZ+QneV+A31uQJ7ZGuF3SnOP10x0FhP9Qu1mGo3HBnaf+fG9TYI7Ghb+4/Ctjfd22WvmnjsWlMlMSXax1hztqY8Mci0sD24WbS5sVvUfikjaYkubmAvPmo6QjcXlqEJDIz2U3l+TeOg6XRrkm+LnQ4yWpOg6Xz2zLv/zb3/c/iIvL//x7eebLxrk+jsLl+0LbX/7y5ctvf9hXv/71P37de+c//O3Ll5JMY08v5/NJipeBUQyV2j2f5Ht7+Mt/fvny6x/31n/99/77/rHg8tvfG5kDH+J6XlYZl5VkMhDH88sNDbnc/ug/f/lbZ/Xot48zN825ysFlsIrLgjAGTTNWeXGarWdo+h02aHfL+cxmxl0j/0u8WheENK8Rl5uGA8a9uOysNGjoAud8Xpa5Wnnh22W+IKz4TbhcNl24s8HFzmXsb/vBNQL9nSn1t2WTppenfZE8WTfJ+C40nI8M1k3qEW5shG5wyc0wSBS7Z/gRwnEIw8iUTdUIJcPsxRsg0mWTasvVH5VxWZgQA4zmcVlXjRM3bnJR4M62c5Tkqiz7I3OsSiGONGngha69eVsPTYZJh7ZfmltaW1wMxbGt3li3UeDYPdRHWIptKYTcV4fa5oGPDWYfD8yleS3a4uI5maLZQZB8zXR97KIA2ZJmJyMnDFXV3zywSU06MJerFhFClf3R2tLM+kJxzT9+PCyXRZvchJVckLHPofxPvzkol+0n1PCpkV3X9MIH5fKtVRqodS49hejrJcX6qERoAKQy1oO7oB6Sy1W7eNU1LmgMo3ikrtZFrizcEJe/DBRCmem1YrnkFedE/gG5LFrmsVzjouQwxjAZBmMjl8PC+o6GcgaTwI8iN4OLfn/36Dc+h/LhuFxOW04YrXEZSDBGMHGCzPQiuLcTdxBPei4YeR8ia7Qb+FgOILkitPnzQK7+4M8Dmb62XaqzXl4cGA29nquahukM3HuQ+pqTZMkwyJMMTypXZKdLnraXh4vtFIYk6Xskybifl5XyfV1VWuOCx5CECSA/RL0QlAQswx/iRFMGimaBDpXxqlwFlms9A+4TsENV/ljNwDNuTB9nrRenr/dHQ3pivWo9TPe3e7n9LxIh/aK8JMATl4UfBUTCt7Bfvuv2ZW8wPOulVnFZrkk8wOUzs1C4b74gPG9fWqq4ED2x9DJk1/romQ3W/VzvXWI4856bKIxijeg2T1xWKgRLBZdEzkINFeZKWL4YgCv6oU09vOzZxvC0uwPfJAoOQ2wW7V25Yb92N52JyXZaUY+IC31/MtIjPct78V1RyVknuZ0+7uV06N5+uZ3OxaSrqeBiupBruuLGgQpKdI9dehx8qcvZ6z6Ft3MuT/uWXKaquEjg+P24J9vB0FEnWNpj5XM632dI0DGXy7m4dHsVXJAFVs8Ni3Z3GBq+ipgRdqXwzctbytqpUy74avkuLpS+pp/Wf0aZGIy8CZ+6nb2yJk+65HL7vnwSmLSyvf3yQ+nb9JH+hXXHZfH4wrg2pwRyWX1n1MrUFZeCyrvgyEWhXAob7/Xlpv5764RLWlxzLvxB6zQu2OCvsPh6VtxlWv2heC7p9dvLy7cOnnpWz4VM7mVWTrlKLeYvy5vbKqRCueB08fQ+XT7WfQntVM/FMRiJ0+qVXs+ny/nVIt3azve8rMKcRL6GcG/nubn48uHqbb6cvr5db19ClOq5BKbTqLh8KL36NpvO5jdXt+nPksMVl5V4CHqxbevSRz6Pn1yelsvlbP60SAX2y9uq52Koe80i1Qtf3t7MZ8W/8MMI5Y7Lck0SxKrioo24rMX1TkkULsH90Y4KONc/msUmfqlA1ksu3Twvq15dc9kQBxdjjD1l5ccM42T1vKzunj9dpVPlAtqop1uGlysoyFcJ0Q/LhTeepJWOnbfiVHXmUq1WXPSx/ClJZshl7cA8A/sSrD2Y9+B+7hGNGSlTqcLKp0hOFJoMPTKoOyhKzvjckHT6KQxVZuwQsc4w/HmXYgwxHDDOQ5hpBKi5tEpFLCelFTN2sFlnSLiSHewjlsMZMT2vTJe1xbL1mdcwW5+BW4jxaC1M6PeEFZYpbzDOUNwCczRgME5hsE/Bqd493bcaOfSaZuQMnzVyq1a1rCsMnAF9D+VOo36Os77wihRTuRAPy/SKouT082MMDmOy3pCH9FPEgU/fwTEFjntNTdOGxfiAto8lYZt+0waDS2EtsVrm2KE3D3qk0csLRJLbwmGxJcOyEhPo/za7vCAWl6TPrPs9ei2IxxnTT9Nnz1hyKRnltMqNZTeg3hKK731qGUaZp1HB4F7M+KcwZpQXZEeS4IbXMOmdIDLpF8SmSe/RMGHsAIrJnLVHjE6RMHvys84666yzzjrrrLPOai0r9iGpc75Z9PHn71jJs+56iayUrqbCvMeAlDKRCJSuKwORQfG+GOuUTofiY0O0J+l0JamAR8OL/h26jwxXejYuxqOeMhq6k8TOHC1O7h3JvMgzyNzRcOR2uFTgtOTpBZdQhjsy6eG7eBw+A3E0H9vjcGxAaOcmjPQAvipf7aw3ajOh8X9Lfh+Fju7gPyEl07NkgL8COF9xYEuhk5Be8YtkScEFPZOBQS7+/wyB5bxvmLnjkzxAqucp/TKLK+i5lySOpIZGnifEBg/svhx67rHv9qyzzuLQ/wI0HE44WBSMtgAAAABJRU5ErkJggg=="
    }
  ],
  children: []
}
,
{
  id: "procesos_estocasticos",
  title: "Procesos Estocásticos",
  subtitle: "Modelando fenómenos aleatorios que evolucionan en el tiempo",
  content: [
    {
      type: "text",
      value:
        "Un proceso estocástico es una colección de variables aleatorias indexadas en el tiempo. Se usa para modelar sistemas que evolucionan con incertidumbre, como el clima, precios de acciones o tráfico de red."
    },
    {
      type: "text",
      value:
        "Entre los más utilizados están las cadenas de Markov y los procesos de Poisson. Se diferencian principalmente en su estructura temporal y dependencia entre estados."
    }
  ],
  children: [
    "cadenas_de_markov"  ]
}
,
{
  id: "cadenas_de_markov",
  title: "Cadenas de Markov",
  subtitle: "Procesos con memoria de un solo paso",
  content: [
    {
      type: "text",
      value:
        "Una cadena de Markov es un proceso estocástico donde la probabilidad de pasar al siguiente estado depende únicamente del estado actual (propiedad de Markov). Son útiles en sistemas que evolucionan por etapas, como motores de búsqueda, juegos o procesos de manufactura."
    },
    {
      type: "text",
      value:
        "Formalmente: \( P(X_{n+1} = x | X_n = x_n, X_{n-1} = x_{n-1}, ... ) = P(X_{n+1} = x | X_n = x_n) \)."
    }
  ],
  children: [
    "homogeneas_vs_no_homogeneas",
    "matriz_de_transicion",
    "estado_estacionario",
    "aplicaciones"
  ]
}
,
{
  id: "homogeneas_vs_no_homogeneas",
  title: "Homogéneas vs No Homogéneas",
  subtitle: "¿Cambia la probabilidad de transición en el tiempo?",
  content: [
    {
      type: "text",
      value:
        "Una cadena de Markov es homogénea si sus probabilidades de transición son constantes en el tiempo. Si varían con el tiempo, se dice que es no homogénea."
    },
    {
      type: "text",
      value:
        "Ejemplo:  \n - Homogénea: Probabilidad fija de pasar de soleado a lluvioso. \n - No homogénea: Esa probabilidad cambia si es verano o invierno."
    }
  ],
  children: []
}
,
{
  id: "matriz_de_transicion",
  title: "Matriz de Transición",
  subtitle: "Representación matricial de una cadena de Markov",
  content: [
    {
      type: "text",
      value:
        "La matriz de transición contiene las probabilidades de pasar de un estado a otro. Cada fila representa un estado actual, y las columnas representan estados futuros. La suma de cada fila es 1."
    },
    {
      type: "text",
      value:
        "Ejemplo:  \n\[          P = \\begin{bmatrix}   0.7 & 0.3 \\\\  0.4 & 0.6  \\end{bmatrix}  \]  Donde: estado 1 tiene 70% de permanecer y 30% de ir al estado 2."
    },
    {
      type: "img",
      value: "data:image/png;base64,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"
    }
  ],
  children: []
}
,
{
  id: "estado_estacionario",
  title: "Estado Estacionario",
  subtitle: "Distribución estable a largo plazo",
  content: [
    {
      type: "text",
      value:
        "Un estado estacionario es una distribución de probabilidades que no cambia con el tiempo. Es útil para entender el comportamiento a largo plazo de una cadena de Markov."
    },
    {
      type: "text",
      value:
        "Para encontrarlo, se resuelve el sistema:  \n\[  \\pi P = \\pi \quad \text{y} \quad \\sum \\pi_i = 1  \]  donde \( \\pi \) es el vector estacionario y \( P \) la matriz de transición."
    }
  ],
  children: []
}
,
{
  id: "aplicaciones",
  title: "Aplicaciones de Cadenas de Markov",
  subtitle: "Casos reales donde se utilizan",
  content: [
    {
      type: "text",
      value:
        "- Sistemas de recomendación (como Netflix o YouTube)  \n- Motores de búsqueda (algoritmo PageRank)  \n- Modelado de cadenas de producción  \n- Simulación de procesos biológicos"
    }
  ],
  children: []
}
,
{
  id: "series_temporales",
  title: "Series Temporales",
  subtitle: "Análisis de datos ordenados en el tiempo",
  content: [
    {
      type: "text",
      value:
        "Las series temporales son secuencias de datos observadas en intervalos regulares de tiempo. Se usan para analizar y predecir comportamientos futuros basados en patrones históricos. Son esenciales en finanzas, climatología, economía y control de calidad."
    },
    {
      type: "text",
      value:
        "El análisis incluye identificar componentes como tendencia, estacionalidad, ciclos y ruido, así como aplicar modelos de pronóstico y técnicas de suavizado."
    }
  ],
  children: [
    "caracteristicas_de_las_series",
    "tecnicas_descriptivas",
    "modelos_de_pronostico_forecasting",
    "modelos_de_suavizado",
    "modelado_de_volatilidad"
  ]
}
,{
  id: "caracteristicas_de_las_series",
  title: "Características de las Series Temporales",
  subtitle: "Componentes fundamentales",
  content: [
    {
      type: "text",
      value:
        "Las principales características que definen una serie temporal son:"
    },
    {
      type: "text",
      value: "**Tendencia**: movimiento sostenido hacia arriba o hacia abajo en el largo plazo. Ejemplo: inflación anual."
    },
    {
      type: "text",
      value: "**Estacionalidad**: patrones que se repiten en intervalos regulares, como el aumento en ventas durante diciembre. Puede ser diaria, mensual o anual."
    },
    {
      type: "text",
      value: "**Ruido**: componente aleatorio e impredecible, sin patrón aparente. Representa la variabilidad no explicada por tendencia ni estacionalidad."
    },
    {
      type: "img",
      value: "https://i.ytimg.com/vi/aUwXWGa8jK0/maxresdefault.jpg"
    }
  ],
  children: []
}
,
{
  id: "tecnicas_descriptivas",
  title: "Técnicas Descriptivas",
  subtitle: "Explorando la estructura de la serie",
  content: [
    {
      type: "text",
      value:
        "Antes de modelar una serie temporal, es fundamental comprender su estructura interna. Las funciones de autocorrelación y autocorrelación parcial ayudan a identificar dependencias en el tiempo y guiar la elección de modelos como ARIMA."
    }
  ],
  children: [
    "acf_autocorrelation_function",
    "pacf_partial_acf"
  ]
}
,
{
  id: "acf_autocorrelation_function",
  title: "Función de Autocorrelación (ACF)",
  subtitle: "Medida de dependencia entre valores separados por retardos (lags)",
  content: [
    {
      type: "text",
      value:
        "La ACF mide la correlación entre observaciones separadas por diferentes retrasos (lags). Ayuda a detectar repetición de patrones, estacionalidad y a elegir parámetros para modelos autorregresivos."
    },
    {
      type: "text",
      value:
        "Ejemplo: si la ACF es alta en el lag 12, puede haber un patrón anual en una serie mensual."
    },
    {
      type: "text",
      value:
        "La Función de Autocorrelación (ACF, por sus siglas en inglés) mide cómo se relaciona una serie temporal consigo misma a diferentes desplazamientos de tiempo, o 'lags'. En esencia, evalúa la similitud entre la serie y una versión retrasada de sí misma, lo que permite identificar patrones y dependencias temporales en los datos. "
    },
    {
      type: "img",
      value: "https://support.minitab.com/es-mx/minitab/media/generated-content/images/autocorrelation_wave.png"
    }
  ],
  children: []
}
,
{
  id: "pacf_partial_acf",
  title: "Función de Autocorrelación Parcial (PACF)",
  subtitle: "Correlación controlando efectos intermedios",
  content: [
    {
      type: "text",
      value:
        "La PACF mide la correlación entre una observación y su retardo, eliminando el efecto de los retardos intermedios. Es útil para identificar el orden de modelos AR (autorregresivos)."
    },
    {
      type: "text",
      value:
        "Por ejemplo, si la PACF se corta después del lag 1, puede indicar un modelo AR(1)."
    },
    {
      type: "text",
      value:
        "La Función de Autocorrelación Parcial (PACF) mide la correlación entre una observación en una serie temporal y observaciones anteriores, eliminando la influencia de las observaciones intermedias. Es decir, cuantifica la correlación entre y(t) y y(t-k) después de tener en cuenta las relaciones entre y(t) y y(t-1), y(t-2), ..., y(t-k+1). \n En términos más sencillos, la PACF ayuda a identificar el orden de un modelo autorregresivo (AR) al mostrar la correlación directa entre una observación y sus rezagos anteriores, excluyendo la influencia de otros rezagos intermedios. "
    }
  ],
  children: []
}
,
{
  id: "modelos_de_pronostico_forecasting",
  title: "Modelos de Pronóstico",
  subtitle: "Predicción basada en patrones temporales",
  content: [
    {
      type: "text",
      value: "Los modelos de pronóstico buscan predecir valores futuros de una serie temporal utilizando patrones pasados. Algunos modelos asumen relaciones con observaciones anteriores (AR), otros con errores pasados (MA), y otros combinan ambos (ARMA/ARIMA)."
    },
    {
      type: "text",
      value: "Estos modelos son esenciales en finanzas, logística, economía, producción y más, permitiendo tomar decisiones informadas basadas en proyecciones."
    }
  ],
  children: [
    "ar_autorregresivo",
    "ma_media_movil",
    "arma",
    "arima",
    "sarima_estacional",
    "sarimax_con_variables_exogenas"
  ]
}
,
{
  id: "ar_autorregresivo",
  title: "Modelo Autorregresivo (AR)",
  subtitle: "Predice usando valores pasados",
  content: [
    {
      type: "text",
      value: "El modelo AR predice el valor futuro usando una combinación lineal de valores pasados de la serie. Por ejemplo, en un modelo AR(1):"
    },
    {
      type: "text",
      value: "𝑦ₜ = ϕ * 𝑦ₜ₋₁ + εₜ"
    },
    {
      type: "text",
      value: "Ejemplo: El precio de una acción hoy depende principalmente del precio de ayer. Si hay una fuerte correlación entre días consecutivos, el modelo AR es adecuado."
    },
    {
      type: "img",
      value: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/AR1_process.png/600px-AR1_process.png"
    }
  ],
  children: []
}
,
{
  id: "ma_media_movil",
  title: "Modelo de Media Móvil (MA)",
  subtitle: "Predice usando errores pasados",
  content: [
    {
      type: "text",
      value: "El modelo MA predice un valor usando una combinación de errores (residuos) de predicciones anteriores. Ejemplo para MA(1):"
    },
    {
      type: "text",
      value: "𝑦ₜ = μ + θ * εₜ₋₁ + εₜ"
    },
    {
      type: "text",
      value: "Ejemplo: En una cadena de producción, si el error de ayer en la demanda influye en la predicción de hoy, se puede usar un modelo MA."
    },
    {
      type: "img",
      value: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/MA_model_example.svg/500px-MA_model_example.svg.png"
    }
  ],
  children: []
}
,
{
  id: "arma",
  title: "Modelo ARMA",
  subtitle: "Combina AR y MA",
  content: [
    {
      type: "text",
      value: "El modelo ARMA usa tanto los valores pasados como los errores pasados para predecir el siguiente valor. Ideal para series estacionarias sin tendencia clara."
    },
    {
      type: "text",
      value: "Fórmula general: 𝑦ₜ = ϕ₁𝑦ₜ₋₁ + ... + θ₁εₜ₋₁ + εₜ"
    },
    {
      type: "text",
      value: "Ejemplo: Predecir la temperatura diaria cuando no hay tendencia pero sí patrón aleatorio con algo de memoria."
    }
  ],
  children: []
}
,
{
  id: "arima",
  title: "Modelo ARIMA",
  subtitle: "Para series con tendencia (no estacionarias)",
  content: [
    {
      type: "text",
      value: "ARIMA (AutoRegressive Integrated Moving Average) se usa cuando la serie muestra una tendencia que debe eliminarse (integración)."
    },
    {
      type: "text",
      value: "ARIMA(p,d,q): p = orden AR, d = veces que se diferencia, q = orden MA."
    },
    {
      type: "text",
      value: "Ejemplo: La inflación mensual acumulativa. Hay una tendencia creciente, por lo que se diferencia para estabilizar."
    },
    {
      type: "img",
      value: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ARIMA.svg/600px-ARIMA.svg.png"
    }
  ],
  children: []
}
,
{
  id: "sarima_estacional",
  title: "Modelo SARIMA",
  subtitle: "ARIMA con estacionalidad",
  content: [
    {
      type: "text",
      value: "SARIMA extiende ARIMA incluyendo términos estacionales. Se usa cuando hay patrón que se repite cada cierto número de períodos."
    },
    {
      type: "text",
      value: "Ejemplo: Ventas de helados mensuales, con picos en verano cada año."
    },
    {
      type: "text",
      value: "SARIMA(p,d,q)(P,D,Q)s, donde (P,D,Q)s son los términos estacionales y s es la periodicidad (ej. 12 para mensual con estacionalidad anual)."
    }
  ],
  children: []
}
,
{
  id: "sarimax_con_variables_exogenas",
  title: "Modelo SARIMAX",
  subtitle: "SARIMA + variables externas (exógenas)",
  content: [
    {
      type: "text",
      value: "SARIMAX permite incluir variables exógenas que pueden ayudar a explicar mejor la serie temporal. Ejemplo: ventas influenciadas por publicidad."
    },
    {
      type: "text",
      value: "Ejemplo: Predecir demanda de electricidad considerando la temperatura como variable externa."
    },
    {
      type: "img",
      value: "https://www.machinelearningplus.com/wp-content/uploads/2020/01/SARIMAX.png"
    }
  ],
  children: []
}
,
{
  id: "modelos_de_suavizado",
  title: "Modelos de Suavizado",
  subtitle: "Eliminar ruido para detectar tendencias",
  content: [
    {
      type: "text",
      value: "Los modelos de suavizado buscan reducir el ruido en una serie temporal para identificar patrones subyacentes como tendencias o estacionalidad. Son útiles para datos ruidosos donde las observaciones fluctúan mucho."
    },
    {
      type: "text",
      value: "Se aplican comúnmente en análisis de ventas, precios de acciones o series meteorológicas, cuando queremos eliminar fluctuaciones aleatorias."
    }
  ],
  children: [
    "sma_simple_moving_average",
    "ewma_exponential_weighted_moving_average"
  ]
}
,
{
  id: "sma_simple_moving_average",
  title: "Media Móvil Simple (SMA)",
  subtitle: "Promedio simple de valores recientes",
  content: [
    {
      type: "text",
      value: "La SMA suaviza la serie tomando el promedio de los últimos 'n' valores. Se utiliza para observar tendencias en datos con ruido aleatorio."
    },
    {
      type: "text",
      value: "Fórmula: SMA_t = (yₜ + yₜ₋₁ + ... + yₜ₋ₙ₊₁) / n"
    },
    {
      type: "text",
      value: "Ejemplo: En análisis financiero, una SMA de 7 días puede mostrar la tendencia del precio de una acción sin las variaciones diarias abruptas."
    },
    {
      type: "img",
      value: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Simple_moving_average.svg/600px-Simple_moving_average.svg.png"
    }
  ],
  children: []
}
,
{
  id: "ewma_exponential_weighted_moving_average",
  title: "Media Móvil Exponencial (EWMA)",
  subtitle: "Más peso a valores recientes",
  content: [
    {
      type: "text",
      value: "La EWMA asigna mayor peso a los valores más recientes, lo que permite que el modelo reaccione más rápidamente a los cambios en la serie."
    },
    {
      type: "text",
      value: "Fórmula: EWMAₜ = α*yₜ + (1 - α)*EWMAₜ₋₁, donde 0 < α ≤ 1"
    },
    {
      type: "text",
      value: "Ejemplo: En control de calidad, se usa EWMA para detectar rápidamente cambios en el proceso de producción."
    },
    {
      type: "img",
      value: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Exponential_moving_average.svg/600px-Exponential_moving_average.svg.png"
    }
  ],
  children: []
}
,
{
  id: "modelado_de_volatilidad",
  title: "Modelado de Volatilidad",
  subtitle: "Predecir la variación en la dispersión de los datos",
  content: [
    {
      type: "text",
      value: "El modelado de volatilidad analiza y predice la variabilidad (heterocedasticidad) en series temporales, especialmente en finanzas donde la variación no es constante en el tiempo."
    },
    {
      type: "text",
      value: "Se utiliza cuando los errores no son de varianza constante (no homocedásticos). Muy útil para series como precios de acciones, tasas de interés, criptomonedas, etc."
    }
  ],
  children: [
    "arch",
    "garch",
    "egarch",
    "gjrgarch",
    "tarch"
  ]
}
,
{
  id: "arch",
  title: "ARCH (Autoregressive Conditional Heteroskedasticity)",
  subtitle: "Modelo básico de varianza condicional",
  content: [
    {
      type: "text",
      value: "El modelo ARCH permite que la varianza del error cambie en el tiempo, dependiendo de errores pasados. Ideal para series donde la volatilidad cambia con el tiempo."
    },
    {
      type: "text",
      value: "Ejemplo: Si una acción tuvo una fuerte variación en días recientes, es probable que hoy también tenga alta volatilidad."
    },
    {
      type: "text",
      value: "Fórmula: Var(εₜ) = α₀ + α₁ * εₜ₋₁²"
    }
  ],
  children: []
}
,
{
  id: "garch",
  title: "GARCH (Generalized ARCH)",
  subtitle: "Extensión de ARCH que considera varianzas pasadas",
  content: [
    {
      type: "text",
      value: "El modelo GARCH generaliza el ARCH incluyendo no solo errores pasados, sino también varianzas pasadas. Es uno de los modelos más usados en finanzas para series con alta volatilidad."
    },
    {
      type: "text",
      value: "Fórmula: Var(εₜ) = α₀ + α₁εₜ₋₁² + β₁Var(εₜ₋₁)"
    },
    {
      type: "text",
      value: "Ejemplo: Para predecir la volatilidad futura del precio del petróleo o Bitcoin."
    }
  ],
  children: []
}
,
{
  id: "egarch",
  title: "EGARCH (Exponential GARCH)",
  subtitle: "Permite asimetría en impactos",
  content: [
    {
      type: "text",
      value: "EGARCH modela la volatilidad en escala logarítmica, lo que permite manejar mejor los efectos asimétricos (las caídas del mercado pueden impactar más que las subidas)."
    },
    {
      type: "text",
      value: "Ejemplo: En mercados bursátiles, las noticias negativas suelen causar mayor volatilidad que las positivas."
    }
  ],
  children: []
}
,
{
  id: "gjrgarch",
  title: "GJR-GARCH",
  subtitle: "Modela efectos de choque negativo (leverage)",
  content: [
    {
      type: "text",
      value: "Extensión del GARCH que incorpora el efecto apalancamiento: los shocks negativos incrementan más la volatilidad que los positivos."
    },
    {
      type: "text",
      value: "Ejemplo: Caídas repentinas en el valor de un índice pueden generar más incertidumbre que aumentos equivalentes."
    }
  ],
  children: []
}
,
{
  id: "tarch",
  title: "TARCH (Threshold ARCH)",
  subtitle: "Modelo con umbrales para cambios de volatilidad",
  content: [
    {
      type: "text",
      value: "El modelo TARCH incorpora un umbral que activa diferentes reacciones en la varianza dependiendo del signo del error."
    },
    {
      type: "text",
      value: "Ejemplo: Si un cambio mayor a cierto porcentaje activa una mayor volatilidad futura."
    }
  ],
  children: []
}
,
{
  id: "simulacion_y_metodos_estocasticos",
  title: "Simulación y Métodos Estocásticos",
  subtitle: "Reproducir fenómenos aleatorios para analizar sistemas complejos",
  content: [
    {
      type: "text",
      value: "La simulación estocástica permite modelar fenómenos con incertidumbre o aleatoriedad. Es muy útil cuando los modelos deterministas no pueden capturar la variabilidad del mundo real."
    },
    {
      type: "text",
      value: "Se utilizan técnicas como el Método de Monte Carlo y Cadenas de Markov para representar procesos aleatorios y estimar comportamientos futuros o distribuciones esperadas."
    },
    {
      type: "text",
      value: "Ejemplos típicos: simulación de precios de acciones, estimación del valor en riesgo (VaR), colas en centros de atención, evaluación de riesgos, etc."
    }
  ],
  children: [
    "metodo_de_monte_carlo",
    "cadenas_de_markov"
  ]
}
,
{
  id: "metodo_de_monte_carlo",
  title: "Método de Monte Carlo",
  subtitle: "Simular muchas veces para estimar resultados",
  content: [
    {
      type: "text",
      value: "El método de Monte Carlo consiste en realizar múltiples simulaciones aleatorias de un sistema o proceso para estimar el valor promedio o la distribución de un resultado."
    },
    {
      type: "text",
      value: "Este método es ideal cuando un problema no tiene una solución analítica exacta o cuando queremos comprender la variabilidad de un sistema bajo incertidumbre."
    },
    {
      type: "text",
      value: "Ejemplo 1: Estimar el valor de π simulando puntos aleatorios dentro de un cuadrado y observando cuántos caen dentro de un círculo inscrito."
    },
    {
      type: "text",
      value: "Ejemplo 2: Evaluar el valor de una opción financiera (tipo europeo) generando múltiples trayectorias de precios del activo subyacente usando movimiento browniano."
    },
    {
      type: "text",
      value: "Pasos típicos:\n1. Definir el problema (por ejemplo, estimar un valor o evaluar riesgo).\n2. Generar números aleatorios o distribuciones conocidas.\n3. Simular muchas veces (iteraciones).\n4. Calcular una estimación promedio."
    },
    {
      type: "img",
      value: "https://upload.wikimedia.org/wikipedia/commons/6/6e/MonteCarloIntegrationCircle.svg"
    },
    {
      type: "text",
      value: "El método puede usarse en conjunto con procesos estocásticos, como Cadenas de Markov o Movimiento Browniano, para simular caminos futuros en modelos complejos."
    }
  ],
  children: []
},
{
  id: "data",
  title: "Datos y Ciencia de Datos",
  subtitle: "Desde la recolección hasta el análisis inteligente",
  content: [
    {
      type: "text",
      value: "La gestión de datos es el núcleo de la ciencia de datos moderna. Inicia con la adquisición, sigue con el almacenamiento y tratamiento, y culmina en análisis, visualización o modelado predictivo."
    },
    {
      type: "img",
      value: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" // Icono ilustrativo de big data
    }
  ],
  children: [
    "fundamentos",
    "almacenamiento",
    "tratamiento",
    "visualizacion",
    "procesamiento_de_lenguaje_natural",
    "reduccion_de_dimensionalidad"
  ]
}
,
{
  id: "fundamentos",
  title: "Fundamentos de Datos",
  subtitle: "Principios esenciales del manejo de información masiva",
  content: [
    {
      type: "text",
      value: "Antes de usar los datos, hay que entender su naturaleza. Esto incluye las características del Big Data y los métodos con los que se obtienen los datos."
    }
  ],
  children: [
    "big_data_5_vs",
    "obtencion_de_datos"
  ]
}
,
{
  id: "big_data_5_vs",
  title: "Las 5 Vs del Big Data",
  subtitle: "Características clave de los grandes volúmenes de datos",
  content: [
    {
      type: "text",
      value: "Las 5 Vs definen los desafíos del Big Data:"
    },
    {
      type: "text",
      value: "1. **Volumen**: cantidad masiva de datos.\n2. **Velocidad**: rapidez con que se generan/procesan.\n3. **Variedad**: tipos diversos (texto, imagen, video).\n4. **Veracidad**: calidad y confiabilidad.\n5. **Variabilidad**: cambios y comportamiento inconsistente."
    },
    {
      type: "img",
      value: "https://edteam-media.s3.amazonaws.com/community/original/a64f5e38-7423-4650-a2e8-9658633d6428.jpg"
    }
  ],
  children: []
}
,
{
  id: "obtencion_de_datos",
  title: "Obtención de Datos",
  subtitle: "¿De dónde salen los datos?",
  content: [
    {
      type: "text",
      value: "La recopilación de datos puede hacerse de múltiples fuentes. La elección depende del objetivo del análisis, el tipo de datos requerido, y su disponibilidad."
    },
    {
      type: "text",
      value: "Fuentes comunes incluyen:\n- Páginas web (scraping).\n- APIs públicas.\n- Repositorios abiertos.\n- Datos geoespaciales (GIS)."
    },
    {
      type: "img",
      value: "https://cdn-icons-png.flaticon.com/512/2022/2022355.png"
    }
  ],
  children: [
    "web_scraping",
    "apis",
    "repositorios_publicos",
    "herramientas_geoespaciales"
  ]
}
,
{
  id: "web_scraping",
  title: "Web Scraping",
  subtitle: "Extracción automatizada de información desde sitios web",
  content: [
    {
      type: "text",
      value: "Web scraping permite recolectar datos de páginas web automáticamente. Se usa cuando no hay API disponible o el sitio muestra información útil (ej. precios, noticias, reseñas)."
    },
    {
      type: "text",
      value: "Librerías comunes: `BeautifulSoup`, `Selenium`, `Scrapy`."
    },
    {
      type: "text",
      value: "**Ejemplo**: Extraer títulos de noticias desde un portal web."
    },
    {
      type: "code",
      value: "from bs4 import BeautifulSoup\nimport requests\n\nurl = 'https://news.ycombinator.com/'\nsoup = BeautifulSoup(requests.get(url).text, 'html.parser')\nfor title in soup.select('.titleline'):\n    print(title.get_text())"
    },
    {
      type: "img",
      value: "data:image/jpeg;base64,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"
    }
  ],
  children: []
},
  {
    id: "apis",
    title: "APIs para Obtención de Datos",
    subtitle: "Interfaz automática para acceder a datos en tiempo real",
    content: [
      {
        type: "text",
        value: "Las APIs (Interfaces de Programación de Aplicaciones) permiten acceder programáticamente a datos actualizados, estructurados y confiables desde servicios externos."
      },
      {
        type: "text",
        value: "¿Cuándo usarlas? Cuando necesitas datos dinámicos (por ejemplo, clima, precios, redes sociales) de forma estructurada y legal."
      },
      {
        type: "text",
        value: "**Ejemplo: Obtener datos del clima usando la API de OpenWeatherMap:**"
      },
      {
        type: "code",
        value: "import requests\nAPI_KEY = 'TU_API_KEY'\ncity = 'Lima'\nurl = f'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}'\nresponse = requests.get(url)\ndata = response.json()\nprint(data['weather'][0]['description'])"
      },
      {
        type: "img",
        value: "https://cdn-icons-png.flaticon.com/512/263/263115.png"
      }
    ],
    children: []
  },
  {
    id: "repositorios_publicos",
    title: "Repositorios Públicos de Datos",
    subtitle: "Fuentes abiertas para encontrar datasets listos para análisis",
    content: [
      {
        type: "text",
        value: "Ideales para proyectos de análisis, enseñanza o entrenamiento de modelos. Aquí puedes encontrar datos estructurados, etiquetados y listos para trabajar."
      },
      {
        type: "text",
        value: "Plataformas destacadas:"
      },
      {
        type: "text",
        value: "- **Kaggle**: competiciones, notebooks, datasets para ciencia de datos.\n- **Google Dataset Search**: buscador de conjuntos de datos.\n- **UCI Machine Learning Repository**: clásico repositorio académico.\n- **Gob.pe Datos Abiertos**: datos oficiales de Perú.\n- **European Data Portal**: estadísticas y datos gubernamentales europeos.\n- **NYC Open Data**: datos de servicios públicos de Nueva York.\n- **Datahub.io**: datasets diversos en formatos estándar.\n- **OpenStreetMap (OSM)**: mapas colaborativos del mundo.\n- **OSMNx**: librería Python para descargar/red social geoespacial de OSM."
      },
      {
        type: "code",
        value: "import osmnx as ox\nG = ox.graph_from_place('Lima, Peru', network_type='drive')\nox.plot_graph(G)"
      },
      {
        type: "img",
        value: "https://cdn-icons-png.flaticon.com/512/482/482969.png"
      }
    ],
    children: []
  },
  {
    id: "herramientas_geoespaciales",
    title: "Herramientas Geoespaciales",
    subtitle: "Visualización y análisis de datos espaciales",
    content: [
      {
        type: "text",
        value: "Se usan para trabajar con información geográfica: mapas, rutas, ubicaciones, zonas."
      },
      {
        type: "text",
        value: "**QGIS**: software libre de escritorio para visualizar, editar y analizar datos geoespaciales."
      },
      {
        type: "text",
        value: "**¿Cuándo usarlo?** Cuando necesitas combinar mapas con datos (ej. zonificación, redes de transporte, impacto ambiental)."
      },
      {
        type: "img",
        value: "https://upload.wikimedia.org/wikipedia/commons/1/1c/QGIS_logo_new.svg"
      }
    ],
    children: []
  },
    {
    id: "almacenamiento",
    title: "Almacenamiento de Datos",
    subtitle: "Estrategias y herramientas para guardar y gestionar información",
    content: [
      {
        type: "text",
        value: "El almacenamiento de datos es clave para gestionar grandes volúmenes de información de forma eficiente. Dependiendo del tipo de datos y su uso, se eligen diferentes arquitecturas y tecnologías."
      }
    ],
    children: [
      "bases_de_datos",
      "infraestructura_cloud",
      "big_data__procesamiento_distribuido"
    ]
  },
  {
    id: "bases_de_datos",
    title: "Bases de Datos",
    subtitle: "Relacionales y NoSQL",
    content: [
      {
        type: "text",
        value: "Las bases de datos permiten almacenar, consultar y manipular datos. Se clasifican en relacionales y NoSQL, dependiendo de su estructura y modelo de datos."
      }
    ],
    children: [
      "relacionales",
      "nosql"
    ]
  },
  {
    id: "relacionales",
    title: "Bases de Datos Relacionales",
    subtitle: "Estructura tabular con SQL",
    content: [
      {
        type: "text",
        value: "Las bases de datos relacionales almacenan datos en tablas estructuradas y utilizan SQL para consultar y modificar la información."
      },
      {
        type: "text",
        value: "\n**Ejemplos:** MySQL, PostgreSQL, SQL Server, Oracle."
      },
      {
        type: "text",
        value: "**Ventajas:** Alta integridad de datos, transacciones ACID, madurez y soporte."
      },
      {
        type: "text",
        value: "**Desventajas:** Escalado horizontal complejo, rigidez en cambios de esquema."
      },
      {
        type: "text",
        value: "**Cuándo usar:** Aplicaciones con estructura clara, como sistemas bancarios, ERPs y CRMs."
      }
    ],
    children: []
  },
  {
    id: "nosql",
    title: "Bases de Datos NoSQL",
    subtitle: "Flexibilidad para datos no estructurados",
    content: [
      {
        type: "text",
        value: "Incluyen modelos de documentos, grafos, columnas y clave-valor. Se diseñan para datos con esquemas variables y requieren escalabilidad."
      },
      {
        type: "text",
        value: "\n**Ventajas:** Escalabilidad horizontal, tolerancia a fallos, agilidad en desarrollo."
      },
      {
        type: "text",
        value: "**Desventajas:** Menor soporte a transacciones complejas, menor estandarización."
      },
      {
        type: "text",
        value: "**Cuándo usar:** Grandes volúmenes de datos no estructurados, cambios frecuentes en el modelo."
      }
    ],
    children: [
      "documentos",
      "grafos"
    ]
  },
  {
    id: "documentos",
    title: "Bases de Datos por Documentos",
    subtitle: "Modelo basado en JSON o BSON",
    content: [
      {
        type: "text",
        value: "Almacenan datos como documentos JSON. Permiten estructuras flexibles y jerárquicas."
      },
      {
        type: "text",
        value: "\n**Ejemplos:** MongoDB, CouchDB, Firebase."
      },
      {
        type: "text",
        value: "**Ventajas:** Alta flexibilidad de esquema, buena integración con APIs y apps web."
      },
      {
        type: "text",
        value: "**Desventajas:** Dificultad para mantener relaciones complejas entre documentos."
      },
      {
        type: "text",
        value: "**Cuándo usar:** Aplicaciones con datos semiestructurados, sistemas ágiles, IoT, logs."
      }
    ],
    children: []
  },
  {
    id: "grafos",
    title: "Bases de Datos por Grafos",
    subtitle: "Relaciones representadas como nodos y aristas",
    content: [
      {
        type: "text",
        value: "Diseñadas para manejar relaciones complejas entre entidades, optimizadas para consultas de relaciones."
      },
      {
        type: "text",
        value: "\n**Ejemplos:** Neo4j, ArangoDB, OrientDB."
      },
      {
        type: "text",
        value: "**Ventajas:** Consultas relacionales rápidas, visualización natural de redes."
      },
      {
        type: "text",
        value: "**Desventajas:** No aptas para datos tabulares simples. Menor madurez que SQL."
      },
      {
        type: "text",
        value: "**Cuándo usar:** Redes sociales, sistemas de recomendación, grafos de conocimiento."
      }
    ],
    children: []
  },
    {
    id: "infraestructura_cloud",
    title: "Infraestructura Cloud",
    subtitle: "Soluciones modernas para almacenamiento y análisis de datos",
    content: [
      {
        type: "text",
        value: "La infraestructura en la nube permite almacenar y procesar datos a gran escala sin necesidad de servidores físicos propios. Ofrece escalabilidad, flexibilidad y servicios avanzados administrados por terceros."
      }
    ],
    children: [
      "data_lakes",
      "data_warehouses",
      "servicios_gestionados"
    ]
  },
  {
    id: "data_lakes",
    title: "Data Lakes",
    subtitle: "Almacenamiento masivo en bruto",
    content: [
      {
        type: "text",
        value: "Los Data Lakes almacenan grandes volúmenes de datos sin procesar, en su formato original. Son ideales para big data, machine learning y datos no estructurados."
      },
      {
        type: "text",
        value: "Ventajas: bajo costo, flexibilidad de formatos, útil para ciencia de datos."
      },
      {
        type: "text",
        value: "Desventajas: requiere procesamiento posterior para análisis, puede volverse caótico sin buena gestión."
      },
      {
        type: "text",
        value: "Ejemplos: Amazon S3 + AWS Lake Formation, Azure Data Lake, Google Cloud Storage."
      }
    ],
    children: []
  },
  {
    id: "data_warehouses",
    title: "Data Warehouses",
    subtitle: "Almacenes de datos estructurados",
    content: [
      {
        type: "text",
        value: "Los Data Warehouses integran, transforman y almacenan datos estructurados para análisis y generación de reportes. Son usados para inteligencia de negocios."
      },
      {
        type: "text",
        value: "Ventajas: alto rendimiento en consultas, ideal para dashboards y BI."
      },
      {
        type: "text",
        value: "Desventajas: mayor costo que un Data Lake, menos flexible para datos no estructurados."
      },
      {
        type: "text",
        value: "Ejemplos: Amazon Redshift, Google BigQuery, Snowflake, Azure Synapse."
      }
    ],
    children: []
  },
  {
    id: "servicios_gestionados",
    title: "Servicios Cloud Gestionados",
    subtitle: "Proveedores que simplifican la infraestructura",
    content: [
      {
        type: "text",
        value: "Los servicios gestionados en la nube permiten enfocarse en el análisis de datos y desarrollo, delegando la administración de servidores, seguridad y escalabilidad a proveedores cloud."
      },
      {
        type: "text",
        value: "Proveedores principales: AWS, GCP y Azure. Cada uno ofrece un ecosistema completo de servicios de almacenamiento, bases de datos, machine learning y análisis."
      }
    ],
    children: [
      "aws",
      "gcp",
      "azure"
    ]
  },
  {
    id: "aws",
    title: "Amazon Web Services (AWS)",
    subtitle: "Líder del mercado en servicios cloud",
    content: [
      {
        type: "text",
        value: "AWS ofrece servicios robustos para almacenamiento (S3), cómputo (EC2), bases de datos (RDS, DynamoDB) y análisis (Redshift, Glue)."
      },
      {
        type: "text",
        value: "Ventajas: ecosistema maduro, amplia documentación, soluciones escalables."
      },
      {
        type: "text",
        value: "Desventajas: estructura de precios compleja, curva de aprendizaje."
      },
      {
        type: "img",
        value: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
      }
    ],
    children: []
  },
  {
    id: "gcp",
    title: "Google Cloud Platform (GCP)",
    subtitle: "Analítica avanzada y machine learning",
    content: [
      {
        type: "text",
        value: "GCP es ideal para análisis y ciencia de datos. Ofrece servicios como BigQuery, Dataflow y Vertex AI."
      },
      {
        type: "text",
        value: "Ventajas: rendimiento de BigQuery, integración con herramientas Google, precios por segundo."
      },
      {
        type: "text",
        value: "Desventajas: menor cuota de mercado que AWS, menos servicios en algunas regiones."
      },
      {
        type: "img",
        value: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Cloud_logo.svg"
      }
    ],
    children: []
  },
  {
    id: "azure",
    title: "Microsoft Azure",
    subtitle: "Integración con productos Microsoft",
    content: [
      {
        type: "text",
        value: "Azure es muy popular en entornos corporativos que usan productos Microsoft. Ofrece servicios como Azure Synapse, Cosmos DB y Power BI."
      },
      {
        type: "text",
        value: "Ventajas: integración con Active Directory y Office 365, buen soporte para .NET."
      },
      {
        type: "text",
        value: "Desventajas: interfaz algo compleja, puede tener menor rendimiento comparado a otros en algunos servicios."
      },
      {
        type: "img",
        value: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg"
      }
    ],
    children: []
  },
    {
    id: "big_data__procesamiento_distribuido",
    title: "Big Data y Procesamiento Distribuido",
    subtitle: "Herramientas para el análisis masivo de datos",
    content: [
      {
        type: "text",
        value: "Las tecnologías de Big Data permiten almacenar y procesar grandes volúmenes de información de forma distribuida y eficiente. Se componen de ecosistemas como Hadoop, motores de procesamiento como Spark, y sistemas de mensajería como Kafka."
      }
    ],
    children: [
      "ecosistema_hadoop",
      "frameworks_de_procesamiento",
      "sistemas_de_mensajeria_y_streaming"
    ]
  },
  {
    id: "ecosistema_hadoop",
    title: "Ecosistema Hadoop",
    subtitle: "Plataforma de procesamiento distribuido",
    content: [
      {
        type: "text",
        value: "Hadoop es un ecosistema de herramientas open source para almacenar y procesar grandes volúmenes de datos distribuidos."
      }
    ],
    children: ["hdfs", "hive", "hbase", "sqoop"]
  },
  {
    id: "hdfs",
    title: "HDFS",
    subtitle: "Hadoop Distributed File System",
    content: [
      {
        type: "text",
        value: "Sistema de archivos distribuido diseñado para ejecutarse sobre hardware estándar."
      },
      {
        type: "text",
        value: "Ventajas: tolerancia a fallos, escalabilidad horizontal."
      },
      {
        type: "text",
        value: "Desventajas: alta latencia, no es adecuado para acceso en tiempo real."
      }
    ],
    children: []
  },
  {
    id: "hive",
    title: "Hive",
    subtitle: "SQL sobre Hadoop",
    content: [
      {
        type: "text",
        value: "Permite ejecutar consultas SQL sobre datos almacenados en HDFS."
      },
      {
        type: "text",
        value: "Ventajas: amigable para analistas."
      },
      {
        type: "text",
        value: "Desventajas: latencia, no apto para datos en tiempo real."
      }
    ],
    children: []
  },
  {
    id: "hbase",
    title: "HBase",
    subtitle: "Base de datos NoSQL columnar",
    content: [
      {
        type: "text",
        value: "Base de datos distribuida tipo columna orientada, basada en HDFS."
      },
      {
        type: "text",
        value: "Ventajas: lectura/escritura rápida."
      },
      {
        type: "text",
        value: "Desventajas: complejidad operativa."
      }
    ],
    children: []
  },
  {
    id: "sqoop",
    title: "Sqoop",
    subtitle: "Transferencia entre Hadoop y bases de datos",
    content: [
      {
        type: "text",
        value: "Herramienta para importar/exportar datos entre Hadoop y bases de datos relacionales."
      },
      {
        type: "text",
        value: "Ideal cuando se requiere mover datos de forma masiva."
      }
    ],
    children: []
  },
  {
    id: "frameworks_de_procesamiento",
    title: "Frameworks de Procesamiento",
    subtitle: "Motores para el análisis distribuido",
    content: [
      {
        type: "text",
        value: "Incluyen tecnologías modernas como Spark y Flink, capaces de realizar procesamiento batch y en tiempo real."
      }
    ],
    children: ["spark", "sparksql", "flink", "pyflink"]
  },
  {
    id: "spark",
    title: "Apache Spark",
    subtitle: "Procesamiento distribuido en memoria",
    content: [
      {
        type: "text",
        value: "Procesador de datos rápido y generalista."
      },
      {
        type: "text",
        value: "Ventajas: velocidad, soporte para ML, SQL, streaming."
      },
      {
        type: "text",
        value: "Desventajas: alto consumo de memoria."
      }
    ],
    children: []
  },
  {
    id: "sparksql",
    title: "Spark SQL",
    subtitle: "Consultas SQL sobre Spark",
    content: [
      {
        type: "text",
        value: "Módulo de Spark que permite usar SQL para procesar datos estructurados."
      },
      {
        type: "text",
        value: "Ideal para quienes vienen de bases de datos tradicionales."
      }
    ],
    children: []
  },
  {
    id: "flink",
    title: "Apache Flink",
    subtitle: "Procesamiento de flujos en tiempo real",
    content: [
      {
        type: "text",
        value: "Framework para análisis de datos en tiempo real."
      },
      {
        type: "text",
        value: "Ventajas: muy buen rendimiento en streaming."
      },
      {
        type: "text",
        value: "Desventajas: más complejo de implementar que Spark."
      }
    ],
    children: []
  },
  {
    id: "pyflink",
    title: "PyFlink",
    subtitle: "Flink en Python",
    content: [
      {
        type: "text",
        value: "Permite programar Flink usando Python."
      },
      {
        type: "text",
        value: "Útil para científicos de datos familiarizados con Python."
      }
    ],
    children: []
  },
  {
    id: "sistemas_de_mensajeria_y_streaming",
    title: "Sistemas de Mensajería y Streaming",
    subtitle: "Transmisión continua de datos",
    content: [
      {
        type: "text",
        value: "Se encargan de manejar flujos de datos en tiempo real, necesarios para arquitecturas reactivas."
      }
    ],
    children: ["kafka"]
  },
  {
    id: "kafka",
    title: "Apache Kafka",
    subtitle: "Plataforma de streaming distribuido",
    content: [
      {
        type: "text",
        value: "Kafka permite la publicación, suscripción, almacenamiento y procesamiento de flujos de registros en tiempo real."
      },
      {
        type: "text",
        value: "Ventajas: escalabilidad, tolerancia a fallos, integraciones."
      },
      {
        type: "text",
        value: "Desventajas: curva de aprendizaje, necesita monitoreo."
      }
    ],
    children: []
  },
    {
    id: "tratamiento",
    title: "Tratamiento de Datos",
    subtitle: "Procesos para limpiar, controlar y preparar los datos",
    content: [
      {
        type: "text",
        value: "El tratamiento de datos es una fase esencial en el flujo de trabajo del análisis de datos. Implica la limpieza, transformación, control y adecuación de los datos para su posterior análisis o modelado."
      }
    ],
    children: [
      "limpieza_y_preparacion_de_datos",
      "gestion_y_control",
      "preprocesamiento_de_datos"
    ]
  },
  {
    id: "limpieza_y_preparacion_de_datos",
    title: "Limpieza y Preparación de Datos",
    subtitle: "Mejora de calidad y consistencia",
    content: [
      {
        type: "text",
        value: "Incluye el tratamiento de valores atípicos, valores nulos, duplicados, y errores de entrada. Esta etapa mejora la calidad y la utilidad de los datos antes de su análisis."
      }
    ],
    children: [
      "deteccion_de_outliers",
      "imputacion_y_normalizacion",
      "manejo_de_valores_faltantes"
    ]
  },
  {
    id: "deteccion_de_outliers",
    title: "Detección de Outliers",
    subtitle: "Identificación de valores atípicos",
    content: [
      {
        type: "text",
        value: "Los outliers son datos que se desvían significativamente del resto. Su detección puede hacerse mediante métodos estadísticos (z-score, IQR), visualización (boxplots) o algoritmos como Isolation Forest."
      }
    ],
    children: []
  },
  {
    id: "imputacion_y_normalizacion",
    title: "Imputación y Normalización",
    subtitle: "Corrección y estandarización de datos",
    content: [
      {
        type: "text",
        value: "La imputación se refiere a reemplazar valores faltantes con estimaciones (media, mediana, interpolación). La normalización transforma los datos para que estén en una misma escala (min-max scaling, z-score normalization)."
      }
    ],
    children: []
  },
  {
    id: "manejo_de_valores_faltantes",
    title: "Manejo de Valores Faltantes",
    subtitle: "Tratamiento de datos incompletos",
    content: [
      {
        type: "text",
        value: "Los valores faltantes pueden eliminarse, imputarse, o tratarse mediante modelos predictivos. La estrategia depende del volumen de datos perdidos y del impacto en el análisis."
      }
    ],
    children: []
  },
  {
    id: "gestion_y_control",
    title: "Gestión y Control de Datos",
    subtitle: "Aseguramiento, trazabilidad y seguridad",
    content: [
      {
        type: "text",
        value: "Se refiere al manejo responsable de los datos durante su ciclo de vida, incluyendo control de versiones, acceso y privacidad. Es crucial en ambientes colaborativos y regulados."
      }
    ],
    children: [
      "versionamiento_de_datos",
      "control_de_acceso",
      "privacidad_de_datos"
    ]
  },
  {
    id: "versionamiento_de_datos",
    title: "Versionamiento de Datos",
    subtitle: "Trazabilidad de cambios",
    content: [
      {
        type: "text",
        value: "Permite registrar y rastrear las modificaciones en los conjuntos de datos, facilitando la reproducibilidad y auditoría. Herramientas: DVC, Git-LFS, LakeFS."
      }
    ],
    children: []
  },
  {
    id: "control_de_acceso",
    title: "Control de Acceso",
    subtitle: "Gestión de permisos sobre los datos",
    content: [
      {
        type: "text",
        value: "Define quién puede ver o modificar los datos. Se basa en roles, políticas de autenticación y autorización. Tecnologías comunes: IAM, OAuth, políticas RBAC."
      }
    ],
    children: []
  },
  {
    id: "privacidad_de_datos",
    title: "Privacidad de Datos",
    subtitle: "Protección de datos sensibles",
    content: [
      {
        type: "text",
        value: "Incluye técnicas como anonimización, pseudonimización y encriptación para proteger la identidad de las personas. Regulado por normativas como GDPR y la Ley de Protección de Datos."
      }
    ],
    children: []
  }
,
  {
    id: "preprocesamiento_de_datos",
    title: "Preprocesamiento de Datos",
    subtitle: "Transformación de datos brutos en información útil para modelos de ML",
    content: [
      {
        type: "text",
        value: "El preprocesamiento de datos es una etapa crítica en el flujo de trabajo de ciencia de datos que prepara los datos brutos para su análisis y modelado. Incluye técnicas como limpieza, transformación y normalización."
      },
      {
        type: "text",
        value: "Ventajas: Mejora la calidad de los datos, reduce el tiempo de entrenamiento de modelos y aumenta la precisión de los resultados."
      },
      {
        type: "text",
        value: "Desventajas: Puede introducir sesgos si no se aplica correctamente y consume tiempo en proyectos complejos."
      },
      {
        type: "img",
        value: "https://miro.medium.com/v2/resize:fit:1400/1*ZPGJgZHtD8t1HZ3lo-lD-w.png"
      }
    ],
    children: [
      "analisis_y_limpieza",
      "codificacion_y_representacion",
      "escalado_de_datos",
      "validacion_de_modelos"
    ]
  },
  {
    id: "analisis_y_limpieza",
    title: "Análisis y Limpieza de Datos",
    subtitle: "Identificación y corrección de problemas en conjuntos de datos",
    content: [
      {
        type: "text",
        value: "Proceso que incluye la detección de valores atípicos, manejo de datos faltantes y corrección de inconsistencias."
      },
      {
        type: "text",
        value: "Caso de uso típico: Preparación de datos de clientes para un modelo de churn prediction, donde se deben manejar valores nulos en columnas como 'última compra' o 'frecuencia de visita'."
      },
      {
        type: "code",
        value: "df.dropna(inplace=True)  // Eliminar filas con valores faltantes\ndf.fillna(df.mean(), inplace=True)  // Rellenar con la media"
      }
    ],
    children: [
      "medidas_estadisticas",
      "balanceo_de_datos"
    ]
  },
  {
    id: "medidas_estadisticas",
    title: "Medidas Estadísticas",
    subtitle: "Indicadores cuantitativos para describir conjuntos de datos",
    content: [
      {
        type: "text",
        value: "Herramientas fundamentales para entender la distribución y características centrales de los datos. Permiten detectar sesgos y anomalías."
      },
      {
        type: "img",
        value: "https://www.scribbr.com/wp-content/uploads/2020/09/mean-median-mode.png"
      }
    ],
    children: [
      "media",
      "mediana"
    ]
  },
  {
    id: "media",
    title: "Media Aritmética",
    subtitle: "Promedio de un conjunto de valores",
    content: [
      {
        type: "text",
        value: "Calculada como la suma de todos los valores dividida por el número de elementos. Sensible a valores extremos (outliers)."
      },
      {
        type: "text",
        value: "Caso de uso: Calcular el ingreso promedio en un estudio socioeconómico (aunque puede ser engañosa si hay grandes disparidades)."
      },
      {
        type: "code",
        value: "const salarios = [2500, 3200, 4100, 2750, 150000]\nconst promedio = salarios.reduce((a,b) => a + b, 0) / salarios.length\n// Output: 32670 (afectado por el outlier)"
      }
    ],
    children: []
  },
  {
    id: "mediana",
    title: "Mediana",
    subtitle: "Valor central en un conjunto ordenado",
    content: [
      {
        type: "text",
        value: "Robusta frente a outliers. Para calcularla se ordenan los datos y se toma el valor central (o el promedio de los dos centrales para conjuntos pares)."
      },
      {
        type: "text",
        value: "Ejemplo práctico: Analizar precios de viviendas donde algunas propiedades de lujo distorsionarían la media."
      },
      {
        type: "code",
        value: "function calcularMediana(arr) {\n  const sorted = [...arr].sort((a,b) => a - b)\n  const mid = Math.floor(sorted.length / 2)\n  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid-1] + sorted[mid])/2\n}\n\nconst precios = [350000, 420000, 390000, 410000, 2500000]\nconsole.log(calcularMediana(precios)) // Output: 410000"
      }
    ],
    children: []
  },
  {
    id: "balanceo_de_datos",
    title: "Balanceo de Datos",
    subtitle: "Técnicas para manejar conjuntos desbalanceados",
    content: [
      {
        type: "text",
        value: "Problema común en clasificación cuando una clase domina sobre otras (ej: 95% transacciones legítimas vs 5% fraudes). Esto sesga los modelos hacia la clase mayoritaria."
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig1/AS:779806395908096@1562867643806/Imbalanced-vs-balanced-data-set.ppm"
      }
    ],
    children: [
      "oversampling_ej_smote",
      "undersampling"
    ]
  },
  {
    id: "oversampling_ej_smote",
    title: "Oversampling (SMOTE)",
    subtitle: "Synthetic Minority Over-sampling Technique",
    content: [
      {
        type: "text",
        value: "Crea muestras sintéticas de la clase minoritaria interpolando entre instancias existentes, en lugar de simplemente duplicar datos."
      },
      {
        type: "text",
        value: "Ventaja: Evita el sobreajuste que causaría la duplicación simple. Desventaja: Puede generar muestras poco realistas en espacios de alta dimensión."
      },
      {
        type: "code",
        value: "// Ejemplo conceptual (en la práctica se usaría una librería como imbalanced-learn)\nfunction smote(samples, k, N) {\n  // samples: muestras minoritarias\n  // k: vecinos más cercanos a considerar\n  // N: número de muestras sintéticas a generar\n  // ... implementación del algoritmo SMOTE\n}"
      }
    ],
    children: []
  },
  {
    id: "undersampling",
    title: "Undersampling",
    subtitle: "Reducción de instancias de la clase mayoritaria",
    content: [
      {
        type: "text",
        value: "Técnica que iguala las proporciones eliminando muestras de la clase dominante. Existen variantes como RandomUndersampler o métodos que preservan instancias informativas (Tomek links)."
      },
      {
        type: "text",
        value: "Mejor uso: Cuando el conjunto de datos es muy grande y la clase mayoritaria tiene redundancias. Riesgo: Pérdida de información potencialmente valiosa."
      },
      {
        type: "code",
        value: "function randomUndersample(majoritySamples, minorityCount) {\n  return majoritySamples\n    .sort(() => 0.5 - Math.random())\n    .slice(0, minorityCount)\n}\n\n// Uso:\nconst balancedData = [...minoritySamples, ...randomUndersample(majoritySamples, minoritySamples.length)]"
      }
    ],
    children: []
  },
  {
    id: "codificacion_y_representacion",
    title: "Codificación y Representación de Datos",
    subtitle: "Técnicas para transformar variables categóricas y crear representaciones efectivas",
    content: [
      {
        type: "text",
        value: "Proceso fundamental para adaptar datos no numéricos a formatos que los algoritmos de ML puedan procesar. Determina cómo los modelos interpretarán las características categóricas y de texto."
      },
      {
        type: "text",
        value: "Importancia: Los modelos matemáticos requieren entradas numéricas. Una mala codificación puede introducir relaciones artificiales (ej: asignar valores ordinales arbitrarios a categorías sin orden)."
      },
      {
        type: "img",
        value: "https://www.kdnuggets.com/wp-content/uploads/encoding-categorical-data.jpg"
      }
    ],
    children: [
      "onehot_encoding",
      "label_encoding",
      "representacion_latente__representation_learning"
    ]
  },
  {
    id: "onehot_encoding",
    title: "One-Hot Encoding",
    subtitle: "Representación binaria de categorías",
    content: [
      {
        type: "text",
        value: "Transforma cada categoría en un vector binario donde solo un elemento es '1' (hot) y los demás '0'. Ejemplo para colores: Rojo → [1,0,0], Verde → [0,1,0], Azul → [0,0,1]"
      },
      {
        type: "text",
        value: "Cuándo usarlo:\n- Variables nominales (sin orden inherente)\n- Cuando las categorías son pocas (<15)\n- Para modelos sensibles a distancia como KNN o SVM\n\nCuándo evitarlo:\n- Alta cardinalidad (muchas categorías)\n- Datos jerárquicos con relaciones complejas"
      },
      {
        type: "code",
        value: "// Ejemplo con pandas\nimport pandas as pd\ndf = pd.DataFrame({'color': ['rojo', 'verde', 'azul', 'verde']})\nencoded = pd.get_dummies(df, columns=['color'])"
      },
      {
        type: "img",
        value: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*ggtP4a5YaRxYR3IxU6j4Og.png"
      }
    ],
    children: []
  },
  {
    id: "label_encoding",
    title: "Label Encoding",
    subtitle: "Asignación numérica a categorías",
    content: [
      {
        type: "text",
        value: "Asigna un número único a cada categoría. Ejemplo: Rojo→0, Verde→1, Azul→2. Simple pero peligroso: puede introducir relaciones ordinales falsas que afecten modelos."
      },
      {
        type: "text",
        value: "Casos apropiados:\n- Variables ordinales (ej: 'pequeño', 'mediano', 'grande')\n- Árboles de decisión (menos sensibles a codificación arbitraria)\n- Pre-procesamiento para embeddings\n\nRiesgos:\n- Modelos lineales pueden interpretar números como magnitudes\n- No adecuado para algoritmos basados en distancia"
      },
      {
        type: "code",
        value: "from sklearn.preprocessing import LabelEncoder\nle = LabelEncoder()\ndf['color_encoded'] = le.fit_transform(df['color'])"
      },
      {
        type: "img",
        value: "https://www.analyticsvidhya.com/wp-content/uploads/2020/08/label-encoding.png"
      }
    ],
    children: []
  },
  {
    id: "representacion_latente__representation_learning",
    title: "Representación Latente (Autoencoders/Embeddings)",
    subtitle: "Compresión inteligente de características",
    content: [
      {
        type: "text",
        value: "Técnicas avanzadas que aprenden representaciones compactas preservando relaciones semánticas. Incluye Word2Vec para texto, Autoencoders para imágenes, o Embeddings categóricos."
      },
      {
        type: "text",
        value: "Ventajas clave:\n- Captura relaciones no lineales complejas\n- Reduce dimensionalidad manteniendo información\n- Permite operaciones semánticas (ej: 'rey' - 'hombre' + 'mujer' ≈ 'reina')\n\nAplicaciones:\n- Procesamiento de lenguaje natural\n- Sistemas de recomendación\n- Análisis de imágenes médicas"
      },
      {
        type: "code",
        value: "// Ejemplo conceptual de Autoencoder en TensorFlow\nconst encoder = tf.layers.dense({units: 32, activation: 'relu'}); // Capa latente\nconst decoder = tf.layers.dense({units: 784, activation: 'sigmoid'});\n// Entrenamiento para reconstruir la entrada"
      },
      {
        type: "img",
        value: "https://lilianweng.github.io/lil-log/assets/images/autoencoder-architecture.png"
      }
    ],
    children: []
  },
  {
    id: "escalado_de_datos",
    title: "Escalado de Datos",
    subtitle: "Normalización de rangos numéricos",
    content: [
      {
        type: "text",
        value: "Proceso crítico para asegurar que todas las características contribuyan equitativamente al modelo, especialmente importante para algoritmos sensibles a escalas como SVM, KNN y redes neuronales."
      },
      {
        type: "text",
        value: "Impacto en modelos:\n- Acelera convergencia en descenso de gradiente\n- Evita dominancia de variables con rangos mayores\n- Mejora interpretabilidad de coeficientes\n\nNo siempre necesario:\n- Árboles de decisión y Random Forests son invariantes a escala"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_scaling_importance_001.png"
      }
    ],
    children: [
      "standardscaler",
      "minmaxscaler"
    ]
  },
  {
    id: "standardscaler",
    title: "StandardScaler (Estandarización Z-score)",
    subtitle: "Centrado en 0 con desviación estándar 1",
    content: [
      {
        type: "text",
        value: "Transforma los datos restando la media y dividiendo por la desviación estándar: z = (x - μ) / σ. Resulta en distribución con μ=0 y σ=1."
      },
      {
        type: "text",
        value: "Recomendado cuando:\n- Los datos siguen distribución normal\n- Hay outliers moderados\n- Usando modelos lineales, SVM o PCA\n\nPrecauciones:\n- Sensible a outliers extremos\n- Pierde interpretabilidad directa de las unidades originales"
      },
      {
        type: "code",
        value: "from sklearn.preprocessing import StandardScaler\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)\nprint(f'Media: {X_scaled.mean():.2f}, Desviación: {X_scaled.std():.2f}')"
      },
      {
        type: "img",
        value: "https://www.analyticsvidhya.com/wp-content/uploads/2020/03/standardization-normalization.png"
      }
    ],
    children: []
  },
  {
    id: "minmaxscaler",
    title: "MinMaxScaler",
    subtitle: "Normalización a rango [0, 1]",
    content: [
      {
        type: "text",
        value: "Escala linealmente los datos al intervalo definido: X' = (X - X_min) / (X_max - X_min). Por defecto mapea a [0,1] pero puede configurarse."
      },
      {
        type: "text",
        value: "Ideal para:\n- Datos con distribución no normal\n- Cuando se conocen los límites naturales (ej: pixeles 0-255)\n- Redes neuronales con activaciones sigmoid/tanh\n\nLimitaciones:\n- Muy sensible a outliers\n- No preserva dispersión relativa"
      },
      {
        type: "code",
        value: "from sklearn.preprocessing import MinMaxScaler\nscaler = MinMaxScaler(feature_range=(0, 1))\nX_normalized = scaler.fit_transform(X)"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_all_scaling_001.png"
      }
    ],
    children: []
  },
  {
    id: "validacion_de_modelos",
    title: "Validación de Modelos",
    subtitle: "Técnicas para evaluar performance real",
    content: [
      {
        type: "text",
        value: "Conjunto de métodos para estimar cómo se comportará un modelo con datos no vistos, evitando el sobreajuste (overfitting) y proporcionando métricas confiables."
      },
      {
        type: "text",
        value: "Errores comunes a evitar:\n- Usar los mismos datos para entrenar y evaluar\n- No considerar desbalanceo de clases\n- Ignorar dependencias temporales o espaciales\n\nBest Practices:\n- Separación temprana train/test\n- Validación acorde a la naturaleza de los datos\n- Métricas alineadas con el objetivo de negocio"
      },
      {
        type: "img",
        value: "https://developers.google.com/machine-learning/crash-course/images/WorkflowWithCheckpoint.svg"
      }
    ],
    children: [
      "cross_validation",
      "stratified_kfold"
    ]
  },
  {
    id: "cross_validation",
    title: "Cross-Validation (K-Fold)",
    subtitle: "Validación robusta con particiones rotativas",
    content: [
      {
        type: "text",
        value: "Divide el dataset en K particiones iguales, usando K-1 para entrenar y 1 para validar, rotando hasta que cada partición sirva como test. Promedia los resultados para obtener estimación estable."
      },
      {
        type: "text",
        value: "Ventajas:\n- Maximiza uso de datos limitados\n- Reduce varianza en la estimación\n- Detecta overfitting\n\nElección de K:\n- K=5 o K=10 son valores típicos\n- K pequeño: más rápido pero más varianza\n- K grande: menos sesgo pero más costo computacional"
      },
      {
        type: "code",
        value: "from sklearn.model_selection import cross_val_score\nscores = cross_val_score(model, X, y, cv=5, scoring='accuracy')\nprint(f'Accuracy promedio: {scores.mean():.2f} (±{scores.std():.2f})')"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/grid_search_cross_validation.png"
      }
    ],
    children: []
  },
  {
    id: "stratified_kfold",
    title: "Stratified K-Fold",
    subtitle: "Validación que preserva proporciones de clase",
    content: [
      {
        type: "text",
        value: "Variante de K-Fold que mantiene en cada fold la misma distribución de clases que en el dataset original. Esencial para datos desbalanceados."
      },
      {
        type: "text",
        value: "Por qué estratificar:\n- Evita folds sin representación de clases minoritarias\n- Proporciona estimaciones más realistas\n- Particularmente importante para métricas como recall o F1\n\nImplementación:\n- Automático en scikit-learn con StratifiedKFold\n- Obligatorio cuando el desbalanceo supera 1:10"
      },
      {
        type: "code",
        value: "from sklearn.model_selection import StratifiedKFold\nskf = StratifiedKFold(n_splits=5)\nfor train_idx, test_idx in skf.split(X, y):\n    X_train, X_test = X[train_idx], X[test_idx]\n    y_train, y_test = y[train_idx], y[test_idx]"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/336402347/figure/fig1/AS:812472659349505@1570719981055/Traditional-K-fold-cross-validation-and-stratified-K-fold-cross-validation.png"
      }
    ],
    children: []
  },
  {
    id: "visualizacion",
    title: "Visualización de Datos",
    subtitle: "El arte y ciencia de comunicar insights a través de representaciones gráficas",
    content: [
      {
        type: "text",
        value: "Herramienta fundamental en el análisis exploratorio (EDA) y presentación de resultados. Transforma datos complejos en percepciones intuitivas mediante representaciones visuales efectivas."
      },
      {
        type: "text",
        value: "Principios clave:\n- Mostrar comparaciones y contrastes\n- Revelar patrones y outliers\n- Mantener integridad de los datos\n- Optimizar relación señal/ruido visual"
      },
      {
        type: "img",
        value: "https://datavizcatalogue.com/methods/images/OG_image.png"
      }
    ],
    children: [
      "librerias_en_python",
      "tipos_de_graficos",
      "visualizacion_geoespacial"
    ]
  },
  {
    id: "librerias_en_python",
    title: "Librerías de Visualización en Python",
    subtitle: "Herramientas para cada necesidad de visualización",
    content: [
      {
        type: "text",
        value: "El ecosistema Python ofrece librerías especializadas para diferentes contextos, desde gráficos estáticos hasta dashboards interactivos y visualizaciones geoespaciales."
      },
      {
        type: "text",
        value: "Selección por caso de uso:\n- Análisis rápido: Matplotlib/Seaborn\n- Interactividad: Plotly/Bokeh\n- Geodatos: Geopandas/Pydeck\n- Grafos: NetworkX\n- Web: Vega/D3.js\n- Business Intelligence: Tableau/Power BI connectors"
      },
      {
        type: "img",
        value: "https://www.kdnuggets.com/wp-content/uploads/python-visualization-tools.jpg"
      }
    ],
    children: [
      "matplotlib",
      "pyplot",
      "seaborn",
      "plotly",
      "networkx",
      "pydeck",
      "d3js",
      "vega",
      "tableau"
    ]
  },
  {
    id: "matplotlib",
    title: "Matplotlib",
    subtitle: "La librería fundacional de visualización en Python",
    content: [
      {
        type: "text",
        value: "Biblioteca de bajo nivel que proporciona los cimientos para casi todas las herramientas de visualización en Python. Ofrece control granular sobre cada elemento del gráfico."
      },
      {
        type: "text",
        value: "Fortalezas:\n- Máxima flexibilidad y personalización\n- Exportación a múltiples formatos (PDF, SVG, PNG)\n- Integración con LaTeX para publicaciones académicas\n\nLimitaciones:\n- API verbosa para gráficos complejos\n- Estética básica por defecto\n- Interactividad limitada"
      },
      {
        type: "code",
        value: "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots(figsize=(10,6))\nax.bar(x=['A', 'B', 'C'], height=[15, 30, 10])\nax.set_title('Gráfico Básico')\nax.grid(True, linestyle='--', alpha=0.7)\nplt.savefig('grafico.png', dpi=300, bbox_inches='tight')"
      },
      {
        type: "img",
        value: "https://matplotlib.org/stable/_images/sphx_glr_anatomy_001.png"
      }
    ],
    children: []
  },
  {
    id: "pyplot",
    title: "Pyplot (Matplotlib)",
    subtitle: "Interfaz estilo MATLAB para visualización rápida",
    content: [
      {
        type: "text",
        value: "Módulo dentro de Matplotlib que proporciona una interfaz simplificada para creación rápida de gráficos, ideal para exploración interactiva en notebooks."
      },
      {
        type: "text",
        value: "Características distintivas:\n- Estado interno que mantiene figuras activas\n- Sintaxis concisa para gráficos básicos\n- Ideal para scripting y debugging visual\n\nMejores prácticas:\n- Usar para prototipado rápido\n- Para gráficos complejos, preferir el enfoque OO (fig, ax)"
      },
      {
        type: "code",
        value: "# Ejemplo típico de Pyplot\nplt.figure(figsize=(8,5))\nplt.plot([1,2,3,4], [1,4,9,16], 'ro-')\nplt.xlabel('Eje X')\nplt.ylabel('Eje Y')\nplt.title('Gráfico de Línea')\nplt.show()"
      },
      {
        type: "img",
        value: "https://matplotlib.org/stable/_images/sphx_glr_pyplot_001.png"
      }
    ],
    children: []
  },
  {
    id: "seaborn",
    title: "Seaborn",
    subtitle: "Visualización estadística de alto nivel",
    content: [
      {
        type: "text",
        value: "Biblioteca construida sobre Matplotlib que simplifica la creación de gráficos estadísticos atractivos. Incluye estilos modernos por defecto y funciones para visualización multivariada."
      },
      {
        type: "text",
        value: "Funcionalidades estrella:\n- Gráficos de distribución (distplot, kdeplot)\n- Visualización de matrices de correlación (heatmap)\n- Gráficos categóricos avanzados (violinplot, boxenplot)\n- Integración con DataFrames de Pandas\n\nTemas predefinidos: darkgrid, whitegrid, dark, white, ticks"
      },
      {
        type: "code",
        value: "import seaborn as sns\nsns.set_theme(style=\"whitegrid\")\n\n# Scatterplot con regresión lineal\ntips = sns.load_dataset(\"tips\")\nsns.lmplot(x=\"total_bill\", y=\"tip\", hue=\"smoker\", data=tips)"
      },
      {
        type: "img",
        value: "https://seaborn.pydata.org/_images/relational_4_0.png"
      }
    ],
    children: []
  },
  {
    id: "plotly",
    title: "Plotly",
    subtitle: "Visualización interactiva para la web",
    content: [
      {
        type: "text",
        value: "Librería que genera gráficos interactivos basados en D3.js, perfecta para dashboards y aplicaciones web. Ofrece hover tools, zoom y capacidades de exportación avanzadas."
      },
      {
        type: "text",
        value: "Casos de uso ideales:\n- Aplicaciones con Dash (plotly-dash)\n- Visualización 3D interactiva\n- Mapas coropléticos\n- Gráficos financieros con rangos temporales\n\nEcosistema:\n- Express: API simplificada\n- Graph Objects: Control detallado\n- Figure Factory: Gráficos especializados"
      },
      {
        type: "code",
        value: "import plotly.express as px\n\n# Gráfico interactivo con tooltips\ndf = px.data.gapminder()\nfig = px.scatter(df.query(\"year==2007\"), x=\"gdpPercap\", y=\"lifeExp\",\n                 size=\"pop\", color=\"continent\", hover_name=\"country\",\n                 log_x=True, size_max=60)\nfig.show()"
      },
      {
        type: "img",
        value: "https://plotly.com/python/static/images/plotly-logo.png"
      }
    ],
    children: []
  },
  {
    id: "networkx",
    title: "NetworkX",
    subtitle: "Visualización de grafos y redes complejas",
    content: [
      {
        type: "text",
        value: "Herramienta especializada para análisis y visualización de redes. Permite representar relaciones entre entidades mediante nodos y aristas, con algoritmos de layout para organizar visualmente los grafos."
      },
      {
        type: "text",
        value: "Aplicaciones típicas:\n- Redes sociales (relaciones entre usuarios)\n- Grafos de conocimiento\n- Topologías de red\n- Sistemas de recomendación\n\nLayouts disponibles:\n- spring_layout (Fruchterman-Reingold)\n- circular_layout\n- kamada_kawai_layout\n- spectral_layout"
      },
      {
        type: "code",
        value: "import networkx as nx\nimport matplotlib.pyplot as plt\n\nG = nx.karate_club_graph()\npos = nx.spring_layout(G, seed=42)\nnx.draw(G, pos, with_labels=True, node_color='skyblue', \n        node_size=500, edge_color='gray', width=0.5)\nplt.title(\"Red del Club de Karate Zachary\")\nplt.show()"
      },
      {
        type: "img",
        value: "https://networkx.org/documentation/stable/_images/karate_club.png"
      }
    ],
    children: []
  },
  {
    id: "pydeck",
    title: "Pydeck",
    subtitle: "Visualización geoespacial a escala web",
    content: [
      {
        type: "text",
        value: "Biblioteca de Uber para visualización de grandes conjuntos de datos geoespaciales, construida sobre deck.gl. Soporta millones de puntos de datos con renderizado WebGL."
      },
      {
        type: "text",
        value: "Capacidades avanzadas:\n- Mapas de calor (HeatmapLayer)\n- Gráficos de dispersión 3D (ScatterplotLayer)\n- Rutas y trayectorias (PathLayer)\n- Polígonos personalizados (PolygonLayer)\n\nIntegración con:\n- Geopandas\n- Google Maps/Mapbox\n- Jupyter Notebooks"
      },
      {
        type: "code",
        value: "import pydeck as pdk\n\n# Mapa de calor de accidentes de tráfico\nlayer = pdk.Layer(\n    'HeatmapLayer',\n    data=accident_data,\n    get_position=['lon', 'lat'],\n    opacity=0.6,\n    get_weight='severity',\n    radius_pixels=30)\n\nview_state = pdk.ViewState(\n    latitude=40.7,\n    longitude=-74,\n    zoom=11)\n\npdk.Deck(layers=[layer], initial_view_state=view_state).to_html('heatmap.html')"
      },
      {
        type: "img",
        value: "https://deck.gl/images/what-is-deckgl-illustration.jpg"
      }
    ],
    children: []
  },
  {
    id: "d3js",
    title: "D3.js",
    subtitle: "Visualización basada en datos para la web",
    content: [
      {
        type: "text",
        value: "Librería JavaScript de bajo nivel para crear visualizaciones dinámicas e interactivas en navegadores web. Ofrece control absoluto sobre los elementos SVG y el DOM."
      },
      {
        type: "text",
        value: "Ventajas únicas:\n- Máxima personalización\n- Animaciones y transiciones fluidas\n- Integración con frameworks web modernos\n- Comunidad activa con ejemplos diversos\n\nCurva de aprendizaje:\n- Requiere conocimiento de JS/SVG\n- Paradigma data-binding puede ser desafiante\n- Mejor para visualizaciones custom que librerías de alto nivel"
      },
      {
        type: "code",
        value: "// Ejemplo conceptual (usualmente en JS)\nconst svg = d3.select(\"body\").append(\"svg\");\nsvg.selectAll(\"circle\")\n   .data(data)\n   .enter().append(\"circle\")\n   .attr(\"cx\", d => xScale(d.x))\n   .attr(\"cy\", d => yScale(d.y))\n   .attr(\"r\", 5);"
      },
      {
        type: "img",
        value: "https://d3js.org/logo.svg"
      }
    ],
    children: []
  },
  {
    id: "vega",
    title: "Vega/Vega-Lite",
    subtitle: "Gramática de visualización declarativa",
    content: [
      {
        type: "text",
        value: "Enfoque JSON-based para especificar visualizaciones mediante una gramática consistente. Vega-Lite proporciona una sintaxis simplificada que se compila a Vega (más detallado)."
      },
      {
        type: "text",
        value: "Por qué elegir Vega:\n- Especificaciones reproducibles\n- Compatibilidad entre lenguajes\n- Editor interactivo (Vega Editor)\n- Integración con Altair (Python)\n\nFlujo de trabajo típico:\n1. Diseñar en Vega Editor\n2. Exportar especificación JSON\n3. Implementar en aplicación"
      },
      {
        type: "code",
        value: "{\n  \"$schema\": \"https://vega.github.io/schema/vega-lite/v5.json\",\n  \"data\": {\"url\": \"data/movies.json\"},\n  \"mark\": \"point\",\n  \"encoding\": {\n    \"x\": {\"field\": \"IMDB Rating\", \"type\": \"quantitative\"},\n    \"y\": {\"field\": \"Rotten Tomatoes Rating\", \"type\": \"quantitative\"}\n  }\n}"
      },
      {
        type: "img",
        value: "https://vega.github.io/vega-lite/images/vega-lite.svg"
      }
    ],
    children: []
  },
  {
    id: "tableau",
    title: "Tableau",
    subtitle: "Plataforma de Business Intelligence",
    content: [
      {
        type: "text",
        value: "Herramienta líder para visualización de datos en entornos empresariales. Permite crear dashboards interactivos sin programación, con conectividad a múltiples fuentes de datos."
      },
      {
        type: "text",
        value: "Ventajas competitivas:\n- Interfaz drag-and-drop intuitiva\n- Soporte para big data (Hyper engine)\n- Compartir fácil mediante Tableau Server/Online\n- Gran comunidad y recursos de aprendizaje\n\nIntegración con Python:\n- TabPy para ejecutar scripts Python\n- API REST para automatización\n- Extractos de datos programáticos"
      },
      {
        type: "img",
        value: "https://www.tableau.com/sites/default/files/2021-06/Img_Homepage_TableauProducts_2x.png"
      },
      {
        type: "text",
        value: "Flujo de trabajo típico:\n1. Conectar a fuente de datos (Excel, SQL, etc.)\n2. Crear hojas de trabajo con visualizaciones\n3. Combinar en dashboards interactivos\n4. Publicar y compartir análisis"
      }
    ],
    children: []
  }
,
  {
    id: "tipos_de_graficos",
    title: "Tipos de Gráficos",
    subtitle: "Selección inteligente de visualizaciones según el análisis requerido",
    content: [
      {
        type: "text",
        value: "La elección del gráfico adecuado es fundamental para comunicar insights efectivamente. Cada tipo resalta diferentes aspectos de los datos: comparaciones, distribuciones, relaciones o composiciones."
      },
      {
        type: "text",
        value: "Regla de oro: \n1. Datos categóricos → Barras\n2. Series temporales → Líneas\n3. Distribuciones → Box/Violín\n4. Correlaciones → Dispersión/Heatmap\n5. Jerarquías → Sunburst/Treemap"
      },
      {
        type: "img",
        value: "https://datavizcatalogue.com/methods/images/top_images.png"
      }
    ],
    children: [
      "line_chart",
      "bar_chart",
      "box_plot",
      "violin_plot",
      "scatter_plot",
      "heatmap",
      "sunburst_chart",
      "word_cloud",
      "parallel_coordinates"
    ]
  },
  {
    id: "line_chart",
    title: "Gráfico de Líneas",
    subtitle: "Visualización de tendencias temporales",
    content: [
      {
        type: "text",
        value: "Muestra datos como una serie de puntos conectados por segmentos lineales, ideal para representar cambios a lo largo del tiempo (series temporales)."
      },
      {
        type: "text",
        value: "Casos de uso óptimos:\n- Evolución de ventas mensuales\n- Métricas de rendimiento en el tiempo\n- Tendencias climáticas\n\nVariantes avanzadas:\n- Gráficos de área apilada\n- Líneas suavizadas (spline)\n- Múltiples series con diferentes escalas"
      },
      {
        type: "code",
        value: "import matplotlib.pyplot as plt\n\nmeses = ['Ene', 'Feb', 'Mar', 'Abr']\nventas = [35, 28, 45, 52]\nplt.plot(meses, ventas, marker='o', linestyle='--', color='teal')\nplt.title('Ventas Trimestrales')\nplt.xlabel('Mes')\nplt.ylabel('Ventas (miles)')\nplt.grid(alpha=0.3)\nplt.show()"
      },
      {
        type: "img",
        value: "https://datavizproject.com/wp-content/uploads/2015/10/1-Line-Chart.png"
      }
    ],
    children: []
  },
  {
    id: "bar_chart",
    title: "Gráfico de Barras",
    subtitle: "Comparación entre categorías discretas",
    content: [
      {
        type: "text",
        value: "Representa datos categóricos mediante barras rectangulares con alturas/longitudes proporcionales a los valores. Versátil para comparaciones directas."
      },
      {
        type: "text",
        value: "Tipos y usos:\n- Barras verticales: Comparación simple\n- Barras horizontales: Etiquetas largas\n- Apiladas: Composición de totales\n- Agrupadas: Comparación múltiple\n\nBuenas prácticas:\n- Ordenar barras por valor (salvo ordinales)\n- Espaciado consistente\n- Evitar escalas truncadas"
      },
      {
        type: "code",
        value: "import seaborn as sns\n\npaises = ['Argentina', 'Brasil', 'Chile', 'Colombia']\npoblacion = [45, 213, 19, 51]\n\nsns.barplot(x=poblacion, y=paises, palette='viridis')\nplt.title('Población en millones (2023)')\nplt.tight_layout()"
      },
      {
        type: "img",
        value: "https://datavizproject.com/wp-content/uploads/2015/10/2-Bar-Chart.png"
      }
    ],
    children: []
  },
  {
    id: "box_plot",
    title: "Diagrama de Caja (Box Plot)",
    subtitle: "Resumen estadístico de distribuciones",
    content: [
      {
        type: "text",
        value: "Muestra la dispersión de datos mediante cuartiles: \n- Caja: Rango intercuartílico (IQR, Q1-Q3)\n- Línea central: Mediana\n- Bigotes: 1.5*IQR\n- Puntos: Outliers"
      },
      {
        type: "text",
        value: "Cuándo es invaluable:\n- Comparar distribuciones entre grupos\n- Identificar asimetría y outliers\n- Analizar variabilidad sin suposiciones distribucionales\n\nLimitaciones:\n- Oculta bimodalidad\n- Poco intuitivo para no técnicos"
      },
      {
        type: "code",
        value: "import pandas as pd\ndata = pd.DataFrame({\n    'Edad': np.random.normal(35, 10, 1000),\n    'Género': np.random.choice(['M', 'F'], 1000)\n})\n\nsns.boxplot(x='Género', y='Edad', data=data, whis=1.5)\nplt.title('Distribución de Edad por Género')"
      },
      {
        type: "img",
        value: "https://miro.medium.com/v2/resize:fit:1400/1*2c21SkzJMf3frPXPAR_gZA.png"
      }
    ],
    children: []
  },
  {
    id: "violin_plot",
    title: "Violin Plot",
    subtitle: "Densidad de probabilidad + estadísticos",
    content: [
      {
        type: "text",
        value: "Combina un box plot con un estimador de densidad kernel, mostrando la forma completa de la distribución. El ancho representa la frecuencia relativa."
      },
      {
        type: "text",
        value: "Ventajas sobre box plot:\n- Revela bimodalidad\n- Muestra densidad probabilística\n- Compara formas distribucionales\n\nConsideraciones:\n- Más complejo de interpretar\n- Requiere ajuste de bandwidth\n- Menos común en ámbitos no técnicos"
      },
      {
        type: "code",
        value: "tips = sns.load_dataset('tips')\nsns.violinplot(x='day', y='total_bill', hue='sex',\n               data=tips, split=True, inner='quartile',\n               palette='pastel')\nplt.title('Distribución de Consumo por Día y Género')"
      },
      {
        type: "img",
        value: "https://seaborn.pydata.org/_images/violinplot.png"
      }
    ],
    children: []
  },
  {
    id: "scatter_plot",
    title: "Gráfico de Dispersión",
    subtitle: "Relaciones entre variables continuas",
    content: [
      {
        type: "text",
        value: "Representa puntos individuales en un espacio bidimensional, ideal para visualizar correlaciones, clusters o outliers entre dos variables."
      },
      {
        type: "text",
        value: "Enriquecimiento con encoding adicional:\n- Color: Categoría tercera variable\n- Tamaño: Magnitud cuantitativa\n- Forma: Grupos categóricos\n- Facetas: Subgráficos por categoría\n\nPatrones clave:\n- Lineal/no-lineal\n- Homocedasticidad\n- Agrupamientos"
      },
      {
        type: "code",
        value: "# Scatter plot con encoding múltiple\niris = sns.load_dataset('iris')\nsns.scatterplot(data=iris, x='sepal_length', y='petal_length',\n                hue='species', size='sepal_width',\n                sizes=(20, 200), alpha=0.7)\nplt.title('Relación entre Dimensiones de Flores')"
      },
      {
        type: "img",
        value: "https://datavizproject.com/wp-content/uploads/2015/10/5-Scatter-Plot.png"
      }
    ],
    children: []
  },
  {
    id: "heatmap",
    title: "Heatmap (Mapa de Calor)",
    subtitle: "Visualización matricial de intensidades",
    content: [
      {
        type: "text",
        value: "Representa valores individuales dentro de una matriz mediante colores, donde la intensidad o tono corresponde a la magnitud. Ideal para matrices de correlación o datos espaciotemporales."
      },
      {
        type: "text",
        value: "Aplicaciones comunes:\n- Correlaciones entre variables\n- Activity maps (ej: uso horario)\n- Análisis genómico\n- Precios históricos\n\nConfiguración clave:\n- Escala de colores (sequential, divergente)\n- Anotación de valores\n- Clustering jerárquico"
      },
      {
        type: "code",
        value: "flights = sns.load_dataset('flights').pivot('month', 'year', 'passengers')\n\nsns.heatmap(flights, annot=True, fmt='d', cmap='YlOrRd',\n            linewidths=.5, cbar_kws={'label': 'Pasajeros'})\nplt.title('Tráfico Aéreo por Mes y Año')"
      },
      {
        type: "img",
        value: "https://seaborn.pydata.org/_images/heatmap.png"
      }
    ],
    children: []
  },
  {
    id: "sunburst_chart",
    title: "Sunburst (Diagrama Radial)",
    subtitle: "Visualización jerárquica multinivel",
    content: [
      {
        type: "text",
        value: "Muestra jerarquías mediante anillos concéntricos, donde cada nivel representa una categoría y el ángulo/radio representa proporciones. Alternativa radial a los treemaps."
      },
      {
        type: "text",
        value: "Casos de uso ideales:\n- Composición presupuestaria\n- Taxonomías biológicas\n- Rutas de usuario en web\n- Sistemas de archivos\n\nInteractividad clave:\n- Zoom en niveles\n- Tooltips con detalles\n- Animación de transiciones"
      },
      {
        type: "code",
        value: "import plotly.express as px\n\ndata = dict(\n    labels=['World', 'Asia', 'Europe', 'Africa', 'Americas', 'Oceania',\n           'China', 'India', 'Japan', 'Germany', 'France'],\n    parents=['', 'World', 'World', 'World', 'World', 'World',\n             'Asia', 'Asia', 'Asia', 'Europe', 'Europe'],\n    values=[100, 60, 20, 15, 20, 5, 30, 20, 10, 8, 7]\n)\n\nfig = px.sunburst(data, names='labels', parents='parents', values='values')\nfig.show()"
      },
      {
        type: "img",
        value: "https://plotly.com/python/static/images/sunburst-coffee-flavors.png"
      }
    ],
    children: []
  },
  {
    id: "word_cloud",
    title: "Nube de Palabras (Word Cloud)",
    subtitle: "Visualización textual de frecuencia",
    content: [
      {
        type: "text",
        value: "Representación gráfica donde el tamaño de cada palabra indica su frecuencia o importancia en un corpus textual. Útil para análisis exploratorio de contenido."
      },
      {
        type: "text",
        value: "Técnicas avanzadas:\n- Máscaras con formas\n- Colores por categoría\n- Bigrams/trigrams\n- Stopwords personalizadas\n\nLimitaciones:\n- Pérdida de contexto\n- Dificultad para comparar\n- Sensibilidad a preprocesamiento"
      },
      {
        type: "code",
        value: "from wordcloud import WordCloud\nimport numpy as np\nfrom PIL import Image\n\ntext = open('discurso.txt').read()\nmask = np.array(Image.open('mapa.png'))\n\nwc = WordCloud(background_color='white', mask=mask,\n               contour_width=1, contour_color='steelblue')\nwc.generate(text)\nwc.to_file('wordcloud.png')"
      },
      {
        type: "img",
        value: "https://amueller.github.io/word_cloud/_images/sphx_glr_colored_003.png"
      }
    ],
    children: []
  },
  {
    id: "parallel_coordinates",
    title: "Coordenadas Paralelas",
    subtitle: "Visualización multidimensional",
    content: [
      {
        type: "text",
        value: "Técnica para visualizar datos de alta dimensionalidad, donde cada eje vertical representa una variable y las líneas conectan los valores de cada observación."
      },
      {
        type: "text",
        value: "Revela:\n- Correlaciones entre variables\n- Clusters naturales\n- Outliers multivariados\n\nMejores prácticas:\n- Estandarizar escalas\n- Interactividad (brush & highlight)\n- Orden óptimo de ejes\n\nAlternativas:\n- Radar charts para pocas dimensiones\n- t-SNE/UMAP para reducción dimensional"
      },
      {
        type: "code",
        value: "from pandas.plotting import parallel_coordinates\n\niris = sns.load_dataset('iris')\nplt.figure(figsize=(10,6))\nparallel_coordinates(iris, 'species', colormap='viridis', alpha=0.5)\nplt.title('Análisis Multivariado de Especies de Iris')"
      },
      {
        type: "img",
        value: "https://datavizproject.com/wp-content/uploads/2015/10/21-Parallel-Coordinates.png"
      }
    ],
    children: []
  },
  {
    id: "visualizacion_geoespacial",
    title: "Visualización Geoespacial",
    subtitle: "Técnicas para análisis y mapeo de datos geográficos",
    content: [
      {
        type: "text",
        value: "Campo especializado que combina sistemas de información geográfica (GIS) con técnicas de ciencia de datos para analizar patrones espaciales. Permite descubrir relaciones geográficas ocultas en los datos."
      },
      {
        type: "text",
        value: "Aplicaciones clave:\n- Análisis de movilidad urbana\n- Epidemiología espacial\n- Logística y optimización de rutas\n- Monitoreo ambiental\n- Geomarketing"
      },
      {
        type: "img",
        value: "https://www.esri.com/content/dam/esrisites/en-us/about/events/media-gallery/gis-day/2022/gis-mapping.jpg"
      }
    ],
    children: [
      "folium",
      "osmnx",
      "pydeck",
      "geopandas",
      "mapas_georreferenciados"
    ]
  },
  {
    id: "folium",
    title: "Folium",
    subtitle: "Mapas interactivos con Leaflet.js en Python",
    content: [
      {
        type: "text",
        value: "Librería Python que crea mapas interactivos estilo Leaflet con solo unas líneas de código. Combina la simplicidad de Python con la potencia de JavaScript para visualización geoespacial."
      },
      {
        type: "text",
        value: "Características destacadas:\n- Soporte para tilesets personalizados (OpenStreetMap, Mapbox, Stamen)\n- Marcadores, popups y tooltips interactivos\n- Integración con GeoJSON y TopoJSON\n- Plugins para heatmaps, clusters y medición\n\nIdeal para:\n- Prototipado rápido\n- Dashboards en notebooks Jupyter\n- Visualizaciones con interacción básica"
      },
      {
        type: "code",
        value: "import folium\nfrom folium.plugins import HeatMap\n\n# Mapa centrado en Buenos Aires con capa de calor\nm = folium.Map(location=[-34.6037, -58.3816], zoom_start=12)\n\n# Datos de ejemplo (lat, lon, intensidad)\ncalor = [[-34.60, -58.38, 0.8], [-34.58, -58.40, 0.5], [-34.62, -58.35, 1.0]]\nHeatMap(calor, radius=15).add_to(m)\n\n# Marcador con popup\nfolium.Marker(\n    [-34.6037, -58.3816],\n    popup='<b>Obelisco</b>',\n    icon=folium.Icon(color='red', icon='info-sign')\n).add_to(m)\n\nm.save('mapa_interactivo.html')"
      },
      {
        type: "img",
        value: "https://python-visualization.github.io/folium/latest/_images/colormap.png"
      }
    ],
    children: []
  },
  {
    id: "osmnx",
    title: "OSMnx",
    subtitle: "Análisis de redes urbanas con OpenStreetMap",
    content: [
      {
        type: "text",
        value: "Herramienta para descargar, modelar y visualizar redes de calles y edificios de OpenStreetMap. Usado en planificación urbana, logística y estudios de movilidad."
      },
      {
        type: "text",
        value: "Funcionalidades únicas:\n- Descarga de grafos de calles por ciudad/región\n- Métricas de red (centralidad, conectividad)\n- Isócronas y áreas de servicio\n- Visualización 3D de edificios\n\nCasos de uso avanzados:\n- Optimización de rutas de reparto\n- Análisis de accesibilidad urbana\n- Simulaciones de evacuación\n- Estudios de walkability"
      },
      {
        type: "code",
        value: "import osmnx as ox\nfrom IPython.display import IFrame\n\n# Descargar red de calles de Barcelona\nG = ox.graph_from_place('Barcelona, Spain', network_type='drive')\n\n# Calcular ruta óptima entre dos puntos\norigen = ox.distance.nearest_nodes(G, X=2.1589, Y=41.3887)\ndestino = ox.distance.nearest_nodes(G, X=2.1684, Y=41.3956)\nruta = ox.shortest_path(G, origen, destino, weight='length')\n\n# Visualizar con folium\nm = ox.plot_route_folium(G, ruta, route_color='#ff0000', opacity=0.7)\nm.save('ruta_barcelona.html')"
      },
      {
        type: "img",
        value: "https://geoffboeing.com/publications/osmnx-complex-street-networks/osmnx-3d-buildings.png"
      }
    ],
    children: []
  },
  {
    id: "geopandas",
    title: "GeoPandas",
    subtitle: "Pandas para datos geoespaciales",
    content: [
      {
        type: "text",
        value: "Extensión de pandas que permite trabajar con datos geográficos como DataFrames, integrando geometrías (puntos, líneas, polígonos) y operaciones espaciales."
      },
      {
        type: "text",
        value: "Operaciones clave:\n- Uniones espaciales (sjoin)\n- Buffers y áreas de influencia\n- Distancias y relaciones topológicas\n- Agregaciones por región\n\nFlujo de trabajo típico:\n1. Cargar shapefiles/GeoJSON\n2. Realizar operaciones espaciales\n3. Visualizar con .plot()\n4. Exportar a formatos GIS"
      },
      {
        type: "code",
        value: "import geopandas as gpd\nimport matplotlib.pyplot as plt\n\n# Cargar datos de países del mundo\nworld = gpd.read_file(gpd.datasets.get_path('naturalearth_lowres'))\n\n# Filtrar América del Sur y calcular densidad poblacional\nsouth_america = world[world.continent == 'South America']\nsouth_america['density'] = south_america.pop_est / south_america.geometry.area\n\n# Visualizar\nfig, ax = plt.subplots(figsize=(12, 8))\nsouth_america.plot(column='density', ax=ax, legend=True,\n                  legend_kwds={'label': 'Densidad (hab/km²)',\n                              'orientation': 'horizontal'},\n                  cmap='OrRd', edgecolor='black')\nax.set_title('Densidad Poblacional en América del Sur')\nplt.tight_layout()"
      },
      {
        type: "img",
        value: "https://geopandas.org/en/stable/_images/sphx_glr_plotting_with_geoplot_001.png"
      }
    ],
    children: []
  },
  {
    id: "mapas_georreferenciados",
    title: "Mapas Georreferenciados",
    subtitle: "Fundamentos de cartografía digital",
    content: [
      {
        type: "text",
        value: "Técnicas para vincular datos con ubicaciones geográficas mediante sistemas de coordenadas (lat/lon, UTM, etc.). Base para cualquier análisis espacial."
      },
      {
        type: "text",
        value: "Componentes esenciales:\n- Sistemas de referencia (CRS: WGS84, Web Mercator)\n- Niveles de zoom y teselas (tiles)\n- Capas vectoriales vs. ráster\n- Proyecciones cartográficas\n\nFormatos estándar:\n- GeoJSON: Intercambio web\n- Shapefile: GIS tradicional\n- KML/KMZ: Google Earth\n- GeoTIFF: Imágenes georreferenciadas"
      },
      {
        type: "text",
        value: "Workflow recomendado:\n1. Definir CRS acorde al análisis\n2. Validar precisión geográfica\n3. Ajustar niveles de detalle\n4. Optimizar rendimiento para web\n5. Implementar controles de interacción"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334365106/figure/fig1/AS:779806395908096@1562867643806/Example-of-a-georeferenced-map-in-a-GIS-software.png"
      }
    ],
    children: []
  },
  {
    id: "procesamiento_de_lenguaje_natural",
    title: "Procesamiento de Lenguaje Natural (NLP)",
    subtitle: "Técnicas para analizar y entender texto humano con máquinas",
    content: [
      {
        type: "text",
        value: "Campo interdisciplinario que combina lingüística, inteligencia artificial y ciencia de datos para procesar y analizar lenguaje humano. Permite a las máquinas entender, interpretar y generar texto."
      },
      {
        type: "text",
        value: "Aplicaciones clave:\n- Chatbots y asistentes virtuales\n- Análisis de sentimientos\n- Traducción automática\n- Resumen automático de textos\n- Clasificación de documentos"
      },
      {
        type: "img",
        value: "https://miro.medium.com/v2/resize:fit:1400/1*4Pn00ChO0ie2KIBmNvKC7g.png"
      }
    ],
    children: [
      "nltk",
      "representacion_de_texto",
      "reduccion_de_dimensionalidad",
      "preprocesamiento"
    ]
  },
  {
    id: "nltk",
    title: "NLTK (Natural Language Toolkit)",
    subtitle: "Librería pionera para NLP en Python",
    content: [
      {
        type: "text",
        value: "Conjunto completo de herramientas para trabajar con datos de lenguaje humano. Incluye más de 50 corpora y recursos léxicos, junto con interfaces para tareas comunes de procesamiento de texto."
      },
      {
        type: "text",
        value: "Funcionalidades destacadas:\n- Tokenizadores para 20+ idiomas\n- Análisis gramatical (POS tagging)\n- Chunking y named entity recognition\n- WordNet integration\n- Métricas de evaluación (BLEU, ROUGE)"
      },
      {
        type: "code",
        value: "import nltk\nfrom nltk.tokenize import word_tokenize\nfrom nltk.corpus import stopwords\n\nnltk.download('punkt')\nnltk.download('stopwords')\n\ntext = \"NLTK es una herramienta fundamental para NLP en Python\"\ntokens = word_tokenize(text, language='spanish')\nfiltered = [w for w in tokens if w.lower() not in stopwords.words('spanish')]\n\nprint(f\"Tokens: {tokens}\")\nprint(f\"Sin stopwords: {filtered}\")"
      },
      {
        type: "img",
        value: "https://www.nltk.org/_static/nltk_logo.png"
      }
    ],
    children: []
  },
  {
    id: "preprocesamiento",
    title: "Preprocesamiento de Texto",
    subtitle: "Limpieza y normalización de datos textuales",
    content: [
      {
        type: "text",
        value: "Conjunto de técnicas para transformar texto crudo en una forma estandarizada adecuada para análisis. Mejora significativamente el rendimiento de modelos posteriores."
      },
      {
        type: "text",
        value: "Pipeline típico:\n1. Normalización (minúsculas, Unicode)\n2. Tokenización\n3. Eliminación stopwords\n4. Stemming/Lemmatización\n5. Vectorización\n\nConsideraciones:\n- Conservar contexto cuando sea necesario\n- Manejar casos especiales (emojis, hashtags)\n- Idioma-específico"
      },
      {
        type: "code",
        value: "def preprocess_text(text):\n    # Convertir a minúsculas\n    text = text.lower()\n    # Eliminar caracteres especiales\n    text = re.sub(r'[^\\w\\s]', '', text)\n    # Tokenizar\n    tokens = word_tokenize(text)\n    # Eliminar stopwords\n    tokens = [t for t in tokens if t not in stopwords.words('spanish')]\n    # Lematización\n    lemmatizer = WordNetLemmatizer()\n    tokens = [lemmatizer.lemmatize(t) for t in tokens]\n    return ' '.join(tokens)"
      },
      {
        type: "img",
        value: "https://www.kdnuggets.com/wp-content/uploads/text-preprocessing-methods.png"
      }
    ],
    children: [
      "tokenizacion",
      "stopwords",
      "stemming",
      "lemmatizacion"
    ]
  },
  {
    id: "tokenizacion",
    title: "Tokenización",
    subtitle: "Segmentación de texto en unidades significativas",
    content: [
      {
        type: "text",
        value: "Proceso de dividir texto en tokens (palabras, símbolos u otros elementos significativos). Primer paso crítico en cualquier pipeline de NLP."
      },
      {
        type: "text",
        value: "Enfoques avanzados:\n- Tokenización por subpalabras (BPE, WordPiece)\n- Tokenizadores específicos para modelos (BERT, GPT)\n- Manejo de contracciones (don't → do + n't)\n\nRetos comunes:\n- Palabras compuestas (New York)\n- Idiomas sin espacios (chino)\n- URLs y handles (@usuario)"
      },
      {
        type: "code",
        value: "from transformers import BertTokenizer\n\n# Tokenizador moderno (BERT)\ntokenizer = BertTokenizer.from_pretrained('bert-base-multilingual-cased')\ntext = \"El procesamiento de lenguaje natural es fascinante\"\n\ntokens = tokenizer.tokenize(text)\nids = tokenizer.encode(text)\n\nprint(f\"Tokens: {tokens}\")\nprint(f\"IDs: {ids}\")"
      },
      {
        type: "img",
        value: "https://jalammar.github.io/images/tokenization/tokenization.png"
      }
    ],
    children: []
  },
  {
    id: "stopwords_removal",
    title: "Eliminación de Stopwords",
    subtitle: "Filtrado de palabras funcionales irrelevantes",
    content: [
      {
        type: "text",
        value: "Técnica para remover palabras comunes que aportan poco significado semántico (artículos, preposiciones, conjunciones). Reduce ruido y dimensionalidad."
      },
      {
        type: "text",
        value: "Consideraciones importantes:\n- Listas específicas por idioma\n- Conservar stopwords en ciertos contextos (análisis de estilo)\n- Manejar negaciones (\"no\" como stopword)\n\nAlternativas modernas:\n- Ponderación TF-IDF automática\n- Uso de attention en modelos neuronales"
      },
      {
        type: "code",
        value: "from sklearn.feature_extraction.text import CountVectorizer\n\n# Vectorizador que ignora stopwords automáticamente\nvectorizer = CountVectorizer(stop_words='english')\ncorpus = [\"This is a sample text\", \"Another example text\"]\nX = vectorizer.fit_transform(corpus)\n\nprint(vectorizer.get_feature_names_out())"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig2/AS:779806395908096@1562867643806/Example-of-stop-word-removal.png"
      }
    ],
    children: []
  },
  {
    id: "lemmatizacion",
    title: "Lemmatización",
    subtitle: "Reducción de palabras a su forma canónica",
    content: [
      {
        type: "text",
        value: "Proceso lingüístico que transforma palabras a su lema (forma base según el diccionario). Más preciso que stemming pero requiere conocimiento morfológico."
      },
      {
        type: "text",
        value: "Ejemplos:\n- corriendo → correr\n- mejores → bueno\n- tuvo → tener\n\nImplementaciones:\n- WordNetLemmatizer (NLTK)\n- spaCy (incluye modelos por idioma)\n- Stanza (lematización neural)"
      },
      {
        type: "code",
        value: "import spacy\n\n# Cargar modelo de español\nnlp = spacy.load('es_core_news_sm')\n\ndoc = nlp(\"Los gatos cazaban ratones en el jardín\")\nlemmas = [token.lemma_ for token in doc]\n\nprint(f\"Lemmas: {lemmas}\")"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig3/AS:779806395908096@1562867643806/Example-of-lemmatization.png"
      }
    ],
    children: []
  },
  {
    id: "stemming",
    title: "Stemming",
    subtitle: "Reducción de palabras a su raíz aproximada",
    content: [
      {
        type: "text",
        value: "Algoritmo heurístico que corta sufijos y prefijos para obtener una forma raíz común. Más rápido pero menos preciso que lemmatización."
      },
      {
        type: "text",
        value: "Algoritmos comunes:\n- Porter (inglés)\n- Snowball (multiidioma)\n- Lancaster (agresivo)\n\nCasos de uso:\n- Recuperación de información\n- Análisis rápido exploratorio\n- Cuando precisión morfológica no es crítica"
      },
      {
        type: "code",
        value: "from nltk.stem import SnowballStemmer\n\nstemmer = SnowballStemmer('spanish')\nwords = [\"corriendo\", \"corrió\", \"correremos\", \"corredor\"]\nstems = [stemmer.stem(w) for w in words]\n\nprint(f\"Stems: {stems}\")  # ['corr', 'corr', 'corr', 'corredor']"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig4/AS:779806395908096@1562867643806/Example-of-stemming.png"
      }
    ],
    children: []
  },
  {
    id: "representacion_de_texto",
    title: "Representación de Texto",
    subtitle: "Transformación de texto a formato numérico",
    content: [
      {
        type: "text",
        value: "Técnicas para convertir palabras y documentos en vectores numéricos que modelos de ML pueden procesar. Fundamental para cualquier aplicación de NLP."
      },
      {
        type: "text",
        value: "Evolución de métodos:\n1. Bag-of-Words (BoW)\n2. TF-IDF\n3. Word Embeddings (Word2Vec, GloVe)\n4. Embeddings contextuales (BERT, GPT)\n\nSelección depende de:\n- Tamaño del dataset\n- Recursos computacionales\n- Tarea específica"
      },
      {
        type: "img",
        value: "https://jalammar.github.io/images/word2vec/word2vec.png"
      }
    ],
    children: [
      "bag_of_words",
      "tfidf"
    ]
  },
  {
    id: "bag_of_words",
    title: "Bag-of-Words (BoW)",
    subtitle: "Representación vectorial simple de documentos",
    content: [
      {
        type: "text",
        value: "Modelo que representa texto como una bolsa (multiconjunto) de palabras, ignorando orden pero conservando frecuencia. Crea una matriz documento-término."
      },
      {
        type: "text",
        value: "Ventajas:\n- Simple y computacionalmente eficiente\n- Base para métodos más avanzados\n- Funciona bien con modelos clásicos\n\nLimitaciones:\n- Ignora contexto y orden de palabras\n- Alta dimensionalidad (vocabulario grande)\n- Dispersión (matriz sparse)"
      },
      {
        type: "code",
        value: "from sklearn.feature_extraction.text import CountVectorizer\n\ncorpus = [\n    'El gato come pescado',\n    'El perro come carne',\n    'El gato y el perro son amigos'\n]\n\nvectorizer = CountVectorizer()\nX = vectorizer.fit_transform(corpus)\n\nprint(vectorizer.get_feature_names_out())\nprint(X.toarray())"
      },
      {
        type: "img",
        value: "https://miro.medium.com/v2/resize:fit:1400/1*2giA1h_8Q3tBBb2vGVW_-w.png"
      }
    ],
    children: []
  },
  {
    id: "tfidf",
    title: "TF-IDF",
    subtitle: "Ponderación término-frecuencia inversa de documento",
    content: [
      {
        type: "text",
        value: "Método estadístico que evalúa la importancia de una palabra en un documento respecto a una colección. Combina frecuencia local (TF) con rareza global (IDF)."
      },
      {
        type: "text",
        value: "Fórmula:\nTF-IDF(t,d) = TF(t,d) × IDF(t)\n\nDonde:\n- TF(t,d) = freq(t,d) / len(d)\n- IDF(t) = log(N / (docs_containing_t + 1))\n\nVariantes:\n- Sublinear TF scaling (log(1 + TF))\n- Smooth IDF (evitar división por cero)"
      },
      {
        type: "code",
        value: "from sklearn.feature_extraction.text import TfidfVectorizer\n\ntfidf = TfidfVectorizer(norm='l2', sublinear_tf=True)\ntfidf_matrix = tfidf.fit_transform(corpus)\n\n# Mostrar importancia de términos\nfor i, doc in enumerate(corpus):\n    print(f\"Doc {i+1}:\")\n    for j, term in enumerate(tfidf.get_feature_names_out()):\n        if tfidf_matrix[i,j] > 0.1:\n            print(f\"  {term}: {tfidf_matrix[i,j]:.2f}\")"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig5/AS:779806395908096@1562867643806/TF-IDF-weighting-scheme.png"
      }
    ],
    children: []
  },
  {
    id: "reduccion_de_dimensionalidad",
    title: "Reducción de Dimensionalidad",
    subtitle: "Técnicas para simplificar representaciones textuales",
    content: [
      {
        type: "text",
        value: "Métodos para proyectar datos de alta dimensión (como vectores de texto) en espacios de menor dimensión, preservando estructura significativa."
      },
      {
        type: "text",
        value: "Beneficios:\n- Visualización de embeddings\n- Reducción de ruido\n- Mejor rendimiento computacional\n- Evitar maldición de dimensionalidad\n\nEnfoques:\n- Lineales (PCA, SVD)\n- No lineales (t-SNE, UMAP)\n- Basados en grafos"
      },
      {
        type: "img",
        value: "https://miro.medium.com/v2/resize:fit:1400/1*_k7b2TqUZv2yZ6Y9o2pZkA.png"
      }
    ],
    children: [
      "pca",
      "tsne",
      "umap"
    ]
  },
  {
    id: "pca",
    title: "PCA (Análisis de Componentes Principales)",
    subtitle: "Reducción lineal de dimensionalidad",
    content: [
      {
        type: "text",
        value: "Técnica que identifica las direcciones (componentes) de máxima varianza en los datos y proyecta sobre ellos. Ampliamente usado para visualización y preprocesamiento."
      },
      {
        type: "text",
        value: "Aplicaciones en NLP:\n- Visualización de temas en documentos\n- Reducción de ruido en embeddings\n- Preprocesamiento para otros algoritmos\n\nLimitaciones:\n- Asume relaciones lineales\n- Sensible a escalado de características\n- No preserva estructuras locales"
      },
      {
        type: "code",
        value: "from sklearn.decomposition import PCA\nfrom sklearn.preprocessing import StandardScaler\n\n# Reducir embeddings de 300D a 2D\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(embeddings)\n\npca = PCA(n_components=2)\nX_pca = pca.fit_transform(X_scaled)\n\nplt.scatter(X_pca[:,0], X_pca[:,1], alpha=0.5)\nplt.title('PCA de Word Embeddings')\nplt.xlabel('Componente 1')\nplt.ylabel('Componente 2')"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_pca_vs_lda_001.png"
      }
    ],
    children: []
  },
  {
    id: "tsne",
    title: "t-SNE",
    subtitle: "Reducción no lineal para visualización",
    content: [
      {
        type: "text",
        value: "Algoritmo que proyecta datos a baja dimensión preservando distancias locales. Ideal para visualizar clusters en espacios de alta dimensión como embeddings."
      },
      {
        type: "text",
        value: "Parámetros clave:\n- Perplexity: Número efectivo de vecinos (5-50)\n- Learning rate: Tasa de aprendizaje (10-1000)\n- Iteraciones: Mínimo 250\n\nConsideraciones:\n- Solo para visualización (no preprocesamiento)\n- Escalas no comparables entre ejecuciones\n- Computacionalmente costoso"
      },
      {
        type: "code",
        value: "from sklearn.manifold import TSNE\n\n# Proyectar embeddings con t-SNE\ntsne = TSNE(n_components=2, perplexity=30, random_state=42)\nX_tsne = tsne.fit_transform(embeddings)\n\nplt.figure(figsize=(10,8))\nplt.scatter(X_tsne[:,0], X_tsne[:,1], alpha=0.5)\nplt.title('t-SNE de Word Embeddings')\nfor i, word in enumerate(vocab[:100]):\n    plt.annotate(word, (X_tsne[i,0], X_tsne[i,1]))"
      },
      {
        type: "img",
        value: "https://distill.pub/2016/misread-tsne/assets/teaser.gif"
      }
    ],
    children: []
  },
  {
    id: "umap",
    title: "UMAP",
    subtitle: "Reducción dimensional uniforme",
    content: [
      {
        type: "text",
        value: "Técnica moderna que preserva tanto estructura local como global, más rápida que t-SNE y con resultados comparables. Útil para visualización y preprocesamiento."
      },
      {
        type: "text",
        value: "Ventajas sobre t-SNE:\n- Mejor escalabilidad\n- Preserva más estructura global\n- Resultados reproducibles\n- Parámetros más intuitivos\n\nAjustes recomendados:\n- n_neighbors: 15-200\n- min_dist: 0.1-0.5\n- metric: 'cosine' para texto"
      },
      {
        type: "code",
        value: "import umap\n\n# Reducción con UMAP\nreducer = umap.UMAP(n_components=2, n_neighbors=15, \n                   min_dist=0.1, metric='cosine')\nX_umap = reducer.fit_transform(embeddings)\n\nplt.scatter(X_umap[:,0], X_umap[:,1], alpha=0.5)\nplt.title('UMAP de Word Embeddings')"
      },
      {
        type: "img",
        value: "https://umap-learn.readthedocs.io/en/latest/_images/compare_thumb.png"
      }
    ],
    children: []
  }
,
  {
    id: "modelos_de_ia",
    title: "Modelos de Inteligencia Artificial",
    subtitle: "Fundamentos, técnicas y aplicaciones de los sistemas de aprendizaje automático",
    content: [
      {
        type: "text",
        value: "Los modelos de IA son representaciones matemáticas que aprenden patrones a partir de datos para realizar predicciones, clasificaciones o toma de decisiones. Constituyen el núcleo de los sistemas modernos de machine learning y deep learning."
      },
      {
        type: "text",
        value: "Evolución clave:\n1. Modelos estadísticos clásicos (Regresión lineal)\n2. Machine Learning tradicional (Random Forest, SVM)\n3. Deep Learning (Redes Neuronales)\n4. Arquitecturas avanzadas (Transformers, GANs)"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig1/AS:779806395908096@1562867643806/Timeline-of-machine-learning-models.png"
      }
    ],
    children: [
      "modelos_de_ia_fundamentos",
      "aprendizaje_supervisado",
      "aprendizaje_no_supervisado",
      "aprendizaje_semisupervisado",
      "aprendizaje_por_refuerzo",
      "weak_supervision",
      "metricas_de_evaluacion",
      "herramientas_y_librerias"
    ]
  },
  {
    id: "modelos_de_ia_fundamentos",
    title: "Fundamentos de Modelos de IA",
    subtitle: "Principios esenciales para construir sistemas de aprendizaje automático",
    content: [
      {
        type: "text",
        value: "Antes de seleccionar o implementar cualquier modelo de IA, es crucial comprender los conceptos fundamentales que determinan su comportamiento y capacidad de generalización."
      },
      {
        type: "text",
        value: "Conceptos clave:\n- Sesgo-Varianza\n- Capacidad del modelo\n- Generalización\n- Regularización\n- Curvas de aprendizaje\n\nParadigmas de aprendizaje:\n- Supervisado vs No supervisado\n- Batch vs Online\n- Transfer Learning"
      },
      {
        type: "img",
        value: "https://miro.medium.com/v2/resize:fit:1400/1*RQ6ICt_FBSx6mkAsGVwx8g.png"
      }
    ],
    children: [
      "overfitting",
      "underfitting"
    ]
  },
  {
    id: "overfitting",
    title: "Overfitting (Sobreajuste)",
    subtitle: "Cuando el modelo memoriza en lugar de aprender",
    content: [
      {
        type: "text",
        value: "Ocurre cuando un modelo se ajusta demasiado a los datos de entrenamiento, capturando ruido y patrones irrelevantes, lo que perjudica su rendimiento en datos nuevos."
      },
      {
        type: "text",
        value: "Síntomas:\n- Alta precisión en entrenamiento, baja en test\n- Coeficientes con valores extremos\n- Sensibilidad excesiva a pequeñas variaciones\n\nTécnicas de mitigación:\n- Regularización (L1/L2)\n- Dropout (en redes neuronales)\n- Early stopping\n- Aumento de datos\n- Simplificar el modelo"
      },
      {
        type: "code",
        value: "# Ejemplo de detección con curvas de aprendizaje\nfrom sklearn.model_selection import learning_curve\nimport matplotlib.pyplot as plt\n\ntrain_sizes, train_scores, test_scores = learning_curve(\n    estimator=model,\n    X=X_train,\n    y=y_train,\n    cv=5,\n    scoring='accuracy'\n)\n\nplt.plot(train_sizes, np.mean(train_scores, axis=1), label='Train')\nplt.plot(train_sizes, np.mean(test_scores, axis=1), label='Validation')\nplt.title('Curva de Aprendizaje - Detectando Overfitting')\nplt.legend()"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig2/AS:779806395908096@1562867643806/Example-of-overfitting.png"
      }
    ],
    children: []
  },
  {
    id: "underfitting",
    title: "Underfitting (Subajuste)",
    subtitle: "Cuando el modelo es demasiado simple para los datos",
    content: [
      {
        type: "text",
        value: "Ocurre cuando un modelo no puede capturar la estructura subyacente de los datos, resultando en mal rendimiento tanto en entrenamiento como en validación."
      },
      {
        type: "text",
        value: "Causas comunes:\n- Modelo muy simple (pocos parámetros)\n- Entrenamiento insuficiente\n- Características no informativas\n- Regularización excesiva\n\nSoluciones:\n- Aumentar complejidad del modelo\n- Mejorar el feature engineering\n- Reducir regularización\n- Entrenar por más épocas (deep learning)"
      },
      {
        type: "code",
        value: "# Ejemplo de modelo demasiado simple (underfitting)\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_squared_error\n\n# Datos no lineales\nX = np.linspace(0, 10, 100)\ny = np.sin(X) + np.random.normal(0, 0.1, 100)\n\nmodel = LinearRegression()\nmodel.fit(X.reshape(-1,1), y)\npred = model.predict(X.reshape(-1,1))\n\nprint(f\"MSE: {mean_squared_error(y, pred):.4f}\")  # Error alto indica underfitting"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig3/AS:779806395908096@1562867643806/Example-of-underfitting.png"
      }
    ],
    children: []
  },
  {
    id: "aprendizaje_supervisado",
    title: "Aprendizaje Supervisado",
    subtitle: "Modelos que aprenden a partir de ejemplos etiquetados",
    content: [
      {
        type: "text",
        value: "Paradigma donde el modelo aprende una función que mapea entradas a salidas basándose en pares de ejemplos entrada-salida. Dominante en aplicaciones prácticas de IA."
      },
      {
        type: "text",
        value: "Ventajas:\n- Alto rendimiento con datos suficientes\n- Evaluación directa\n- Amplio espectro de algoritmos\n\nDesafíos:\n- Requiere datos etiquetados (costosos)\n- Riesgo de sesgos en las etiquetas\n- Dificultad con tareas abiertas"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig4/AS:779806395908096@1562867643806/Supervised-learning-framework.png"
      }
    ],
    children: [
      "clasificacion",
      "regresion"
    ]
  },
  {
    id: "clasificacion",
    title: "Modelos de Clasificación",
    subtitle: "Asignación de categorías a instancias de datos",
    content: [
      {
        type: "text",
        value: "Técnicas para predecir etiquetas discretas. Desde clasificación binaria (spam/no spam) hasta multiclase (reconocimiento de imágenes) y multilabel (etiquetado múltiple)."
      },
      {
        type: "text",
        value: "Selección de algoritmo:\n- Pequeños datasets: SVM, Naive Bayes\n- Datasets medianos: Random Forest, XGBoost\n- Grandes datasets: Redes Neuronales\n- Datos desbalanceados: Métricas especiales + sampling"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_classifier_comparison_001.png"
      }
    ],
    children: [
      "regresion_logistica",
      "naive_bayes",
      "svm",
      "knn",
      "arboles_de_decision",
      "random_forest",
      "redes_neuronales",
      "gradient_boosting",
      "voting_classifiers"
    ]
  },
  {
    id: "regresion_logistica",
    title: "Regresión Logística",
    subtitle: "Modelo lineal para clasificación probabilística",
    content: [
      {
        type: "text",
        value: "Aunque se llama 'regresión', es un algoritmo de clasificación que estima probabilidades usando una función logística. Fundamental para problemas binarios."
      },
      {
        type: "text",
        value: "Características:\n- Salida interpretable (probabilidad)\n- Eficiente computacionalmente\n- Base para muchos sistemas de scoring\n\nVariantes:\n- Binaria vs Multinomial\n- Regularizada (L1/L2)\n- Kernel logistic regression"
      },
      {
        type: "code",
        value: "from sklearn.linear_model import LogisticRegression\nfrom sklearn.datasets import load_breast_cancer\n\ndata = load_breast_cancer()\nX, y = data.data, data.target\n\nmodel = LogisticRegression(penalty='l2', C=1.0, solver='liblinear')\nmodel.fit(X, y)\n\nprint(f\"Precisión: {model.score(X, y):.2%}\")\nprint(f\"Coeficientes: {model.coef_[0][:5]}...\")  # Interpretabilidad"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_logistic_001.png"
      }
    ],
    children: []
  },
  {
    id: "naive_bayes",
    title: "Naive Bayes",
    subtitle: "Clasificador probabilístico basado en el teorema de Bayes",
    content: [
      {
        type: "text",
        value: "Familia de algoritmos que aplican el teorema de Bayes con el supuesto 'naive' de independencia entre características. Sorprendentemente efectivo a pesar de su simplicidad."
      },
      {
        type: "text",
        value: "Variantes comunes:\n- GaussianNB: Para datos continuos\n- MultinomialNB: Para conteos (texto)\n- BernoulliNB: Para características binarias\n\nCasos de uso ideales:\n- Filtrado de spam\n- Análisis de sentimientos\n- Sistemas de recomendación iniciales"
      },
      {
        type: "code",
        value: "from sklearn.naive_bayes import MultinomialNB\nfrom sklearn.feature_extraction.text import CountVectorizer\n\n# Clasificación de texto\ntexts = [\"oferta increíble\", \"problema técnico\", \"gana dinero fácil\"]\nlabels = [\"legítimo\", \"legítimo\", \"spam\"]\n\nvectorizer = CountVectorizer()\nX = vectorizer.fit_transform(texts)\n\nmodel = MultinomialNB()\nmodel.fit(X, labels)\n\ntest_text = \"gana dinero rápido\"\nprint(f\"Predicción: {model.predict(vectorizer.transform([test_text]))}\")"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig5/AS:779806395908096@1562867643806/Naive-Bayes-classifier.png"
      }
    ],
    children: []
  },
  {
    id: "svm",
    title: "Máquinas de Vectores de Soporte (SVM)",
    subtitle: "Clasificación mediante hiperplanos óptimos",
    content: [
      {
        type: "text",
        value: "Algoritmo que encuentra el hiperplano de separación óptimo entre clases, maximizando el margen. Potente para espacios de alta dimensión y casos con límites no lineales."
      },
      {
        type: "text",
        value: "Conceptos clave:\n- Vectores de soporte: Instancias críticas\n- Kernel trick: Transformación a espacios de mayor dimensión\n- Margen blando: Permite algunos errores\n\nKernels comunes:\n- Lineal\n- Polinomial\n- RBF (Gaussiano)\n- Sigmoid"
      },
      {
        type: "code",
        value: "from sklearn.svm import SVC\nfrom sklearn.datasets import make_moons\n\nX, y = make_moons(n_samples=100, noise=0.1, random_state=42)\n\n# SVM con kernel no lineal\nmodel = SVC(kernel='rbf', gamma=0.5, C=1.0)\nmodel.fit(X, y)\n\n# Visualizar frontera de decisión\nplt.scatter(X[:,0], X[:,1], c=y, cmap='viridis')\nax = plt.gca()\nxlim = ax.get_xlim()\nylim = ax.get_ylim()\n\nxx, yy = np.meshgrid(np.linspace(xlim[0], xlim[1], 50),\n             np.linspace(ylim[0], ylim[1], 50))\nZ = model.decision_function(np.c_[xx.ravel(), yy.ravel()])\nZ = Z.reshape(xx.shape)\nplt.contour(xx, yy, Z, colors='k', levels=[-1, 0, 1], alpha=0.5,\n            linestyles=['--', '-', '--'])"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_svm_nonlinear_001.png"
      }
    ],
    children: []
  },
  {
    id: "knn",
    title: "K-Vecinos Más Cercanos (KNN)",
    subtitle: "Clasificación basada en instancias similares",
    content: [
      {
        type: "text",
        value: "Algoritmo de aprendizaje basado en instancias que clasifica puntos según la mayoría de clases entre sus k vecinos más cercanos. Simple pero efectivo para ciertos dominios."
      },
      {
        type: "text",
        value: "Consideraciones:\n- Sensible a escalado de características\n- Costoso computacionalmente para grandes datasets\n- Requiere buena métrica de distancia\n\nOptimizaciones:\n- KD-Trees para búsqueda eficiente\n- Ball trees para espacios de alta dimensión\n- Weighted KNN (pesos por distancia)"
      },
      {
        type: "code",
        value: "from sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.preprocessing import StandardScaler\n\n# KNN es sensible a escalas, por lo que normalizamos\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)\n\nmodel = KNeighborsClassifier(n_neighbors=5, weights='distance', metric='euclidean')\nmodel.fit(X_scaled, y)\n\n# Visualizar frontera de decisión\nplot_decision_regions(X_scaled, y, model)\nplt.title('Frontera de Decisión KNN (k=5)')"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig6/AS:779806395908096@1562867643806/K-nearest-neighbor-classifier.png"
      }
    ],
    children: []
  },
  {
    id: "arboles_de_decision",
    title: "Árboles de Decisión",
    subtitle: "Modelos interpretables basados en reglas",
    content: [
      {
        type: "text",
        value: "Estructura jerárquica que divide recursivamente el espacio de características mediante reglas simples (umbrales). Altamente interpretables y base para métodos ensemble."
      },
      {
        type: "text",
        value: "Criterios de división:\n- Gini impurity (clasificación)\n- Entropy (clasificación)\n- MSE (regresión)\n\nVentajas:\n- Manejo automático de valores faltantes\n- No requiere escalado de características\n- Interpretabilidad visual"
      },
      {
        type: "code",
        value: "from sklearn.tree import DecisionTreeClassifier, plot_tree\n\nmodel = DecisionTreeClassifier(max_depth=3, min_samples_leaf=5)\nmodel.fit(X, y)\n\n# Visualizar el árbol\nplt.figure(figsize=(12,8))\nplot_tree(model, feature_names=feature_names, \n          class_names=target_names, filled=True)\nplt.show()"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_iris_dtc_001.png"
      }
    ],
    children: []
  },
  {
    id: "random_forest",
    title: "Random Forest",
    subtitle: "Ensemble de árboles para mayor robustez",
    content: [
      {
        type: "text",
        value: "Método ensemble que combina múltiples árboles de decisión entrenados en subconjuntos aleatorios de datos y características, promediando sus predicciones."
      },
      {
        type: "text",
        value: "Por qué funciona:\n- Reduce varianza (vs árbol individual)\n- Menos propenso a overfitting\n- Feature importance incorporado\n\nHiperparámetros clave:\n- n_estimators: Número de árboles\n- max_features: Características por división\n- max_depth: Profundidad máxima"
      },
      {
        type: "code",
        value: "from sklearn.ensemble import RandomForestClassifier\n\nmodel = RandomForestClassifier(n_estimators=100, \n                              max_depth=5,\n                              random_state=42)\nmodel.fit(X_train, y_train)\n\n# Importancia de características\nimportances = model.feature_importances_\nplt.barh(feature_names, importances)\nplt.title('Importancia de Características')"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_forest_iris_001.png"
      }
    ],
    children: []
  },
  {
    id: "redes_neuronales",
    title: "Redes Neuronales",
    subtitle: "Modelos inspirados en el cerebro humano",
    content: [
      {
        type: "text",
        value: "Arquitecturas compuestas por capas de neuronas artificiales interconectadas que aprenden representaciones jerárquicas de los datos. Base del deep learning moderno."
      },
      {
        type: "text",
        value: "Componentes esenciales:\n- Capas (Dense, Conv, LSTM)\n- Funciones de activación (ReLU, Sigmoid)\n- Optimizadores (Adam, SGD)\n- Funciones de pérdida\n\nAvances recientes:\n- Arquitecturas Transformer\n- Aprendizaje por transferencia\n- Modelos multimodales"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig7/AS:779806395908096@1562867643806/Neural-network-architecture.png"
      }
    ],
    children: [
      "redes_neuronales_fundamentos",
      "capas",
      "funciones_de_activacion",
      "inicializacion_de_pesos",
      "optimizadores",
      "funciones_de_perdida",
      "hiperparametros_y_ajuste",
      "rnn",
      "cnn",
      "gan",
      "transformers",
      "estrategias_de_optimizacion_de_hiperparametros",
      "herramientas_y_librerias"
    ]
  },
  {
    id: "gradient_boosting",
    title: "Gradient Boosting",
    subtitle: "Ensemble secuencial que corrige errores",
    content: [
      {
        type: "text",
        value: "Técnica de ensemble donde cada nuevo modelo intenta corregir los errores de los anteriores, optimizando una función de pérdida mediante descenso de gradiente."
      },
      {
        type: "text",
        value: "Implementaciones populares:\n- XGBoost (optimizado para velocidad)\n- LightGBM (eficiente con grandes datos)\n- CatBoost (manejo automático de categóricas)\n\nVentajas:\n- Alta precisión en muchos dominios\n- Manejo automático de missing values\n- Feature importance"
      },
      {
        type: "code",
        value: "from xgboost import XGBClassifier\n\nmodel = XGBClassifier(n_estimators=100, learning_rate=0.1, max_depth=3)\nmodel.fit(X_train, y_train,\n         eval_set=[(X_test, y_test)],\n         early_stopping_rounds=10,\n         verbose=True)\n\n# Visualizar importancia de características\nfrom xgboost import plot_importance\nplot_importance(model)\nplt.show()"
      },
      {
        type: "img",
        value: "https://xgboost.ai/images/xgboost-structure.png"
      }
    ],
    children: []
  },
  {
    id: "voting_classifiers",
    title: "Ensembles por Votación",
    subtitle: "Combinación de modelos para mejor rendimiento",
    content: [
      {
        type: "text",
        value: "Meta-modelo que agrega predicciones de múltiples clasificadores base, ya sea por votación dura (clases) o blanda (probabilidades)."
      },
      {
        type: "text",
        value: "Estrategias de combinación:\n- Majority vote (clasificación)\n- Average (regresión)\n- Weighted average\n\nBeneficios:\n- Reduce varianza\n- Puede superar a cualquier modelo individual\n- Robustez a overfitting"
      },
      {
        type: "code",
        value: "from sklearn.ensemble import VotingClassifier\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.svm import SVC\n\n# Definir modelos individuales\nmodel1 = LogisticRegression(random_state=1)\nmodel2 = RandomForestClassifier(n_estimators=50, random_state=1)\nmodel3 = SVC(probability=True, random_state=1)\n\n# Ensemble por votación blanda\nensemble = VotingClassifier(\n    estimators=[('lr', model1), ('rf', model2), ('svc', model3)],\n    voting='soft')\n\nensemble.fit(X_train, y_train)\nprint(f\"Precisión: {ensemble.score(X_test, y_test):.2%}\")"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_voting_decision_regions_001.png"
      }
    ],
    children: []
  },
  {
    id: "regresion",
    title: "Modelos de Regresión",
    subtitle: "Técnicas para predecir valores continuos a partir de datos",
    content: [
      {
        type: "text",
        value: "Los modelos de regresión son algoritmos fundamentales en machine learning que permiten predecir valores numéricos continuos. Se aplican en diversos dominios como finanzas, meteorología, medicina y negocios."
      },
      {
        type: "text",
        value: "Selección de modelo según:\n- Relación entre variables (lineal/no lineal)\n- Tamaño del dataset\n- Presencia de outliers\n- Interpretabilidad requerida\n\nMétricas comunes:\n- Error Cuadrático Medio (MSE)\n- Coeficiente R²\n- Error Absoluto Medio (MAE)"
      },
      {
        type: "img",
        value: "https://miro.medium.com/v2/resize:fit:1400/1*Q5eo6kS6QfWElMkQwA2zJw.png"
      }
    ],
    children: [
      "regresion_lineal",
      "regresion_multivariada",
      "arbol_de_decision_para_regresion",
      "random_forest_regressor",
      "gradient_boosting_regressor",
      "linear_regressor",
      "keras_regressor"
    ]
  },
  {
    id: "regresion_lineal",
    title: "Regresión Lineal Simple",
    subtitle: "Modelando relaciones lineales entre dos variables",
    content: [
      {
        type: "text",
        value: "El modelo de regresión lineal más básico que establece una relación lineal entre una variable independiente (X) y una dependiente (Y) mediante la ecuación Y = β₀ + β₁X + ε."
      },
      {
        type: "text",
        value: "Supuestos clave:\n- Linealidad\n- Homocedasticidad\n- Independencia de errores\n- Normalidad de residuos\n\nInterpretación:\n- β₀: Intercepto (valor cuando X=0)\n- β₁: Pendiente (cambio en Y por unidad de X)"
      },
      {
        type: "code",
        value: "import numpy as np\nimport matplotlib.pyplot as plt\nfrom sklearn.linear_model import LinearRegression\n\n# Datos de ejemplo\nX = np.array([1, 2, 3, 4, 5]).reshape(-1, 1)\ny = np.array([2, 4, 5, 4, 5])\n\n# Entrenar modelo\nmodel = LinearRegression()\nmodel.fit(X, y)\n\n# Predecir y visualizar\ny_pred = model.predict(X)\nplt.scatter(X, y, color='blue')\nplt.plot(X, y_pred, color='red')\nplt.title('Regresión Lineal Simple')\nplt.xlabel('X')\nplt.ylabel('y')\nplt.show()\n\nprint(f\"Intercepto (β₀): {model.intercept_:.2f}\")\nprint(f\"Pendiente (β₁): {model.coef_[0]:.2f}\")"
      },
      {
        type: "img",
        value: "https://www.statology.org/wp-content/uploads/2020/12/simpleLinearRegression.png"
      }
    ],
    children: []
  },
  {
    id: "regresion_multivariada",
    title: "Regresión Multivariada",
    subtitle: "Modelando relaciones con múltiples predictores",
    content: [
      {
        type: "text",
        value: "Extensión de la regresión lineal que incorpora múltiples variables independientes. La ecuación general es Y = β₀ + β₁X₁ + β₂X₂ + ... + βₙXₙ + ε."
      },
      {
        type: "text",
        value: "Consideraciones importantes:\n- Multicolinealidad (correlación entre predictores)\n- Selección de variables\n- Interacciones entre variables\n- Regularización (Ridge/Lasso) para alta dimensionalidad\n\nDiagnóstico:\n- Matriz de correlación\n- VIF (Factor de Inflación de Varianza)\n- Gráficos de residuos"
      },
      {
        type: "code",
        value: "import pandas as pd\nfrom sklearn.datasets import fetch_california_housing\nfrom sklearn.linear_model import LinearRegression\n\n# Dataset de ejemplo\ncalifornia = fetch_california_housing()\ndf = pd.DataFrame(california.data, columns=california.feature_names)\ndf['Target'] = california.target\n\n# Modelo multivariado\nX = df[['MedInc', 'HouseAge', 'AveRooms']]\ny = df['Target']\n\nmodel = LinearRegression()\nmodel.fit(X, y)\n\n# Resultados\nprint(\"Coeficientes:\", model.coef_)\nprint(\"Intercepto:\", model.intercept_)\nprint(\"R²:\", model.score(X, y))"
      },
      {
        type: "img",
        value: "https://www.statology.org/wp-content/uploads/2020/12/multipleLinearRegression.png"
      }
    ],
    children: []
  },
  {
    id: "arbol_de_decision_para_regresion",
    title: "Árboles de Decisión para Regresión",
    subtitle: "Modelos no paramétricos basados en reglas",
    content: [
      {
        type: "text",
        value: "Versión de árboles de decisión para problemas de regresión, donde las hojas contienen valores continuos en lugar de clases. Divide recursivamente el espacio de características en regiones y asigna el valor promedio de cada región."
      },
      {
        type: "text",
        value: "Características:\n- No requiere transformación de datos\n- Maneja relaciones no lineales\n- Interpretable visualmente\n- Sensible a pequeños cambios en datos\n\nHiperparámetros clave:\n- max_depth: Profundidad máxima\n- min_samples_split: Mínimo para dividir\n- min_samples_leaf: Mínimo en nodos hoja"
      },
      {
        type: "code",
        value: "from sklearn.tree import DecisionTreeRegressor, plot_tree\nimport matplotlib.pyplot as plt\n\n# Dataset no lineal\nX = np.sort(5 * np.random.rand(80, 1), axis=0)\ny = np.sin(X).ravel() + np.random.rand(80) * 0.2\n\n# Entrenar modelo\nmodel = DecisionTreeRegressor(max_depth=3)\nmodel.fit(X, y)\n\n# Visualizar árbol\nplt.figure(figsize=(12,8))\nplot_tree(model, filled=True, rounded=True)\nplt.show()\n\n# Visualizar predicciones\nX_test = np.arange(0.0, 5.0, 0.01)[:, np.newaxis]\ny_pred = model.predict(X_test)\nplt.scatter(X, y, color='blue')\nplt.plot(X_test, y_pred, color='red')\nplt.title('Árbol de Decisión para Regresión')"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_tree_regression_001.png"
      }
    ],
    children: []
  },
  {
    id: "random_forest_regressor",
    title: "Random Forest para Regresión",
    subtitle: "Ensemble de árboles para predicción numérica",
    content: [
      {
        type: "text",
        value: "Versión de Random Forest para problemas de regresión, que promedia las predicciones de múltiples árboles de regresión entrenados en subconjuntos aleatorios de datos y características."
      },
      {
        type: "text",
        value: "Ventajas:\n- Mayor precisión que árbol único\n- Menos propenso a overfitting\n- Feature importance incorporado\n- Maneja outliers mejor que regresión lineal\n\nConfiguración típica:\n- n_estimators: 100-500 árboles\n- max_depth: 5-30 (depende de datos)\n- min_samples_leaf: 1-5"
      },
      {
        type: "code",
        value: "from sklearn.ensemble import RandomForestRegressor\nfrom sklearn.datasets import fetch_california_housing\n\n# Dataset de ejemplo\ncalifornia = fetch_california_housing()\nX, y = california.data, california.target\n\n# Entrenar modelo\nmodel = RandomForestRegressor(n_estimators=100, random_state=42)\nmodel.fit(X, y)\n\n# Importancia de características\nimportances = model.feature_importances_\nfeatures = california.feature_names\n\nplt.barh(features, importances)\nplt.title('Importancia de Características')\nplt.show()"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_forest_importances_001.png"
      }
    ],
    children: []
  },
  {
    id: "gradient_boosting_regressor",
    title: "Gradient Boosting para Regresión",
    subtitle: "Ensemble secuencial que minimiza el error",
    content: [
      {
        type: "text",
        value: "Algoritmo de boosting que construye árboles secuencialmente, donde cada nuevo árbol corrige los errores residuales de los anteriores. Altamente efectivo para muchos problemas de regresión."
      },
      {
        type: "text",
        value: "Implementaciones populares:\n- XGBoost (optimizado para velocidad)\n- LightGBM (eficiente con grandes datos)\n- CatBoost (manejo de categóricas)\n\nHiperparámetros clave:\n- learning_rate: Tasa de aprendizaje\n- n_estimators: Número de árboles\n- max_depth: Profundidad de árboles\n- subsample: Fracción de muestras por árbol"
      },
      {
        type: "code",
        value: "from xgboost import XGBRegressor\nfrom sklearn.metrics import mean_squared_error\n\n# Entrenar modelo XGBoost\nmodel = XGBRegressor(\n    n_estimators=200,\n    learning_rate=0.1,\n    max_depth=5,\n    random_state=42\n)\nmodel.fit(X_train, y_train)\n\n# Evaluar\npredictions = model.predict(X_test)\nmse = mean_squared_error(y_test, predictions)\nprint(f\"MSE: {mse:.2f}\")\n\n# Visualizar primeros árboles\nfrom xgboost import plot_tree\nplot_tree(model, num_trees=0)\nplt.show()"
      },
      {
        type: "img",
        value: "https://xgboost.ai/images/xgboost-regression.png"
      }
    ],
    children: []
  },
  {
    id: "linear_regressor",
    title: "Linear Regressor Avanzado",
    subtitle: "Variantes de regresión lineal para casos específicos",
    content: [
      {
        type: "text",
        value: "Extensiones de la regresión lineal tradicional para manejar situaciones complejas como alta dimensionalidad, correlación entre predictores o relaciones no lineales."
      },
      {
        type: "text",
        value: "Técnicas avanzadas:\n- Ridge Regression (L2 regularization)\n- Lasso Regression (L1 regularization)\n- ElasticNet (combinación L1/L2)\n- Polynomial Regression\n- Bayesian Linear Regression\n\nSelección:\n- Ridge: Muchas características correlacionadas\n- Lasso: Selección de características\n- ElasticNet: Mezcla de ambos"
      },
      {
        type: "code",
        value: "from sklearn.linear_model import Ridge, Lasso, ElasticNet\nfrom sklearn.preprocessing import PolynomialFeatures\n\n# Regularización Ridge\nridge = Ridge(alpha=1.0)\nridge.fit(X_train, y_train)\n\n# Regularización Lasso (selección de características)\nlasso = Lasso(alpha=0.1)\nlasso.fit(X_train, y_train)\n\n# Regresión polinomial\ndegree = 2\npoly = PolynomialFeatures(degree)\nX_poly = poly.fit_transform(X)\nmodel = LinearRegression()\nmodel.fit(X_poly, y)"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_ridge_path_001.png"
      }
    ],
    children: []
  },
  {
    id: "keras_regressor",
    title: "Redes Neuronales para Regresión",
    subtitle: "Modelos profundos para relaciones complejas",
    content: [
      {
        type: "text",
        value: "Arquitecturas neuronales capaces de modelar relaciones no lineales complejas en datos de alta dimensión. Ideal cuando las técnicas tradicionales no capturan los patrones subyacentes."
      },
      {
        type: "text",
        value: "Configuraciones típicas:\n- Capas densas con activación ReLU\n- Dropout para regularización\n- Normalización por lotes\n- Función de pérdida MSE o MAE\n- Optimizador Adam o RMSprop\n\nBuenas prácticas:\n- Escalado de características\n- Early stopping\n- Ajuste de tasa de aprendizaje"
      },
      {
        type: "code",
        value: "from tensorflow.keras.models import Sequential\nfrom tensorflow.keras.layers import Dense, Dropout\nfrom tensorflow.keras.callbacks import EarlyStopping\n\n# Crear modelo\nmodel = Sequential([\n    Dense(64, activation='relu', input_shape=(X_train.shape[1],)),\n    Dropout(0.2),\n    Dense(32, activation='relu'),\n    Dense(1)  # Capa de salida sin activación\n])\n\n# Compilar\nmodel.compile(optimizer='adam', loss='mse')\n\n# Early stopping\nes = EarlyStopping(monitor='val_loss', patience=5)\n\n# Entrenar\nhistory = model.fit(\n    X_train, y_train,\n    validation_split=0.2,\n    epochs=100,\n    batch_size=32,\n    callbacks=[es],\n    verbose=1\n)\n\n# Evaluar\nloss = model.evaluate(X_test, y_test)\nprint(f\"MSE en test: {loss:.2f}\")"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig8/AS:779806395908096@1562867643806/Neural-network-for-regression.png"
      }
    ],
    children: []
  },
  {
    id: "aprendizaje_no_supervisado",
    title: "Aprendizaje No Supervisado",
    subtitle: "Descubriendo patrones ocultos en datos sin etiquetar",
    content: [
      {
        type: "text",
        value: "Conjunto de técnicas que analizan datos sin respuestas conocidas, identificando estructuras intrínsecas. Esencial para exploración de datos, reducción de dimensionalidad y agrupamiento."
      },
      {
        type: "text",
        value: "Aplicaciones clave:\n- Segmentación de clientes\n- Detección de anomalías\n- Compresión de características\n- Preprocesamiento para modelos supervisados\n- Descubrimiento de temas en texto"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig1/AS:779806395908096@1562867643806/Unsupervised-learning-vs-supervised-learning.png"
      }
    ],
    children: [
      "clustering",
      "reduccion_de_dimensionalidad",
      "modelado_probabilistico"
    ]
  },
  {
    id: "clustering",
    title: "Algoritmos de Clustering",
    subtitle: "Técnicas para agrupamiento automático de datos",
    content: [
      {
        type: "text",
        value: "Métodos que dividen conjuntos de datos en grupos homogéneos (clusters) donde elementos similares están juntos y disímiles separados. Fundamental para análisis exploratorio."
      },
      {
        type: "text",
        value: "Criterios de selección:\n- Forma de los clusters (esférica, arbitraria)\n- Escalabilidad\n- Sensibilidad a parámetros\n- Capacidad para manejar ruido\n\nMétricas de evaluación:\n- Silhouette Score\n- Davies-Bouldin Index\n- Calinski-Harabasz Index"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_cluster_comparison_001.png"
      }
    ],
    children: [
      "kmeans",
      "dbscan",
      "optics",
      "hierarchical_clustering",
      "gaussian_mixture_models"
    ]
  },
  {
    id: "kmeans",
    title: "K-Means Clustering",
    subtitle: "Agrupamiento particional basado en centroides",
    content: [
      {
        type: "text",
        value: "Algoritmo iterativo que divide n observaciones en k clusters donde cada observación pertenece al cluster con el centroide más cercano. Popular por su simplicidad y eficiencia."
      },
      {
        type: "text",
        value: "Características:\n- Requiere especificar k (núm. clusters)\n- Sensible a inicialización de centroides\n- Óptimo para clusters esféricos de tamaño similar\n\nVariantes avanzadas:\n- K-Means++ (inicialización inteligente)\n- Mini-Batch K-Means (para grandes datasets)"
      },
      {
        type: "code",
        value: "from sklearn.cluster import KMeans\nimport matplotlib.pyplot as plt\n\n# Datos de ejemplo\nX = np.array([[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]])\n\n# K-Means con 2 clusters\nkmeans = KMeans(n_clusters=2, random_state=42).fit(X)\nlabels = kmeans.labels_\ncentroids = kmeans.cluster_centers_\n\n# Visualización\nplt.scatter(X[:,0], X[:,1], c=labels, cmap='viridis')\nplt.scatter(centroids[:,0], centroids[:,1], marker='X', s=200, color='red')\nplt.title('Resultado de K-Means')\nplt.show()"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_kmeans_assumptions_001.png"
      }
    ],
    children: []
  },
  {
    id: "dbscan",
    title: "DBSCAN",
    subtitle: "Clustering basado en densidad",
    content: [
      {
        type: "text",
        value: "Algoritmo que agrupa puntos cercanos en espacio (alta densidad) y marca como outliers los puntos en regiones de baja densidad. No requiere especificar número de clusters."
      },
      {
        type: "text",
        value: "Parámetros clave:\n- eps: Distancia máxima entre vecinos\n- min_samples: Mínimo puntos para ser núcleo\n\nVentajas:\n- Descubre clusters de forma arbitraria\n- Robusto a outliers\n- No necesita k inicial\n\nLimitaciones:\n- Sensible a elección de parámetros\n- Dificultad con clusters de densidad variable"
      },
      {
        type: "code",
        value: "from sklearn.cluster import DBSCAN\nfrom sklearn.datasets import make_moons\n\n# Datos no lineales\nX, _ = make_moons(n_samples=300, noise=0.05, random_state=42)\n\n# Aplicar DBSCAN\ndbscan = DBSCAN(eps=0.3, min_samples=5)\nclusters = dbscan.fit_predict(X)\n\n# Visualizar\nplt.scatter(X[:,0], X[:,1], c=clusters, cmap='viridis')\nplt.title('DBSCAN: Clustering basado en densidad')\nplt.show()"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_dbscan_001.png"
      }
    ],
    children: []
  },
  {
    id: "optics",
    title: "OPTICS",
    subtitle: "Versión mejorada de DBSCAN para densidades variables",
    content: [
      {
        type: "text",
        value: "Variante de DBSCAN que maneja mejor clusters con densidades diferentes. Crea un orden de puntos alcanzables que permite extraer clusters a múltiples niveles de densidad."
      },
      {
        type: "text",
        value: "Mejoras sobre DBSCAN:\n- No requiere eps fijo (usa rango)\n- Detecta jerarquías de densidad\n- Menos sensible a parámetros\n\nOutput principal:\n- Reachability plot: Visualización de estructura de clusters\n- Cluster hierarchy: Extracción a múltiples escalas"
      },
      {
        type: "code",
        value: "from sklearn.cluster import OPTICS\nimport numpy as np\n\n# Datos con densidades variables\nX = np.vstack([\n    np.random.normal(0, 1, (100, 2)),\n    np.random.normal(5, 0.5, (200, 2)),\n    np.random.normal(10, 1.5, (50, 2))\n])\n\n# OPTICS con parámetros amplios\nclustering = OPTICS(min_samples=10, xi=0.05, min_cluster_size=0.1)\nclustering.fit(X)\n\n# Visualizar reachability plot\nplt.figure(figsize=(10, 5))\nplt.plot(clustering.reachability_[clustering.ordering_], marker='.')\nplt.title('Reachability Plot (OPTICS)')\nplt.ylabel('Reachability distance')\nplt.show()"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_optics_001.png"
      }
    ],
    children: []
  },
  {
    id: "hierarchical_clustering",
    title: "Clustering Jerárquico",
    subtitle: "Construcción de jerarquías de clusters",
    content: [
      {
        type: "text",
        value: "Familia de algoritmos que construyen una estructura de árbol de clusters (dendrograma), permitiendo análisis a múltiples niveles de granularidad sin necesidad de especificar k inicial."
      },
      {
        type: "text",
        value: "Enfoques principales:\n- Aglomerativo (bottom-up): Fusiona clusters similares\n- Divisivo (top-down): Divide clusters grandes\n\nMétodos de enlace:\n- Ward (minimiza varianza)\n- Complete linkage (máxima distancia)\n- Average linkage (distancia promedio)\n- Single linkage (mínima distancia)"
      },
      {
        type: "code",
        value: "from scipy.cluster.hierarchy import dendrogram, linkage\nfrom sklearn.datasets import load_iris\n\n# Cargar datos de iris\niris = load_iris()\nX = iris.data[:20]  # Usamos subset para visualización\n\n# Clustering jerárquico aglomerativo\nZ = linkage(X, 'ward')\n\n# Visualizar dendrograma\nplt.figure(figsize=(12, 5))\nplt.title('Dendrograma de Clustering Jerárquico')\ndendrogram(Z, labels=iris.target_names[iris.target[:20]])\nplt.xticks(rotation=45)\nplt.show()"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_agglomerative_dendrogram_001.png"
      }
    ],
    children: []
  },
  {
    id: "gaussian_mixture_models",
    title: "Modelos de Mezcla Gaussianos (GMM)",
    subtitle: "Clustering probabilístico basado en distribuciones",
    content: [
      {
        type: "text",
        value: "Enfoque probabilístico que modela los datos como combinación de múltiples distribuciones gaussianas. Asigna probabilidades de pertenencia a cada cluster en lugar de asignaciones rígidas."
      },
      {
        type: "text",
        value: "Ventajas clave:\n- Clusteres de forma elíptica (más flexible que K-Means)\n- Incertidumbre en asignaciones\n- Bases probabilísticas sólidas\n\nAplicaciones:\n- Modelado de subpoblaciones\n- Análisis de componentes\n- Detección de outliers"
      },
      {
        type: "code",
        value: "from sklearn.mixture import GaussianMixture\n\n# Datos de ejemplo\nX = np.concatenate([\n    np.random.normal(0, 1, (300, 2)),\n    np.random.normal(5, 1, (200, 2))\n])\n\n# Ajustar GMM con 2 componentes\ngmm = GaussianMixture(n_components=2, random_state=42)\ngmm.fit(X)\nlabels = gmm.predict(X)\nprobs = gmm.predict_proba(X)\n\n# Visualizar\nplt.scatter(X[:,0], X[:,1], c=labels, cmap='viridis', alpha=0.5)\nplt.title('Clustering con GMM')\nplt.show()"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_gmm_001.png"
      }
    ],
    children: []
  },
  {
    id: "modelado_probabilistico",
    title: "Modelado Probabilístico",
    subtitle: "Enfoques estadísticos para aprendizaje no supervisado",
    content: [
      {
        type: "text",
        value: "Técnicas que modelan explícitamente la distribución de probabilidad subyacente a los datos, permitiendo inferencia bayesiana y manejo de incertidumbre en el descubrimiento de patrones."
      },
      {
        type: "text",
        value: "Aplicaciones avanzadas:\n- Topic Modeling (LDA)\n- Sistemas de recomendación\n- Procesamiento de señales\n- Análisis de secuencias\n\nFamilias de modelos:\n- Modelos gráficos probabilísticos\n- Procesos gaussianos\n- Modelos de variables latentes"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig2/AS:779806395908096@1562867643806/Probabilistic-graphical-models.png"
      }
    ],
    children: [
      "cadenas_de_markov"
    ]
  },
  {
    id: "cadenas_de_markov",
    title: "Cadenas de Markov",
    subtitle: "Modelos de dependencia secuencial",
    content: [
      {
        type: "text",
        value: "Sistema estocástico que satisface la propiedad de Markov: el estado futuro solo depende del estado presente, no de la historia completa. Fundamental para modelar secuencias y procesos temporales."
      },
      {
        type: "text",
        value: "Componentes clave:\n- Estados del sistema\n- Matriz de transición\n- Distribución inicial\n\nAplicaciones en NLP:\n- Modelado de lenguaje n-gram\n- Sistemas de recomendación secuenciales\n- Análisis de comportamiento de usuarios"
      },
      {
        type: "code",
        value: "import numpy as np\n\n# Definir matriz de transición (ejemplo: clima)\ntransition_matrix = np.array([\n    [0.7, 0.2, 0.1],  # Soleado -> Soleado, Nublado, Lluvia\n    [0.3, 0.4, 0.3],  # Nublado\n    [0.2, 0.3, 0.5]   # Lluvia\n])\n\n# Simular trayectoria\ndef simulate_markov(transition_matrix, initial_state, n_steps):\n    states = ['Soleado', 'Nublado', 'Lluvia']\n    sequence = [initial_state]\n    for _ in range(n_steps):\n        next_state = np.random.choice(\n            len(states),\n            p=transition_matrix[states.index(sequence[-1])]\n        )\n        sequence.append(states[next_state])\n    return sequence\n\n# Ejecutar simulación\nprint(simulate_markov(transition_matrix, 'Soleado', 10))"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig3/AS:779806395908096@1562867643806/Markov-chain-example.png"
      }
    ],
    children: []
  },
  {
    id: "aprendizaje_semisupervisado",
    title: "Aprendizaje Semi-supervisado",
    subtitle: "Combinando datos etiquetados y no etiquetados para mejorar el aprendizaje",
    content: [
      {
        type: "text",
        value: "Paradigma que utiliza simultáneamente datos etiquetados (generalmente pocos) y no etiquetados (abundantes) para construir modelos más precisos que los supervisados tradicionales."
      },
      {
        type: "text",
        value: "Suposición fundamental:\n- Consistencia de manifold: Puntos cercanos en alta densidad tienen etiquetas similares\n- Cluster assumption: Los datos forman clusters discretos\n\nAplicaciones típicas:\n- Procesamiento de lenguaje\n- Visión por computadora\n- Sistemas de recomendación"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig1/AS:779806395908096@1562867643806/Semi-supervised-learning-framework.png"
      }
    ],
    children: [
      "selftraining",
      "cotraining",
      "label_propagation",
      "graphbased_learning"
    ]
  },
  {
    id: "selftraining",
    title: "Self-training",
    subtitle: "Aprendizaje iterativo con auto-etiquetado",
    content: [
      {
        type: "text",
        value: "Algoritmo que entrena inicialmente con datos etiquetados, luego usa el modelo para predecir etiquetas en datos no etiquetados (con alta confianza), y repite el proceso expandiendo el conjunto de entrenamiento."
      },
      {
        type: "text",
        value: "Flujo típico:\n1. Entrenar modelo con datos etiquetados\n2. Predecir en datos no etiquetados\n3. Añadir predicciones más confiables al conjunto etiquetado\n4. Repetir hasta convergencia\n\nConsideraciones:\n- Riesgo de propagar errores (error accumulation)\n- Umbrales de confianza críticos\n- Funciona mejor con modelos probabilísticos"
      },
      {
        type: "code",
        value: "from sklearn.semi_supervised import SelfTrainingClassifier\nfrom sklearn.ensemble import RandomForestClassifier\n\n# Datos: algunos etiquetados (>=0), otros no (-1)\nX = np.array([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6]])\ny = np.array([0, 1, -1, -1, -1, -1])  # Solo 2 etiquetados\n\n# Modelo base\nbase_model = RandomForestClassifier()\n\n# Self-training\nself_training_model = SelfTrainingClassifier(base_model, threshold=0.8)\nself_training_model.fit(X, y)\n\nprint(\"Etiquetas predichas:\", self_training_model.predict(X))"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig2/AS:779806395908096@1562867643806/Self-training-algorithm.png"
      }
    ],
    children: []
  },
  {
    id: "cotraining",
    title: "Co-training",
    subtitle: "Aprendizaje colaborativo con múltiples vistas",
    content: [
      {
        type: "text",
        value: "Algoritmo que utiliza dos o más modelos entrenados en diferentes subconjuntos de características (vistas), que se enseñan mutuamente etiquetando datos no etiquetados para el otro modelo."
      },
      {
        type: "text",
        value: "Condiciones para aplicar:\n- Características pueden dividirse en vistas independientes\n- Cada vista es suficiente para clasificación\n- Las vistas son condicionalmente independientes\n\nVariantes modernas:\n- Multi-view learning\n- Tri-training (con 3 modelos)"
      },
      {
        type: "code",
        value: "from sklearn.naive_bayes import GaussianNB\n\n# Vista 1: Primeras 2 características, Vista 2: Últimas 2 características\nX = np.random.rand(100, 4)\ny = np.random.randint(0, 2, 100)\ny[50:] = -1  # Hacer la mitad no etiquetados\n\n# Modelos para cada vista\nmodel1 = GaussianNB()\nmodel2 = GaussianNB()\n\n# Co-training manual (simplificado)\nfor _ in range(5):\n    # Entrenar cada modelo con sus etiquetas\n    model1.fit(X[:50, :2], y[:50])\n    model2.fit(X[:50, 2:], y[:50])\n    \n    # Predecir en no etiquetados y agregar las más confiables\n    prob1 = model1.predict_proba(X[50:, :2])\n    prob2 = model2.predict_proba(X[50:, 2:])\n    \n    # Añadir predicciones con alta confianza\n    high_conf_idx = np.max(prob1, axis=1) > 0.9\n    y[50:][high_conf_idx] = np.argmax(prob1[high_conf_idx], axis=1)"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig3/AS:779806395908096@1562867643806/Co-training-algorithm.png"
      }
    ],
    children: []
  },
  {
    id: "label_propagation",
    title: "Label Propagation",
    subtitle: "Difusión de etiquetas basada en similitud",
    content: [
      {
        type: "text",
        value: "Algoritmo que modela los datos como un grafo donde las etiquetas se propagan de nodos etiquetados a no etiquetados según su proximidad en el espacio de características."
      },
      {
        type: "text",
        value: "Conceptos clave:\n- Matriz de afinidad (similaridad entre puntos)\n- Matriz de transición (probabilidad de propagación)\n- Clamping factor (fijación de etiquetas conocidas)\n\nAplicaciones:\n- Clasificación de imágenes\n- Análisis de redes sociales\n- Sistemas de recomendación"
      },
      {
        type: "code",
        value: "from sklearn.semi_supervised import LabelPropagation\n\n# Dataset con solo 2 puntos etiquetados\nX = np.array([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]])\ny = np.array([0, 1, -1, -1, -1])  # -1 indica no etiquetado\n\n# Label Propagation\nlabel_prop_model = LabelPropagation(kernel='rbf', gamma=0.5)\nlabel_prop_model.fit(X, y)\n\nprint(\"Etiquetas propagadas:\", label_prop_model.transduction_)"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_label_propagation_structure_001.png"
      }
    ],
    children: []
  },
  {
    id: "graphbased_learning",
    title: "Graph-based Learning",
    subtitle: "Modelado explícito de relaciones como grafo",
    content: [
      {
        type: "text",
        value: "Enfoque que construye un grafo donde los nodos son instancias de datos y las aristas representan relaciones de similitud, permitiendo propagar información a través de la estructura del grafo."
      },
      {
        type: "text",
        value: "Técnicas avanzadas:\n- Label Spreading (versión regularizada de Label Propagation)\n- Manifold regularization\n- Graph Neural Networks (redes neuronales que operan sobre grafos)\n\nVentajas:\n- Captura relaciones complejas\n- Efectivo para datos no euclidianos\n- Combina estructura y atributos"
      },
      {
        type: "code",
        value: "from sklearn.semi_supervised import LabelSpreading\nfrom sklearn.metrics.pairwise import rbf_kernel\n\n# Construir matriz de afinidad\naffinity_matrix = rbf_kernel(X, gamma=0.5)\n\n# Label Spreading\nlabel_spread = LabelSpreading(kernel='precomputed')\nlabel_spread.fit(affinity_matrix, y)\n\nprint(\"Etiquetas finales:\", label_spread.transduction_)"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig4/AS:779806395908096@1562867643806/Graph-based-semi-supervised-learning.png"
      }
    ],
    children: []
  },
  {
    id: "aprendizaje_por_refuerzo",
    title: "Aprendizaje por Refuerzo",
    subtitle: "Agentes que aprenden mediante interacción y recompensas",
    content: [
      {
        type: "text",
        value: "Paradigma donde un agente aprende a tomar decisiones óptimas interactuando con un entorno dinámico, recibiendo recompensas o penalizaciones por sus acciones."
      },
      {
        type: "text",
        value: "Componentes esenciales:\n- Agente: Entidad que toma decisiones\n- Entorno: Mundo con el que interactúa\n- Acciones: Operaciones que puede realizar\n- Recompensas: Feedback numérico\n- Política: Estrategia de mapeo estados→acciones"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig5/AS:779806395908096@1562867643806/Reinforcement-learning-framework.png"
      }
    ],
    children: [
      "agente__entorno__recompensa",
      "qlearning",
      "deep_qnetworks_dqn",
      "policy_gradient",
      "actorcritic",
      "refuerzo_ejemplos"
    ]
  },
  {
    id: "agente__entorno__recompensa",
    title: "Agente, Entorno y Recompensa",
    subtitle: "Fundamentos del aprendizaje por refuerzo",
    content: [
      {
        type: "text",
        value: "Estructura básica donde un agente observa el estado del entorno, ejecuta acciones que modifican el estado, y recibe recompensas que guían su proceso de aprendizaje."
      },
      {
        type: "text",
        value: "Conceptos clave:\n- Espacio de estados (S)\n- Espacio de acciones (A)\n- Función de recompensa (R)\n- Política (π: S → A)\n- Retorno descontado (G = ΣγR)\n\nTipos de entornos:\n- Episódicos vs continuos\n- Deterministas vs estocásticos\n- Observables vs parcialmente observables"
      },
      {
        type: "code",
        value: "import gym\n\n# Crear entorno clásico (CartPole)\nenv = gym.make('CartPole-v1')\n\n# Interacción básica\nstate = env.reset()\ndone = False\ntotal_reward = 0\n\nwhile not done:\n    action = env.action_space.sample()  # Política aleatoria\n    next_state, reward, done, info = env.step(action)\n    total_reward += reward\n    \nprint(f\"Recompensa total: {total_reward}\")"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig6/AS:779806395908096@1562867643806/Agent-environment-interaction.png"
      }
    ],
    children: []
  },
  {
    id: "qlearning",
    title: "Q-Learning",
    subtitle: "Algoritmo de diferencia temporal fuera de política",
    content: [
      {
        type: "text",
        value: "Algoritmo basado en valores que aprende una función Q(s,a) que estima el retorno esperado de tomar una acción en un estado dado, siguiendo luego la política óptima."
      },
      {
        type: "text",
        value: "Ecuación de actualización:\nQ(s,a) ← Q(s,a) + α[r + γ maxₐ' Q(s',a') - Q(s,a)]\n\nParámetros:\n- α: Tasa de aprendizaje\n- γ: Factor de descuento\n- ε: Probabilidad de exploración\n\nPropiedades:\n- Off-policy (aprende la política óptima independientemente de las acciones tomadas)\n- Converge al óptimo en condiciones ideales"
      },
      {
        type: "code",
        value: "import numpy as np\n\n# Implementación básica de Q-Learning\nclass QLearningAgent:\n    def __init__(self, n_states, n_actions, alpha=0.1, gamma=0.99, epsilon=0.1):\n        self.q_table = np.zeros((n_states, n_actions))\n        self.alpha = alpha\n        self.gamma = gamma\n        self.epsilon = epsilon\n    \n    def choose_action(self, state):\n        if np.random.random() < self.epsilon:\n            return np.random.choice(len(self.q_table[state]))\n        return np.argmax(self.q_table[state])\n    \n    def learn(self, state, action, reward, next_state):\n        best_next_action = np.argmax(self.q_table[next_state])\n        td_target = reward + self.gamma * self.q_table[next_state][best_next_action]\n        td_error = td_target - self.q_table[state][action]\n        self.q_table[state][action] += self.alpha * td_error"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig7/AS:779806395908096@1562867643806/Q-learning-algorithm.png"
      }
    ],
    children: []
  },
  {
    id: "deep_qnetworks_dqn",
    title: "Deep Q-Networks (DQN)",
    subtitle: "Aprendizaje por refuerzo profundo con redes neuronales",
    content: [
      {
        type: "text",
        value: "DQN combina Q-Learning con redes neuronales profundas para manejar espacios de estados complejos y continuos. Fue pionero en lograr desempeño a nivel humano en juegos de Atari."
      },
      {
        type: "text",
        value: "Innovaciones clave:\n• Experience Replay: Almacena transiciones para romper correlaciones\n• Target Network: Red separada para cálculos estables\n• Frame Stacking: Manejo de información temporal\n\nHiperparámetros críticos:\n• Tamaño del buffer de replay\n• Frecuencia de actualización del target network\n• Tamaño del batch"
      },
      {
        type: "code",
        value: "import tensorflow as tf\nfrom collections import deque\nimport random\n\nclass DQNAgent:\n    def __init__(self, state_size, action_size):\n        self.state_size = state_size\n        self.action_size = action_size\n        self.memory = deque(maxlen=2000)\n        self.gamma = 0.95    # Factor de descuento\n        self.epsilon = 1.0   # Tasa de exploración\n        self.epsilon_min = 0.01\n        self.epsilon_decay = 0.995\n        self.learning_rate = 0.001\n        self.model = self._build_model()\n        self.target_model = self._build_model()\n\n    def _build_model(self):\n        model = tf.keras.Sequential([\n            tf.keras.layers.Dense(24, input_dim=self.state_size, activation='relu'),\n            tf.keras.layers.Dense(24, activation='relu'),\n            tf.keras.layers.Dense(self.action_size, activation='linear')\n        ])\n        model.compile(loss='mse', optimizer=tf.keras.optimizers.Adam(lr=self.learning_rate))\n        return model\n\n    def remember(self, state, action, reward, next_state, done):\n        self.memory.append((state, action, reward, next_state, done))\n\n    def act(self, state):\n        if np.random.rand() <= self.epsilon:\n            return random.randrange(self.action_size)\n        act_values = self.model.predict(state)\n        return np.argmax(act_values[0])"
      },
      {
        type: "img",
        value: "https://miro.medium.com/v2/resize:fit:1400/1*5Wq0h7VXug9pBQqKL1hJxg.png"
      }
    ],
    children: []
  },
  {
    id: "policy_gradient",
    title: "Policy Gradient Methods",
    subtitle: "Optimización directa de políticas con gradientes",
    content: [
      {
        type: "text",
        value: "Enfoque que parametriza directamente la política y la optimiza usando el gradiente del retorno esperado. Especialmente útil para espacios de acción continuos y políticas estocásticas."
      },
      {
        type: "text",
        value: "Ventajas clave:\n• Maneja acciones continuas naturalmente\n• Converge a políticas estocásticas óptimas\n• Menos oscilaciones durante el entrenamiento\n\nAlgoritmos principales:\n• REINFORCE (Monte Carlo básico)\n• PPO (Proximal Policy Optimization)\n• TRPO (Trust Region Policy Optimization)"
      },
      {
        type: "code",
        value: "import tensorflow as tf\nimport tensorflow_probability as tfp\n\nclass PolicyGradientAgent:\n    def __init__(self, state_size, action_size):\n        self.state_size = state_size\n        self.action_size = action_size\n        self.gamma = 0.99\n        self.learning_rate = 0.01\n        \n        self.model = tf.keras.Sequential([\n            tf.keras.layers.Dense(24, input_dim=self.state_size, activation='relu'),\n            tf.keras.layers.Dense(24, activation='relu'),\n            tf.keras.layers.Dense(self.action_size, activation='softmax')\n        ])\n        self.optimizer = tf.keras.optimizers.Adam(learning_rate=self.learning_rate)\n\n    def act(self, state):\n        state = tf.convert_to_tensor([state], dtype=tf.float32)\n        probs = self.model(state)\n        action_dist = tfp.distributions.Categorical(probs=probs)\n        action = action_dist.sample()\n        return action.numpy()[0], action_dist.log_prob(action)\n\n    def train(self, states, actions, rewards):\n        discounted_rewards = []\n        cumulative = 0\n        for r in reversed(rewards):\n            cumulative = r + self.gamma * cumulative\n            discounted_rewards.insert(0, cumulative)\n        \n        discounted_rewards = tf.convert_to_tensor(discounted_rewards, dtype=tf.float32)\n        discounted_rewards = (discounted_rewards - tf.reduce_mean(discounted_rewards)) / \n                           (tf.math.reduce_std(discounted_rewards) + 1e-7)\n        \n        with tf.GradientTape() as tape:\n            loss = 0\n            for state, action, log_prob, reward in zip(states, actions, log_probs, discounted_rewards):\n                state = tf.convert_to_tensor([state], dtype=tf.float32)\n                probs = self.model(state)\n                action_dist = tfp.distributions.Categorical(probs=probs)\n                log_prob = action_dist.log_prob(action)\n                loss -= log_prob * reward\n        \n        grads = tape.gradient(loss, self.model.trainable_variables)\n        self.optimizer.apply_gradients(zip(grads, self.model.trainable_variables))"
      },
      {
        type: "img",
        value: "https://spinningup.openai.com/en/latest/_images/math/959511f15d6d3d9e9b9d165a118c0ecc5d1c23d3.svg"
      }
    ],
    children: []
  },
  {
    id: "actorcritic",
    title: "Métodos Actor-Critic",
    subtitle: "Combinando lo mejor de Policy Gradient y Q-Learning",
    content: [
      {
        type: "text",
        value: "Arquitectura híbrida donde:\n• Actor: Actualiza la política (como en Policy Gradient)\n• Crítico: Evalúa acciones usando una función de valor\n\nBeneficios:\n• Menor varianza que Policy Gradient puro\n• Más estable que Q-Learning para políticas estocásticas\n• Mejor convergencia en problemas complejos"
      },
      {
        type: "text",
        value: "Variantes avanzadas:\n• A2C (Advantage Actor-Critic)\n• A3C (Asynchronous Advantage Actor-Critic)\n• SAC (Soft Actor-Critic)\n• TD3 (Twin Delayed DDPG)\n\nComponentes clave:\n• Función de valor (V)\n• Función de ventaja (A)\n• Entropía (para exploración)"
      },
      {
        type: "code",
        value: "class ActorCriticAgent:\n    def __init__(self, state_size, action_size):\n        self.state_size = state_size\n        self.action_size = action_size\n        self.gamma = 0.99  # Factor de descuento\n        \n        # Actor (Policy)\n        self.actor = self._build_actor()\n        self.actor_optimizer = tf.keras.optimizers.Adam(0.001)\n        \n        # Critic (Value function)\n        self.critic = self._build_critic()\n        self.critic_optimizer = tf.keras.optimizers.Adam(0.002)\n    \n    def _build_actor(self):\n        inputs = tf.keras.layers.Input(shape=(self.state_size,))\n        dense1 = tf.keras.layers.Dense(64, activation='relu')(inputs)\n        dense2 = tf.keras.layers.Dense(64, activation='relu')(dense1)\n        outputs = tf.keras.layers.Dense(self.action_size, activation='softmax')(dense2)\n        return tf.keras.Model(inputs, outputs)\n    \n    def _build_critic(self):\n        inputs = tf.keras.layers.Input(shape=(self.state_size,))\n        dense1 = tf.keras.layers.Dense(64, activation='relu')(inputs)\n        dense2 = tf.keras.layers.Dense(64, activation='relu')(dense1)\n        outputs = tf.keras.layers.Dense(1, activation='linear')(dense2)\n        return tf.keras.Model(inputs, outputs)\n    \n    def act(self, state):\n        state = tf.convert_to_tensor([state], dtype=tf.float32)\n        probs = self.actor(state)\n        action_dist = tfp.distributions.Categorical(probs=probs)\n        action = action_dist.sample()\n        return action.numpy()[0], action_dist.log_prob(action)\n    \n    def learn(self, states, actions, rewards, next_states, dones):\n        states = tf.convert_to_tensor(states, dtype=tf.float32)\n        actions = tf.convert_to_tensor(actions, dtype=tf.float32)\n        rewards = tf.convert_to_tensor(rewards, dtype=tf.float32)\n        next_states = tf.convert_to_tensor(next_states, dtype=tf.float32)\n        \n        with tf.GradientTape(persistent=True) as tape:\n            # Cálculo del valor actual y siguiente\n            values = self.critic(states)\n            next_values = self.critic(next_states)\n            \n            # Cálculo de targets y ventajas\n            td_targets = rewards + self.gamma * next_values * (1 - dones)\n            advantages = td_targets - values\n            \n            # Pérdida del crítico\n            critic_loss = tf.keras.losses.MSE(td_targets, values)\n            \n            # Pérdida del actor\n            probs = self.actor(states)\n            action_dist = tfp.distributions.Categorical(probs=probs)\n            log_probs = action_dist.log_prob(actions)\n            actor_loss = -tf.reduce_mean(log_probs * advantages)\n        \n        # Actualización de redes\n        actor_grads = tape.gradient(actor_loss, self.actor.trainable_variables)\n        critic_grads = tape.gradient(critic_loss, self.critic.trainable_variables)\n        self.actor_optimizer.apply_gradients(zip(actor_grads, self.actor.trainable_variables))\n        self.critic_optimizer.apply_gradients(zip(critic_grads, self.critic.trainable_variables))"
      },
      {
        type: "img",
        value: "https://spinningup.openai.com/en/latest/_images/math/7a1a43c2354eec3a9c898b5a3462e22a0a4b3e12.svg"
      }
    ],
    children: []
  },
  {
    id: "refuerzo_ejemplos",
    title: "Aplicaciones Reales de RL",
    subtitle: "Casos de éxito en el mundo real",
    content: [
      {
        type: "text",
        value: "El aprendizaje por refuerzo ha demostrado capacidades sobresalientes en dominios complejos, superando a humanos expertos en diversas tareas especializadas."
      },
      {
        type: "text",
        value: "Áreas de impacto:\n• Juegos: Go, Dota 2, StarCraft II\n• Robótica: Manipulación de objetos, locomoción\n• Finanzas: Trading algorítmico, gestión de carteras\n• Salud: Optimización de protocolos de tratamiento\n• Logística: Enrutamiento de vehículos, gestión de inventarios\n• Energía: Control de redes eléctricas"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig1/AS:779806395908096@1562867643806/RL-applications-overview.png"
      }
    ],
    children: [
      "alphago",
      "openai_five"
    ]
  },
  {
    id: "alphago",
    title: "AlphaGo y AlphaZero",
    subtitle: "Revolucionando el juego de Go",
    content: [
      {
        type: "text",
        value: "Desarrollado por DeepMind, AlphaGo fue el primer programa en derrotar a un campeón mundial humano de Go, un juego con más configuraciones posibles que átomos en el universo observable."
      },
      {
        type: "text",
        value: "Evolución clave:\n• AlphaGo Fan: Versión inicial (2015)\n• AlphaGo Lee: Venció a Lee Sedol 4-1 (2016)\n• AlphaGo Master: 60-0 vs profesionales (2017)\n• AlphaZero: Aprendizaje desde cero sin datos humanos (2017)\n\nComponentes técnicos:\n• Red de políticas (selección de movimientos)\n• Red de valores (evaluación de posiciones)\n• Búsqueda Monte Carlo en árboles (MCTS)\n• Aprendizaje por autojuego (self-play)"
      },
      {
        type: "img",
        value: "https://miro.medium.com/v2/resize:fit:1400/1*8pKc9vXH6qkSmQ-5B7DlCQ.png"
      }
    ],
    children: []
  },
  {
    id: "openai_five",
    title: "OpenAI Five",
    subtitle: "Dominando Dota 2 con RL",
    content: [
      {
        type: "text",
        value: "Sistema desarrollado por OpenAI que aprendió a jugar Dota 2, un juego de estrategia en tiempo real con:\n• Información parcial del estado\n• Acciones continuas\n• Horizonte temporal largo (>45 minutos)\n• Coordinación entre 5 agentes"
      },
      {
        type: "text",
        value: "Logros destacados:\n• Venció al equipo campeón OG (2019)\n• 180 años de juego simulado por día\n• Usó LSTM para manejar información parcial\n• Reward shaping cuidadosamente diseñado\n\nArquitectura técnica:\n• 128,000 CPUs para entrenamiento\n• Batch size de 1 millón de muestras\n• Entrenamiento equivalente a 45,000 años humanos"
      },
      {
        type: "img",
        value: "https://cdn.openai.com/research-covers/openai-five/openai-five-architecture.png"
      }
    ],
    children: []
  },
  {
    id: "weak_supervision",
    title: "Weak Supervision",
    subtitle: "Técnicas para entrenar modelos con datos débilmente etiquetados",
    content: [
      {
        type: "text",
        value: "Paradigma que permite entrenar modelos de machine learning utilizando fuentes de etiquetado ruidosas, incompletas o limitadas, en lugar de datos perfectamente etiquetados."
      },
      {
        type: "text",
        value: "Ventajas clave:\n• Reduce costos de etiquetado manual\n• Escala a grandes volúmenes de datos\n• Combina múltiples fuentes de señal\n\nCasos de uso típicos:\n• Procesamiento de lenguaje natural\n• Visión por computadora\n• Análisis de documentos"
      },
      {
        type: "img",
        value: "https://www.snorkel.org/wp-content/uploads/2021/02/weak-supervision-overview.png"
      }
    ],
    children: [
      "distant_supervision",
      "data_programming_snorkel",
      "heuristicas_basadas_en_reglas"
    ]
  },
  {
    id: "distant_supervision",
    title: "Distant Supervision",
    subtitle: "Generación automática de etiquetas mediante conocimiento externo",
    content: [
      {
        type: "text",
        value: "Técnica que utiliza bases de conocimiento estructuradas (como Wikidata) para etiquetar automáticamente datos no estructurados, asumiendo que cualquier mención de una entidad en el texto hereda las relaciones de la base de conocimiento."
      },
      {
        type: "text",
        value: "Flujo típico:\n1. Alinear entidades del texto con base de conocimiento\n2. Transferir relaciones conocidas como etiquetas\n3. Entrenar modelo con estas etiquetas ruidosas\n\nRetos principales:\n• Suposición de herencia imperfecta\n• Ruido en las etiquetas generadas\n• Cobertura limitada de la base de conocimiento"
      },
      {
        type: "code",
        value: "import spacy\nfrom itertools import product\n\n# Ejemplo: Distant Supervision para relación 'nació_en'\nnlp = spacy.load('es_core_news_md')\nkb = {\n    'Gabriel García Márquez': {'nació_en': 'Aracataca'},\n    'Pablo Neruda': {'nació_en': 'Parral'}\n}\n\ntexts = [\n    \"Gabriel García Márquez escribió Cien años de soledad en México\",\n    \"Pablo Neruda recibió el Nobel de Literatura en 1971\"\n]\n\n# Generar etiquetas\nlabeled_data = []\nfor text in texts:\n    doc = nlp(text)\n    for ent in doc.ents:\n        if ent.text in kb and 'nació_en' in kb[ent.text]:\n            labeled_data.append({\n                'text': text,\n                'ent1': ent.text,\n                'relation': 'nació_en',\n                'ent2': kb[ent.text]['nació_en'],\n                'source': 'distant_supervision'\n            })"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig1/AS:779806395908096@1562867643806/Distant-supervision-example.png"
      }
    ],
    children: []
  },
  {
    id: "data_programming_snorkel",
    title: "Data Programming (Snorkel)",
    subtitle: "Generación programática de etiquetas",
    content: [
      {
        type: "text",
        value: "Marco desarrollado por Stanford que permite crear conjuntos de entrenamiento mediante la combinación de múltiples funciones de etiquetado débiles (heurísticas, modelos simples, etc.)"
      },
      {
        type: "text",
        value: "Componentes clave:\n• Funciones de etiquetado (LFs): Pequeñas funciones Python\n• Modelo de combinación: Aprende a pesar las LFs\n• Generador de embeddings: Para aprendizaje de representación\n\nBeneficios:\n• Reduce necesidad de datos etiquetados\n• Combina múltiples fuentes de señal\n• Sistema end-to-end"
      },
      {
        type: "code",
        value: "from snorkel.labeling import labeling_function\nfrom snorkel.labeling.model import LabelModel\n\n# Definir funciones de etiquetado\n@labeling_function()\ndef lf_contains_marquez(text):\n    return 1 if \"García Márquez\" in text else 0\n\n@labeling_function()\ndef lf_contains_nobel(text):\n    return 1 if \"Nobel\" in text else -1\n\n# Aplicar funciones\ntexts = [...]  # Lista de textos\nlfs = [lf_contains_marquez, lf_contains_nobel]\n\n# Entrenar modelo de combinación\nlabel_model = LabelModel(cardinality=2)\nlabel_model.fit(L_train, n_epochs=500, lr=0.001)\n\n# Generar etiquetas\ntrain_labels = label_model.predict(L_train)"
      },
      {
        type: "img",
        value: "https://www.snorkel.org/wp-content/uploads/2021/02/data-programming-diagram.png"
      }
    ],
    children: []
  },
  {
    id: "heuristicas_basadas_en_reglas",
    title: "Heurísticas Basadas en Reglas",
    subtitle: "Etiquetado automático mediante patrones y reglas",
    content: [
      {
        type: "text",
        value: "Enfoque que utiliza expresiones regulares, listas de palabras clave y reglas lógicas para asignar etiquetas a datos no etiquetados. Simple pero efectivo para dominios bien definidos."
      },
      {
        type: "text",
        value: "Tipos de heurísticas:\n• Coincidencia de patrones (regex)\n• Listas de palabras clave\n• Reglas gramaticales\n• Modelos de diccionario\n\nMejores prácticas:\n• Combinar múltiples heurísticas\n• Usar votación o consenso\n• Validar en pequeño conjunto manual"
      },
      {
        type: "code",
        value: "import re\n\n# Heurística para identificar menciones de libros\nlibros_patron = re.compile(r'\"(.*?)\"|«(.*?)»')\n\ndef etiquetar_libros(texto):\n    matches = libros_patron.findall(texto)\n    libros = [m[0] or m[1] for m in matches if m[0] or m[1]]\n    return {\n        'texto': texto,\n        'etiquetas': ['contiene_libro'] if libros else [],\n        'libros': libros\n    }\n\n# Ejemplo de uso\ntexto_ejemplo = \"Gabriel García Márquez escribió \"Cien años de soledad\" y \"El amor en los tiempos del cólera\"\"\nprint(etiquetar_libros(texto_ejemplo))"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig2/AS:779806395908096@1562867643806/Rule-based-heuristics-example.png"
      }
    ],
    children: []
  },
  {
    id: "metricas_de_evaluacion",
    title: "Métricas de Evaluación",
    subtitle: "Medidas cuantitativas del rendimiento de modelos",
    content: [
      {
        type: "text",
        value: "Conjunto de métricas estadísticas que permiten evaluar objetivamente el rendimiento de modelos de machine learning y comparar diferentes enfoques."
      },
      {
        type: "text",
        value: "Selección de métricas:\n• Depende del tipo de problema (clasificación, regresión)\n• Debe alinearse con el objetivo de negocio\n• Considerar desbalanceo de clases\n• Evaluar múltiples aspectos del modelo"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_metrics_001.png"
      }
    ],
    children: [
      "metricas_de_evaluacion_clasificacion",
      "metricas_de_evaluacion_regresion"
    ]
  },
  {
    id: "metricas_de_evaluacion_clasificacion",
    title: "Métricas para Clasificación",
    subtitle: "Evaluación de modelos predictivos categóricos",
    content: [
      {
        type: "text",
        value: "Medidas que cuantifican el rendimiento de modelos que predicen categorías discretas, considerando diferentes aspectos como precisión, recall y capacidad discriminativa."
      },
      {
        type: "text",
        value: "Métricas esenciales:\n• Accuracy: Proporción de predicciones correctas\n• Precision/Recall: Compromiso falsos positivos/negativos\n• F1-score: Media armónica de precision y recall\n• AUC-ROC: Capacidad discriminativa general\n\nConsideraciones:\n• Sensibilidad a clases desbalanceadas\n• Costos asimétricos de errores\n• Umbrales de decisión"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_classifier_comparison_001.png"
      }
    ],
    children: [
      "accuracy",
      "precision",
      "recall",
      "f1score",
      "curva_roc__auc"
    ]
  },
  {
    id: "accuracy",
    title: "Accuracy (Exactitud)",
    subtitle: "Proporción de predicciones correctas",
    content: [
      {
        type: "text",
        value: "Métrica básica que calcula el porcentaje de predicciones correctas sobre el total de casos. Útil cuando las clases están balanceadas."
      },
      {
        type: "text",
        value: "Fórmula:\nAccuracy = (TP + TN) / (TP + TN + FP + FN)\n\nLimitaciones:\n• Engañosa con clases desbalanceadas\n• No diferencia tipos de errores\n• Sensible a umbrales de decisión"
      },
      {
        type: "code",
        value: "from sklearn.metrics import accuracy_score\n\ny_true = [0, 1, 1, 0, 1, 0]\ny_pred = [0, 1, 0, 0, 1, 1]\n\nacc = accuracy_score(y_true, y_pred)\nprint(f\"Accuracy: {acc:.2f}\")  # 0.67"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig3/AS:779806395908096@1562867643806/Confusion-matrix-example.png"
      }
    ],
    children: []
  },
  {
    id: "precision",
    title: "Precision (Precisión)",
    subtitle: "Calidad de las predicciones positivas",
    content: [
      {
        type: "text",
        value: "Mide qué proporción de predicciones positivas fueron correctas. Crucial cuando los falsos positivos son costosos (ej. spam detection)."
      },
      {
        type: "text",
        value: "Fórmula:\nPrecision = TP / (TP + FP)\n\nInterpretación:\n• Alto: Pocos falsos positivos\n• Bajo: Muchas predicciones positivas incorrectas\n\nCasos de uso:\n• Clasificación de spam\n• Diagnóstico médico\n• Sistemas de recomendación"
      },
      {
        type: "code",
        value: "from sklearn.metrics import precision_score\n\nprecision = precision_score(y_true, y_pred)\nprint(f\"Precision: {precision:.2f}\")  # 0.67"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_precision_recall_001.png"
      }
    ],
    children: []
  },
  {
    id: "recall",
    title: "Recall (Sensibilidad)",
    subtitle: "Cobertura de casos positivos reales",
    content: [
      {
        type: "text",
        value: "Mide qué proporción de casos positivos reales fueron identificados correctamente. Esencial cuando los falsos negativos son críticos (ej. diagnóstico de enfermedades)."
      },
      {
        type: "text",
        value: "Fórmula:\nRecall = TP / (TP + FN)\n\nInterpretación:\n• Alto: Captura mayoría de positivos\n• Bajo: Se pierden muchos casos positivos\n\nSinónimos:\n• Sensibilidad\n• Tasa de verdaderos positivos (TPR)"
      },
      {
        type: "code",
        value: "from sklearn.metrics import recall_score\n\nrecall = recall_score(y_true, y_pred)\nprint(f\"Recall: {recall:.2f}\")  # 0.67"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig4/AS:779806395908096@1562867643806/Recall-example.png"
      }
    ],
    children: []
  },
  {
    id: "f1score",
    title: "F1-Score",
    subtitle: "Media armónica de precisión y recall",
    content: [
      {
        type: "text",
        value: "Métrica balanceada que combina precisión y recall en un solo número, útil cuando se necesita un equilibrio entre ambos aspectos."
      },
      {
        type: "text",
        value: "Fórmula:\nF1 = 2 * (Precision * Recall) / (Precision + Recall)\n\nCaracterísticas:\n• Rango: 0 (peor) a 1 (mejor)\n• Sensible a ambos tipos de errores\n• Versión balanceada de Fβ donde β controla importancia relativa"
      },
      {
        type: "code",
        value: "from sklearn.metrics import f1_score\n\nf1 = f1_score(y_true, y_pred)\nprint(f\"F1-Score: {f1:.2f}\")  # 0.67"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig5/AS:779806395908096@1562867643806/F1-score-example.png"
      }
    ],
    children: []
  },
  {
    id: "curva_roc__auc",
    title: "Curva ROC y AUC",
    subtitle: "Evaluación de capacidad discriminativa",
    content: [
      {
        type: "text",
        value: "La curva ROC (Receiver Operating Characteristic) muestra el rendimiento de un modelo clasificador en todos los umbrales de decisión, mientras que el AUC (Area Under Curve) cuantifica esta capacidad discriminativa."
      },
      {
        type: "text",
        value: "Interpretación:\n• AUC = 0.5: No mejor que aleatorio\n• AUC = 1.0: Clasificador perfecto\n• AUC > 0.8: Buen discriminador\n\nComponentes:\n• Eje X: Tasa de falsos positivos (FPR)\n• Eje Y: Tasa de verdaderos positivos (TPR)"
      },
      {
        type: "code",
        value: "from sklearn.metrics import roc_curve, roc_auc_score\nimport matplotlib.pyplot as plt\n\ny_probs = [0.1, 0.9, 0.4, 0.6, 0.8, 0.3]  # Probabilidades predichas\n\nfpr, tpr, thresholds = roc_curve(y_true, y_probs)\nauc = roc_auc_score(y_true, y_probs)\n\nplt.plot(fpr, tpr, label=f'AUC = {auc:.2f}')\nplt.plot([0, 1], [0, 1], 'k--')\nplt.xlabel('False Positive Rate')\nplt.ylabel('True Positive Rate')\nplt.title('Curva ROC')\nplt.legend()\nplt.show()"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_roc_001.png"
      }
    ],
    children: []
  },
  {
    id: "metricas_de_evaluacion_regresion",
    title: "Métricas para Regresión",
    subtitle: "Evaluación de modelos predictivos numéricos",
    content: [
      {
        type: "text",
        value: "Medidas que cuantifican el rendimiento de modelos que predicen valores continuos, evaluando diferentes aspectos de los errores de predicción."
      },
      {
        type: "text",
        value: "Métricas principales:\n• MSE: Error cuadrático medio (penaliza grandes errores)\n• MAE: Error absoluto medio (interpretación directa)\n• RMSE: Raíz del error cuadrático medio (en unidades originales)\n\nConsideraciones:\n• Sensibilidad a outliers\n• Unidades de medida\n• Escala de los valores"
      },
      {
        type: "img",
        value: "https://scikit-learn.org/stable/_images/sphx_glr_plot_regression_metrics_001.png"
      }
    ],
    children: [
      "mse",
      "mae",
      "rmse"
    ]
  },
  {
    id: "mse",
    title: "Mean Squared Error (MSE)",
    subtitle: "Error cuadrático medio",
    content: [
      {
        type: "text",
        value: "Promedio de los cuadrados de las diferencias entre valores predichos y reales. Penaliza más los errores grandes debido al cuadrado."
      },
      {
        type: "text",
        value: "Fórmula:\nMSE = 1/n * Σ(y_real - y_pred)^2\n\nPropiedades:\n• Siempre no negativo (0 es perfecto)\n• Sensible a outliers\n• Unidades al cuadrado (difícil interpretación directa)"
      },
      {
        type: "code",
        value: "from sklearn.metrics import mean_squared_error\n\ny_true = [3, -0.5, 2, 7]\ny_pred = [2.5, 0.0, 2, 8]\n\nmse = mean_squared_error(y_true, y_pred)\nprint(f\"MSE: {mse:.2f}\")  # 0.37"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig6/AS:779806395908096@1562867643806/MSE-example.png"
      }
    ],
    children: []
  },
  {
    id: "mae",
    title: "Mean Absolute Error (MAE)",
    subtitle: "Error absoluto medio",
    content: [
      {
        type: "text",
        value: "Promedio de las diferencias absolutas entre valores predichos y reales. Proporciona una medida directa del error promedio."
      },
      {
        type: "text",
        value: "Fórmula:\nMAE = 1/n * Σ|y_real - y_pred|\n\nVentajas:\n• Interpretación intuitiva (en unidades originales)\n• Menos sensible a outliers que MSE\n• Lineal (misma penalización para todos los errores)"
      },
      {
        type: "code",
        value: "from sklearn.metrics import mean_absolute_error\n\nmae = mean_absolute_error(y_true, y_pred)\nprint(f\"MAE: {mae:.2f}\")  # 0.50"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig7/AS:779806395908096@1562867643806/MAE-example.png"
      }
    ],
    children: []
  },
  {
    id: "rmse",
    title: "Root Mean Squared Error (RMSE)",
    subtitle: "Raíz del error cuadrático medio",
    content: [
      {
        type: "text",
        value: "Raíz cuadrada del MSE, lo que devuelve la métrica a las unidades originales de la variable objetivo, manteniendo la propiedad de penalizar más los errores grandes."
      },
      {
        type: "text",
        value: "Fórmula:\nRMSE = √(MSE)\n\nComparación con MAE:\n• RMSE ≥ MAE (por desigualdad cuadrática-media)\n• RMSE más sensible a errores grandes\n• MAE más robusto a outliers\n\nUso típico:\n• Cuando errores grandes son especialmente indeseables\n• Para comparar modelos en misma escala"
      },
      {
        type: "code",
        value: "rmse = np.sqrt(mean_squared_error(y_true, y_pred))\nprint(f\"RMSE: {rmse:.2f}\")  # 0.61"
      },
      {
        type: "img",
        value: "https://www.researchgate.net/publication/334272341/figure/fig8/AS:779806395908096@1562867643806/RMSE-example.png"
      }
    ],
    children: []
  }


























  
]


export interface ContentItem {
  type: 'text' | 'img' | 'code';
  value: string;
}

export interface TopicNode {
  id: string;
  title: string;
  subtitle: string;
  content: ContentItem[];
  children: string[];
}