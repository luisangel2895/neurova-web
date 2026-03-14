import { type Locale } from "@/lib/i18n";
import { siteConfig, type IconName } from "@/lib/site-config";

type Highlight = {
  title: string;
  description: string;
};

type Feature = {
  icon: IconName;
  title: string;
  description: string;
};

type Step = {
  step: string;
  title: string;
  description: string;
  points: string[];
};

type FaqItem = {
  question: string;
  answer: string;
};

type PolicySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type ScreenshotCopy = {
  alt: string;
  caption: string;
};

export const siteContent = {
  es: {
    seo: {
      keywords: [
        "Neurova",
        "app de estudio",
        "flashcards",
        "repeticion espaciada",
        "OCR para estudio",
        "flashcards con IA",
        "app educativa",
        "sincronizacion iCloud",
        "preparacion de examenes",
        "app iOS para estudiar",
      ],
      home: {
        title: `${siteConfig.name} | Flujo de estudio inteligente para iPhone`,
        description:
          "Landing oficial de Neurova con funcionalidades, capturas, soporte y politica de privacidad para la app de estudio en iOS.",
      },
      support: {
        title: "Soporte",
        description:
          "Contacta con el soporte oficial de Neurova para ayuda con sincronizacion, OCR, datos de estudio y problemas generales.",
      },
      supportSuccess: {
        title: "Solicitud recibida",
        description:
          "Pagina de confirmacion tras enviar una solicitud de soporte a Neurova.",
      },
      privacy: {
        title: "Politica de privacidad",
        description:
          "Politica de privacidad de Neurova sobre Sign in with Apple, iCloud privado, OCR, soporte y diagnosticos del producto.",
      },
    },
    navigation: {
      features: "Funciones",
      screens: "Capturas",
      howItWorks: "Como funciona",
      support: "Soporte",
      privacy: "Privacidad",
      home: "Inicio",
    },
    header: {
      tagline: "Estudia mejor en iPhone",
      languageLabel: "Idioma",
    },
    footer: {
      description:
        "Flujo de estudio premium para iPhone con flashcards, OCR, repeticion espaciada, insights, rachas y sincronizacion privada con iCloud.",
      rights: `© ${new Date().getFullYear()} ${siteConfig.name}. Todos los derechos reservados.`,
      appStoreConnectNote:
        "Marketing URL: `/` · Support URL: `/support` · Privacy URL: `/privacy`",
    },
    appStore: {
      compactLabel: "Descargar en App Store",
      heroNote: "Descarga Neurova en",
      finalNote: "Consigue Neurova en",
      titleLabel: "App Store",
      ariaLabel: "Descargar Neurova en App Store",
    },
    media: {
      screenshots: [
        {
          alt: "Pantalla principal de Neurova con progreso diario, racha, XP y decks.",
          caption: "Panel diario de estudio",
        },
        {
          alt: "Biblioteca de Neurova organizando materias y decks de estudio.",
          caption: "Biblioteca por materias",
        },
        {
          alt: "Vista de detalle de un deck con tarjetas y estado de repaso.",
          caption: "Resumen del deck",
        },
        {
          alt: "Sesion de estudio de Neurova mostrando el frente de una flashcard.",
          caption: "Repaso enfocado",
        },
        {
          alt: "Sesion de estudio de Neurova con opciones de repeticion espaciada.",
          caption: "Calificacion de memoria",
        },
        {
          alt: "Pantalla de insights con progreso de nivel, metas y salud de los decks.",
          caption: "Insights de progreso",
        },
        {
          alt: "Flujo del generador para guardar flashcards en una materia y deck.",
          caption: "Flujo del generador",
        },
      ] satisfies ScreenshotCopy[],
    },
    home: {
      hero: {
        eyebrow: "Flujo de estudio inteligente para iPhone",
        titleLead: "Convierte tus apuntes en sesiones de estudio de",
        titleAccent: "alta retencion",
        description:
          "Neurova combina flashcards, repeticion espaciada, OCR desde notas e imagenes, generacion asistida por IA, insights de progreso, rachas, XP y sincronizacion con iCloud en una experiencia calmada y premium.",
        exploreCta: "Explorar la experiencia",
        helperChips: [
          "Experiencia pensada para iPhone",
          "Luego sustituyes este link por el de tu app en App Store",
        ],
        highlights: [
          "Flashcards bien organizadas",
          "OCR desde notas e imagenes",
          "Repeticion espaciada adaptativa",
          "Sincronizacion privada con iCloud",
        ],
        sideCards: {
          ocrLabel: "OCR a tarjetas",
          ocrText: "Pasa de notas crudas a material listo para estudiar.",
          syncLabel: "Sincronizacion privada",
          syncText:
            "Pensado para iCloud y tu espacio privado en CloudKit.",
        },
        heroScreens: {
          leftCaption: "Modo de repaso enfocado",
          centerCaption: "Panel con ritmo y progreso",
          rightCaption: "Insights para detectar debilidades",
        },
        summaryCards: [
          {
            title: "Ritmo de estudio claro",
            text: "Un dashboard que mantiene visibles metas, tarjetas listas, XP y rachas sin ruido.",
          },
          {
            title: "Biblioteca ordenada",
            text: "Materias y decks estructurados para que el material generado termine donde debe.",
          },
          {
            title: "Repaso con confianza",
            text: "Sesiones enfocadas con calificacion que sostiene una repeticion espaciada real.",
          },
          {
            title: "Privacidad por defecto",
            text: "El producto se apoya en el ecosistema de Apple en lugar de rastreo publicitario.",
          },
        ],
      },
      featureHighlightsEyebrow: "Valor central",
      featureHighlights: [
        {
          title: "Un flujo, no herramientas sueltas",
          description:
            "Captura apuntes, conviertelos en tarjetas, repasa con repeticion espaciada y manten todo el ciclo en un solo lugar.",
        },
        {
          title: "Diseñado para estudiantes serios",
          description:
            "La interfaz se mantiene limpia y enfocada para que tu atencion este en el contenido y no en la UI.",
        },
        {
          title: "Privacidad como principio",
          description:
            "Tus datos de estudio viven en tu espacio privado de iCloud/CloudKit y se usan para tu experiencia, no para anuncios.",
        },
      ] satisfies Highlight[],
      screenshots: {
        eyebrow: "Capturas",
        title:
          "Una interfaz pulida que se mantiene silenciosa mientras tu progreso se hace visible.",
        description:
          "El lenguaje visual nace desde la app: superficies claras, profundidad azul, mucho aire y cards premium que mantienen la experiencia enfocada.",
        detailTitle: "Diseñada para sentirse nativa en sesiones de estudio reales",
        detailDescription:
          "Home, biblioteca, repaso, generador e insights comparten el mismo vocabulario visual para que Neurova se sienta coherente a medida que crece.",
        detailPoints: [
          "Superficies suaves con profundidad sutil",
          "Jerarquia legible para sesiones largas",
          "Gradientes contenidos y con criterio",
          "Espaciado mobile-first muy cuidado",
        ],
        assetsEyebrow: "Assets",
        assetsTitle: "Facil de reemplazar cuando publiques nuevos visuales",
        assetCards: [
          {
            title: "Logo / icono de la app",
            description: "Sustituye el asset actual en `public/logo.png`.",
          },
          {
            title: "Capturas de iPhone",
            description:
              "La galeria actual lee desde `public/screenshots/` y desde el diccionario de contenido.",
          },
          {
            title: "Capturas de iPad",
            description:
              "Cuando las tengas, puedes sumarlas al bloque `media.ipadScreenshots` sin tocar la estructura base.",
          },
        ],
      },
      features: {
        eyebrow: "Funciones",
        title:
          "Todo lo que Neurova necesita para ser un sistema de estudio, no solo un visor de tarjetas.",
        description:
          "El producto esta pensado para cerrar el ciclo completo: capturar, organizar, repasar, medir progreso y sostener constancia.",
        items: [
          {
            icon: "flashcards",
            title: "Flashcards inteligentes",
            description:
              "Crea decks limpios con rapidez, separa conceptos por materia y repasa en un flujo pensado para iPhone.",
          },
          {
            icon: "scan",
            title: "OCR / Escaneo de notas",
            description:
              "Importa texto o imagenes, captura contenido desde tus apuntes y conviertelo en algo util de inmediato.",
          },
          {
            icon: "repeat",
            title: "Repeticion espaciada",
            description:
              "Los repasos se programan segun la fuerza de tu memoria para mostrarte la tarjeta correcta en el momento correcto.",
          },
          {
            icon: "chart",
            title: "Progreso e insights",
            description:
              "Sigue readiness, salud de decks, XP y tendencias de estudio desde un dashboard que destaca lo que necesita atencion.",
          },
          {
            icon: "cloud",
            title: "Sincronizacion con iCloud",
            description:
              "Mantente sincronizado con almacenamiento privado basado en CloudKit para que tus decks, rachas y progreso te acompañen.",
          },
          {
            icon: "streak",
            title: "Metas diarias y rachas",
            description:
              "Haz visible la constancia con metas, rachas y sistemas de recompensa que convierten el estudio en habito.",
          },
        ] satisfies Feature[],
      },
      howItWorks: {
        eyebrow: "Como funciona",
        title:
          "Un ciclo de estudio mas calmado, desde material crudo hasta retencion a largo plazo.",
        description:
          "Neurova esta estructurada para que el flujo se sienta deliberado desde la primera importacion hasta el repaso final.",
        systemLabel: "Sistema de estudio",
        steps: [
          {
            step: "01",
            title: "Captura y estructura tu material",
            description:
              "Empieza con apuntes, screenshots, texto pegado o decks existentes. Neurova ayuda a convertir material disperso en entrada de estudio util.",
            points: [
              "Importa texto o contenido visual",
              "Prepara flashcards desde material real de clase",
              "Organiza todo por materia y deck",
            ],
          },
          {
            step: "02",
            title: "Genera y refina tus flashcards",
            description:
              "Transforma el material fuente en tarjetas limpias, revisa el resultado generado y guarda cada set exactamente donde corresponde.",
            points: [
              "Flujo asistido por IA",
              "Revision antes de guardar",
              "Organizacion en la biblioteca correcta",
            ],
          },
          {
            step: "03",
            title: "Repasa, adapta y mantiene el ritmo",
            description:
              "Estudia con repeticion espaciada, califica como recuerdas y deja que la app se adapte mientras construyes rachas y XP.",
            points: [
              "Sesiones de repaso enfocadas",
              "Repeticion segun dificultad",
              "Insights para ver fortalezas y debilidades",
            ],
          },
        ] satisfies Step[],
        reasonEyebrow: "Por que se siente coherente",
        reasonTitle: "Un solo lenguaje visual para todo el producto.",
        reasonDescription:
          "La landing replica el mismo tono de la app: aire limpio, profundidad azul, gradientes contenidos y una base light premium que puede extenderse a futuras vistas.",
        reasonCaption: "Vista del generador",
        reasonBullets: [
          "Tratamiento consistente de acentos azul a cian",
          "Glass cards y sombras suaves con sensacion premium",
          "Animaciones con criterio para que el producto siga sintiendose serio",
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title:
          "Respuestas a las preguntas que suelen hacerse antes de confiar en una app de estudio.",
        description:
          "Respuestas breves y directas para visitas desde App Store, trafico de soporte y gente evaluando si Neurova encaja en su flujo.",
        items: [
          {
            question: "¿Neurova sirve solo para flashcards?",
            answer:
              "Las flashcards estan en el centro, pero Neurova esta pensada como un flujo completo de estudio. Puedes capturar material fuente, generar tarjetas, organizar materias y decks, y seguir tu progreso desde un solo lugar.",
          },
          {
            question: "¿Neurova usa repeticion espaciada?",
            answer:
              "Si. El tiempo de repaso se adapta a que tan bien recuerdas cada tarjeta para que dediques mas energia a lo debil y menos a lo que ya dominas.",
          },
          {
            question: "¿Puedo crear tarjetas desde notas o imagenes?",
            answer:
              "Si. Neurova esta diseñada alrededor de OCR y entradas basadas en texto para convertir screenshots, notas o material pegado en tarjetas estructuradas mas rapido.",
          },
          {
            question: "¿Como funciona la sincronizacion?",
            answer:
              "Neurova esta pensada para usar almacenamiento privado de iCloud/CloudKit y sincronizar decks, tarjetas, progreso, rachas y preferencias entre tus dispositivos.",
          },
          {
            question: "¿La app me rastrea para anuncios?",
            answer:
              "No. Neurova no esta construida sobre publicidad de terceros ni sobre la venta de datos personales. El foco esta en el producto y en la experiencia de estudio.",
          },
        ] satisfies FaqItem[],
      },
      finalCta: {
        eyebrow: "Lista para produccion",
        title:
          "Dale a Neurova una presencia web tan cuidada como la app.",
        description:
          "Este sitio ya puede funcionar como Marketing URL, Support URL y Privacy Policy URL, manteniendo una base flexible para futuras paginas del producto.",
        supportLabel: "Hablar con soporte",
      },
    },
    support: {
      schemaDescription:
        "Pagina oficial de soporte para la app de estudio Neurova en iOS.",
      heading: {
        eyebrow: "Soporte",
        title: "¿Necesitas ayuda con Neurova?",
        description:
          "Envia un mensaje y te ayudaremos con sincronizacion, datos de estudio, OCR, acceso a cuenta o feedback general del producto.",
      },
      contactCard: {
        title: "Datos de contacto",
        description:
          "¿Prefieres email? Escríbenos directamente e incluye capturas o detalles del dispositivo para ayudarnos a reproducir el problema.",
      },
      responseCard: {
        title: "Tiempo de respuesta",
        description: "Solemos responder en 1 o 2 dias habiles.",
      },
      contextCard: {
        title: "Contexto util",
        description:
          "Modelo del dispositivo, version de iOS y capturas suelen ayudarnos a resolver problemas mucho mas rapido.",
      },
      relatedCard: {
        title: "Paginas relacionadas",
        description:
          "La pagina de soporte ya esta lista para App Store Connect, y este mismo sitio incluye tambien la politica de privacidad y la pagina de marketing.",
        homeLabel: "Inicio",
        privacyLabel: "Politica de privacidad",
      },
      faqHeading: {
        eyebrow: "FAQ de soporte",
        title: "Algunas respuestas rapidas antes de que nos escribas.",
        description:
          "Cubren las preguntas que esperamos recibir con mas frecuencia desde App Store.",
      },
      faqs: [
        {
          question: "¿Que deberia incluir en una solicitud de soporte?",
          answer:
            "Lo mas util suele ser el modelo del dispositivo, la version de iOS, que ocurrio, que esperabas que ocurriera y cualquier captura que ayude a entenderlo.",
        },
        {
          question: "¿Puedo escribir por problemas de datos o sincronizacion?",
          answer:
            "Si. Soporte puede ayudarte con visibilidad de decks, sincronizacion, acceso a cuenta, OCR y troubleshooting general.",
        },
        {
          question: "¿Tambien reciben sugerencias de funciones?",
          answer:
            "Si. El feedback sobre flujos, friccion de estudio o funciones faltantes es bienvenido y ayuda a definir futuras actualizaciones.",
        },
      ] satisfies FaqItem[],
      form: {
        fields: {
          name: {
            label: "Nombre",
            placeholder: "Tu nombre",
          },
          email: {
            label: "Email",
            placeholder: "tu@email.com",
          },
          subject: {
            label: "Asunto",
            placeholder: "Resumen breve del problema",
          },
          message: {
            label: "Mensaje",
            placeholder:
              "Describe el problema, lo que esperabas y los pasos para reproducirlo.",
          },
        },
        counterLabel: "caracteres",
        helperText:
          "La implementacion actual envía a un route handler de Next.js para que luego puedas conectar Formspree, Resend o tu propio endpoint.",
        submitLabel: "Enviar mensaje",
        sendingLabel: "Enviando...",
        validation: {
          nameRequired: "Por favor escribe tu nombre.",
          emailRequired: "Por favor escribe tu email.",
          emailInvalid: "Introduce un email valido.",
          subjectRequired: "Por favor escribe un asunto.",
          subjectShort: "El asunto deberia ser un poco mas especifico.",
          messageRequired: "Cuéntanos que paso.",
          messageShort: "Un poco mas de detalle nos ayudara a responder mejor.",
        },
        serverErrors: {
          invalidPayload: "Solicitud invalida.",
          invalidInfo: "Completa todos los campos con informacion valida.",
          submitFailed: "No se pudo enviar tu mensaje.",
          unknown: "Ocurrio un problema al enviar tu mensaje.",
        },
      },
    },
    supportSuccess: {
      eyebrow: "Mensaje enviado",
      title: "Gracias, tu solicitud de soporte ya va en camino.",
      description:
        "Recibimos tu mensaje y responderemos lo antes posible. Si necesitas añadir mas contexto, tambien puedes escribirnos directamente a",
      homeLabel: "Volver al inicio",
      privacyLabel: "Politica de privacidad",
      mascotAlt: "Mascota de Neurova celebrando",
    },
    privacy: {
      schemaDescription:
        "Politica de privacidad oficial de la app Neurova para iOS y del sitio de soporte y marketing.",
      eyebrow: "Politica de privacidad",
      title: "Informacion de privacidad clara y realmente util para Neurova.",
      description:
        "Esta politica se aplica a la app de iOS Neurova y al sitio oficial usado para marketing, soporte e informacion del producto.",
      cards: {
        effectiveDate: "Fecha de vigencia",
        contact: "Contacto",
        appStoreUrlUse: "Uso en App Store Connect",
        appStoreReady: "Lista para App Store Connect",
      },
      homeLabel: "Volver al inicio",
      supportLabel: "Contactar soporte",
      sections: [
        {
          title: "Resumen",
          paragraphs: [
            "Neurova esta diseñada para ayudarte a estudiar con flashcards, repeticion espaciada, captura por OCR, insights, metas y sincronizacion privada. Esta Politica de Privacidad explica que informacion puede procesarse cuando usas la app Neurova y este sitio web, como se utiliza y que opciones tienes.",
            "Nuestro objetivo es que esta politica sea legible y practica. No usamos Neurova como un negocio publicitario y no vendemos tus datos personales.",
          ],
        },
        {
          title: "Informacion que recopilamos",
          paragraphs: [
            "Segun como uses Neurova, podemos procesar la informacion necesaria para operar el producto y ayudarte.",
          ],
          bullets: [
            "Identificadores de cuenta asociados a Sign in with Apple.",
            "Contenido de estudio como materias, decks, flashcards, metadatos de tarjetas y preferencias.",
            "Datos de progreso como historial de repaso, XP, rachas, readiness y metricas de insights.",
            "Imagenes o texto que decidas importar para OCR o generacion de flashcards.",
            "Mensajes y datos de contacto que compartas en solicitudes de soporte.",
            "Informacion tecnica limitada, errores o datos de diagnostico disponibles a traves de Apple o proveedores de infraestructura.",
          ],
        },
        {
          title: "Como usamos la informacion",
          paragraphs: [
            "Usamos la informacion principalmente para ofrecer la experiencia de estudio que esperas de Neurova.",
          ],
          bullets: [
            "Para crear, organizar y repasar flashcards y decks.",
            "Para impulsar la programacion de repeticion espaciada, metas, rachas y insights de progreso.",
            "Para procesar OCR sobre contenido que tu decidas subir o importar.",
            "Para sincronizar tus datos entre dispositivos a traves de tu almacenamiento privado de iCloud/CloudKit.",
            "Para responder solicitudes de soporte, depurar problemas y mejorar la fiabilidad.",
          ],
        },
        {
          title: "Sign in with Apple",
          paragraphs: [
            "Si inicias sesion con Apple, recibimos la informacion limitada que Apple comparte para autenticacion y continuidad de cuenta. La usamos solo para identificar tu cuenta y darte acceso a la experiencia de la app.",
          ],
        },
        {
          title: "iCloud y sincronizacion con CloudKit",
          paragraphs: [
            "Neurova esta diseñada alrededor de iCloud y almacenamiento privado de CloudKit para sincronizar datos de usuario. Datos de estudio como decks, tarjetas, progreso, rachas y preferencias pueden almacenarse en tu base privada de iCloud para mantenerse disponibles entre dispositivos.",
            "Las bases privadas de CloudKit estan vinculadas a tu cuenta de Apple. Apple proporciona la infraestructura subyacente y el acceso esta gobernado por sus sistemas y por la configuracion de tu cuenta de iCloud.",
          ],
        },
        {
          title: "OCR, notas e inputs de estudio",
          paragraphs: [
            "Cuando eliges importar imagenes, screenshots o texto a Neurova, ese contenido puede procesarse para extraer texto, estructurar informacion y generar material de estudio. Usamos esa informacion solo para ofrecer las funciones que solicitaste, como OCR, creacion de flashcards y organizacion del estudio.",
          ],
        },
        {
          title: "Analitica y diagnosticos",
          paragraphs: [
            "Podemos usar informacion diagnostica limitada para entender crashes, bugs y fiabilidad del producto. Si se habilitan analiticas o diagnosticos, se usan para mantener y mejorar Neurova, no para crear perfiles publicitarios.",
          ],
        },
        {
          title: "Servicios de terceros",
          paragraphs: [
            "Neurova puede apoyarse en proveedores que ayudan a ofrecer autenticacion, sincronizacion privada, hosting, email o infraestructura. Entre ellos pueden estar servicios de Apple como Sign in with Apple e iCloud/CloudKit, ademas de hosting web o proveedores de email usados para operar soporte.",
            "No usamos trackers publicitarios de terceros para monetizar informacion personal y no vendemos tus datos.",
          ],
        },
        {
          title: "Retencion de datos",
          paragraphs: [
            "Los datos de estudio se conservan en general mientras sean necesarios para ofrecer la experiencia de Neurova, sujetos a tus acciones dentro de la app y al comportamiento de tu cuenta de iCloud. Las solicitudes de soporte pueden conservarse durante un periodo razonable para resolver incidencias, mantener historial de comunicaciones y mejorar la calidad del soporte.",
          ],
        },
        {
          title: "Tus opciones y derechos",
          paragraphs: [
            "Puedes gestionar o eliminar contenido de estudio dentro de la app, ajustar la configuracion de iCloud desde tu cuenta de Apple y escribirnos si tienes preguntas sobre soporte o privacidad. Dependiendo de donde vivas, la ley local puede darte derechos adicionales sobre acceso, correccion, eliminacion o restriccion de informacion personal.",
          ],
        },
        {
          title: "Privacidad de menores",
          paragraphs: [
            "Neurova no esta pensada para recopilar conscientemente informacion personal de menores de 13 años sin consentimiento apropiado. Si crees que un menor ha proporcionado informacion personal de forma inadecuada, contactanos para revisarlo.",
          ],
        },
        {
          title: "Actualizaciones de esta politica",
          paragraphs: [
            "Podemos actualizar esta Politica de Privacidad a medida que Neurova evoluciona, se agregan nuevas funciones o cambian requisitos legales. Cuando existan cambios materiales, actualizaremos la fecha de vigencia en esta pagina.",
          ],
        },
        {
          title: "Contacto",
          paragraphs: [
            "Si tienes preguntas de privacidad o necesitas ayuda con tus datos, puedes escribirnos al email de soporte indicado abajo.",
          ],
          bullets: [siteConfig.supportEmail],
        },
      ] satisfies PolicySection[],
    },
  },
  en: {
    seo: {
      keywords: [
        "Neurova",
        "study app",
        "flashcards",
        "spaced repetition",
        "OCR study app",
        "AI flashcards",
        "study insights",
        "iCloud sync",
        "learning app",
        "exam prep",
      ],
      home: {
        title: `${siteConfig.name} | Intelligent study flow for iPhone`,
        description:
          "Official Neurova landing page with product highlights, screenshots, support, and privacy information for the iOS study app.",
      },
      support: {
        title: "Support",
        description:
          "Contact Neurova support for account help, sync questions, OCR issues, and general troubleshooting.",
      },
      supportSuccess: {
        title: "Support request received",
        description:
          "Confirmation page shown after a Neurova support request is sent.",
      },
      privacy: {
        title: "Privacy Policy",
        description:
          "Privacy Policy for Neurova, covering Sign in with Apple, private iCloud sync, OCR inputs, support communication, and product diagnostics.",
      },
    },
    navigation: {
      features: "Features",
      screens: "Screens",
      howItWorks: "How it works",
      support: "Support",
      privacy: "Privacy",
      home: "Home",
    },
    header: {
      tagline: "Study smarter on iPhone",
      languageLabel: "Language",
    },
    footer: {
      description:
        "Premium study flow for iPhone with flashcards, OCR capture, spaced repetition, insights, streaks, and private iCloud sync.",
      rights: `© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.`,
      appStoreConnectNote:
        "Marketing URL: `/` · Support URL: `/support` · Privacy URL: `/privacy`",
    },
    appStore: {
      compactLabel: "Download on App Store",
      heroNote: "Download Neurova on",
      finalNote: "Get Neurova on",
      titleLabel: "App Store",
      ariaLabel: "Download Neurova on the App Store",
    },
    media: {
      screenshots: [
        {
          alt: "Neurova dashboard screen showing daily progress, streak, XP, and decks.",
          caption: "Daily study dashboard",
        },
        {
          alt: "Neurova library screen organizing study subjects and decks.",
          caption: "Organized subject library",
        },
        {
          alt: "Neurova deck detail view listing cards and review status.",
          caption: "Deck overview",
        },
        {
          alt: "Neurova study session showing the front of a flashcard.",
          caption: "Focused review mode",
        },
        {
          alt: "Neurova study session answer state with spaced repetition choices.",
          caption: "Spaced repetition grading",
        },
        {
          alt: "Neurova insights screen with level progress, goals, and deck health.",
          caption: "Progress insights",
        },
        {
          alt: "Neurova generator flow saving flashcards into a subject and deck.",
          caption: "Generator workflow",
        },
      ] satisfies ScreenshotCopy[],
    },
    home: {
      hero: {
        eyebrow: "Intelligent study flow for iPhone",
        titleLead: "Turn notes into",
        titleAccent: "high-retention study sessions",
        description:
          "Neurova combines flashcards, spaced repetition, OCR from notes and images, AI-assisted card generation, progress insights, streaks, XP, and iCloud sync in one calm, premium experience.",
        exploreCta: "Explore the flow",
        helperChips: [
          "iPhone-first experience",
          "Replace this with your real App Store link later",
        ],
        highlights: [
          "Flashcards that stay tidy",
          "OCR from notes and images",
          "Spaced repetition that adapts",
          "Private iCloud sync",
        ],
        sideCards: {
          ocrLabel: "OCR to cards",
          ocrText: "Move from raw notes to deck-ready study content.",
          syncLabel: "Private sync",
          syncText:
            "Built around iCloud and your own CloudKit private data.",
        },
        heroScreens: {
          leftCaption: "Focused review mode",
          centerCaption: "Dashboard built for momentum",
          rightCaption: "Insights that surface weak spots",
        },
        summaryCards: [
          {
            title: "Clear study rhythm",
            text: "A dashboard that keeps goals, ready cards, XP, and streaks visible without noise.",
          },
          {
            title: "Organized library",
            text: "Subjects and decks stay structured so generated material lands exactly where it should.",
          },
          {
            title: "Confident review",
            text: "Focused flashcard sessions with grading that supports a genuine spaced-repetition loop.",
          },
          {
            title: "Private by default",
            text: "The product is aligned with Apple-native account and sync behavior instead of ad tracking.",
          },
        ],
      },
      featureHighlightsEyebrow: "Core value",
      featureHighlights: [
        {
          title: "Study flow, not scattered tools",
          description:
            "Capture notes, turn them into cards, review with spaced repetition, and keep the whole loop in one place.",
        },
        {
          title: "Designed for serious learners",
          description:
            "The interface stays calm, clear, and focused so your attention stays on the material instead of the UI.",
        },
        {
          title: "Built around privacy",
          description:
            "Your study data lives in your own iCloud/CloudKit private space and is used to power your experience, not ads.",
        },
      ] satisfies Highlight[],
      screenshots: {
        eyebrow: "Screenshots",
        title:
          "A polished interface that stays quiet while your progress gets louder.",
        description:
          "The design language comes from the app itself: soft light surfaces, cool blue depth, generous spacing, and premium cards that keep the experience focused.",
        detailTitle: "Built to feel native to serious study sessions",
        detailDescription:
          "The home, library, review flow, generator, and insight screens all share the same visual vocabulary so the product feels coherent as Neurova grows.",
        detailPoints: [
          "Soft surfaces with subtle depth",
          "Readable hierarchy for long sessions",
          "Gradient accents that stay restrained",
          "Comfortable mobile-first spacing",
        ],
        assetsEyebrow: "Asset slots",
        assetsTitle: "Easy to replace as you ship new visuals",
        assetCards: [
          {
            title: "Logo / App icon",
            description: "Replace the current asset in `public/logo.png`.",
          },
          {
            title: "iPhone screenshots",
            description:
              "The current gallery reads from `public/screenshots/` and the localized content dictionary.",
          },
          {
            title: "iPad screenshots",
            description:
              "Add tablet images later in `media.ipadScreenshots` when they are ready.",
          },
        ],
      },
      features: {
        eyebrow: "Features",
        title:
          "Everything Neurova needs to become a study system, not just a card viewer.",
        description:
          "The product is intentionally built around the full loop: capture, organize, review, measure progress, and stay consistent over time.",
        items: [
          {
            icon: "flashcards",
            title: "Smart Flashcards",
            description:
              "Build clean decks fast, keep concepts separated by subject, and review in a focused flow that feels native to iPhone.",
          },
          {
            icon: "scan",
            title: "OCR / Scan Notes",
            description:
              "Import text or images, capture study material from your notes, and turn raw content into something usable right away.",
          },
          {
            icon: "repeat",
            title: "Spaced Repetition",
            description:
              "Reviews are scheduled around memory strength so you keep seeing the right cards at the right time.",
          },
          {
            icon: "chart",
            title: "Progress & Insights",
            description:
              "Track readiness, deck health, XP, and study trends with a dashboard built to surface what needs attention.",
          },
          {
            icon: "cloud",
            title: "iCloud Sync",
            description:
              "Stay in sync with private CloudKit-backed storage so your decks, streaks, and progress move with you.",
          },
          {
            icon: "streak",
            title: "Daily Goals & Streaks",
            description:
              "Keep consistency visible with goals, streaks, and rewarding momentum systems that make study habits stick.",
          },
        ] satisfies Feature[],
      },
      howItWorks: {
        eyebrow: "How it works",
        title:
          "A calmer study loop from raw material to long-term retention.",
        description:
          "Neurova is structured so the workflow feels deliberate from the first import to the final review session.",
        systemLabel: "Study system",
        steps: [
          {
            step: "01",
            title: "Capture and structure your material",
            description:
              "Start from notes, screenshots, pasted text, or existing decks. Neurova helps shape scattered material into usable study input.",
            points: [
              "Import text or visual content",
              "Prepare flashcards from real class material",
              "Keep everything organized by subject and deck",
            ],
          },
          {
            step: "02",
            title: "Generate and refine flashcards",
            description:
              "Turn source material into clean cards, review the generated output, and place each set exactly where it belongs.",
            points: [
              "AI-assisted card generation flow",
              "Review before saving",
              "Organize into the right library structure",
            ],
          },
          {
            step: "03",
            title: "Review, adapt, and keep momentum",
            description:
              "Study with spaced repetition, rate recall quality, and let the app adapt while you build streaks and XP over time.",
            points: [
              "Focused review sessions",
              "Difficulty-based repetition",
              "Insights that show what is improving and what is weak",
            ],
          },
        ] satisfies Step[],
        reasonEyebrow: "Why the flow feels coherent",
        reasonTitle: "One visual language across the whole product.",
        reasonDescription:
          "The landing mirrors the same tone your app already communicates: crisp whitespace, soft blue depth, restrained gradients, and a premium light-mode foundation that can carry into future pages.",
        reasonCaption: "Generator view",
        reasonBullets: [
          "Consistent blue-to-cyan accent treatment",
          "Glass cards and subtle shadows for a premium feel",
          "Animations added with restraint so the product still feels serious",
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title:
          "Answers to the questions users usually ask before they trust a study app.",
        description:
          "Short, direct answers for App Store visitors, support traffic, and anyone deciding whether Neurova fits their study workflow.",
        items: [
          {
            question: "Is Neurova only for flashcards?",
            answer:
              "Flashcards are at the center of the experience, but Neurova is built as a full study workflow. You can capture source material, generate cards, organize subjects and decks, and track progress in one place.",
          },
          {
            question: "Does Neurova use spaced repetition?",
            answer:
              "Yes. Review timing adapts to how well you remember each card so you can spend more time on weak material and less on what already feels easy.",
          },
          {
            question: "Can I create cards from notes or images?",
            answer:
              "Yes. Neurova is designed around OCR and text-based study inputs so you can turn screenshots, notes, or pasted material into structured cards more quickly.",
          },
          {
            question: "How does sync work?",
            answer:
              "Neurova is designed to use iCloud/CloudKit private storage for syncing study data like decks, cards, progress, streaks, and preferences across your devices.",
          },
          {
            question: "Does the app track me for ads?",
            answer:
              "No. Neurova is not built around third-party advertising or selling personal data. The focus is on powering the study experience itself.",
          },
        ] satisfies FaqItem[],
      },
      finalCta: {
        eyebrow: "Ready for production",
        title: "Give Neurova a web presence that feels as polished as the app.",
        description:
          "This site is ready to serve as your Marketing URL, Support URL, and Privacy Policy URL while staying flexible enough for future product pages.",
        supportLabel: "Talk to support",
      },
    },
    support: {
      schemaDescription:
        "Official support page for the Neurova iOS study app.",
      heading: {
        eyebrow: "Support",
        title: "Need help with Neurova?",
        description:
          "Send a message and we will help with sync issues, study data questions, OCR problems, account access, or general product feedback.",
      },
      contactCard: {
        title: "Contact details",
        description:
          "Prefer email? Reach out directly and include any screenshots or device details that can help us reproduce the issue.",
      },
      responseCard: {
        title: "Response time",
        description: "We usually reply within 1-2 business days.",
      },
      contextCard: {
        title: "Helpful context",
        description:
          "Device model, iOS version, and screenshots usually help us resolve problems much faster.",
      },
      relatedCard: {
        title: "Related pages",
        description:
          "The support page is ready for App Store Connect, and the same site also includes your official privacy policy and marketing page.",
        homeLabel: "Home",
        privacyLabel: "Privacy Policy",
      },
      faqHeading: {
        eyebrow: "Support FAQ",
        title: "A few quick answers before you send a message.",
        description:
          "These help cover the questions we expect most often from App Store users.",
      },
      faqs: [
        {
          question: "What should I include in a support request?",
          answer:
            "The most helpful reports include the device you are using, the iOS version, what happened, what you expected to happen, and any screenshots that clarify the issue.",
        },
        {
          question: "Can I ask about study data or sync issues?",
          answer:
            "Yes. Support can help with deck visibility, sync questions, account access, OCR-related issues, and general troubleshooting.",
        },
        {
          question: "Do you answer feature requests?",
          answer:
            "Yes. Feedback about workflows, study friction, and missing features is welcome and helps shape future Neurova updates.",
        },
      ] satisfies FaqItem[],
      form: {
        fields: {
          name: {
            label: "Name",
            placeholder: "Your name",
          },
          email: {
            label: "Email",
            placeholder: "you@example.com",
          },
          subject: {
            label: "Subject",
            placeholder: "Brief summary of the issue",
          },
          message: {
            label: "Message",
            placeholder:
              "Describe the problem, what you expected, and any steps to reproduce it.",
          },
        },
        counterLabel: "chars",
        helperText:
          "The current implementation posts to a Next.js route handler so you can swap in Formspree, Resend, or your own email pipeline later.",
        submitLabel: "Send message",
        sendingLabel: "Sending...",
        validation: {
          nameRequired: "Please enter your name.",
          emailRequired: "Please enter your email.",
          emailInvalid: "Please enter a valid email address.",
          subjectRequired: "Please enter a subject.",
          subjectShort: "The subject should be a little more specific.",
          messageRequired: "Please tell us what happened.",
          messageShort: "A few more details will help us answer faster.",
        },
        serverErrors: {
          invalidPayload: "Invalid request payload.",
          invalidInfo: "Please complete all fields with valid information.",
          submitFailed: "Unable to submit your message.",
          unknown: "Something went wrong while sending your message.",
        },
      },
    },
    supportSuccess: {
      eyebrow: "Message sent",
      title: "Thanks, your support request is on the way.",
      description:
        "We received your message and will reply as soon as possible. If you need to send additional context, you can also write directly to",
      homeLabel: "Back to home",
      privacyLabel: "Privacy Policy",
      mascotAlt: "Neurova mascot celebrating",
    },
    privacy: {
      schemaDescription:
        "Official privacy policy for the Neurova iOS study app and support website.",
      eyebrow: "Privacy Policy",
      title: "Clear, practical privacy information for Neurova.",
      description:
        "This policy applies to the Neurova iOS app and the official website used for marketing, support, and product information.",
      cards: {
        effectiveDate: "Effective date",
        contact: "Contact",
        appStoreUrlUse: "App Store URL use",
        appStoreReady: "Ready for App Store Connect",
      },
      homeLabel: "Back to home",
      supportLabel: "Contact support",
      sections: [
        {
          title: "Overview",
          paragraphs: [
            "Neurova is designed to help you study with flashcards, spaced repetition, OCR-based capture, insights, goals, and private sync. This Privacy Policy explains what information may be processed when you use the Neurova app and this website, how it is used, and the choices you have.",
            "Our goal is to keep this policy readable and practical. We do not use Neurova as an advertising business, and we do not sell your personal data.",
          ],
        },
        {
          title: "Information We Collect",
          paragraphs: [
            "Depending on how you use Neurova, we may process information needed to operate the product and support you.",
          ],
          bullets: [
            "Account identifiers associated with Sign in with Apple.",
            "Study content such as subjects, decks, flashcards, card metadata, and preferences.",
            "Progress data such as review history, XP, streaks, readiness, and insight-related metrics.",
            "Images or text that you choose to import for OCR or flashcard generation.",
            "Messages and contact details you provide through support requests.",
            "Limited technical, crash, or diagnostic information made available through Apple or website infrastructure providers.",
          ],
        },
        {
          title: "How We Use Information",
          paragraphs: [
            "We use information primarily to deliver the study experience you expect from Neurova.",
          ],
          bullets: [
            "To create, organize, and review flashcards and decks.",
            "To power spaced repetition scheduling, streaks, goals, and progress insights.",
            "To process OCR on content you choose to upload or import.",
            "To sync your study data across devices through your iCloud/CloudKit private storage.",
            "To respond to support requests, debug problems, and improve reliability.",
          ],
        },
        {
          title: "Sign in with Apple",
          paragraphs: [
            "If you sign in with Apple, we receive the limited account information Apple shares for authentication and account continuity. We use that information only to identify your account and provide access to the app experience.",
          ],
        },
        {
          title: "iCloud and CloudKit Sync",
          paragraphs: [
            "Neurova is designed around iCloud and CloudKit private storage for syncing user data. Study data such as decks, cards, progress, streaks, and preferences may be stored in your private iCloud database so it can remain available across your devices.",
            "CloudKit private databases are tied to your Apple account. Apple provides the underlying infrastructure for that sync, and access is governed by Apple's systems and your iCloud account settings.",
          ],
        },
        {
          title: "OCR, Notes, and Study Inputs",
          paragraphs: [
            "When you choose to import images, screenshots, or text into Neurova, that content may be processed to extract text, structure information, and generate study material. We use this information only to provide the features you requested, such as OCR, flashcard creation, and study organization.",
          ],
        },
        {
          title: "Analytics and Diagnostics",
          paragraphs: [
            "We may use limited diagnostic information to understand crashes, bugs, and product reliability. If analytics or diagnostics are enabled, they are used to maintain and improve Neurova, not to build advertising profiles.",
          ],
        },
        {
          title: "Third-Party Services",
          paragraphs: [
            "Neurova may rely on service providers that help deliver authentication, private sync, hosting, email, or infrastructure. Examples can include Apple services such as Sign in with Apple and iCloud/CloudKit, plus website hosting or email delivery providers used to operate support.",
            "We do not use third-party advertising trackers to monetize your personal information, and we do not sell your personal data.",
          ],
        },
        {
          title: "Data Retention",
          paragraphs: [
            "Study data is generally retained for as long as it is needed to provide your Neurova experience, subject to your actions inside the app and your iCloud account behavior. Support requests may be retained for a reasonable period to resolve issues, keep records of communications, and improve support quality.",
          ],
        },
        {
          title: "Your Choices and Rights",
          paragraphs: [
            "You can manage or delete study content inside the app, adjust iCloud settings through your Apple account, and contact us if you have questions about support or privacy. Depending on where you live, local law may give you additional rights regarding access, correction, deletion, or restriction of personal information.",
          ],
        },
        {
          title: "Children's Privacy",
          paragraphs: [
            "Neurova is not intended to knowingly collect personal information from children under 13 without appropriate consent. If you believe a child has provided personal information inappropriately, please contact us so we can review the situation.",
          ],
        },
        {
          title: "Updates to This Policy",
          paragraphs: [
            "We may update this Privacy Policy from time to time as Neurova evolves, new features are added, or legal requirements change. When we make material changes, we will update the effective date on this page.",
          ],
        },
        {
          title: "Contact",
          paragraphs: [
            "If you have privacy questions or need help with your data, contact us at the support email listed below.",
          ],
          bullets: [siteConfig.supportEmail],
        },
      ] satisfies PolicySection[],
    },
  },
} as const;

export type SiteDictionary = (typeof siteContent)[Locale];

export function getSiteCopy(locale: Locale) {
  return siteContent[locale];
}
