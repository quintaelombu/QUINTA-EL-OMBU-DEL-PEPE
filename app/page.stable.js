"use client";

import Image from "next/image";
import { useState } from "react";

// ==== FECHAS OCUPADAS ====
// Formato interno SIEMPRE: "AAAA-MM-DD"
const bookedDates = [
  // DICIEMBRE 2025
  "2025-12-01",
  "2025-12-05",
  "2025-12-06",
  "2025-12-07",
  "2025-12-08",
  "2025-12-13",
  "2025-12-14",
  "2025-12-18",
  "2025-12-19",
  "2025-12-20",
  "2025-12-21",
  "2025-12-22",
  "2025-12-23",
  "2025-12-24",
  "2025-12-25",
  "2025-12-26",
  "2025-12-27",
  "2025-12-28",
  "2025-12-31",

  // ENERO 2026
  "2026-01-01",
  "2026-01-04",
  "2026-01-09",
  "2026-01-11",
  "2026-01-12",
  "2026-01-13",
  "2026-01-14",
  "2026-01-15",
  "2026-01-16",
  "2026-01-17",
  "2026-01-18",
  "2026-01-19",
  "2026-01-20",
  "2026-01-21",
  "2026-01-22",
  "2026-01-23",
  "2026-01-24",
  "2026-01-25",
  "2026-01-26",
  "2026-01-27",
  "2026-01-28",
  "2026-01-29",
  "2026-01-30",
  "2026-01-31",

  // FEBRERO 2026
  "2026-02-21",
  "2026-02-22",
];

// ==== PRECIOS (RESUMEN) ====
const PRICE_EVENTO =
  "$250.000 – Opción Evento (11 a 21 hs, hasta 50 personas; excedente $5.000 por persona desde la persona 51).";

const PRICE_EVENTO_ALOJ =
  "$450.000 – Opción Evento + alojamiento (evento de 11 a 21 hs + alojamiento hasta 8 personas).";

const PRICE_ALOJ_FAMILIAR =
  "$300.000 – Opción Alojamiento familiar (hasta 8 personas a dormir + hasta 30 personas a pasar el día, sin evento).";

// Horarios explicados en general
const HORARIOS_TEXTO =
  "Opción Evento: uso del predio de 11:00 a 21:00. En las opciones con alojamiento (Evento + alojamiento y Alojamiento familiar), el check-in es a las 11:00 y el check-out a las 10:00 del día siguiente.";

// ==== TEXTOS DETALLADOS PARA CADA OPCIÓN ====

// Opción 1: SOLO EVENTO
const SOLO_EVENTO_TEXTO = `
• Horario de uso del predio: de 11:00 a 21:00 (10 horas continuas).

• Valor: $250.000.

• Capacidad incluida: hasta 50 personas.

• Excedente por persona adicional:
  A partir de la persona 51, se cobra un adicional de $5.000 por persona.

• ¿Qué incluye la opción Evento?
  - Uso exclusivo de Quinta El Ombú del Pepe en el horario de 11 a 21 hs.
  - Pileta, salón de eventos, parque arbolado y salón climatizado (hasta 70 personas).
  - Mesas, sillas y manteles.
  - Vajilla hasta 50 personas.
  - Luces y sonido (sin DJ).

• ¿Qué NO incluye?
  - Alojamiento nocturno (no se duerme en la quinta en esta opción).
  - Servicio de DJ, catering o decoración (se contratan aparte si lo deseas).

Es la opción ideal para cumpleaños, bautismos, comuniones, reuniones familiares o eventos empresariales de día, con retirada a las 21 hs.
`;

