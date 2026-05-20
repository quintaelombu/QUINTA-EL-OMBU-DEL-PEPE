"use client";

import React from "react";
import Image from "next/image";
// ================== CONSTANTES ==================

const WHATSAPP_NUMBER = "542645064711"; // 54 + 264 + 5064711

// Fechas ocupadas
const RESERVED_DATES = new Set([
  // Diciembre 2025
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
  // Enero 2026
  "2026-01-01",
  "2026-01-02",
  "2026-01-03",
  "2026-01-04",
  "2026-01-05",
  "2026-01-06",
  "2026_01_07",
  "2026-01-09",
  "2026-01-10",
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
  // Febrero 2026
  "2026-02-01",
  "2026-02-02",
  "2026-02-03",
  "2026-02-04",
  "2026-02-05",
  "2026-02-06",
  "2026-02-07",
  "2026-02-08",
  "2026-02-09",
  "2026-02-10",
  "2026-02-11",
  "2026-02-12",
  "2026-02-13",
  "2026-02-14",
  "2026-02-15",
  "2026-02-16",
  "2026-02-17",
  "2026-02-18",
  "2026-02-21",
  "2026-02-22",
  "2026-02-28",
  // Marzo 2026
  "2026-03-01",
  "2026-03-03",
  "2026-03-14",
  // Abril 2026
  "2026-04-02",
  "2026-04-03",
  "2026-04-04",
  "2026-04-05",
]);

// Galería: 23 fotos en public/galeria/1.jpg ... 23.jpg
const GALLERY_IMAGES = Array.from(
  { length: 23 },
  (_, i) => `/galeria/${i + 1}.jpg`
);

// Google Forms + Hoja de respuestas
const URL_FORM_OPINIONES =
  "https://docs.google.com/forms/d/e/1FAIpQLSfTKb0QluNyyBhWD-pdaUkFMLimtFXq-pjK474SHLQchyoyAw/viewform?usp=header";

const URL_HOJA_OPINIONES =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTjZj6rM8TESloNOLLCbp5C_TWTpnSuiein7sgTKaklvOG6BaXT3G0HuAY1zIQxF85kUgw_Wvtx_4BV/pubhtml?gid=111143393&single=true";

// Ubicación
const MAPS_DEEPLINK = "https://maps.google.com/?q=-31.646320,-68.517372";
const MAPS_EMBED =
  "https://www.google.com/maps?q=-31.646320,-68.517372&z=16&output=embed";

// ================== HELPERS ==================

function formatDateHuman(dateStr) {
  const [y, m, d] = dateStr.split("-");
  return `${d}/${m}/${y}`;
}

// ================== SECCIONES ==================

