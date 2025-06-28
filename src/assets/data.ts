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