// Opción 2: EVENTO + ALOJAMIENTO
const EVENTO_ALOJ_TEXTO = `
Esta opción suma al evento de día la posibilidad de quedarse a dormir hasta 8 personas en la casa de la quinta.

• Horario de evento:
  - Igual que la opción Evento: de 11:00 a 21:00, con uso completo del predio para festejar.

• Alojamiento:
  - Hasta 8 personas a dormir.
  - Incluye ropa de cama para las 8 personas.
  - Incluye vajilla para las comidas de las 8 personas alojadas (cena, desayuno, etc.).

• Vajilla:
  - Durante el evento: vajilla hasta 50 personas.
  - Para el alojamiento: vajilla para las 8 personas que se quedan a dormir.

• Horarios de alojamiento:
  - Check-in: 11:00 hs.
  - Check-out: 10:00 hs del día siguiente.

• Valor: $450.000.

• ¿Qué incluye la parte de evento?
  - Lo mismo que la opción Evento:
    - Uso exclusivo de la quinta de 11 a 21 hs.
    - Pileta, salón de eventos, parque arbolado y salón climatizado (hasta 70 personas).
    - Mesas, sillas y manteles.
    - Vajilla hasta 50 personas.
    - Luces y sonido (sin DJ).

Es la opción pensada para quienes quieren festejar y, además, disfrutar la noche en familia o con un grupo íntimo, sin necesidad de volver a la ciudad ese mismo día.
`;

// Opción 3: ALOJAMIENTO FAMILIAR (SIN EVENTO)
const ALOJ_FAMILIAR_TEXTO = `
Opción pensada para descanso y reunión tranquila en familia, SIN evento.

• Valor: $300.000.

• Alojamiento:
  - Hasta 8 personas a dormir en la casa de la quinta.

• Horarios de alojamiento:
  - Check-in: 11:00 hs.
  - Check-out: 10:00 hs del día siguiente.

• Invitados de día:
  - Podés invitar hasta 30 personas a pasar el día al predio.

• Vajilla:
  - Vajilla incluida para hasta 8 personas (grupo que se aloja).
  - No se incluye vajilla para más de 8 en formato de evento o fiesta.

• ¿Qué incluye?
  - Uso de la casa para alojamiento de las 8 personas.
  - Uso del predio para pasar el día con hasta 30 invitados.
  - Pileta, salón de eventos, parque arbolado y espacios al aire libre.
  - Mesas, sillas y manteles en modo encuentro familiar.

• ¿Qué NO incluye?
  - No está permitida la realización de eventos (no incluye fiestas con música alta, DJ o formato de salón de fiestas).
  - No está pensada para eventos masivos, sino para uso familiar y recreativo tranquilo.

Es la opción ideal para escapadas familiares, fines de semana de descanso, reuniones tranquilas con chicos y adultos disfrutando la naturaleza, sin formato de evento.
`;

// ==== GALERÍA DE FOTOS ====
const imagenesGaleria = [
  {
    src: "/galeria/1.jpg",
    alt: "Momento de relax junto a la pileta en Quinta El Ombú del Pepe",
  },
  {
    src: "/galeria/2.jpg",
    alt: "Parque arbolado y rincones verdes para descansar",
  },
  {
    src: "/galeria/3.jpg",
    alt: "Salón de eventos preparado para un festejo especial",
  },
  {
    src: "/galeria/4.jpg",
    alt: "Detalles cuidados en los espacios exteriores",
  },
  {
    src: "/galeria/5.jpg",
    alt: "Mesas y sillas listas para compartir en familia",
  },
  {
    src: "/galeria/6.jpg",
    alt: "Parque y áreas para juegos",
  },
  {
    src: "/galeria/7.jpg",
    alt: "Atardecer en Quinta El Ombú del Pepe",
  },
];