function HeroSection() {
  return (
    <section className="relative w-full bg-slate-950 text-slate-50 pt-16 pb-10 flex flex-col items-center px-4">
      <div className="flex flex-col items-center gap-6 max-w-5xl w-full">
        {/* LOGO GRANDE */}
        <div className="w-full flex justify-center">
          <Image
            src="/quinta_ombu_logo_blanco.png"
            alt="Quinta El Ombú del Pepe"
            width={900}
            height={260}
            priority
            className="w-full max-w-4xl h-auto drop-shadow-[0_0_35px_rgba(45,212,191,0.65)]"
          />
        </div>

        {/* FRASE CORTA DEBAJO DEL LOGO */}
        <p
          className="
            mt-2
            text-center
            text-2xl
            md:text-3xl
            font-semibold
            tracking-wide
            text-emerald-200
          "
        >
          El mejor lugar para tus mejores momentos…
        </p>

        {/* FRASE INSPIRADORA */}
        <div className="mt-2 w-full max-w-4xl rounded-3xl border border-emerald-400/60 bg-slate-900/60 px-6 py-6 md:px-10 md:py-8 shadow-[0_0_40px_rgba(16,185,129,0.6)]">
          <p className="text-sm md:text-base leading-relaxed text-slate-100 text-center">
            Imaginá un refugio donde el susurro de los árboles te envuelve, donde el aroma del
            pasto recién cortado se mezcla con risas infantiles. Un lugar donde el tiempo se
            detiene, invitándote a explorar senderos sombreados, a compartir historias bajo la
            copa de un árbol centenario. Es un rincón donde la naturaleza te abraza y cada respiro
            es un poema en sí mismo.
          </p>
          <p className="mt-4 text-right text-xs md:text-sm text-emerald-300 font-semibold">
            — Quinta El Ombú del Pepe
          </p>
        </div>

        {/* DESCRIPCIÓN CORTA */}
        <p className="mt-3 text-[11px] md:text-xs text-center text-slate-300 max-w-3xl">
          Eventos, reuniones familiares y alojamiento en Pocito, San Juan. Pileta, salón
          climatizado con capacidad para 50 personas, parque arbolado, vajilla incluida y servicio
          de luces y sonido (sin DJ).
        </p>
      </div>
    </section>
  );
}
function Galeria() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10">
      <h2 className="text-center text-lg sm:text-xl font-semibold text-emerald-100 mb-3">
        Un vistazo a la Quinta
      </h2>
      <p className="text-[11px] sm:text-sm text-slate-300 text-center max-w-2xl mx-auto mb-4">
        Fotos en formato vertical tal como las ves en redes. Deslizá para ver el
        salón, la pileta, el parque arbolado y los espacios de descanso.
      </p>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {GALLERY_IMAGES.map((src, idx) => (
          <div
            key={src}
            className="flex-none w-[180px] sm:w-[210px] h-[280px] sm:h-[320px] rounded-3xl overflow-hidden border border-slate-700 bg-slate-900/80 shadow-lg"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
              loading={idx > 5 ? "lazy" : "eager"}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function OpcionesEvento() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 mt-10">
      <h2 className="text-center text-lg sm:text-xl font-semibold text-emerald-100 mb-2">
        Opciones de uso de la Quinta
      </h2>
      <p className="text-[11px] sm:text-sm text-slate-300 text-center max-w-3xl mx-auto mb-5">
        Los precios son por día completo de uso del{" "}
        <span className="font-semibold">salón de eventos</span> y la quinta. El
        salón climatizado tiene capacidad para hasta{" "}
        <span className="font-semibold">50 personas</span>. El excedente se cobra
        por persona adicional.
      </p>

      <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
        {/* Opción Evento */}
        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 flex flex-col">
          <h3 className="text-sm sm:text-base font-semibold text-emerald-100 mb-1">
            Opción Evento
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-300 mb-2">
            Uso de la Quinta exclusivamente como evento (sin alojamiento).
          </p>
          <ul className="text-[11px] sm:text-xs text-slate-200 space-y-1 mb-3">
            <li>• Horario: 13:00 a 23:00 o 17:00 a 05:00 (10 horas).</li>
            <li>• Salón climatizado hasta 50 personas.</li>
            <li>• Pileta, parque arbolado y espacios exteriores.</li>
            <li>• Vajilla hasta 50 personas (OPCIONAL + $50.000).</li>
            <li>• Servicio de luces y sonido (sin DJ).</li>
            <li>• Excedente por más de 50 personas: $5.000 por persona.</li>
          </ul>
          <p className="mt-auto text-sm font-semibold text-emerald-300">
            $250.000
          </p>
        </div>

        {/* Opción Evento + Alojamiento */}
        <div className="rounded-3xl border border-emerald-500/60 bg-slate-950 p-4 flex flex-col shadow-[0_0_25px_rgba(16,185,129,0.35)]">
          <h3 className="text-sm sm:text-base font-semibold text-emerald-100 mb-1">
            Evento + Alojamiento
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-300 mb-2">
            Ideal para fiestas que terminan tarde y familias que quieren quedarse
            a dormir.
          </p>
          <ul className="text-[11px] sm:text-xs text-slate-200 space-y-1 mb-3">
            <li>• Evento con las mismas condiciones que la opción anterior.</li>
            <li>• Alojamiento para hasta 9 personas.</li>
            <li>• Incluye ropa de cama y vajilla para 9 personas.</li>
            <li>• Check-in: 13:00 hs.</li>
            <li>• Check-out: 10:00 hs del día siguiente.</li>
          </ul>
          <p className="mt-auto text-sm font-semibold text-emerald-300">
            $450.000
          </p>
        </div>

        {/* Opción Alojamiento Familiar */}
        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 flex flex-col">
          <h3 className="text-sm sm:text-base font-semibold text-emerald-100 mb-1">
            Alojamiento familiar
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-300 mb-2">
            Pensado para descanso en familia, sin evento formal.
          </p>
          <ul className="text-[11px] sm:text-xs text-slate-200 space-y-1 mb-3">
            <li>• Alojamiento para hasta 9 personas.</li>
            <li>• Pueden invitar hasta 30 personas a pasar el día.</li>
            <li>• No incluye evento / no-evento (sin fiesta).</li>
            <li>• Vajilla incluida para 9 personas.</li>
            <li>• Check-in: 13:00 hs.</li>
            <li>• Check-out: 10:00 hs del día siguiente.</li>
          </ul>
          <p className="mt-auto text-sm font-semibold text-emerald-300">
            $300.000
          </p>
        </div>
      </div>
    </section>
  );
}

// ================== CALENDARIO ==================

function MonthCalendar({ label, year, month, selectedDates, onDayClick }) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startWeekDay = (firstDay.getDay() + 6) % 7; // Lunes = 0

  const cells = [];
  for (let i = 0; i < startWeekDay; i++) cells.push(null);
  for (let day = 1; day <= daysInMonth; day++) {
    const mm = String(month + 1).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    const key = `${year}-${mm}-${dd}`;
    const isReserved = RESERVED_DATES.has(key);
    const isSelected = selectedDates.includes(key);
    cells.push({ day, key, isReserved, isSelected });
  }

  const weekDays = ["L", "M", "X", "J", "V", "S", "D"];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
      <p className="text-center text-xs sm:text-sm font-semibold text-emerald-200 mb-2">
        {label}
      </p>
      <div className="grid grid-cols-7 text-[10px] sm:text-[11px] text-slate-400 mb-1">
        {weekDays.map((d) => (
          <div key={d} className="text-center">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-[11px] sm:text-xs">
        {cells.map((cell, idx) => {
          if (!cell) return <div key={idx} />;
          const { day, key, isReserved, isSelected } = cell;

          let bg = "bg-slate-900/80";
          let text = "text-slate-200";
          let border = "border-slate-700";
          let cursor = "cursor-pointer";

          if (isReserved) {
            bg = "bg-rose-700/80";
            text = "text-rose-50";
            border = "border-rose-400/80";
            cursor = "cursor-not-allowed";
          } else if (isSelected) {
            bg = "bg-emerald-700/90";
            text = "text-emerald-50";
            border = "border-emerald-300/90";
          }

          return (
            <button
              key={key}
              type="button"
              className={`h-7 sm:h-8 rounded-lg border text-center flex items-center justify-center ${bg} ${text} ${border} ${cursor} transition`}
              onClick={() => onDayClick(key, isReserved)}
              disabled={isReserved}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function CalendarioDisponibilidad() {
  const [selectedDates, setSelectedDates] = React.useState([]);
  const [mensajeExtra, setMensajeExtra] = React.useState("");
  const [startMonthIndex, setStartMonthIndex] = React.useState(0); // para navegar meses

  // TODOS LOS MESES DISPONIBLES (arrancando en ENERO 2026)
  const monthsAll = [
    { label: "Enero 2026", year: 2026, month: 0 },
    { label: "Febrero 2026", year: 2026, month: 1 },
    { label: "Marzo 2026", year: 2026, month: 2 },
    { label: "Abril 2026", year: 2026, month: 3 },
    { label: "Mayo 2026", year: 2026, month: 4 },
    { label: "Junio 2026", year: 2026, month: 5 },
    { label: "Julio 2026", year: 2026, month: 6 },
    { label: "Agosto 2026", year: 2026, month: 7 },
    { label: "Septiembre 2026", year: 2026, month: 8 },
    { label: "Octubre 2026", year: 2026, month: 9 },
    { label: "Noviembre 2026", year: 2026, month: 10 },
    { label: "Diciembre 2026", year: 2026, month: 11 },
  ];

  // mostramos SIEMPRE 3 meses juntos (ej: Enero–Febrero–Marzo)
  const visibleMonths = monthsAll.slice(startMonthIndex, startMonthIndex + 3);
  const canPrev = startMonthIndex > 0;
  const canNext = startMonthIndex + 3 < monthsAll.length;

  const handleDayClick = (dateKey, isReserved) => {
    if (isReserved) return;
    setSelectedDates((prev) => {
      if (prev.includes(dateKey)) {
        return prev.filter((d) => d !== dateKey);
      }
      return [...prev, dateKey].sort();
    });
  };

  const buildWhatsAppMessage = () => {
    let base;

    if (selectedDates.length === 1) {
      base = `Hola, quiero consultar disponibilidad y precios para el día ${formatDateHuman(
        selectedDates[0]
      )} en Quinta El Ombú del Pepe.`;
    } else if (selectedDates.length > 1) {
      const listaFechas = selectedDates
        .map((d) => `• ${formatDateHuman(d)}`)
        .join("\n");
      base =
        "Hola, quiero consultar disponibilidad y precios para las siguientes fechas en Quinta El Ombú del Pepe:\n\n" +
        listaFechas;
    } else {
      base =
        "Hola, quiero consultar disponibilidad y precios en Quinta El Ombú del Pepe.";
    }

    if (mensajeExtra.trim()) {
      base += `\n\nDetalles adicionales:\n${mensajeExtra.trim()}`;
    }

    return encodeURIComponent(base);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`;

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 mt-10">
      <h2 className="text-center text-lg sm:text-xl font-semibold text-emerald-100 mb-2">
        Disponibilidad y reservas
      </h2>
      <p className="text-[11px] sm:text-sm text-slate-300 text-center max-w-2xl mx-auto mb-3">
        Mirá los días ocupados y libres. Podés seleccionar uno o varios días
        disponibles y luego escribirnos por WhatsApp para finalizar la reserva.
        Las fechas en rojo ya están ocupadas.
      </p>

      {/* LEYENDA */}
      <div className="flex justify-center gap-4 mb-3 text-[11px] sm:text-xs text-slate-300">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-emerald-600/80 inline-block" />
          <span>Disponible</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-rose-600/80 inline-block" />
          <span>Ocupado</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full border border-emerald-300 inline-block" />
          <span>Seleccionado</span>
        </div>
      </div>

      {/* NAVEGACIÓN DE MESES */}
      <div className="flex items-center justify-between mb-2 text-[11px] sm:text-xs text-slate-300">
        <button
          type="button"
          onClick={() => canPrev && setStartMonthIndex((i) => i - 1)}
          disabled={!canPrev}
          className={`px-2 py-1 rounded-full border ${
            canPrev
              ? "border-slate-500 text-slate-200 hover:bg-slate-800"
              : "border-slate-700 text-slate-500 opacity-50 cursor-not-allowed"
          }`}
        >
          ◀ Meses anteriores
        </button>
        <span className="text-slate-400 text-center flex-1 mx-2">
          Mostrando {visibleMonths[0].label} a{" "}
          {visibleMonths[visibleMonths.length - 1].label}
        </span>
        <button
          type="button"
          onClick={() => canNext && setStartMonthIndex((i) => i + 1)}
          disabled={!canNext}
          className={`px-2 py-1 rounded-full border ${
            canNext
              ? "border-slate-500 text-slate-200 hover:bg-slate-800"
              : "border-slate-700 text-slate-500 opacity-50 cursor-not-allowed"
          }`}
        >
          Meses siguientes ▶
        </button>
      </div>

      {/* CALENDARIOS (3 MESES VISIBLES) */}
      <div className="grid md:grid-cols-3 gap-4">
        {visibleMonths.map((m) => (
          <MonthCalendar
            key={m.label}
            label={m.label}
            year={m.year}
            month={m.month}
            selectedDates={selectedDates}
            onDayClick={handleDayClick}
          />
        ))}
      </div>

      {/* RESUMEN + WHATSAPP + PROMOS */}
      <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-3">
        <div className="text-xs sm:text-sm text-slate-200">
          {selectedDates.length > 0 ? (
            <>
              <p className="mb-1">Fechas seleccionadas:</p>
              <ul className="list-disc list-inside text-slate-300">
                {selectedDates.map((d) => (
                  <li key={d}>{formatDateHuman(d)}</li>
                ))}
              </ul>
              <p className="mt-1 text-slate-300">
                Podés agregar más detalles (tipo de evento, cantidad de personas,
                etc.) en el cuadro de mensaje antes de enviar el WhatsApp.
              </p>
            </>
          ) : (
            <p>
              Seleccioná una o varias fechas libres en el calendario para
              consultar por esos días. Si querés consultar otras fechas, también
              podés escribirlas en el mensaje de WhatsApp.
            </p>
          )}
        </div>

        <textarea
          className="w-full rounded-xl bg-slate-950/70 border border-slate-700 text-xs sm:text-sm text-slate-100 px-3 py-2 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
          rows={3}
          placeholder="Escribí aquí si querés aclarar tipo de evento, cantidad de personas, horarios especiales, etc."
          value={mensajeExtra}
          onChange={(e) => setMensajeExtra(e.target.value)}
        />

        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] sm:text-xs text-slate-400 max-w-md">
            Al tocar el botón se abrirá WhatsApp con todas las fechas
            seleccionadas en el mensaje. Solo tenés que revisar y enviar.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg hover:bg-emerald-500 transition"
          >
            Consultar por WhatsApp
          </a>
        </div>

        {/* Cartel de promociones */}
        <p className="text-sm sm:text-base text-amber-300 font-bold mt-2 text-center tracking-wide uppercase">
  CONSULTE POR PROMOCIONES
</p>
      </div>
    </section>
  );
}
// ================== UBICACIÓN ==================

function Ubicacion() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 mt-10">
      <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 sm:p-6">
        <h2 className="text-center text-lg sm:text-xl font-semibold text-emerald-100 mb-2">
          ¿Cómo llegar?
        </h2>
        <p className="text-[11px] sm:text-sm text-slate-300 text-center mb-4 max-w-2xl mx-auto">
          Quinta El Ombú del Pepe · Calle 9 y Callejón Vita, Pocito, San Juan.
          Podés usar el mapa o abrir directamente Google Maps para venir con GPS.
        </p>

        <div className="w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden border border-slate-700 bg-slate-900/80">
          <iframe
            src={MAPS_EMBED}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Quinta El Ombú del Pepe"
          />
        </div>

        <div className="mt-4 flex justify-center">
          <a
            href={MAPS_DEEPLINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg hover:bg-emerald-500 transition"
          >
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

// ================== OPINIONES ==================

function Opiniones() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 mt-10">
      <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 sm:p-6">
        <h2 className="text-center text-lg sm:text-xl font-semibold text-emerald-100 mb-2">
          Opiniones de quienes ya disfrutaron la Quinta
        </h2>

        <p className="text-[11px] sm:text-sm text-slate-300 text-center mb-4 max-w-2xl mx-auto">
          Tu experiencia ayuda a otras familias a elegir{" "}
          <span className="font-semibold text-emerald-300">
            Quinta El Ombú del Pepe
          </span>
          . Podés dejar tu calificación de 1 a 5 estrellas y un comentario, o
          leer lo que ya dijeron otros.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href={URL_FORM_OPINIONES}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg hover:bg-emerald-500 transition"
          >
            ✍️ Dejar mi opinión
          </a>

          <a
            href={URL_HOJA_OPINIONES}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-slate-800 px-5 py-2 text-xs sm:text-sm font-semibold text-slate-100 shadow-lg hover:bg-slate-700 transition"
          >
            ⭐ Ver opiniones y calificaciones
          </a>
        </div>

        <p className="mt-3 text-[10px] sm:text-xs text-slate-500 text-center">
          Los formularios y las opiniones se abren en pestañas nuevas de Google
          para que puedas completarlos y verlos cómodamente.
        </p>
      </div>
    </section>
  );
}

// ================== REDES SOCIALES ==================

function RedesSociales() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 mt-10">
      <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 text-center">
        <p className="text-[11px] sm:text-sm text-slate-300 mb-3">
          Seguinos en redes para ver más fotos, videos y novedades de eventos.
        </p>
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <a
            href="https://www.instagram.com/quinta_el_ombu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400 px-4 py-2 text-[11px] sm:text-sm font-semibold text-white shadow-lg hover:opacity-90 transition"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/share/1DSutPTNYe/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-[11px] sm:text-sm font-semibold text-white shadow-lg hover:bg-blue-500 transition"
          >
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
}

// ================== PÁGINA PRINCIPAL ==================

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 pb-16">
      <HeroSection />
      <Galeria />
      <OpcionesEvento />
      <CalendarioDisponibilidad />
      <Ubicacion />
      <Opiniones />
      <RedesSociales />
    </main>
  );
}