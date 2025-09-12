// import React, { useMemo, useState } from "react";


// return (
// <div className="w-full rounded-2xl p-4 md:p-6" style={{ background: T.card, border: `1px solid ${T.ring}` }}>
// <div className="flex items-start gap-4 md:gap-6">
// {/* Icon well */}
// <div className="shrink-0 grid place-items-center rounded-2xl h-12 w-12 md:h-14 md:w-14" style={{ background: T.pill }}>
// <img src={icon} alt="rule" className="h-8 w-8 object-contain" />
// </div>


// {/* Controls */}
// <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
// {/* Name */}
// <div>
// <div className="text-xs uppercase mb-2" style={{ color: T.muted }}>{nameLabel}</div>
// <div className="flex items-center gap-3 rounded-xl px-4 h-12" style={{ background: T.surface, border: `1px solid ${T.ring}`, color: T.text }}>
// <span className="opacity-90">{title}</span>
// </div>
// </div>


// {/* Expiration */}
// <div className="grid grid-cols-[auto_auto_1fr] items-end gap-3">
// <div className="col-span-3 text-xs uppercase mb-2" style={{ color: T.muted }}>{expLabel}</div>
// <Stepper value={qty} onChange={setQty} min={0} max={99} />
// <Stepper value={months} onChange={setMonths} min={0} max={24} />
// <Select value={unit} onChange={setUnit} options={units} />
// </div>


// {/* Condition */}
// <div>
// <div className="text-xs uppercase mb-2" style={{ color: T.muted }}>{condLabel}</div>
// <div className="flex items-center justify-between rounded-xl px-4 h-12" style={{ background: T.surface, border: `1px solid ${T.ring}`, color: T.text }}>
// <span className="truncate opacity-90">{conditionText}</span>
// <span className="text-base">▾</span>
// </div>
// </div>
// </div>


// {/* Toggle */}
// <div className="shrink-0 pt-1">
// <Toggle checked={enabled} onChange={setEnabled} />
// </div>
// </div>
// </div>
// );
// }


// /* ===================== Page ===================== */
// export default function AutoTicketDelivery() {
// return (
// <div className="min-h-screen w-full px-4 md:px-8 py-6 md:py-10" style={{ background: T.bg }}>
// <h1 className="text-xl md:text-2xl font-semibold mb-5 md:mb-7" style={{ color: T.text }}>
// Auto Ticket Delivery
// </h1>


// <div className="space-y-4 md:space-y-5">
// <RuleRow icon={ICON_FREE_TRIAL} title="Free trial ticket" stepperInit={2} conditionText="Create a new account" />
// <RuleRow icon={ICON_APP_USAGE} title="App Usage" stepperInit={1} conditionText="One Month of App Usage" />
// <RuleRow icon={ICON_APP_USAGE} title="App Usage" stepperInit={3} conditionText="6 Month of App Usage" />
// <RuleRow icon={ICON_APP_USAGE} title="App Usage" stepperInit={6} conditionText="12 Month of App Usage" />
// </div>
// </div>
// );
// }