// Carrusel vertical SIN texto ni etiquetas visibles
function GaleriaConFlechasVertical() {
  const [indice, setIndice] = useState(0);

  if (imagenesGaleria.length === 0) {
    return (
      <p className="text-sm text-slate-300">
        Próximamente fotos de Quinta El Ombú del Pepe.
      </p>
    );
  }

  const actual = imagenesGaleria[indice];

  const siguiente = () => {
    setIndice((prev) => (prev + 1) % imagenesGaleria.length);
  };

  const anterior = () => {
    setIndice((prev) => (prev - 1 + imagenesGaleria.length) % imagenesGaleria.length);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-xs sm:max-w-sm">
        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-3xl border border-emerald-400/30 bg-slate-900">
          <img
            src={actual.src}
            alt={actual.alt}
            className="w-full h-full object-contain bg-black"
          />

          <button
            onClick={anterior}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/70 border border-slate-400/70 w-9 h-9 flex items-center justify-center text-slate-100 hover:bg-black/90 hover:border-emerald-400 transition"
          >
            ‹
          </button>

          <button
            onClick={siguiente}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/70 border border-slate-400/70 w-9 h-9 flex items-center justify-center text-slate-100 hover:bg-black/90 hover:border-emerald-400 transition"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

function PosterFraseVertical() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-xs sm:max-w-sm">
        <div className="relative w-full aspect-[3/4] rounded-3xl border-emerald-400/70 border bg-slate-950/95 shadow-[0_0_40px_rgba(16,185,129,0.45)] px-5 py-5 sm:px-6 sm:py-6 flex flex-col justify-between">
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 text-emerald-300 text-[10px] sm:text-xs">
              <span className="h-px w-10 bg-emerald-400/70" />
              <span className="tracking-[0.25em] uppercase">✦ Inspiración ✦</span>
              <span className="h-px w-10 bg-emerald-400/70" />
            </div>
          </div>

          <div className="mt-3 flex-1 flex flex-col justify-center space-y-1.5 text-center text-emerald-50 text-[12px] sm:text-[13px] leading-snug">
            <p className="uppercase tracking-[0.18em] text-[10px] sm:text-[11px] text-emerald-200/90">
              Imagina un refugio
            </p>
            <p className="font-semibold text-[13px] sm:text-sm">
              donde el <span className="uppercase tracking-wide">susurro de los árboles</span> te
              envuelve,
            </p>
            <p>
              donde el aroma del <span className="font-semibold">pasto recién cortado</span> se
              mezcla
            </p>
            <p>
              con <span className="uppercase tracking-wide text-emerald-200">risas infantiles</span>{" "}
              y charlas compartidas.
            </p>
            <p className="mt-1">
              Un lugar donde el <span className="font-semibold">tiempo se detiene</span>,
            </p>
            <p>
              invitándote a explorar{" "}
              <span className="uppercase tracking-wide">senderos sombreados</span>
            </p>
            <p>y a contar historias bajo la copa de un árbol centenario.</p>
            <p className="mt-1">
              Un rincón donde la <span className="italic">naturaleza te abraza</span>
            </p>
            <p>y cada respiro es un pequeño poema.</p>
          </div>

          <div className="mt-3 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-emerald-300 text-[10px]">
              <span className="h-px w-8 bg-emerald-400/70" />
              <span className="text-[9px] tracking-[0.25em] uppercase">✦ ✧ ✦</span>
              <span className="h-px w-8 bg-emerald-400/70" />
            </div>
            <p className="text-[10px] sm:text-[11px] text-emerald-200/95 tracking-[0.22em] uppercase">
              Quinta El Ombú del Pepe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==== CALENDARIO DE DISPONIBILIDAD ====

// Formato interno "AAAA-MM-DD"
function formatDate(year, monthIndex, day) {
  const m = String(monthIndex + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

// Mostrar al usuario como "DD/MM/AAAA"
function formatForHuman(dateStr) {
  const [y, m, d] = dateStr.split("-");
  return `${d}/${m}/${y}`;
}

const monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const weekDays = ["L", "M", "X", "J", "V", "S", "D"];

function CalendarioDisponibilidad() {
  const hoy = new Date();
  const [year, setYear] = useState(hoy.getFullYear());
  const [month, setMonth] = useState(hoy.getMonth());
  const [selectedDates, setSelectedDates] = useState([]);

  const bookedSet = new Set(bookedDates);

  const firstDay = new Date(year, month, 1);
  const jsDay = firstDay.getDay();
  const firstWeekday = (jsDay + 6) % 7;

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const weeks = [];
  let currentDay = 1;
  let started = false;

  while (currentDay <= daysInMonth) {
    const week = [];
    for (let weekday = 0; weekday < 7; weekday++) {
      if (!started && weekday === firstWeekday) {
        started = true;
      }
      if (!started || currentDay > daysInMonth) {
        week.push(null);
      } else {
        const dateStr = formatDate(year, month, currentDay);
        week.push({ day: currentDay, dateStr });
        currentDay++;
      }
    }
    weeks.push(week);
  }

  const toggleDate = (dateStr) => {
    if (bookedSet.has(dateStr)) return;

    setSelectedDates((prev) => {
      if (prev.includes(dateStr)) {
        return prev.filter((d) => d !== dateStr);
      }
      const updated = [...prev, dateStr];
      updated.sort();
      return updated;
    });
  };

  const prevMonth = () => {
    setSelectedDates([]);
    setMonth((prev) => {
      if (prev === 0) {
        setYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const nextMonth = () => {
    setSelectedDates([]);
    setMonth((prev) => {
      if (prev === 11) {
        setYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  const abrirWhatsapp = () => {
    let mensaje;
    if (selectedDates.length === 0) {
      mensaje =
        "Hola, quiero consultar por disponibilidad en Quinta El Ombú del Pepe.";
    } else {
      const lista = selectedDates.map(formatForHuman).join(", ");
      mensaje = `Hola, quiero consultar por disponibilidad en Quinta El Ombú del Pepe para estas fechas: ${lista}.`;
    }

    const url =
      "https://wa.me/5492645064711?text=" + encodeURIComponent(mensaje);
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={prevMonth}
          className="px-3 py-1 rounded-full border border-emerald-400/40 text-xs sm:text-sm text-emerald-100 hover:bg-emerald-500/10"
        >
          ‹ Mes anterior
        </button>
        <div className="text-sm sm:text-base font-semibold text-emerald-100">
          {monthNames[month]} {year}
        </div>
        <button
          onClick={nextMonth}
          className="px-3 py-1 rounded-full border border-emerald-400/40 text-xs sm:text-sm text-emerald-100 hover:bg-emerald-500/10"
        >
          Mes siguiente ›
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-emerald-400/30 bg-slate-950/70">
        <div className="grid grid-cols-7 text-center text-[11px] sm:text-xs font-semibold bg-slate-900/80 text-emerald-100">
          {weekDays.map((d) => (
            <div key={d} className="py-2">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 text-center text-xs sm:text-sm">
          {weeks.map((week, i) =>
            week.map((cell, j) => {
              if (!cell) {
                return (
                  <div
                    key={`${i}-${j}`}
                    className="py-3 sm:py-4 border-t border-slate-800/40 bg-slate-950"
                  />
                );
              }

              const isBooked = bookedSet.has(cell.dateStr);
              const isSelected = selectedDates.includes(cell.dateStr);

              let bg = "bg-slate-950";
              let text = "text-slate-100";
              let border = "border-slate-800/60";

              if (isBooked) {
                bg = "bg-red-900/60";
                text = "text-red-50";
                border = "border-red-500/50";
              } else if (isSelected) {
                bg = "bg-emerald-600/80";
                text = "text-slate-950 font-semibold";
                border = "border-emerald-300/80";
              }

              return (
                <button
                  key={cell.dateStr}
                  onClick={() => toggleDate(cell.dateStr)}
                  className={`py-3 sm:py-4 border-t ${border} ${bg} hover:bg-emerald-500/30 transition-colors`}
                >
                  <span className={text}>{cell.day}</span>
                </button>
              );
            })
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 text-[11px] sm:text-xs text-slate-200">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-slate-700 border border-slate-500/70" />
          <span>Libre (seleccionable)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-emerald-500 border border-emerald-200" />
          <span>Seleccionado para consultar</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-red-800 border border-red-400" />
          <span>Ocupado / reservado</span>
        </div>
      </div>

      <div className="space-y-2">
        <button
          onClick={abrirWhatsapp}
          className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 transition"
        >
          Consultar por WhatsApp estas fechas
        </button>
        <p className="text-[11px] sm:text-xs text-slate-300">
          Podés seleccionar una o varias fechas libres y luego tocar el botón para
          enviar la consulta por WhatsApp.
        </p>
      </div>

      {bookedDates.length > 0 && (
        <div className="mt-2 text-[11px] sm:text-xs text-slate-300">
          <p className="font-semibold text-emerald-200 mb-1">
            Fechas ya reservadas:
          </p>
          <p>{bookedDates.map(formatForHuman).join(" · ")}</p>
        </div>
      )}
    </div>
  );
}

// ==== PÁGINA PRINCIPAL ====

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8">
      {/* PORTADA: LOGO GRANDE + FRASE */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center gap-5 sm:gap-6">
        <div className="relative w-[82vw] max-w-[40rem] aspect-[4/3] sm:w-[75vw] sm:max-w-[42rem] md:w-[70vw] md:max-w-[46rem]">
          <Image
            src="/quinta_ombu_logo_blanco.png"
            alt="Quinta El Ombú del Pepe"
            fill
            className="object-contain drop-shadow-[0_0_55px_rgba(16,185,129,0.9)]"
          />
        </div>
        <p className="text-center text-xl sm:text-3xl font-medium text-emerald-100">
          El mejor lugar para tus mejores momentos...
        </p>
      </section>

      {/* FOTOS VERTICALES + FRASE INSPIRADORA */}
      <section className="pb-10 border-b border-slate-800 mt-2 sm:mt-4">
        <div className="grid gap-8 sm:grid-cols-2 sm:items-stretch">
          <GaleriaConFlechasVertical />
          <PosterFraseVertical />
        </div>
      </section>

      {/* DESCRIPCIÓN Y SERVICIOS */}
      <section className="mt-8 grid gap-8 sm:gap-10 sm:grid-cols-2 sm:items-start">
        <div className="space-y-5">
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            Eventos y alojamiento en Pocito, San Juan. Pileta, salón de eventos, parque
            arbolado y salón climatizado con capacidad de hasta 70 personas.
          </p>
          <div className="space-y-2 text-sm text-slate-200">
            <p>
              Servicios incluidos: vajilla, mesas, sillas y manteles, luces y sonido
              (sin DJ).
            </p>
            <p>
              Ideal para cumpleaños, reuniones familiares, eventos empresariales,
              bautismos y cualquier celebración que quieras vivir en un entorno verde
              y tranquilo.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#calendario"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
            >
              Ver calendario y precios
            </a>
            <a
              href="#whatsapp"
              className="inline-flex items-center justify-center rounded-full border border-emerald-400/40 px-5 py-2.5 text-sm font-medium text-emerald-100 hover:bg-emerald-500/10 transition"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        {/* Bloque resumen de servicios */}
        <div className="relative">
          <div className="rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 shadow-2xl overflow-hidden p-6 space-y-3 text-sm text-emerald-50">
            <p className="font-semibold text-emerald-100">
              Todo lo que necesitás para tu evento:
            </p>
            <ul className="space-y-1 text-emerald-50/90">
              <li>• Pileta y parque arbolado</li>
              <li>• Salón de eventos climatizado (hasta 70 personas)</li>
              <li>• Vajilla, mesas, sillas y manteles incluidos</li>
              <li>• Luces y sonido incluidos (sin DJ)</li>
              <li>• Espacios pensados para fotos y recuerdos</li>
            </ul>
            <p className="pt-2 text-xs text-emerald-200/80">
              Consultá por fechas disponibles y tarifas actualizadas por WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARTÍ TU EXPERIENCIA */}
      <section
        id="experiencias"
        className="mt-10 sm:mt-12 border border-emerald-400/25 rounded-2xl bg-slate-950/70 p-5 sm:p-6 space-y-3"
      >
        <h2 className="text-lg font-semibold text-emerald-100">
          Compartí tu experiencia
        </h2>
        <p className="text-sm text-slate-200">
          Si ya viviste un cumpleaños, evento o estadía en Quinta El Ombú del Pepe, podés
          contarnos cómo fue tu experiencia y mandarnos tus fotos favoritas. Nos ayuda un
          montón y también inspira a otras familias a animarse a venir.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="https://wa.me/5492645064711?text=Hola,%20quiero%20compartir%20mis%20comentarios%20y%20fotos%20de%20mi%20experiencia%20en%20Quinta%20El%20Omb%C3%BA%20del%20Pepe."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 transition"
          >
            Enviar comentario y fotos por WhatsApp
          </a>
          <a
            href="https://www.instagram.com/quintadelombudelpepe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-emerald-400/40 px-5 py-2.5 text-sm font-medium text-emerald-100 hover:bg-emerald-500/10 transition"
          >
            Ver y etiquetar en Instagram
          </a>
        </div>
      </section>

      {/* WHATSAPP GENERAL */}
      <section
        id="whatsapp"
        className="mt-10 sm:mt-12 border border-emerald-400/20 rounded-2xl bg-slate-950/60 p-5 sm:p-6 space-y-3"
      >
        <h2 className="text-lg font-semibold text-emerald-100">
          Consultas rápidas por WhatsApp
        </h2>
        <p className="text-sm text-slate-200">
          Si ya tenés una fecha en mente, escribinos directo por WhatsApp para consultar
          disponibilidad de Quinta El Ombú del Pepe.
        </p>
        <a
          href="https://wa.me/5492645064711?text=Hola,%20quiero%20consultar%20por%20disponibilidad%20en%20Quinta%20El%20Omb%C3%BA%20del%20Pepe."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 transition"
        >
          Escribir por WhatsApp
        </a>
      </section>

      {/* CALENDARIO Y PRECIOS */}
      <section
        id="calendario"
        className="mt-10 sm:mt-12 border border-dashed border-emerald-400/30 rounded-2xl bg-slate-950/40 p-5 sm:p-6 space-y-4"
      >
        <h2 className="text-lg font-semibold text-emerald-100">
          Calendario y precios
        </h2>
        <p className="text-sm text-slate-300">
          Elegí las fechas que te interesan directamente en el calendario. Los días
          marcados en rojo ya están ocupados. Podés seleccionar uno o varios días libres
          y luego enviar la consulta por WhatsApp.
        </p>

        <div className="mt-2 mb-4 rounded-2xl border border-emerald-400/25 bg-slate-950/80 p-4 text-sm text-emerald-50 space-y-3">
          <p className="font-semibold text-emerald-100">Tarifas orientativas:</p>
          <ul className="space-y-1">
            <li>• {PRICE_EVENTO}</li>
            <li>• {PRICE_EVENTO_ALOJ}</li>
            <li>• {PRICE_ALOJ_FAMILIAR}</li>
          </ul>
          <p className="pt-2 text-xs text-emerald-200/90">
            Los valores pueden ajustarse según fecha, cantidad de personas y tipo de
            evento. Confirmamos el precio final por WhatsApp.
          </p>
          <p className="mt-2 text-xs text-emerald-200/90">{HORARIOS_TEXTO}</p>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <a
              href="#solo-evento"
              className="block rounded-2xl border border-emerald-400/40 bg-slate-950/80 p-3 hover:bg-emerald-500/10 transition"
            >
              <p className="text-sm font-semibold text-emerald-100">Solo evento</p>
              <p className="mt-1 text-xs text-emerald-200">
                Opción de 11 a 21 hs, sin alojamiento.
              </p>
            </a>
            <a
              href="#evento-alojamiento"
              className="block rounded-2xl border border-emerald-400/40 bg-slate-950/80 p-3 hover:bg-emerald-500/10 transition"
            >
              <p className="text-sm font-semibold text-emerald-100">
                Evento + alojamiento
              </p>
              <p className="mt-1 text-xs text-emerald-200">
                Festejá y quedate a dormir con tu grupo.
              </p>
            </a>
            <a
              href="#alojamiento-familiar"
              className="block rounded-2xl border border-emerald-400/40 bg-slate-950/80 p-3 hover:bg-emerald-500/10 transition"
            >
              <p className="text-sm font-semibold text-emerald-100">
                Alojamiento familiar
              </p>
              <p className="mt-1 text-xs text-emerald-200">
                Hasta 8 a dormir + 30 a pasar el día, sin evento.
              </p>
            </a>
          </div>
        </div>

        <CalendarioDisponibilidad />
      </section>

      {/* UBICACIÓN */}
      <section
        id="ubicacion"
        className="mt-10 sm:mt-12 border border-emerald-400/25 rounded-2xl bg-slate-950/70 p-5 sm:p-6 space-y-3"
      >
        <h2 className="text-lg font-semibold text-emerald-100">
          Ubicación y cómo llegar
        </h2>
        <p className="text-sm text-slate-200">
          Quinta El Ombú del Pepe está ubicada en{" "}
          <span className="font-semibold">
            Calle 9 y Callejón Vita, Pocito, San Juan, Argentina
          </span>
          . Podés abrir la ubicación directamente en Google Maps y seguir las indicaciones
          desde tu celular.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Quinta+El+Omb%C3%BA+del+Pepe,+Calle+9+%26+Callej%C3%B3n+Vita,+Pocito,+San+Juan,+Argentina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 transition"
          >
            Abrir en Google Maps
          </a>
          <p className="text-[11px] sm:text-xs text-slate-300 max-w-md">
            Si tenés el link exacto de Google Maps de la Quinta, podés reemplazarlo en
            esta sección sin modificar el resto de la página.
          </p>
        </div>
      </section>

      {/* DETALLE SOLO EVENTO */}
      <section
        id="solo-evento"
        className="mt-10 sm:mt-12 border border-emerald-400/30 rounded-2xl bg-slate-950/80 p-5 sm:p-6 space-y-3"
      >
        <h2 className="text-lg font-semibold text-emerald-100">
          Opción: Solo evento (sin alojamiento)
        </h2>
        <p className="text-sm whitespace-pre-line text-slate-200">
          {SOLO_EVENTO_TEXTO}
        </p>
      </section>

      {/* DETALLE EVENTO + ALOJAMIENTO */}
      <section
        id="evento-alojamiento"
        className="mt-8 sm:mt-10 border border-emerald-400/30 rounded-2xl bg-slate-950/80 p-5 sm:p-6 space-y-3"
      >
        <h2 className="text-lg font-semibold text-emerald-100">
          Opción: Evento + alojamiento
        </h2>
        <p className="text-sm whitespace-pre-line text-slate-200">
          {EVENTO_ALOJ_TEXTO}
        </p>
      </section>

      {/* DETALLE ALOJAMIENTO FAMILIAR */}
      <section
        id="alojamiento-familiar"
        className="mt-8 sm:mt-10 border border-emerald-400/30 rounded-2xl bg-slate-950/80 p-5 sm:p-6 space-y-3"
      >
        <h2 className="text-lg font-semibold text-emerald-100">
          Opción: Alojamiento familiar (sin evento)
        </h2>
        <p className="text-sm whitespace-pre-line text-slate-200">
          {ALOJ_FAMILIAR_TEXTO}
        </p>
      </section>

      {/* REDES SOCIALES - AL FINAL DE LA PÁGINA */}
      <section
        id="redes"
        className="mt-8 mb-10 border-t border-slate-800 pt-6 flex flex-col items-center gap-3"
      >
        <h2 className="text-base sm:text-lg font-semibold text-emerald-100">
          Seguinos en redes
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 text-center max-w-md">
          Mirá más fotos, historias y novedades de Quinta El Ombú del Pepe en nuestras
          redes sociales.
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href="https://www.instagram.com/quintadelombudelpepe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-5 py-2 text-sm font-medium text-white shadow-lg hover:opacity-90 transition"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-lg hover:bg-blue-500 transition"
          >
            Facebook
          </a>
        </div>
        <p className="text-[11px] text-slate-400 mt-1 text-center max-w-xs">
          Si ya tenés la URL exacta de tu página de Facebook de la Quinta, podés reemplazar
          este enlace genérico en el código por el link correcto.
        </p>
      </section>
    </div>
  );
}
