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
      children: ["estadistica", "data", "modelos_de_ia", "neuronas_artificiales", "topicos_de_inteligencia_artificial", "mlops_y_automatizacion"]
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
      value: "data:image/png;base64,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"
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
  },
  {
  id: "herramientas_y_librerias",
  title: "Herramientas y Librerías Esenciales para Data Science",
  subtitle: "Panorama completo de las principales bibliotecas para machine learning y deep learning",
  content: [
    {
      type: "text",
      value: "El ecosistema de Data Science cuenta con numerosas librerías especializadas que cubren todo el flujo de trabajo, desde el preprocesamiento de datos hasta el despliegue de modelos. Esta sección explora las herramientas más utilizadas en la industria."
    },
    {
      type: "img",
      value: "Diagrama comparativo de librerías de ML vs DL mostrando sus áreas de aplicación"
    },
    {
      type: "text",
      value: "La elección de herramientas depende de varios factores: tipo de problema, tamaño de datos, necesidad de escalabilidad y preferencias del equipo. A continuación analizaremos cada una en profundidad."
    }
  ],
  children: [
    "scikitlearn",
    "tensorflow",
    "keras",
    "pytorch",
    "hugging_face_transformers",
    "langchain",
    "llamaindex"
  ]
},
{
  id: "scikitlearn",
  title: "Scikit-learn",
  subtitle: "La biblioteca fundamental para Machine Learning tradicional en Python",
  content: [
    {
      type: "text",
      value: "Scikit-learn es la librería más utilizada para machine learning tradicional en Python. Ofrece implementaciones eficientes de algoritmos clásicos y herramientas para el procesamiento de datos."
    },
    {
      type: "text",
      value: "Principales características:"
    },
    {
      type: "text",
      value: "- Implementación de algoritmos supervisados y no supervisados\n- Herramientas para preprocesamiento y selección de características\n- Métricas de evaluación y validación cruzada\n- Interfaz consistente para todos los estimadores (fit/predict/transform)"
    },
    {
      type: "img",
      value: "Flujo de trabajo típico en scikit-learn: preprocesamiento -> entrenamiento -> evaluación"
    },
    {
      type: "code",
      value: `// Ejemplo básico de pipeline en scikit-learn
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Creación del pipeline
pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('classifier', RandomForestClassifier(n_estimators=100))
])

# División de datos
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Entrenamiento y predicción
pipeline.fit(X_train, y_train)
predictions = pipeline.predict(X_test)`
    },
    {
      type: "text",
      value: "Cuándo usarlo:\n- Problemas de ML clásico (regresión, clasificación, clustering)\n- Conjuntos de datos medianos (que caben en memoria)\n- Necesidad de prototipado rápido\n\nCuándo evitarlo:\n- Aprendizaje profundo\n- Datos a gran escala (necesidad de distributed computing)\n- Modelos de última generación (SOTA)"
    }
  ],
  children: []
},
{
  id: "tensorflow",
  title: "TensorFlow",
  subtitle: "Plataforma integral para machine learning a escala industrial",
  content: [
    {
      type: "text",
      value: "TensorFlow es un framework de código abierto desarrollado por Google para construir y desplegar modelos de machine learning a escala. Su arquitectura flexible permite ejecución en CPU, GPU y TPU."
    },
    {
      type: "img",
      value: "Arquitectura de TensorFlow mostrando el flujo de tensores a través del grafo computacional"
    },
    {
      type: "text",
      value: "Características destacadas:\n- Grafos computacionales estáticos para optimización\n- Diferenciación automática\n- Soporte para distributed training\n- TensorFlow Serving para despliegue\n- TensorFlow Lite para edge devices"
    },
    {
      type: "code",
      value: `// Ejemplo de red neuronal en TensorFlow
import tensorflow as tf
from tensorflow.keras import layers

# Definición del modelo
model = tf.keras.Sequential([
    layers.Dense(64, activation='relu', input_shape=(784,)),
    layers.Dropout(0.2),
    layers.Dense(64, activation='relu'),
    layers.Dense(10, activation='softmax')
])

# Compilación
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

# Entrenamiento
model.fit(train_images, train_labels, epochs=10, 
          validation_data=(test_images, test_labels))`
    },
    {
      type: "text",
      value: "Ventajas:\n- Maduro y con amplia adopción industrial\n- Excelente soporte para producción\n- Ecosistema completo (TFX, TensorBoard)\n\nDesventajas:\n- Curva de aprendizaje más pronunciada\n- Grafos estáticos menos intuitivos que ejecución eager"
    }
  ],
  children: []
},
{
  id: "keras",
  title: "Keras",
  subtitle: "API de alto nivel para construir modelos de deep learning",
  content: [
    {
      type: "text",
      value: "Keras es una API de alto nivel para construir y entrenar modelos de deep learning. Originalmente independiente, ahora viene integrada en TensorFlow como tf.keras, combinando facilidad de uso con el poder de TensorFlow."
    },
    {
      type: "img",
      value: "Comparación entre la API secuencial y funcional de Keras"
    },
    {
      type: "text",
      value: "Principales beneficios:\n- Interfaz intuitiva y fácil de usar\n- Modularidad y extensibilidad\n- Soporte para múltiples backends (aunque ahora principalmente TensorFlow)\n- Gran colección de capas preimplementadas"
    },
    {
      type: "text",
      value: "Keras sigue dos paradigmas principales:\n1. API Secuencial: Para modelos simples de pila lineal\n2. API Funcional: Para arquitecturas complejas con múltiples entradas/salidas"
    },
    {
      type: "code",
      value: `// Ejemplo con API Funcional
from tensorflow.keras import Input, Model
from tensorflow.keras.layers import Dense, Concatenate

# Definición de múltiples entradas
input_a = Input(shape=(32,))
input_b = Input(shape=(64,))

# Capas de procesamiento
dense_1 = Dense(16, activation='relu')(input_a)
dense_2 = Dense(32, activation='relu')(input_b)

# Concatenación
concat = Concatenate()([dense_1, dense_2])
output = Dense(1, activation='sigmoid')(concat)

# Creación del modelo
model = Model(inputs=[input_a, input_b], outputs=output)`
    }
  ],
  children: [
    "keras_classifier",
    "keras_tuner"
  ]
},
{
  id: "keras_classifier",
  title: "Keras Classifier",
  subtitle: "Implementación de modelos de clasificación con Keras",
  content: [
    {
      type: "text",
      value: "Keras proporciona herramientas específicas para problemas de clasificación, incluyendo funciones de pérdida especializadas, métricas y wrappers para scikit-learn."
    },
    {
      type: "text",
      value: "Componentes clave para clasificación:\n- Funciones de pérdida: binary_crossentropy, categorical_crossentropy\n- Métricas: accuracy, precision, recall\n- Capas finales: Dense con activación softmax (multiclase) o sigmoid (binaria)"
    },
    {
      type: "code",
      value: `// Clasificador de imágenes con CNN en Keras
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense

model = Sequential([
    Conv2D(32, (3,3), activation='relu', input_shape=(28,28,1)),
    MaxPooling2D((2,2)),
    Conv2D(64, (3,3), activation='relu'),
    MaxPooling2D((2,2)),
    Flatten(),
    Dense(64, activation='relu'),
    Dense(10, activation='softmax')  # 10 clases
])

model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])`
    },
    {
      type: "text",
      value: "Buenas prácticas:\n- Normalizar los datos de entrada\n- Usar early stopping para evitar overfitting\n- Balancear clases desequilibradas con class_weight\n- Empezar con arquitecturas simples e ir incrementando complejidad"
    }
  ],
  children: []
},
{
  id: "keras_tuner",
  title: "Keras Tuner",
  subtitle: "Optimización de hiperparámetros para modelos Keras",
  content: [
    {
      type: "text",
      value: "Keras Tuner es una biblioteca para optimizar hiperparámetros que se integra perfectamente con los modelos Keras/TensorFlow. Automatiza la búsqueda de la mejor configuración para un modelo."
    },
    {
      type: "img",
      value: "Diagrama del proceso de tuning: espacio de búsqueda -> estrategia de muestreo -> evaluación"
    },
    {
      type: "text",
      value: "Algoritmos de búsqueda disponibles:\n- RandomSearch: Muestreo aleatorio\n- Hyperband: Optimización basada en sucesivos halving\n- BayesianOptimization: Modela la función objetivo\n- Sklearn: Para integración con scikit-learn"
    },
    {
      type: "code",
      value: `// Ejemplo de Keras Tuner
import keras_tuner as kt

def build_model(hp):
    model = tf.keras.Sequential()
    model.add(layers.Flatten())
    
    # Hiperparámetros a optimizar
    hp_units = hp.Int('units', min_value=32, max_value=512, step=32)
    hp_learning_rate = hp.Choice('learning_rate', values=[1e-2, 1e-3, 1e-4])
    
    model.add(layers.Dense(units=hp_units, activation='relu'))
    model.add(layers.Dense(10, activation='softmax'))
    
    model.compile(optimizer=tf.keras.optimizers.Adam(learning_rate=hp_learning_rate),
                  loss='sparse_categorical_crossentropy',
                  metrics=['accuracy'])
    return model

tuner = kt.Hyperband(build_model,
                     objective='val_accuracy',
                     max_epochs=10,
                     directory='my_dir',
                     project_name='intro_to_kt')`
    },
    {
      type: "text",
      value: "Consideraciones:\n- Definir un espacio de búsqueda razonable\n- Usar recursos computacionales adecuados (puede ser costoso)\n- Monitorear el progreso con TensorBoard\n- Validar los mejores modelos en un conjunto de test independiente"
    }
  ],
  children: []
},
{
  id: "pytorch",
  title: "PyTorch",
  subtitle: "Framework de deep learning con ejecución dinámica y amplia flexibilidad",
  content: [
    {
      type: "text",
      value: "PyTorch es un framework de deep learning desarrollado por Facebook que se ha vuelto extremadamente popular en investigación gracias a su ejecución dinámica (eager execution) y diseño flexible."
    },
    {
      type: "img",
      value: "Comparación entre el grafo estático de TensorFlow y el grafo dinámico de PyTorch"
    },
    {
      type: "text",
      value: "Ventajas clave:\n- Sintaxis Pythonica y orientada a objetos\n- Computación diferencial con autograd\n- Facilidad para debugging\n- Gran comunidad en investigación\n- Soporte nativo para GPUs"
    },
    {
      type: "code",
      value: `// Red neuronal simple en PyTorch
import torch
import torch.nn as nn
import torch.optim as optim

class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        self.fc1 = nn.Linear(784, 256)
        self.fc2 = nn.Linear(256, 10)
        self.dropout = nn.Dropout(0.2)
    
    def forward(self, x):
        x = torch.relu(self.fc1(x))
        x = self.dropout(x)
        x = self.fc2(x)
        return x

model = Net()
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Loop de entrenamiento
for epoch in range(10):
    for data, labels in train_loader:
        optimizer.zero_grad()
        outputs = model(data)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()`
    },
    {
      type: "text",
      value: "Ecosistema PyTorch:\n- TorchVision: Para visión por computadora\n- TorchText: Para procesamiento de lenguaje natural\n- TorchAudio: Para audio\n- PyTorch Lightning: Para simplificar el entrenamiento\n- TorchServe: Para despliegue de modelos"
    }
  ],
  children: []
},
{
  id: "hugging_face_transformers",
  title: "Hugging Face Transformers",
  subtitle: "Biblioteca líder para modelos de lenguaje basados en transformers",
  content: [
    {
      type: "text",
      value: "Hugging Face Transformers es la biblioteca de referencia para trabajar con modelos de lenguaje basados en la arquitectura transformer, como BERT, GPT y T5."
    },
    {
      type: "img",
      value: "Arquitectura de un transformer mostrando las capas de atención multi-head"
    },
    {
      type: "text",
      value: "Características principales:\n- Implementación de miles de modelos preentrenados\n- API simple para fine-tuning\n- Soporte para TensorFlow y PyTorch\n- Pipeline para tareas comunes (NER, question answering, etc.)\n- Model Hub para compartir modelos"
    },
    {
      type: "code",
      value: `// Ejemplo de pipeline para análisis de sentimientos
from transformers import pipeline

classifier = pipeline('sentiment-analysis')
result = classifier("I love using transformers library!")

// Fine-tuning de BERT
from transformers import BertTokenizer, BertForSequenceClassification
from transformers import Trainer, TrainingArguments

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertForSequenceClassification.from_pretrained('bert-base-uncased')

training_args = TrainingArguments(
    output_dir='./results',
    num_train_epochs=3,
    per_device_train_batch_size=16,
    evaluation_strategy="epoch"
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    eval_dataset=eval_dataset
)

trainer.train()`
    },
    {
      type: "text",
      value: "Casos de uso típicos:\n- Clasificación de texto\n- Respuesta a preguntas\n- Generación de texto\n- Traducción automática\n- Resumen de texto\n\nRecomendaciones:\n- Empezar con modelos pequeños (distilbert)\n- Usar GPU para fine-tuning\n- Aprovechar los modelos preentrenados"
    }
  ],
  children: []
},
{
  id: "langchain",
  title: "LangChain",
  subtitle: "Framework para construir aplicaciones con modelos de lenguaje",
  content: [
    {
      type: "text",
      value: "LangChain es un framework para desarrollar aplicaciones potenciadas por modelos de lenguaje (LLMs) que permite conectar estos modelos con fuentes de datos externas y herramientas."
    },
    {
      type: "img",
      value: "Arquitectura de LangChain mostrando la conexión entre LLMs, herramientas y memoria"
    },
    {
      type: "text",
      value: "Componentes principales:\n- Modelos: Interfaces para diferentes LLMs\n- Prompts: Gestión de plantillas y optimización\n- Memoria: Mantener estado entre interacciones\n- Indexes: Conexión con datos externos\n- Chains: Secuencias de llamadas\n- Agents: LLMs que deciden acciones"
    },
    {
      type: "code",
      value: `// Ejemplo de agente en LangChain
from langchain.agents import load_tools
from langchain.agents import initialize_agent
from langchain.llms import OpenAI

llm = OpenAI(temperature=0)
tools = load_tools(["serpapi", "wolfram-alpha"], llm=llm)
agent = initialize_agent(tools, llm, agent="zero-shot-react-description", verbose=True)

agent.run("¿Cuál fue el PIB de México en 2022 y cuánto creció respecto a 2021?")`
    },
    {
      type: "text",
      value: "Patrones comunes:\n- Q&A sobre documentos\n- Chatbots con memoria\n- Agentes para tomar decisiones\n- Extracción estructurada de texto\n\nIntegraciones:\n- Bases de datos vectoriales (Pinecone, Weaviate)\n- Herramientas de búsqueda (SerpAPI)\n- APIs matemáticas (Wolfram Alpha)"
    }
  ],
  children: []
},
{
  id: "llamaindex",
  title: "LlamaIndex",
  subtitle: "Conecta datos personalizados con modelos de lenguaje",
  content: [
    {
      type: "text",
      value: "LlamaIndex (antes GPT Index) es una solución para conectar fuentes de datos privadas con modelos de lenguaje, permitiendo Q&A y análisis sobre información específica."
    },
    {
      type: "img",
      value: "Flujo de LlamaIndex: ingesta de datos -> creación de índices -> consulta con LLM"
    },
    {
      type: "text",
      value: "Funcionalidades clave:\n- Ingesta de datos de múltiples formatos (PDFs, SQL, etc.)\n- Construcción de índices eficientes\n- Búsqueda semántica\n- Integración con frameworks como LangChain\n- Manejo de contexto extenso"
    },
    {
      type: "code",
      value: `// Ejemplo básico de LlamaIndex
from llama_index import GPTVectorStoreIndex, SimpleDirectoryReader

# Cargar documentos
documents = SimpleDirectoryReader('data').load_data()

# Crear índice
index = GPTVectorStoreIndex.from_documents(documents)

# Guardar y cargar índice
index.storage_context.persist(persist_dir="./storage")
loaded_index = load_index_from_storage(storage_context)

# Consulta
query_engine = index.as_query_engine()
response = query_engine.query("¿Cuáles son las políticas de seguridad descritas?")`
    },
    {
      type: "text",
      value: "Casos de uso:\n- Q&A sobre documentación interna\n- Análisis de informes financieros\n- Asistentes de conocimiento especializado\n- Búsqueda semántica en repositorios\n\nOptimizaciones:\n- Usar embeddings locales para privacidad\n- Ajustar chunk_size para el contexto\n- Experimentar con diferentes índices (lista, árbol, grafo)"
    }
  ],
  children: []
}
,
{
  id: "neuronas_artificiales",
  title: "Neuronas Artificiales y Redes Neuronales",
  subtitle: "Componentes fundamentales del aprendizaje profundo",
  content: [
    {
      type: "text",
      value: "Las neuronas artificiales son la unidad básica de las redes neuronales, inspiradas en el funcionamiento biológico del cerebro humano pero implementadas matemáticamente para resolver problemas de machine learning."
    },
    {
      type: "img",
      value: "Diagrama comparativo entre neurona biológica y neurona artificial"
    }
  ],
  children: [
    "neuronas_artificiales_fundamentos",
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
    "neuronas_artificiales_frameworks"
  ]
},
{
  id: "neuronas_artificiales_fundamentos",
  title: "Fundamentos de Neuronas Artificiales",
  subtitle: "Cómo funcionan las unidades básicas de las redes neuronales",
  content: [
    {
      type: "text",
      value: "Una neurona artificial recibe múltiples entradas, aplica pesos a cada una, suma los resultados y pasa esta suma a través de una función de activación para producir la salida."
    },
    {
      type: "code",
      value: `// Ejemplo simple de neurona
function neurona(x, w, b) {
  let z = b;
  for (let i = 0; i < x.length; i++) {
    z += x[i] * w[i];
  }
  return Math.max(0, z); // ReLU
}`
    }
  ],
  children: [
    "forward_propagation",
    "backpropagation",
    "representacion_profunda_representation_learning"
  ]
},
{
  id: "forward_propagation",
  title: "Forward Propagation",
  subtitle: "El flujo de información hacia adelante en una red neuronal",
  content: [
    {
      type: "text",
      value: "El forward propagation es el proceso donde los datos de entrada se transforman a través de las capas de la red para producir una predicción."
    },
    {
      type: "code",
      value: `// Forward pass simple
function forwardPass(input, weights, bias) {
  return input.map((x, i) => x * weights[i]).reduce((a, b) => a + b, bias);
}`
    }
  ],
  children: []
},
{
  id: "backpropagation",
  title: "Backpropagation",
  subtitle: "El algoritmo de aprendizaje de redes neuronales",
  content: [
    {
      type: "text",
      value: "Backpropagation es el método para calcular gradientes que permite ajustar los pesos de la red mediante descenso de gradiente, propagando errores desde la salida hacia atrás."
    },
    {
      type: "code",
      value: `// Pseudocódigo de backpropagation
function backprop(input, target, weights) {
  const output = forwardPass(input, weights);
  const error = output - target;
  return weights.map(w => w - 0.1 * error * input);
}`
    }
  ],
  children: []
},
{
  id: "representacion_profunda_representation_learning",
  title: "Representación Profunda",
  subtitle: "Cómo las redes aprenden representaciones de datos",
  content: [
    {
      type: "text",
      value: "Las redes neuronales profundas aprenden automáticamente representaciones jerárquicas de los datos, donde cada capa transforma la representación en una más abstracta."
    }
  ],
  children: []
},
{
  id: "capas",
  title: "Capas en Redes Neuronales",
  subtitle: "Tipos de capas y sus funciones",
  content: [
    {
      type: "text",
      value: "Las capas son los bloques de construcción de las redes neuronales, cada una especializada en diferentes transformaciones de los datos."
    }
  ],
  children: [
    "densa",
    "dropout",

    "conv2d",
    "pooling",
    "flatten",
    "batch_normalization",
    "lstm",
    "gru"
  ]
}

,
{
  id: "densa",
  title: "Capa Densa (Fully Connected)",
  subtitle: "La capa básica de redes neuronales donde cada neurona está conectada a todas las entradas",
  content: [
    {
      type: "text",
      value: "Las capas densas son el tipo más común en redes neuronales, donde cada neurona recibe todas las salidas de la capa anterior."
    },
    {
      type: "code",
      value: `// Ejemplo de capa densa en Keras
from tensorflow.keras.layers import Dense

# Capa densa con 64 neuronas y activación ReLU
dense_layer = Dense(units=64, activation='relu')`
    }
  ],
  children: []
},
{
  id: "dropout",
  title: "Capa Dropout",
  subtitle: "Técnica de regularización que previene overfitting",
  content: [
    {
      type: "text",
      value: "Dropout apaga aleatoriamente un porcentaje de neuronas durante el entrenamiento, forzando a la red a aprender características más robustas."
    },
    {
      type: "code",
      value: `// Añadir dropout en un modelo
from tensorflow.keras.layers import Dropout

model.add(Dense(128, activation='relu'))
model.add(Dropout(0.5))  # Apaga el 50% de neuronas`
    }
  ],
  children: []
},
{
  id: "batch_normalization",
  title: "Batch Normalization",
  subtitle: "Normalización por lotes para entrenamiento más estable",
  content: [
    {
      type: "text",
      value: "Esta capa normaliza las activaciones de la capa anterior, reduciendo el internal covariate shift y permitiendo mayores tasas de aprendizaje."
    },
    {
      type: "code",
      value: `// Uso de BatchNorm
from tensorflow.keras.layers import BatchNormalization

model.add(Dense(64))
model.add(BatchNormalization())
model.add(Activation('relu'))`
    }
  ],
  children: []
},
{
  id: "flatten",
  title: "Capa Flatten",
  subtitle: "Transforma tensores multidimensionales a 1D",
  content: [
    {
      type: "text",
      value: "Convierte la salida de capas convolucionales (2D/3D) en un vector unidimensional para conectarlo a capas densas."
    },
    {
      type: "code",
      value: `// Ejemplo de flatten
from tensorflow.keras.layers import Flatten

model.add(Flatten())  # Convierte (batch, height, width, channels) a (batch, height*width*channels)`
    }
  ],
  children: []
},
{
  id: "conv2d",
  title: "Capa Conv2D",
  subtitle: "Capa convolucional para procesamiento de imágenes",
  content: [
    {
      type: "text",
      value: "Aplica filtros convolucionales que detectan patrones locales en imágenes, preservando relaciones espaciales."
    },
    {
      type: "code",
      value: `// Capa convolucional típica
from tensorflow.keras.layers import Conv2D

model.add(Conv2D(filters=32, kernel_size=(3,3), activation='relu'))`
    }
  ],
  children: []
},
{
  id: "pooling",
  title: "Capas Pooling",
  subtitle: "Reducción dimensional para características aprendidas",
  content: [
    {
      type: "text",
      value: "MaxPooling y AveragePooling reducen dimensionalidad conservando las características más importantes."
    },
    {
      type: "code",
      value: `// MaxPooling 2D
from tensorflow.keras.layers import MaxPooling2D

model.add(MaxPooling2D(pool_size=(2,2)))  # Reduce dimensiones a la mitad`
    }
  ],
  children: []
},
{
  id: "lstm",
  title: "Capa LSTM",
  subtitle: "Long Short-Term Memory para secuencias",
  content: [
    {
      type: "text",
      value: "Redes recurrentes especializadas que aprenden dependencias a largo plazo en datos secuenciales."
    },
    {
      type: "code",
      value: `// LSTM en Keras
from tensorflow.keras.layers import LSTM

model.add(LSTM(units=64, return_sequences=True))`
    }
  ],
  children: []
},
{
  id: "gru",
  title: "Capa GRU",
  subtitle: "Gated Recurrent Unit - versión simplificada de LSTM",
  content: [
    {
      type: "text",
      value: "Variante más eficiente computacionalmente que LSTM, con rendimiento similar en muchos casos."
    },
    {
      type: "code",
      value: `// Implementación de GRU
from tensorflow.keras.layers import GRU

model.add(GRU(units=32, return_sequences=False))`
    }
  ],
  children: []
},
{
  id: "funciones_de_activacion",
  title: "Funciones de Activación",
  subtitle: "No linealidades que permiten aprender relaciones complejas",
  content: [
    {
      type: "text",
      value: "Las funciones de activación introducen no linealidades en la red, permitiendo modelar relaciones complejas entre inputs y outputs."
    },
    {
      type: "img",
      value: "Comparativa gráfica de diferentes funciones de activación"
    }
  ],
  children: [
    "relu",
    "sigmoide",
    "tanh",
    "leaky_relu",
    "elu",
    "selu",
    "swish",
    "gelu",
    "mish"
  ]
}
,
{
  id: "relu",
  title: "ReLU (Rectified Linear Unit)",
  subtitle: "La función de activación más popular en deep learning",
  content: [
    {
      type: "text",
      value: "ReLU (Unidad Lineal Rectificada) es la función de activación más utilizada en redes neuronales profundas debido a su simplicidad computacional y efectividad para evitar el problema del vanishing gradient."
    },
    {
      type: "text",
      value: "Fórmula matemática: f(x) = max(0, x)\n\nVentajas:\n- Cómputo eficiente (operación simple)\n- No linealidad que permite aprender patrones complejos\n- Evita el vanishing gradient en redes profundas\n\nDesventajas:\n- Problema de 'neuronas muertas' (Dying ReLU)\n- No es diferenciable en x=0"
    },
    {
      type: "code",
      value: `// Implementación de ReLU en Python
def relu(x):
    return max(0.0, x)

# Ejemplo de uso en una capa
import numpy as np
inputs = np.array([1.2, -0.5, 0.0, 2.3])
outputs = np.array([relu(x) for x in inputs])`
    },
    {
      type: "img",
      value: "Gráfico de la función ReLU mostrando la línea recta para valores positivos y cero para negativos"
    }
  ],
  children: []
},
{
  id: "sigmoide",
  title: "Función Sigmoide",
  subtitle: "Función clásica para probabilidades entre 0 y 1",
  content: [
    {
      type: "text",
      value: "La función sigmoide mapea valores reales al rango (0,1), lo que la hace ideal para problemas de clasificación binaria y estimación de probabilidades."
    },
    {
      type: "text",
      value: "Fórmula matemática: σ(x) = 1 / (1 + e^-x)\n\nVentajas:\n- Salida interpretable como probabilidad\n- Función suave y diferenciable\n\nDesventajas:\n- Sufre de vanishing gradient en redes profundas\n- Salidas no centradas en cero\n- Computacionalmente más costosa que ReLU"
    },
    {
      type: "code",
      value: `// Implementación de sigmoide en Python
import math

def sigmoid(x):
    return 1 / (1 + math.exp(-x))

# Ejemplo de uso
print(sigmoid(0.5))  # Salida: ~0.62`
    },
    {
      type: "img",
      value: "Gráfico de la curva sigmoide característica en forma de S"
    }
  ],
  children: []
},
{
  id: "tanh",
  title: "Tangente Hiperbólica (Tanh)",
  subtitle: "Versión centrada en cero de la sigmoide",
  content: [
    {
      type: "text",
      value: "Similar a la sigmoide pero con rango (-1,1), lo que la hace más adecuada para capas ocultas ya que sus salidas están centradas en cero."
    },
    {
      type: "text",
      value: "Fórmula matemática: tanh(x) = (e^x - e^-x)/(e^x + e^-x)\n\nVentajas:\n- Salidas centradas en cero (mejor para aprendizaje)\n- Derivada más pronunciada que sigmoide\n\nDesventajas:\n- Todavía sufre de vanishing gradient\n- Computacionalmente costosa"
    },
    {
      type: "code",
      value: `// Implementación de tanh en Python
import math

def tanh(x):
    return math.tanh(x)

# Ejemplo de uso
print(tanh(1.0))  # Salida: ~0.7615`
    },
    {
      type: "img",
      value: "Gráfico comparativo entre sigmoide y tanh mostrando sus diferencias de rango"
    }
  ],
  children: []
},
{
  id: "leaky_relu",
  title: "Leaky ReLU",
  subtitle: "Variante que soluciona el problema de las 'neuronas muertas'",
  content: [
    {
      type: "text",
      value: "Leaky ReLU introduce una pequeña pendiente para valores negativos (generalmente α=0.01), evitando que las neuronas se 'apaguen' completamente durante el entrenamiento."
    },
    {
      type: "text",
      value: "Fórmula matemática: f(x) = max(αx, x) donde α ≈ 0.01\n\nVentajas:\n- Soluciona el problema Dying ReLU\n- Mantiene la eficiencia computacional\n- Permite gradientes para valores negativos\n\nDesventajas:\n- Resultados inconsistentes cuando α no está bien calibrado"
    },
    {
      type: "code",
      value: `// Implementación de Leaky ReLU en Python
def leaky_relu(x, alpha=0.01):
    return max(alpha * x, x)

# Ejemplo de uso
print(leaky_relu(-0.5))  # Salida: -0.005`
    },
    {
      type: "img",
      value: "Gráfico de Leaky ReLU mostrando la pequeña pendiente para valores negativos"
    }
  ],
  children: []
},
{
  id: "elu",
  title: "ELU (Exponential Linear Unit)",
  subtitle: "Función de activación con comportamiento suave para valores negativos",
  content: [
    {
      type: "text",
      value: "ELU combina las ventajas de ReLU y Leaky ReLU con un comportamiento suave para valores negativos, lo que ayuda a normalizar las activaciones."
    },
    {
      type: "text",
      value: "Fórmula matemática: f(x) = x si x > 0, α(e^x - 1) si x ≤ 0\n\nVentajas:\n- Comportamiento suave para valores negativos\n- Reduce el bias shift\n- Mejor rendimiento que ReLU en algunas arquitecturas\n\nDesventajas:\n- Cálculo exponencial más costoso computacionalmente"
    },
    {
      type: "code",
      value: `// Implementación de ELU en Python
import math

def elu(x, alpha=1.0):
    return x if x > 0 else alpha * (math.exp(x) - 1)

# Ejemplo de uso
print(elu(-1.0))  # Salida: ~-0.632`
    },
    {
      type: "img",
      value: "Gráfico de ELU mostrando la curva exponencial para valores negativos"
    }
  ],
  children: []
},
{
  id: "selu",
  title: "SELU (Scaled Exponential Linear Unit)",
  subtitle: "Función auto-normalizante para redes profundas",
  content: [
    {
      type: "text",
      value: "SELU es una variante de ELU con propiedades de auto-normalización, especialmente útil para redes neuronales completamente conectadas profundas sin normalización por lotes."
    },
    {
      type: "text",
      value: "Fórmula matemática: f(x) = λx si x > 0, λα(e^x - 1) si x ≤ 0 (λ≈1.0507, α≈1.6733)\n\nVentajas:\n- Propiedades auto-normalizantes\n- Buen rendimiento en redes profundas\n- Evita vanishing y exploding gradients\n\nDesventajas:\n- Requiere inicialización específica de pesos (Lecun normal)\n- No funciona bien con dropout estándar"
    },
    {
      type: "code",
      value: `// Implementación de SELU en Python
import math

def selu(x, lambda_=1.0507, alpha=1.6733):
    return lambda_ * x if x > 0 else lambda_ * alpha * (math.exp(x) - 1)`
    },
    {
      type: "img",
      value: "Gráfico de SELU comparado con otras funciones de activación"
    }
  ],
  children: []
},
{
  id: "swish",
  title: "Swish",
  subtitle: "Función de activación descubierta mediante búsqueda automatizada",
  content: [
    {
      type: "text",
      value: "Swish es una función de activación descubierta por investigadores de Google mediante búsqueda automatizada, que ha demostrado superar a ReLU en muchas arquitecturas profundas."
    },
    {
      type: "text",
      value: "Fórmula matemática: f(x) = x * σ(βx) donde σ es la sigmoide (β puede ser aprendido o fijo)\n\nVentajas:\n- Mejor rendimiento que ReLU en redes muy profundas\n- Función suave y diferenciable en todos los puntos\n\nDesventajas:\n- Computacionalmente más costosa que ReLU\n- Menos interpretable que otras funciones"
    },
    {
      type: "code",
      value: `// Implementación de Swish en Python
import math

def swish(x, beta=1.0):
    return x / (1 + math.exp(-beta * x))

# Ejemplo de uso
print(swish(1.0))  # Salida: ~0.731`
    },
    {
      type: "img",
      value: "Gráfico de Swish mostrando su comportamiento no monótono para valores negativos"
    }
  ],
  children: []
},
{
  id: "gelu",
  title: "GELU (Gaussian Error Linear Unit)",
  subtitle: "Función utilizada en modelos de última generación como BERT y GPT",
  content: [
    {
      type: "text",
      value: "GELU es una función de activación que multiplica la entrada por la función de distribución acumulativa de una distribución normal, ampliamente utilizada en modelos de lenguaje grandes."
    },
    {
      type: "text",
      value: "Fórmula matemática: GELU(x) = xΦ(x) donde Φ es la CDF de N(0,1)\n\nVentajas:\n- Comportamiento más suave que ReLU\n- Buen rendimiento en transformers\n- Fundamentación probabilística\n\nDesventajas:\n- Cálculo computacionalmente costoso\n- Difícil implementación exacta"
    },
    {
      type: "code",
      value: `// Aproximación de GELU en Python
import math

def gelu(x):
    return 0.5 * x * (1 + math.tanh(math.sqrt(2/math.pi) * (x + 0.044715 * x**3)))`
    },
    {
      type: "img",
      value: "Comparación visual entre GELU y ReLU mostrando la transición suave"
    }
  ],
  children: []
},
{
  id: "mish",
  title: "Mish",
  subtitle: "Nueva función de activación con excelente rendimiento empírico",
  content: [
    {
      type: "text",
      value: "Mish es una función de activación reciente que combina propiedades de Swish y ELU, demostrando mejor rendimiento en diversas tareas de visión por computadora."
    },
    {
      type: "text",
      value: "Fórmula matemática: f(x) = x * tanh(softplus(x)) donde softplus(x) = ln(1 + e^x)\n\nVentajas:\n- Mejor precisión que ReLU y Swish en algunos benchmarks\n- Comportamiento suave en todo el dominio\n- Evita neuronas muertas\n\nDesventajas:\n- Computacionalmente costosa\n- Menos estudiada que otras funciones"
    },
    {
      type: "code",
      value: `// Implementación de Mish en Python
import math

def softplus(x):
    return math.log(1 + math.exp(x))

def mish(x):
    return x * math.tanh(softplus(x))`
    },
    {
      type: "img",
      value: "Gráfico de Mish comparado con otras funciones de activación populares"
    }
  ],
  children: []
},
{
  id: "inicializacion_de_pesos",
  title: "Inicialización de Pesos en Redes Neuronales",
  subtitle: "Estrategias para inicializar parámetros y evitar problemas de convergencia",
  content: [
    {
      type: "text",
      value: "La inicialización adecuada de los pesos es crucial para el entrenamiento eficiente de redes neuronales. Una mala inicialización puede llevar a vanishing/exploding gradients o a una convergencia lenta."
    },
    {
      type: "img",
      value: "Diagrama comparativo de distribuciones de diferentes métodos de inicialización"
    },
    {
      type: "text",
      value: "Objetivos de una buena inicialización:\n- Mantener varianza similar en forward/backward pass\n- Permitir un flujo estable de gradientes\n- Evitar simetrías perjudiciales\n- Acelerar la convergencia"
    }
  ],
  children: [
    "he_normal",
    "he_uniform",
    "glorot",
    "lecun",
    "inicializacion_basada_en_activacion_sigmoid_tanh_etc"
  ]
},
{
  id: "he_normal",
  title: "He Normal Initialization",
  subtitle: "Inicialización normal adaptada a ReLU y variantes",
  content: [
    {
      type: "text",
      value: "Propuesta por Kaiming He, está diseñada específicamente para redes que usan ReLU o sus variantes como función de activación."
    },
    {
      type: "text",
      value: "Fórmula: W ~ N(0, √(2/n_in))\nDonde n_in es el número de neuronas en la capa anterior.\n\nVentajas:\n- Mantiene varianza constante en capas profundas\n- Ideal para arquitecturas con ReLU/LeakyReLU\n- Evita vanishing gradients"
    },
    {
      type: "code",
      value: `# En Keras
from tensorflow.keras.layers import Dense

layer = Dense(64, activation='relu', kernel_initializer='he_normal')`
    }
  ],
  children: []
},
{
  id: "he_uniform",
  title: "He Uniform Initialization",
  subtitle: "Versión uniforme para inicialización con ReLU",
  content: [
    {
      type: "text",
      value: "Variante uniforme de la inicialización He, con similar comportamiento pero usando distribución uniforme en lugar de normal."
    },
    {
      type: "text",
      value: "Fórmula: W ~ U(-√(6/n_in), √(6/n_in))\n\nCasos de uso:\n- Alternativa a He Normal\n- Cuando se prefiere distribución uniforme\n- En combinación con regularización L2"
    },
    {
      type: "code",
      value: `# En PyTorch
import torch.nn as nn

layer = nn.Linear(10, 20)
nn.init.kaiming_uniform_(layer.weight, mode='fan_in', nonlinearity='relu')`
    }
  ],
  children: []
},
{
  id: "glorot",
  title: "Glorot/Xavier Initialization",
  subtitle: "Método clásico para funciones de activación sigmoide/tanh",
  content: [
    {
      type: "text",
      value: "También conocida como inicialización Xavier, fue diseñada para funciones de activación sigmoide y tanh."
    },
    {
      type: "text",
      value: "Fórmula (Normal): W ~ N(0, √(2/(n_in + n_out)))\nFórmula (Uniforme): W ~ U(-√(6/(n_in + n_out)), √(6/(n_in + n_out)))\n\nRecomendada para:\n- Redes con activaciones sigmoide/tanh\n- Arquitecturas no muy profundas\n- Problemas donde ReLU no es adecuado"
    },
    {
      type: "code",
      value: `# En TensorFlow
initializer = tf.keras.initializers.GlorotNormal()
layer = tf.keras.layers.Dense(64, kernel_initializer=initializer)`
    }
  ],
  children: []
},
{
  id: "lecun",
  title: "LeCun Initialization",
  subtitle: "Inicialización para SELU y redes auto-normalizantes",
  content: [
    {
      type: "text",
      value: "Desarrollada por Yann LeCun, es especialmente adecuada para redes que usan SELU como función de activación."
    },
    {
      type: "text",
      value: "Fórmula (Normal): W ~ N(0, √(1/n_in))\nFórmula (Uniforme): W ~ U(-√(3/n_in), √(3/n_in))\n\nCaracterísticas:\n- Mantiene media 0 y varianza 1 en capas profundas\n- Requerida para el correcto funcionamiento de SELU\n- Usada en redes auto-normalizantes"
    },
    {
      type: "code",
      value: `# En Keras con SELU
from tensorflow.keras.layers import Dense
from tensorflow.keras.initializers import LecunNormal

layer = Dense(64, activation='selu', kernel_initializer=LecunNormal())`
    }
  ],
  children: []
},
{
  id: "inicializacion_basada_en_activacion_sigmoid_tanh_etc",
  title: "Inicialización por Tipo de Activación",
  subtitle: "Selección del método según la función de activación",
  content: [
    {
      type: "text",
      value: "Guía para elegir el método de inicialización óptimo según la función de activación utilizada:"
    },
    {
      type: "text",
      value: "Recomendaciones:\n- ReLU/LeakyReLU: He Normal/Uniform\n- SELU: LeCun Normal\n- Sigmoid/Tanh: Glorot/Xavier\n- Swish/GELU: He Normal o variantes\n- Linear: He Normal con factor de escala reducido"
    },
    {
      type: "img",
      value: "Tabla comparativa de métodos de inicialización vs funciones de activación"
    },
    {
      type: "code",
      value: `# Función para selección automática
def get_initializer(activation):
    if activation in ['relu', 'leaky_relu']:
        return 'he_normal'
    elif activation == 'selu':
        return 'lecun_normal'
    elif activation in ['sigmoid', 'tanh']:
        return 'glorot_normal'
    else:
        return 'he_normal'`
    }
  ],
  children: []
},
{
  id: "optimizadores",
  title: "Optimizadores en Deep Learning",
  subtitle: "Algoritmos para actualizar los pesos de la red durante el entrenamiento",
  content: [
    {
      type: "text",
      value: "Los optimizadores son algoritmos que determinan cómo se actualizan los pesos de una red neuronal durante el entrenamiento, combinando el cálculo de gradientes con técnicas para acelerar la convergencia y evitar mínimos locales."
    },
    {
      type: "img",
      value: "Diagrama comparativo de trayectorias de diferentes optimizadores en un espacio de parámetros"
    },
    {
      type: "text",
      value: "Factores clave al elegir un optimizador:\n- Velocidad de convergencia\n- Estabilidad del entrenamiento\n- Manejo de gradientes pequeños (vanishing gradients)\n- Requerimientos de memoria\n- Hiperparámetros a ajustar"
    }
  ],
  children: [
    "sgd",
    "rmsprop",
    "adam",
    "adamw",
    "nadam",
    "adamax",
    "nadamw"
  ]
},
{
  id: "sgd",
  title: "SGD (Stochastic Gradient Descent)",
  subtitle: "El optimizador más básico en aprendizaje profundo",
  content: [
    {
      type: "text",
      value: "Descenso de Gradiente Estocástico actualiza los pesos en dirección opuesta al gradiente de la función de pérdida. Es la base sobre la que se construyen optimizadores más avanzados."
    },
    {
      type: "text",
      value: "Fórmula: θ = θ - η·∇J(θ)\nDonde:\n- θ: Parámetros del modelo\n- η: Tasa de aprendizaje\n- ∇J(θ): Gradiente de la función de pérdida\n\nVentajas:\n- Simple y predecible\n- Buen rendimiento con learning rate schedule\n\nDesventajas:\n- Convergencia lenta\n- Sensible a la escala de características\n- Puede quedar atrapado en mínimos locales"
    },
    {
      type: "code",
      value: `# SGD en Keras
from tensorflow.keras.optimizers import SGD

optimizer = SGD(learning_rate=0.01, momentum=0.0)
model.compile(optimizer=optimizer, loss='categorical_crossentropy')`
    }
  ],
  children: [
    "momentum",
    "nesterov"
  ]
},
{
  id: "momentum",
  title: "SGD con Momentum",
  subtitle: "Variante que acumula velocidad en la dirección de gradientes consistentes",
  content: [
    {
      type: "text",
      value: "Momentum ayuda a acelerar SGD en la dirección relevante y amortigua oscilaciones, acumulando un vector de velocidad en la dirección del gradiente."
    },
    {
      type: "text",
      value: "Fórmula:\nv = γ·v + η·∇J(θ)\nθ = θ - v\n\nDonde:\n- v: Vector de velocidad (momentum)\n- γ: Factor de momentum (típicamente 0.9)\n\nEfectos:\n- Acelera convergencia en direcciones relevantes\n- Reduce oscilaciones en gradientes ruidosos\n- Ayuda a escapar de mínimos locales superficiales"
    },
    {
      type: "code",
      value: `# SGD con Momentum en PyTorch
import torch.optim as optim

optimizer = optim.SGD(model.parameters(), lr=0.01, momentum=0.9)`
    }
  ],
  children: []
},
{
  id: "nesterov",
  title: "Nesterov Accelerated Gradient (NAG)",
  subtitle: "Variante de momentum que anticipa la actualización",
  content: [
    {
      type: "text",
      value: "Nesterov es una mejora sobre momentum clásico que realiza una corrección anticipada, calculando el gradiente no en la posición actual sino en una posición aproximada futura."
    },
    {
      type: "text",
      value: "Fórmula:\nv = γ·v + η·∇J(θ - γ·v)\nθ = θ - v\n\nBeneficios:\n- Convergencia más rápida que momentum estándar\n- Corrección más precisa de la dirección\n- Mejor comportamiento en puntos de silla\n\nUso típico:\n- Problemas con curvaturas variables\n- Redes muy profundas\n- Cuando momentum estándar oscila demasiado"
    },
    {
      type: "code",
      value: `# Nesterov en Keras
optimizer = SGD(learning_rate=0.01, momentum=0.9, nesterov=True)`
    }
  ],
  children: []
},
{
  id: "rmsprop",
  title: "RMSprop",
  subtitle: "Adapta la tasa de aprendizaje por parámetro basado en promedios móviles",
  content: [
    {
      type: "text",
      value: "RMSprop (Root Mean Square Propagation) adapta la tasa de aprendizaje dividiendo el gradiente por una media móvil de sus magnitudes recientes."
    },
    {
      type: "text",
      value: "Fórmula:\nE[g²] = ρE[g²] + (1-ρ)g²\nθ = θ - (η/√(E[g²] + ε))·g\n\nDonde:\n- E[g²]: Media móvil de gradientes al cuadrado\n- ρ: Factor de decaimiento (típicamente 0.9)\n- ε: Término pequeño para estabilidad (1e-8)\n\nVentajas:\n- Maneja bien escalas variables de características\n- Bueno para problemas no estacionarios\n- Requiere poco ajuste de hiperparámetros"
    },
    {
      type: "code",
      value: `# RMSprop en TensorFlow
optimizer = tf.keras.optimizers.RMSprop(
    learning_rate=0.001,
    rho=0.9,
    momentum=0.0,
    epsilon=1e-07
)`
    }
  ],
  children: []
},
{
  id: "adam",
  title: "Adam (Adaptive Moment Estimation)",
  subtitle: "El optimizador más popular que combina momentum y adaptación por parámetro",
  content: [
    {
      type: "text",
      value: "Adam combina las ideas de momentum y RMSprop, manteniendo promedios móviles tanto de los gradientes como de sus segundos momentos (varianzas)."
    },
    {
      type: "text",
      value: "Fórmula:\nm = β₁·m + (1-β₁)·g\nv = β₂·v + (1-β₂)·g²\nm̂ = m/(1-β₁^t)\nv̂ = v/(1-β₂^t)\nθ = θ - η·m̂/(√v̂ + ε)\n\nParámetros típicos:\n- β₁=0.9 (momentum)\n- β₂=0.999 (RMS)\n- ε=1e-8\n\nVentajas:\n- Rápida convergencia\n- Poco ajuste de hiperparámetros\n- Buen comportamiento en muchos problemas"
    },
    {
      type: "code",
      value: `# Adam en PyTorch
optimizer = torch.optim.Adam(
    model.parameters(),
    lr=0.001,
    betas=(0.9, 0.999),
    eps=1e-08
)`
    }
  ],
  children: []
},
{
  id: "adamw",
  title: "AdamW",
  subtitle: "Versión de Adam con decaimiento de pesos correctamente implementado",
  content: [
    {
      type: "text",
      value: "AdamW corrige la implementación del weight decay en Adam, desacoplando el término de regularización L2 de la adaptación de la tasa de aprendizaje."
    },
    {
      type: "text",
      value: "Diferencias clave con Adam:\n- Weight decay no afecta a los momentos adaptativos\n- Mejor generalización\n- Más estable con grandes valores de weight decay\n\nUso recomendado:\n- Entrenamiento de transformers\n- Cuando se usa regularización L2\n- Fine-tuning de modelos preentrenados"
    },
    {
      type: "code",
      value: `# AdamW en Transformers
from transformers import AdamW

optimizer = AdamW(
    model.parameters(),
    lr=5e-5,
    weight_decay=0.01
)`
    }
  ],
  children: []
},
{
  id: "nadam",
  title: "Nadam",
  subtitle: "Adam + Nesterov momentum",
  content: [
    {
      type: "text",
      value: "Nadam combina Adam con la idea de anticipación de Nesterov, generalmente ofreciendo una convergencia ligeramente más rápida que Adam estándar."
    },
    {
      type: "text",
      value: "Características:\n- Usa la corrección de Nesterov para el momento\n- Tasa de aprendizaje adaptativa por parámetro\n- Bueno para problemas con ruido\n\nCasos de uso:\n- Cuando Adam converge muy lentamente\n- Problemas con gradientes ruidosos\n- Arquitecturas recurrentes complejas"
    },
    {
      type: "code",
      value: `# Nadam en Keras
optimizer = tf.keras.optimizers.Nadam(
    learning_rate=0.001,
    beta_1=0.9,
    beta_2=0.999
)`
    }
  ],
  children: []
},
{
  id: "adamax",
  title: "AdaMax",
  subtitle: "Variante de Adam basada en norma infinita",
  content: [
    {
      type: "text",
      value: "AdaMax es una variante de Adam que usa la norma infinita (max) en lugar de la norma L2 para el segundo momento, lo que puede hacerlo más estable en algunos casos."
    },
    {
      type: "text",
      value: "Diferencias con Adam:\n- Reemplaza v̂ con u = max(β₂·u, |g|)\n- Más robusto a gradientes extremos\n- Menos sensible a la elección de β₂\n\nRecomendado para:\n- Gradientes muy dispersos\n- Cuando Adam es inestable\n- Problemas con características de escalas muy diferentes"
    },
    {
      type: "code",
      value: `# AdaMax en Keras
optimizer = tf.keras.optimizers.Adamax(
    learning_rate=0.001,
    beta_1=0.9,
    beta_2=0.999
)`
    }
  ],
  children: []
},
{
  id: "nadamw",
  title: "NadamW",
  subtitle: "Combinación de Nadam con weight decay correcto",
  content: [
    {
      type: "text",
      value: "NadamW aplica las mismas correcciones de AdamW al optimizador Nadam, desacoplando el weight decay de los mecanismos adaptativos."
    },
    {
      type: "text",
      value: "Ventajas:\n- Propiedades de convergencia rápida de Nadam\n- Mejor generalización que Nadam\n- Comportamiento más predecible con regularización\n\nUso actual:\n- Entrenamiento de modelos vision transformers\n- Fine-tuning de grandes modelos\n- Cuando se necesita máxima velocidad de convergencia"
    },
    {
      type: "code",
      value: `# Implementación custom de NadamW
# (No disponible directamente en Keras/TF)
optimizer = tfa.optimizers.NadamW(
    learning_rate=0.001,
    weight_decay=0.01
)`
    }
  ],
  children: []
},
{
  id: "funciones_de_perdida",
  title: "Funciones de Pérdida en Deep Learning",
  subtitle: "Métricas para cuantificar el error y guiar el aprendizaje de modelos",
  content: [
    {
      type: "text",
      value: "Las funciones de pérdida (loss functions) miden qué tan bien está performando un modelo comparando sus predicciones con los valores reales. Son críticas para el entrenamiento ya que guían la optimización de los parámetros."
    },
    {
      type: "img",
      value: "Diagrama comparativo de funciones de pérdida mostrando sus formas y aplicaciones"
    },
    {
      type: "text",
      value: "Características clave:\n- Deben ser diferenciables\n- Deben reflejar adecuadamente el objetivo del modelo\n- Su elección afecta la velocidad y calidad del aprendizaje\n- Varían según tipo de problema (clasificación, regresión, etc.)"
    }
  ],
  children: [
    "binary_crossentropy",
    "sparse_categorical_crossentropy",
    "categorical_crossentropy",
    "hinge_loss",
    "kl_divergence",
    "jensenshannon_divergence"
  ]
},
{
  id: "binary_crossentropy",
  title: "Binary Crossentropy",
  subtitle: "Función de pérdida para clasificación binaria",
  content: [
    {
      type: "text",
      value: "Mide la diferencia entre dos distribuciones de probabilidad para el caso de clasificación binaria (2 clases). Ideal cuando las salidas son probabilísticas."
    },
    {
      type: "text",
      value: "Fórmula:\nL = -[y·log(p) + (1-y)·log(1-p)]\n\nDonde:\n- y: Etiqueta real (0 o 1)\n- p: Probabilidad predicha (0-1)\n\nUso típico:\n- Clasificación binaria\n- Redes con capa final sigmoide\n- Cuando se necesitan probabilidades"
    },
    {
      type: "code",
      value: `# En Keras
model.compile(
    loss='binary_crossentropy',
    optimizer='adam',
    metrics=['accuracy']
)`
    }
  ],
  children: []
},
{
  id: "categorical_crossentropy",
  title: "Categorical Crossentropy",
  subtitle: "Pérdida para clasificación multiclase con one-hot encoding",
  content: [
    {
      type: "text",
      value: "Extensión de crossentropy para múltiples clases cuando las etiquetas están en formato one-hot encoded (ej: [0,0,1,0])."
    },
    {
      type: "text",
      value: "Fórmula:\nL = -Σ y_i·log(p_i)\n\nRequisitos:\n- Capa final con softmax\n- Etiquetas en one-hot encoding\n- Número fijo de clases\n\nEjemplo de uso:\n- Clasificación de imágenes (CIFAR-10)\n- Modelos con salidas mutuamente excluyentes"
    },
    {
      type: "code",
      value: `# Ejemplo en TensorFlow
loss_fn = tf.keras.losses.CategoricalCrossentropy(
    from_logits=False,  # True si no hay softmax
    label_smoothing=0.1  # Regularización
)`
    }
  ],
  children: []
},
{
  id: "sparse_categorical_crossentropy",
  title: "Sparse Categorical Crossentropy",
  subtitle: "Versión para etiquetas enteras (no one-hot)",
  content: [
    {
      type: "text",
      value: "Variante que evita el one-hot encoding aceptando etiquetas como enteros (ej: clase 2 en lugar de [0,0,1,0]). Más eficiente en memoria."
    },
    {
      type: "text",
      value: "Diferencias con categorical crossentropy:\n- Etiquetas son índices enteros\n- Mismo cálculo matemático internamente\n- Más eficiente para muchas clases\n\nCuando usarla:\n- Grandes conjuntos de datos\n- Problemas con muchas clases\n- Cuando las etiquetas ya son enteras"
    },
    {
      type: "code",
      value: `# En PyTorch (usando CrossEntropyLoss que combina logsoftmax + NLLLoss)
criterion = nn.CrossEntropyLoss()
loss = criterion(outputs, labels)  # labels como tensores de índices`
    }
  ],
  children: []
},
{
  id: "hinge_loss",
  title: "Hinge Loss (Pérdida de Margen Máximo)",
  subtitle: "Función para clasificación con márgenes",
  content: [
    {
      type: "text",
      value: "Usada en Support Vector Machines (SVMs) y algunos modelos de deep learning, maximiza el margen entre clases."
    },
    {
      type: "text",
      value: "Fórmula:\nL = max(0, 1 - y·ŷ)\nDonde y ∈ {-1,1}\n\nCaracterísticas:\n- Menos sensible a outliers que crossentropy\n- Produce vectores de soporte\n- No da probabilidades\n\nAplicaciones:\n- SVMs neuronales\n- Cuando se necesita decisión clara más que probabilidades\n- Problemas con márgenes claros entre clases"
    },
    {
      type: "code",
      value: `# En Keras
model.compile(
    loss='hinge',  # Para etiquetas codificadas como +1/-1
    optimizer='adam'
)`
    }
  ],
  children: []
},
{
  id: "kl_divergence",
  title: "KL Divergence (Kullback-Leibler)",
  subtitle: "Mide diferencia entre distribuciones de probabilidad",
  content: [
    {
      type: "text",
      value: "Mide cuánto se diferencia una distribución de probabilidad de otra. Usada en modelos generativos y de aproximación."
    },
    {
      type: "text",
      value: "Fórmula:\nKL(P||Q) = Σ P(x)·log(P(x)/Q(x))\n\nPropiedades:\n- Asimétrica (KL(P||Q) ≠ KL(Q||P))\n- No es una distancia métrica\n- KL ≥ 0\n\nCasos de uso:\n- Autoencoders variacionales (VAEs)\n- Regularización\n- Modelado de distribuciones"
    },
    {
      type: "code",
      value: `# Cálculo en TensorFlow
loss = tf.keras.losses.KLDivergence()
kl_loss = loss(p_distribution, q_distribution)`
    }
  ],
  children: []
},
{
  id: "jensenshannon_divergence",
  title: "Jensen-Shannon Divergence",
  subtitle: "Métrica simétrica basada en KL Divergence",
  content: [
    {
      type: "text",
      value: "Versión simétrica y suavizada de la KL Divergence, acotada entre 0 y 1. Útil para comparar distribuciones."
    },
    {
      type: "text",
      value: "Fórmula:\nJS(P||Q) = ½(KL(P||M) + KL(Q||M))\nDonde M = ½(P+Q)\n\nVentajas sobre KL:\n- Simétrica (JS(P,Q) = JS(Q,P))\n- Acotada (0 ≤ JS ≤ 1)\n- Más estable numéricamente\n\nAplicaciones:\n- GANs (Generative Adversarial Networks)\n- Comparación de distribuciones\n- Cuando se necesita simetría"
    },
    {
      type: "code",
      value: `# Implementación en SciPy
from scipy.spatial.distance import jensenshannon
import numpy as np

p = np.array([0.1, 0.4, 0.5])
q = np.array([0.2, 0.3, 0.5])
js_distance = jensenshannon(p, q)`
    }
  ],
  children: []
},
{
  id: "hiperparametros_y_ajuste",
  title: "Hiperparámetros y Ajuste de Modelos",
  subtitle: "Configuración óptima de parámetros para mejorar el rendimiento del modelo",
  content: [
    {
      type: "text",
      value: "Los hiperparámetros son configuraciones externas al modelo que controlan el proceso de aprendizaje. Su correcto ajuste es crucial para obtener el mejor rendimiento de una red neuronal."
    },
    {
      type: "img",
      value: "Diagrama de flujo para el ajuste de hiperparámetros mostrando métodos manuales y automáticos"
    },
    {
      type: "text",
      value: "Estrategias comunes de ajuste:\n- Búsqueda en cuadrícula (Grid Search)\n- Búsqueda aleatoria (Random Search)\n- Optimización bayesiana\n- Algoritmos genéticos\n- Pruebas manuales basadas en experiencia"
    }
  ],
  children: [
    "numero_de_capas",
    "numero_de_neuronas",
    "learning_rate",
    "tamano_de_batch",
    "epochs",
    "regularizacion",
    "callbacks"
  ]
},
{
  id: "numero_de_capas",
  title: "Número de Capas",
  subtitle: "Profundidad de la red neuronal",
  content: [
    {
      type: "text",
      value: "La profundidad de la red (número de capas ocultas) afecta su capacidad de aprendizaje. Más capas permiten modelar funciones más complejas pero son más difíciles de entrenar."
    },
    {
      type: "text",
      value: "Guía práctica:\n- Problemas simples: 1-2 capas\n- Problemas moderados: 3-5 capas\n- Problemas complejos (imágenes, lenguaje): 10+ capas\n\nConsideraciones:\n- Redes muy profundas sufren de vanishing gradients\n- Pueden requerir técnicas especiales (skip connections, normalización)"
    },
    {
      type: "code",
      value: `# Ejemplo de modelo con diferente profundidad en Keras
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

def build_model(num_layers=3):
    model = Sequential()
    model.add(Dense(64, activation='relu', input_shape=(input_dim,)))
    for _ in range(num_layers-1):
        model.add(Dense(64, activation='relu'))
    model.add(Dense(output_dim, activation='softmax'))
    return model`
    }
  ],
  children: []
},
{
  id: "numero_de_neuronas",
  title: "Número de Neuronas por Capa",
  subtitle: "Ancho de las capas ocultas",
  content: [
    {
      type: "text",
      value: "El número de neuronas por capa determina la capacidad de aprendizaje de cada capa. Demasiadas pueden causar overfitting, muy pocas underfitting."
    },
    {
      type: "text",
      value: "Recomendaciones:\n- Comenzar con potencias de 2 (32, 64, 128, 256)\n- Aumentar progresivamente hasta ver mejoras\n- Usar más neuronas en primeras capas para problemas complejos\n\nRegla empírica:\n- Entre tamaño de entrada y salida\n- 2/3 del tamaño de la capa anterior + tamaño de salida"
    },
    {
      type: "code",
      value: `# Modelo con ancho variable en PyTorch
import torch.nn as nn

class Net(nn.Module):
    def __init__(self, layer_sizes=[64, 128, 64]):
        super().__init__()
        layers = []
        for i in range(len(layer_sizes)-1):
            layers.append(nn.Linear(layer_sizes[i], layer_sizes[i+1]))
            layers.append(nn.ReLU())
        self.net = nn.Sequential(*layers)`
    }
  ],
  children: []
},
{
  id: "learning_rate",
  title: "Tasa de Aprendizaje (Learning Rate)",
  subtitle: "El hiperparámetro más importante",
  content: [
    {
      type: "text",
      value: "Controla cuánto ajustamos los pesos en cada paso de optimización. Demasiado alta puede hacer diverger el modelo, demasiado baja ralentiza el entrenamiento."
    },
    {
      type: "text",
      value: "Valores típicos:\n- SGD: 0.01-0.1\n- Adam: 0.0001-0.001\n- RMSprop: 0.001-0.01\n\nEstrategias:\n- Learning rate decay\n- Ciclos de learning rate\n- Warmup\n- Usar optimizadores adaptativos"
    },
    {
      type: "code",
      value: `# Configuración de learning rate en optimizadores
from tensorflow.keras.optimizers import Adam

optimizer = Adam(learning_rate=0.001)  # Valor típico para Adam

# Learning rate scheduler
def lr_scheduler(epoch):
    return 0.001 * 0.9 ** epoch  # Decaimiento exponencial`
    }
  ],
  children: []
},
{
  id: "tamano_de_batch",
  title: "Tamaño del Batch",
  subtitle: "Número de muestras por actualización de gradiente",
  content: [
    {
      type: "text",
      value: "El batch size afecta la estabilidad del entrenamiento y el uso de memoria. Valores más grandes dan estimaciones más estables del gradiente pero requieren más memoria."
    },
    {
      type: "text",
      value: "Guía de selección:\n- GPU pequeña: 16-64\n- GPU grande: 64-512\n- TPU: 1028+\n\nEfectos:\n- Batch pequeños: ruido beneficioso, más épocas\n- Batch grandes: entrenamiento más rápido, menos ruido"
    },
    {
      type: "code",
      value: `# Especificación del batch size en el entrenamiento
model.fit(
    X_train, y_train,
    batch_size=32,  # Valor común
    epochs=100
)`
    }
  ],
  children: []
},
{
  id: "epochs",
  title: "Número de Épocas",
  subtitle: "Cuántas veces iterar sobre el dataset completo",
  content: [
    {
      type: "text",
      value: "Una época representa un pase completo sobre los datos de entrenamiento. Demasiadas épocas pueden llevar a overfitting, muy pocas a underfitting."
    },
    {
      type: "text",
      value: "Estrategias:\n- Comenzar con 10-50 épocas\n- Usar early stopping\n- Monitorear pérdida en validación\n\nFactores que afectan:\n- Complejidad del modelo\n- Tamaño del dataset\n- Batch size\n- Tasa de aprendizaje"
    },
    {
      type: "code",
      value: `# Ejemplo con early stopping para determinar épocas
from tensorflow.keras.callbacks import EarlyStopping

early_stop = EarlyStopping(monitor='val_loss', patience=5)
model.fit(X_train, y_train, epochs=100, 
          validation_data=(X_val, y_val),
          callbacks=[early_stop])`
    }
  ],
  children: []
},
{
  id: "regularizacion",
  title: "Técnicas de Regularización",
  subtitle: "Métodos para prevenir overfitting",
  content: [
    {
      type: "text",
      value: "La regularización ayuda a que los modelos generalicen mejor a datos no vistos, evitando que memoricen el conjunto de entrenamiento."
    },
    {
      type: "img",
      value: "Comparación de fronteras de decisión con y sin regularización"
    }
  ],
  children: [
    "l1_lasso",
    "l2_ridge"
  ]
},
{
  id: "l1_lasso",
  title: "Regularización L1 (Lasso)",
  subtitle: "Promueve la dispersión de pesos (sparsity)",
  content: [
    {
      type: "text",
      value: "Añade una penalización proporcional al valor absoluto de los pesos, llevando algunos pesos exactamente a cero (selección de características)."
    },
    {
      type: "text",
      value: "Fórmula: L = Loss + λΣ|w|\n\nCaracterísticas:\n- Crea modelos más simples\n- Útil para selección de características\n- Puede producir pesos exactamente cero\n\nValores típicos de λ: 0.001-0.1"
    },
    {
      type: "code",
      value: `# Añadir regularización L1 en Keras
from tensorflow.keras import regularizers

layer = Dense(64, activation='relu',
              kernel_regularizer=regularizers.l1(0.01))`
    }
  ],
  children: []
},
{
  id: "l2_ridge",
  title: "Regularización L2 (Ridge)",
  subtitle: "Penaliza pesos grandes",
  content: [
    {
      type: "text",
      value: "Añade una penalización proporcional al cuadrado de los pesos, manteniendo todos los pesos pequeños pero no necesariamente cero."
    },
    {
      type: "text",
      value: "Fórmula: L = Loss + λΣw²\n\nCaracterísticas:\n- Distribuye la importancia entre características\n- Más estable que L1\n- No produce exactamente pesos cero\n\nValores típicos de λ: 0.001-0.1"
    },
    {
      type: "code",
      value: `# Añadir regularización L2 en PyTorch
import torch.nn as nn

class Net(nn.Module):
    def __init__(self):
        super().__init__()
        self.fc1 = nn.Linear(784, 256)
        # Weight decay implementa L2
        self.optimizer = torch.optim.Adam(self.parameters(), weight_decay=1e-4)`
    }
  ],
  children: []
},
{
  id: "callbacks",
  title: "Callbacks",
  subtitle: "Funciones de control durante el entrenamiento",
  content: [
    {
      type: "text",
      value: "Los callbacks permiten monitorear y modificar el comportamiento del modelo durante el entrenamiento, automatizando tareas comunes."
    },
    {
      type: "img",
      value: "Diagrama de flujo de callbacks durante el ciclo de entrenamiento"
    }
  ],
  children: [
    "early_stopping",
    "reduccion_dinamica_de_lr",
    "learning_rate_scheduling"
  ]
},
{
  id: "early_stopping",
  title: "Early Stopping",
  subtitle: "Detener el entrenamiento cuando el modelo deja de mejorar",
  content: [
    {
      type: "text",
      value: "Monitoriza una métrica de validación y detiene el entrenamiento cuando no mejora después de cierta cantidad de épocas (paciencia)."
    },
    {
      type: "text",
      value: "Parámetros clave:\n- monitor: Métrica a observar (ej: 'val_loss')\n- patience: Épocas sin mejora antes de parar\n- restore_best_weights: Restaurar mejores pesos\n\nBeneficios:\n- Evita overfitting\n- Ahorra tiempo de cómputo\n- Automatiza la selección de épocas"
    },
    {
      type: "code",
      value: `# Implementación en Keras
from tensorflow.keras.callbacks import EarlyStopping

early_stopping = EarlyStopping(
    monitor='val_accuracy',
    patience=10,
    restore_best_weights=True
)`
    }
  ],
  children: []
},
{
  id: "reduccion_dinamica_de_lr",
  title: "Reducción Dinámica de LR (ReduceLROnPlateau)",
  subtitle: "Ajusta la tasa de aprendizaje cuando el estancamiento ocurre",
  content: [
    {
      type: "text",
      value: "Reduce el learning rate cuando una métrica ha dejado de mejorar, permitiendo un ajuste más fino de los pesos."
    },
    {
      type: "text",
      value: "Configuración típica:\n- factor: Multiplicador para reducir LR (ej: 0.1)\n- patience: Épocas sin mejora antes de reducir\n- min_lr: Límite inferior para el LR\n\nUso ideal:\n- Cuando el aprendizaje se estanca\n- Para afinar modelos en etapas finales\n- Combinado con early stopping"
    },
    {
      type: "code",
      value: `# Ejemplo en TensorFlow
from tensorflow.keras.callbacks import ReduceLROnPlateau

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.1,
    patience=5,
    min_lr=1e-6
)`
    }
  ],
  children: []
},
{
  id: "learning_rate_scheduling",
  title: "Programación del Learning Rate",
  subtitle: "Variar sistemáticamente la tasa de aprendizaje",
  content: [
    {
      type: "text",
      value: "Cambia el learning rate según una programación predefinida (decaimiento, ciclos, etc.) para mejorar la convergencia."
    },
    {
      type: "text",
      value: "Estrategias comunes:\n- Decaimiento exponencial\n- Escalonado (step decay)\n- Warmup\n- Cyclical Learning Rates\n\nBeneficios:\n- Mayor velocidad de convergencia\n- Puede escapar de mínimos locales\n- Mejor optimización final"
    },
    {
      type: "code",
      value: `# Learning rate scheduler en PyTorch
from torch.optim.lr_scheduler import ExponentialLR

optimizer = torch.optim.Adam(model.parameters(), lr=0.001)
scheduler = ExponentialLR(optimizer, gamma=0.9)

# En cada época:
scheduler.step()`
    }
  ],
  children: []
},
{
  id: "rnn",
  title: "Redes Neuronales Recurrentes (RNN)",
  subtitle: "Modelos secuenciales para datos dependientes del tiempo",
  content: [
    {
      type: "text",
      value: "Las Redes Neuronales Recurrentes (RNN) son una clase de redes neuronales diseñadas para trabajar con datos secuenciales donde el orden y el contexto temporal son importantes. A diferencia de las redes feed-forward tradicionales, las RNN mantienen un 'estado oculto' que actúa como memoria de lo que ha procesado hasta el momento."
    },
    {
      type: "img",
      value: "Diagrama comparativo entre red neuronal tradicional y RNN mostrando el flujo de información recurrente"
    },
    {
      type: "text",
      value: "Casos de uso típicos incluyen procesamiento de lenguaje natural (NLP), reconocimiento de voz, series temporales y cualquier dominio donde el contexto histórico sea relevante para la predicción actual."
    },
    {
      type: "code",
      value: `// Ejemplo básico de implementación RNN con TensorFlow.js
const model = tf.sequential();
model.add(tf.layers.simpleRNN({
  units: 64,
  returnSequences: true,
  inputShape: [10, 32] // [timesteps, features]
}));
model.add(tf.layers.dense({units: 1}));

model.compile({optimizer: 'adam', loss: 'meanSquaredError'});

// Datos de ejemplo: secuencia de 10 pasos con 32 características cada uno
const inputData = tf.randomNormal([1, 10, 32]);
const output = model.predict(inputData);`
    }
  ],
  children: [
    "rnn_arquitectura",
    "rnn_tipos",
    "rnn_componentes",
    "rnn_aplicaciones"
  ]
},
{
  id: "rnn_arquitectura",
  title: "Arquitecturas Fundamentales de RNN",
  subtitle: "Patrones de flujo de información en redes recurrentes",
  content: [
    {
      type: "text",
      value: "Las RNN pueden organizarse en diferentes arquitecturas según la relación entre entradas y salidas:"
    },
    {
      type: "text",
      value: "One-to-One: Similar a una red feed-forward tradicional. Una entrada produce una salida. No aprovecha la naturaleza secuencial de los datos."
    },
    {
      type: "img",
      value: "Diagrama one-to-one mostrando una única entrada que se transforma en una única salida sin conexiones recurrentes"
    },
    {
      type: "text",
      value: "One-to-Many: Una sola entrada genera una secuencia de salidas. Útil en generación de secuencias como generación de música a partir de un seed inicial."
    },
    {
      type: "code",
      value: `// Ejemplo one-to-many para generación de texto
const model = tf.sequential();
model.add(tf.layers.repeatVector({n: 10, inputShape: [32]}));
model.add(tf.layers.simpleRNN({units: 128, returnSequences: true}));
model.add(tf.layers.timeDistributed({layer: tf.layers.dense({units: vocabSize})}));`
    },
    {
      type: "text",
      value: "Many-to-One: Una secuencia de entradas produce una sola salida. Común en clasificación de sentimientos o análisis de series temporales."
    },
    {
      type: "text",
      value: "Many-to-Many (Seq2Seq): Secuencia a secuencia, donde ambas entradas y salidas son secuencias. Usado en traducción automática o chatbots. Requiere frecuentemente mecanismos de atención."
    },
    {
      type: "img",
      value: "Diagrama comparativo de las cuatro arquitecturas mostrando sus diferencias en el flujo de datos"
    }
  ],
  children: []
},
{
  id: "rnn_tipos",
  title: "Variantes de RNN",
  subtitle: "Evolución de las redes recurrentes para problemas específicos",
  content: [
    {
      type: "text",
      value: "Las RNN básicas sufren del problema de desvanecimiento/explosión del gradiente. Para abordar esto, se han desarrollado variantes más sofisticadas:"
    },
    {
      type: "img",
      value: "Linea de tiempo mostrando la evolución de SimpleRNN a LSTM y GRU"
    },
    {
      type: "text",
      value: "Cada tipo tiene sus fortalezas y se adapta mejor a ciertos problemas. La elección depende de la complejidad de las dependencias temporales y los recursos computacionales disponibles."
    }
  ],
  children: [
    "simple_rnn",
    "bidirectional_rnn",
    "ltsm",
    "gru"
  ]
},
{
  id: "simple_rnn",
  title: "Simple RNN (Vanilla RNN)",
  subtitle: "La forma más básica de red recurrente",
  content: [
    {
      type: "text",
      value: "Las Simple RNN son la implementación más directa de las redes recurrentes. Mantienen un estado oculto que se actualiza en cada paso de tiempo combinando la entrada actual con el estado anterior."
    },
    {
      type: "img",
      value: "Diagrama detallado de una celda SimpleRNN mostrando las operaciones matemáticas internas"
    },
    {
      type: "text",
      value: "Ecuación del estado oculto: hₜ = tanh(Wₕₕ·hₜ₋₁ + Wₓₕ·xₜ + bₕ)"
    },
    {
      type: "text",
      value: "Limitaciones principales:"
    },
    {
      type: "text",
      value: "Problema de desvanecimiento del gradiente en secuencias largas \n Dificultad para capturar dependencias a largo plazo \n Inestabilidad en el entrenamiento"
    },
    {
      type: "code",
      value: `// Implementación manual de una SimpleRNN
class SimpleRNNCell {
  constructor(inputSize, hiddenSize) {
    this.Wxh = math.random([inputSize, hiddenSize]);
    this.Whh = math.random([hiddenSize, hiddenSize]);
    this.bh = math.zeros([hiddenSize]);
    this.h = math.zeros([hiddenSize]);
  }

  forward(x) {
    this.h = math.tanh(
      math.add(
        math.add(
          math.multiply(x, this.Wxh),
          math.multiply(this.h, this.Whh)
        ),
        this.bh
      )
    );
    return this.h;
  }
}`
    },
    {
      type: "text",
      value: "Buenas prácticas:"
    },
    {
      type: "text",
      value: "Usar solo para secuencias cortas (<10 pasos) \n Inicializar pesos con glorot uniform \n Aplicar regularización L2 para evitar explosión del gradiente \n Considerar usar clip de gradiente"
    }
  ],
  children: []
},
{
  id: "bidirectional_rnn",
  title: "RNN Bidireccionales",
  subtitle: "Capturando contexto pasado y futuro simultáneamente",
  content: [
    {
      type: "text",
      value: "Las RNN bidireccionales procesan la secuencia en ambas direcciones (forward y backward) y combinan ambas representaciones. Esto permite que cada paso de tiempo tenga información de todo el contexto de la secuencia."
    },
    {
      type: "img",
      value: "Diagrama de arquitectura bidireccional mostrando los flujos forward y backward"
    },
    {
      type: "text",
      value: "Aplicaciones clave:"
    },
    {
      type: "text",
      value: 
        "Procesamiento de lenguaje natural (etiquetado POS, NER) \n Reconocimiento de voz \n Predicción de secuencias biológicas\n "
      
    },
    {
      type: "code",
      value: `// Implementación con Keras
from keras.layers import Bidirectional, LSTM

model = Sequential()
model.add(Bidirectional(
  LSTM(64, return_sequences=True),
  input_shape=(timesteps, features)
))
model.add(Bidirectional(LSTM(32)))
model.add(Dense(num_classes, activation='softmax'))`
    },
    {
      type: "text",
      value: "Las RNN bidireccionales no son adecuadas para aplicaciones en tiempo real donde solo se dispone del contexto pasado, ya que requieren toda la secuencia completa para procesar la dirección backward."
    }
  ],
  children: []
},
{
  id: "rnn_componentes",
  title: "Componentes Avanzados en RNN",
  subtitle: "Mecanismos para mejorar el rendimiento de redes recurrentes",
  content: [
    {
      type: "text",
      value: "Las RNN modernas incorporan varios componentes arquitectónicos para superar las limitaciones de las implementaciones básicas:"
    },
    {
      type: "img",
      value: "Diagrama de componentes avanzados en arquitecturas RNN modernas"
    }
  ],
  children: [
    "layer_norm",
    "attention"
  ]
},
{
  id: "layer_norm",
  title: "Normalización por Capa (Layer Normalization)",
  subtitle: "Estabilizando el entrenamiento de RNN",
  content: [
    {
      type: "text",
      value: "La normalización por capa es una técnica crucial para entrenar RNN profundas de manera estable. A diferencia de la normalización por lotes (batch norm), opera en las características individuales en lugar de través del batch."
    },
    {
      type: "text",
      value: "Fórmula: LN(x) = γ * (x - μ) / √(σ² + ε) + β"
    },
    {
      type: "img",
      value: "Comparación visual entre batch norm y layer norm mostrando sus diferentes ejes de operación"
    },
    {
      type: "text",
      value: "Ventajas en RNN:"
    },
    {
      type: "text",
      value: 
        "Funciona bien con batches pequeños \n Estable a lo largo de secuencias de diferente longitud \n No introduce dependencias entre elementos del batch \n"
    },
    {
      type: "code",
      value: `// Implementación manual de LayerNorm
function layerNorm(x, gamma, beta, epsilon=1e-5) {
  // x: input of shape [batch, timesteps, features]
  const mean = x.mean(axis=-1, keepdims=true);
  const variance = x.variance(axis=-1, keepdims=true);
  const normalized = (x - mean) / sqrt(variance + epsilon);
  return gamma * normalized + beta;
}`
    }
  ],
  children: []
},
{
  id: "attention",
  title: "Mecanismos de Atención",
  subtitle: "Permitiendo a las RNN enfocarse en partes relevantes de la entrada",
  content: [
    {
      type: "text",
      value: "Los mecanismos de atención revolucionaron las RNN permitiéndoles acceder directamente a cualquier parte de la secuencia de entrada, superando el cuello de botella del estado oculto."
    },
    {
      type: "img",
      value: "Diagrama de atención mostrando cómo diferentes partes de la entrada reciben distintos pesos"
    },
    {
      type: "text",
      value: "Componentes clave:"
    },
    {
      type: "text",
      value: 
        "Consulta (Query): Representación actual que necesita contexto \n Claves (Keys): Representaciones de los elementos de la secuencia \n Valores (Values): Información asociada a cada elemento \n "  },
    {
      type: "code",
      value: `// Implementación simplificada de atención
function attention(query, keys, values) {
  const scores = tf.matMul(query, tf.transpose(keys));
  const weights = tf.softmax(scores);
  return tf.matMul(weights, values);
}

// Uso en una RNN con atención
class AttentiveRNN {
  constructor(hiddenSize) {
    this.rnn = new SimpleRNNCell(hiddenSize);
    this.Wq = tf.variable(tf.randomNormal([hiddenSize, hiddenSize]));
    this.Wk = tf.variable(tf.randomNormal([hiddenSize, hiddenSize]));
    this.Wv = tf.variable(tf.randomNormal([hiddenSize, hiddenSize]));
  }

  forward(x, context) {
    const h = this.rnn.forward(x);
    const query = tf.matMul(h, this.Wq);
    const keys = tf.matMul(context, this.Wk);
    const values = tf.matMul(context, this.Wv);
    const attended = attention(query, keys, values);
    return tf.concat([h, attended], -1);
  }
}`
    }
  ],
  children: []
},
{
  id: "rnn_aplicaciones",
  title: "Aplicaciones Prácticas de RNN",
  subtitle: "Casos de uso reales en la industria e investigación",
  content: [
    {
      type: "text",
      value: "Texto: Las RNN han sido fundamentales en NLP para tareas como generación de texto, traducción automática y análisis de sentimientos. Aunque los transformers han ganado popularidad, las RNN siguen siendo relevantes en aplicaciones con restricciones computacionales."
    },
    {
      type: "code",
      value: `// Generación de texto con RNN
async function generateText(seed, length, model) {
  let output = seed;
  for (let i = 0; i < length; i++) {
    const input = tokenize(output).slice(-sequenceLength);
    const pred = model.predict(input);
    const nextChar = sampleFromDistribution(pred);
    output += nextChar;
  }
  return output;
}`
    },
    {
      type: "text",
      value: "Audio: En procesamiento de audio, las RNN se usan para reconocimiento de voz, síntesis de voz y separación de fuentes. Las RNN bidireccionales son especialmente efectivas para estas tareas."
    },
    {
      type: "img",
      value: "Aplicaciones de RNN en audio mostrando espectrogramas antes y después del procesamiento"
    },
    {
      type: "text",
      value: "Otras aplicaciones importantes:"
    },
    {
      type: "text",
      value: 
        "Predicción de series temporales (mercados financieros, IoT) \n Reconocimiento de actividad en sensores móviles \n Modelado de procesos químicos y biológicos \n Control de robots y sistemas dinámicos \n"
      
    }
  ],
  children: []
},
{
  id: "cnn",
  title: "Redes Neuronales Convolucionales (CNN)",
  subtitle: "Arquitectura fundamental para visión por computadora",
  content: [
    {
      type: "text",
      value: "Las Redes Neuronales Convolucionales (CNN) son un tipo de red neuronal especialmente efectiva para procesar datos con estructura grid-like, como imágenes. Su diseño está inspirado en la organización de la corteza visual de los animales."
    },
    {
      type: "img",
      value: "Diagrama comparativo entre una red neuronal tradicional y una CNN mostrando las capas convolucionales"
    },
    {
      type: "text",
      value: "Las CNN destacan por tres características principales: conexiones locales, compartimiento de pesos y pooling/submuestreo. Estas propiedades las hacen eficientes para reconocimiento de patrones en imágenes."
    }
  ],
  children: [
    "cnn_capas",
    "cnn_operaciones",
    "cnn_aplicaciones",
    "cnn_tecnicas"
  ]
},
{
  id: "cnn_capas",
  title: "Capas en una CNN",
  subtitle: "Componentes arquitectónicos fundamentales",
  content: [
    {
      type: "text",
      value: "Una CNN típica está compuesta por varios tipos de capas especializadas que transforman progresivamente la entrada (píxeles) en características abstractas (como bordes, texturas o objetos completos)."
    },
    {
      type: "img",
      value: "Flujo de datos a través de las diferentes capas de una CNN mostrando la transformación de la imagen"
    }
  ],
  children: [
    "batch_normalization",
    "pooling",
    "flatten",
    "conv2d"
  ]
},
{
  id: "cnn_operaciones",
  title: "Operaciones en CNN",
  subtitle: "Mecanismos matemáticos fundamentales",
  content: [
    {
      type: "text",
      value: "Las operaciones en CNN son las que permiten extraer características de manera eficiente y controlar la dimensionalidad de los datos a través de la red."
    }
  ],
  children: [
    "stride",
    "padding",
    "dilation",
    "weight_sharing",
    "subsampling"
  ]
},
{
  id: "stride",
  title: "Stride (Paso)",
  subtitle: "Control del movimiento del kernel",
  content: [
    {
      type: "text",
      value: "El stride determina cuántos píxeles se mueve el filtro convolucional sobre la imagen de entrada. Un stride mayor reduce la dimensionalidad más rápidamente."
    },
    {
      type: "img",
      value: "Comparación entre stride 1 y stride 2 mostrando cómo afecta al tamaño de salida"
    },
    {
      type: "code",
      value: `// Ejemplo de convolución con stride en TensorFlow
const model = tf.sequential();
model.add(tf.layers.conv2d({
  inputShape: [28, 28, 1],
  filters: 32,
  kernelSize: 3,
  strides: 2,  // Stride de 2
  activation: 'relu'
}));`
    },
    {
      type: "text",
      value: "Consideraciones:\n- Stride 1: Máxima preservación de información, más costoso computacionalmente\n- Stride > 1: Reduce dimensionalidad, puede perder información espacial fina\n- Buenas prácticas: Usar stride 1 en capas iniciales, stride 2 en capas posteriores"
    }
  ],
  children: []
},
{
  id: "padding",
  title: "Padding (Relleno)",
  subtitle: "Control del tamaño espacial de los feature maps",
  content: [
    {
      type: "text",
      value: "El padding consiste en añadir píxeles (generalmente de valor cero) alrededor de la imagen para controlar el tamaño de salida de la operación convolucional."
    },
    {
      type: "img",
      value: "Ejemplo visual de padding 'same' vs 'valid' mostrando el efecto en el tamaño de salida"
    },
    {
      type: "text",
      value: "Tipos principales:\n1. 'Valid': Sin padding (el kernel solo se aplica donde encaja completamente)\n2. 'Same': Padding para que el tamaño de salida sea igual al de entrada"
    },
    {
      type: "code",
      value: `// Configuración de padding en Keras
const convLayer = tf.layers.conv2d({
  filters: 64,
  kernelSize: 3,
  padding: 'same',  // Conserva dimensiones espaciales
  activation: 'relu'
});`
    }
  ],
  children: []
},
{
  id: "dilation",
  title: "Dilated Convolutions",
  subtitle: "Ampliación del campo receptivo sin perder resolución",
  content: [
    {
      type: "text",
      value: "Las convoluciones dilatadas introducen espacios (huecos) entre los elementos del kernel, permitiendo un mayor campo receptivo sin aumentar el número de parámetros."
    },
    {
      type: "img",
      value: "Comparación entre convolución normal y dilatada mostrando los huecos en el kernel"
    },
    {
      type: "text",
      value: "Aplicaciones clave:\n- Segmentación semántica\n- Procesamiento de imágenes de alta resolución\n- Cuando se necesita captar contexto global sin muchas capas"
    },
    {
      type: "code",
      value: `// Ejemplo de convolución dilatada
const dilatedConv = tf.layers.conv2d({
  filters: 128,
  kernelSize: 3,
  dilationRate: 2,  // Cada elemento del kernel está separado por 1 píxel
  activation: 'relu'
});`
    }
  ],
  children: []
},
{
  id: "weight_sharing",
  title: "Weight Sharing",
  subtitle: "Compartimiento de parámetros en convoluciones",
  content: [
    {
      type: "text",
      value: "En las CNN, el mismo conjunto de pesos (kernel) se aplica a todas las posiciones de la entrada. Esto reduce drásticamente el número de parámetros y permite la invariancia traslacional."
    },
    {
      type: "img",
      value: "Diagrama mostrando cómo el mismo kernel se desliza por toda la imagen"
    },
    {
      type: "text",
      value: "Ventajas:\n1. Eficiencia computacional\n2. Requiere menos datos de entrenamiento\n3. Captura patrones independientes de su posición\n\nLimitaciones:\n- No maneja bien variaciones rotacionales o de escala (se necesitan técnicas adicionales)"
    }
  ],
  children: []
},
{
  id: "subsampling",
  title: "Subsampling (Submuestreo)",
  subtitle: "Reducción de dimensionalidad espacial",
  content: [
    {
      type: "text",
      value: "El subsampling reduce progresivamente la resolución espacial de los feature maps, haciendo la representación más manejable y dando cierta invariancia a pequeñas traslaciones."
    },
    {
      type: "img",
      value: "Ejemplo de subsampling 2x2 mostrando cómo se reduce el tamaño de los feature maps"
    },
    {
      type: "text",
      value: "Técnicas comunes:\n1. Max Pooling: Toma el valor máximo en la región\n2. Average Pooling: Promedia los valores en la región\n3. Strided Convolutions: Alternativa moderna al pooling"
    },
    {
      type: "code",
      value: `// Ejemplo de MaxPooling en TensorFlow.js
const poolingLayer = tf.layers.maxPooling2d({
  poolSize: [2, 2],
  strides: [2, 2]
});`
    }
  ],
  children: []
},
{
  id: "cnn_aplicaciones",
  title: "Aplicaciones de las CNN",
  subtitle: "Casos de uso en visión por computadora",
  content: [
    {
      type: "text",
      value: "segmentacion: División de una imagen en regiones significativas (ej: segmentación semántica en vehículos autónomos para identificar carreteras, peatones, etc.)"
    },
    {
      type: "text",
      value: "deteccion_de_objetos: Localización y clasificación de múltiples objetos en una imagen (ej: YOLO, Faster R-CNN)"
    },
    {
      type: "text",
      value: "clasificacion: Asignación de una etiqueta categórica a una imagen completa (ej: identificar si una radiografía muestra neumonía)"
    },
    {
      type: "img",
      value: "Ejemplos visuales de diferentes aplicaciones de CNN: segmentación, detección y clasificación"
    }
  ],
  children: []
},
{
  id: "cnn_tecnicas",
  title: "Técnicas Avanzadas en CNN",
  subtitle: "Métodos para mejorar el rendimiento",
  content: [
    {
      type: "text",
      value: "Para maximizar el potencial de las CNN, especialmente con conjuntos de datos limitados, se emplean diversas técnicas avanzadas de regularización y optimización."
    }
  ],
  children: [
    "data_augmentation",
    "transfer_learning"
  ]
},
{
  id: "data_augmentation",
  title: "Data Augmentation",
  subtitle: "Aumento artificial del conjunto de entrenamiento",
  content: [
    {
      type: "text",
      value: "La aumentación de datos aplica transformaciones aleatorias pero realistas a las imágenes de entrenamiento para mejorar la generalización del modelo."
    },
    {
      type: "img",
      value: "Ejemplo de aumentación mostrando una imagen original y varias versiones aumentadas"
    },
    {
      type: "code",
      value: `// Ejemplo de data augmentation con TensorFlow
const dataAugmentation = tf.sequential();
dataAugmentation.add(tf.layers.randomRotation({factor: 0.2}));
dataAugmentation.add(tf.layers.randomFlip({mode: 'horizontal'}));
dataAugmentation.add(tf.layers.randomZoom({heightFactor: 0.1, widthFactor: 0.1}));`
    },
    {
      type: "text",
      value: "Transformaciones comunes:\n- Rotaciones (pequeños ángulos)\n- Volteos horizontales\n- Ajustes de brillo/contraste\n- Recortes aleatorios\n\nPrecauciones:\n- No aplicar transformaciones que cambien el significado de la imagen\n- Validar que las transformaciones son realistas para el dominio del problema"
    }
  ],
  children: []
},
{
  id: "transfer_learning",
  title: "Transfer Learning",
  subtitle: "Aprovechamiento de modelos pre-entrenados",
  content: [
    {
      type: "text",
      value: "El transfer learning consiste en tomar un modelo pre-entrenado en un gran dataset (como ImageNet) y adaptarlo a una nueva tarea con menos datos."
    },
    {
      type: "img",
      value: "Diagrama del proceso de transfer learning mostrando la reutilización de capas convolucionales"
    },
    {
      type: "code",
      value: `// Ejemplo de transfer learning con MobileNet
const baseModel = await tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json');

// Congelar las capas convolucionales
baseModel.layers.forEach(layer => layer.trainable = false);

// Añadir nuevas capas para la tarea específica
const newModel = tf.sequential();
newModel.add(baseModel);
newModel.add(tf.layers.dense({units: 256, activation: 'relu'}));
newModel.add(tf.layers.dense({units: 10, activation: 'softmax'}));`
    },
    {
      type: "text",
      value: "Estrategias comunes:\n1. Extracción de características: Usar el modelo pre-entrenado como extractor fijo\n2. Fine-tuning: Descongelar y ajustar algunas capas finales\n\nModelos populares:\n- ResNet, EfficientNet (para alta precisión)\n- MobileNet (para dispositivos móviles)\n- Vision Transformer (enfoque basado en atención)"
    }
  ],
  children: []
},
{
  id: "gan",
  title: "Redes Generativas Adversariales (GANs)",
  subtitle: "Arquitectura para generación de datos mediante competición",
  content: [
    {
      type: "text",
      value: "Las GANs son un marco de aprendizaje automático donde dos redes neuronales (generador y discriminador) compiten entre sí, llevando a la generación de datos sintéticos de alta calidad."
    },
    {
      type: "img",
      value: "Diagrama del flujo de entrenamiento GAN mostrando la interacción entre generador y discriminador"
    },
    {
      type: "text",
      value: "Concepto clave:\n'El generador crea muestras falsas, el discriminador intenta distinguirlas de las reales. Este proceso adversarial lleva a la mejora iterativa de ambos.'"
    },
    {
      type: "code",
      value: `// Esquema básico de una GAN en TensorFlow
const generator = buildGenerator();  // Crea datos falsos
const discriminator = buildDiscriminator();  // Distingue real/falso

// Función de pérdida combinada
function ganLoss(realOutput, fakeOutput) {
  const crossEntropy = tf.losses.binaryCrossentropy;
  const realLoss = crossEntropy(tf.onesLike(realOutput), realOutput);
  const fakeLoss = crossEntropy(tf.zerosLike(fakeOutput), fakeOutput);
  return realLoss + fakeLoss;
}`
    }
  ],
  children: [
    "gan_componentes",
    "gan_funciones_de_perdida",
    "gan_aplicaciones",
    "gan_extensiones"
  ]
},
{
  id: "gan_componentes",
  title: "Componentes de una GAN",
  subtitle: "Arquitectura básica de dos redes compitiendo",
  content: [
    {
      type: "text",
      value: "generador: Transforma ruido aleatorio (z) en datos sintéticos. Su objetivo es engañar al discriminador. Típicamente una red convolucional transpuesta (upsampling)."
    },
    {
      type: "text",
      value: "discriminador: Clasificador que distingue datos reales de los generados. Similar a una CNN tradicional pero con salida binaria (real/falso)."
    },
    {
      type: "img",
      value: "Estructura detallada del generador y discriminador mostrando capas y conexiones"
    },
    {
      type: "code",
      value: `// Implementación básica del generador
function buildGenerator(latentDim) {
  const model = tf.sequential();
  model.add(tf.layers.dense({units: 7*7*256, inputShape: [latentDim]}));
  model.add(tf.layers.reshape({targetShape: [7, 7, 256]}));
  model.add(tf.layers.conv2dTranspose({
    filters: 128, kernelSize: 5, strides: 2, padding: 'same', activation: 'relu'
  }));
  // Capas adicionales...
  return model;
}`
    }
  ],
  children: []
},
{
  id: "gan_funciones_de_perdida",
  title: "Funciones de Pérdida en GANs",
  subtitle: "Métricas para guiar el entrenamiento adversarial",
  content: [
    {
      type: "text",
      value: "El diseño de la función de pérdida es crucial en GANs, ya que determina la estabilidad del entrenamiento y la calidad de los resultados."
    },
    {
      type: "img",
      value: "Gráfico comparativo de diferentes funciones de pérdida y su efecto en la convergencia"
    }
  ],
  children: [
    "divergencias"
  ]
},
{
  id: "divergencias",
  title: "Divergencias en GANs",
  subtitle: "Medidas de diferencia entre distribuciones",
  content: [
    {
      type: "text",
      value: "Las divergencias cuantifican cómo difiere la distribución generada de la real. Elecciones comunes:\n1. JS-Divergencia (GAN original)\n2. Wasserstein (WGAN)\n3. KL-Divergencia"
    },
    {
      type: "img",
      value: "Visualización de cómo diferentes divergencias afectan la distribución generada"
    },
    {
      type: "code",
      value: `// Implementación de pérdida Wasserstein (WGAN)
function wassersteinLoss(realOutput, fakeOutput) {
  return tf.mean(fakeOutput).sub(tf.mean(realOutput));
}

// Requiere clip de pesos en el discriminador:
function clipDiscriminatorWeights(discriminator, clipValue) {
  discriminator.getWeights().forEach(weights => {
    weights.assign(tf.clipByValue(weights, -clipValue, clipValue));
  });
}`
    },
    {
      type: "text",
      value: "Problemas comunes:\n- Modo colapso (generador produce poca variedad)\n- Desvanecimiento del gradiente\n- Oscilaciones durante el entrenamiento\n\nSoluciones:\n- Uso de Wasserstein GAN con Gradient Penalty\n- Aplicar normalización en capas\n- Balancear los ratios de aprendizaje"
    }
  ],
  children: []
},
{
  id: "gan_aplicaciones",
  title: "Aplicaciones de GANs",
  subtitle: "Casos de uso en generación y transformación de datos",
  content: [
    {
      type: "text",
      value: "superresolucion: Aumento de resolución de imágenes (ej: SRGAN para mejorar calidad de fotos o videos)"
    },
    {
      type: "text",
      value: "estilo: Transferencia de estilo artístico entre imágenes (ej: convertir fotos a estilo pictórico)"
    },
    {
      type: "text",
      value: "restauracion: Reconstrucción de imágenes dañadas o incompletas (ej: fotoenvejecimiento, rellenado de regiones)"
    },
    {
      type: "text",
      value: "imagen_a_imagen: Traducción entre dominios visuales (ej: mapa↔foto satelital, día↔noche)"
    },
    {
      type: "img",
      value: "Ejemplos visuales de diferentes aplicaciones de GANs mostrando transformaciones"
    }
  ],
  children: []
},
{
  id: "gan_extensiones",
  title: "Extensiones Avanzadas de GANs",
  subtitle: "Variantes especializadas para tareas específicas",
  content: [
    {
      type: "text",
      value: "Las GANs han evolucionado en numerosas variantes que mejoran estabilidad, control o aplicabilidad a dominios específicos."
    }
  ],
  children: [
    "stylegan",
    "cyclegan"
  ]
},
{
  id: "stylegan",
  title: "StyleGAN",
  subtitle: "Control fino sobre atributos generados",
  content: [
    {
      type: "text",
      value: "StyleGAN introduce separación entre alto-nivel (estilo) y bajo-nivel (ruido) en la generación, permitiendo control detallado de atributos como edad, expresión facial o iluminación."
    },
    {
      type: "img",
      value: "Diagrama de la arquitectura StyleGAN mostrando el mapeo de estilos y generación progresiva"
    },
    {
      type: "text",
      value: "Características clave:\n- Mapeo de espacio latente a estilos intermedios\n- Normalización adaptativa de características (AdaIN)\n- Generación progresiva (de baja a alta resolución)\n- Ruido por píxel para detalles finos"
    },
    {
      type: "code",
      value: `// Pseudocódigo del bloque de estilo en StyleGAN
function styleBlock(x, w) {
  // Normalización adaptativa
  const normalized = adaIN(x, w);
  // Aplicar ruido
  const noise = tf.randomNormal(tf.shape(x));
  const noisy = normalized + noise * noiseStrength;
  return noisy;
}`
    }
  ],
  children: []
},
{
  id: "cyclegan",
  title: "CycleGAN",
  subtitle: "Traducción no pareada entre dominios",
  content: [
    {
      type: "text",
      value: "CycleGAN permite transformaciones entre dos dominios visuales sin necesidad de pares de entrenamiento alineados (ej: convertir fotos de caballos a cebras manteniendo la estructura)."
    },
    {
      type: "img",
      value: "Diagrama del ciclo consistente en CycleGAN mostrando ambas transformaciones (A→B→A' y B→A→B')"
    },
    {
      type: "text",
      value: "Mecanismos clave:\n- Pérdida de ciclo consistente (cycle-consistency loss)\n- Dos generadores (A→B y B→A) y dos discriminadores\n- No requiere datos pareados (solo conjuntos de cada dominio)"
    },
    {
      type: "code",
      value: `// Implementación de la pérdida de ciclo
function cycleConsistencyLoss(real, reconstructed) {
  return tf.losses.meanAbsoluteError(real, reconstructed);
}

// Entrenamiento combinado
function trainStep(realA, realB) {
  // Generar imágenes falsas
  const fakeB = generatorAB(realA);
  const fakeA = generatorBA(realB);
  
  // Reconstrucción ciclo
  const reconstructedA = generatorBA(fakeB);
  const reconstructedB = generatorAB(fakeA);
  
  // Calcular pérdidas
  const cycleLoss = cycleConsistencyLoss(realA, reconstructedA) 
                 + cycleConsistencyLoss(realB, reconstructedB);
  // ... otras pérdidas
}`
    }
  ],
  children: []
},
{
  id: "transformers",
  title: "Transformers",
  subtitle: "Arquitectura basada en mecanismos de atención",
  content: [
    {
      type: "text",
      value: "Los Transformers son una arquitectura de red neuronal que revolucionó el procesamiento de secuencias mediante el uso de mecanismos de auto-atención, eliminando la necesidad de recurrencia y permitiendo un procesamiento altamente paralelizable."
    },
    {
      type: "img",
      value: "Diagrama de la arquitectura Transformer mostrando los componentes principales"
    },
    {
      type: "text",
      value: "Principales ventajas:\n- Captura de dependencias de largo alcance\n- Procesamiento paralelo de secuencias completas\n- Flexibilidad para múltiples modalidades (texto, imágenes, series temporales)"
    },
    {
      type: "code",
      value: `// Esqueleto básico de un Transformer en PyTorch
import torch.nn as nn

class Transformer(nn.Module):
    def __init__(self, num_layers, d_model, num_heads):
        super().__init__()
        self.encoder = TransformerEncoder(num_layers, d_model, num_heads)
        self.decoder = TransformerDecoder(num_layers, d_model, num_heads)
        
    def forward(self, src, tgt):
        memory = self.encoder(src)
        output = self.decoder(tgt, memory)
        return output`
    }
  ],
  children: [
    "selfattention",
    "embeddings_posicionales",
    "encoderdecoder",
    "transformers_aplicaciones",
    "transformers_modelos"
  ]
},
{
  id: "selfattention",
  title: "Auto-Atención (Self-Attention)",
  subtitle: "Mecanismo para capturar relaciones contextuales",
  content: [
    {
      type: "text",
      value: "La auto-atención permite a cada posición en la secuencia interactuar con todas las demás posiciones, calculando una representación ponderada basada en la relevancia contextual."
    },
    {
      type: "img",
      value: "Diagrama del cálculo de atención mostrando Q, K, V y los pesos de atención"
    },
    {
      type: "text",
      value: "Fórmula clave:\nAttention(Q,K,V) = softmax(QKᵀ/√dₖ)V\nDonde:\n- Q: Consultas (Queries)\n- K: Claves (Keys)\n- V: Valores (Values)\n- dₖ: Dimensión de las claves"
    },
    {
      type: "code",
      value: `// Implementación de atención multi-head en TensorFlow
class MultiHeadAttention(tf.keras.layers.Layer):
    def __init__(self, d_model, num_heads):
        super().__init__()
        self.num_heads = num_heads
        self.d_model = d_model
        self.depth = d_model // num_heads
        
        self.wq = tf.keras.layers.Dense(d_model)
        self.wk = tf.keras.layers.Dense(d_model)
        self.wv = tf.keras.layers.Dense(d_model)
        self.dense = tf.keras.layers.Dense(d_model)
        
    def split_heads(self, x, batch_size):
        x = tf.reshape(x, (batch_size, -1, self.num_heads, self.depth))
        return tf.transpose(x, perm=[0, 2, 1, 3])
        
    def call(self, q, k, v):
        batch_size = tf.shape(q)[0]
        
        q = self.wq(q)  # (batch_size, seq_len, d_model)
        k = self.wk(k)
        v = self.wv(v)
        
        q = self.split_heads(q, batch_size)  # (batch_size, num_heads, seq_len_q, depth)
        k = self.split_heads(k, batch_size)
        v = self.split_heads(v, batch_size)
        
        # Cálculo de los scores de atención
        matmul_qk = tf.matmul(q, k, transpose_b=True)  # (..., seq_len_q, seq_len_k)
        scaled_attention_logits = matmul_qk / tf.math.sqrt(tf.cast(self.depth, tf.float32))
        attention_weights = tf.nn.softmax(scaled_attention_logits, axis=-1)
        output = tf.matmul(attention_weights, v)  # (..., seq_len_q, depth)
        
        output = tf.transpose(output, perm=[0, 2, 1, 3])  # (batch_size, seq_len_q, num_heads, depth)
        concat_attention = tf.reshape(output, (batch_size, -1, self.d_model))
        return self.dense(concat_attention)`
    },
    {
      type: "text",
      value: "Variantes importantes:\n1. Atención escalada (Scaled Dot-Product)\n2. Atención multi-head (vistas paralelas del espacio de atención)\n3. Atención enmascarada (para decodificación autoregresiva)"
    }
  ],
  children: []
},
{
  id: "embeddings_posicionales",
  title: "Embeddings Posicionales",
  subtitle: "Codificación de la posición en secuencias",
  content: [
    {
      type: "text",
      value: "Como los Transformers no usan recurrencia, necesitan embeddings posicionales para inyectar información sobre la posición relativa o absoluta de los tokens en la secuencia."
    },
    {
      type: "img",
      value: "Visualización de embeddings posicionales mostrando patrones sinusoidales"
    },
    {
      type: "text",
      value: "Enfoques comunes:\n1. Codificación posicional sinusoidal (original)\n2. Embeddings aprendidos (BERT, GPT)\n3. Codificaciones relativas (Transformer-XL)"
    },
    {
      type: "code",
      value: `// Implementación de codificación posicional sinusoidal
function getPositionalEncoding(maxLen, dModel) {
  const position = tf.range(0, maxLen).expandDims(1);
  const divTerm = tf.exp(tf.range(0, dModel, 2).mul(-Math.log(10000.0) / dModel));
  
  const pe = tf.zeros([maxLen, dModel]);
  const sinPart = tf.sin(position.mul(divTerm));
  const cosPart = tf.cos(position.mul(divTerm));
  
  pe.slice([0, 0], [-1, 1]).assign(sinPart);
  pe.slice([0, 1], [-1, 1]).assign(cosPart);
  
  return pe;
}`
    },
    {
      type: "text",
      value: "Consideraciones:\n- Longitud máxima fija vs. extrapolación\n- Interacción con embeddings de token\n- Efecto en transfer learning entre tareas con diferentes longitudes"
    }
  ],
  children: []
},
{
  id: "encoderdecoder",
  title: "Arquitectura Encoder-Decoder",
  subtitle: "Estructura estándar para tareas de secuencia a secuencia",
  content: [
    {
      type: "text",
      value: "La arquitectura encoder-decoder permite procesar una secuencia de entrada y generar una secuencia de salida, siendo la base para traducción automática, resumen de texto y otras tareas de transformación."
    },
    {
      type: "img",
      value: "Flujo de datos en encoder-decoder mostrando las conexiones de atención"
    },
    {
      type: "text",
      value: "Componentes clave:\n1. Encoder: Procesa la entrada en representaciones contextuales\n2. Decoder: Genera salida token por token usando atención al encoder\n3. Conexiones cruzadas (cross-attention)"
    },
    {
      type: "code",
      value: `// Pseudocódigo del proceso encoder-decoder
function transformerEncoderDecoder(input, output) {
  // Codificación
  const inputEmbeddings = embed(input) + positionalEncoding(input.length);
  const memory = encoder(inputEmbeddings);
  
  // Decodificación autoregresiva
  let decoderOutput = outputStartToken;
  for (let i = 0; i < maxLength; i++) {
    const decoderEmbeddings = embed(decoderOutput) + positionalEncoding(i+1);
    const nextToken = decoder(decoderEmbeddings, memory);
    decoderOutput = concat(decoderOutput, nextToken);
  }
  return decoderOutput;
}`
    }
  ],
  children: []
},
{
  id: "transformers_aplicaciones",
  title: "Aplicaciones de Transformers",
  subtitle: "Casos de uso en múltiples dominios",
  content: [
    {
      type: "text",
      value: "Los Transformers han demostrado ser versátiles más allá del NLP original, aplicándose exitosamente a diversas modalidades de datos."
    }
  ],
  children: [
    "nlp",
    "time_series",
    "vision"
  ]
},
{
  id: "nlp",
  title: "Procesamiento de Lenguaje Natural",
  subtitle: "Aplicaciones en texto y lenguaje",
  content: [
    {
      type: "text",
      value: "Los Transformers dominan el NLP moderno, superando a arquitecturas anteriores en prácticamente todas las tareas benchmark."
    },
    {
      type: "img",
      value: "Aplicaciones NLP: traducción, resumen, QA, generación de texto"
    },
    {
      type: "text",
      value: "Tareas principales:\n- Modelado de lenguaje (GPT)\n- Clasificación de texto\n- Traducción automática\n- Respuesta a preguntas\n- Análisis de sentimientos\n- Generación de texto creativo"
    },
    {
      type: "code",
      value: `// Ejemplo de uso de BERT para clasificación
from transformers import BertTokenizer, BertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertForSequenceClassification.from_pretrained('bert-base-uncased')

inputs = tokenizer("Hello, world!", return_tensors="pt")
outputs = model(**inputs)
logits = outputs.logits`
    }
  ],
  children: []
},
{
  id: "time_series",
  title: "Series Temporales",
  subtitle: "Aplicación a datos secuenciales numéricos",
  content: [
    {
      type: "text",
      value: "Los Transformers se aplican a forecasting, detección de anomalías y clasificación de series temporales, capturando dependencias de largo alcance mejor que RNNs tradicionales."
    },
    {
      type: "img",
      value: "Transformer para forecasting mostrando atención en puntos clave de la serie"
    },
    {
      type: "text",
      value: "Adaptaciones clave:\n- Embeddings para valores numéricos\n- Atención a patrones estacionales\n- Mecanismos para manejar frecuencias mixtas\n- Variantes como Informer para series muy largas"
    },
    {
      type: "code",
      value: `// Ejemplo de Transformer para forecasting
class TimeSeriesTransformer(nn.Module):
    def __init__(self, input_dim, output_dim, num_heads):
        super().__init__()
        self.value_embedding = nn.Linear(1, input_dim)
        self.positional_encoding = PositionalEncoding(input_dim)
        self.transformer = nn.Transformer(d_model=input_dim, nhead=num_heads)
        self.decoder = nn.Linear(input_dim, output_dim)
        
    def forward(self, x):
        # x: (seq_len, batch_size, 1)
        x = self.value_embedding(x)  # (seq_len, batch_size, input_dim)
        x = self.positional_encoding(x)
        x = self.transformer(x, x)  # Self-attention
        return self.decoder(x)`
    }
  ],
  children: []
},
{
  id: "vision",
  title: "Visión por Computadora",
  subtitle: "Transformers para procesamiento de imágenes",
  content: [
    {
      type: "text",
      value: "Los Vision Transformers (ViTs) dividen imágenes en parches que tratan como tokens, logrando rendimiento competitivo con CNNs en clasificación y detección de objetos."
    },
    {
      type: "img",
      value: "Procesamiento de imágenes en ViT mostrando división en parches y atención"
    },
    {
      type: "text",
      value: "Ventajas sobre CNNs:\n- Captura de dependencias globales\n- Menor inductive bias\n- Escalabilidad a datos masivos\n\nDesafíos:\n- Requiere más datos de entrenamiento\n- Costo computacional en alta resolución"
    },
    {
      type: "code",
      value: `// Pseudocódigo de Vision Transformer
class ViT(nn.Module):
    def __init__(self, image_size, patch_size, num_classes):
        super().__init__()
        num_patches = (image_size // patch_size) ** 2
        self.patch_embedding = nn.Linear(patch_size**2 * 3, hidden_dim)
        self.position_embedding = nn.Parameter(torch.randn(1, num_patches + 1, hidden_dim))
        self.cls_token = nn.Parameter(torch.randn(1, 1, hidden_dim))
        self.transformer = TransformerEncoder(num_layers, hidden_dim, num_heads)
        self.mlp_head = nn.Linear(hidden_dim, num_classes)
        
    def forward(self, x):
        # Dividir imagen en parches
        patches = split_into_patches(x, patch_size)
        embeddings = self.patch_embedding(patches)
        
        # Añadir token [CLS] y posición
        cls_tokens = self.cls_token.expand(x.shape[0], -1, -1)
        embeddings = torch.cat((cls_tokens, embeddings), dim=1)
        embeddings += self.position_embedding
        
        # Pasar por Transformer
        output = self.transformer(embeddings)
        
        # Clasificar usando el token [CLS]
        return self.mlp_head(output[:, 0])`
    }
  ],
  children: []
},
{
  id: "transformers_modelos",
  title: "Modelos Basados en Transformers",
  subtitle: "Arquitecturas pre-entrenadas populares",
  content: [
    {
      type: "text",
      value: "bert: Modelo bidireccional pre-entrenado con masked language modeling y next sentence prediction. Base para muchas aplicaciones de NLP."
    },
    {
      type: "text",
      value: "gpt: Modelo autoregresivo pre-entrenado con next token prediction. Excelente para generación de texto."
    },
    {
      type: "text",
      value: "t5: Modelo encoder-decoder que plantea todas las tareas NLP como text-to-text."
    },
    {
      type: "text",
      value: "vision_transformers_vit: Aplica Transformers directamente a imágenes divididas en parches, sin convoluciones."
    },
    {
      type: "text",
      value: "llama: Modelo de lenguaje de Meta optimizado para eficiencia, con variantes de 7B a 65B parámetros."
    },
    {
      type: "img",
      value: "Comparativa de modelos Transformers mostrando tamaño, arquitectura y aplicaciones"
    }
  ],
  children: []
},
{
  id: "estrategias_de_optimizacion_de_hiperparametros",
  title: "Estrategias de Optimización de Hiperparámetros",
  subtitle: "Técnicas para encontrar la mejor configuración de modelos",
  content: [
    {
      type: "text",
      value: "La optimización de hiperparámetros es crucial para maximizar el rendimiento de los modelos de machine learning. Existen diversas estrategias que equilibran eficiencia computacional y calidad de resultados."
    },
    {
      type: "list",
      value: [
        "Búsqueda exhaustiva (Grid Search)",
        "Muestreo aleatorio (Random Search)",
        "Optimización bayesiana (Optuna, HyperOpt)",
        "Herramientas especializadas (Keras Tuner)",
        "Programación dinámica de parámetros"
      ]
    },
    {
      type: "warning",
      value: "¡Precaución! La optimización de hiperparámetros puede ser computacionalmente costosa. Siempre comienza con un subconjunto de datos y parámetros para validar el enfoque."
    }
  ],
  children: [
    "gridsearchcv",
    "randomizedsearchcv",
    "keras_tuner",
    "optuna",
    "tecnicas_de_scheduling"
  ]
},
{
  id: "gridsearchcv",
  title: "GridSearchCV",
  subtitle: "Búsqueda exhaustiva en cuadrícula de parámetros",
  content: [
    {
      type: "text",
      value: "Explora todas las combinaciones posibles de hiperparámetros en una cuadrícula predefinida, usando validación cruzada para evaluar cada combinación."
    },
    {
      type: "list",
      value: [
        "Ventajas: Explora todo el espacio de búsqueda sistemáticamente",
        "Desventajas: Costo computacional alto con muchos parámetros",
        "Ideal para: Espacios pequeños de parámetros (<10 combinaciones)"
      ]
    },
    {
      type: "code",
      value: `from sklearn.model_selection import GridSearchCV

params = {
    'max_depth': [3, 5, 7],
    'min_samples_leaf': [1, 2, 3]
}

grid_search = GridSearchCV(estimator=model, param_grid=params, cv=5)
grid_search.fit(X_train, y_train)`
    }
  ],
  children: []
},
{
  id: "randomizedsearchcv",
  title: "RandomizedSearchCV",
  subtitle: "Muestreo aleatorio de combinaciones de parámetros",
  content: [
    {
      type: "text",
      value: "Evalúa combinaciones aleatorias de parámetros según distribuciones estadísticas, siendo más eficiente que GridSearch en espacios grandes."
    },
    {
      type: "list",
      value: [
        "Ventajas: Más eficiente en espacios grandes",
        "Desventajas: Puede perder combinaciones óptimas",
        "Ideal para: Espacios con >10 dimensiones"
      ]
    },
    {
      type: "code",
      value: `from sklearn.model_selection import RandomizedSearchCV
from scipy.stats import uniform, truncnorm

params = {
    'learning_rate': uniform(0.01, 0.3),
    'n_estimators': range(50, 200)
}

random_search = RandomizedSearchCV(model, params, n_iter=20, cv=3)
random_search.fit(X_train, y_train)`
    }
  ],
  children: []
},
{
  id: "optuna",
  title: "Optuna",
  subtitle: "Optimización bayesiana automática",
  content: [
    {
      type: "text",
      value: "Framework que utiliza optimización bayesiana para guiar la búsqueda de hiperparámetros, aprendiendo de evaluaciones previas."
    },
    {
      type: "list",
      value: [
        "Ventajas: Enfoque inteligente que aprende del historial",
        "Desventajas: Mayor complejidad de implementación",
        "Funcionalidades clave: Pruning, visualización, paralelización"
      ]
    },
    {
      type: "warning",
      value: "Optuna requiere definir cuidadosamente los rangos de parámetros. Rangos muy amplios pueden ralentizar la convergencia."
    }
  ],
  children: []
},
{
  id: "tecnicas_de_scheduling",
  title: "Técnicas de Programación de Hiperparámetros",
  subtitle: "Ajuste dinámico durante el entrenamiento",
  content: [
    {
      type: "text",
      value: "Estas técnicas modifican hiperparámetros como la tasa de aprendizaje durante el entrenamiento para mejorar convergencia y rendimiento."
    },
    {
      type: "list",
      value: [
        "Power Scheduling: Reducción gradual basada en potencias",
        "Exponential Decay: Decrecimiento exponencial agresivo",
        "Piecewise Constant: Cambios abruptos en momentos fijos",
        "Performance-based: Ajuste según métricas de validación",
        "One Cycle: Política agresiva con ciclo de calentamiento"
      ]
    }
  ],
  children: [
    "power_scheduling",
    "exponential_decay",
    "piecewise_constant",
    "performancebased",
    "one_cycle_scheduling"
  ]
},
{
  id: "power_scheduling",
  title: "Power Scheduling",
  subtitle: "Decaimiento polinómico de la tasa de aprendizaje",
  content: [
    {
      type: "text",
      value: "Reduce la tasa de aprendizaje inversamente proporcional al número de pasos de entrenamiento elevado a una potencia."
    },
    {
      type: "list",
      value: [
        "Fórmula: lr = initial_lr / (1 + step/step_size)^factor",
        "Ventaja: Reducción suave y controlable",
        "Uso típico: Redes profundas con entrenamiento prolongado"
      ]
    }
  ],
  children: []
},
{
  id: "exponential_decay",
  title: "Exponential Decay",
  subtitle: "Decrecimiento exponencial de parámetros",
  content: [
    {
      type: "text",
      value: "Reduce la tasa de aprendizaje multiplicando por un factor exponencial en intervalos regulares."
    },
    {
      type: "list",
      value: [
        "Fórmula: lr = initial_lr * decay_rate^(step/decay_steps)",
        "Ventaja: Convergencia rápida inicial",
        "Precaución: Puede reducir demasiado rápido el learning rate"
      ]
    }
  ],
  children: []
},
{
  id: "piecewise_constant",
  title: "Piecewise Constant",
  subtitle: "Cambios discretos en momentos fijos",
  content: [
    {
      type: "text",
      value: "Define intervalos fijos donde la tasa de aprendizaje permanece constante, reduciéndose abruptamente en puntos específicos."
    },
    {
      type: "list",
      value: [
        "Ventaja: Control preciso de reducciones",
        "Uso común: Cuando se conocen puntos clave de entrenamiento",
        "Ejemplo: Reducir lr a la mitad cada 10 épocas"
      ]
    }
  ],
  children: []
},
{
  id: "performancebased",
  title: "Performance-based Scheduling",
  subtitle: "Ajuste según métricas de validación",
  content: [
    {
      type: "text",
      value: "Modifica hiperparámetros basándose en el rendimiento en el conjunto de validación, como ReduceLROnPlateau de Keras."
    },
    {
      type: "list",
      value: [
        "Ventaja: Adaptabilidad al comportamiento real del modelo",
        "Métricas comunes: pérdida de validación, precisión",
        "Parámetros típicos: factor de reducción, paciencia"
      ]
    }
  ],
  children: []
},
{
  id: "one_cycle_scheduling",
  title: "One Cycle Scheduling",
  subtitle: "Política de ciclo único",
  content: [
    {
      type: "text",
      value: "Estrategia agresiva que aumenta y luego disminuye la tasa de aprendizaje en un solo ciclo, combinado con cambios en el momentum."
    },
    {
      type: "list",
      value: [
        "Beneficios: Entrenamiento más rápido y mejor generalización",
        "Fases: Fase de calentamiento, fase de enfriamiento",
        "Uso ideal: Cuando se necesita rápido prototipado"
      ]
    },
    {
      type: "warning",
      value: "One Cycle requiere monitoreo cuidadoso. Tasas demasiado altas pueden causar divergencia en el entrenamiento."
    }
  ],
  children: []
},
{
    id: "neuronas_artificiales_frameworks",
    title: "Placeholder Title",
    subtitle: "Placeholder Subtitle",
    content: [
      {
        type: "text",
        value: "Generic text content"
      }
    ],
    children: [
      "langchain",
      "langgraph",
      "dask"
    ]
  },


   {
    id: "dask",
    title: "Placeholder Title",
    subtitle: "Placeholder Subtitle",
    content: [
      {
        type: "text",
        value: "Generic text content"
      }
    ],
    children: [

    ]
  },

{
    id: "topicos_de_inteligencia_artificial",
    title: "Tópicos de Inteligencia Artificial",
    subtitle: "Panorama completo de las principales áreas de IA",
    content: [
      {
        type: "text",
        value: "La Inteligencia Artificial abarca diversas técnicas que permiten a las máquinas realizar tareas que normalmente requieren inteligencia humana. Este campo se divide en múltiples especialidades, cada una con sus propias metodologías y aplicaciones prácticas."
      },
      {
        type: "img",
        value: "Diagrama de las principales áreas de IA mostrando sus interrelaciones"
      },
      {
        type: "list",
        value: [
          "Procesamiento de Lenguaje Natural (NLP): Comprensión y generación de lenguaje humano",
          "Modelos de Lenguaje: Sistemas avanzados para manejar texto",
          "Sistemas de Recomendación: Personalización de contenido",
          "Aprendizaje por Refuerzo: Toma de decisiones secuenciales"
        ]
      }
    ],
    children: [
      "procesamiento_de_lenguaje_natural_2",
      "modelos_de_lenguaje_llms",
      "prompt_engineering",
      "multimodalidad_y_generacion",
      "sistemas_de_recomendacion",
      "aprendizaje_por_refuerzo",
      "explainable_ai",
      "fairness__bias_en_ia",
      "agentes_de_ia",
      "aplicaciones_extendidas",
      "interpretable_ai",
      "frameworks_y_librerias"
    ]
  },
  {
    id: "procesamiento_de_lenguaje_natural_2",
    title: "Procesamiento de Lenguaje Natural (NLP)",
    subtitle: "Técnicas para entender y generar lenguaje humano",
    content: [
      {
        type: "text",
        value: "El NLP combina lingüística, informática y machine learning para procesar y analizar grandes cantidades de datos de lenguaje natural. Es fundamental en aplicaciones como chatbots, traducción automática y análisis de sentimientos."
      },
      {
        type: "img",
        value: "Flujo de procesamiento de texto desde raw data hasta representación vectorial"
      },
      {
        type: "warning",
        value: "El preprocesamiento de texto es crucial en NLP. Errores comunes incluyen no normalizar el texto o eliminar palabras importantes durante el stopword removal."
      }
    ],
    children: [
      "tareas_clasicas",
      "representacion_de_texto"
    ]
  },
  {
    id: "tareas_clasicas",
    title: "Tareas Clásicas de NLP",
    subtitle: "Problemas fundamentales en procesamiento de lenguaje",
    content: [
      {
        type: "text",
        value: "Clasificación de texto: Asignar categorías o etiquetas a documentos completos. Ejemplo: Detección de spam, categorización de noticias."
      },
      {
        type: "code",
        value: `# Ejemplo básico de clasificación de texto con Scikit-learn
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB

# Datos de ejemplo
texts = ["oferta exclusiva", "reunión importante", "gana dinero rápido"]
labels = ["spam", "no spam", "spam"]

# Vectorización
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(texts)

# Entrenamiento
clf = MultinomialNB()
clf.fit(X, labels)`
      },
      {
        type: "text",
        value: "Reconocimiento de Entidades (NER): Identificar y clasificar entidades como nombres, organizaciones, ubicaciones en texto."
      },
      {
        type: "text",
        value: "Clustering de Documentos: Agrupar documentos similares sin etiquetas previas. Útil para organización de archivos o descubrimiento de temas."
      },
      {
        type: "text",
        value: "Análisis de Sentimiento: Determinar la polaridad emocional (positivo, negativo, neutro) en texto. Ampliamente usado en redes sociales y reseñas."
      },
      {
        type: "img",
        value: "Ejemplo visual de análisis de sentimiento mostrando scores en diferentes frases"
      }
    ],
    children: []
  },
  {
    id: "representacion_de_texto",
    title: "Representación de Texto",
    subtitle: "Técnicas para convertir texto en formatos que los modelos pueden procesar",
    content: [
      {
        type: "text",
        value: "Las computadoras no entienden texto directamente, por lo que necesitamos convertirlo a representaciones numéricas. Las técnicas varían en complejidad y capacidad de capturar significado."
      },
      {
        type: "text",
        value: "Bag of Words: Representación simple que cuenta la frecuencia de palabras en un documento, ignorando orden y contexto."
      },
      {
        type: "code",
        value: `# Ejemplo de Bag of Words
from sklearn.feature_extraction.text import CountVectorizer

corpus = ['El gato come pescado', 'El perro come carne']
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(corpus)
print(vectorizer.get_feature_names_out())
print(X.toarray())`
      },
      {
        type: "text",
        value: "TF-IDF: Mejora de Bag of Words que pondera términos por su frecuencia en el documento vs. en todo el corpus. Reduce importancia de palabras muy comunes."
      },
      {
        type: "warning",
        value: "TF-IDF no captura relaciones semánticas entre palabras. Para tareas que requieren comprensión del significado, se necesitan embeddings."
      }
    ],
    children: [
      "word_embeddings",
      "embeddings_contextuales"
    ]
  },
  {
    id: "word_embeddings",
    title: "Word Embeddings",
    subtitle: "Representaciones vectoriales densas que capturan significado semántico",
    content: [
      {
        type: "text",
        value: "Los word embeddings representan palabras como vectores en un espacio dimensional donde palabras similares están cercanas. Capturan relaciones semánticas (rey - hombre + mujer ≈ reina) y sintácticas."
      },
      {
        type: "img",
        value: "Visualización 2D de embeddings mostrando clusters semánticos (animales, deportes, etc.)"
      },
      {
        type: "text",
        value: "Word2Vec: Modelo predictivo que aprende embeddings prediciendo palabras en contexto (arquitecturas Skip-gram y CBOW). Eficiente para grandes corpus."
      },
      {
        type: "code",
        value: `# Ejemplo de uso de Word2Vec con Gensim
from gensim.models import Word2Vec

sentences = [["data", "science", "is", "awesome"], 
             ["machine", "learning", "is", "fun"]]

model = Word2Vec(sentences, vector_size=100, window=5, min_count=1)
print(model.wv["science"])  # Vector de 100 dimensiones`
      },
      {
        type: "text",
        value: "GloVe: Modelo basado en conteo que factoriza matrices de co-ocurrencia de palabras. Combina aspectos de métodos globales y locales."
      },
      {
        type: "text",
        value: "FastText: Extensión de Word2Vec que considera subpalabras (n-gramas de caracteres). Útil para idiomas con morfología compleja o palabras raras."
      },
      {
        type: "warning",
        value: "Los embeddings estáticos (Word2Vec, GloVe) asignan el mismo vector a una palabra en todos los contextos. Para significados múltiples, se necesitan embeddings contextuales."
      }
    ],
    children: []
  },
  {
    id: "embeddings_contextuales",
    title: "Embeddings Contextuales",
    subtitle: "Representaciones que varían según el contexto de la palabra",
    content: [
      {
        type: "text",
        value: "Los modelos modernos generan representaciones diferentes para la misma palabra según su contexto en la oración, capturando polisemia y dependencias sintácticas complejas."
      },
      {
        type: "text",
        value: "BERT (Bidirectional Encoder Representations from Transformers): Modelo basado en transformers que procesa texto en ambas direcciones simultáneamente. Pre-entrenado con tareas de lenguaje enmascarado y predicción de siguiente oración."
      },
      {
        type: "code",
        value: `# Ejemplo de uso de BERT con Hugging Face
from transformers import BertTokenizer, BertModel
import torch

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertModel.from_pretrained('bert-base-uncased')

inputs = tokenizer("Hello world!", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state  # Embeddings contextuales`
      },
      {
        type: "img",
        value: "Arquitectura de BERT mostrando las capas de transformers y atención multi-head"
      },
      {
        type: "text",
        value: "Los embeddings contextuales han revolucionado el NLP, permitiendo state-of-the-art en prácticamente todas las tareas benchmark. Sin embargo, requieren significativamente más recursos computacionales que embeddings estáticos."
      }
    ],
    children: []
  },
  {
  id: "modelos_de_lenguaje_llms",
  title: "Modelos de Lenguaje a Gran Escala (LLMs)",
  subtitle: "Arquitecturas y aplicaciones de modelos de lenguaje modernos",
  content: [
    {
      type: "text",
      value: "Los Large Language Models (LLMs) son sistemas de inteligencia artificial entrenados en vastas cantidades de datos de texto que pueden entender, generar y manipular lenguaje humano con notable fluidez. Estos modelos han revolucionado el campo del procesamiento de lenguaje natural."
    },
    {
      type: "img",
      value: "Evolución cronológica de los modelos de lenguaje desde RNNs hasta transformers modernos"
    },
    {
      type: "list",
      value: [
        "Basados en arquitecturas Transformer con mecanismos de atención",
        "Entrenados con cientos de GB o incluso TB de datos textuales",
        "Contienen desde millones hasta billones de parámetros",
        "Capacidad de few-shot y zero-shot learning"
      ]
    },
    {
      type: "warning",
      value: "Los LLMs pueden generar contenido sesgado o inexacto. Siempre se debe verificar la información crítica y usar técnicas de mitigación de sesgos."
    }
  ],
  children: [
    "modelos_de_lenguaje_llms_modelos",
    "modelos_de_lenguaje_llms_tareas",
    "modelos_de_lenguaje_llms_parametros"
  ]
},
{
  id: "modelos_de_lenguaje_llms_modelos",
  title: "Arquitecturas Principales de LLMs",
  subtitle: "Modelos fundamentales en el ecosistema actual",
  content: [
    {
      type: "text",
      value: "T5 (Text-to-Text Transfer Transformer): Modelo unificado que convierte todas las tareas a formato texto-a-texto. Ejemplo: 'traducir inglés a francés: Hello → Bonjour'"
    },
    {
      type: "code",
      value: `# Ejemplo de uso de T5 con Hugging Face
from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_text = "translate English to French: Hello, how are you?"
input_ids = tokenizer(input_text, return_tensors="pt").input_ids

outputs = model.generate(input_ids)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))`
    },
    {
      type: "text",
      value: "BART: Modelo de secuencia a secuencia que combina un codificador bidireccional (como BERT) con un decodificador autoregresivo (como GPT). Excelente para tareas de generación y reconstrucción de texto."
    },
    {
      type: "text",
      value: "LLaMA: Familia de modelos eficientes de Meta, diseñados para alto rendimiento con menos parámetros. Versiones desde 7B hasta 65B parámetros."
    },
    {
      type: "text",
      value: "Falcon: Modelos de última generación desarrollados por el Technology Innovation Institute, destacando por su eficiencia computacional y rendimiento en benchmarks."
    },
    {
      type: "text",
      value: "Mistral: Modelos optimizados para inferencia rápida y eficiencia en hardware limitado, manteniendo altos niveles de rendimiento."
    },
    {
      type: "text",
      value: "GPT (Generative Pre-trained Transformer): Serie de modelos de OpenAI que popularizaron los transformers escalados. GPT-3 y GPT-4 son modelos autoregresivos puros con capacidades emergentes a gran escala."
    },
    {
      type: "img",
      value: "Comparativa de tamaños de modelos (parámetros) y rendimiento en benchmarks comunes"
    },
    {
      type: "warning",
      value: "La elección del modelo depende del uso caso: modelos más grandes no siempre son mejores para tareas específicas. Considerar latencia, coste y requisitos de hardware."
    }
  ],
  children: []
},
{
  id: "modelos_de_lenguaje_llms_tareas",
  title: "Tareas Principales con LLMs",
  subtitle: "Aplicaciones prácticas de modelos de lenguaje",
  content: [
    {
      type: "text",
      value: "Traducción: Conversión automática entre idiomas. Los LLMs modernos superan enfoques tradicionales en lenguajes con datos limitados."
    },
    {
      type: "text",
      value: "Resumen: Generación de versiones condensadas que capturan la esencia de textos largos. Dos enfoques principales:"
    },
    {
      type: "list",
      value: [
        "Resumen extractivo: Selección de frases clave del texto original",
        "Resumen abstractivo: Generación de nuevo texto que captura el significado"
      ]
    },
    {
      type: "code",
      value: `# Ejemplo de resumen con BART
from transformers import pipeline

summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
article = "Los modelos de lenguaje están revolucionando... [texto largo]..."
summary = summarizer(article, max_length=130, min_length=30)
print(summary[0]['summary_text'])`
    },
    {
      type: "text",
      value: "QA (Question Answering): Extracción o generación de respuestas a preguntas basadas en contexto. Puede ser:"
    },
    {
      type: "list",
      value: [
        "Closed-book: El modelo responde usando su conocimiento interno",
        "Open-book: El modelo usa un contexto proporcionado"
      ]
    },
    {
      type: "text",
      value: "Generación de Texto: Creación de contenido original, desde prosa hasta código. Requiere cuidadoso ajuste de parámetros para balancear creatividad y coherencia."
    },
    {
      type: "text",
      value: "Captioning: Generación de descripciones textuales para imágenes (en modelos multimodales) o secuencias de datos."
    },
    {
      type: "text",
      value: "Clasificación por Prompt: Técnica donde se formula la clasificación como generación de texto mediante prompts ingeniosos, evitando fine-tuning."
    },
    {
      type: "img",
      value: "Ejemplo visual de zero-shot classification usando prompts con un LLM"
    }
  ],
  children: []
},
{
  id: "modelos_de_lenguaje_llms_parametros",
  title: "Hiperparámetros de Generación",
  subtitle: "Controlando el comportamiento de los LLMs",
  content: [
    {
      type: "text",
      value: "Temperatura: Controla la aleatoriedad de las predicciones. Valores más bajos (0.1-0.5) hacen el texto más determinista, valores altos (0.7-1.0) aumentan creatividad."
    },
    {
      type: "text",
      value: "Top-k: Limita la selección a las k palabras más probables en cada paso. Valores pequeños restringen el vocabulario, valores grandes permiten más diversidad."
    },
    {
      type: "text",
      value: "Top-p (Nucleus Sampling): Selecciona del conjunto más pequeño de palabras cuya probabilidad acumulada excede p. Más dinámico que top-k."
    },
    {
      type: "code",
      value: `# Configuración de parámetros de generación
generation_config = {
    "temperature": 0.7,
    "top_p": 0.9,
    "top_k": 50,
    "max_new_tokens": 100,
    "repetition_penalty": 1.2
}`,
    },
    {
      type: "text",
      value: "Beam Search: Algoritmo de búsqueda que mantiene múltiples secuencias hipotéticas en cada paso, eligiendo las más probables globalmente. Útil para tareas con una respuesta óptima clara."
    },
    {
      type: "text",
      value: "Max Tokens: Límite de longitud de la salida generada. Esencial para controlar costes y evitar respuestas excesivamente largas."
    },
    {
      type: "text",
      value: "Penalización por Repetición: Desalienta la repetición de n-gramas en el texto generado. Valores típicos entre 1.0 (ninguna penalización) y 2.0 (fuerte penalización)."
    },
    {
      type: "img",
      value: "Diagrama comparando muestreo greedy, beam search y muestreo con temperatura"
    },
    {
      type: "warning",
      value: "La configuración óptima varía por tarea. Experimentar con diferentes combinaciones es clave para obtener los mejores resultados."
    }
  ],
  children: []
},
{
  id: "prompt_engineering",
  title: "Ingeniería de Prompts",
  subtitle: "Técnicas para comunicarse efectivamente con modelos de lenguaje",
  content: [
    {
      type: "text",
      value: "La ingeniería de prompts es el arte y ciencia de diseñar entradas (prompts) que guían a los modelos de lenguaje para producir resultados óptimos. Combina comprensión técnica del modelo con principios de comunicación efectiva."
    },
    {
      type: "img",
      value: "Diagrama mostrando cómo diferentes prompts producen variaciones en la salida del modelo"
    },
    {
      type: "list",
      value: [
        "Aumenta la precisión y relevancia de las respuestas",
        "Reduce sesgos y contenido no deseado",
        "Permite controlar formato y estilo de salida",
        "Facilita tareas complejas mediante descomposición"
      ]
    },
    {
      type: "warning",
      value: "Los prompts efectivos varían entre modelos. Lo que funciona en GPT-4 puede no ser óptimo para LLaMA o Claude. Siempre probar con el modelo específico."
    }
  ],
  children: [
    "prompt_componentes",
    "prompt_estrategias",
    "prompt_memoria_de_conversacion"
  ]
},
{
  id: "prompt_componentes",
  title: "Componentes de un Prompt Efectivo",
  subtitle: "Elementos clave para estructurar instrucciones",
  content: [
    {
      type: "text",
      value: "Persona: Asignar una identidad o expertise al modelo mejora resultados. Ejemplo: 'Eres un historiador especializado en la Edad Media...'"
    },
    {
      type: "text",
      value: "Rol: Similar a persona pero más funcional. Ejemplo: 'Actúa como un tutor de Python para principiantes...'"
    },
    {
      type: "code",
      value: `# Ejemplo de prompt con rol específico
prompt = """
Eres un asistente médico AI especializado en cardiología. 
Responde a preguntas de pacientes usando lenguaje claro 
y sin jerga médica excesiva. Si la pregunta requiere 
atención médica real, recomienda consultar a un profesional.

Pregunta: ¿Qué puedo hacer para bajar mi presión arterial?
"""`
    },
    {
      type: "text",
      value: "Contexto: Información de fondo que delimita el ámbito de respuesta. Ejemplo: 'En el contexto de desarrollo web moderno usando React 18...'"
    },
    {
      type: "text",
      value: "Audiencia: Especificar para quién es la respuesta ajusta el nivel técnico. Ejemplo: 'Explica como si tuviera 10 años...'"
    },
    {
      type: "text",
      value: "Formato: Indica cómo estructurar la salida. Ejemplo: 'Proporciona la respuesta en formato JSON con campos: resumen, pasos, advertencias'"
    },
    {
      type: "text",
      value: "Tono: Controla el estilo de comunicación. Ejemplo: 'Responde de forma profesional pero accesible...'"
    },
    {
      type: "text",
      value: "Ejemplos: Proporcionar ejemplos de entrada-salida (few-shot learning) mejora el rendimiento. Especialmente útil para tareas complejas o específicas."
    },
    {
      type: "img",
      value: "Comparación side-by-side de prompts con y sin componentes clave"
    }
  ],
  children: []
},
{
  id: "prompt_estrategias",
  title: "Estrategias Avanzadas de Prompting",
  subtitle: "Técnicas para tareas complejas",
  content: [
    {
      type: "text",
      value: "Más allá de los componentes básicos, existen estrategias sofisticadas que permiten resolver problemas complejos mediante ingeniería cuidadosa de prompts."
    },
    {
      type: "img",
      value: "Flujograma de selección de estrategias según tipo de tarea"
    }
  ],
  children: [
    "prompt_por_pasos_chaining",
    "chainofthought",
    "salida_estructurada",
    "validacion_etica",
    "evaluacion"
  ]
},
{
  id: "prompt_por_pasos_chaining",
  title: "Prompt Chaining",
  subtitle: "Descomposición de tareas complejas en pasos",
  content: [
    {
      type: "text",
      value: "Técnica que divide una consulta compleja en una secuencia de prompts más simples, donde la salida de uno se convierte en la entrada del siguiente."
    },
    {
      type: "code",
      value: `# Ejemplo de chaining para análisis de datos
prompt1 = """
Extrae las siguientes entidades del texto:
- Nombres de empresas
- Montos financieros
- Fechas

Texto: {texto_input}
"""

prompt2 = """
Analiza las relaciones entre las entidades extraídas:
{output_prompt1}

Identifica posibles transacciones comerciales y genera
un resumen en formato tabla.
"""`,
    },
    {
      type: "text",
      value: "Ventajas:",
    },
    {
      type: "list",
      value: [
        "Mayor precisión en cada etapa",
        "Más fácil depuración",
        "Permite intervención humana entre pasos",
        "Reduce carga cognitiva del modelo"
      ]
    },
    {
      type: "warning",
      value: "El chaining aumenta la latencia total y el costo (en APIs comerciales). Usar solo cuando la ganancia en calidad justifica el overhead."
    }
  ],
  children: []
},
{
  id: "chainofthought",
  title: "Chain-of-Thought Prompting",
  subtitle: "Inducir razonamiento paso a paso",
  content: [
    {
      type: "text",
      value: "Técnica que pide al modelo mostrar su proceso de razonamiento antes de dar la respuesta final, mejorando significativamente el rendimiento en tareas que requieren lógica o cálculo."
    },
    {
      type: "code",
      value: `# Ejemplo estándar vs Chain-of-Thought
# Prompt básico:
"Si un libro cuesta $20 más que una revista y el combo cuesta $30, ¿cuánto cuesta la revista?"

# Prompt con CoT:
"Un libro cuesta $20 más que una revista. El combo de ambos cuesta $30. 
Paso a paso, determina el precio de la revista mostrando tu razonamiento:"`,
    },
    {
      type: "text",
      value: "Variaciones avanzadas:",
    },
    {
      type: "list",
      value: [
        "Self-Consistency: Ejecutar múltiples cadenas de pensamiento y tomar la respuesta más consistente",
        "Least-to-Most: Guiar al modelo desde subproblemas simples hasta el complejo"
      ]
    },
    {
      type: "img",
      value: "Ejemplo visual de accuracy mejorado con CoT en tareas matemáticas"
    }
  ],
  children: []
},
{
  id: "salida_estructurada",
  title: "Generación de Salida Estructurada",
  subtitle: "Controlar el formato de respuesta",
  content: [
    {
      type: "text",
      value: "Técnica para obtener respuestas en formatos específicos como JSON, XML, tablas o plantillas predefinidas, facilitando integración con sistemas automatizados."
    },
    {
      type: "code",
      value: `# Ejemplo de prompt para salida estructurada
prompt = """
Analiza el siguiente artículo y extrae:
1. Entidades principales (personas, organizaciones)
2. Sentimiento general (positivo/neutral/negativo)
3. Temas clave

Devuelve la respuesta en formato JSON con esta estructura:
{
  "entidades": [],
  "sentimiento": "",
  "temas": [],
  "resumen": ""
}

Artículo: {texto_articulo}
"""`,
    },
    {
      type: "text",
      value: "Técnicas complementarias:",
    },
    {
      type: "list",
      value: [
        "Especificar delimitadores claros (```json, ---, etc.)",
        "Proporcionar esquemas o ejemplos de formato",
        "Usar herramientas como OpenAI Function Calling para JSON estructurado"
      ]
    },
    {
      type: "warning",
      value: "Siempre validar y sanitizar la salida estructurada. Los modelos pueden generar JSON malformado ocasionalmente."
    }
  ],
  children: []
},
{
  id: "validacion_etica",
  title: "Validación Ética en Prompts",
  subtitle: "Mitigación de riesgos y sesgos",
  content: [
    {
      type: "text",
      value: "Técnicas para incorporar consideraciones éticas directamente en los prompts, reduciendo probabilidad de contenido dañino, sesgado o incorrecto."
    },
    {
      type: "code",
      value: `# Ejemplo de prompt con salvaguardas éticas
prompt = """
Eres un asistente útil que sigue estos principios:
1. No generar contenido violento o discriminatorio
2. Verificar hechos cuando sea posible
3. Admitir cuando no sabes algo
4. Evitar dar consejos médicos/legales no calificados

Pregunta: {user_input}
"""`,
    },
    {
      type: "text",
      value: "Estrategias clave:",
    },
    {
      type: "list",
      value: [
        "Lista explícita de restricciones",
        "Sistemas de verificación en múltiples pasos",
        "Prompting para auto-evaluación del modelo antes de responder",
        "Templates para respuestas sensibles"
      ]
    },
    {
      type: "img",
      value: "Flujo de validación ética en pipeline de generación"
    }
  ],
  children: []
},
{
  id: "evaluacion",
  title: "Evaluación de Prompts",
  subtitle: "Métricas y metodologías de evaluación",
  content: [
    {
      type: "text",
      value: "Proceso sistemático para medir la efectividad de diferentes estrategias de prompting, crucial para aplicaciones en producción."
    },
    {
      type: "text",
      value: "Enfoques principales:",
    },
    {
      type: "list",
      value: [
        "Evaluación humana: Gold standard pero costosa",
        "Evaluación automática: Métricas como BLEU, ROUGE para tareas específicas",
        "Evaluación basada en modelos: Usar otro LLM para calificar respuestas"
      ]
    }
  ],
  children: [
    "policy_evaluation",
    "onoff_policy",
    "reward_shaping"
  ]
},
{
  id: "prompt_memoria_de_conversacion",
  title: "Gestión de Memoria en Conversaciones",
  subtitle: "Mantener contexto en diálogos prolongados",
  content: [
    {
      type: "text",
      value: "Técnicas para manejar el estado de conversaciones extendidas, crucial para chatbots y asistentes interactivos donde el contexto histórico es esencial."
    },
    {
      type: "img",
      value: "Diagrama de arquitectura de sistema conversacional con gestión de memoria"
    }
  ],
  children: [
    "conversation_buffer",
    "memory_window"
  ]
},
{
  id: "conversation_buffer",
  title: "Conversation Buffer",
  subtitle: "Almacenamiento completo del historial",
  content: [
    {
      type: "text",
      value: "Estrategia que mantiene todo el historial de conversación como contexto para cada nuevo turno. Simple pero costoso en tokens para diálogos largos."
    },
    {
      type: "code",
      value: `# Ejemplo de estructura de buffer
conversation_history = [
    {"role": "user", "content": "Hola, recomiéndame un libro de ciencia ficción"},
    {"role": "assistant", "content": "¿Te interesa clásicos o contemporáneos?"},
    {"role": "user", "content": "Prefiero autores actuales"}
]

# Para el próximo prompt, se incluye todo el historial
prompt = f"""
Historial de conversación:
{format_history(conversation_history)}

Nueva entrada del usuario: {nuevo_input}
"""`,
    },
    {
      type: "warning",
      value: "Los modelos tienen límites de contexto (ej: 8K-128K tokens). Buffers completos pueden exceder este límite en conversaciones largas."
    }
  ],
  children: []
},
{
  id: "memory_window",
  title: "Memory Window",
  subtitle: "Ventana deslizante de contexto",
  content: [
    {
      type: "text",
      value: "Estrategia que mantiene solo los últimos N intercambios o tokens, balanceando retención de contexto con eficiencia computacional."
    },
    {
      type: "code",
      value: `# Implementación básica de ventana deslizante
def get_recent_conversation(history, window_size=5):
    return history[-window_size:] if len(history) > window_size else history`,
    },
    {
      type: "text",
      value: "Variaciones avanzadas:",
    },
    {
      type: "list",
      value: [
        "Ventana dinámica que ajusta tamaño basado en importancia de turnos",
        "Hybrid approaches: Ventana reciente + resumen de conversación anterior",
        "Retención selectiva de mensajes clave marcados por el sistema"
      ]
    },
    {
      type: "img",
      value: "Comparación visual buffer completo vs ventana deslizante"
    }
  ],
  children: []
},
{
  id: "multimodalidad_y_generacion",
  title: "Multimodalidad y Generación",
  subtitle: "Modelos que procesan y generan múltiples tipos de datos",
  content: [
    {
      type: "text",
      value: "Los sistemas multimodales combinan y comprenden diferentes tipos de datos (texto, imágenes, audio) permitiendo aplicaciones más ricas y human-like. Esta capacidad es fundamental para crear IA que interactúe con el mundo de manera similar a los humanos."
    },
    {
      type: "img",
      value: "Diagrama mostrando arquitectura multimodal con encoders para diferentes tipos de datos"
    },
    {
      type: "list",
      value: [
        "Texto-Imagen: Generación y comprensión de imágenes a partir de texto",
        "Texto-Audio: Sistemas de voz a texto y texto a voz",
        "Modelos de Difusión: Generación de contenido de alta calidad mediante procesos iterativos"
      ]
    },
    {
      type: "warning",
      value: "Los modelos multimodales requieren cantidades masivas de datos de entrenamiento y potencia computacional. Implementarlos desde cero es costoso."
    }
  ],
  children: [
    "texto__imagen",
   "texto__audio",
    "modelos_de_difusion"
  ]
},
{
  id: "texto__imagen",
  title: "Modelos Texto-Imagen",
  subtitle: "Sistemas que puentean lenguaje y visión",
  content: [
    {
      type: "text",
      value: "CLIP (Contrastive Language-Image Pretraining): Modelo de OpenAI que aprende asociaciones entre texto e imágenes mediante aprendizaje contrastivo. Permite búsqueda semántica de imágenes y clasificación zero-shot."
    },
    {
      type: "code",
      value: `# Ejemplo usando CLIP para clasificación de imágenes
import clip
import torch
from PIL import Image

device = "cuda" if torch.cuda.is_available() else "cpu"
model, preprocess = clip.load("ViT-B/32", device=device)

image = preprocess(Image.open("perro.jpg")).unsqueeze(0).to(device)
text_inputs = torch.cat([clip.tokenize(f"a photo of a {c}") for c in ["dog", "cat", "bird"]]).to(device)

with torch.no_grad():
    image_features = model.encode_image(image)
    text_features = model.encode_text(text_inputs)
    
# Calcula similitudes
logits_per_image = (image_features @ text_features.T).softmax(dim=1)
print("Probabilidades:", logits_per_image.cpu().numpy())`
    },
    {
      type: "text",
      value: "DALL-E 2: Sistema generativo que crea imágenes realistas y arte a partir de descripciones textuales. Usa un proceso de difusión para generar imágenes de alta resolución con composición semántica avanzada."
    },
    {
      type: "img",
      value: "Ejemplo de progresión de imagen en DALL-E 2 desde ruido hasta imagen final"
    },
    {
      type: "text",
      value: "Diffusion Models: Clase de modelos generativos que crean imágenes mediante un proceso iterativo de refinamiento, partiendo de ruido aleatorio. Incluyen Stable Diffusion, Imagen, y otros."
    },
    {
      type: "text",
      value: "BLIP (Bootstrapped Language-Image Pretraining): Framework para entrenamiento multimodal que permite tareas como generación de texto a partir de imágenes, búsqueda visual, y captioning. Combina encoders y decoders de forma flexible."
    },
    {
      type: "warning",
      value: "Los modelos generativos de imagen pueden producir contenido sesgado o no deseado. Es crucial implementar filtros y sistemas de moderación."
    }
  ],
  children: []
},
{
  id: "texto__audio",
  title: "Modelos Texto-Audio",
  subtitle: "Sistemas de procesamiento de voz y sonido",
  content: [
    {
      type: "text",
      value: "Whisper (STT - Speech to Text): Modelo de OpenAI para reconocimiento de voz que maneja múltiples idiomas y dialectos con alta precisión. Es robusto a ruido ambiental y variaciones en el habla."
    },
    {
      type: "code",
      value: `# Transcripción de audio con Whisper
import whisper

model = whisper.load_model("medium")
result = model.transcribe("audio.mp3", language="es")

print("Texto transcrito:", result["text"])
print("Segmentos:", result["segments"])`
    },
    {
      type: "text",
      value: "TTS (Text to Speech): Sistemas que convierten texto en voz natural. Modelos modernos como VITS, Tortoise-TTS y ElevenLabs producen voces casi indistinguibles de humanas, con control sobre tono, emoción y estilo."
    },
    {
      type: "img",
      value: "Arquitectura típica de sistema TTS mostrando pipeline de texto a características acústicas a waveform"
    },
    {
      type: "text",
      value: "Aplicaciones clave:",
    },
    {
      type: "list",
      value: [
        "Asistentes virtuales con interacción por voz",
        "Accesibilidad para personas con discapacidades visuales",
        "Producción de contenido multimedia automatizado",
        "Traducción de voz en tiempo real conservando la voz original"
      ]
    },
    {
      type: "warning",
      value: "Los sistemas TTS avanzados plantean riesgos éticos como deepfakes de voz. Es esencial implementar mecanismos de autenticación y detección."
    }
  ],
  children: []
},

  {
    id: "modelos_de_difusion",
    title: "Modelos de Difusión en Inteligencia Artificial",
    subtitle: "Generación de imágenes y datos mediante procesos iterativos",
    content: [
      {
        type: "text",
        value: "Los modelos de difusión son una clase de modelos generativos que aprenden a crear datos (especialmente imágenes) mediante un proceso de desnoising gradual. Funcionan añadiendo ruido a los datos de entrenamiento y luego aprendiendo a revertir este proceso."
      },
      {
        type: "img",
        value: "Diagrama del proceso de difusión mostrando la adición gradual de ruido y el proceso inverso de generación"
      },
      {
        type: "text",
        value: "Estos modelos han revolucionado la generación de imágenes, permitiendo crear contenido visual de alta calidad a partir de descripciones textuales."
      },
      {
        type: "warning",
        value: "Los modelos de difusión requieren importantes recursos computacionales para entrenamiento e inferencia, especialmente en alta resolución."
      },
      {
        type: "code",
        value: "// Ejemplo básico de uso de Stable Diffusion con Python\nfrom diffusers import StableDiffusionPipeline\nimport torch\n\npipe = StableDiffusionPipeline.from_pretrained('CompVis/stable-diffusion-v1-4', torch_dtype=torch.float16)\npipe = pipe.to('cuda')\n\nimage = pipe('a painting of an astronaut riding a horse on mars').images[0]\nimage.save('astronaut_horse.png')"
      }
    ],
    children: [
    ]
  },
  {
    id: "sistemas_de_recomendacion",
    title: "Sistemas de Recomendación",
    subtitle: "Técnicas para sugerir elementos relevantes a los usuarios",
    content: [
      {
        type: "text",
        value: "Los sistemas de recomendación son algoritmos diseñados para sugerir elementos relevantes (productos, películas, música, etc.) a los usuarios basándose en sus preferencias y comportamiento."
      },
      {
        type: "img",
        value: "Diagrama de arquitectura típica de un sistema de recomendación mostrando interacción usuario-sistema"
      },
      {
        type: "list",
        value: [
          "Aplicaciones comunes: e-commerce (Amazon), streaming (Netflix, Spotify), redes sociales",
          "Beneficios principales: aumento de engagement, descubrimiento de contenido, personalización",
          "Métricas clave: precisión, cobertura, novedad, diversidad"
        ]
      },
      {
        type: "code",
        value: "// Ejemplo básico de sistema de recomendación colaborativo\nfrom surprise import Dataset, KNNBasic\nfrom surprise.model_selection import cross_validate\n\n# Cargar datos de ratings\ndata = Dataset.load_builtin('ml-100k')\n\n# Configurar algoritmo de filtrado colaborativo\nalgo = KNNBasic(k=40, sim_options={'user_based': True})\n\n# Evaluar con validación cruzada\ncross_validate(algo, data, measures=['RMSE', 'MAE'], cv=5, verbose=True)"
      }
    ],
    children: [
      "sistemas_de_recomendacion_tipos",
      "sistemas_de_recomendacion_vulnerabilidades"
    ]
  },
  {
    id: "sistemas_de_recomendacion_tipos",
    title: "Tipos de Sistemas de Recomendación",
    subtitle: "Enfoques fundamentales para generar recomendaciones",
    content: [
      {
        type: "text",
        value: "Existen varios paradigmas principales para construir sistemas de recomendación, cada uno con sus fortalezas y debilidades según el contexto de aplicación."
      },
      {
        type: "img",
        value: "Comparación visual de los tres tipos principales de sistemas de recomendación"
      },
      {
        type: "text",
        value: "1. Basado en Contenido: Recomienda ítems similares a aquellos que el usuario ha interactuado positivamente en el pasado, usando características de los ítems."
      },
      {
        type: "text",
        value: "2. Colaborativo: Utiliza las interacciones de muchos usuarios para encontrar patrones (usuarios similares o ítems similares) sin necesidad de información sobre los ítems."
      },
      {
        type: "text",
        value: "3. Híbrido: Combina múltiples enfoques para superar las limitaciones de cada método individual, ofreciendo generalmente mejores resultados."
      },
      {
        type: "warning",
        value: "El problema de arranque en frío (nuevos usuarios o ítems sin historial) afecta especialmente a los sistemas colaborativos puros."
      }
    ],
    children: [
    ]
  },
  {
    id: "sistemas_de_recomendacion_vulnerabilidades",
    title: "Vulnerabilidades en Sistemas de Recomendación",
    subtitle: "Ataques y limitaciones comunes en algoritmos de recomendación",
    content: [
      {
        type: "text",
        value: "Los sistemas de recomendación pueden ser vulnerables a diversos tipos de ataques y manipulaciones que afectan su calidad y equidad."
      },
      {
        type: "img",
        value: "Diagrama mostrando diferentes tipos de ataques a sistemas de recomendación"
      },
      {
        type: "text",
        value: "Principales vulnerabilidades:"
      },
      {
        type: "list",
        value: [
          "Ataques aleatorios: Inyección de perfiles con ratings aleatorios para afectar recomendaciones",
          "Ataques promedio: Perfiles falsos que dan ratings cercanos al promedio para influir silenciosamente",
          "Ataques Bandwagon: Popularizar ciertos ítems mediante ratings coordinados",
          "Manipulación de Clickstream: Explotar el rastreo de comportamiento para sesgar recomendaciones",
          "Inyección de perfiles: Creación masiva de usuarios falsos para manipular resultados"
        ]
      },
      {
        type: "text",
        value: "Técnicas de defensa incluyen detección de anomalías, modelos robustos a ataques, y verificación de identidad."
      },
      {
        type: "code",
        value: "// Ejemplo de detección de perfiles sospechosos\nfunction detectSuspiciousUsers(ratings) {\n  // Buscar usuarios con muchos ratings en poco tiempo\n  const threshold = 100; // ratings por hora\n  return ratings.filter(r => \n    r.ratingsPerHour > threshold && \n    r.ratingDeviation < 0.5\n  );\n}"
      }
    ],
    children: [
    ]
  },
  {
  id: "explainable_ai",
  title: "Explainable AI (XAI)",
  subtitle: "Técnicas para hacer comprensible la inteligencia artificial",
  content: [
    {
      type: "text",
      value: "La Explainable AI (XAI) se refiere a métodos y técnicas que hacen que los resultados de los modelos de machine learning sean comprensibles para los humanos. Esto es crucial para aumentar la confianza, cumplir con regulaciones y depurar modelos."
    },
    {
      type: "img",
      value: "Diagrama mostrando el espectro de interpretabilidad en modelos de ML, desde modelos lineales hasta redes neuronales complejas"
    },
    {
      type: "list",
      value: [
        "Importancia en sectores regulados: salud, finanzas, justicia",
        "Requerimientos legales: GDPR, Ley de Algoritmos",
        "Beneficios: Detección de sesgos, mejora de modelos, transparencia"
      ]
    },
    {
      type: "warning",
      value: "No todos los métodos de explicación son igualmente confiables. Algunos pueden generar explicaciones engañosas si no se aplican correctamente."
    }
  ],
  children: [
    "basado_en_gradientes",
    "aproximaciones_locales",
    "toolkits",
    "contrafactuales"
  ]
},
{
  id: "basado_en_gradientes",
  title: "Métodos Basados en Gradientes",
  subtitle: "Técnicas que utilizan derivadas para explicar decisiones del modelo",
  content: [
    {
      type: "text",
      value: "Estos métodos analizan cómo cambian las predicciones del modelo con pequeñas variaciones en los inputs, utilizando información de los gradientes durante el forward/backward pass."
    },
    {
      type: "img",
      value: "Flujo de trabajo de métodos basados en gradientes mostrando cómo se propagan las señales a través de la red neuronal"
    },
    {
      type: "text",
      value: "Son especialmente útiles para modelos profundos y proporcionan explicaciones a nivel de características (feature-level)."
    },
    {
      type: "code",
      value: "# Ejemplo genérico de cálculo de gradientes en PyTorch\nimport torch\n\nmodel.eval()\ninput_tensor.requires_grad = True\noutput = model(input_tensor)\noutput.backward()\ngradients = input_tensor.grad"
    }
  ],
  children: [
    "gradcam",
    "scorecam",
    "cam",
    "tcav",
    "ace",
    "ig",
    "sanity_checks"
  ]
},
{
  id: "gradcam",
  title: "Grad-CAM",
  subtitle: "Gradient-weighted Class Activation Mapping",
  content: [
    {
      type: "text",
      value: "Grad-CAM produce explicaciones visuales para decisiones de redes convolucionales, destacando regiones importantes en imágenes para una predicción particular."
    },
    {
      type: "img",
      value: "Ejemplo de Grad-CAM mostrando áreas calientes en una imagen que influyeron en la clasificación"
    },
    {
      type: "text",
      value: "Funciona mediante:"
    },
    {
      type: "list",
      value: [
        "Calcular gradientes de la clase objetivo respecto a las activaciones de la última capa convolucional",
        "Promediar los gradientes espacialmente para obtener pesos de importancia",
        "Combinar las activaciones con los pesos para crear el mapa de calor"
      ]
    },
    {
      type: "code",
      value: "# Implementación básica de Grad-CAM\nimport torch\nimport torch.nn.functional as F\n\ndef grad_cam(model, input_tensor, target_class):\n    activations = {}\n    gradients = {}\n    \n    # Hook para capturar activaciones y gradientes\n    def forward_hook(module, input, output):\n        activations['last_conv'] = output.detach()\n    \n    def backward_hook(module, grad_input, grad_output):\n        gradients['last_conv'] = grad_output[0].detach()\n    \n    # Registrar hooks\n    handle_forward = model.last_conv.register_forward_hook(forward_hook)\n    handle_backward = model.last_conv.register_backward_hook(backward_hook)\n    \n    # Forward pass\n    output = model(input_tensor)\n    model.zero_grad()\n    \n    # Backward pass para la clase objetivo\n    one_hot = F.one_hot(torch.tensor([target_class]), num_classes=output.shape[1])\n    output.backward(gradient=one_hot)\n    \n    # Calcular pesos\n    pooled_gradients = torch.mean(gradients['last_conv'], dim=[0, 2, 3])\n    \n    # Combinar activaciones con pesos\n    activations = activations['last_conv'].squeeze()\n    for i in range(activations.shape[0]):\n        activations[i, :, :] *= pooled_gradients[i]\n    \n    heatmap = torch.mean(activations, dim=0).numpy()\n    \n    # Limpiar hooks\n    handle_forward.remove()\n    handle_backward.remove()\n    \n    return heatmap"
    },
    {
      type: "warning",
      value: "Grad-CAM solo funciona con arquitecturas que contienen capas convolucionales y puede perder detalles espaciales finos."
    }
  ],
  children: []
},
{
  id: "scorecam",
  title: "Score-CAM",
  subtitle: "Score-weighted Class Activation Mapping",
  content: [
    {
      type: "text",
      value: "Score-CAM es una variante de CAM que elimina la dependencia de los gradientes, usando en su lugar aumentaciones de la imagen para determinar la importancia de las regiones."
    },
    {
      type: "img",
      value: "Comparación visual entre Grad-CAM y Score-CAM mostrando diferencias en los mapas de calor generados"
    },
    {
      type: "text",
      value: "Ventajas sobre Grad-CAM:"
    },
    {
      type: "list",
      value: [
        "Más robusto a ruido en los gradientes",
        "No depende de la retropropagación",
        "Pesos determinados por el score real del modelo en lugar de gradientes"
      ]
    },
    {
      type: "text",
      value: "Proceso básico:"
    },
    {
      type: "list",
      value: [
        "Generar máscaras para diferentes regiones de la imagen",
        "Aplicar cada máscara y obtener el score de confianza del modelo",
        "Calcular pesos basados en estos scores",
        "Combinar las activaciones con los pesos para el mapa final"
      ]
    }
  ],
  children: []
},
{
  id: "cam",
  title: "Class Activation Mapping (CAM)",
  subtitle: "El método original para localizar regiones importantes en imágenes",
  content: [
    {
      type: "text",
      value: "CAM fue el primer método en introducir mapas de activación de clase, requiriendo una arquitectura específica con capas convolucionales seguidas directamente por una capa global average pooling y luego la capa fully-connected."
    },
    {
      type: "img",
      value: "Arquitectura requerida para CAM mostrando la secuencia conv -> GAP -> FC"
    },
    {
      type: "text",
      value: "Limitaciones principales:"
    },
    {
      type: "list",
      value: [
        "Requiere modificar la arquitectura del modelo",
        "Solo funciona con esa estructura específica",
        "Menos flexible que Grad-CAM o Score-CAM"
      ]
    },
    {
      type: "text",
      value: "A pesar de sus limitaciones, CAM sentó las bases para métodos posteriores más sofisticados."
    }
  ],
  children: []
},
{
  id: "tcav",
  title: "TCAV (Testing with Concept Activation Vectors)",
  subtitle: "Explicaciones basadas en conceptos de alto nivel",
  content: [
    {
      type: "text",
      value: "TCAV cuantifica qué tan importante es un concepto definido por el usuario (como 'rayas' o 'color rojo') para las predicciones de un modelo."
    },
    {
      type: "img",
      value: "Flujo de TCAV mostrando cómo se definen conceptos y se calculan vectores de activación"
    },
    {
      type: "text",
      value: "Pasos principales:"
    },
    {
      type: "list",
      value: [
        "Definir el concepto con ejemplos positivos y negativos",
        "Entrenar un clasificador lineal en el espacio de activaciones",
        "Calcular la dirección del concepto (CAV)",
        "Medir sensibilidad del modelo a este concepto (TCAV score)"
      ]
    },
    {
      type: "code",
      value: "# Pseudocódigo para TCAV\n\ndef compute_tcav(model, concept_examples, random_examples, layer_name):\n    # Obtener activaciones para ambos conjuntos\n    act_concept = get_activations(model, concept_examples, layer_name)\n    act_random = get_activations(model, random_examples, layer_name)\n    \n    # Entrenar clasificador lineal\n    X = np.concatenate([act_concept, act_random])\n    y = np.array([1]*len(act_concept) + [0]*len(act_random))\n    clf = LogisticRegression().fit(X, y)\n    \n    # Obtener CAV (coeficientes del modelo)\n    cav = clf.coef_[0]\n    \n    # Calcular TCAV score\n    gradients = compute_gradients(model, cav, layer_name)\n    tcav_score = np.mean(np.sign(gradients.dot(cav)))\n    \n    return tcav_score, cav"
    }
  ],
  children: []
},
{
  id: "ace",
  title: "ACE (Automated Concept-based Explanation)",
  subtitle: "Descubrimiento automático de conceptos interpretables",
  content: [
    {
      type: "text",
      value: "ACE extiende TCAV descubriendo automáticamente conceptos relevantes en lugar de requerir que sean definidos por el usuario."
    },
    {
      type: "img",
      value: "Proceso de ACE mostrando clustering de activaciones y descubrimiento de conceptos"
    },
    {
      type: "text",
      value: "Flujo de trabajo:"
    },
    {
      type: "list",
      value: [
        "Agrupar activaciones intermedias del modelo",
        "Identificar clusters como conceptos potenciales",
        "Validar conceptos con intervenciones humanas",
        "Cuantificar importancia de cada concepto"
      ]
    },
    {
      type: "warning",
      value: "Los conceptos descubiertos automáticamente pueden no siempre ser interpretables para humanos. Se recomienda validación humana."
    }
  ],
  children: []
},
{
  id: "ig",
  title: "Integrated Gradients",
  subtitle: "Método de atribución basado en la integral de gradientes",
  content: [
    {
      type: "text",
      value: "Integrated Gradients atribuye la predicción del modelo a sus características de entrada considerando la integral de los gradientes a lo largo del camino desde un baseline hasta el input actual."
    },
    {
      type: "img",
      value: "Visualización del camino de integración desde el baseline hasta el input"
    },
    {
      type: "text",
      value: "Propiedades clave:"
    },
    {
      type: "list",
      value: [
        "Completo: Las atribuciones suman la diferencia entre la salida en el input y el baseline",
        "Sensible a la implementación: No asigna gradiente a características irrelevantes",
        "Conservación de simetría: Características simétricas reciben atribuciones iguales"
      ]
    },
    {
      type: "code",
      value: "import numpy as np\n\ndef integrated_gradients(model, input, baseline, target_class, steps=50):\n    # Interpolar entre baseline e input\n    interpolated = [baseline + (float(i)/steps)*(input-baseline) \n                   for i in range(0, steps+1)]\n    \n    # Calcular gradientes\n    gradients = []\n    for x in interpolated:\n        x_tensor = torch.tensor(x, requires_grad=True)\n        output = model(x_tensor)\n        output[0, target_class].backward()\n        grad = x_tensor.grad.numpy()\n        gradients.append(grad)\n    \n    # Promedio de gradientes\n    avg_gradients = np.mean(gradients[:-1], axis=0)\n    \n    # Calcular atribuciones\n    attributions = (input - baseline) * avg_gradients\n    \n    return attributions"
    }
  ],
  children: []
},
{
  id: "sanity_checks",
  title: "Sanity Checks para Métodos de Explicación",
  subtitle: "Validando la confiabilidad de las explicaciones",
  content: [
    {
      type: "text",
      value: "No todas las explicaciones generadas por métodos XAI son igualmente confiables. Los sanity checks ayudan a evaluar la validez de las explicaciones."
    },
    {
      type: "img",
      value: "Diagrama mostrando diferentes tipos de pruebas de sanidad para métodos XAI"
    },
    {
      type: "text",
      value: "Pruebas comunes:"
    },
    {
      type: "list",
      value: [
        "Prueba de aleatorización de modelo: Las explicaciones deberían cambiar significativamente si el modelo se aleatoriza",
        "Prueba de aleatorización de datos: Las explicaciones deberían ser diferentes para inputs aleatorios",
        "Prueba de completitud: Para métodos como Integrated Gradients, verificar que las atribuciones sumen la diferencia de salida",
        "Consistencia: Explicaciones deberían ser consistentes para pequeñas perturbaciones del input"
      ]
    },
    {
      type: "warning",
      value: "Muchos métodos populares fallan algunas pruebas de sanidad. Es crucial entender las limitaciones de cada técnica."
    }
  ],
  children: []
},
{
  id: "aproximaciones_locales",
  title: "Aproximaciones Locales",
  subtitle: "Métodos que explican predicciones individuales",
  content: [
    {
      type: "text",
      value: "Las aproximaciones locales explican predicciones individuales aproximando el modelo complejo con un modelo interpretable localmente alrededor de la predicción de interés."
    },
    {
      type: "img",
      value: "Visualización de cómo un modelo complejo es aproximado localmente por un modelo simple"
    },
    {
      type: "text",
      value: "Características principales:"
    },
    {
      type: "list",
      value: [
        "Explicaciones específicas para cada instancia",
        "No proporcionan una visión global del modelo",
        "Útiles para depuración y explicación de casos particulares",
        "Computacionalmente más eficientes que métodos globales"
      ]
    }
  ],
  children: [
    "lime",
    "shap"
  ]
},
{
  id: "lime",
  title: "LIME (Local Interpretable Model-agnostic Explanations)",
  subtitle: "Aproximación local con modelos lineales",
  content: [
    {
      type: "text",
      value: "LIME explica predicciones individuales perturbando el input y observando cómo cambian las predicciones, luego ajustando un modelo lineal simple a estas perturbaciones."
    },
    {
      type: "img",
      value: "Diagrama del proceso LIME mostrando perturbaciones y ajuste del modelo local"
    },
    {
      type: "text",
      value: "Pasos clave:"
    },
    {
      type: "list",
      value: [
        "Generar muestras perturbadas alrededor de la instancia a explicar",
        "Obtener predicciones del modelo complejo para estas muestras",
        "Ponderar muestras por su proximidad a la instancia original",
        "Entrenar modelo interpretable (generalmente lineal) en las muestras ponderadas"
      ]
    },
    {
      type: "code",
      value: "from lime import lime_tabular\n\n# Crear explicador\nexplainer = lime_tabular.LimeTabularExplainer(\n    training_data=X_train.values,\n    feature_names=feature_names,\n    class_names=['class0', 'class1'],\n    mode='classification'\n)\n\n# Generar explicación para una instancia\nexp = explainer.explain_instance(\n    X_test.iloc[0].values, \n    model.predict_proba, \n    num_features=5\n)\n\nexp.show_in_notebook()"
    },
    {
      type: "warning",
      value: "LIME puede ser sensible a la elección del kernel de proximidad y al número de muestras generadas."
    }
  ],
  children: []
},
{
  id: "shap",
  title: "SHAP (SHapley Additive exPlanations)",
  subtitle: "Explicaciones basadas en teoría de juegos",
  content: [
    {
      type: "text",
      value: "SHAP utiliza valores Shapley de la teoría de juegos para asignar importancia a cada característica de manera que se satisfagan propiedades matemáticas deseables."
    },
    {
      type: "img",
      value: "Diagrama de valores SHAP mostrando contribuciones de características para una predicción"
    },
    {
      type: "text",
      value: "Propiedades clave:"
    },
    {
      type: "list",
      value: [
        "Eficiencia: La suma de las contribuciones es igual a la salida del modelo menos el valor esperado",
        "Simetría: Características idénticas reciben la misma atribución",
        "Linealidad: Para modelos lineales, SHAP coincide con los coeficientes",
        "Consistencia: Si un modelo cambia para hacer una característica más importante, su atribución SHAP no disminuye"
      ]
    },
    {
      type: "code",
      value: "import shap\n\n# Crear explicador (versión para árboles)\nexplainer = shap.TreeExplainer(model)\n\n# Calcular valores SHAP para un conjunto de datos\nshap_values = explainer.shap_values(X_test)\n\n# Visualizar para una instancia\nshap.force_plot(explainer.expected_value, shap_values[0,:], X_test.iloc[0,:])"
    },
    {
      type: "text",
      value: "Variantes de SHAP:"
    },
    {
      type: "list",
      value: [
        "KernelSHAP: Versión model-agnóstica (similar a LIME pero con propiedades SHAP)",
        "TreeSHAP: Optimizado para modelos basados en árboles",
        "DeepSHAP: Para redes neuronales, aproxima SHAP con propagación de reglas"
      ]
    }
  ],
  children: []
},
{
  id: "toolkits",
  title: "Toolkits para XAI",
  subtitle: "Bibliotecas y frameworks para explicabilidad",
  content: [
    {
      type: "text",
      value: "Existen múltiples bibliotecas que implementan métodos de explicabilidad, facilitando su aplicación y comparación."
    },
    {
      type: "img",
      value: "Comparación de toolkits populares de XAI mostrando sus características principales"
    },
    {
      type: "text",
      value: "Criterios para elegir un toolkit:"
    },
    {
      type: "list",
      value: [
        "Tipos de modelos soportados",
        "Variedad de métodos implementados",
        "Facilidad de integración con tu stack tecnológico",
        "Capacidades de visualización",
        "Soporte para diferentes tipos de datos (tablas, imágenes, texto)"
      ]
    }
  ],
  children: [
    "captum",
    "interpretml",
    "ibm_aix360",
    "omnixai"
  ]
},
{
  id: "captum",
  title: "Captum",
  subtitle: "Explicabilidad para PyTorch",
  content: [
    {
      type: "text",
      value: "Captum es una biblioteca de PyTorch que proporciona herramientas para entender qué características contribuyen a las predicciones de modelos."
    },
    {
      type: "img",
      value: "Diagrama de arquitectura de Captum mostrando sus módulos principales"
    },
    {
      type: "text",
      value: "Características principales:"
    },
    {
      type: "list",
      value: [
        "Integración nativa con PyTorch",
        "Soporte para atribución de características, capas y neuronas",
        "Implementa métodos como Integrated Gradients, DeepLIFT, Guided Grad-CAM",
        "Visualizaciones integradas"
      ]
    },
    {
      type: "code",
      value: "import torch\nfrom captum.attr import IntegratedGradients\n\n# Inicializar el método\nig = IntegratedGradients(model)\n\n# Calcular atribuciones\ninput_tensor = torch.tensor(X_test[0:1], dtype=torch.float32)\nbaseline = torch.zeros_like(input_tensor)\nattr = ig.attribute(input_tensor, baseline, target=1)\n\n# Visualizar\nfrom captum.attr import visualization as viz\nviz.visualize_image_attr(attr.numpy(), \n                        original_image=input_tensor.numpy(),\n                        method='blended_heat_map')"
    }
  ],
  children: []
},
{
  id: "interpretml",
  title: "InterpretML",
  subtitle: "Kit de herramientas para modelos interpretables",
  content: [
    {
      type: "text",
      value: "InterpretML es un paquete de Python que contiene una variedad de métodos para entrenar modelos interpretables y explicar modelos existentes."
    },
    {
      type: "img",
      value: "Dashboard de InterpretML mostrando visualizaciones interactivas"
    },
    {
      type: "text",
      value: "Funcionalidades destacadas:"
    },
    {
      type: "list",
      value: [
        "Implementa modelos interpretables como Explainable Boosting Machines (EBM)",
        "Soporta métodos post-hoc como SHAP y LIME",
        "Interfaz unificada para diferentes técnicas",
        "Dashboard interactivo para explorar explicaciones"
      ]
    },
    {
      type: "code",
      value: "from interpret import show\nfrom interpret.data import ClassHistogram\nfrom interpret.glassbox import ExplainableBoostingClassifier\n\n# Entrenar modelo interpretable\nebm = ExplainableBoostingClassifier()\nebm.fit(X_train, y_train)\n\n# Generar explicaciones\nebm_global = ebm.explain_global()\nebm_local = ebm.explain_local(X_test[:5], y_test[:5])\n\n# Visualizar\nshow([ebm_global, ebm_local])"
    }
  ],
  children: []
},
{
  id: "ibm_aix360",
  title: "IBM AI Explainability 360",
  subtitle: "Kit de herramientas completo para explicabilidad",
  content: [
    {
      type: "text",
      value: "El IBM AI Explainability 360 Toolkit es una biblioteca comprehensiva que incluye algoritmos tanto para explicabilidad intrínseca como post-hoc."
    },
    {
      type: "img",
      value: "Arquitectura de AIX360 mostrando sus componentes principales"
    },
    {
      type: "text",
      value: "Algoritmos incluidos:"
    },
    {
      type: "list",
      value: [
        "Boolean Decision Rules via Column Generation (BRCG)",
        "Generalized Linear Rule Models (GLRM)",
        "Protodash (selección de prototipos)",
        "Contrastive Explanations Method (CEM)",
        "Disentangled Inferred Prior Variational AutoEncoder (DIP-VAE)"
      ]
    },
    {
      type: "warning",
      value: "AIX360 tiene una curva de aprendizaje más pronunciada que otras alternativas debido a su amplitud y sofisticación."
    }
  ],
  children: []
},
{
  id: "omnixai",
  title: "OmniXAI",
  subtitle: "Explicabilidad para múltiples tipos de datos y tareas",
  content: [
    {
      type: "text",
      value: "OmniXAI es una biblioteca de propósito general para explicabilidad que soporta tablas, imágenes, texto y datos temporales."
    },
    {
      type: "img",
      value: "Diagrama de OmniXAI mostrando su soporte para diferentes modalidades"
    },
    {
      type: "text",
      value: "Ventajas clave:"
    },
    {
      type: "list",
      value: [
        "Soporte unificado para diferentes tipos de datos",
        "Interfaz consistente para múltiples métodos",
        "Visualizaciones interactivas",
        "Integración con TensorFlow, PyTorch, Scikit-learn"
      ]
    },
    {
      type: "code",
      value: "from omnixai.explainers.tabular import TabularExplainer\nfrom omnixai.visualization.dashboard import Dashboard\n\n# Crear explicador\nexplainer = TabularExplainer(\n    explainers=['lime', 'shap', 'pdp'],\n    data=X_train,\n    model=model,\n    mode='classification'\n)\n\n# Generar explicaciones\nexplanations = explainer.explain(X_test)\n\n# Lanzar dashboard interactivo\ndashboard = Dashboard(\n    explanations=explanations,\n    title='Explicaciones del modelo'\n)\ndashboard.show()"
    }
  ],
  children: []
},
{
  id: "contrafactuales",
  title: "Explicaciones Contrafactuales",
  subtitle: "¿Qué necesitaría cambiar para obtener un resultado diferente?",
  content: [
    {
      type: "text",
      value: "Las explicaciones contrafactuales responden a la pregunta: '¿Qué cambios mínimos en las características de entrada llevarían a una predicción diferente?'"
    },
    {
      type: "img",
      value: "Ejemplo visual de explicación contrafactual mostrando cambios mínimos necesarios"
    },
    {
      type: "text",
      value: "Beneficios principales:"
    },
    {
      type: "list",
      value: [
        "Explicaciones intuitivas y accionables",
        "Particularmente útiles en decisiones que afectan a personas (préstamos, contrataciones)",
        "Cumplimiento con regulaciones como el 'derecho a una explicación'"
      ]
    },
    {
      type: "warning",
      value: "Generar contrafactuales válidos puede ser computacionalmente costoso y requiere validación cuidadosa."
    }
  ],
  children: [
    "dice",
    "male"
  ]
},
{
  id: "dice",
  title: "DICE (Diverse Counterfactual Explanations)",
  subtitle: "Generación de contrafactuales diversos",
  content: [
    {
      type: "text",
      value: "DICE genera múltiples explicaciones contrafactuales diversas para una misma instancia, proporcionando diferentes opciones de cómo cambiar el resultado."
    },
    {
      type: "img",
      value: "Ejemplo de DICE mostrando múltiples contrafactuales para una decisión de préstamo"
    },
    {
      type: "text",
      value: "Características clave:"
    },
    {
      type: "list",
      value: [
        "Genera contrafactuales diversos (no solo el más cercano)",
        "Soporta restricciones de plausibilidad",
        "Optimiza para proximidad, diversidad y plausibilidad",
        "Funciona con modelos black-box"
      ]
    },
    {
      type: "code",
      value: "from dice_ml import Dice\n\n# Crear objeto Dice\nd = Dice(data_df, model)\n\n# Generar contrafactuales\nquery_instance = X_test.iloc[0:1]\ncf = d.generate_counterfactuals(\n    query_instance, \n    total_CFs=3, \n    desired_class='opposite'\n)\n\n# Visualizar\ncf.visualize_as_dataframe()"
    }
  ],
  children: []
},
{
  id: "male",
  title: "MALE (Model-Agnostic Local Explanations)",
  subtitle: "Explicaciones contrafactuales locales",
  content: [
    {
      type: "text",
      value: "MALE genera explicaciones contrafactuales optimizando directamente para cambios mínimos en el espacio de entrada que resulten en el cambio deseado de predicción."
    },
    {
      type: "img",
      value: "Proceso de optimización de MALE para encontrar contrafactuales"
    },
    {
      type: "text",
      value: "Ventajas sobre otros métodos:"
    },
    {
      type: "list",
      value: [
        "No requiere acceso a los datos de entrenamiento",
        "Más eficiente computacionalmente que métodos basados en búsqueda",
        "Permite incorporar restricciones de plausibilidad",
        "Optimización diferenciable para modelos donde se pueden calcular gradientes"
      ]
    },
    {
      type: "warning",
      value: "MALE puede quedar atrapado en mínimos locales, por lo que se recomienda ejecutarlo múltiples veces con diferentes inicializaciones."
    }
  ],
  children: []
},
{
  id: "fairness__bias_en_ia",
  title: "Fairness y Bias en Inteligencia Artificial",
  subtitle: "Detección, medición y mitigación de sesgos en modelos de ML",
  content: [
    {
      type: "text",
      value: "El estudio de fairness y bias en IA busca garantizar que los sistemas de aprendizaje automático tomen decisiones justas y no discriminatorias, especialmente cuando afectan a grupos vulnerables o en contextos sensibles como contratación, préstamos o justicia."
    },
    {
      type: "img",
      value: "Diagrama mostrando el ciclo completo de fairness en IA: desde datos hasta decisiones, pasando por evaluación y mitigación"
    },
    {
      type: "text",
      value: "Áreas críticas donde el bias puede tener mayores consecuencias:"
    },
    {
      type: "list",
      value: [
        "Sistemas de reclutamiento y HR tech",
        "Aprobación de créditos y scoring financiero",
        "Sistemas predictivos en justicia criminal",
        "Diagnósticos médicos asistidos por IA",
        "Recomendación de contenido en redes sociales"
      ]
    },
    {
      type: "warning",
      value: "Todo modelo de ML tiene algún tipo de sesgo. El objetivo no es eliminarlo completamente sino entenderlo, medirlo y asegurar que no cause daños discriminatorios."
    }
  ],
  children: [
    "bias_tipos_de_sesgos",
    "bias_metricas",
    "bias_mitigacion",
    "bias_herramientas"
  ]
},
{
  id: "bias_tipos_de_sesgos",
  title: "Tipos de Sesgos en IA",
  subtitle: "Clasificación y características de los sesgos en sistemas de aprendizaje automático",
  content: [
    {
      type: "text",
      value: "Los sesgos en IA pueden originarse en diferentes etapas del ciclo de vida de un modelo, desde la recolección de datos hasta la implementación en producción. Entender su naturaleza es crucial para diseñar estrategias efectivas de mitigación."
    },
    {
      type: "img",
      value: "Taxonomía de sesgos mostrando su origen en el pipeline de ML: datos, algoritmo, implementación y feedback loops"
    },
    {
      type: "text",
      value: "Clasificación general de sesgos:"
    },
    {
      type: "list",
      value: [
        "Sesgos en datos: Reflejan desigualdades históricas o muestreo no representativo",
        "Sesgos algorítmicos: Introducidos por el diseño del modelo o función de pérdida",
        "Sesgos de implementación: Surgen al desplegar el modelo en contextos diferentes a los de entrenamiento",
        "Sesgos de retroalimentación: Cuando las predicciones del modelo afectan futuros datos de entrenamiento"
      ]
    }
  ],
  children: [
    "decision",
    "estadisticos"
  ]
},
{
  id: "decision",
  title: "Sesgos de Decisión",
  subtitle: "Sesgos introducidos por elecciones humanas en el desarrollo del modelo",
  content: [
    {
      type: "text",
      value: "Los sesgos de decisión son aquellos introducidos consciente o inconscientemente por los desarrolladores y stakeholders durante el diseño e implementación del sistema de IA."
    },
    {
      type: "img",
      value: "Diagrama mostrando puntos clave donde se introducen sesgos de decisión en el pipeline de ML"
    },
    {
      type: "text",
      value: "Ejemplos comunes:"
    },
    {
      type: "list",
      value: [
        "Selección de características: Omitir variables relevantes para fairness",
        "Definición de labels: Etiquetado que refleja prejuicios humanos",
        "Elección de métricas: Optimizar solo por precisión sin considerar equidad",
        "Segmentación de usuarios: Tratar grupos demográficos como casos extremos"
      ]
    },
    {
      type: "code",
      value: "# Ejemplo: Cómo la selección de características puede introducir sesgo\n# Supongamos que omitimos el código postal para evitar discriminación geográfica\n# Pero esto podría esconder correlaciones con raza/etnia\nfeatures = ['income', 'credit_score', 'employment_years']  # Se omitió 'zip_code'\n# Mejor práctica: Incluir pero controlar con técnicas de mitigación"
    },
    {
      type: "warning",
      value: "Los sesgos de decisión son particularmente peligrosos porque son difíciles de detectar automáticamente y requieren revisión humana constante."
    }
  ],
  children: []
},
{
  id: "estadisticos",
  title: "Sesgos Estadísticos",
  subtitle: "Sesgos originados en propiedades matemáticas de los datos o algoritmos",
  content: [
    {
      type: "text",
      value: "Los sesgos estadísticos surgen de desequilibrios o propiedades matemáticas en los datos de entrenamiento o en el comportamiento del algoritmo, independientemente de las intenciones del equipo de desarrollo."
    },
    {
      type: "img",
      value: "Visualización de diferentes tipos de sesgos estadísticos en distribuciones de datos"
    },
    {
      type: "text",
      value: "Tipos principales:"
    },
    {
      type: "list",
      value: [
        "Sesgo de muestreo: Cuando los datos no representan adecuadamente la población",
        "Sesgo de prevalencia: Desbalance en las clases objetivo",
        "Sesgo de variables proxy: Cuando características correlacionadas con atributos sensibles perpetúan discriminación",
        "Sesgo de medición: Errores sistemáticos en cómo se midieron o registraron los datos"
      ]
    },
    {
      type: "code",
      value: "import pandas as pd\n\n# Ejemplo: Detección de sesgo de prevalencia\ndata = pd.read_csv('loan_data.csv')\nprint(data['approval_status'].value_counts(normalize=True))\n\n# Output puede mostrar desbalance:\n# approved: 0.72\n# rejected: 0.28\n# Esto podría indicar sesgo si el desbalance no refleja la realidad"
    }
  ],
  children: []
},
{
  id: "bias_metricas",
  title: "Métricas de Fairness",
  subtitle: "Mediciones cuantitativas para evaluar equidad en modelos de ML",
  content: [
    {
      type: "text",
      value: "Existen múltiples métricas para cuantificar el fairness de un modelo, cada una con sus ventajas y limitaciones. La elección depende del contexto de aplicación y los valores éticos prioritarios."
    },
    {
      type: "img",
      value: "Comparación visual de diferentes métricas de fairness y sus trade-offs"
    },
    {
      type: "text",
      value: "Consideraciones al elegir métricas:"
    },
    {
      type: "list",
      value: [
        "¿Qué definición de fairness es más relevante para el caso de uso?",
        "¿Qué grupos protegidos deben considerarse?",
        "¿Qué trade-offs entre fairness y precisión son aceptables?",
        "¿Cumple con regulaciones aplicables (como EU AI Act)?"
      ]
    },
    {
      type: "warning",
      value: "No existe una métrica única perfecta. Es recomendable monitorear múltiples métricas y entender sus implicaciones."
    }
  ],
  children: [
    "spd",
    "eod",
    "aod",
    "disparate_impact",
    "calibration"
  ]
},
{
  id: "spd",
  title: "Statistical Parity Difference (SPD)",
  subtitle: "Diferencia en tasas de predicción positiva entre grupos",
  content: [
    {
      type: "text",
      value: "El SPD mide la diferencia entre la probabilidad de obtener una predicción favorable para grupos privilegiados y desfavorecidos, sin considerar el ground truth."
    },
    {
      type: "img",
      value: "Gráfico mostrando cálculo de SPD como diferencia entre proporciones de predicciones positivas"
    },
    {
      type: "text",
      value: "Fórmula: SPD = P(Ŷ=1|D=privilegiado) - P(Ŷ=1|D=desfavorecido)"
    },
    {
      type: "text",
      value: "Interpretación:"
    },
    {
      type: "list",
      value: [
        "SPD = 0: Paridad estadística perfecta",
        "SPD > 0: El grupo privilegiado recibe más predicciones positivas",
        "SPD < 0: El grupo desfavorecido recibe más predicciones positivas"
      ]
    },
    {
      type: "code",
      value: "def calculate_spd(y_pred, sensitive_attributes):\n    \"\"\"\n    y_pred: array de predicciones (0/1)\n    sensitive_attributes: array indicando grupo (0=desfavorecido, 1=privilegiado)\n    \"\"\"\n    privileged_rate = y_pred[sensitive_attributes == 1].mean()\n    disadvantaged_rate = y_pred[sensitive_attributes == 0].mean()\n    return privileged_rate - disadvantaged_rate"
    },
    {
      type: "warning",
      value: "SPD no considera si las predicciones son correctas. Un modelo podría lograr SPD=0 siendo injusto si los errores se distribuyen desigualmente."
    }
  ],
  children: []
},
{
  id: "eod",
  title: "Equal Opportunity Difference (EOD)",
  subtitle: "Diferencia en tasas de verdaderos positivos entre grupos",
  content: [
    {
      type: "text",
      value: "El EOD compara la igualdad de oportunidades midiendo la diferencia en recall (true positive rate) entre grupos protegidos y no protegidos."
    },
    {
      type: "img",
      value: "Matriz de confusión comparada entre grupos mostrando cálculo de EOD"
    },
    {
      type: "text",
      value: "Fórmula: EOD = TPR(privilegiado) - TPR(desfavorecido)"
    },
    {
      type: "text",
      value: "Ventajas:"
    },
    {
      type: "list",
      value: [
        "Sensible a errores que afectan desproporcionadamente a grupos desfavorecidos",
        "Apropiado cuando los falsos negativos tienen consecuencias graves (ej. diagnósticos médicos)",
        "Alineado con el principio de igualdad de oportunidades"
      ]
    },
    {
      type: "code",
      value: "from sklearn.metrics import recall_score\n\ndef calculate_eod(y_true, y_pred, sensitive_attributes):\n    tpr_privileged = recall_score(\n        y_true[sensitive_attributes == 1], \n        y_pred[sensitive_attributes == 1]\n    )\n    tpr_disadvantaged = recall_score(\n        y_true[sensitive_attributes == 0], \n        y_pred[sensitive_attributes == 0]\n    )\n    return tpr_privileged - tpr_disadvantaged"
    }
  ],
  children: []
},
{
  id: "aod",
  title: "Average Odds Difference (AOD)",
  subtitle: "Promedio de diferencias en FPR y TPR entre grupos",
  content: [
    {
      type: "text",
      value: "El AOD es la media de dos diferencias: la de falsos positivos (FPR) y la de verdaderos positivos (TPR) entre grupos privilegiados y desfavorecidos."
    },
    {
      type: "img",
      value: "Visualización de cómo se calcula AOD promediando FPR difference y TPR difference"
    },
    {
      type: "text",
      value: "Fórmula: AOD = [(FPR_priv - FPR_disadv) + (TPR_priv - TPR_disadv)] / 2"
    },
    {
      type: "text",
      value: "Casos de uso:"
    },
    {
      type: "list",
      value: [
        "Cuando tanto falsos positivos como falsos negativos son importantes",
        "En sistemas donde se busca balance entre precision y recall",
        "Contextos donde la igualdad de odds es un requisito legal"
      ]
    },
    {
      type: "warning",
      value: "AOD=0 no garantiza justicia individual, solo equidad a nivel grupal. Puede enmascarar compensaciones entre grupos."
    }
  ],
  children: []
},
{
  id: "disparate_impact",
  title: "Disparate Impact Ratio",
  subtitle: "Ratio de tasas de predicción positiva entre grupos",
  content: [
    {
      type: "text",
      value: "El disparate impact ratio (también llamado impacto adverso) mide la discriminación como el ratio entre la tasa de predicciones positivas para el grupo desfavorecido vs. el privilegiado."
    },
    {
      type: "img",
      value: "Ilustración del cálculo de disparate impact como ratio de proporciones"
    },
    {
      type: "text",
      value: "Fórmula: DI = P(Ŷ=1|D=desfavorecido) / P(Ŷ=1|D=privilegiado)"
    },
    {
      type: "text",
      value: "Umbrales legales comunes:"
    },
    {
      type: "list",
      value: [
        "DI < 0.8: Evidencia prima facie de discriminación (Regla del 80% en EE.UU.)",
        "DI ≈ 1: Indica paridad estadística",
        "DI > 1: El grupo desfavorecido recibe más predicciones positivas"
      ]
    },
    {
      type: "code",
      value: "def disparate_impact_ratio(y_pred, sensitive_attributes):\n    \"\"\"\n    Calcula el disparate impact ratio\n    Valores < 1 indican desventaja para el grupo desfavorecido\n    \"\"\"\n    p_disadvantaged = y_pred[sensitive_attributes == 0].mean()\n    p_privileged = y_pred[sensitive_attributes == 1].mean()\n    \n    # Evitar división por cero\n    if p_privileged == 0:\n        return float('inf')\n        \n    return p_disadvantaged / p_privileged"
    },
    {
      type: "warning",
      value: "DI solo considera resultados positivos sin evaluar su corrección. Puede ser engañoso en datasets con distribuciones muy diferentes entre grupos."
    }
  ],
  children: []
},
{
  id: "calibration",
  title: "Calibration by Group",
  subtitle: "Equidad en la calibración de probabilidades entre grupos",
  content: [
    {
      type: "text",
      value: "La calibración por grupo evalúa si las probabilidades predichas reflejan las tasas reales de ocurrencia para cada subgrupo demográfico."
    },
    {
      type: "img",
      value: "Curvas de calibración comparadas entre diferentes grupos demográficos"
    },
    {
      type: "text",
      value: "Un modelo está bien calibrado por grupo si para todo p ∈ [0,1]: P(Y=1|Ŷ=p,D=d) = p, para cada grupo d."
    },
    {
      type: "text",
      value: "Importancia:"
    },
    {
      type: "list",
      value: [
        "Especialmente relevante en modelos que producen scores de riesgo",
        "Crítico en aplicaciones médicas y de justicia penal",
        "Garantiza que las probabilidades sean interpretables de igual forma para todos los grupos"
      ]
    },
    {
      type: "code",
      value: "from sklearn.calibration import calibration_curve\nimport matplotlib.pyplot as plt\n\ndef plot_calibration_by_group(y_true, y_prob, group):\n    groups = np.unique(group)\n    plt.figure(figsize=(10, 6))\n    \n    for g in groups:\n        mask = (group == g)\n        prob_true, prob_pred = calibration_curve(\n            y_true[mask], y_prob[mask], n_bins=10\n        )\n        plt.plot(prob_pred, prob_true, marker='o', label=f'Group {g}')\n    \n    plt.plot([0, 1], [0, 1], linestyle='--', color='gray')\n    plt.xlabel('Predicted Probability')\n    plt.ylabel('True Probability')\n    plt.legend()\n    plt.title('Calibration by Group')\n    plt.show()"
    },
    {
      type: "warning",
      value: "Es posible tener calibración perfecta por grupo y al mismo tiempo tener disparidades en otras métricas de fairness. La calibración debe evaluarse junto con otras medidas."
    }
  ],
  children: []
},
{
  id: "bias_mitigacion",
  title: "Técnicas de Mitigación de Sesgos",
  subtitle: "Estrategias para reducir discriminación en modelos de ML",
  content: [
    {
      type: "text",
      value: "La mitigación de sesgos puede aplicarse en diferentes etapas del pipeline de machine learning, cada enfoque con sus ventajas y limitaciones. La elección depende del contexto, requisitos de equidad y restricciones técnicas."
    },
    {
      type: "img",
      value: "Diagrama de pipeline de ML mostrando puntos de intervención para mitigación: preprocesamiento, inprocesamiento y postprocesamiento"
    },
    {
      type: "text",
      value: "Consideraciones al elegir estrategia:"
    },
    {
      type: "list",
      value: [
        "Acceso a datos sensibles (¿pueden usarse durante entrenamiento?)",
        "Flexibilidad del modelo (¿puede modificarse su función de pérdida?)",
        "Requisitos de equidad (paridad estadística, igualdad de oportunidades, etc.)",
        "Overhead computacional aceptable"
      ]
    },
    {
      type: "warning",
      value: "Ningún método elimina completamente los sesgos. La mitigación debe acompañarse de monitoreo continuo en producción."
    }
  ],
  children: [
    "preprocessing",
    "inprocessing",
    "postprocessing"
  ]
},
{
  id: "preprocessing",
  title: "Preprocesamiento de Datos",
  subtitle: "Técnicas que modifican los datos antes del entrenamiento",
  content: [
    {
      type: "text",
      value: "Los métodos de preprocesamiento transforman los datos de entrenamiento para reducir sesgos antes de que el modelo los aprenda. Son independientes del algoritmo y funcionan bien con modelos existentes."
    },
    {
      type: "img",
      value: "Flujo de preprocesamiento mostrando transformación de datos antes del entrenamiento"
    },
    {
      type: "text",
      value: "Ventajas principales:"
    },
    {
      type: "list",
      value: [
        "No requieren modificar el algoritmo de ML",
        "Aplicables incluso con modelos black-box",
        "Pueden combinarse con otras técnicas",
        "Relativamente simples de implementar"
      ]
    },
    {
      type: "code",
      value: "# Ejemplo genérico de pipeline de preprocesamiento\nfrom sklearn.pipeline import Pipeline\nfrom fairness_preprocessors import Reweighing, DisparateImpactRemover\n\npipeline = Pipeline([\n    ('reweighing', Reweighing()),\n    ('bias_remover', DisparateImpactRemover()),\n    # ... otros pasos de preprocesamiento\n    # ... luego el modelo\n])"
    }
  ],
  children: [
    "unawareness",
    "reweighing",
    "learning_fair_representations"
  ]
},
{
  id: "unawareness",
  title: "Unawareness (Remoción de Atributos Sensibles)",
  subtitle: "Eliminar variables protegidas para evitar discriminación directa",
  content: [
    {
      type: "text",
      value: "La técnica más simple de preprocesamiento consiste en eliminar explícitamente los atributos sensibles (género, raza, etc.) del conjunto de datos."
    },
    {
      type: "img",
      value: "Ejemplo visual de dataset antes y después de remover columnas sensibles"
    },
    {
      type: "text",
      value: "Limitaciones importantes:"
    },
    {
      type: "list",
      value: [
        "No elimina sesgos si existen variables proxy (ej: código postal correlacionado con raza)",
        "Puede reducir precisión al eliminar información predictiva legítima",
        "Impide monitorear disparidades por grupo protegido"
      ]
    },
    {
      type: "code",
      value: "# Ejemplo de implementación básica\nimport pandas as pd\n\n# Atributos sensibles a remover\nprotected_attributes = ['gender', 'race', 'zip_code']\n\ndef remove_sensitive_features(df):\n    return df.drop(columns=protected_attributes, errors='ignore')\n\n# Aplicar a los datos\ndata = pd.read_csv('application_data.csv')\nclean_data = remove_sensitive_features(data)"
    },
    {
      type: "warning",
      value: "La simple remoción de atributos sensibles rara vez es suficiente para garantizar fairness. Se recomienda combinarla con otras técnicas."
    }
  ],
  children: []
},
{
  id: "reweighing",
  title: "Reweighing",
  subtitle: "Ajuste de pesos de muestras para balancear grupos",
  content: [
    {
      type: "text",
      value: "Reweighing asigna pesos diferentes a las instancias de entrenamiento para compensar distribuciones desiguales entre grupos protegidos y no protegidos."
    },
    {
      type: "img",
      value: "Visualización de cómo se ajustan los pesos para diferentes combinaciones de grupo/clase"
    },
    {
      type: "text",
      value: "Fórmula de pesos:"
    },
    {
      type: "text",
      value: "w(x) = [P(S=s)P(Y=y)] / [P(S=s,Y=y)]"
    },
    {
      type: "text",
      value: "Donde S es el grupo protegido e Y la clase objetivo."
    },
    {
      type: "code",
      value: "import numpy as np\n\ndef calculate_weights(y, sensitive_attr):\n    \"\"\"\n    Calcula pesos para balancear grupos y clases\n    y: etiquetas (0/1)\n    sensitive_attr: atributo protegido (0/1)\n    \"\"\"\n    weights = np.ones_like(y, dtype=float)\n    \n    for s in [0, 1]:  # Grupos protegidos\n        for lbl in [0, 1]:  # Clases\n            mask = (y == lbl) & (sensitive_attr == s)\n            p_s = np.mean(sensitive_attr == s)\n            p_y = np.mean(y == lbl)\n            p_sy = np.mean(mask)\n            \n            if p_sy > 0:\n                weights[mask] = (p_s * p_y) / p_sy\n                \n    return weights"
    },
    {
      type: "text",
      value: "Uso con scikit-learn:"
    },
    {
      type: "code",
      value: "from sklearn.linear_model import LogisticRegression\n\n# Calcular pesos\nweights = calculate_weights(y_train, sensitive_train)\n\n# Entrenar modelo con pesos\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train, sample_weight=weights)"
    }
  ],
  children: []
},
{
  id: "learning_fair_representations",
  title: "Learning Fair Representations",
  subtitle: "Técnicas para aprender representaciones de datos libres de sesgo",
  content: [
    {
      type: "text",
      value: "Learning Fair Representations (LFR) es un enfoque de preprocesamiento que transforma los datos originales en una nueva representación que maximiza la utilidad para la tarea de predicción mientras minimiza la información sobre atributos sensibles."
    },
    {
      type: "img",
      value: "Diagrama de flujo del proceso LFR mostrando la transformación de datos originales a representación justa"
    },
    {
      type: "text",
      value: "El proceso consta de tres pasos clave:"
    },
    {
      type: "list",
      value: [
        "Mapear los datos originales a una representación intermedia",
        "Aplicar restricciones de equidad durante el aprendizaje",
        "Mapear la representación intermedia a predicciones"
      ]
    },
    {
      type: "code",
      value: `# Ejemplo conceptual en pseudocódigo
def learn_fair_representation(X, S, y):
    # X: características, S: atributo sensible, y: etiqueta
    encoder = train_encoder(X, S, y, fairness_constraints)
    X_fair = encoder.transform(X)
    return X_fair`
    },
    {
      type: "warning",
      value: "LFR puede reducir la precisión del modelo ya que elimina información potencialmente útil pero sesgada. Es crucial evaluar el trade-off entre equidad y rendimiento."
    }
  ],
  children: []
},
{
  id: "inprocessing",
  title: "Técnicas de Inprocessing",
  subtitle: "Métodos que incorporan equidad durante el entrenamiento del modelo",
  content: [
    {
      type: "text",
      value: "Las técnicas de inprocessing modifican los algoritmos de aprendizaje para incorporar directamente criterios de equidad durante el proceso de entrenamiento. A diferencia del preprocesamiento o postprocesamiento, estos métodos ajustan el propio algoritmo de aprendizaje."
    },
    {
      type: "img",
      value: "Comparación entre preprocesamiento, inprocessing y postprocesamiento mostrando en qué etapa actúa cada enfoque"
    },
    {
      type: "text",
      value: "Ventajas clave:"
    },
    {
      type: "list",
      value: [
        "Pueden lograr mejores equilibrios entre equidad y precisión",
        "No requieren transformación previa o posterior de los datos",
        "Permiten incorporar múltiples métricas de equidad"
      ]
    }
  ],
  children: [
    "costsensitive",
    "fair_constraints",
    "adversarial_debiasing"
  ]
},
{
  id: "costsensitive",
  title: "Aprendizaje Cost-Sensitive",
  subtitle: "Incorporación de costos diferenciales para clases o grupos protegidos",
  content: [
    {
      type: "text",
      value: "Este enfoque asigna diferentes costos a los errores de clasificación para diferentes grupos, penalizando más los errores en grupos desfavorecidos."
    },
    {
      type: "text",
      value: "Cómo funciona:"
    },
    {
      type: "list",
      value: [
        "Se definen matrices de costos asimétricas",
        "El algoritmo optimiza incluyendo estos costos diferenciales",
        "Particularmente útil cuando los datos están desbalanceados"
      ]
    },
    {
      type: "code",
      value: `from sklearn.linear_model import LogisticRegression

# Matriz de costos personalizada
cost_matrix = {
    'privileged': {0: 1, 1: 1},  # Costo normal
    'unprivileged': {0: 2, 1: 1}  # Mayor costo para falsos negativos
}

model = LogisticRegression(class_weight=cost_matrix)
model.fit(X_train, y_train)`
    },
    {
      type: "warning",
      value: "La selección de costos es subjetiva y puede requerir iteración. Monitorizar siempre el impacto tanto en equidad como en rendimiento."
    }
  ],
  children: []
},
{
  id: "fair_constraints",
  title: "Optimización con Restricciones de Equidad",
  subtitle: "Inclusión de restricciones matemáticas durante el entrenamiento",
  content: [
    {
      type: "text",
      value: "Este método formula el problema de aprendizaje como un problema de optimización con restricciones explícitas de equidad."
    },
    {
      type: "img",
      value: "Visualización de un espacio de parámetros con restricciones de equidad mostrando la región factible"
    },
    {
      type: "text",
      value: "Tipos comunes de restricciones:"
    },
    {
      type: "list",
      value: [
        "Paridad demográfica: P(Ŷ=1|S=0) = P(Ŷ=1|S=1)",
        "Igualdad de oportunidades: TPR igual entre grupos",
        "Igualdad de odds: TPR y FPR iguales entre grupos"
      ]
    },
    {
      type: "code",
      value: `# Pseudocódigo para formulación de optimización
minimize loss(θ)
subject to:
    |P(Ŷ=1|S=0) - P(Ŷ=1|S=1)| ≤ ε  # Restricción de paridad
    accuracy(θ) ≥ threshold`
    },
    {
      type: "text",
      value: "Ventajas:"
    },
    {
      type: "list",
      value: [
        "Control explícito sobre las métricas de equidad",
        "Flexibilidad para incorporar múltiples restricciones",
        "Formulación matemática rigurosa"
      ]
    }
  ],
  children: []
},
{
  id: "adversarial_debiasing",
  title: "Debiasing Adversarial",
  subtitle: "Uso de redes antagónicas para eliminar sesgos",
  content: [
    {
      type: "text",
      value: "Técnica que utiliza un framework adversarial donde un predictor principal aprende a realizar la tarea principal mientras un adversario intenta predecir el atributo sensible a partir de las predicciones."
    },
    {
      type: "img",
      value: "Arquitectura de red adversarial mostrando el predictor principal y el discriminador"
    },
    {
      type: "text",
      value: "Componentes clave:"
    },
    {
      type: "list",
      value: [
        "Predictor principal: Realiza la tarea de predicción objetivo",
        "Adversario: Intenta predecir el atributo protegido",
        "Pérdida adversarial: Penaliza al predictor principal por información que permite predecir el atributo sensible"
      ]
    },
    {
      type: "code",
      value: `import tensorflow as tf

# Arquitectura simplificada
main_model = tf.keras.Sequential([...])  # Predictor principal
adversary = tf.keras.Sequential([...])   # Adversario

# Función de pérdida combinada
total_loss = main_loss - λ * adversary_loss  # λ controla el trade-off`
    },
    {
      type: "warning",
      value: "El entrenamiento adversarial puede ser inestable. Requiere cuidadoso ajuste de hiperparámetros y posiblemente técnicas de regularización."
    }
  ],
  children: []
},
{
  id: "postprocessing",
  title: "Técnicas de Postprocessing",
  subtitle: "Ajuste de predicciones después del entrenamiento para mejorar equidad",
  content: [
    {
      type: "text",
      value: "Las técnicas de postprocessing modifican las predicciones de un modelo ya entrenado para satisfacer criterios de equidad, sin alterar el modelo subyacente."
    },
    {
      type: "img",
      value: "Flujo de trabajo de postprocessing mostrando el ajuste de umbrales o transformación de predicciones"
    },
    {
      type: "text",
      value: "Cuándo usar postprocessing:"
    },
    {
      type: "list",
      value: [
        "Cuando no se puede modificar el modelo de aprendizaje",
        "Para cumplir rápidamente con regulaciones de equidad",
        "Como solución temporal mientras se desarrollan modelos más justos"
      ]
    }
  ],
  children: [
    "equalized_odds",
    "reject_option"
  ]
},
{
  id: "equalized_odds",
  title: "Ajuste para Equalized Odds",
  subtitle: "Método para igualar tasas de verdaderos y falsos positivos entre grupos",
  content: [
    {
      type: "text",
      value: "Equalized Odds postprocessing ajusta las predicciones para garantizar que los ratios de verdaderos positivos (TPR) y falsos positivos (FPR) sean iguales across grupos protegidos."
    },
    {
      type: "text",
      value: "Implementación típica:"
    },
    {
      type: "list",
      value: [
        "Calibrar umbrales de decisión por grupo",
        "Aplicar transformaciones probabilísticas",
        "Optimizar para minimizar cambios en la precisión"
      ]
    },
    {
      type: "code",
      value: `from fairlearn.postprocessing import ThresholdOptimizer

postprocessor = ThresholdOptimizer(
    estimator=model,
    constraints="equalized_odds",
    prefit=True
)
postprocessor.fit(X_test, y_test, sensitive_features=S_test)
fair_predictions = postprocessor.predict(X_new, sensitive_features=S_new)`
    },
    {
      type: "warning",
      value: "Este método requiere acceso a los atributos sensibles en tiempo de inferencia, lo que puede no ser siempre posible o deseable."
    }
  ],
  children: []
},
{
  id: "reject_option",
  title: "Reject Option Classification",
  subtitle: "Sistema de rechazo para casos cercanos al límite de decisión",
  content: [
    {
      type: "text",
      value: "Técnica que identifica instancias cerca del límite de decisión del clasificador y las asigna a la clase favorable para grupos desfavorecidos, mejorando la equidad."
    },
    {
      type: "img",
      value: "Diagrama de límite de decisión mostrando la región de rechazo y reasignación"
    },
    {
      type: "text",
      value: "Pasos clave:"
    },
    {
      type: "list",
      value: [
        "Identificar región de rechazo (ej. donde 0.4 < P(y=1) < 0.6)",
        "Para instancias en esta región:",
        "   - Si pertenece a grupo privilegiado: asignar clase desfavorable",
        "   - Si pertenece a grupo no privilegiado: asignar clase favorable"
      ]
    },
    {
      type: "text",
      value: "Ventajas:"
    },
    {
      type: "list",
      value: [
        "Simple de implementar sobre cualquier clasificador existente",
        "No requiere retraining del modelo",
        "Efectivo para mejorar métricas de equidad"
      ]
    }
  ],
  children: []
},
{
  id: "bias_herramientas",
  title: "Herramientas para Equidad en ML",
  subtitle: "Librerías y frameworks para implementar algoritmos justos",
  content: [
    {
      type: "text",
      value: "Existen varias herramientas open-source que facilitan la implementación de técnicas de machine learning justo, desde detección de sesgos hasta mitigación y evaluación."
    },
    {
      type: "img",
      value: "Comparativo de herramientas mostrando IBM AIF360, Fairlearn, What-If Tool y LightGBM"
    },
    {
      type: "text",
      value: "Criterios para elegir herramienta:"
    },
    {
      type: "list",
      value: [
        "Tipos de sesgo que puede detectar/mitigar",
        "Métricas de equidad implementadas",
        "Integración con tu stack tecnológico",
        "Facilidad de uso y documentación"
      ]
    }
  ],
  children: [
    "ibm_aif360",
    "fairlearn",
    "whatif_tool",
    "lightgbm"
  ]
},
{
  id: "ibm_aif360",
  title: "IBM AI Fairness 360 (AIF360)",
  subtitle: "Kit de herramientas completo para equidad en ML",
  content: [
    {
      type: "text",
      value: "AIF360 es un conjunto comprehensivo de métricas, algoritmos y visualizaciones para detectar y mitigar sesgos en modelos de machine learning."
    },
    {
      type: "text",
      value: "Características principales:"
    },
    {
      type: "list",
      value: [
        "70+ métricas de equidad",
        "Algoritmos de mitigación en todas las etapas (pre, in, post processing)",
        "Interfaz unificada para múltiples técnicas",
        "Soporte para Python"
      ]
    },
    {
      type: "code",
      value: `from aif360.sklearn.metrics import statistical_parity_difference

# Calcular métrica de equidad
spd = statistical_parity_difference(y_true, y_pred, 
                                  sensitive_features=S)
print(f"Statistical Parity Difference: {spd:.3f}")`
    },
    {
      type: "warning",
      value: "AIF360 tiene una curva de aprendizaje pronunciada debido a su amplia funcionalidad. Recomendado para usuarios con experiencia en equidad algorítmica."
    }
  ],
  children: []
},
{
  id: "fairlearn",
  title: "Fairlearn",
  subtitle: "Herramienta de Microsoft para ML justo",
  content: [
    {
      type: "text",
      value: "Fairlearn es un paquete Python que permite evaluar la equidad de modelos de ML y mitigar sesgos injustos."
    },
    {
      type: "text",
      value: "Funcionalidades destacadas:"
    },
    {
      type: "list",
      value: [
        "Dashboard interactivo para evaluación de equidad",
        "Algoritmos de mitigación como GridSearch reducido",
        "Integración con scikit-learn",
        "Métricas de equidad para múltiples grupos"
      ]
    },
    {
      type: "code",
      value: `from fairlearn.widget import FairlearnDashboard

# Visualización interactiva
FairlearnDashboard(
    sensitive_features=S_test,
    sensitive_feature_names=['gender'],
    y_true=y_test,
    y_pred={ 'model': model.predict(X_test) }
)`
    },
    {
      type: "text",
      value: "Ventajas:"
    },
    {
      type: "list",
      value: [
        "Interfaz amigable para análisis exploratorio",
        "Buen equilibrio entre simplicidad y funcionalidad",
        "Activo desarrollo y soporte"
      ]
    }
  ],
  children: []
},
{
  id: "whatif_tool",
  title: "What-If Tool (WIT)",
  subtitle: "Visualización interactiva para análisis de modelos",
  content: [
    {
      type: "text",
      value: "Desarrollado por Google, WIT permite analizar modelos de ML sin código a través de una interfaz visual, incluyendo evaluación de equidad."
    },
    {
      type: "img",
      value: "Captura de pantalla del What-If Tool mostrando análisis de equidad"
    },
    {
      type: "text",
      value: "Características únicas:"
    },
    {
      type: "list",
      value: [
        "Interfaz gráfica interactiva",
        "Análisis de contrafactuales",
        "Visualización de límites de decisión",
        "Pruebas de equidad con diferentes thresholds"
      ]
    },
    {
      type: "text",
      value: "Ideal para:"
    },
    {
      type: "list",
      value: [
        "Comunicar resultados a partes interesadas no técnicas",
        "Exploración rápida de sesgos potenciales",
        "Prototipado y análisis inicial de modelos"
      ]
    }
  ],
  children: []
},
{
  id: "lightgbm",
  title: "LightGBM con Equidad",
  subtitle: "Uso de boosting con restricciones de equidad",
  content: [
    {
      type: "text",
      value: "LightGBM puede ser extendido para incorporar consideraciones de equidad mediante parámetros personalizados y funciones de pérdida modificadas."
    },
    {
      type: "text",
      value: "Enfoques comunes:"
    },
    {
      type: "list",
      value: [
        "Funciones de pérdida personalizadas que penalizan disparidades",
        "Pesos diferenciales por grupo sensible",
        "Postprocessing de las predicciones"
      ]
    },
    {
      type: "code",
      value: `import lightgbm as lgb

# Definir función de pérdida con penalización de equidad
def fair_loss(y_true, y_pred):
    grad = ...  # Gradiente estándar + término de equidad
    hess = ...  # Hessiano estándar + término de equidad
    return grad, hess

model = lgb.LGBMClassifier(objective=fair_loss)
model.fit(X_train, y_train)`
    },
    {
      type: "warning",
      value: "Implementar equidad directamente en LightGBM requiere buen entendimiento tanto del algoritmo como de las métricas de equidad. Para muchos casos, es preferible usar wrappers como los de Fairlearn."
    }
  ],
  children: []
},
{
  id: "agentes_de_ia",
  title: "Agentes de Inteligencia Artificial",
  subtitle: "Sistemas autónomos que perciben y actúan en entornos",
  content: [
    {
      type: "text",
      value: "Los agentes de IA son entidades computacionales que perciben su entorno a través de sensores y actúan sobre él mediante actuadores, con el objetivo de alcanzar metas específicas. Estos agentes pueden variar desde simples sistemas de reglas hasta complejas arquitecturas cognitivas."
    },
    {
      type: "img",
      value: "Diagrama conceptual de un agente de IA mostrando percepción, procesamiento y acción"
    },
    {
      type: "text",
      value: "Componentes fundamentales de todo agente:"
    },
    {
      type: "list",
      value: [
        "Módulo de percepción (input)",
        "Sistema de procesamiento/razonamiento",
        "Módulo de acción (output)",
        "Mecanismo de retroalimentación"
      ]
    },
    {
      type: "warning",
      value: "No confundir agentes con modelos de ML tradicionales. Los agentes tienen capacidad de acción autónoma y persiguen objetivos de forma activa."
    }
  ],
  children: [
    "agente_interaccion",
    "agente_arquitecturas",
    "agente_funcionalidades",
    "agente_frameworks"
  ]
},
{
  id: "agente_interaccion",
  title: "Tipos de Interacción entre Agentes",
  subtitle: "Single-agent vs Multi-agent Systems",
  content: [
    {
      type: "text",
      value: "Los sistemas de agentes se clasifican según su patrón de interacción en dos categorías fundamentales:"
    },
    {
      type: "text",
      value: "1. Sistemas Single-Agent:"
    },
    {
      type: "list",
      value: [
        "Agente único operando en un entorno",
        "Toma decisiones independientes",
        "Ejemplo: Asistente personal virtual",
        "Ventaja: Simplicidad de diseño",
        "Desafío: Limitaciones en tareas complejas"
      ]
    },
    {
      type: "code",
      value: `# Ejemplo conceptual de single-agent
class PersonalAssistant:
    def __init__(self):
        self.memory = MemoryModule()
        self.planner = PlannerModule()
        
    def perceive(self, input):
        return process_input(input)
        
    def act(self, decision):
        execute_action(decision)`
    },
    {
      type: "text",
      value: "2. Sistemas Multi-Agent (MAS):"
    },
    {
      type: "list",
      value: [
        "Múltiples agentes interactuando",
        "Pueden cooperar o competir",
        "Ejemplo: Sistema de trading algorítmico",
        "Ventaja: Resolución distribuida de problemas",
        "Desafío: Coordinación y comunicación"
      ]
    },
    {
      type: "img",
      value: "Arquitectura de sistema multi-agente mostrando comunicación y coordinación"
    },
    {
      type: "warning",
      value: "En sistemas multi-agente, emergen propiedades globales no presentes en agentes individuales (inteligencia de enjambre, comportamientos colectivos)."
    }
  ],
  children: []
},
{
  id: "agente_arquitecturas",
  title: "Arquitecturas de Agentes",
  subtitle: "Diseños estructurales para sistemas agentivos",
  content: [
    {
      type: "text",
      value: "Las arquitecturas de agentes determinan cómo se organizan los componentes internos para procesar información y tomar decisiones. Los principales patrones arquitectónicos incluyen:"
    },
    {
      type: "text",
      value: "1. Arquitectura de Planificación:"
    },
    {
      type: "list",
      value: [
        "Basada en búsqueda y planificación clásica",
        "Genera secuencias de acciones para alcanzar metas",
        "Ideal para entornos deterministas",
        "Limitación: Poco flexible en entornos dinámicos"
      ]
    },
    {
      type: "text",
      value: "2. Arquitectura Jerárquica:"
    },
    {
      type: "list",
      value: [
        "Organizada en niveles de abstracción",
        "Alto nivel: Metas estratégicas",
        "Bajo nivel: Ejecución táctica",
        "Ventaja: Manejo de complejidad",
        "Ejemplo: Agentes para videojuegos AAA"
      ]
    },
    {
      type: "img",
      value: "Diagrama de arquitectura jerárquica mostrando capas de control"
    },
    {
      type: "text",
      value: "3. Arquitectura Modular:"
    },
    {
      type: "list",
      value: [
        "Componentes especializados independientes",
        "Módulos intercambiables",
        "Fácil mantenimiento y actualización",
        "Ejemplo: Asistente con módulos separados para NLP, búsqueda, etc."
      ]
    },
    {
      type: "text",
      value: "4. Arquitectura Event-Driven:"
    },
    {
      type: "list",
      value: [
        "Reacciona a eventos en tiempo real",
        "Baja latencia en respuestas",
        "Escalable para entornos dinámicos",
        "Uso común: Sistemas de trading, IoT"
      ]
    },
    {
      type: "code",
      value: `// Pseudocódigo para agente event-driven
class EventDrivenAgent {
  constructor() {
    this.eventHandlers = {
      'urgent': this.handleUrgent,
      'normal': this.handleNormal
    };
  }

  onEvent(event) {
    const handler = this.eventHandlers[event.type];
    handler(event.data);
  }
}`
    }
  ],
  children: []
},
{
  id: "agente_funcionalidades",
  title: "Funcionalidades Avanzadas de Agentes",
  subtitle: "Componentes clave para agentes inteligentes",
  content: [
    {
      type: "text",
      value: "Los agentes modernos incorporan diversas capacidades avanzadas que les permiten operar efectivamente en entornos complejos. Estas funcionalidades pueden combinarse según los requerimientos del sistema."
    },
    {
      type: "img",
      value: "Diagrama de componentes funcionales de un agente avanzado"
    },
    {
      type: "text",
      value: "Principales funcionalidades:"
    },
    {
      type: "list",
      value: [
        "Memoria para retención de contexto",
        "Planificación para secuenciación de acciones",
        "Integración con herramientas externas",
        "Uso de embeddings para comprensión semántica",
        "Mecanismos de handoff para transferencia controlada"
      ]
    }
  ],
  children: [
    "memoria",
    "planner",
    "herramientas",
    "embeddings",
    "handoffs"
  ]
},
{
  id: "memoria",
  title: "Sistemas de Memoria para Agentes",
  subtitle: "Retención y recuperación de contexto",
  content: [
    {
      type: "text",
      value: "Los sistemas de memoria permiten a los agentes mantener contexto entre interacciones, esencial para conversaciones prolongadas y toma de decisiones informada."
    },
    {
      type: "text",
      value: "Tipos de memoria en agentes:"
    },
    {
      type: "list",
      value: [
        "Memoria a corto plazo: Contexto inmediato (ej: ventana de contexto LLM)",
        "Memoria a largo plazo: Almacenamiento persistente (vectores, bases de datos)",
        "Memoria episódica: Registro de interacciones pasadas",
        "Memoria procedimental: Almacenamiento de habilidades aprendidas"
      ]
    },
    {
      type: "code",
      value: `# Ejemplo de implementación de memoria vectorial
from langchain.vectorstores import FAISS
from langchain.embeddings import OpenAIEmbeddings

class AgentMemory:
    def __init__(self):
        self.vector_db = FAISS(OpenAIEmbeddings())
        self.chat_history = []
        
    def remember(self, text: str):
        self.vector_db.add_texts([text])
        
    def recall(self, query: str) -> list:
        return self.vector_db.similarity_search(query)`
    },
    {
      type: "warning",
      value: "El diseño de sistemas de memoria debe considerar privacidad y gestión de datos sensibles, especialmente en aplicaciones que manejan información personal."
    }
  ],
  children: []
},
{
  id: "planner",
  title: "Sistemas de Planificación",
  subtitle: "Generación y ejecución de planes de acción",
  content: [
    {
      type: "text",
      value: "Los módulos de planificación permiten a los agentes descomponer metas complejas en secuencias accionables de pasos intermedios."
    },
    {
      type: "img",
      value: "Flujo de trabajo de planificación mostrando descomposición jerárquica de tareas"
    },
    {
      type: "text",
      value: "Enfoques modernos:"
    },
    {
      type: "list",
      value: [
        "Planificación clásica (STRIPS, PDDL)",
        "Planificación basada en modelos de lenguaje",
        "Planificación reactiva (replanificación dinámica)",
        "Planificación jerárquica (HTN)"
      ]
    },
    {
      type: "code",
      value: `// Ejemplo de planificador simple
class TaskPlanner {
  generatePlan(goal) {
    const steps = [];
    // Lógica de descomposición
    if (goal === 'organizar_reunion') {
      steps.push('buscar_disponibilidad');
      steps.push('enviar_invitaciones');
      steps.push('confirmar_asistentes');
    }
    return new Plan(steps);
  }
}`
    },
    {
      type: "text",
      value: "Buenas prácticas:"
    },
    {
      type: "list",
      value: [
        "Implementar mecanismos de replanificación",
        "Incluir verificaciones de viabilidad",
        "Priorizar flexibilidad sobre optimalidad en entornos dinámicos"
      ]
    }
  ],
  children: []
},
{
  id: "embeddings",
  title: "Uso de Embeddings en Agentes",
  subtitle: "Representación semántica para comprensión contextual",
  content: [
    {
      type: "text",
      value: "Los embeddings permiten a los agentes trabajar con representaciones vectoriales de información, facilitando comparaciones semánticas y recuperación de conocimiento relevante."
    },
    {
      type: "text",
      value: "Aplicaciones clave:"
    },
    {
      type: "list",
      value: [
        "Búsqueda semántica en bases de conocimiento",
        "Clustering de información relacionada",
        "Detección de similitud entre intenciones",
        "Personalización basada en patrones históricos"
      ]
    },
    {
      type: "img",
      value: "Visualización 2D de embeddings mostrando agrupamiento semántico"
    },
    {
      type: "code",
      value: `from sentence_transformers import SentenceTransformer

class SemanticProcessor:
    def __init__(self):
        self.model = SentenceTransformer('all-MiniLM-L6-v2')
        
    def get_embedding(self, text):
        return self.model.encode(text)
        
    def semantic_similarity(self, text1, text2):
        emb1 = self.get_embedding(text1)
        emb2 = self.get_embedding(text2)
        return cosine_similarity(emb1, emb2)`
    },
    {
      type: "warning",
      value: "Los embeddings pueden capturar y amplificar sesgos presentes en los datos de entrenamiento. Es crucial implementar técnicas de mitigación."
    }
  ],
  children: []
},
{
  id: "handoffs",
  title: "Mecanismos de Handoff",
  subtitle: "Transferencia controlada entre agentes o sistemas",
  content: [
    {
      type: "text",
      value: "Los handoffs permiten la transferencia fluida de control entre agentes o componentes, esencial en sistemas complejos con especialización de funciones."
    },
    {
      type: "text",
      value: "Patrones comunes:"
    },
    {
      type: "list",
      value: [
        "Handoff humano-agente: Escalado a operador humano",
        "Handoff agente-agente: Transferencia entre agentes especializados",
        "Handoff vertical: De agente generalista a especialista",
        "Handoff horizontal: Entre agentes del mismo nivel"
      ]
    },
    {
      type: "img",
      value: "Diagrama de flujo de handoff mostrando puntos de transferencia"
    },
    {
      type: "text",
      value: "Consideraciones críticas:"
    },
    {
      type: "list",
      value: [
        "Consistencia de contexto durante la transferencia",
        "Sincronización de estados internos",
        "Mecanismos de rollback ante fallos",
        "Registro completo para auditoría"
      ]
    }
  ],
  children: []
},
{
  id: "agente_frameworks",
  title: "Frameworks para Desarrollo de Agentes",
  subtitle: "Herramientas modernas para construir sistemas agentivos",
  content: [
    {
      type: "text",
      value: "Existen diversos frameworks que facilitan el desarrollo de agentes inteligentes, proporcionando abstracciones para manejar conversaciones, estados, herramientas y flujos de trabajo complejos."
    },
    {
      type: "img",
      value: "Comparativa de frameworks para desarrollo de agentes"
    },
    {
      type: "text",
      value: "Criterios de selección:"
    },
    {
      type: "list",
      value: [
        "Soporte para arquitecturas complejas",
        "Integración con modelos de lenguaje",
        "Capacidades de orquestación",
        "Herramientas de monitoreo y debugging",
        "Comunidad activa y documentación"
      ]
    }
  ],
  children: [
    "langgraph",
    "autogpt",
    "semantic_kernel"
  ]
},
{
  id: "langgraph",
  title: "LangGraph",
  subtitle: "Framework para construir agentes con flujos de estado",
  content: [
    {
      type: "text",
      value: "LangGraph extiende LangChain permitiendo la construcción de agentes con flujos de trabajo complejos y estado persistente, ideal para aplicaciones que requieren ciclos de retroalimentación."
    },
    {
      type: "text",
      value: "Características principales:"
    },
    {
      type: "list",
      value: [
        "Modelado de flujos como grafos",
        "Manejo explícito de estado",
        "Soporte para ejecución paralela",
        "Integración con herramientas LangChain",
        "Facilita arquitecturas multi-agente"
      ]
    },
    {
      type: "code",
      value: `from langgraph.graph import Graph
from langgraph.prebuilt import chat_agent_executor

# Definir flujo del agente
workflow = Graph()
workflow.add_node("agent", chat_agent_executor)
workflow.add_node("tools", execute_tools)
workflow.add_edge("agent", "tools")
workflow.add_edge("tools", "agent")
workflow.set_entry_point("agent")

# Compilar y ejecutar
agent = workflow.compile()
agent.invoke({"input": "Hola, necesito ayuda..."})`
    },
    {
      type: "warning",
      value: "LangGraph tiene una curva de aprendizaje más pronunciada que LangChain básico. Recomendado para casos donde se necesite control granular sobre el flujo de ejecución."
    }
  ],
  children: []
},
{
  id: "autogpt",
  title: "AutoGPT",
  subtitle: "Agente autónomo de propósito general",
  content: [
    {
      type: "text",
      value: "AutoGPT es un agente experimental que combina LLMs con capacidades de bucle autónomo, permitiéndole perseguir metas complejas con mínima intervención humana."
    },
    {
      type: "img",
      value: "Arquitectura de AutoGPT mostrando el ciclo de percepción-decisión-acción"
    },
    {
      type: "text",
      value: "Mecanismos clave:"
    },
    {
      type: "list",
      value: [
        "Auto-prompting recursivo",
        "Gestión autónoma de sub-tareas",
        "Integración con navegador web y herramientas",
        "Memoria persistente en archivos",
        "Mecanismo de autoverificación"
      ]
    },
    {
      type: "text",
      value: "Casos de uso típicos:"
    },
    {
      type: "list",
      value: [
        "Investigación automatizada",
        "Generación de contenido complejo",
        "Automatización de flujos de trabajo",
        "Prototipado rápido de ideas"
      ]
    },
    {
      type: "warning",
      value: "AutoGPT puede generar bucles infinitos o acciones no deseadas. Siempre supervisar ejecuciones y establecer límites claros (presupuesto, tiempo, etc.)."
    }
  ],
  children: []
},
{
  id: "semantic_kernel",
  title: "Semantic Kernel",
  subtitle: "SDK de Microsoft para agentes y aplicaciones AI",
  content: [
    {
      type: "text",
      value: "Semantic Kernel es un SDK ligero que permite integrar modelos de lenguaje con lenguajes de programación tradicionales, facilitando la creación de agentes inteligentes."
    },
    {
      type: "text",
      value: "Ventajas competitivas:"
    },
    {
      type: "list",
      value: [
        "Integración nativa con .NET y Python",
        "Soporte para plugins y habilidades reutilizables",
        "Planificador basado en intenciones",
        "Optimizado para Azure AI services",
        "Patrón de diseño claro y extensible"
      ]
    },
    {
      type: "code",
      value: `// Ejemplo en C#
using Microsoft.SemanticKernel;

var kernel = Kernel.CreateBuilder()
    .AddAzureOpenAIChatCompletion(
        modelId: "gpt-4",
        endpoint: "...",
        apiKey: "...")
    .Build();

// Registrar plugin
kernel.ImportPluginFromObject(new MathPlugin(), "math");

// Ejecutar skill
var result = await kernel.InvokePromptAsync(
    "Calcula el área de un círculo con radio {radius} usando el plugin math");
Console.WriteLine(result);`
    },
    {
      type: "text",
      value: "Ideal para:"
    },
    {
      type: "list",
      value: [
        "Aplicaciones empresariales en stack Microsoft",
        "Sistemas que requieren integración con código tradicional",
        "Desarrolladores que prefieren fuertes tipados"
      ]
    }
  ],
  children: []
},
{
  id: "aplicaciones_extendidas",
  title: "Realidad Extendida (XR)",
  subtitle: "Tecnologías que fusionan el mundo físico y digital",
  content: [
    {
      type: "text",
      value: "La Realidad Extendida (XR) es un término paraguas que engloba tecnologías inmersivas que combinan entornos reales y virtuales, incluyendo Realidad Virtual (VR), Realidad Aumentada (AR) y Realidad Mixta (MR). Estas tecnologías están transformando industrias desde el entretenimiento hasta la medicina."
    },
    {
      type: "img",
      value: "Espectro de Realidad Extendida mostrando la progresión desde entornos completamente reales hasta completamente virtuales"
    },
    {
      type: "text",
      value: "Principales características comparativas:"
    },
    {
      type: "list",
      value: [
        "VR: Entorno completamente digital",
        "AR: Superposición digital sobre el mundo real",
        "MR: Interacción bidireccional entre objetos reales y virtuales"
      ]
    },
    {
      type: "warning",
      value: "La elección de tecnología XR depende del caso de uso. No existe una solución universal - cada formato tiene sus ventajas y limitaciones específicas."
    }
  ],
  children: [
    "vr",
    "ar",
    "mr"
  ]
},
{
  id: "vr",
  title: "Realidad Virtual (VR)",
  subtitle: "Inmersión completa en entornos digitales",
  content: [
    {
      type: "text",
      value: "La Realidad Virtual crea experiencias inmersivas mediante el reemplazo completo del entorno físico por uno generado por computadora, requiriendo normalmente visores especializados como Oculus Rift o HTC Vive."
    },
    {
      type: "img",
      value: "Diagrama de sistema VR mostrando headset, controladores y sistema de tracking"
    },
    {
      type: "text",
      value: "Componentes clave:"
    },
    {
      type: "list",
      value: [
        "Head-Mounted Display (HMD) con pantallas estereoscópicas",
        "Sistema de seguimiento de movimiento (6DoF)",
        "Controladores hápticos",
        "Audio espacial 3D",
        "Motores de renderizado (Unity, Unreal Engine)"
      ]
    },
    {
      type: "text",
      value: "Aplicaciones destacadas:"
    },
    {
      type: "list",
      value: [
        "Entrenamiento industrial (simuladores de vuelo, cirugía)",
        "Terapias de exposición para fobias",
        "Diseño arquitectónico inmersivo",
        "Educación interactiva",
        "Entretenimiento (videojuegos, películas 360°)"
      ]
    },
    {
      type: "code",
      value: `// Ejemplo básico de configuración VR en Unity
using UnityEngine;
using UnityEngine.XR;

public class BasicVRSetup : MonoBehaviour {
    void Start() {
        XRSettings.enabled = true;
        InputTracking.Recenter();
    }
    
    void Update() {
        // Lógica de interacción VR
        if (Input.GetButtonDown("XRI_Right_TriggerButton")) {
            // Acción al presionar trigger
        }
    }
}`
    },
    {
      type: "warning",
      value: "El 'cybersickness' (mareo por movimiento en VR) afecta a un porcentaje significativo de usuarios. Es crucial optimizar frame rates (mínimo 90fps) y reducir latencia (<20ms)."
    }
  ],
  children: []
},
{
  id: "ar",
  title: "Realidad Aumentada (AR)",
  subtitle: "Superposición de contenido digital en el mundo real",
  content: [
    {
      type: "text",
      value: "La Realidad Aumentada enriquece la percepción del entorno físico mediante la superposición de información digital, accesible comúnmente a través de smartphones (como Pokémon GO) o gafas especializadas (Microsoft HoloLens)."
    },
    {
      type: "img",
      value: "Flujo de trabajo AR mostrando detección de marcadores, tracking y renderizado de objetos virtuales"
    },
    {
      type: "text",
      value: "Técnicas fundamentales:"
    },
    {
      type: "list",
      value: [
        "Marker-based AR (detección de patrones visuales)",
        "Markerless AR (usando SLAM para tracking)",
        "Projection-based AR (proyección directa sobre superficies)",
        "Location-based AR (geolocalización)"
      ]
    },
    {
      type: "text",
      value: "Frameworks populares:"
    },
    {
      type: "list",
      value: [
        "ARKit (Apple iOS)",
        "ARCore (Google Android)",
        "Vuforia (multi-plataforma)",
        "WebXR (para navegadores)"
      ]
    },
    {
      type: "code",
      value: `// Ejemplo básico en ARCore (Android)
public class BasicARActivity extends AppCompatActivity {
    private ArFragment arFragment;
    private AnchorNode anchorNode;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        arFragment = (ArFragment) getSupportFragmentManager()
            .findFragmentById(R.id.arFragment);
            
        arFragment.setOnTapArPlaneListener(
            (HitResult hitResult, Plane plane, MotionEvent motionEvent) -> {
                // Colocar objeto 3D al tocar superficie
                Anchor anchor = hitResult.createAnchor();
                anchorNode = new AnchorNode(anchor);
                anchorNode.setParent(arFragment.getArSceneView().getScene());
                
                TransformableNode node = new TransformableNode(...);
                node.setParent(anchorNode);
                node.setRenderable(My3DModel);
                node.select();
            });
    }
}`
    },
    {
      type: "text",
      value: "Retos técnicos:"
    },
    {
      type: "list",
      value: [
        "Oclusión realista de objetos virtuales",
        "Iluminación consistente entre real y virtual",
        "Tracking robusto en diversas condiciones",
        "Optimización para dispositivos móviles"
      ]
    }
  ],
  children: []
},
{
  id: "mr",
  title: "Realidad Mixta (MR)",
  subtitle: "Fusión interactiva de mundos reales y virtuales",
  content: [
    {
      type: "text",
      value: "La Realidad Mixta combina lo mejor de VR y AR, permitiendo que objetos físicos y digitales coexistan e interactúen en tiempo real. Requiere dispositivos como Microsoft HoloLens o Magic Leap que implementan 'display passthrough'."
    },
    {
      type: "img",
      value: "Diagrama de interacción MR mostrando objetos virtuales respondiendo a obstáculos físicos"
    },
    {
      type: "text",
      value: "Características distintivas:"
    },
    {
      type: "list",
      value: [
        "Persistencia de objetos virtuales en espacio físico",
        "Interacción bidireccional (virtual afecta real y viceversa)",
        "Comprensión avanzada del entorno (mesh 3D, planos)",
        "Colaboración multi-usuario en espacios compartidos"
      ]
    },
    {
      type: "text",
      value: "Casos de uso avanzados:"
    },
    {
      type: "list",
      value: [
        "Prototipado industrial colaborativo",
        "Visualización científica de datos espaciales",
        "Telepresencia holográfica",
        "Entrenamiento militar/medico con simulación física"
      ]
    },
    {
      type: "code",
      value: `// Pseudocódigo para interacción MR en HoloLens
void OnSceneLoaded(MixedRealitySceneUnderstanding scene) {
    // Procesar malla del entorno real
    var floor = scene.FindFloor();
    var walls = scene.FindWalls();
    
    // Colocar objeto virtual que respeta física real
    var virtualObj = new Hologram("3DModel");
    virtualObj.AlignToSurface(floor);
    virtualObj.EnablePhysicsCollisions(walls);
    
    // Gestión de interacción
    virtualObj.OnTapped += (args) => {
        args.Handled = true;
        virtualObj.Animate("Interact");
    };
}`
    },
    {
      type: "warning",
      value: "El desarrollo MR requiere considerar el 'espacio de juego' físico del usuario. Los diseños deben adaptarse a diversos tamaños de ambiente y condiciones de iluminación."
    },
    {
      type: "text",
      value: "Tendencias futuras:"
    },
    {
      type: "list",
      value: [
        "Gafas MR con campo de visión ampliado (>100°)",
        "Integración con IA para comprensión contextual",
        "Sensores hápticos avanzados",
        "Reducción de tamaño y peso de dispositivos"
      ]
    }
  ],
  children: []
},
{
  id: "interpretable_ai",
  title: "Interpretable AI: Modelos Explicables en Ciencia de Datos",
  subtitle: "Técnicas para construir modelos de machine learning interpretables",
  content: [
    {
      type: "text",
      value: "En el mundo actual dominado por la IA, la interpretabilidad se ha convertido en un requisito crítico. Los modelos interpretables permiten entender cómo toman decisiones, lo cual es esencial en áreas sensibles como medicina, finanzas o justicia."
    },
    {
      type: "img",
      value: "Diagrama comparativo entre modelos black-box y modelos interpretables, mostrando el trade-off entre precisión e interpretabilidad"
    },
    {
      type: "text",
      value: "Existen múltiples enfoques para lograr interpretabilidad:"
    },
    {
      type: "list",
      value: [
        "Modelos intrínsecamente interpretables (como los que veremos en este módulo)",
        "Técnicas post-hoc para explicar modelos complejos (SHAP, LIME)",
        "Visualizaciones y análisis de componentes"
      ]
    },
    {
      type: "warning",
      value: "La interpretabilidad no es binaria: existe en un espectro. El nivel requerido depende del contexto regulatorio, el impacto potencial y la audiencia."
    }
  ],
  children: [
    "glms",
    "gams",
    "rulefit",
    "ebm",
    "gaminet"
  ]
},
{
  id: "glms",
  title: "Modelos Lineales Generalizados (GLMs)",
  subtitle: "Extensión de la regresión lineal para diversos tipos de datos",
  content: [
    {
      type: "text",
      value: "Los GLMs extienden los modelos lineales tradicionales para trabajar con distribuciones no normales, manteniendo la interpretabilidad lineal."
    },
    {
      type: "img",
      value: "Esquema mostrando la relación entre variables predictoras, función de enlace y variable respuesta en GLMs"
    },
    {
      type: "text",
      value: "Componentes clave de un GLM:"
    },
    {
      type: "list",
      value: [
        "Función de enlace: conecta el predictor lineal con la media de la variable respuesta",
        "Familia de distribuciones: binomial, Poisson, gamma, etc.",
        "Predictor lineal: η = Xβ (igual que en regresión lineal)"
      ]
    },
    {
      type: "code",
      value: `// Ejemplo en R usando glm()
modelo_glm <- glm(
  formula = target ~ .,
  family = binomial(link = "logit"),  # Regresión logística
  data = datos
)
summary(modelo_glm)  # Muestra coeficientes interpretables`
    },
    {
      type: "text",
      value: "Casos de uso comunes:"
    },
    {
      type: "list",
      value: [
        "Clasificación binaria (regresión logística)",
        "Modelado de conteos (regresión Poisson)",
        "Datos con distribución gamma (como seguros o ingresos)"
      ]
    },
    {
      type: "warning",
      value: "Los GLMs asumen independencia lineal de características. Para relaciones no lineales, considera GAMs o transformaciones de variables."
    }
  ],
  children: []
},
{
  id: "gams",
  title: "Modelos Aditivos Generalizados (GAMs)",
  subtitle: "Extensión no paramétrica de GLMs que captura relaciones no lineales",
  content: [
    {
      type: "text",
      value: "Los GAMs relajan el supuesto de linealidad de los GLMs, permitiendo que cada característica contribuya a través de una función suave (spline), manteniendo la aditividad."
    },
    {
      type: "img",
      value: "Comparación visual entre un GLM lineal y un GAM con funciones spline para cada característica"
    },
    {
      type: "text",
      value: "Ventajas clave:"
    },
    {
      type: "list",
      value: [
        "Capturan relaciones no lineales sin perder interpretabilidad",
        "Visualización intuitiva de efectos parciales",
        "Menos propensos a overfitting que modelos completamente no paramétricos"
      ]
    },
    {
      type: "code",
      value: `# Ejemplo en Python usando pyGAM
from pygam import LogisticGAM, s

gam = LogisticGAM(
  terms=s(0) + s(1) + s(2),  # Splines para cada característica
  fit_intercept=True
).fit(X, y)

# Visualización de efectos parciales
for i, term in enumerate(gam.terms):
    if term.isintercept:
        continue
    plt.plot(gam.partial_dependence(term=i))
    plt.title(f"Efecto parcial para X[{i}]")`
    },
    {
      type: "text",
      value: "Consideraciones importantes:"
    },
    {
      type: "list",
      value: [
        "La elección de la suavidad (smoothing) es crucial",
        "Computacionalmente más costosos que GLMs",
        "Dificultad para capturar interacciones entre variables"
      ]
    }
  ],
  children: []
},
{
  id: "rulefit",
  title: "RuleFit: Modelos basados en reglas",
  subtitle: "Combinación de árboles de decisión y modelos lineales para interpretabilidad",
  content: [
    {
      type: "text",
      value: "RuleFit genera un conjunto de reglas a partir de un ensemble de árboles (como Random Forest), luego las incluye en un modelo lineal ponderado junto con las variables originales."
    },
    {
      type: "img",
      value: "Diagrama de flujo del proceso RuleFit: de árboles a reglas a modelo lineal"
    },
    {
      type: "text",
      value: "Por qué usar RuleFit:"
    },
    {
      type: "list",
      value: [
        "Captura interacciones complejas mediante reglas",
        "Mantiene interpretabilidad al usar representación lineal",
        "Combina lo mejor de árboles y modelos lineales"
      ]
    },
    {
      type: "code",
      value: `# Ejemplo usando el paquete rulefit en Python
from rulefit import RuleFit

# Entrenamiento del modelo
rulefit = RuleFit(
  rfmode='regress',  # También puede ser 'classify'
  max_rules=100,
  tree_size=4
)
rulefit.fit(X_train, y_train)

# Reglas más importantes
rules = rulefit.get_rules()
rules = rules[rules.coef != 0].sort_values("importance", ascending=False)`
    },
    {
      type: "warning",
      value: "RuleFit puede generar muchas reglas. Es crucial filtrar las más importantes para mantener la interpretabilidad."
    }
  ],
  children: []
},
{
  id: "ebm",
  title: "Explainable Boosting Machines (EBM)",
  subtitle: "Modelos aditivos modernos con detección automática de interacciones",
  content: [
    {
      type: "text",
      value: "Desarrollado por Microsoft Research, EBM es una implementación de GAM que usa boosting de manera inteligente, con detección automática de interacciones entre pares de variables."
    },
    {
      type: "img",
      value: "Visualización de los componentes de un EBM mostrando efectos principales e interacciones"
    },
    {
      type: "text",
      value: "Características distintivas:"
    },
    {
      type: "list",
      value: [
        "Entrenamiento cíclico para evitar overfitting",
        "Detección automática de interacciones relevantes",
        "Exactitud comparable a Random Forest pero totalmente interpretable"
      ]
    },
    {
      type: "code",
      value: `# Ejemplo usando interpretml
from interpret.glassbox import ExplainableBoostingClassifier

ebm = ExplainableBoostingClassifier(
  interactions=2,  # Permite interacciones de hasta 2 variables
  outer_bags=10,
  inner_bags=5
)

ebm.fit(X_train, y_train)

# Visualización global
ebm_global = ebm.explain_global()
show(ebm_global)

# Visualización para una instancia específica
ebm_local = ebm.explain_local(X_test[:5], y_test[:5])
show(ebm_local)`
    },
    {
      type: "text",
      value: "Ventajas prácticas:"
    },
    {
      type: "list",
      value: [
        "No requiere tuning extensivo de hiperparámetros",
        "Proporciona visualizaciones listas para stakeholders",
        "Implementación eficiente para datasets medianos"
      ]
    }
  ],
  children: []
},
{
  id: "gaminet",
  title: "GAMINet: Redes Neuronales Interpretables",
  subtitle: "Arquitectura híbrida que combina GAMs y redes neuronales",
  content: [
    {
      type: "text",
      value: "GAMINet es un enfoque innovador que mantiene la estructura aditiva de los GAMs pero utiliza componentes neuronales para aprender representaciones más ricas de cada característica."
    },
    {
      type: "img",
      value: "Arquitectura de GAMINet mostrando las redes individuales para cada característica y cómo se combinan aditivamente"
    },
    {
      type: "text",
      value: "Por qué es revolucionario:"
    },
    {
      type: "list",
      value: [
        "Mantiene interpretabilidad a nivel de característica",
        "Captura patrones complejos mediante redes neuronales",
        "Estructura que evita interacciones no deseadas"
      ]
    },
    {
      type: "code",
      value: `# Ejemplo conceptual (implementación varía)
from tensorflow import keras

# Definición de subredes para cada característica
input_layers = [keras.Input(shape=(1,)) for _ in range(n_features)]
subnetworks = [
  keras.Sequential([
    keras.layers.Dense(16, activation='relu'),
    keras.layers.Dense(1)  # Salida unidimensional
  ])(input) for input in input_layers
]

# Combinación aditiva
output = keras.layers.Add()(subnetworks)
model = keras.Model(inputs=input_layers, outputs=output)

# Entrenamiento con interpretabilidad forzada
model.compile(optimizer='adam', loss='mse')
model.fit(
  [X_train[:, i] for i in range(n_features)],
  y_train,
  epochs=50,
  validation_split=0.2
)`
    },
    {
      type: "text",
      value: "Consideraciones clave:"
    },
    {
      type: "list",
      value: [
        "Requiere más datos que GAMs tradicionales",
        "Computacionalmente más intensivo",
        "Implementaciones estables aún emergiendo"
      ]
    },
    {
      type: "warning",
      value: "Aunque GAMINet es interpretable a nivel de características, las transformaciones internas de las subredes pueden ser difíciles de explicar completamente."
    }
  ],
  children: []
},
{
  id: "mlops_y_automatizacion",
  title: "MLOps y Automatización de Machine Learning",
  subtitle: "Estrategias para implementar y mantener sistemas de ML en producción",
  content: [
    {
      type: "text",
      value: "MLOps es la disciplina que combina Machine Learning, DevOps y Data Engineering para llevar modelos de ML a producción de manera eficiente y mantenerlos operativos."
    },
    {
      type: "img",
      value: "Diagrama del ciclo de vida de MLOps mostrando desarrollo, despliegue y monitoreo continuo"
    },
    {
      type: "text",
      value: "Beneficios clave de implementar MLOps:"
    },
    {
      type: "list",
      value: [
        "Reducción del tiempo entre experimentación y producción",
        "Mayor reproducibilidad de los modelos",
        "Detección temprana de concept drift",
        "Escalabilidad de soluciones de ML"
      ]
    },
    {
      type: "warning",
      value: "Sin MLOps, más del 80% de los proyectos de ML nunca llegan a producción o fallan poco después del despliegue."
    }
  ],
  children: [
    "niveles_de_mlops",
    "roles_involucrados",
    "arquitecturas_de_datos",
    "componentes_criticos",
    "metricas_y_validaciones",
    "pipelines_funcionales",
    "herramientas_aws",
    "automl",
    "componentes_del_sistema",
    "herramientas_por_funcion"
  ]
},
{
  id: "niveles_de_mlops",
  title: "Niveles de Madurez en MLOps",
  subtitle: "Evolución desde procesos manuales hasta automatización completa",
  content: [
    {
      type: "text",
      value: "La implementación de MLOps sigue una progresión de madurez que va desde procesos completamente manuales hasta sistemas completamente automatizados con CI/CD/CT (Continuous Training)."
    },
    {
      type: "img",
      value: "Pirámide de madurez de MLOps mostrando los 4 niveles con sus características principales"
    },
    {
      type: "text",
      value: "Factores que determinan el nivel adecuado:"
    },
    {
      type: "list",
      value: [
        "Frecuencia de actualización de modelos requerida",
        "Volumen y velocidad de los datos",
        "Impacto empresarial de los modelos",
        "Recursos del equipo disponible"
      ]
    }
  ],
  children: [
    "nivel_0",
    "nivel_1",
    "nivel_2",
    "nivel_3"
  ]
},
{
  id: "nivel_0",
  title: "Nivel 0: Procesos Manuales",
  subtitle: "Implementación básica sin automatización",
  content: [
    {
      type: "text",
      value: "Características principales del nivel más básico de MLOps:"
    },
    {
      type: "list",
      value: [
        "Todo el proceso es manual: desarrollo, entrenamiento y despliegue",
        "No hay CI/CD pipeline",
        "Monitoreo mínimo o inexistente",
        "Separación clara entre equipos de ciencia de datos e ingeniería"
      ]
    },
    {
      type: "img",
      value: "Flujo manual típico con científicos de datos pasando modelos a ingenieros para implementación"
    },
    {
      type: "text",
      value: "Cuándo usar este nivel:"
    },
    {
      type: "list",
      value: [
        "Pocos despliegues de modelos al año",
        "Equipos pequeños o startups en etapas iniciales",
        "Modelos con bajo impacto empresarial"
      ]
    },
    {
      type: "warning",
      value: "Este enfoque no escala y es propenso a errores humanos en la transición de desarrollo a producción."
    }
  ],
  children: []
},
{
  id: "nivel_1",
  title: "Nivel 1: Automatización del Pipeline de ML",
  subtitle: "Automatización del flujo de entrenamiento de modelos",
  content: [
    {
      type: "text",
      value: "En este nivel se introduce automatización en el proceso de entrenamiento y despliegue de modelos:"
    },
    {
      type: "list",
      value: [
        "Pipeline de entrenamiento automático",
        "Desencadenamiento manual del pipeline",
        "Monitoreo básico del modelo en producción",
        "CI/CD para el código de implementación"
      ]
    },
    {
      type: "code",
      value: `# Ejemplo de pipeline básico con Airflow
with DAG('ml_pipeline', schedule_interval=None) as dag:
    preprocess_task = PythonOperator(
        task_id='preprocess',
        python_callable=preprocess_data
    )
    
    train_task = PythonOperator(
        task_id='train',
        python_callable=train_model
    )
    
    evaluate_task = PythonOperator(
        task_id='evaluate',
        python_callable=evaluate_model
    )
    
    preprocess_task >> train_task >> evaluate_task`
    },
    {
      type: "text",
      value: "Ventajas sobre el nivel 0:"
    },
    {
      type: "list",
      value: [
        "Mayor reproducibilidad de los modelos",
        "Reducción de errores en el proceso de entrenamiento",
        "Documentación implícita del flujo de trabajo"
      ]
    }
  ],
  children: []
},
{
  id: "nivel_2",
  title: "Nivel 2: CI/CD Pipeline Automatizado",
  subtitle: "Automatización completa del ciclo de vida del modelo",
  content: [
    {
      type: "text",
      value: "Este nivel introduce integración y despliegue continuo para los pipelines de ML:"
    },
    {
      type: "list",
      value: [
        "CI/CD para el código del modelo y el pipeline",
        "Automatización de pruebas de modelo",
        "Registro automático de modelos y datos",
        "Monitoreo activo del modelo en producción"
      ]
    },
    {
      type: "img",
      value: "Diagrama de CI/CD pipeline mostrando triggers automáticos para retrenamiento"
    },
    {
      type: "text",
      value: "Componentes clave:"
    },
    {
      type: "list",
      value: [
        "Sistema de control de versiones para código y datos",
        "Registro de modelos (Model Registry)",
        "Sistema de orquestación de pipelines",
        "Herramientas de monitoreo de modelos"
      ]
    }
  ],
  children: []
},
{
  id: "nivel_3",
  title: "Nivel 3: Operaciones Automatizadas",
  subtitle: "Sistemas auto-gestionados con Continuous Training",
  content: [
    {
      type: "text",
      value: "El nivel más avanzado introduce capacidades de auto-gestión y optimización continua:"
    },
    {
      type: "list",
      value: [
        "Continuous Training (retrenamiento automático basado en triggers)",
        "Auto-healing para problemas de rendimiento",
        "A/B testing y canary deployments automatizados",
        "Optimización automática de hiperparámetros en producción"
      ]
    },
    {
      type: "img",
      value: "Arquitectura de auto-reparación mostrando detección de drift y retrenamiento automático"
    },
    {
      type: "text",
      value: "Requisitos para implementar:"
    },
    {
      type: "list",
      value: [
        "Infraestructura cloud o híbrida escalable",
        "Sistema robusto de monitoreo y alertas",
        "Procesos de gobernanza bien definidos",
        "Equipo multidisciplinario especializado"
      ]
    },
    {
      type: "warning",
      value: "Este nivel requiere inversión significativa y solo es necesario para modelos críticos con datos que cambian rápidamente."
    }
  ],
  children: []
},
{
  id: "roles_involucrados",
  title: "Roles en un Equipo de MLOps",
  subtitle: "Responsabilidades y colaboración entre especialistas",
  content: [
    {
      type: "text",
      value: "Implementar MLOps efectivamente requiere la colaboración de varios roles especializados:"
    },
    {
      type: "img",
      value: "Diagrama de Venn mostrando la intersección de habilidades entre roles"
    },
    {
      type: "text",
      value: "La colaboración efectiva entre estos roles es crucial para:"
    },
    {
      type: "list",
      value: [
        "Reducir la deuda técnica en ML",
        "Acelerar el time-to-market de los modelos",
        "Garantizar la calidad y confiabilidad de los sistemas de ML en producción"
      ]
    }
  ],
  children: [
    "data_scientist",
    "machine_learning_engineer",
    "data_engineer",
    "mlops_engineer"
  ]
},
{
  id: "data_scientist",
  title: "Científico de Datos",
  subtitle: "Enfoque en desarrollo y experimentación con modelos",
  content: [
    {
      type: "text",
      value: "Responsabilidades clave:"
    },
    {
      type: "list",
      value: [
        "Desarrollo y experimentación con modelos",
        "Feature engineering y selección de algoritmos",
        "Evaluación de rendimiento de modelos",
        "Prototipado rápido de soluciones"
      ]
    },
    {
      type: "text",
      value: "Habilidades técnicas requeridas:"
    },
    {
      type: "list",
      value: [
        "Python/R avanzado",
        "Frameworks de ML (scikit-learn, TensorFlow, PyTorch)",
        "Análisis estadístico",
        "Visualización de datos"
      ]
    },
    {
      type: "warning",
      value: "Los científicos de datos deben entender las limitaciones de producción para crear modelos más fácilmente implementables."
    }
  ],
  children: []
},
{
  id: "machine_learning_engineer",
  title: "Ingeniero de Machine Learning",
  subtitle: "Puente entre ciencia de datos e ingeniería de software",
  content: [
    {
      type: "text",
      value: "Responsabilidades clave:"
    },
    {
      type: "list",
      value: [
        "Optimización de modelos para producción",
        "Diseño de APIs para servir modelos",
        "Integración con sistemas existentes",
        "Automatización de pipelines de entrenamiento"
      ]
    },
    {
      type: "text",
      value: "Habilidades técnicas requeridas:"
    },
    {
      type: "list",
      value: [
        "Ingeniería de software (OOP, diseño de sistemas)",
        "Frameworks de despliegue (MLflow, Kubeflow)",
        "Computación distribuida",
        "Conocimiento de infraestructura cloud"
      ]
    }
  ],
  children: []
},
{
  id: "data_engineer",
  title: "Ingeniero de Datos",
  subtitle: "Infraestructura y pipelines de datos",
  content: [
    {
      type: "text",
      value: "Responsabilidades clave:"
    },
    {
      type: "list",
      value: [
        "Diseño y mantenimiento de data pipelines",
        "Optimización de almacenes de datos",
        "Garantía de calidad de datos",
        "Gobernanza y seguridad de datos"
      ]
    },
    {
      type: "text",
      value: "Habilidades técnicas requeridas:"
    },
    {
      type: "list",
      value: [
        "SQL avanzado y tecnologías ETL",
        "Big Data (Spark, Hadoop)",
        "Arquitecturas de datos en la nube",
        "Stream processing (Kafka, Flink)"
      ]
    }
  ],
  children: []
},
{
  id: "mlops_engineer",
  title: "Ingeniero de MLOps",
  subtitle: "Especialista en operacionalización de modelos",
  content: [
    {
      type: "text",
      value: "Responsabilidades clave:"
    },
    {
      type: "list",
      value: [
        "Diseño e implementación de infraestructura MLOps",
        "Monitoreo y mantenimiento de modelos en producción",
        "Automatización de CI/CD/CT pipelines",
        "Optimización de costos de infraestructura ML"
      ]
    },
    {
      type: "text",
      value: "Habilidades técnicas requeridas:"
    },
    {
      type: "list",
      value: [
        "DevOps y herramientas cloud",
        "Contenedores y orquestación (Docker, Kubernetes)",
        "Sistemas de monitoreo (Prometheus, Grafana)",
        "Seguridad y compliance en ML"
      ]
    },
    {
      type: "warning",
      value: "Este rol requiere conocimiento tanto de ML como de ingeniería de software y sistemas distribuidos."
    }
  ],
  children: []
},
{
  id: "arquitecturas_de_datos",
  title: "Arquitecturas de Datos para MLOps",
  subtitle: "Patrones para manejar datos en sistemas de ML",
  content: [
    {
      type: "text",
      value: "La arquitectura de datos es fundamental para sistemas MLOps escalables y confiables:"
    },
    {
      type: "img",
      value: "Comparación de arquitecturas de datos mostrando sus diferencias en procesamiento batch y streaming"
    },
    {
      type: "text",
      value: "Criterios para seleccionar arquitectura:"
    },
    {
      type: "list",
      value: [
        "Volumen y velocidad de los datos",
        "Requisitos de latencia para predicciones",
        "Necesidad de reprocesamiento histórico",
        "Recursos de infraestructura disponibles"
      ]
    }
  ],
  children: [
    "lambda_architecture",
    "kappa_architecture",
    "medallion_architecture"
  ]
},
{
  id: "lambda_architecture",
  title: "Arquitectura Lambda",
  subtitle: "Procesamiento dual batch y streaming",
  content: [
    {
      type: "text",
      value: "La arquitectura Lambda combina dos capas para manejar datos en tiempo real e históricos:"
    },
    {
      type: "list",
      value: [
        "Capa batch: Procesamiento completo de todos los datos históricos",
        "Capa speed: Procesamiento en tiempo real de los datos más recientes",
        "Capa serving: Combina resultados de ambas capas para consultas"
      ]
    },
    {
      type: "img",
      value: "Diagrama de arquitectura Lambda mostrando las tres capas y su interacción"
    },
    {
      type: "text",
      value: "Ventajas:"
    },
    {
      type: "list",
      value: [
        "Tolerancia a fallos (la capa batch corrige errores de la capa speed)",
        "Capacidad de reprocesamiento completo",
        "Baja latencia para datos recientes"
      ]
    },
    {
      type: "warning",
      value: "Esta arquitectura puede ser compleja de mantener debido a la necesidad de desarrollar y sincronizar dos pipelines diferentes."
    }
  ],
  children: []
},
{
  id: "kappa_architecture",
  title: "Arquitectura Kappa",
  subtitle: "Sistema unificado basado en streaming",
  content: [
    {
      type: "text",
      value: "La arquitectura Kappa simplifica el diseño procesando todo como stream:"
    },
    {
      type: "list",
      value: [
        "Single pipeline: Todo el procesamiento ocurre en el stream",
        "Reprocesamiento: Se logra reiniciando el stream desde el inicio",
        "Almacenamiento: Log de eventos inmutable como fuente de verdad"
      ]
    },
    {
      type: "code",
      value: `// Ejemplo conceptual con Kafka Streams
KStream<String, Event> stream = builder.stream("input-topic");

// Procesamiento en tiempo real
stream.filter((k, v) -> v.isValid())
      .mapValues(v -> transform(v))
      .to("output-topic");

// Reprocesamiento (mismo código)
KStream<String, Event> reprocess = builder.stream("input-topic", 
    Consumed.with(Serdes.String(), eventSerde)
    .withOffsetResetPolicy(Topology.AutoOffsetReset.EARLIEST);`
    },
    {
      type: "text",
      value: "Cuándo preferir Kappa:"
    },
    {
      type: "list",
      value: [
        "Cuando los requisitos de latencia son extremos",
        "Para sistemas donde la simplicidad es prioridad",
        "Cuando el reprocesamiento es poco frecuente"
      ]
    }
  ],
  children: []
},
{
  id: "medallion_architecture",
  title: "Arquitectura Medallion",
  subtitle: "Enfoque por capas para calidad incremental de datos",
  content: [
    {
      type: "text",
      value: "Popularizada por Databricks, esta arquitectura organiza los datos en capas de calidad creciente:"
    },
    {
      type: "list",
      value: [
        "Bronze: Datos crudos sin transformar",
        "Silver: Datos limpios y validados",
        "Gold: Datos enriquecidos listos para consumo"
      ]
    },
    {
      type: "img",
      value: "Diagrama de flujo de datos a través de las capas bronze, silver y gold"
    },
    {
      type: "text",
      value: "Beneficios para MLOps:"
    },
    {
      type: "list",
      value: [
        "Trazabilidad completa de los datos",
        "Reutilización de datos transformados",
        "Separación clara de responsabilidades",
        "Optimización de costos por capa"
      ]
    }
  ],
  children: []
},
{
  id: "componentes_criticos",
  title: "Componentes Críticos en Sistemas MLOps",
  subtitle: "Elementos esenciales para operacionalizar modelos de ML efectivamente",
  content: [
    {
      type: "text",
      value: "Los sistemas MLOps robustos requieren varios componentes interconectados que garantizan la calidad, confiabilidad y mantenibilidad de los modelos en producción."
    },
    {
      type: "img",
      value: "Diagrama arquitectónico mostrando todos los componentes críticos de MLOps y sus interrelaciones"
    },
    {
      type: "text",
      value: "Estos componentes resuelven desafíos fundamentales:"
    },
    {
      type: "list",
      value: [
        "Mantenimiento continuo de modelos",
        "Garantía de calidad de datos y modelos",
        "Trazabilidad y reproducibilidad",
        "Cumplimiento regulatorio",
        "Eficiencia operacional"
      ]
    }
  ],
  children: [
    "reentrenamiento_y_actualizacion",
    "artefactos_de_modelo_artifacts",
    "pasos_del_pipeline_modularidad",
    "interpretabilidad_explainability",
    "data_drift_y_concept_drift",
    "calidad_del_dato",
    "recoleccion_y_versionado_de_datos",
    "rivacidad_de_datos",
    "abt"
  ]
},
{
  id: "reentrenamiento_y_actualizacion",
  title: "Reentrenamiento y Actualización de Modelos",
  subtitle: "Estrategias para mantener modelos relevantes con datos cambiantes",
  content: [
    {
      type: "text",
      value: "El reentrenamiento periódico es esencial para mantener el rendimiento del modelo a lo largo del tiempo:"
    },
    {
      type: "list",
      value: [
        "Reentrenamiento programado: en intervalos fijos (ej. semanal)",
        "Reentrenamiento por trigger: cuando se detecta drift o degradación",
        "Online learning: actualización continua con nuevos datos"
      ]
    },
    {
      type: "img",
      value: "Flujo de decisión para reentrenamiento mostrando condiciones y acciones"
    },
    {
      type: "code",
      value: `# Ejemplo de trigger para reentrenamiento
def check_for_retrain(current_accuracy, threshold=0.05, last_train_date):
    time_since_train = (datetime.now() - last_train_date).days
    if current_accuracy < (1 - threshold) * baseline_accuracy:
        return "accuracy_drop"
    elif time_since_train >= 30:
        return "scheduled_retrain"
    else:
        return "no_action"`
    },
    {
      type: "warning",
      value: "El reentrenamiento automático requiere validación rigurosa para evitar introducir sesgos o degradaciones."
    }
  ],
  children: []
},
{
  id: "artefactos_de_modelo_artifacts",
  title: "Artefactos de Modelo",
  subtitle: "Elementos necesarios para empaquetar y reproducir modelos",
  content: [
    {
      type: "text",
      value: "Un modelo en producción requiere múltiples artefactos interrelacionados:"
    },
    {
      type: "list",
      value: [
        "Modelo serializado (pickle, ONNX, etc.)",
        "Metadatos (hiperparámetros, métricas)",
        "Entorno de ejecución (Docker image, conda env)",
        "Código de pre/post-procesamiento",
        "Documentación y versionado"
      ]
    },
    {
      type: "img",
      value: "Estructura de directorios típica para artefactos de modelo mostrando relaciones entre componentes"
    },
    {
      type: "text",
      value: "Buenas prácticas para gestión de artefactos:"
    },
    {
      type: "list",
      value: [
        "Usar Model Registry (MLflow, TF Serving)",
        "Versionar todos los componentes",
        "Firmar digitalmente artefactos",
        "Documentar dependencias exactas"
      ]
    }
  ],
  children: []
},
{
  id: "pasos_del_pipeline_modularidad",
  title: "Pasos del Pipeline y Modularidad",
  subtitle: "Diseño de pipelines ML mantenibles y reutilizables",
  content: [
    {
      type: "text",
      value: "Los pipelines de ML deben diseñarse como componentes modulares independientes:"
    },
    {
      type: "list",
      value: [
        "Preprocesamiento (limpieza, transformación)",
        "Feature engineering",
        "Entrenamiento/Validación",
        "Evaluación",
        "Despliegue"
      ]
    },
    {
      type: "img",
      value: "Diagrama de pipeline modular mostrando interfaces claras entre componentes"
    },
    {
      type: "code",
      value: `# Ejemplo de pipeline modular con scikit-learn
from sklearn.pipeline import Pipeline

preprocessor = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='mean')),
    ('scaler', StandardScaler())
])

full_pipeline = Pipeline(steps=[
    ('preprocessing', preprocessor),
    ('feature_selection', SelectKBest(score_func=f_classif, k=10)),
    ('classifier', RandomForestClassifier())
])`
    },
    {
      type: "text",
      value: "Ventajas de la modularidad:"
    },
    {
      type: "list",
      value: [
        "Reutilización de componentes",
        "Pruebas unitarias más fáciles",
        "Escalabilidad independiente",
        "Actualizaciones parciales"
      ]
    }
  ],
  children: []
},
{
  id: "interpretabilidad_explainability",
  title: "Interpretabilidad y Explainability",
  subtitle: "Técnicas para entender y explicar modelos de ML",
  content: [
    {
      type: "text",
      value: "La interpretabilidad es crucial para depuración, confianza y cumplimiento regulatorio:"
    },
    {
      type: "list",
      value: [
        "Métodos intrínsecos: modelos interpretables por diseño (árboles, regresiones)",
        "Métodos post-hoc: SHAP, LIME, saliency maps",
        "Explicaciones globales vs locales"
      ]
    },
    {
      type: "img",
      value: "Comparación visual de explicaciones SHAP globales y locales"
    },
    {
      type: "code",
      value: `# Ejemplo de explicación con SHAP
import shap

explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)

# Visualización para una instancia
shap.force_plot(explainer.expected_value, shap_values[0,:], X_test.iloc[0,:])`
    },
    {
      type: "warning",
      value: "En entornos regulados (banca, salud), la interpretabilidad es requisito legal, no solo técnica."
    }
  ],
  children: []
},
{
  id: "data_drift_y_concept_drift",
  title: "Data Drift y Concept Drift",
  subtitle: "Detección y manejo de cambios en datos y relaciones",
  content: [
    {
      type: "text",
      value: "Tipos de drift que afectan modelos en producción:"
    },
    {
      type: "list",
      value: [
        "Data drift: Cambio en distribución de características (P(X) cambia)",
        "Concept drift: Cambio en relación características-objetivo (P(Y|X) cambia)",
        "Covariate shift: Cambio en características sin cambiar relación objetivo"
      ]
    },
    {
      type: "img",
      value: "Gráficos comparativos mostrando diferentes tipos de drift en distribuciones de datos"
    },
    {
      type: "text",
      value: "Técnicas de detección:"
    },
    {
      type: "list",
      value: [
        "Pruebas estadísticas (KS, Chi-cuadrado)",
        "Modelos de dominio (discriminadores)",
        "Monitoreo de métricas en ventanas temporales"
      ]
    }
  ],
  children: []
},
{
  id: "calidad_del_dato",
  title: "Calidad del Dato",
  subtitle: "Garantía de calidad para datos de entrenamiento y producción",
  content: [
    {
      type: "text",
      value: "Dimensiones clave de calidad de datos en ML:"
    },
    {
      type: "list",
      value: [
        "Completitud (valores faltantes)",
        "Consistencia (formatos, rangos)",
        "Actualidad (frescura de datos)",
        "Precisión (valores correctos)",
        "Relevancia (para el problema)"
      ]
    },
    {
      type: "img",
      value: "Dashboard de calidad de datos mostrando métricas por dimensión"
    },
    {
      type: "code",
      value: `# Ejemplo de chequeo de calidad con Pandera
import pandera as pa

schema = pa.DataFrameSchema({
    "age": pa.Column(int, checks=[pa.Check.ge(0), pa.Check.le(120)]),
    "income": pa.Column(float, checks=pa.Check.ge(0), nullable=True),
    "gender": pa.Column(str, checks=pa.Check.isin(["M", "F", "Other"]))
})

schema.validate(df)`
    }
  ],
  children: []
},
{
  id: "recoleccion_y_versionado_de_datos",
  title: "Recolección y Versionado de Datos",
  subtitle: "Gestión sistemática de datasets para ML",
  content: [
    {
      type: "text",
      value: "Estrategias efectivas para manejo de datos:"
    },
    {
      type: "list",
      value: [
        "Data versioning (DVC, Delta Lake)",
        "Lineage tracking (procedencia de datos)",
        "Metadatos descriptivos (schema, estadísticas)",
        "Muestreo representativo"
      ]
    },
    {
      type: "img",
      value: "Flujo de versionado de datos mostrando snapshots y metadatos asociados"
    },
    {
      type: "text",
      value: "Herramientas recomendadas:"
    },
    {
      type: "list",
      value: [
        "DVC para versionado de datasets pequeños/medianos",
        "Delta Lake/LakeFS para data lakes",
        "Great Expectations para validación"
      ]
    }
  ],
  children: []
},
{
  id: "rivacidad_de_datos",
  title: "Privacidad de Datos",
  subtitle: "Protección de información sensible en sistemas ML",
  content: [
    {
      type: "text",
      value: "Consideraciones clave para privacidad:"
    },
    {
      type: "list",
      value: [
        "Anonimización/Pseudonimización",
        "Técnicas de privacidad diferencial",
        "Cumplimiento de regulaciones (GDPR, CCPA)",
        "Federated learning para datos sensibles"
      ]
    },
    {
      type: "img",
      value: "Diagrama de técnicas de anonimización mostrando k-anonymity, l-diversity"
    },
    {
      type: "warning",
      value: "Los modelos pueden memorizar datos sensibles incluso sin acceso directo a ellos (riesgo de membership inference attacks)."
    }
  ],
  children: []
},
{
  id: "abt",
  title: "Analytical Base Tables (ABT)",
  subtitle: "Tablas analíticas para entrenamiento de modelos",
  content: [
    {
      type: "text",
      value: "Las ABTs son tablas estructuradas específicamente para entrenar modelos:"
    },
    {
      type: "list",
      value: [
        "Una fila por observación/entidad",
        "Columnas como características (features)",
        "Target variable claramente definida",
        "Split temporal adecuado (train/test)"
      ]
    },
    {
      type: "img",
      value: "Ejemplo visual de ABT mostrando estructura típica con features y target"
    },
    {
      type: "text",
      value: "Buenas prácticas para ABTs:"
    },
    {
      type: "list",
      value: [
        "Documentar origen de cada feature",
        "Garantizar no leakage de datos",
        "Incluir metadatos temporales",
        "Versionar ABTs junto con modelos"
      ]
    }
  ],
  children: []
},
{
  id: "metricas_y_validaciones",
  title: "Métricas y Validaciones en ML",
  subtitle: "Evaluación rigurosa de modelos más allá del accuracy",
  content: [
    {
      type: "text",
      value: "La evaluación efectiva de modelos requiere múltiples métricas y técnicas de validación:"
    },
    {
      type: "img",
      value: "Dashboard típico de monitoreo de modelos mostrando múltiples métricas"
    },
    {
      type: "text",
      value: "Consideraciones clave:"
    },
    {
      type: "list",
      value: [
        "Métricas alineadas con objetivos de negocio",
        "Validación temporal (no solo aleatoria)",
        "Pruebas de stress (edge cases)",
        "Monitoreo continuo en producción"
      ]
    }
  ],
  children: [
    "validacion_outoftime_oot",
    "auc",
    "gini",
    "colinealidad",
    "matriz_de_transicion",
    "validacion_por_ventana_movil"
  ]
},
{
  id: "validacion_outoftime_oot",
  title: "Validación Out-of-Time (OOT)",
  subtitle: "Evaluación en períodos temporales distintos al entrenamiento",
  content: [
    {
      type: "text",
      value: "La validación OOT es crucial para modelos con datos temporales:"
    },
    {
      type: "list",
      value: [
        "Entrenar en período T1-T2",
        "Validar en período T3-T4 posterior",
        "Detectar pérdida de performance por cambios temporales",
        "Estimador más realista de performance en producción"
      ]
    },
    {
      type: "img",
      value: "Diagrama de splits temporales mostrando entrenamiento vs validación OOT"
    },
    {
      type: "warning",
      value: "En datos con estacionalidad fuerte, el período OOT debe cubrir ciclos completos para ser representativo."
    }
  ],
  children: []
},
{
  id: "auc",
  title: "AUC (Area Under ROC Curve)",
  subtitle: "Métrica para evaluación de clasificadores binarios",
  content: [
    {
      type: "text",
      value: "AUC mide la capacidad del modelo de distinguir entre clases positivas y negativas:"
    },
    {
      type: "list",
      value: [
        "Rango de 0 a 1 (1 es perfecto, 0.5 es aleatorio)",
        "Robusta a desbalance de clases",
        "Interpretación: probabilidad de que un positivo aleatorio tenga mayor score que un negativo aleatorio"
      ]
    },
    {
      type: "img",
      value: "Curva ROC mostrando diferentes valores de AUC comparados"
    },
    {
      type: "code",
      value: `# Cálculo de AUC en Python
from sklearn.metrics import roc_auc_score

y_true = [0, 1, 1, 0, 1]
y_scores = [0.1, 0.9, 0.8, 0.3, 0.7]

auc = roc_auc_score(y_true, y_scores)
print(f"AUC: {auc:.3f}")`
    }
  ],
  children: []
},
{
  id: "gini",
  title: "Coeficiente Gini",
  subtitle: "Métrica de discriminación para modelos de clasificación",
  content: [
    {
      type: "text",
      value: "El coeficiente Gini es una transformación del AUC común en risk modeling:"
    },
    {
      type: "list",
      value: [
        "Gini = 2*AUC - 1",
        "Rango de 0 a 1 (1 es perfecto, 0 es aleatorio)",
        "Interpretación: capacidad de ordenar casos positivos antes que negativos",
        "Común en banca y seguros"
      ]
    },
    {
      type: "img",
      value: "Relación visual entre curva ROC y coeficiente Gini"
    },
    {
      type: "warning",
      value: "Gini puede ser engañoso en datasets muy desbalanceados - siempre reportar junto con otras métricas."
    }
  ],
  children: []
},
{
  id: "colinealidad",
  title: "Detección de Colinealidad",
  subtitle: "Identificación de predictores correlacionados",
  content: [
    {
      type: "text",
      value: "La colinealidad afecta la estabilidad e interpretabilidad de modelos lineales:"
    },
    {
      type: "list",
      value: [
        "Causa inestabilidad en coeficientes",
        "Reduce poder interpretativo",
        "Aumenta varianza en estimaciones"
      ]
    },
    {
      type: "img",
      value: "Matriz de correlación mostrando variables altamente correlacionadas"
    },
    {
      type: "code",
      value: `# Cálculo de VIF para detectar colinealidad
from statsmodels.stats.outliers_influence import variance_inflation_factor

vif_data = pd.DataFrame()
vif_data["feature"] = X.columns
vif_data["VIF"] = [variance_inflation_factor(X.values, i) 
                  for i in range(len(X.columns))]
                  
print(vif_data[vif_data["VIF"] > 5])  # Umbral común`
    }
  ],
  children: []
},
{
  id: "validacion_por_ventana_movil",
  title: "Validación por Ventana Móvil",
  subtitle: "Técnica para modelos con dependencia temporal",
  content: [
    {
      type: "text",
      value: "La validación por ventana móvil simula el despliegue real en datos temporales:"
    },
    {
      type: "list",
      value: [
        "Entrenar en ventana W1, validar en W1+Δ",
        "Mover ventana y repetir",
        "Promediar métricas de todas las ventanas",
        "Captura cambios temporales en relaciones"
      ]
    },
    {
      type: "img",
      value: "Diagrama de ventana móvil mostrando múltiples splits temporales"
    },
    {
      type: "code",
      value: `# Ejemplo con TimeSeriesSplit
from sklearn.model_selection import TimeSeriesSplit

tscv = TimeSeriesSplit(n_splits=5)
for train_index, test_index in tscv.split(X):
    X_train, X_test = X.iloc[train_index], X.iloc[test_index]
    y_train, y_test = y.iloc[train_index], y.iloc[test_index]
    # Entrenar y evaluar modelo`
    }
  ],
  children: []
},
{
  id: "pipelines_funcionales",
  title: "Pipelines Funcionales en Ciencia de Datos",
  subtitle: "Flujos de trabajo end-to-end para modelos de ML",
  content: [
    {
      type: "text",
      value: "Un pipeline funcional es un conjunto de procesos automatizados que transforman datos crudos en predicciones valiosas, manteniendo consistencia entre desarrollo y producción."
    },
    {
      type: "img",
      value: "Diagrama de un pipeline completo con etapas de preprocesamiento, entrenamiento, inferencia y monitoreo"
    },
    {
      type: "text",
      value: "Las etapas clave son:"
    },
    {
      type: "list",
      value: [
        "Entrenamiento: Desarrollo y optimización del modelo",
        "Inferencia: Generación de predicciones en producción",
        "Monitoreo: Seguimiento del desempeño en tiempo real",
        "Reentrenamiento: Actualización periódica del modelo"
      ]
    },
    {
      type: "warning",
      value: "Sin pipelines robustos, los modelos sufren de 'deuda de ML' donde el desempeño decae rápidamente en producción."
    }
  ],
  children: []
},
{
  id: "herramientas_aws",
  title: "Herramientas AWS para Data Science",
  subtitle: "Ecosistema de servicios para pipelines de ML",
  content: [
    {
      type: "text",
      value: "AWS ofrece un conjunto integrado de servicios para cada etapa del ciclo de vida de un proyecto de ciencia de datos:"
    },
    {
      type: "img",
      value: "Arquitectura de referencia con servicios AWS para ingestión, procesamiento, modelado y despliegue"
    },
    {
      type: "text",
      value: "Principales categorías:"
    },
    {
      type: "list",
      value: [
        "Almacenamiento (S3, Glacier)",
        "Procesamiento (Glue, EMR)",
        "Machine Learning (SageMaker)",
        "Orquestación (Step Functions)",
        "Infraestructura como código (CloudFormation, CDK)"
      ]
    }
  ],
  children: [
    "aws_glue",
    "amazon_s3",
    "sagemaker",
    "athena",
    "step_functions",
    "codepipeline",
    "aws_cloudformation",
    "aws_cdk",
    "terraform"
  ]
},
{
  id: "aws_glue",
  title: "AWS Glue",
  subtitle: "Servicio ETL completamente administrado",
  content: [
    {
      type: "text",
      value: "AWS Glue es un servicio serverless para preparar y transformar datos a escala, con capacidades de descubrimiento de datos integradas."
    },
    {
      type: "code",
      value: `# Ejemplo de job de Glue en Python
import sys
from awsglue.transforms import *
from awsglue.utils import getResolvedOptions
from pyspark.context import SparkContext
from awsglue.context import GlueContext

glueContext = GlueContext(SparkContext.getOrCreate())
datasource = glueContext.create_dynamic_frame.from_catalog(
    database="sales_db",
    table_name="retail_transactions"
)

# Transformación simple: filtrar registros
filtered_data = Filter.apply(
    frame=datasource,
    f=lambda x: x["amount"] > 100
)

glueContext.write_dynamic_frame.from_options(
    frame=filtered_data,
    connection_type="s3",
    connection_options={"path": "s3://processed-data-bucket"},
    format="parquet"
)`
    },
    {
      type: "text",
      value: "Casos de uso típicos:"
    },
    {
      type: "list",
      value: [
        "Limpieza y normalización de datos",
        "Preparación de datasets para entrenamiento",
        "Integración de múltiples fuentes de datos",
        "Conversión entre formatos (CSV, JSON, Parquet)"
      ]
    },
    {
      type: "warning",
      value: "Glue tiene un costo mínimo de 10 minutos por job, no es económico para transformaciones pequeñas o infrecuentes."
    }
  ],
  children: []
},
{
  id: "amazon_s3",
  title: "Amazon S3",
  subtitle: "Almacenamiento de objetos escalable",
  content: [
    {
      type: "text",
      value: "Amazon Simple Storage Service (S3) es el servicio fundamental para almacenar y recuperar cualquier cantidad de datos en cualquier momento."
    },
    {
      type: "img",
      value: "Estructura de buckets y objetos en S3 con diferentes clases de almacenamiento"
    },
    {
      type: "text",
      value: "Mejores prácticas para ciencia de datos:"
    },
    {
      type: "list",
      value: [
        "Organizar datos en buckets lógicos (raw, processed, models)",
        "Usar prefijos para estructura tipo directorio",
        "Implementar lifecycle policies para ahorro de costos",
        "Habilitar versionado para trazabilidad"
      ]
    },
    {
      type: "code",
      value: `# Ejemplo de interacción con S3 desde Python (boto3)
import boto3

s3 = boto3.client('s3')

# Subir archivo de datos
s3.upload_file(
    'local_data.csv',
    'mi-bucket-datos',
    'raw/sales/2023/07/data.csv'
)

# Listar contenidos
response = s3.list_objects_v2(
    Bucket='mi-bucket-datos',
    Prefix='processed/'
)`
    }
  ],
  children: []
},
{
  id: "sagemaker",
  title: "Amazon SageMaker",
  subtitle: "Plataforma completa para machine learning",
  content: [
    {
      type: "text",
      value: "SageMaker simplifica el proceso de construir, entrenar y desplegar modelos de machine learning a escala."
    },
    {
      type: "img",
      value: "Arquitectura de SageMaker mostrando notebooks, entrenamiento distribuido y endpoints de inferencia"
    },
    {
      type: "text",
      value: "Componentes clave:"
    },
    {
      type: "list",
      value: [
        "Notebooks para exploración interactiva",
        "Entrenamiento administrado con algoritmos built-in o custom",
        "Autopilot para AutoML",
        "Endpoints para inferencia en tiempo real",
        "Feature Store para gestión de características"
      ]
    },
    {
      type: "code",
      value: `# Ejemplo de entrenamiento con SageMaker Python SDK
from sagemaker.sklearn.estimator import SKLearn

estimator = SKLearn(
    entry_script='train.py',
    role='AmazonSageMaker-ExecutionRole',
    instance_type='ml.m5.large',
    framework_version='0.23-1'
)

estimator.fit({'train': 's3://bucket/train', 'test': 's3://bucket/test'})`
    }
  ],
  children: []
},
{
  id: "athena",
  title: "Amazon Athena",
  subtitle: "Servicio de consulta interactiva sobre S3",
  content: [
    {
      type: "text",
      value: "Athena permite analizar datos directamente en S3 usando SQL estándar, sin necesidad de cargar datos en bases de datos tradicionales."
    },
    {
      type: "text",
      value: "Ventajas para ciencia de datos:"
    },
    {
      type: "list",
      value: [
        "Consulta rápida de datasets grandes en formato columnar (Parquet, ORC)",
        "Integración con Glue Data Catalog para metadatos",
        "Pago por consulta sin infraestructura que administrar",
        "Resultados almacenables nuevamente en S3 para análisis posteriores"
      ]
    },
    {
      type: "code",
      value: `-- Ejemplo de consulta SQL en Athena
SELECT 
    product_category,
    AVG(unit_price) as avg_price,
    COUNT(*) as transactions
FROM retail_transactions
WHERE transaction_date BETWEEN DATE '2023-01-01' AND DATE '2023-03-31'
GROUP BY product_category
ORDER BY avg_price DESC
LIMIT 10;`
    }
  ],
  children: []
},
{
  id: "step_functions",
  title: "AWS Step Functions",
  subtitle: "Orquestación de workflows serverless",
  content: [
    {
      type: "text",
      value: "Step Functions permite coordinar componentes distribuidos como servicios AWS y código personalizado en flujos de trabajo visuales."
    },
    {
      type: "img",
      value: "Diagrama de state machine mostrando un pipeline de ML con pasos secuenciales y manejo de errores"
    },
    {
      type: "text",
      value: "Aplicaciones en ciencia de datos:"
    },
    {
      type: "list",
      value: [
        "Automatización de pipelines de entrenamiento",
        "Orquestación de jobs ETL",
        "Flujos de inferencia en batch",
        "Reentrenamiento periódico con condiciones"
      ]
    },
    {
      type: "warning",
      value: "Diseña tus state machines considerando límites de tiempo (1 año máximo) y tamaño de payload (256KB)."
    }
  ],
  children: []
},
{
  id: "codepipeline",
  title: "AWS CodePipeline",
  subtitle: "Integración y entrega continuas para ML",
  content: [
    {
      type: "text",
      value: "CodePipeline automatiza el proceso de release para infraestructura y modelos de ML, permitiendo actualizaciones rápidas y confiables."
    },
    {
      type: "text",
      value: "Etapas típicas en un pipeline de ML:"
    },
    {
      type: "list",
      value: [
        "Source: Trigger desde repositorio de código",
        "Build: Compilación de paquetes y contenedores",
        "Test: Validación del modelo (precisión, rendimiento)",
        "Deploy: Implementación gradual a producción"
      ]
    },
    {
      type: "img",
      value: "Pipeline CI/CD mostrando integración con SageMaker y pruebas automatizadas"
    }
  ],
  children: []
},
{
  id: "aws_cloudformation",
  title: "AWS CloudFormation",
  subtitle: "Infraestructura como código con plantillas",
  content: [
    {
      type: "text",
      value: "CloudFormation permite modelar y configurar recursos AWS mediante plantillas declarativas en JSON o YAML."
    },
    {
      type: "code",
      value: `# Ejemplo de plantilla YAML para entorno de ciencia de datos
Resources:
  DataScienceBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: ml-data-\${AWS::AccountId}
      LifecycleConfiguration:
        Rules:
          - Id: ArchiveOldData
            Status: Enabled
            Prefix: "raw/"
            ExpirationInDays: 365

  SageMakerNotebook:
    Type: AWS::SageMaker::NotebookInstance
    Properties:
      InstanceType: ml.t3.medium
      RoleArn: !GetAtt ExecutionRole.Arn`
    },
    {
      type: "text",
      value: "Beneficios clave:"
    },
    {
      type: "list",
      value: [
        "Versionado de infraestructura",
        "Replicación consistente de entornos",
        "Gestión de dependencias entre recursos",
        "Rollback automático en caso de fallos"
      ]
    }
  ],
  children: []
},
{
  id: "aws_cdk",
  title: "AWS CDK (Cloud Development Kit)",
  subtitle: "Modelado de infraestructura con lenguajes de programación",
  content: [
    {
      type: "text",
      value: "El AWS CDK permite definir infraestructura cloud usando lenguajes familiares como TypeScript, Python o Java, compilando a CloudFormation."
    },
    {
      type: "code",
      value: `# Ejemplo de CDK en Python para pipeline de ML
from aws_cdk import (
    aws_s3 as s3,
    aws_sagemaker as sagemaker
)

class MlPipelineStack(Stack):
    def __init__(self, scope: Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)
        
        # Bucket para datos de entrenamiento
        data_bucket = s3.Bucket(
            self, "TrainingDataBucket",
            encryption=s3.BucketEncryption.S3_MANAGED
        )
        
        # Notebook de SageMaker
        notebook = sagemaker.CfnNotebookInstance(
            self, "DataScienceNotebook",
            instance_type="ml.t3.medium",
            role_arn=role.role_arn,
            notebook_instance_name="ml-exploration"
        )`
    },
    {
      type: "text",
      value: "Ventajas sobre CloudFormation tradicional:"
    },
    {
      type: "list",
      value: [
        "Reutilización de código mediante constructos",
        "Verificación de tipos y autocompletado",
        "Abstracción de patrones complejos",
        "Testing de infraestructura"
      ]
    }
  ],
  children: []
},
{
  id: "terraform",
  title: "Terraform con AWS",
  subtitle: "Provisionamiento multi-nube declarativo",
  content: [
    {
      type: "text",
      value: "Terraform de HashiCorp es una herramienta de infraestructura como código que soporta múltiples proveedores cloud, incluyendo AWS."
    },
    {
      type: "code",
      value: `# Ejemplo de configuración Terraform para recursos de ML
resource "aws_s3_bucket" "model_artifacts" {
  bucket = "model-artifacts-\${var.environment}"
  acl    = "private"

  tags = {
    Project = "FraudDetection"
  }
}

resource "aws_sagemaker_model" "xgboost" {
  name               = "fraud-detection-xgboost"
  execution_role_arn = aws_iam_role.sagemaker.arn

  primary_container {
    image = "\${var.ecr_repo}:xgboost-latest"
    model_data_url = "s3://\${aws_s3_bucket.model_artifacts.bucket}/models/xgboost.tar.gz"
  }
}`
    },
    {
      type: "text",
      value: "Comparación con herramientas AWS nativas:"
    },
    {
      type: "list",
      value: [
        "Multi-cloud: Mismo lenguaje para AWS, Azure, GCP",
        "Planificación: Vista previa de cambios antes de aplicar",
        "Estado: Mantiene estado actual de la infraestructura",
        "Módulos: Biblioteca de componentes reutilizables"
      ]
    }
  ],
  children: []
},
{
  id: "automl",
  title: "AutoML en AWS",
  subtitle: "Automatización del desarrollo de modelos",
  content: [
    {
      type: "text",
      value: "Las soluciones AutoML democratizan el machine learning automatizando tareas como selección de algoritmos, ingeniería de características y ajuste de hiperparámetros."
    },
    {
      type: "img",
      value: "Flujo de trabajo de SageMaker Autopilot mostrando análisis de datos, feature engineering y entrenamiento de modelos"
    },
    {
      type: "text",
      value: "Opciones en AWS:"
    },
    {
      type: "list",
      value: [
        "SageMaker Autopilot: Entrena y optimiza modelos automáticamente",
        "SageMaker JumpStart: Modelos preentrenados y soluciones",
        "Personalizado: Usando SageMaker Experiments para búsqueda de hiperparámetros"
      ]
    },
    {
      type: "code",
      value: `# Ejemplo de SageMaker Autopilot
import boto3
sm = boto3.client('sagemaker')

response = sm.create_auto_ml_job(
    AutoMLJobName='fraud-detection-automl',
    InputDataConfig=[{
        'DataSource': {
            'S3DataSource': {
                'S3DataType': 'S3Prefix',
                'S3Uri': 's3://bucket/train.csv'
            }
        },
        'TargetAttributeName': 'is_fraud'
    }],
    OutputDataConfig={
        'S3OutputPath': 's3://bucket/output'
    },
    RoleArn='arn:aws:iam::123456789012:role/ServiceRole'
)`
    }
  ],
  children: []
},
{
  id: "componentes_del_sistema",
  title: "Componentes Clave de un Sistema de Machine Learning",
  subtitle: "Arquitectura End-to-End para ML en Producción",
  content: [
    {
      type: "text",
      value: "Un sistema de ML en producción requiere múltiples componentes integrados que van más allá del modelo en sí. Esta arquitectura asegura escalabilidad, confiabilidad y mantenibilidad."
    },
    {
      type: "img",
      value: "Diagrama de arquitectura completa mostrando todos los componentes interconectados"
    },
    {
      type: "text",
      value: "Principales subsistemas:"
    },
    {
      type: "list",
      value: [
        "Entorno de experimentación: Desarrollo iterativo de modelos",
        "Servicios de entrenamiento: Pipeline de modelado automatizado",
        "Servicios de inferencia: Predicciones en tiempo real/batch",
        "Almacenamiento: Datos, modelos y artefactos",
        "Registro: Contenedores, modelos y versionado",
        "CI/CD: Automatización del ciclo de vida",
        "Monitoreo: Desempeño y drift en producción"
      ]
    }
  ],
  children: [
    "entorno_de_experimentacion",
    "servicio_de_entrenamiento",
    "servicio_de_inferencia",
    "almacenamiento_de_datos",
    "registro_de_contenedores",
    "cicd_y_testing",
    "versionamiento_de_codigo_y_modelos",
    "control_de_data_skew__overfitting",
    "manejo_de_imbalance_smote_sampling",
    "monitoreo_y_trazabilidad"
  ]
},
{
  id: "entorno_de_experimentacion",
  title: "Entorno de Experimentación",
  subtitle: "Ambiente para desarrollo iterativo de modelos",
  content: [
    {
      type: "text",
      value: "El entorno de experimentación es donde los data scientists exploran datos, prueban algoritmos y desarrollan modelos antes de llevarlos a producción."
    },
    {
      type: "img",
      value: "Jupyter Notebook con visualizaciones y código de experimentación"
    },
    {
      type: "text",
      value: "Características esenciales:"
    },
    {
      type: "list",
      value: [
        "Notebooks interactivos (Jupyter, Colab)",
        "Acceso a datos de entrenamiento",
        "Recursos computacionales escalables (GPUs/TPUs)",
        "Entornos aislados y reproducibles (Docker)",
        "Integración con herramientas de tracking (MLflow)"
      ]
    },
    {
      type: "code",
      value: `# Ejemplo de configuración de entorno con Conda
name: ml-experiment
channels:
  - defaults
  - conda-forge
dependencies:
  - python=3.8
  - numpy
  - pandas
  - scikit-learn
  - jupyterlab
  - matplotlib
  - seaborn
  - pip:
    - mlflow
    - xgboost`
    },
    {
      type: "warning",
      value: "Nunca experimentes directamente en producción. Usa ambientes aislados para evitar contaminación de datos."
    }
  ],
  children: []
},
{
  id: "servicio_de_entrenamiento",
  title: "Servicio de Entrenamiento",
  subtitle: "Infraestructura para entrenamiento automatizado de modelos",
  content: [
    {
      type: "text",
      value: "Los servicios de entrenamiento automatizan el proceso de crear y optimizar modelos a escala, permitiendo reentrenamiento periódico y experimentación paralela."
    },
    {
      type: "img",
      value: "Arquitectura distribuida de entrenamiento mostrando workers y parameter server"
    },
    {
      type: "text",
      value: "Componentes clave:"
    },
    {
      type: "list",
      value: [
        "Orquestación de jobs (Airflow, Kubeflow)",
        "Distribución de carga (Horovod, TensorFlow Distributed)",
        "Selección de instancias (CPU/GPU optimizadas)",
        "Tracking de experimentos (MLflow, Weights & Biases)",
        "Almacenamiento de artefactos (modelos, métricas)"
      ]
    },
    {
      type: "code",
      value: `# Ejemplo de entrenamiento distribuido con TensorFlow
strategy = tf.distribute.MirroredStrategy()

with strategy.scope():
    model = tf.keras.Sequential([
        tf.keras.layers.Dense(128, activation='relu'),
        tf.keras.layers.Dense(10)
    ])
    model.compile(
        optimizer='adam',
        loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
        metrics=['accuracy']
    )

model.fit(train_dataset, epochs=10, validation_data=val_dataset)`
    }
  ],
  children: []
},
{
  id: "servicio_de_inferencia",
  title: "Servicio de Inferencia",
  subtitle: "Sistema para servir predicciones en producción",
  content: [
    {
      type: "text",
      value: "Los servicios de inferencia exponen modelos entrenados como APIs escalables que pueden manejar solicitudes en tiempo real (online) o procesamiento por lotes (batch)."
    },
    {
      type: "img",
      value: "Diagrama de servicio de inferencia con balanceador de carga, réplicas de modelo y cola de mensajes"
    },
    {
      type: "text",
      value: "Patrones comunes:"
    },
    {
      type: "list",
      value: [
        "Endpoints REST/gRPC (TensorFlow Serving, FastAPI)",
        "Inferencia batch (Spark, AWS Batch)",
        "Edge inference (TensorFlow Lite, ONNX Runtime)",
        "Canary deployments para lanzamientos graduales",
        "Auto-scaling basado en carga"
      ]
    },
    {
      type: "code",
      value: `# Ejemplo de endpoint FastAPI para inferencia
from fastapi import FastAPI
import joblib

app = FastAPI()
model = joblib.load('model.pkl')

@app.post("/predict")
async def predict(data: dict):
    features = preprocess(data['features'])
    prediction = model.predict([features])
    return {"prediction": float(prediction[0])}`
    },
    {
      type: "warning",
      value: "Monitoriza latencia y throughput de tus endpoints. El escalado inadecuado puede generar cuellos de botella."
    }
  ],
  children: []
},
{
  id: "almacenamiento_de_datos",
  title: "Almacenamiento de Datos",
  subtitle: "Sistemas para gestión de datos en el ciclo de vida de ML",
  content: [
    {
      type: "text",
      value: "El almacenamiento adecuado es crítico para datasets de entrenamiento, características procesadas, modelos y artefactos de experimentación."
    },
    {
      type: "img",
      value: "Pirámide de almacenamiento mostrando raw data, processed data, features y modelos"
    },
    {
      type: "text",
      value: "Consideraciones clave:"
    },
    {
      type: "list",
      value: [
        "Formato óptimo (Parquet, TFRecords)",
        "Particionamiento para consultas eficientes",
        "Control de versionado de datasets",
        "Seguridad y control de acceso",
        "Coste vs. performance (hot/cold storage)"
      ]
    }
  ],
  children: [
    "aws_s3",
    "gcs",
    "azure_blob",
    "minio"
  ]
},
{
  id: "registro_de_contenedores",
  title: "Registro de Contenedores",
  subtitle: "Gestión de imágenes Docker para entornos reproducibles",
  content: [
    {
      type: "text",
      value: "Los registros de contenedores almacenan y versionan imágenes Docker que empaquetan código, dependencias y entorno de ejecución para garantizar reproducibilidad."
    },
    {
      type: "text",
      value: "Flujo típico:"
    },
    {
      type: "list",
      value: [
        "Construir imagen con Dockerfile",
        "Etiquetar con versión/semántica",
        "Subir a registro privado/público",
        "Desplegar en entornos de ejecución"
      ]
    },
    {
      type: "code",
      value: `# Ejemplo de Dockerfile para servicio de ML
FROM python:3.8-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Variables de entorno para configuración
ENV MODEL_PATH=/models/classifier
ENV PORT=8000

EXPOSE $PORT
CMD ["gunicorn", "--bind", "0.0.0.0:$PORT", "app:app"]`
    },
    {
      type: "warning",
      value: "Nunca almacenes credenciales en imágenes. Usa secrets management o variables de entorno en tiempo de ejecución."
    }
  ],
  children: []
},
{
  id: "cicd_y_testing",
  title: "CI/CD y Testing para ML",
  subtitle: "Automatización del ciclo de vida del modelo",
  content: [
    {
      type: "text",
      value: "Los pipelines de Integración Continua y Entrega Continua (CI/CD) automatizan el testing, empaquetado y despliegue de modelos de ML."
    },
    {
      type: "img",
      value: "Pipeline CI/CD mostrando etapas de build, test, deploy y rollback"
    },
    {
      type: "text",
      value: "Pruebas esenciales en ML:"
    },
    {
      type: "list",
      value: [
        "Unit tests para código de preprocesamiento",
        "Validación de esquema de datos",
        "Pruebas de rendimiento del modelo",
        "Pruebas de concepto invariante",
        "Monitoreo de drift en producción"
      ]
    },
    {
      type: "code",
      value: `# Ejemplo de test unitario para preprocesamiento
def test_feature_engineering():
    test_data = pd.DataFrame({
        'age': [25, 30, 35],
        'income': [50000, 60000, 70000]
    })
    
    processed = preprocess_data(test_data)
    
    assert 'income_normalized' in processed.columns
    assert processed['income_normalized'].between(0, 1).all()
    assert not processed.isnull().any().any()`
    }
  ],
  children: []
},
{
  id: "versionamiento_de_codigo_y_modelos",
  title: "Versionamiento de Código y Modelos",
  subtitle: "Control de cambios en el ciclo de vida de ML",
  content: [
    {
      type: "text",
      value: "El versionamiento en ML es multidimensional: código, datos, modelos y configuraciones deben estar sincronizados para reproducibilidad."
    },
    {
      type: "img",
      value: "Estrategia de versionamiento mostrando tags para código, datos y modelos"
    },
    {
      type: "text",
      value: "Herramientas recomendadas:"
    },
    {
      type: "list",
      value: [
        "Git para código (con Git LFS para datos pequeños)",
        "DVC (Data Version Control) para datasets grandes",
        "MLflow Model Registry para modelos",
        "Artifact stores (S3, GCS) con naming semántico"
      ]
    },
    {
      type: "code",
      value: `# Ejemplo de versionamiento con DVC
# Track dataset
dvc add data/raw/training.csv
git add data/raw/training.csv.dvc

# Reproducibilidad completa
dvc repro train_model.dvc

# Versionamiento de modelo
dvc add models/xgboost.pkl
git add models/xgboost.pkl.dvc`
    }
  ],
  children: []
},
{
  id: "control_de_data_skew__overfitting",
  title: "Control de Data Skew y Overfitting",
  subtitle: "Técnicas para garantizar generalización del modelo",
  content: [
    {
      type: "text",
      value: "El data skew (desbalance entre entrenamiento/producción) y overfitting (sobreajuste a datos de entrenamiento) son desafíos críticos en ML."
    },
    {
      type: "img",
      value: "Gráfico comparando distribución de entrenamiento vs producción"
    },
    {
      type: "text",
      value: "Estrategias de mitigación:"
    },
    {
      type: "list",
      value: [
        "Validación cruzada estratificada",
        "Conjuntos de holdout representativos",
        "Regularización (L1/L2, dropout)",
        "Early stopping",
        "Monitoreo continuo de distribuciones"
      ]
    },
    {
      type: "code",
      value: `# Ejemplo de detección de skew con scikit-learn
from sklearn.model_selection import train_test_split
from sklearn.datasets import make_classification

X, y = make_classification(n_samples=1000, n_features=20, 
                          weights=[0.9, 0.1], random_state=42)

# Split estratificado
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42
)

# Verificar distribución
print("Train class distribution:", np.bincount(y_train))
print("Test class distribution:", np.bincount(y_test))`
    }
  ],
  children: []
},
{
  id: "manejo_de_imbalance_smote_sampling",
  title: "Manejo de Desbalance (SMOTE/Sampling)",
  subtitle: "Técnicas para datasets con clases desiguales",
  content: [
    {
      type: "text",
      value: "En problemas con clases desbalanceadas (fraude, fallos raros), las técnicas de muestreo ayudan a evitar sesgos hacia la clase mayoritaria."
    },
    {
      type: "img",
      value: "Comparación antes/después de aplicar SMOTE mostrando balance de clases"
    },
    {
      type: "text",
      value: "Enfoques comunes:"
    },
    {
      type: "list",
      value: [
        "Oversampling (SMOTE, ADASYN)",
        "Undersampling (Random, Tomek Links)",
        "Pérdidas ponderadas (class_weight)",
        "Ensembles (BalancedRandomForest)",
        "Métricas apropiadas (F1, AUC-PR)"
      ]
    },
    {
      type: "code",
      value: `# Ejemplo de SMOTE con imbalanced-learn
from imblearn.over_sampling import SMOTE
from sklearn.ensemble import RandomForestClassifier

smote = SMOTE(sampling_strategy='minority', random_state=42)
X_resampled, y_resampled = smote.fit_resample(X_train, y_train)

model = RandomForestClassifier(class_weight='balanced')
model.fit(X_resampled, y_resampled)`
    },
    {
      type: "warning",
      value: "SMOTE puede generar muestras irreales en espacios de alta dimensión. Valida siempre con expertos de dominio."
    }
  ],
  children: []
},
{
  id: "monitoreo_y_trazabilidad",
  title: "Monitoreo y Trazabilidad",
  subtitle: "Seguimiento de modelos en producción",
  content: [
    {
      type: "text",
      value: "El monitoreo continuo detecta degradación de modelos, drift de datos y problemas operativos, mientras la trazabilidad permite investigar incidentes."
    },
    {
      type: "img",
      value: "Dashboard de monitoreo mostrando métricas, drift y alertas"
    },
    {
      type: "text",
      value: "Métricas clave a monitorear:"
    },
    {
      type: "list",
      value: [
        "Performance (precisión, latencia, throughput)",
        "Data drift (distribuciones de características)",
        "Concept drift (relación features-target)",
        "Integridad de datos (valores nulos, formatos)",
        "Health del sistema (CPU, memoria, errores)"
      ]
    },
    {
      type: "code",
      value: `# Ejemplo de cálculo de drift con Alibi Detect
from alibi_detect import KSDrift

drift_detector = KSDrift(
    p_val=0.05,
    X_ref=X_train  # Datos de referencia
)

preds = drift_detector.predict(X_production)
print(f"Drift detected: {preds['data']['is_drift']}")
print(f"p-value: {preds['data']['p_val']}")`
    }
  ],
  children: []
},
{
  id: "herramientas_por_funcion",
  title: "Herramientas de ML por Función",
  subtitle: "Landscape Tecnológico para Ciencia de Datos",
  content: [
    {
      type: "text",
      value: "El ecosistema de herramientas para machine learning se ha especializado para cubrir cada etapa del ciclo de vida de los modelos. Esta taxonomía organiza las soluciones por su función principal en el flujo de trabajo."
    },
    {
      type: "img",
      value: "Mapa mental de herramientas de ML categorizadas por función con iconos de cada tecnología"
    },
    {
      type: "text",
      value: "Áreas funcionales clave:"
    },
    {
      type: "list",
      value: [
        "Desarrollo: IDEs y notebooks para experimentación",
        "Orquestación: Automatización de pipelines",
        "Tracking: Gestión del ciclo de vida de modelos",
        "Datos: Almacenamiento y feature engineering",
        "Operaciones: Despliegue y monitoreo"
      ]
    }
  ],
  children: [
    "ides__notebooks",
    "orquestacion_de_workflows",
    "tracking_y_ml_lifecycle",
    "feature_stores",
    "almacenamiento_de_datos",
    "contenedores_y_registros",
    "cicd_y_devops",
    "despliegue_y_produccion",
    "monitoreo_y_observabilidad",
    "balanceo_de_datos_y_calidad"
  ]
},
{
  id: "ides__notebooks",
  title: "IDEs y Notebooks",
  subtitle: "Entornos de desarrollo para ciencia de datos",
  content: [
    {
      type: "text",
      value: "Los entornos interactivos son esenciales para exploración de datos, prototipado rápido y visualización. Ofrecen celdas ejecutables combinadas con documentación."
    },
    {
      type: "img",
      value: "Comparativa de interfaces: Jupyter Lab vs Colab vs VSCode"
    },
    {
      type: "text",
      value: "Criterios de selección:"
    },
    {
      type: "list",
      value: [
        "Soporte para múltiples kernels (Python, R, Julia)",
        "Acceso a recursos computacionales (GPUs/TPUs)",
        "Integración con control de versiones",
        "Extensiones para visualización",
        "Colaboración en tiempo real"
      ]
    }
  ],
  children: [
    "jupyter",
    "colab",
    "vscode"
  ]
},
{
  id: "jupyter",
  title: "Jupyter Notebook/Lab",
  subtitle: "Ecosistema open-source para computación interactiva",
  content: [
    {
      type: "text",
      value: "Jupyter es el estándar de facto para notebooks en ciencia de datos, permitiendo mezclar código, texto, visualizaciones y multimedia en documentos ejecutables."
    },
    {
      type: "code",
      value: `# Ejemplo típico en Jupyter
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('data.csv')
df.plot(kind='scatter', x='feature', y='target')
plt.title('Análisis exploratorio')
plt.show()`
    },
    {
      type: "text",
      value: "Ventajas clave:"
    },
    {
      type: "list",
      value: [
        "Extensible con widgets y plugins",
        "Soporte para 40+ lenguajes",
        "JupyterHub para entornos multi-usuario",
        "Exportación a múltiples formatos (HTML, PDF, slides)",
        "Integración con kernels remotos"
      ]
    },
    {
      type: "warning",
      value: "Los notebooks pueden volverse difíciles de mantener en proyectos grandes. Considera convertir código importante a scripts/modulos."
    }
  ],
  children: []
},
{
  id: "colab",
  title: "Google Colaboratory",
  subtitle: "Notebooks en la nube con GPUs gratuitas",
  content: [
    {
      type: "text",
      value: "Colab ofrece notebooks basados en Jupyter ejecutados en la infraestructura de Google, con acceso gratuito a GPUs/TPUs y almacenamiento en Google Drive."
    },
    {
      type: "img",
      value: "Interfaz de Colab mostrando conexión a GPU y montaje de Google Drive"
    },
    {
      type: "text",
      value: "Casos de uso ideales:"
    },
    {
      type: "list",
      value: [
        "Prototipado rápido sin configuración local",
        "Entrenamiento de modelos con aceleración hardware",
        "Colaboración en tiempo real estilo Google Docs",
        "Educación y tutoriales interactivos",
        "Ejecución de notebooks programáticamente"
      ]
    },
    {
      type: "code",
      value: `# Conexión a Google Drive en Colab
from google.colab import drive
drive.mount('/content/drive')

# Verificar GPU
import tensorflow as tf
tf.test.gpu_device_name()`
    }
  ],
  children: []
},
{
  id: "vscode",
  title: "Visual Studio Code",
  subtitle: "IDE polivalente para proyectos de ML",
  content: [
    {
      type: "text",
      value: "VS Code se ha convertido en un IDE preferido para ML gracias a su ecosistema de extensiones, soporte nativo para notebooks y herramientas de desarrollo profesional."
    },
    {
      type: "img",
      value: "VSCode mostrando extensiones para Python, Jupyter y Docker"
    },
    {
      type: "text",
      value: "Extensiones imprescindibles:"
    },
    {
      type: "list",
      value: [
        "Python (IntelliSense, debugging)",
        "Jupyter (notebooks interactivos)",
        "Docker (gestión de contenedores)",
        "GitLens (control de versiones avanzado)",
        "Pylance (type checking)"
      ]
    },
    {
      type: "text",
      value: "Flujo de trabajo recomendado:"
    },
    {
      type: "list",
      value: [
        "Exploración inicial en notebooks",
        "Refactorización a módulos Python",
        "Debugging con puntos de interrupción",
        "Testing integrado",
        "Control de versiones desde la interfaz"
      ]
    }
  ],
  children: []
},
{
  id: "orquestacion_de_workflows",
  title: "Orquestación de Workflows",
  subtitle: "Programación y automatización de pipelines de ML",
  content: [
    {
      type: "text",
      value: "Los orquestadores gestionan flujos de trabajo complejos de ML, coordinando tareas como preprocesamiento, entrenamiento y despliegue con manejo de dependencias."
    },
    {
      type: "img",
      value: "Comparativa de interfaces: Airflow vs Kubeflow vs Prefect"
    },
    {
      type: "text",
      value: "Criterios de selección:"
    },
    {
      type: "list",
      value: [
        "Soporte para ejecución distribuida",
        "Programación basada en eventos",
        "Monitorización integrada",
        "Manejo de fallos y reintentos",
        "Integración con ecosistema ML"
      ]
    }
  ],
  children: [
    "apache_airflow",
    "kubeflow_pipelines",
    "prefect__dagster"
  ]
},
{
  id: "apache_airflow",
  title: "Apache Airflow",
  subtitle: "Plataforma para crear, programar y monitorear workflows",
  content: [
    {
      type: "text",
      value: "Airflow permite definir pipelines como grafos dirigidos acíclicos (DAGs) en Python, con programación precisa y capacidades avanzadas de reintento."
    },
    {
      type: "code",
      value: `# Ejemplo de DAG en Airflow para ML
from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime

def train_model():
    # Lógica de entrenamiento
    pass

default_args = {
    'owner': 'data_science',
    'retries': 3
}

with DAG('ml_pipeline', 
         schedule_interval='@weekly',
         default_args=default_args,
         start_date=datetime(2023, 1, 1)) as dag:
    
    preprocess = PythonOperator(
        task_id='preprocess_data',
        python_callable=preprocess_fn
    )
    
    train = PythonOperator(
        task_id='train_model',
        python_callable=train_model
    )
    
    preprocess >> train`
    },
    {
      type: "text",
      value: "Ventajas principales:"
    },
    {
      type: "list",
      value: [
        "Extensa colección de operadores (Kubernetes, Spark, etc)",
        "Interfaz web para monitoreo",
        "Escalabilidad con Executors (Celery, Kubernetes)",
        "Gran comunidad y plugins",
        "Soporte para backfilling"
      ]
    },
    {
      type: "warning",
      value: "Airflow no está diseñado para procesamiento de datos a gran escala. Usalo para orquestación, no como framework de procesamiento."
    }
  ],
  children: []
},
{
  id: "kubeflow_pipelines",
  title: "Kubeflow Pipelines",
  subtitle: "Plataforma nativa de Kubernetes para workflows de ML",
  content: [
    {
      type: "text",
      value: "Kubeflow Pipelines es un componente de Kubeflow que permite construir y desplegar pipelines portables y escalables de ML en Kubernetes."
    },
    {
      type: "img",
      value: "Arquitectura de Kubeflow mostrando componentes en Kubernetes"
    },
    {
      type: "text",
      value: "Características distintivas:"
    },
    {
      type: "list",
      value: [
        "Componentes reutilizables como contenedores",
        "Experimentos y ejecuciones comparables",
        "UI para visualización de pipelines",
        "Integración con herramientas de ML (TFX, PyTorch)",
        "Autoescalado nativo con Kubernetes"
      ]
    },
    {
      type: "code",
      value: `# Ejemplo de componente en Kubeflow
from kfp import dsl

@dsl.component
def preprocess_data(
    input_path: str,
    output_path: str
):
    import pandas as pd
    # Lógica de preprocesamiento
    df = pd.read_csv(input_path)
    processed = df.dropna()
    processed.to_csv(output_path, index=False)

@dsl.pipeline(name='ml-pipeline')
def my_pipeline(data_path: str):
    preprocess_task = preprocess_data(
        input_path=data_path,
        output_path='/output/processed.csv'
    )`
    }
  ],
  children: []
},
{
  id: "prefect__dagster",
  title: "Prefect & Dagster",
  subtitle: "Alternativas modernas a Airflow",
  content: [
    {
      type: "text",
      value: "Prefect y Dagster son frameworks más nuevos que enfatizan desarrollo local, testing y mantenibilidad para pipelines de datos y ML."
    },
    {
      type: "img",
      value: "Comparación lado a lado de Prefect y Dagster"
    },
    {
      type: "text",
      value: "Diferencias clave:"
    },
    {
      type: "table",
      value: {
        headers: ["Feature", "Prefect", "Dagster"],
        rows: [
          ["Paradigma", "Flujos como funciones", "Grafos de activos"],
          ["Testing", "Assertions en runtime", "Type system integrado"],
          ["UI", "Prefect Cloud/Server", "Dagit"],
          ["ML Focus", "General", "Integración con MLflow"],
          ["Licencia", "Apache 2.0", "Apache 2.0"]
        ]
      }
    },
    {
      type: "code",
      value: `# Ejemplo de flow en Prefect
from prefect import flow, task

@task
def process_data(raw_data):
    # Transformación
    return cleaned_data

@flow
def ml_flow(data_path):
    raw = load_data(data_path)
    processed = process_data(raw)
    model = train_model(processed)
    
ml_flow('s3://bucket/data.csv')`
    }
  ],
  children: []
},
{
  id: "tracking_y_ml_lifecycle",
  title: "Tracking y ML Lifecycle",
  subtitle: "Gestión de experimentos y modelos",
  content: [
    {
      type: "text",
      value: "Las herramientas de tracking permiten registrar parámetros, métricas, artefactos y modelos para garantizar reproducibilidad y comparación sistemática."
    },
    {
      type: "img",
      value: "Dashboard comparativo de experimentos en MLflow y W&B"
    },
    {
      type: "text",
      value: "Funcionalidades clave:"
    },
    {
      type: "list",
      value: [
        "Registro de hiperparámetros y métricas",
        "Almacenamiento de artefactos (modelos, visualizaciones)",
        "Comparación visual de experimentos",
        "Model registry para stage management",
        "Integración con frameworks de ML"
      ]
    }
  ],
  children: [
    "mlflow__weights__biases",
    "neptuneai__dvc"
  ]
},
{
  id: "mlflow__weights__biases",
  title: "MLflow vs Weights & Biases",
  subtitle: "Plataformas líderes para experimentación en ML",
  content: [
    {
      type: "text",
      value: "MLflow (open-source) y W&B (comercial) ofrecen enfoques complementarios para tracking de experimentos, con diferentes filosofías y capacidades."
    },
    {
      type: "text",
      value: "Comparación detallada:"
    },
    {
      type: "table",
      value: {
        headers: ["Criterio", "MLflow", "Weights & Biases"],
        rows: [
          ["Model Registry", "Integrado", "Requiere integración"],
          ["Visualización", "Básica", "Avanzada (paneles interactivos)"],
          ["Colaboración", "Self-hosted", "Nativa en la nube"],
          ["Precio", "Gratuito", "Freemium (pago por uso avanzado)"],
          ["Integración", "Amplia (principalmente OSS)", "Frameworks principales"]
        ]
      }
    },
    {
      type: "code",
      value: `# Ejemplo de tracking con MLflow
import mlflow

mlflow.set_experiment("fraud-detection")

with mlflow.start_run():
    mlflow.log_param("learning_rate", 0.01)
    mlflow.log_metric("auc", 0.95)
    mlflow.sklearn.log_model(model, "model")
    
# Ejemplo equivalente en W&B
import wandb

wandb.init(project="fraud-detection")
wandb.config.learning_rate = 0.01
wandb.log({"auc": 0.95})
wandb.sklearn.log_model(model, "model")`
    },
    {
      type: "warning",
      value: "MLflow requiere configuración manual para backend/store, mientras W&B ofrece una solución inmediata pero con menos control sobre los datos."
    }
  ],
  children: []
},
{
  id: "neptuneai__dvc",
  title: "Data Version Control (DVC) with Neptune.ai Integration",
  subtitle: "Managing ML Experiments and Data Versioning",
  content: [
    {
      type: "text",
      value: "DVC is an open-source version control system for machine learning projects that handles large files, data versions, and experiment reproducibility."
    },
    {
      type: "img",
      value: "Diagram showing DVC workflow with data pipelines and versioning"
    },
    {
      type: "text",
      value: "When combined with Neptune.ai, you get enhanced experiment tracking capabilities while maintaining data version control."
    },
    {
      type: "code",
      value: `# Basic DVC commands
$ dvc init  # Initialize DVC in a project
$ dvc add data/raw_dataset  # Start tracking data files
$ dvc run -n prepare -d src/prepare.py -o data/prepared python src/prepare.py`
    },
    {
      type: "warning",
      value: "Always commit .dvc files to Git - they contain metadata about your data versions"
    }
  ],
  children: []
},
{
  id: "feature_stores",
  title: "Feature Stores for Machine Learning",
  subtitle: "Centralized Feature Management Systems",
  content: [
    {
      type: "text",
      value: "A feature store is a data system that manages the complete lifecycle of ML features - from creation and storage to serving for training and inference."
    },
    {
      type: "img",
      value: "Architecture diagram of a feature store showing offline/online storage and serving layers"
    },
    {
      type: "list",
      value: [
        "Eliminates feature duplication across projects",
        "Ensures consistency between training and serving",
        "Provides point-in-time correct feature values",
        "Enables feature sharing and discovery"
      ]
    },
    {
      type: "text",
      value: "Feature stores are particularly valuable in organizations running multiple ML models that share common features."
    }
  ],
  children: [
    "feast",
    "tecton"
  ]
},
{
  id: "feast",
  title: "Feast: Open-Source Feature Store",
  subtitle: "Feature Management for Production ML",
  content: [
    {
      type: "text",
      value: "Feast (Feature Store) is an open-source framework for managing, storing, and serving machine learning features to models in production."
    },
    {
      type: "code",
      value: `# Example Feast feature definition
from feast import Entity, Feature, FeatureView, ValueType
from feast.infra.offline_stores.file_source import FileSource

driver = Entity(name="driver_id", value_type=ValueType.INT64)

driver_stats_source = FileSource(
    path="data/driver_stats.parquet",
    event_timestamp_column="event_timestamp"
)

driver_stats_fv = FeatureView(
    name="driver_stats",
    entities=["driver_id"],
    features=[
        Feature(name="avg_daily_trips", dtype=ValueType.FLOAT),
    ],
    batch_source=driver_stats_source
)`
    },
    {
      type: "text",
      value: "Feast supports both offline (batch) features for training and online (low-latency) features for inference."
    }
  ],
  children: []
},
{
  id: "tecton",
  title: "Tecton: Enterprise Feature Platform",
  subtitle: "Production-Grade Feature Store",
  content: [
    {
      type: "text",
      value: "Tecton provides a fully-managed feature store designed for production machine learning at scale, with built-in feature computation and serving."
    },
    {
      type: "img",
      value: "Comparison table between Tecton and open-source alternatives showing enterprise features"
    },
    {
      type: "list",
      value: [
        "Automated feature computation pipelines",
        "Point-in-time correct feature retrieval",
        "Low-latency online serving (<10ms)",
        "Native integration with data warehouses"
      ]
    },
    {
      type: "warning",
      value: "Tecton is a commercial product with different pricing tiers - evaluate cost vs needs before adoption"
    }
  ],
  children: []
},
{
  id: "aws_s3",
  title: "Amazon S3 for Data Storage",
  subtitle: "Scalable Object Storage for ML Data",
  content: [
    {
      type: "text",
      value: "Amazon S3 (Simple Storage Service) provides highly durable, scalable object storage ideal for storing large ML datasets and model artifacts."
    },
    {
      type: "code",
      value: `# Python example using boto3 to interact with S3
import boto3

s3 = boto3.client('s3')

# Upload a file
s3.upload_file('local_data.csv', 'my-ml-bucket', 'raw_data/input.csv')

# Download a file
s3.download_file('my-ml-bucket', 'processed_data/output.parquet', 'local.parquet')`
    },
    {
      type: "text",
      value: "Key considerations for ML use cases: storage classes (Standard, Intelligent-Tiering, Glacier), encryption options, and lifecycle policies for cost optimization."
    }
  ],
  children: []
},
{
  id: "gcs",
  title: "Google Cloud Storage",
  subtitle: "Object Storage for ML Workloads on GCP",
  content: [
    {
      type: "text",
      value: "Google Cloud Storage offers multi-regional, regional, and nearline storage options with tight integration to Google's ML services like Vertex AI."
    },
    {
      type: "img",
      value: "GCS architecture diagram showing storage classes and access patterns"
    },
    {
      type: "list",
      value: [
        "Multi-regional for frequently accessed data",
        "Regional for in-region processing",
        "Nearline for data accessed less than once per month",
        "Coldline for archival purposes"
      ]
    }
  ],
  children: []
},
{
  id: "azure_blob",
  title: "Azure Blob Storage",
  subtitle: "Microsoft's Object Storage Solution",
  content: [
    {
      type: "text",
      value: "Azure Blob Storage provides massively scalable object storage for unstructured data, with tiered access (hot, cool, archive) for cost optimization."
    },
    {
      type: "code",
      value: `# Python example using Azure Storage Blob client
from azure.storage.blob import BlobServiceClient

connect_str = "<your_connection_string>"
blob_service_client = BlobServiceClient.from_connection_string(connect_str)

# Upload a blob
blob_client = blob_service_client.get_blob_client(
    container="ml-data", 
    blob="training_set.csv"
)

with open("data.csv", "rb") as data:
    blob_client.upload_blob(data)`
    }
  ],
  children: []
},
{
  id: "minio",
  title: "MinIO: High-Performance Object Storage",
  subtitle: "S3-Compatible Storage for Private Clouds",
  content: [
    {
      type: "text",
      value: "MinIO is an open-source, S3-compatible object storage server perfect for on-premises or private cloud ML deployments."
    },
    {
      type: "text",
      value: "Key advantages for ML pipelines:"
    },
    {
      type: "list",
      value: [
        "High performance for large-scale data operations",
        "Kubernetes-native deployment",
        "Compatible with all S3 SDKs and tools",
        "Lightweight and easy to deploy"
      ]
    }
  ],
  children: []
},
{
  id: "contenedores_y_registros",
  title: "Containerization and Registry Services",
  subtitle: "Packaging and Distributing ML Applications",
  content: [
    {
      type: "text",
      value: "Containerization provides consistent environments for ML development and deployment, while registries store and distribute container images."
    },
    {
      type: "img",
      value: "Container lifecycle diagram showing build, push, pull, run stages"
    },
    {
      type: "text",
      value: "Key benefits for ML workflows:"
    },
    {
      type: "list",
      value: [
        "Reproducibility across environments",
        "Isolation of dependencies",
        "Scalable deployment",
        "Version control for models and applications"
      ]
    }
  ],
  children: [
    "docker",
    "ecr",
    "gcr",
    "acr"
  ]
},
{
  id: "docker",
  title: "Docker for Machine Learning",
  subtitle: "Containerizing ML Applications",
  content: [
    {
      type: "text",
      value: "Docker packages ML applications and their dependencies into standardized units (containers) that run consistently across environments."
    },
    {
      type: "code",
      value: `# Example Dockerfile for a Python ML service
FROM python:3.8-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy model and application code
COPY model.pkl .
COPY app.py .

# Set environment variables
ENV MODEL_PATH=/app/model.pkl

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "app:app"]`
    },
    {
      type: "warning",
      value: "Always pin package versions in requirements.txt to ensure reproducibility"
    }
  ],
  children: []
},
{
  id: "ecr",
  title: "Amazon Elastic Container Registry (ECR)",
  subtitle: "Managed Docker Registry on AWS",
  content: [
    {
      type: "text",
      value: "Amazon ECR is a fully-managed Docker container registry that integrates with AWS services like ECS, EKS, and SageMaker for ML deployments."
    },
    {
      type: "text",
      value: "Key features for ML workflows:"
    },
    {
      type: "list",
      value: [
        "Private image storage with IAM access control",
        "Image scanning for vulnerabilities",
        "Lifecycle policies for automatic cleanup",
        "Cross-region replication for global deployments"
      ]
    }
  ],
  children: []
},
{
  id: "gcr",
  title: "Google Container Registry (GCR)",
  subtitle: "Registro de Docker gestionado en GCP",
  content: [
    {
      type: "text",
      value: "Google Container Registry ofrece almacenamiento seguro de imágenes Docker con integración nativa para servicios de Google Cloud como GKE y Vertex AI."
    },
    {
      type: "code",
      value: `# Subir una imagen a GCR
$ docker tag mi-modelo gcr.io/mi-proyecto/mi-modelo:v1
$ docker push gcr.io/mi-proyecto/mi-modelo:v1

# Descargar una imagen desde GCR
$ docker pull gcr.io/mi-proyecto/mi-modelo:v1`
    },
    {
      type: "text",
      value: "Características clave para ML:"
    },
    {
      type: "list",
      value: [
        "Escaneo de vulnerabilidades integrado",
        "Control de acceso granular con IAM",
        "Replicación geográfica automática",
        "Integración con Cloud Build para CI/CD"
      ]
    }
  ],
  children: []
},
{
  id: "acr",
  title: "Azure Container Registry (ACR)",
  subtitle: "Registro de contenedores en Azure",
  content: [
    {
      type: "text",
      value: "ACR ofrece un registro empresarial de Docker con replicación geográfica e integración profunda con Azure ML y servicios Kubernetes."
    },
    {
      type: "img",
      value: "Diagrama de arquitectura de ACR mostrando replicación geográfica"
    },
    {
      type: "text",
      value: "Ventajas principales:"
    },
    {
      type: "list",
      value: [
        "Replicación en múltiples regiones",
        "Autenticación con Azure AD",
        "ACR Tasks para builds automatizados",
        "SKU Premium para alto rendimiento"
      ]
    },
    {
      type: "warning",
      value: "Habilite la cuenta admin solo cuando sea necesario - prefiera identidades de Azure AD para operaciones regulares"
    }
  ],
  children: []
},
{
  id: "cicd_y_devops",
  title: "CI/CD y DevOps para Machine Learning",
  subtitle: "Automatización de flujos de trabajo ML",
  content: [
    {
      type: "text",
      value: "Las pipelines de Integración y Entrega Continua (CI/CD) automatizan pruebas, construcción y despliegue de modelos de ML, asegurando confiabilidad y reproducibilidad."
    },
    {
      type: "img",
      value: "Diagrama de pipeline CI/CD para ML mostrando validación de datos, entrenamiento y despliegue"
    },
    {
      type: "text",
      value: "Componentes clave:"
    },
    {
      type: "list",
      value: [
        "Validación automatizada de datos",
        "Entrenamiento de modelos reproducible",
        "Pruebas de rendimiento del modelo",
        "Despliegues progresivos (canary)",
        "Capacidad de rollback"
      ]
    }
  ],
  children: [
    "github_actions",
    "gitlab_ci",
    "jenkins",
    "circleci",
    "argo"
  ]
},
{
  id: "github_actions",
  title: "GitHub Actions para ML",
  subtitle: "CI/CD nativo en GitHub",
  content: [
    {
      type: "text",
      value: "GitHub Actions permite automatizar flujos de trabajo directamente en repositorios GitHub, ideal para proyectos ML que usan GitHub."
    },
    {
      type: "code",
      value: `# Ejemplo de workflow para tests de modelos
name: CI de Modelo

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Configurar Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.8'
    - name: Instalar dependencias
      run: |
        pip install -r requirements.txt
    - name: Ejecutar tests
      run: |
        python -m pytest tests/`
    },
    {
      type: "text",
      value: "Casos de uso comunes:"
    },
    {
      type: "list",
      value: [
        "Entrenamiento automatizado programado",
        "Validación de datos en pull requests",
        "Benchmarking de rendimiento",
        "Construcción y despliegue de imágenes"
      ]
    }
  ],
  children: []
},
{
  id: "gitlab_ci",
  title: "GitLab CI/CD para ML",
  subtitle: "Pipelines integrales para Machine Learning",
  content: [
    {
      type: "text",
      value: "GitLab CI ofrece un robusto sistema de pipelines con registro de contenedores integrado, ideal para flujos complejos de ML."
    },
    {
      type: "img",
      value: "Visualización de pipeline mostrando etapas paralelas de entrenamiento"
    },
    {
      type: "text",
      value: "Ventajas para proyectos ML:"
    },
    {
      type: "list",
      value: [
        "Registro de contenedores integrado",
        "Auto DevOps para pipelines estandarizados",
        "Despliegue en Kubernetes",
        "Almacenamiento de artefactos binarios"
      ]
    }
  ],
  children: []
},
{
  id: "jenkins",
  title: "Jenkins para Pipelines de ML",
  subtitle: "Servidor de automatización flexible",
  content: [
    {
      type: "text",
      value: "Jenkins es un servidor de automatización extensible que puede orquestar flujos complejos de ML con plugins para diversas herramientas."
    },
    {
      type: "code",
      value: `// Ejemplo de Jenkinsfile para ML
pipeline {
  agent any
  stages {
    stage('Preparar Datos') {
      steps {
        sh 'python src/preparar_datos.py'
      }
    }
    stage('Entrenar') {
      steps {
        sh 'python src/entrenar.py'
      }
    }
    stage('Evaluar') {
      steps {
        sh 'python src/evaluar.py'
        archiveArtifacts artifacts: 'metricas/*.json'
      }
    }
  }
}`
    },
    {
      type: "warning",
      value: "Gestione los plugins con cuidado - versiones conflictivas pueden romper pipelines"
    }
  ],
  children: []
},
{
  id: "circleci",
  title: "CircleCI para Proyectos ML",
  subtitle: "CI/CD en la nube",
  content: [
    {
      type: "text",
      value: "CircleCI ofrece CI/CD en la nube con potente caché, beneficioso para proyectos ML con grandes dependencias."
    },
    {
      type: "text",
      value: "Consejos para ML:"
    },
    {
      type: "list",
      value: [
        "Cachear dependencias entre ejecuciones",
        "Usar ejecutores con GPU para entrenamiento",
        "Paralelizar ejecución de tests",
        "Almacenar artefactos usando workspaces"
      ]
    }
  ],
  children: []
},
{
  id: "argo",
  title: "Argo Workflows para ML",
  subtitle: "Orquestación nativa en Kubernetes",
  content: [
    {
      type: "text",
      value: "Argo Workflows permite ejecutar pipelines multi-etapa en Kubernetes, ideal para trabajos complejos de entrenamiento."
    },
    {
      type: "img",
      value: "Visualización de DAG mostrando etapas paralelas de entrenamiento"
    },
    {
      type: "text",
      value: "Características clave:"
    },
    {
      type: "list",
      value: [
        "Definición de pipelines basados en DAG",
        "Uso eficiente de recursos",
        "Paso de artefactos entre etapas",
        "Integración con Kubeflow"
      ]
    }
  ],
  children: []
},
{
  id: "despliegue_y_produccion",
  title: "Despliegue y Producción",
  subtitle: "Servicio de Modelos a Escala",
  content: [
    {
      type: "text",
      value: "El despliegue en producción requiere considerar escalabilidad, monitoreo y requisitos operacionales."
    },
    {
      type: "img",
      value: "Comparación de arquitecturas (tiempo real vs batch, serverless vs contenedores)"
    },
    {
      type: "text",
      value: "Aspectos críticos:"
    },
    {
      type: "list",
      value: [
        "Versionado y rollback de modelos",
        "Monitoreo de rendimiento",
        "Detección de data drift",
        "Infraestructura escalable",
        "Seguridad y control de acceso"
      ]
    }
  ],
  children: [
    "sagemaker",
    "vertex_ai",
    "azure_ml",
    "bentoml",
    "fastapi",
    "docker",
    "kubernetes"
  ]
},
{
  id: "vertex_ai",
  title: "Vertex AI para Despliegue",
  subtitle: "Plataforma unificada de ML en GCP",
  content: [
    {
      type: "text",
      value: "Vertex AI ofrece capacidades integrales para entrenamiento, despliegue y monitoreo de modelos en Google Cloud."
    },
    {
      type: "code",
      value: `# Desplegando un modelo en Vertex AI
from google.cloud import aiplatform

aiplatform.init(project="mi-proyecto", location="us-central1")

modelo = aiplatform.Model.upload(
    display_name="mi-modelo",
    artifact_uri="gs://mi-bucket/modelo",
    serving_container_image_uri="gcr.io/cloud-aiplatform/prediction/tf2-cpu.2-6:latest"
)

endpoint = modelo.deploy(
    machine_type="n1-standard-4",
    min_replica_count=1,
    max_replica_count=3
)`
    },
    {
      type: "text",
      value: "Características principales:"
    },
    {
      type: "list",
      value: [
        "Auto-escalado de endpoints",
        "Rutinas de predicción personalizadas",
        "Explicabilidad de modelos",
        "Monitoreo integrado"
      ]
    }
  ],
  children: []
},
{
  id: "azure_ml",
  title: "Azure Machine Learning",
  subtitle: "ML integral en Microsoft Azure",
  content: [
    {
      type: "text",
      value: "Azure ML proporciona herramientas completas para entrenamiento, despliegue y gestión de modelos con capacidades empresariales."
    },
    {
      type: "img",
      value: "Interfaz de Azure ML mostrando opciones de despliegue"
    },
    {
      type: "text",
      value: "Opciones de despliegue:"
    },
    {
      type: "list",
      value: [
        "ACI (Azure Container Instances) para pruebas",
        "AKS (Azure Kubernetes Service) para producción",
        "Despliegue en edge para dispositivos IoT",
        "Endpoints batch para procesamiento asíncrono"
      ]
    }
  ],
  children: []
},
{
  id: "bentoml",
  title: "BentoML para Servicio de Modelos",
  subtitle: "Empaquetado estandarizado de modelos",
  content: [
    {
      type: "text",
      value: "BentoML empaqueta modelos en bundles listos para producción que pueden desplegarse en múltiples plataformas."
    },
    {
      type: "code",
      value: `# Ejemplo de servicio con BentoML
import bentoml
from bentoml.io import NumpyNdarray

@bentoml.service(
    resources={"cpu": "2"},
    traffic={"timeout": 10}
)
class DeteccionFraude:
    def __init__(self):
        self.modelo = bentoml.models.get("deteccion_fraude:latest")

    @bentoml.api(input=NumpyNdarray())
    def predecir(self, datos_entrada):
        return self.modelo.predict(datos_entrada)`
    },
    {
      type: "text",
      value: "Ventajas clave:"
    },
    {
      type: "list",
      value: [
        "Soporte multi-framework",
        "Rendimiento optimizado",
        "Despliegue en Docker/Kubernetes/Serverless",
        "Gestión de versiones"
      ]
    }
  ],
  children: []
},
{
  id: "fastapi",
  title: "FastAPI para Servicio de Modelos",
  subtitle: "Framework de alto rendimiento",
  content: [
    {
      type: "text",
      value: "FastAPI es un framework moderno ideal para construir APIs de servicio de modelos con documentación automática y validación."
    },
    {
      type: "code",
      value: `# Ejemplo de endpoint con FastAPI
from fastapi import FastAPI
from pydantic import BaseModel
import joblib

app = FastAPI()
modelo = joblib.load("modelo.pkl")

class DatosEntrada(BaseModel):
    caracteristicas: list[float]

@app.post("/predecir")
def predecir(datos: DatosEntrada):
    prediccion = modelo.predict([datos.caracteristicas])
    return {"prediccion": prediccion.tolist()}`
    },
    {
      type: "text",
      value: "Buenas prácticas:"
    },
    {
      type: "list",
      value: [
        "Usar Pydantic para validación",
        "Implementar health checks",
        "Añadir logging de requests",
        "Considerar rate limiting"
      ]
    }
  ],
  children: []
},
{
  id: "kubernetes",
  title: "Kubernetes para ML a Escala",
  subtitle: "Orquestación de contenedores",
  content: [
    {
      type: "text",
      value: "Kubernetes provee una plataforma robusta para desplegar y escalar aplicaciones de ML en producción."
    },
    {
      type: "img",
      value: "Arquitectura Kubernetes para ML mostrando pods, autoscaling y monitoreo"
    },
    {
      type: "text",
      value: "Conceptos clave para ML:"
    },
    {
      type: "list",
      value: [
        "Deployments para réplicas de modelos",
        "Horizontal Pod Autoscaler (HPA)",
        "Custom Resource Definitions (CRDs)",
        "Gestión de recursos GPU",
        "Service meshes para enrutamiento avanzado"
      ]
    }
  ],
  children: []
},
{
  id: "monitoreo_y_observabilidad",
  title: "Monitoreo y Observabilidad en Data Science",
  subtitle: "Técnicas y herramientas para garantizar la calidad y rendimiento de modelos en producción",
  content: [
    {
      type: "text",
      value: "El monitoreo y observabilidad son componentes críticos en el ciclo de vida de los modelos de ML. Permiten detectar problemas como drift de datos, degradación de rendimiento o fallas en la infraestructura."
    },
    {
      type: "img",
      value: "Diagrama de arquitectura de monitoreo mostrando flujo de datos desde el modelo hasta los paneles de visualización"
    },
    {
      type: "list",
      value: [
        "Conceptos clave en monitoreo de modelos:",
        "Data Drift: Cambios en la distribución de los datos de entrada",
        "Concept Drift: Cambios en la relación entre características y objetivo",
        "Degradación de rendimiento: Caída en métricas de evaluación",
        "Disponibilidad del servicio: Tiempo de actividad y latencia"
      ]
    },
    {
      type: "warning",
      value: "Sin un sistema de monitoreo adecuado, los modelos en producción pueden degradarse silenciosamente, generando pérdidas económicas o impactos negativos en la experiencia del usuario."
    }
  ],
  children: [
    "grafana",
    "prometheus",
    "whylabs",
    "evidentlyai"
  ]
},
{
  id: "grafana",
  title: "Grafana para Visualización de Métricas",
  subtitle: "Plataforma de visualización y creación de dashboards para monitoreo de modelos",
  content: [
    {
      type: "text",
      value: "Grafana es una herramienta open-source para visualización y análisis de métricas. En el contexto de Data Science, permite crear paneles interactivos para monitorear el comportamiento de modelos en producción."
    },
    {
      type: "img",
      value: "Ejemplo de dashboard de Grafana mostrando métricas de rendimiento de un modelo de ML"
    },
    {
      type: "code",
      value: `// Ejemplo de conexión a datasource Prometheus en Grafana
const dashboard = {
  title: "Monitoreo Modelo Clasificación",
  panels: [
    {
      title: "Accuracy en Tiempo Real",
      type: "graph",
      datasource: "Prometheus",
      query: 'avg(accuracy_score{model="fraud_detection"}) by (instance)'
    }
  ]
};`
    },
    {
      type: "list",
      value: [
        "Ventajas de Grafana:",
        "Soporte múltiples fuentes de datos (Prometheus, InfluxDB, etc.)",
        "Visualizaciones altamente personalizables",
        "Alertas configurables basadas en umbrales",
        "Compartir dashboards fácilmente"
      ]
    }
  ],
  children: []
},
{
  id: "prometheus",
  title: "Prometheus para Monitoreo de Métricas",
  subtitle: "Sistema de monitoreo y alerta para infraestructura y modelos de ML",
  content: [
    {
      type: "text",
      value: "Prometheus es un sistema de monitoreo y alerta diseñado para confiabilidad y escalabilidad. Es particularmente útil para monitorear métricas de modelos en producción y la infraestructura asociada."
    },
    {
      type: "img",
      value: "Arquitectura de Prometheus mostrando componentes como el servidor, exportadores y alertmanager"
    },
    {
      type: "code",
      value: `# Ejemplo de métricas exportadas para un modelo de ML
from prometheus_client import start_http_server, Gauge

model_accuracy = Gauge('model_accuracy', 'Accuracy del modelo en producción')
prediction_latency = Gauge('prediction_latency_ms', 'Latencia de predicción en milisegundos')

# Actualizar métricas
model_accuracy.set(0.92)
prediction_latency.set(45)`
    },
    {
      type: "list",
      value: [
        "Características clave:",
        "Modelo de datos multidimensional con series de tiempo",
        "Lenguaje de consulta flexible (PromQL)",
        "Integración nativa con Grafana",
        "Recolección de métricas mediante pull HTTP"
      ]
    }
  ],
  children: []
},
{
  id: "whylabs",
  title: "WhyLabs para Monitoreo de Modelos",
  subtitle: "Plataforma SaaS para monitoreo de calidad de datos y modelos",
  content: [
    {
      type: "text",
      value: "WhyLabs es una plataforma que permite monitorear la calidad de los datos y el rendimiento de los modelos de ML en producción, detectando problemas como data drift o degradación de rendimiento."
    },
    {
      type: "img",
      value: "Interfaz de WhyLabs mostrando detección de drift en características del modelo"
    },
    {
      type: "code",
      value: `# Ejemplo de integración con WhyLabs
import whylogs as why
from whylogs.api.writer.whylabs import WhyLabsWriter

# Perfilar datos de entrada
profile = why.log(df).profile()

# Enviar a WhyLabs
writer = WhyLabsWriter()
writer.write(profile)`
    },
    {
      type: "list",
      value: [
        "Casos de uso principales:",
        "Monitoreo continuo de calidad de datos",
        "Detección temprana de data drift",
        "Comparación entre conjuntos de entrenamiento y producción",
        "Alertas automáticas sobre anomalías"
      ]
    }
  ],
  children: []
},
{
  id: "evidentlyai",
  title: "Evidently AI para Análisis de Modelos",
  subtitle: "Herramientas open-source para evaluar y monitorear modelos de ML",
  content: [
    {
      type: "text",
      value: "Evidently AI proporciona herramientas para analizar el rendimiento de modelos y la calidad de datos en producción. Es especialmente útil para generar reportes automatizados sobre drift y degradación de modelos."
    },
    {
      type: "img",
      value: "Reporte de Evidently AI mostrando comparación de distribuciones de características"
    },
    {
      type: "code",
      value: `# Ejemplo de reporte de drift con Evidently
from evidently.report import Report
from evidently.metrics import DataDriftTable

report = Report(metrics=[DataDriftTable()])
report.run(current_data=production_data, reference_data=train_data)
report.save_html("data_drift_report.html")`
    },
    {
      type: "warning",
      value: "Evidently es excelente para análisis puntuales, pero para monitoreo continuo necesita ser integrado con sistemas como Prometheus o Grafana."
    },
    {
      type: "list",
      value: [
        "Tipos de reportes disponibles:",
        "Data Quality: Estadísticas básicas y valores faltantes",
        "Data Drift: Comparación de distribuciones",
        "Model Performance: Métricas de evaluación",
        "Target Drift: Cambios en la variable objetivo"
      ]
    }
  ],
  children: []
},
{
  id: "balanceo_de_datos_y_calidad",
  title: "Balanceo de Datos y Calidad",
  subtitle: "Técnicas para manejar conjuntos de datos desbalanceados y garantizar calidad",
  content: [
    {
      type: "text",
      value: "El balanceo de datos es crucial en problemas con clases desbalanceadas, donde una clase domina sobre otras. Esto puede llevar a modelos con buen accuracy global pero pobre rendimiento en las clases minoritarias."
    },
    {
      type: "img",
      value: "Comparación antes/después de aplicar técnicas de balanceo mostrando distribución de clases"
    },
    {
      type: "list",
      value: [
        "Señales de necesidad de balanceo:",
        "Accuracy alto pero recall bajo en clase minoritaria",
        "Distribución de clases muy desigual (ej: 95%-5%)",
        "El modelo siempre predice la clase mayoritaria",
        "Importancia empresarial de detectar la clase minoritaria"
      ]
    }
  ],
  children: [
    "smote",
    "over__under_sampling",
    "data_skew_detection"
  ]
},
{
  id: "smote",
  title: "SMOTE (Synthetic Minority Over-sampling Technique)",
  subtitle: "Técnica avanzada para balancear conjuntos de datos mediante generación de muestras sintéticas",
  content: [
    {
      type: "text",
      value: "SMOTE es una técnica que crea muestras sintéticas de la clase minoritaria en lugar de simplemente duplicar instancias existentes. Funciona interpolando entre instancias cercanas en el espacio de características."
    },
    {
      type: "img",
      value: "Diagrama de cómo SMOTE genera nuevas instancias interpolando entre vecinos cercanos"
    },
    {
      type: "code",
      value: `# Ejemplo de aplicación de SMOTE con imbalanced-learn
from imblearn.over_sampling import SMOTE

smote = SMOTE(sampling_strategy='minority', k_neighbors=5)
X_resampled, y_resampled = smote.fit_resample(X, y)

print(f"Distribución original: {Counter(y)}")
print(f"Distribución después de SMOTE: {Counter(y_resampled)}")`
    },
    {
      type: "list",
      value: [
        "Parámetros clave:",
        "k_neighbors: Número de vecinos para interpolar (default 5)",
        "sampling_strategy: Proporción deseada de clases",
        "random_state: Para reproducibilidad"
      ]
    },
    {
      type: "warning",
      value: "SMOTE puede generar ruido si se aplica a datos con muchas características irrelevantes o outliers. Es recomendable aplicar selección de características primero."
    }
  ],
  children: []
},
{
  id: "over__under_sampling",
  title: "Over-sampling y Under-sampling",
  subtitle: "Técnicas básicas para balancear conjuntos de datos",
  content: [
    {
      type: "text",
      value: "Over-sampling y Under-sampling son técnicas fundamentales para manejar clases desbalanceadas. Over-sampling aumenta las instancias de la clase minoritaria, mientras que Under-sampling reduce las instancias de la clase mayoritaria."
    },
    {
      type: "img",
      value: "Comparación visual entre over-sampling, under-sampling y combinación de ambos"
    },
    {
      type: "code",
      value: `# Ejemplo de Random Over-sampling y Under-sampling
from imblearn.over_sampling import RandomOverSampler
from imblearn.under_sampling import RandomUnderSampler

# Over-sampling
over = RandomOverSampler(sampling_strategy=0.5)
X_over, y_over = over.fit_resample(X, y)

# Under-sampling
under = RandomUnderSampler(sampling_strategy=0.5)
X_under, y_under = under.fit_resample(X, y)`
    },
    {
      type: "list",
      value: [
        "Consideraciones:",
        "Over-sampling puede llevar a overfitting",
        "Under-sampling puede perder información valiosa",
        "Combinar ambas técnicas suele dar mejores resultados",
        "Evaluar siempre en conjunto de validación no balanceado"
      ]
    }
  ],
  children: []
},
{
  id: "data_skew_detection",
  title: "Detección de Skew en Datos",
  subtitle: "Técnicas para identificar y cuantificar desbalance en conjuntos de datos",
  content: [
    {
      type: "text",
      value: "La detección de skew (sesgo) en los datos es el primer paso para decidir si aplicar técnicas de balanceo. Involucra análisis estadísticos y visualizaciones para entender la distribución de clases."
    },
    {
      type: "img",
      value: "Visualización de skew mostrando histogramas de clases y métricas de desbalance"
    },
    {
      type: "code",
      value: `# Cálculo de métricas de desbalance
import pandas as pd
from collections import Counter

def calculate_skew_metrics(y):
    counts = Counter(y)
    majority = max(counts.values())
    minority = min(counts.values())
    imbalance_ratio = majority/minority
    
    return {
        'imbalance_ratio': imbalance_ratio,
        'class_distribution': counts
    }

skew_metrics = calculate_skew_metrics(y)
print(skew_metrics)`
    },
    {
      type: "list",
      value: [
        "Métricas clave para detectar skew:",
        "Imbalance Ratio: Proporción entre clase mayoritaria y minoritaria",
        "Distribución de clases: Conteo absoluto por clase",
        "Distancia estadística: KL-Divergence, Jensen-Shannon",
        "Pruebas estadísticas: Chi-square, Kolmogorov-Smirnov"
      ]
    }
  ],
  children: []
} 
]


export interface ContentItem {
  type: 'text' | 'img' | 'code' | 'list' | 'warning' | 'table';
  value: any;
}

export interface TopicNode {
  id: string;
  title: string;
  subtitle: string;
  content: ContentItem[];
  children: string[];
}