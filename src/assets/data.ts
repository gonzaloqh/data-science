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
}


















  
]


export interface ContentItem {
  type: 'text' | 'img';
  value: string;
}

export interface TopicNode {
  id: string;
  title: string;
  subtitle: string;
  content: ContentItem[];
  children: string[];
}