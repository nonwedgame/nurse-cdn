
/* ==================== constants.js ==================== */
// Shared constants for the nurse scheduling app.
// Loaded first; everything else can read these via window.

const SHIFT_TYPES = {
  'ช': { label: 'ช', name: 'เช้า', bg: '#fef9c3', fg: '#854d0e', order: 1 },
  'บ': { label: 'บ', name: 'บ่าย', bg: '#bae6fd', fg: '#075985', order: 2 },
  'ด': { label: 'ด', name: 'ดึก', bg: '#a5f3fc', fg: '#155e75', order: 3 },
  'ชบ': { label: 'ชบ', name: 'โย้หน้า', bg: '#fcd34d', fg: '#78350f', order: 4 },
  'ดบ': { label: 'ดบ', name: 'โย้หลัง', bg: '#5eead4', fg: '#134e4a', order: 5 },
  'ชด': { label: 'ชด', name: 'เช้าดึก', bg: '#c4b5fd', fg: '#4c1d95', order: 6 },
  'O': { label: 'O', name: 'OFF', bg: '#e2e8f0', fg: '#475569', order: 7 },
  'V': { label: 'V', name: 'ลาพักร้อน', bg: '#bbf7d0', fg: '#14532d', order: 8 },
  'T': { label: 'T', name: 'ลาประชุม', bg: '#fbcfe8', fg: '#831843', order: 9 },
  'เย็น': { label: 'เย็น', name: 'เวรเย็น (16:30–18:30)', bg: '#fed7aa', fg: '#9a3412', order: 10 },
  'OT': { label: 'OT', name: 'โอทีวันหยุด', bg: '#fca5a5', fg: '#7f1d1d', order: 11 },
  'D12': { label: 'D12', name: 'เวรกลางวัน 12 ชม.', bg: '#fde68a', fg: '#78350f', order: 12 },
  'N12': { label: 'N12', name: 'เวรกลางคืน 12 ชม.', bg: '#818cf8', fg: '#1e1b4b', order: 13 }
};

const POSITIONS = {
  // ── กลุ่ม 0: โรงพยาบาล (ชุดเดิม) ──
  'หัวหน้าหอผู้ป่วย': { icon: '⭐', cls: 'pos-head', track: 'วิชาชีพ', group: 0, weekdayMorningOnly: true, maxOne: true },
  'รองหัวหน้าหอผู้ป่วย': { icon: '🌟', cls: 'pos-deputy', track: 'วิชาชีพ', group: 0, weekdayMorningOnly: true, maxOne: false },
  'พยาบาลหัวหน้าเวร': { icon: '💎', cls: 'pos-shift', track: 'วิชาชีพ', group: 0, weekdayMorningOnly: false, maxOne: false },
  'พยาบาลวิชาชีพ': { icon: '👤', cls: 'pos-rn', track: 'วิชาชีพ', group: 0, weekdayMorningOnly: false, maxOne: false },
  'พยาบาลเทคนิค': { icon: '🔧', cls: 'pos-tech', track: 'วิชาชีพ', group: 0, weekdayMorningOnly: false, maxOne: false },
  'ผู้ช่วยพยาบาล': { icon: '🤝', cls: 'pos-aide', track: 'สนับสนุน', group: 0, weekdayMorningOnly: false, maxOne: false },
  // ── กลุ่ม 1: รพ.สต. — บริหารและวิชาชีพหลัก ──
  'ผอ.รพ.สต.': { icon: '⭐', cls: 'pos-head', track: 'วิชาชีพ', group: 1, weekdayMorningOnly: true, maxOne: true },
  'พยาบาลวิชาชีพ (รพ.สต.)': { icon: '💙', cls: 'pos-rn', track: 'วิชาชีพ', group: 1, weekdayMorningOnly: false, maxOne: false },
  'นักวิชาการสาธารณสุข': { icon: '🔬', cls: 'pos-ph', track: 'วิชาชีพ', group: 1, weekdayMorningOnly: false, maxOne: false },
  'เจ้าพนักงานสาธารณสุขชุมชน': { icon: '🏥', cls: 'pos-chw', track: 'วิชาชีพ', group: 1, weekdayMorningOnly: false, maxOne: false },
  // ── กลุ่ม 2: รพ.สต. — วิชาชีพเฉพาะทาง ──
  'ทันตแพทย์': { icon: '🦷', cls: 'pos-dent', track: 'วิชาชีพ', group: 2, weekdayMorningOnly: false, maxOne: false },
  'เจ้าพนักงานทันตสาธารณสุข': { icon: '🦷', cls: 'pos-dentech', track: 'วิชาชีพ', group: 2, weekdayMorningOnly: false, maxOne: false },
  'แพทย์แผนไทย': { icon: '🌿', cls: 'pos-trad', track: 'วิชาชีพ', group: 2, weekdayMorningOnly: false, maxOne: false },
  'นักกายภาพบำบัด': { icon: '🦴', cls: 'pos-pt', track: 'วิชาชีพ', group: 2, weekdayMorningOnly: false, maxOne: false },
  // ── กลุ่ม 3: รพ.สต. — สนับสนุนบริการ ──
  'เจ้าพนักงานธุรการ': { icon: '📋', cls: 'pos-admin', track: 'สนับสนุน', group: 3, weekdayMorningOnly: false, maxOne: false },
  'พนักงานช่วยการพยาบาล': { icon: '🤝', cls: 'pos-aide', track: 'สนับสนุน', group: 3, weekdayMorningOnly: false, maxOne: false },
  'พนักงานทั่วไป': { icon: '👷', cls: 'pos-gen', track: 'สนับสนุน', group: 3, weekdayMorningOnly: false, maxOne: false },
  'แม่บ้าน': { icon: '🧹', cls: 'pos-clean', track: 'สนับสนุน', group: 3, weekdayMorningOnly: false, maxOne: false },
  'พนักงานขับรถ': { icon: '🚗', cls: 'pos-driver', track: 'สนับสนุน', group: 3, weekdayMorningOnly: false, maxOne: false },
};

const THAI_MONTHS = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
  'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
const THAI_DAYS_SHORT = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'];

const DEFAULT_NURSES = [
  { id: 'N001', name: 'นางสาวสมหญิง พยาบาลดี', position: 'หัวหน้าหอผู้ป่วย', order: 1, active: true },
  { id: 'N002', name: 'นางสาวมาลี ใจดีงาม', position: 'รองหัวหน้าหอผู้ป่วย', order: 2, active: true },
  { id: 'N003', name: 'นางสาวจันทร์ พริ้งเพรา', position: 'พยาบาลหัวหน้าเวร', order: 3, active: true },
  { id: 'N004', name: 'นางสาวอัญชลี สดใส', position: 'พยาบาลหัวหน้าเวร', order: 4, active: true },
  { id: 'N005', name: 'นางสาวปิยะดา ทองดี', position: 'พยาบาลวิชาชีพ', order: 5, active: true },
  { id: 'N006', name: 'นางสาวศิริพร แสงสว่าง', position: 'พยาบาลวิชาชีพ', order: 6, active: true },
  { id: 'N007', name: 'นางสาวพรทิพย์ ขยันยิ่ง', position: 'พยาบาลวิชาชีพ', order: 7, active: true },
  { id: 'N008', name: 'นางสาวรัตนา สุขใจ', position: 'พยาบาลวิชาชีพ', order: 8, active: true },
  { id: 'N009', name: 'นางสาวกาญจนา รักงาน', position: 'พยาบาลวิชาชีพ', order: 9, active: true },
  { id: 'N010', name: 'นางสาวนภาพร ตั้งใจ', position: 'พยาบาลเทคนิค', order: 10, active: true },
  { id: 'N011', name: 'นางสาวสุดา ขยันมาก', position: 'พยาบาลเทคนิค', order: 11, active: true },
  { id: 'N012', name: 'นางสาววันดี ช่วยเหลือ', position: 'ผู้ช่วยพยาบาล', order: 12, active: true }
];

const DEFAULT_OT = {
  threshold: 22,
  rates: { 'ช': 600, 'บ': 600, 'ด': 720, 'ชบ': 1200, 'ดบ': 1320, 'ชด': 1320, 'เย็น': 200, 'OT': 800, 'D12': 900, 'N12': 1100 },
  mode2: {
    trackRates: {
      'วิชาชีพ': { 'เย็น': 200, 'OT': 800 },
      'สนับสนุน': { 'เย็น': 150, 'OT': 600 }
    },
    positionRates: {
      'นักกายภาพบำบัด': { 'เย็น': 300, 'OT': 1200 },
      'พนักงานขับรถ': { 'เย็น': 200, 'OT': 800 }
    }
  }
};
const DEFAULT_REQ = { weekday: { ch: 4, ba: 3, du: 3 }, weekend: { ch: 4, ba: 3, du: 3 } };
const STORAGE_KEY = 'smnc_nurse_schedule_v280';
const LEGACY_STORAGE_KEYS = ['smnc_nurse_schedule_v271'];
const APP_VERSION = 'v3.0.0';

// Tuning values for the auto-scheduler. Higher penalty = nurse is less likely
// to be picked. Threshold = how many consecutive working days before the
// big penalty kicks in.
const SCORING_PENALTIES = {
  loadWeight: 50,
  sameShiftWeight: 160,     // เพิ่มขึ้น: ลงโทษหนักขึ้นสำหรับการทำซ้ำเวรเดิมในเดือนนี้
  consecutiveDuPair: 200,   // เพิ่มขึ้น: เวรซ้ำติดกัน 2 วัน
  consecutiveDuTriple: 600, // เพิ่มขึ้น: เวรซ้ำติดกัน 3 วัน
  consecutiveDaysThreshold: 4,
  consecutiveBigPenalty: 300,
  consecutiveSmallPenalty: 30,
  jitter: 8
};

const WARNING_LIMIT = 30;
const HISTORY_LIMIT = 30;
const AUTOSAVE_DEBOUNCE_MS = 2000;
const SHIFT_PALETTE_KEYS = ['ช', 'บ', 'ด', 'ชบ', 'ดบ', 'ชด', 'O'];
const KEYBOARD_SHIFT_MAP = { '1': 'ช', '2': 'บ', '3': 'ด', '4': 'ชบ', '5': 'ดบ', '6': 'ชด', '0': 'O' };

const DEFAULT_APP_SETTINGS = {
  appTitle: 'ระบบจัดตารางเวรพยาบาล',
  appVersionLabel: 'v3.1.2 Enterprise Suite',
  copyrightYear: '2026',
  orgName: 'วิทยาลัยพยาบาลศรีมหาสารคาม',
  developerName: 'ดร.ณัฐวุฒิ สุริยะ',
  developerRole: 'อาจารย์',
  developerPhone: '063-172-5460',
  developerEmail: 'natthawut@smnc.ac.th',
  developerOrg: 'วิทยาลัยพยาบาลศรีมหาสารคาม คณะพยาบาลศาสตร์ สถาบันพระบรมราชชนก',
  signers: { scheduler: '', headNurse: '', director: '' },
  yearFrom: 2568,
  yearTo: 2575,
  autosaveMs: 2000,
  schedulerSettings: { consecutiveDaysThreshold: 4 },
  customHolidays: [],
  shiftMode: 1,
  mode2Settings: {
    eveningReq: { 'วิชาชีพ': 1, 'สนับสนุน': 1 },
    otReq: { 'วิชาชีพ': 1, 'สนับสนุน': 1 }
  },
  accessControl: {
    enabled: false,
    passwordHash: '', // Simple hashing/raw string for local admin lock
    isUnlocked: false
  },
  aiSettings: {
    noEveningToMorning: true,
    maxTwoConsecutiveCombined: true,
    fairWeekendDistribution: true,
    consecutiveDaysThreshold: 4,
    weights: {
      noEveningToMorning: 80,
      fairWeekend: 70,
      consecutiveBigPenalty: 80
    }
  },
  budgetCap: 50000,
  holidayRates: {
    Pro: 1.5,
    Supp: 1.5
  },
  lineNotifyToken: '',
  telegram: {
    botToken: '',
    chatId: '',
    autoSend: false,
    template: '📋 ตารางเวร {month} {year}\n🏥 {org}\n\n{schedule_list}\n\n(จัดโดย {scheduler})',
    layoutMode: 'individual'
  },
  theme: 'royal-blue',
  customLogoUrl: '',
  // 🆕 v3.0 — extra configurable settings
  printDefaults: {
    paperSize: 'A4',
    orientation: 'portrait',
    includeLogo: true,
    includeSignatures: true
  },
  accessibility: {
    fontScale: 100,
    reduceMotion: false,
    highContrast: false
  },
  dailyRequirements: {
    enabled: false,
    days: { 0:{ch:0,ba:0,du:0}, 1:{ch:0,ba:0,du:0}, 2:{ch:0,ba:0,du:0}, 3:{ch:0,ba:0,du:0}, 4:{ch:0,ba:0,du:0}, 5:{ch:0,ba:0,du:0}, 6:{ch:0,ba:0,du:0} }
  },
  hardRules: {
    allowSingleAfternoonToNightWhenShort: false,
    forbidNightAfterOff: true,
    warnOnlyAfternoonToNight: false,
    warnOnlyNightAfterOff: false,
    disableDubaShift: true,
    maxWeeklyHours: 48
  },
  anonymizeExport: false,
  customShifts: [],
  shiftTimes: {
    'ช': { start: '08:00', end: '16:00' },
    'บ': { start: '16:00', end: '24:00' },
    'ด': { start: '00:00', end: '08:00' },
    'เย็น': { start: '16:30', end: '20:30' },
    'OT': { start: '08:00', end: '16:00' },
    'D12': { start: '08:00', end: '20:00' },
    'N12': { start: '20:00', end: '08:00' }
  }
};

const SHIFT_MODES = {
  1: {
    name: 'โหมด 1 — เวร 8 ชม. (เช้า/บ่าย/ดึก)',
    paletteKeys: ['ช', 'บ', 'ด', 'ชบ', 'ดบ', 'ชด', 'O'],
    keyboardMap: { '1': 'ช', '2': 'บ', '3': 'ด', '4': 'ชบ', '5': 'ดบ', '6': 'ชด', '0': 'O' }
  },
  2: {
    name: 'โหมด 2 — เวร 8 ชม. (สำนักงาน)',
    paletteKeys: ['ช', 'เย็น', 'OT', 'O'],
    keyboardMap: { '1': 'ช', '2': 'เย็น', '3': 'OT', '0': 'O' }
  },
  3: {
    name: 'โหมด 3 — เวร 12 ชม. (D12/N12)',
    paletteKeys: ['D12', 'N12', 'O'],
    keyboardMap: { '1': 'D12', '2': 'N12', '0': 'O' }
  }
};

window.NurseConst = {
  SHIFT_TYPES, POSITIONS, THAI_MONTHS, THAI_DAYS_SHORT,
  DEFAULT_NURSES, DEFAULT_OT, DEFAULT_REQ, DEFAULT_APP_SETTINGS,
  STORAGE_KEY, LEGACY_STORAGE_KEYS, APP_VERSION,
  SCORING_PENALTIES, WARNING_LIMIT, HISTORY_LIMIT, AUTOSAVE_DEBOUNCE_MS,
  SHIFT_PALETTE_KEYS, KEYBOARD_SHIFT_MAP, SHIFT_MODES
};


/* ==================== state.js ==================== */
// Global app state + helpers + persistence.

(function() {
const {
  SHIFT_TYPES, POSITIONS, THAI_DAYS_SHORT,
  DEFAULT_NURSES, DEFAULT_OT, DEFAULT_REQ, DEFAULT_APP_SETTINGS,
  STORAGE_KEY, LEGACY_STORAGE_KEYS, AUTOSAVE_DEBOUNCE_MS
} = window.NurseConst;

const state = {
  year: 2569,
  month: new Date().getMonth() + 1,
  nurses: [],
  schedule: {},
  lockedShifts: {},
  leaves: {},
  requirements: structuredClone(DEFAULT_REQ),
  otSettings: structuredClone(DEFAULT_OT),
  selectedShift: null,
  selectedLeave: 'V',
  lockMode: false,
  otReport: [],
  warnings: [],
  dirty: false,
  treatHolidayAsWeekend: true,
  appSettings: structuredClone(DEFAULT_APP_SETTINGS),
  historySnapshots: []
};

// ========= KEY HELPERS =========
const k = (nid, d) => `${nid}-${state.year}-${state.month}-${d}`;
const getShift = (nid, d) => state.schedule[k(nid,d)] || '';
const getLeave = (nid, d) => state.leaves[k(nid,d)] || '';
const isShiftLocked = (nid, d) => !!state.lockedShifts[k(nid,d)];

function customBucket(s) {
  if (!s) return '';
  const cs = (state.appSettings?.customShifts || []).find(x => x.code === s);
  return cs?.aiBucket || '';
}

function setShiftLock(nid, d, locked) {
  const key = k(nid, d);
  if (locked) state.lockedShifts[key] = true;
  else delete state.lockedShifts[key];
  markDirty();
}

function setShift(nid, d, s) {
  if (s) state.schedule[k(nid,d)] = s;
  else delete state.schedule[k(nid,d)];
  markDirty();
}

function setLeave(nid, d, l) {
  if (l) state.leaves[k(nid,d)] = l;
  else delete state.leaves[k(nid,d)];
  markDirty();
}

const isWorking = s => {
  if (!s) return false;
  if (['ช','บ','ด','ชบ','ดบ','ชด','เย็น','OT','D12','N12'].includes(s)) return true;
  return !!(state.appSettings?.customShifts || []).find(cs => cs.code === s);
};
const isLeaveCode = s => s === 'V' || s === 'T';
const includesMorning = s => s === 'ช' || s === 'ชบ' || s === 'ชด' || customBucket(s) === 'morning';
const includesAfternoon = s => s === 'บ' || s === 'ชบ' || s === 'ดบ' || customBucket(s) === 'afternoon';
const includesNight = s => s === 'ด' || s === 'ดบ' || s === 'ชด' || s === 'DN' || s === 'N12' || customBucket(s) === 'night';

// ========= DATE HELPERS (with memoization) =========
const _daysCache = new Map();
function daysInMonth(yBE, m) {
  const key = `${yBE}-${m}`;
  if (_daysCache.has(key)) return _daysCache.get(key);
  const v = new Date(yBE - 543, m, 0).getDate();
  _daysCache.set(key, v);
  return v;
}

function dayOfWeek(yBE, m, d) {
  return new Date(yBE - 543, m - 1, d).getDay();
}

function isWeekend(yBE, m, d) {
  const dow = dayOfWeek(yBE, m, d);
  return dow === 0 || dow === 6;
}

function dayLabel(yBE, m, d) {
  return THAI_DAYS_SHORT[dayOfWeek(yBE, m, d)];
}

function todayBE() {
  const t = new Date();
  return { y: t.getFullYear() + 543, m: t.getMonth() + 1, d: t.getDate() };
}

// Returns true if day d is a weekend OR (when enabled) a public holiday.
function isOffDay(yBE, m, d) {
  if (isWeekend(yBE, m, d)) return true;
  if (state.treatHolidayAsWeekend && window.NurseHolidays?.isHoliday(yBE, m, d)) return true;
  return false;
}

// ========= STATS (cached per nurse, invalidated on schedule/leave change) =========
const _statsCache = new Map();
function invalidateStats(nid) {
  if (nid) _statsCache.delete(nid);
  else _statsCache.clear();
}

function computeNurseStats(nid) {
  if (_statsCache.has(nid)) return _statsCache.get(nid);
  const days = daysInMonth(state.year, state.month);
  const st = { 'ช':0,'บ':0,'ด':0,'ชบ':0,'ดบ':0,'ชด':0,'O':0,'V':0,'T':0, total:0,
               chTotal:0, baTotal:0, duTotal:0 };
  for (let d = 1; d <= days; d++) {
    const s = state.schedule[k(nid, d)] || '';
    const l = state.leaves[k(nid, d)] || '';
    if (l) { st[l] = (st[l] || 0) + 1; continue; }
    if (s) {
      st[s] = (st[s] || 0) + 1;
      if (isWorking(s)) st.total++;
      if (includesMorning(s)) st.chTotal++;
      if (includesAfternoon(s)) st.baTotal++;
      if (includesNight(s)) st.duTotal++;
    }
  }
  _statsCache.set(nid, st);
  return st;
}

// ========= STORAGE & AUTOSAVE =========
let _autosaveTimer = null;
let _savedListeners = [];

function onSaveStatusChange(fn) { _savedListeners.push(fn); }
function emitSaveStatus(status) {
  for (const fn of _savedListeners) try { fn(status); } catch (e) { console.error(e); }
}

function markDirty() {
  state.dirty = true;
  invalidateStats();  // any mutation invalidates stats
  emitSaveStatus('dirty');
  scheduleAutosave();
}

function scheduleAutosave() {
  if (_autosaveTimer) clearTimeout(_autosaveTimer);
  const delay = state.appSettings?.autosaveMs || AUTOSAVE_DEBOUNCE_MS;
  _autosaveTimer = setTimeout(() => {
    if (state.dirty) {
      emitSaveStatus('saving');
      persistAll();
      emitSaveStatus('saved');
    }
  }, delay);
}

function persistAll() {
  const data = {
    version: 'v2.8.0',
    year: state.year,
    month: state.month,
    nurses: state.nurses,
    schedule: state.schedule,
    lockedShifts: state.lockedShifts,
    leaves: state.leaves,
    requirements: state.requirements,
    otSettings: state.otSettings,
    treatHolidayAsWeekend: state.treatHolidayAsWeekend,
    appSettings: state.appSettings,
    savedAt: new Date().toISOString()
  };
  try {
    let activeWard = localStorage.getItem('smnc_active_ward') || 'ICU (หอผู้ป่วยวิกฤต)';
    let wardKey = STORAGE_KEY + '_' + activeWard;
    localStorage.setItem(wardKey, JSON.stringify(data));
    state.dirty = false;
  } catch (e) {
    console.error('persist failed', e);
    emitSaveStatus('error');
  }
}

// Defensive validation of loaded data. Returns sanitized state object or null
// when the blob is unusable. Mild issues are auto-fixed.
function validateLoadedState(parsed) {
  if (!parsed || typeof parsed !== 'object') return null;
  const out = {};
  const yr = Number(parsed.year);
  out.year = (yr >= 2500 && yr <= 2700) ? yr : 2569;
  const mo = Number(parsed.month);
  out.month = (mo >= 1 && mo <= 12) ? mo : (new Date().getMonth() + 1);

  if (!Array.isArray(parsed.nurses)) return null;
  out.nurses = [];
  for (const n of parsed.nurses) {
    if (!n || typeof n !== 'object') continue;
    if (typeof n.id !== 'string' || typeof n.name !== 'string') continue;
    if (typeof n.position !== 'string' || !POSITIONS[n.position]) continue;
    out.nurses.push({
      id: n.id,
      name: n.name,
      position: n.position,
      order: Number(n.order) || 999,
      active: n.active !== false,
      prefShift: typeof n.prefShift === 'string' ? n.prefShift : '',
      avoidShift: typeof n.avoidShift === 'string' ? n.avoidShift : ''
    });
  }
  if (out.nurses.length === 0) return null;

  const customShiftCodes = new Set(
    Array.isArray(parsed?.appSettings?.customShifts)
      ? parsed.appSettings.customShifts
          .filter(s => s && typeof s.code === 'string' && s.code.length > 0 && s.code.length <= 6)
          .map(s => s.code)
      : []
  );

  out.schedule = (parsed.schedule && typeof parsed.schedule === 'object') ? {} : {};
  if (parsed.schedule) {
    for (const key in parsed.schedule) {
      const v = parsed.schedule[key];
      if (typeof v !== 'string') continue;
      // Migration "บด" → "ดบ"
      const fixed = v === 'บด' ? 'ดบ' : v;
      if (SHIFT_TYPES[fixed] || customShiftCodes.has(fixed)) out.schedule[key] = fixed;
    }
  }

  out.leaves = {};
  if (parsed.leaves && typeof parsed.leaves === 'object') {
    for (const key in parsed.leaves) {
      const v = parsed.leaves[key];
      if (v === 'V' || v === 'T') out.leaves[key] = v;
    }
  }

  out.lockedShifts = {};
  if (parsed.lockedShifts && typeof parsed.lockedShifts === 'object') {
    for (const key in parsed.lockedShifts) {
      if (parsed.lockedShifts[key]) out.lockedShifts[key] = true;
    }
  }

  out.requirements = sanitizeRequirements(parsed.requirements);
  out.otSettings = sanitizeOtSettings(parsed.otSettings);
  out.treatHolidayAsWeekend = parsed.treatHolidayAsWeekend !== false;
  out.appSettings = sanitizeAppSettings(parsed.appSettings);
  return out;
}

function sanitizeRequirements(req) {
  const r = structuredClone(DEFAULT_REQ);
  if (!req || typeof req !== 'object') return r;
  ['weekday','weekend'].forEach(k => {
    if (req[k]) {
      ['ch','ba','du'].forEach(s => {
        const v = Number(req[k][s]);
        if (Number.isFinite(v) && v >= 0 && v <= 50) r[k][s] = v;
      });
    }
  });
  return r;
}

function sanitizeOtSettings(ot) {
  const o = structuredClone(DEFAULT_OT);
  if (!ot || typeof ot !== 'object') return o;
  const t = Number(ot.threshold);
  if (Number.isFinite(t) && t > 0 && t <= 200) o.threshold = t;
  if (ot.rates && typeof ot.rates === 'object') {
    for (const k in o.rates) {
      const v = Number(ot.rates[k]);
      if (Number.isFinite(v) && v >= 0) o.rates[k] = v;
    }
  }
  if (ot.mode2 && typeof ot.mode2 === 'object') {
    ['วิชาชีพ','สนับสนุน'].forEach(track => {
      if (ot.mode2.trackRates?.[track]) {
        ['เย็น','OT'].forEach(s => {
          const v = Number(ot.mode2.trackRates[track][s]);
          if (Number.isFinite(v) && v >= 0) o.mode2.trackRates[track][s] = v;
        });
      }
    });
    Object.keys(o.mode2.positionRates).forEach(pos => {
      if (ot.mode2.positionRates?.[pos]) {
        ['เย็น','OT'].forEach(s => {
          const v = Number(ot.mode2.positionRates[pos][s]);
          if (Number.isFinite(v) && v >= 0) o.mode2.positionRates[pos][s] = v;
        });
      }
    });
  }
  return o;
}

function sanitizeAppSettings(raw) {
  const o = structuredClone(DEFAULT_APP_SETTINGS);
  if (!raw || typeof raw !== 'object') return o;
  [
    ['appTitle', 120],
    ['appVersionLabel', 80],
    ['copyrightYear', 20],
    ['developerName', 120],
    ['developerRole', 120],
    ['developerPhone', 60],
    ['developerEmail', 120],
    ['developerOrg', 220]
  ].forEach(([key, max]) => {
    if (typeof raw[key] === 'string' && raw[key].length <= max) o[key] = raw[key];
  });
  if (typeof raw.orgName === 'string' && raw.orgName.length > 0 && raw.orgName.length <= 200)
    o.orgName = raw.orgName;
  if (raw.signers && typeof raw.signers === 'object') {
    if (typeof raw.signers.scheduler === 'string') o.signers.scheduler = raw.signers.scheduler.slice(0, 100);
    if (typeof raw.signers.headNurse === 'string') o.signers.headNurse = raw.signers.headNurse.slice(0, 100);
    if (typeof raw.signers.director === 'string') o.signers.director = raw.signers.director.slice(0, 100);
  }
  const yFrom = Number(raw.yearFrom);
  const yTo = Number(raw.yearTo);
  if (yFrom >= 2500 && yFrom <= 2700) o.yearFrom = yFrom;
  if (yTo >= o.yearFrom && yTo <= 2800) o.yearTo = yTo;
  const ms = Number(raw.autosaveMs);
  if ([1000, 2000, 5000, 10000, 30000].includes(ms)) o.autosaveMs = ms;
  if (raw.schedulerSettings && typeof raw.schedulerSettings === 'object') {
    const th = Number(raw.schedulerSettings.consecutiveDaysThreshold);
    if (th >= 2 && th <= 14) o.schedulerSettings.consecutiveDaysThreshold = th;
  }
  if (Array.isArray(raw.customHolidays)) {
    o.customHolidays = raw.customHolidays.filter(h =>
      h && typeof h === 'object' &&
      Number.isInteger(h.yBE) && h.yBE >= 2500 && h.yBE <= 2700 &&
      Number.isInteger(h.m) && h.m >= 1 && h.m <= 12 &&
      Number.isInteger(h.d) && h.d >= 1 && h.d <= 31 &&
      typeof h.name === 'string' && h.name.length > 0 && h.name.length <= 100
    ).slice(0, 100);
  }
  const mode = Number(raw.shiftMode);
  if (mode === 1 || mode === 2 || mode === 3) o.shiftMode = mode;
  if (raw.mode2Settings && typeof raw.mode2Settings === 'object') {
    ['eveningReq','otReq'].forEach(key => {
      if (raw.mode2Settings[key] && typeof raw.mode2Settings[key] === 'object') {
        ['วิชาชีพ','สนับสนุน'].forEach(track => {
          const v = Number(raw.mode2Settings[key][track]);
          if (Number.isFinite(v) && v >= 0 && v <= 20) o.mode2Settings[key][track] = v;
        });
      }
    });
  }
  if (raw.shiftTimes && typeof raw.shiftTimes === 'object') {
    Object.keys(o.shiftTimes).forEach(key => {
      if (raw.shiftTimes[key] && typeof raw.shiftTimes[key] === 'object') {
        const start = raw.shiftTimes[key].start;
        const end = raw.shiftTimes[key].end;
        const timeRegex = /^([01]\d|2[0-3]):[0-5]\d$/;
        if (typeof start === 'string' && timeRegex.test(start)) {
          o.shiftTimes[key].start = start;
        }
        if (typeof end === 'string' && (timeRegex.test(end) || end === '24:00')) {
          o.shiftTimes[key].end = end;
        }
      }
    });
  }

  // accessControl Sanitization
  if (raw.accessControl && typeof raw.accessControl === 'object') {
    o.accessControl.enabled = !!raw.accessControl.enabled;
    if (typeof raw.accessControl.passwordHash === 'string') o.accessControl.passwordHash = raw.accessControl.passwordHash;
    o.accessControl.isUnlocked = false; // Always start tab session as locked for security
  }
  // aiSettings Sanitization
  if (raw.aiSettings && typeof raw.aiSettings === 'object') {
    o.aiSettings.noEveningToMorning = raw.aiSettings.noEveningToMorning !== false;
    o.aiSettings.maxTwoConsecutiveCombined = raw.aiSettings.maxTwoConsecutiveCombined !== false;
    o.aiSettings.fairWeekendDistribution = raw.aiSettings.fairWeekendDistribution !== false;
    const th = Number(raw.aiSettings.consecutiveDaysThreshold);
    if (th >= 2 && th <= 14) o.aiSettings.consecutiveDaysThreshold = th;
    
    if (raw.aiSettings.weights && typeof raw.aiSettings.weights === 'object') {
      o.aiSettings.weights = {
        noEveningToMorning: 80,
        fairWeekend: 70,
        consecutiveBigPenalty: 80
      };
      ['noEveningToMorning', 'fairWeekend', 'consecutiveBigPenalty'].forEach(w => {
        const v = Number(raw.aiSettings.weights[w]);
        if (Number.isFinite(v) && v >= 0 && v <= 100) {
          o.aiSettings.weights[w] = v;
        }
      });
    }
  }
  // budgetCap Sanitization
  const cap = Number(raw.budgetCap);
  if (Number.isFinite(cap) && cap >= 0) o.budgetCap = cap;
  // holidayRates Sanitization
  if (raw.holidayRates && typeof raw.holidayRates === 'object') {
    ['Pro','Supp'].forEach(track => {
      const v = Number(raw.holidayRates[track]);
      if (Number.isFinite(v) && v >= 0.5 && v <= 5.0) o.holidayRates[track] = v;
    });
  }
  // Notification settings Sanitization
  if (typeof raw.lineNotifyToken === 'string') o.lineNotifyToken = raw.lineNotifyToken;
  if (raw.telegram && typeof raw.telegram === 'object') {
    if (typeof raw.telegram.botToken === 'string') o.telegram.botToken = raw.telegram.botToken;
    if (typeof raw.telegram.chatId === 'string') o.telegram.chatId = raw.telegram.chatId;
    if (Array.isArray(raw.telegram.chatTargets)) o.telegram.chatTargets = raw.telegram.chatTargets;
    if (typeof raw.telegram.autoSend === 'boolean') o.telegram.autoSend = raw.telegram.autoSend;
    if (typeof raw.telegram.template === 'string') o.telegram.template = raw.telegram.template;
    if (typeof raw.telegram.layoutMode === 'string' && ['individual', 'daily', 'summary'].includes(raw.telegram.layoutMode)) {
      o.telegram.layoutMode = raw.telegram.layoutMode;
    }
  }
  // Theme & Logo Sanitization
  if (typeof raw.theme === 'string' && ['royal-blue', 'emerald-er', 'sakura-maternity', 'amethyst-icu'].includes(raw.theme))
    o.theme = raw.theme;
  if (typeof raw.customLogoUrl === 'string') o.customLogoUrl = raw.customLogoUrl;

  // 🆕 printDefaults
  if (raw.printDefaults && typeof raw.printDefaults === 'object') {
    if (['A4','A3','Letter'].includes(raw.printDefaults.paperSize)) o.printDefaults.paperSize = raw.printDefaults.paperSize;
    if (['portrait','landscape'].includes(raw.printDefaults.orientation)) o.printDefaults.orientation = raw.printDefaults.orientation;
    o.printDefaults.includeLogo = raw.printDefaults.includeLogo !== false;
    o.printDefaults.includeSignatures = raw.printDefaults.includeSignatures !== false;
  }
  // 🆕 accessibility
  if (raw.accessibility && typeof raw.accessibility === 'object') {
    const fs = Number(raw.accessibility.fontScale);
    if (Number.isFinite(fs) && fs >= 50 && fs <= 200) o.accessibility.fontScale = fs;
    o.accessibility.reduceMotion = !!raw.accessibility.reduceMotion;
    o.accessibility.highContrast = !!raw.accessibility.highContrast;
  }
  // 🆕 dailyRequirements
  if (raw.dailyRequirements && typeof raw.dailyRequirements === 'object') {
    o.dailyRequirements.enabled = !!raw.dailyRequirements.enabled;
    if (raw.dailyRequirements.days && typeof raw.dailyRequirements.days === 'object') {
      for (let dow = 0; dow < 7; dow++) {
        const src = raw.dailyRequirements.days[dow];
        if (src && typeof src === 'object') {
          ['ch','ba','du'].forEach(s => {
            const v = Number(src[s]);
            if (Number.isFinite(v) && v >= 0 && v <= 50) o.dailyRequirements.days[dow][s] = v;
          });
        }
      }
    }
  }
  // 🆕 hardRules / Policy
  if (raw.hardRules && typeof raw.hardRules === 'object') {
    o.hardRules.allowSingleAfternoonToNightWhenShort = !!raw.hardRules.allowSingleAfternoonToNightWhenShort;
    o.hardRules.forbidNightAfterOff = raw.hardRules.forbidNightAfterOff !== false;
    o.hardRules.warnOnlyAfternoonToNight = !!raw.hardRules.warnOnlyAfternoonToNight;
    o.hardRules.warnOnlyNightAfterOff = !!raw.hardRules.warnOnlyNightAfterOff;
    o.hardRules.disableDubaShift = raw.hardRules.disableDubaShift !== false;
    const wh = Number(raw.hardRules.maxWeeklyHours);
    if (Number.isFinite(wh) && wh >= 8 && wh <= 96) o.hardRules.maxWeeklyHours = wh;
  }
  // 🆕 anonymizeExport
  o.anonymizeExport = !!raw.anonymizeExport;
  // 🆕 customShifts (up to 20 entries)
  if (Array.isArray(raw.customShifts)) {
    o.customShifts = raw.customShifts
      .filter(s => s && typeof s === 'object'
        && typeof s.code === 'string' && s.code.length > 0 && s.code.length <= 6
        && typeof s.name === 'string' && s.name.length > 0 && s.name.length <= 60
        && typeof s.bg === 'string' && typeof s.fg === 'string')
      .slice(0, 20)
      .map(s => ({
        code: s.code,
        name: s.name,
        bg: s.bg,
        fg: s.fg,
        startTime: typeof s.startTime === 'string' ? s.startTime : '',
        endTime: typeof s.endTime === 'string' ? s.endTime : '',
        aiBucket: (s.aiBucket === 'morning' || s.aiBucket === 'afternoon' || s.aiBucket === 'night') ? s.aiBucket : ''
      }));
  }

  return o;
}

// ========= MULTI-WARD & SNAPSHOTS HELPERS =========
function getWardsList() {
  let listRaw = localStorage.getItem('smnc_wards_list');
  let list = [];
  try { list = JSON.parse(listRaw); } catch(e) {}
  if (!Array.isArray(list) || list.length === 0) {
    list = ['ICU (หอผู้ป่วยวิกฤต)'];
    localStorage.setItem('smnc_wards_list', JSON.stringify(list));
  }
  return list;
}

function getActiveWard() {
  let active = localStorage.getItem('smnc_active_ward') || 'ICU (หอผู้ป่วยวิกฤต)';
  localStorage.setItem('smnc_active_ward', active);
  return active;
}

function switchWard(name) {
  let list = getWardsList();
  if (!list.includes(name)) return false;
  localStorage.setItem('smnc_active_ward', name);
  const res = loadFromStorage();
  loadSnapshots();
  return res;
}

function addWard(name) {
  if (!name || name.trim() === '') return false;
  name = name.trim();
  let list = getWardsList();
  if (list.includes(name)) return false;
  list.push(name);
  localStorage.setItem('smnc_wards_list', JSON.stringify(list));
  
  // Set default empty state for this new ward
  let wardKey = STORAGE_KEY + '_' + name;
  let defaultData = {
    version: 'v2.8.0',
    year: 2569,
    month: new Date().getMonth() + 1,
    nurses: structuredClone(DEFAULT_NURSES),
    schedule: {},
    lockedShifts: {},
    leaves: {},
    requirements: structuredClone(DEFAULT_REQ),
    otSettings: structuredClone(DEFAULT_OT),
    treatHolidayAsWeekend: true,
    appSettings: structuredClone(DEFAULT_APP_SETTINGS),
    savedAt: new Date().toISOString()
  };
  localStorage.setItem(wardKey, JSON.stringify(defaultData));
  return true;
}

function deleteWard(name) {
  let list = getWardsList();
  if (list.length <= 1) return false; // Must keep at least one ward
  let idx = list.indexOf(name);
  if (idx === -1) return false;
  list.splice(idx, 1);
  localStorage.setItem('smnc_wards_list', JSON.stringify(list));
  
  // Clean up storage key
  localStorage.removeItem(STORAGE_KEY + '_' + name);
  localStorage.removeItem('smnc_snapshots_' + name);
  
  // Switch to another active ward
  let currentActive = getActiveWard();
  if (currentActive === name) {
    localStorage.setItem('smnc_active_ward', list[0]);
  }
  return true;
}

function takeSnapshot(label) {
  let activeWard = getActiveWard();
  let snapshotsKey = 'smnc_snapshots_' + activeWard;
  let list = [];
  try { list = JSON.parse(localStorage.getItem(snapshotsKey)) || []; } catch(e) {}
  let snap = {
    timestamp: new Date().toLocaleString('th-TH'),
    label: label || 'Snapshot',
    schedule: structuredClone(state.schedule),
    lockedShifts: structuredClone(state.lockedShifts),
    leaves: structuredClone(state.leaves)
  };
  list.unshift(snap);
  if (list.length > 5) list = list.slice(0, 5); // Limit to 5
  localStorage.setItem(snapshotsKey, JSON.stringify(list));
  state.historySnapshots = list;
}

function restoreSnapshot(index) {
  let activeWard = getActiveWard();
  let snapshotsKey = 'smnc_snapshots_' + activeWard;
  let list = [];
  try { list = JSON.parse(localStorage.getItem(snapshotsKey)) || []; } catch(e) {}
  let snap = list[index];
  if (!snap) return false;
  state.schedule = structuredClone(snap.schedule);
  state.lockedShifts = structuredClone(snap.lockedShifts || {});
  state.leaves = structuredClone(snap.leaves);
  invalidateStats();
  markDirty();
  persistAll();
  return true;
}

function deleteSnapshot(index) {
  let activeWard = getActiveWard();
  let snapshotsKey = 'smnc_snapshots_' + activeWard;
  let list = [];
  try { list = JSON.parse(localStorage.getItem(snapshotsKey)) || []; } catch(e) {}
  list.splice(index, 1);
  localStorage.setItem(snapshotsKey, JSON.stringify(list));
  state.historySnapshots = list;
  return true;
}

function loadSnapshots() {
  let activeWard = getActiveWard();
  let snapshotsKey = 'smnc_snapshots_' + activeWard;
  let list = [];
  try { list = JSON.parse(localStorage.getItem(snapshotsKey)) || []; } catch(e) {}
  state.historySnapshots = list;
  return list;
}

function takeAutoBackup(label) {
  let activeWard = getActiveWard();
  let backupsKey = 'smnc_autobackups_' + activeWard;
  let list = [];
  try { list = JSON.parse(localStorage.getItem(backupsKey)) || []; } catch(e) {}
  let backup = {
    timestamp: new Date().toLocaleString('th-TH'),
    label: label || 'Auto Backup',
    state: {
      schedule: structuredClone(state.schedule),
      lockedShifts: structuredClone(state.lockedShifts),
      leaves: structuredClone(state.leaves),
      nurses: structuredClone(state.nurses),
      appSettings: structuredClone(state.appSettings)
    }
  };
  list.unshift(backup);
  if (list.length > 5) list = list.slice(0, 5);
  localStorage.setItem(backupsKey, JSON.stringify(list));
  return list;
}

function loadAutoBackups() {
  let activeWard = getActiveWard();
  let backupsKey = 'smnc_autobackups_' + activeWard;
  let list = [];
  try { list = JSON.parse(localStorage.getItem(backupsKey)) || []; } catch(e) {}
  return list;
}

function restoreAutoBackup(index) {
  let activeWard = getActiveWard();
  let backupsKey = 'smnc_autobackups_' + activeWard;
  let list = [];
  try { list = JSON.parse(localStorage.getItem(backupsKey)) || []; } catch(e) {}
  let backup = list[index];
  if (!backup || !backup.state) return false;
  
  state.schedule = structuredClone(backup.state.schedule);
  state.lockedShifts = structuredClone(backup.state.lockedShifts || {});
  state.leaves = structuredClone(backup.state.leaves);
  state.nurses = structuredClone(backup.state.nurses);
  if (backup.state.appSettings) {
    state.appSettings = structuredClone(backup.state.appSettings);
  }
  
  invalidateStats();
  markDirty();
  persistAll();
  return true;
}

function deleteAutoBackup(index) {
  let activeWard = getActiveWard();
  let backupsKey = 'smnc_autobackups_' + activeWard;
  let list = [];
  try { list = JSON.parse(localStorage.getItem(backupsKey)) || []; } catch(e) {}
  list.splice(index, 1);
  localStorage.setItem(backupsKey, JSON.stringify(list));
  return true;
}

// Load returns: { loaded: bool, migrated: bool, corrupted: bool }
function loadFromStorage() {
  let activeWard = getActiveWard();
  let wardKey = STORAGE_KEY + '_' + activeWard;
  let raw = localStorage.getItem(wardKey);
  let fromLegacy = false;
  
  // Backward compatibility: Migrate single-ward data to default ward key if exists
  if (!raw) {
    let singleWardRaw = localStorage.getItem(STORAGE_KEY);
    if (singleWardRaw) {
      raw = singleWardRaw;
      localStorage.setItem(wardKey, singleWardRaw);
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  if (!raw) {
    for (const lk of LEGACY_STORAGE_KEYS) {
      raw = localStorage.getItem(lk);
      if (raw) { fromLegacy = true; break; }
    }
  }
  if (!raw) {
    state.nurses = structuredClone(DEFAULT_NURSES);
    loadSnapshots();
    return { loaded: false, migrated: false, corrupted: false };
  }
  let parsed;
  try { parsed = JSON.parse(raw); }
  catch (e) {
    console.error('Storage corrupted:', e);
    state.nurses = structuredClone(DEFAULT_NURSES);
    loadSnapshots();
    return { loaded: false, migrated: false, corrupted: true };
  }
  const cleaned = validateLoadedState(parsed);
  if (!cleaned) {
    console.warn('Storage validation failed, falling back to defaults');
    state.nurses = structuredClone(DEFAULT_NURSES);
    loadSnapshots();
    return { loaded: false, migrated: false, corrupted: true };
  }
  Object.assign(state, cleaned);
  invalidateStats();
  loadSnapshots();
  return { loaded: true, migrated: fromLegacy, corrupted: false };
}

const isSystemLocked = () => !!(state.appSettings?.accessControl?.enabled && !state.appSettings?.accessControl?.isUnlocked);

window.NurseState = {
  state,
  k, getShift, setShift, getLeave, setLeave, isShiftLocked, setShiftLock,
  isWorking, isLeaveCode, includesMorning, includesAfternoon, includesNight,
  daysInMonth, dayOfWeek, isWeekend, dayLabel, todayBE, isOffDay,
  computeNurseStats, invalidateStats,
  persistAll, loadFromStorage, validateLoadedState,
  markDirty, scheduleAutosave, onSaveStatusChange, emitSaveStatus,
  sanitizeAppSettings, isSystemLocked,
  getWardsList, getActiveWard, switchWard, addWard, deleteWard,
  takeSnapshot, restoreSnapshot, deleteSnapshot, loadSnapshots,
  takeAutoBackup, loadAutoBackups, restoreAutoBackup, deleteAutoBackup
};
})();


/* ==================== holidays.js ==================== */
// Thai public holidays. Keyed by Buddhist Era (พ.ศ.). Year-specific dates
// (Buddhist religious holidays, Substitution holidays) come from the Royal
// Gazette announcements. When the year is not in the table we fall back to
// fixed-date secular holidays only.

(function() {
const FIXED_HOLIDAYS = [
  { m: 1, d: 1,  name: 'วันขึ้นปีใหม่' },
  { m: 4, d: 6,  name: 'วันจักรี' },
  { m: 4, d: 13, name: 'วันสงกรานต์' },
  { m: 4, d: 14, name: 'วันสงกรานต์' },
  { m: 4, d: 15, name: 'วันสงกรานต์' },
  { m: 5, d: 1,  name: 'วันแรงงานแห่งชาติ' },
  { m: 5, d: 4,  name: 'วันฉัตรมงคล' },
  { m: 6, d: 3,  name: 'วันเฉลิมพระชนมพรรษา สมเด็จพระนางเจ้าฯ พระบรมราชินี' },
  { m: 7, d: 28, name: 'วันเฉลิมพระชนมพรรษา ในหลวง ร.10' },
  { m: 8, d: 12, name: 'วันเฉลิมพระชนมพรรษา พระพันปีหลวง / วันแม่' },
  { m: 10, d: 13, name: 'วันคล้ายวันสวรรคต ร.9' },
  { m: 10, d: 23, name: 'วันปิยมหาราช' },
  { m: 12, d: 5,  name: 'วันคล้ายวันเฉลิมพระชนมพรรษา ร.9 / วันพ่อ' },
  { m: 12, d: 10, name: 'วันรัฐธรรมนูญ' },
  { m: 12, d: 31, name: 'วันสิ้นปี' }
];

// Religious + substitution holidays by พ.ศ. (announced annually).
const HOLIDAYS_BY_YEAR = {
  2568: [
    { m: 2,  d: 12, name: 'วันมาฆบูชา' },
    { m: 4,  d: 7,  name: 'ชดเชยวันจักรี' },
    { m: 4,  d: 14, name: 'วันสงกรานต์' },
    { m: 4,  d: 15, name: 'วันสงกรานต์' },
    { m: 5,  d: 5,  name: 'ชดเชยวันฉัตรมงคล' },
    { m: 5,  d: 11, name: 'วันวิสาขบูชา' },
    { m: 5,  d: 12, name: 'ชดเชยวันวิสาขบูชา' },
    { m: 6,  d: 3,  name: 'วันเฉลิมพระชนมพรรษาสมเด็จพระบรมราชินี' },
    { m: 7,  d: 10, name: 'วันอาสาฬหบูชา' },
    { m: 7,  d: 11, name: 'วันเข้าพรรษา' },
    { m: 10, d: 13, name: 'วันคล้ายวันสวรรคต ร.9' },
    { m: 12, d: 5,  name: 'วันพ่อแห่งชาติ / วันคล้ายวันพระบรมราชสมภพ ร.9' }
  ],
  2569: [
    { m: 3,  d: 3,  name: 'วันมาฆบูชา' },
    { m: 4,  d: 6,  name: 'วันจักรี' },
    { m: 4,  d: 13, name: 'วันสงกรานต์' },
    { m: 4,  d: 14, name: 'วันสงกรานต์' },
    { m: 4,  d: 15, name: 'วันสงกรานต์' },
    { m: 5,  d: 1,  name: 'วันแรงงานแห่งชาติ' },
    { m: 5,  d: 31, name: 'วันวิสาขบูชา' },
    { m: 6,  d: 1,  name: 'ชดเชยวันวิสาขบูชา' },
    { m: 7,  d: 29, name: 'วันอาสาฬหบูชา' },
    { m: 7,  d: 30, name: 'วันเข้าพรรษา' },
    { m: 12, d: 7,  name: 'ชดเชยวันพ่อแห่งชาติ' }
  ],
  2570: [
    { m: 2,  d: 22, name: 'วันมาฆบูชา' },
    { m: 4,  d: 5,  name: 'ชดเชยวันจักรี' },
    { m: 5,  d: 20, name: 'วันวิสาขบูชา' },
    { m: 7,  d: 19, name: 'วันอาสาฬหบูชา' },
    { m: 7,  d: 20, name: 'วันเข้าพรรษา' }
  ]
};

function getHolidaysOfMonth(yBE, m) {
  const out = new Map();
  for (const h of FIXED_HOLIDAYS) {
    if (h.m === m) out.set(h.d, h.name);
  }
  const year = HOLIDAYS_BY_YEAR[yBE];
  if (year) {
    for (const h of year) {
      if (h.m === m) out.set(h.d, h.name);
    }
  }
  const custom = window.NurseState?.state?.appSettings?.customHolidays;
  if (custom) {
    for (const h of custom) {
      if (h.yBE === yBE && h.m === m) out.set(h.d, h.name);
    }
  }
  return [...out.entries()].map(([day, name]) => ({ day, name })).sort((a, b) => a.day - b.day);
}

function isHoliday(yBE, m, d) {
  return getHolidayName(yBE, m, d) !== null;
}

function getHolidayName(yBE, m, d) {
  const custom = window.NurseState?.state?.appSettings?.customHolidays;
  if (custom) {
    for (const h of custom) {
      if (h.yBE === yBE && h.m === m && h.d === d) return h.name;
    }
  }
  const year = HOLIDAYS_BY_YEAR[yBE];
  if (year) {
    for (const h of year) {
      if (h.m === m && h.d === d) return h.name;
    }
  }
  for (const h of FIXED_HOLIDAYS) {
    if (h.m === m && h.d === d) return h.name;
  }
  return null;
}

window.NurseHolidays = { getHolidaysOfMonth, isHoliday, getHolidayName };
})();


/* ==================== history.js ==================== */
// Undo/redo stack for schedule + leaves. Snapshots are stringified clones so
// we don't accidentally retain mutable references.

(function() {
const { state } = window.NurseState;
const { HISTORY_LIMIT } = window.NurseConst;

const undoStack = [];
const redoStack = [];
let _suspend = false;

function snapshot() {
  return JSON.stringify({ schedule: state.schedule, lockedShifts: state.lockedShifts, leaves: state.leaves });
}

function applySnapshot(snap) {
  try {
    const data = JSON.parse(snap);
    // mutate in place so external references stay valid
    for (const key in state.schedule) delete state.schedule[key];
    Object.assign(state.schedule, data.schedule || {});
    for (const key in state.lockedShifts) delete state.lockedShifts[key];
    Object.assign(state.lockedShifts, data.lockedShifts || {});
    for (const key in state.leaves) delete state.leaves[key];
    Object.assign(state.leaves, data.leaves || {});
  } catch (e) { console.error('applySnapshot failed', e); }
}

// Call before mutating schedule/leaves. No-op while a snapshot is being
// applied (so undo doesn't push its own undo).
function pushHistory() {
  if (_suspend) return;
  undoStack.push(snapshot());
  if (undoStack.length > HISTORY_LIMIT) undoStack.shift();
  redoStack.length = 0;
  notifyChange();
}

function undo() {
  if (undoStack.length === 0) return false;
  redoStack.push(snapshot());
  const prev = undoStack.pop();
  _suspend = true;
  applySnapshot(prev);
  _suspend = false;
  window.NurseState.invalidateStats();
  window.NurseState.markDirty();
  notifyChange();
  return true;
}

function redo() {
  if (redoStack.length === 0) return false;
  undoStack.push(snapshot());
  const next = redoStack.pop();
  _suspend = true;
  applySnapshot(next);
  _suspend = false;
  window.NurseState.invalidateStats();
  window.NurseState.markDirty();
  notifyChange();
  return true;
}

function canUndo() { return undoStack.length > 0; }
function canRedo() { return redoStack.length > 0; }
function clearHistory() { undoStack.length = 0; redoStack.length = 0; notifyChange(); }

const _listeners = [];
function onHistoryChange(fn) { _listeners.push(fn); }
function notifyChange() {
  for (const fn of _listeners) try { fn({ canUndo: canUndo(), canRedo: canRedo() }); } catch (e) { console.error(e); }
}

window.NurseHistory = { pushHistory, undo, redo, canUndo, canRedo, clearHistory, onHistoryChange };
})();


/* ==================== ui.js ==================== */
// UI utilities: SweetAlert wrappers, tab switching, palettes, badge counts.

(function() {
const { SHIFT_TYPES, THAI_MONTHS, SHIFT_PALETTE_KEYS, SHIFT_MODES } = window.NurseConst;
const { state, daysInMonth, getLeave } = window.NurseState;

function shiftDef(code) {
  const base = SHIFT_TYPES[code];
  if (base) return base;
  const custom = (state.appSettings?.customShifts || []).find(s => s.code === code);
  if (custom) {
    return {
      label: custom.code,
      name: custom.name,
      bg: custom.bg || '#e2e8f0',
      fg: custom.fg || '#334155'
    };
  }
  return { label: code, name: code, bg: '#e2e8f0', fg: '#334155' };
}

// ========= SWAL HELPERS =========
const showLoading = (txt = 'กำลังประมวลผล...') => Swal.fire({
  title: txt,
  html: '<div class="loader-spinner mx-auto my-4"></div>',
  showConfirmButton: false,
  allowOutsideClick: false,
  background: '#f0f9ff'
});
const showSuccess = (txt) => Swal.fire({ icon: 'success', title: txt, timer: 1800, showConfirmButton: false, toast: true, position: 'top' });
const showError = (txt) => Swal.fire({ icon: 'error', title: 'ผิดพลาด', text: txt });
const showWarn = (txt) => Swal.fire({ icon: 'warning', title: 'แจ้งเตือน', text: txt, toast: true, position: 'top', timer: 2500, showConfirmButton: false });
const showInfo = (txt) => Swal.fire({ icon: 'info', title: 'แจ้งเตือน', text: txt });
const confirmAct = (title, text) => Swal.fire({
  icon: 'question', title, text,
  showCancelButton: true,
  confirmButtonText: 'ยืนยัน',
  cancelButtonText: 'ยกเลิก',
  confirmButtonColor: '#0ea5e9'
});

// ========= INIT SELECTORS =========
function initSelectors() {
  const mSel = document.getElementById('monthSelect');
  mSel.replaceChildren();
  THAI_MONTHS.forEach((mn, i) => {
    const o = document.createElement('option');
    o.value = i + 1;
    o.textContent = mn;
    if (i + 1 === state.month) o.selected = true;
    mSel.appendChild(o);
  });
  const ySel = document.getElementById('yearSelect');
  ySel.replaceChildren();
  const yFrom = state.appSettings?.yearFrom || 2568;
  const yTo = state.appSettings?.yearTo || 2575;
  for (let y = yFrom; y <= yTo; y++) {
    const o = document.createElement('option');
    o.value = y;
    o.textContent = y;
    if (y === state.year) o.selected = true;
    ySel.appendChild(o);
  }
}

function loadReqToUI() {
  document.getElementById('reqWdCh').value = state.requirements.weekday.ch;
  document.getElementById('reqWdBa').value = state.requirements.weekday.ba;
  document.getElementById('reqWdDu').value = state.requirements.weekday.du;
  document.getElementById('reqWeCh').value = state.requirements.weekend.ch;
  document.getElementById('reqWeBa').value = state.requirements.weekend.ba;
  document.getElementById('reqWeDu').value = state.requirements.weekend.du;
}

function loadOTToUI() {
  const r = state.otSettings.rates;
  const sv = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
  sv('otThreshold', state.otSettings.threshold);
  sv('otRateCh',    r['ช']);
  sv('otRateBa',    r['บ']);
  sv('otRateDu',    r['ด']);
  sv('otRateChBa',  r['ชบ']);
  sv('otRateDuBa',  r['ดบ']);
  sv('otRateDN',    r['ชด']);
  const m2 = state.otSettings.mode2;
  sv('otRateEveningPro',  m2?.trackRates?.['วิชาชีพ']?.['เย็น']  ?? 200);
  sv('otRateEveningSupp', m2?.trackRates?.['สนับสนุน']?.['เย็น'] ?? 150);
  sv('otRateOTPro',       m2?.trackRates?.['วิชาชีพ']?.['OT']    ?? 800);
  sv('otRateOTSupp',      m2?.trackRates?.['สนับสนุน']?.['OT']   ?? 600);
  sv('otRateD12',   r['D12']);
  sv('otRateN12',   r['N12']);
}

function readReqFromUI() {
  const clamp = (v, def) => {
    const n = Number(v);
    if (!Number.isFinite(n) || n < 0 || n > 50) return def;
    return n;
  };
  state.requirements = {
    weekday: {
      ch: clamp(document.getElementById('reqWdCh').value, 3),
      ba: clamp(document.getElementById('reqWdBa').value, 2),
      du: clamp(document.getElementById('reqWdDu').value, 2)
    },
    weekend: {
      ch: clamp(document.getElementById('reqWeCh').value, 2),
      ba: clamp(document.getElementById('reqWeBa').value, 2),
      du: clamp(document.getElementById('reqWeDu').value, 2)
    }
  };
}

function readOTFromUI() {
  const num = (v, def, min = 0, max = 1e6) => {
    const n = Number(v);
    if (!Number.isFinite(n) || n < min || n > max) return def;
    return n;
  };
  const gv = (id, def) => { const el = document.getElementById(id); return el ? num(el.value, def) : def; };
  state.otSettings = {
    threshold: gv('otThreshold', 22),
    rates: {
      'ช':    gv('otRateCh',      600),
      'บ':    gv('otRateBa',      600),
      'ด':    gv('otRateDu',      720),
      'ชบ':   gv('otRateChBa',    1200),
      'ดบ':   gv('otRateDuBa',    1320),
      'ชด':   gv('otRateDN',      1320),
      'D12':  gv('otRateD12',     900),
      'N12':  gv('otRateN12',     1100)
    }
  };
  // Mode 2 track rates — saved directly into mode2.trackRates
  if (!state.otSettings.mode2) state.otSettings.mode2 = { trackRates: { 'วิชาชีพ':{}, 'สนับสนุน':{} }, positionRates: {} };
  const tr = state.otSettings.mode2.trackRates;
  if (!tr['วิชาชีพ'])  tr['วิชาชีพ']  = {};
  if (!tr['สนับสนุน']) tr['สนับสนุน'] = {};
  tr['วิชาชีพ']['เย็น']  = gv('otRateEveningPro',  200);
  tr['วิชาชีพ']['OT']    = gv('otRateOTPro',        800);
  tr['สนับสนุน']['เย็น'] = gv('otRateEveningSupp',  150);
  tr['สนับสนุน']['OT']   = gv('otRateOTSupp',       600);
}

// ========= TABS =========
function switchTab(name) {
  document.querySelectorAll('.tab-panel').forEach(el => el.classList.add('hidden'));

  // Toggle subheader visibility (only show for the 'schedule' tab)
  const subheader = document.querySelector('.ncds-subheader');
  if (subheader) {
    if (name === 'schedule') {
      subheader.classList.remove('hidden');
    } else {
      subheader.classList.add('hidden');
    }
  }
  
  // Remove active state from all tab nav structures
  document.querySelectorAll('.tab-btn, .tab-btn-vertical, .mobile-nav-btn').forEach(el => {
    el.classList.remove('active');
  });

  const panel = document.getElementById('tab-' + name);
  if (panel) panel.classList.remove('hidden');
  
  // Add active state to all navigation buttons representing this tab
  document.querySelectorAll(`[data-tab="${name}"]`).forEach(btn => {
    btn.classList.add('active');
  });

  const R = window.NurseRender;
  if (name === 'schedule') R.renderSchedule();
  else if (name === 'calendar') R.renderCalendar();
  else if (name === 'leaves') R.renderLeaves();
  else if (name === 'summary') R.renderSummary();
  else if (name === 'ot') { updateOTRateVisibility(); readOTFromUI(); window.NurseOT.renderOT(); }
  else if (name === 'nurses') R.renderNursesList();
  else if (name === 'dashboard') R.renderDashboard();
  else if (name === 'settings') window.NurseSettings?.renderSettings();
  else if (name === 'notifications') window.NurseSettings?.renderNotificationsTab();
  else if (name === 'print-center') window.NursePrintHub?.onActivate();

  lucide.createIcons();
}

// ========= PALETTES =========
function renderShiftPalette() {
  const wrap = document.getElementById('shiftPalette');
  wrap.replaceChildren();
  const mode = state.appSettings?.shiftMode || 1;
  const baseKeys = SHIFT_MODES[mode]?.paletteKeys || SHIFT_PALETTE_KEYS;
  const customKeys = mode === 1 ? (state.appSettings?.customShifts || []).map(s => s.code).filter(Boolean) : [];
  const keys = [...baseKeys, ...customKeys];
  keys.forEach(s => {
    const def = shiftDef(s);
    const btn = document.createElement('div');
    btn.className = 'shift-btn' + (state.selectedShift === s ? ' selected' : '');
    btn.style.background = def.bg;
    btn.style.color = def.fg;
    btn.title = def.name;
    const label = document.createElement('span');
    label.textContent = def.label;
    const subtitle = document.createElement('span');
    subtitle.className = 'text-[10px] opacity-70 ml-1';
    subtitle.textContent = def.name;
    btn.append(label, ' ', subtitle);
    btn.onclick = () => { state.selectedShift = (state.selectedShift === s) ? null : s; renderShiftPalette(); };
    wrap.appendChild(btn);
  });
  // Eraser
  const er = document.createElement('div');
  er.className = 'shift-btn' + (state.selectedShift === '' ? ' selected' : '');
  er.style.background = '#fee2e2';
  er.style.color = '#991b1b';
  er.textContent = '🧽 ลบ';
  er.onclick = () => { state.selectedShift = (state.selectedShift === '') ? null : ''; renderShiftPalette(); };
  wrap.appendChild(er);
}

function renderLeavePalette() {
  const wrap = document.getElementById('leavePalette');
  wrap.replaceChildren();
  ['V', 'T'].forEach(l => {
    const def = SHIFT_TYPES[l];
    const btn = document.createElement('div');
    btn.className = 'shift-btn' + (state.selectedLeave === l ? ' selected' : '');
    btn.style.background = def.bg;
    btn.style.color = def.fg;
    const label = document.createElement('span');
    label.textContent = def.label;
    const subtitle = document.createElement('span');
    subtitle.className = 'text-[10px] opacity-70 ml-1';
    subtitle.textContent = def.name;
    btn.append(label, ' ', subtitle);
    btn.onclick = () => { state.selectedLeave = l; renderLeavePalette(); };
    wrap.appendChild(btn);
  });
  const er = document.createElement('div');
  er.className = 'shift-btn' + (state.selectedLeave === '' ? ' selected' : '');
  er.style.background = '#fee2e2';
  er.style.color = '#991b1b';
  er.textContent = '🧽 ลบวันลา';
  er.onclick = () => { state.selectedLeave = ''; renderLeavePalette(); };
  wrap.appendChild(er);
}

function updateBadgeCounts() {
  const days = daysInMonth(state.year, state.month);
  document.getElementById('tabCountDays').textContent = days;
  let leaveCount = 0;
  const active = state.nurses.filter(n => n.active !== false);
  active.forEach(n => {
    for (let d = 1; d <= days; d++) if (getLeave(n.id, d)) leaveCount++;
  });
  document.getElementById('tabCountLeaves').textContent = leaveCount;
  document.getElementById('tabCountNurses').textContent = active.length;
}

// ========= OT RATE VISIBILITY =========
function updateOTRateVisibility() {
  const mode = state.appSettings?.shiftMode || 1;
  const show = (id, visible) => { const el = document.getElementById(id); if (el) el.style.display = visible ? '' : 'none'; };
  show('otRateSectionThreshold', mode !== 2);
  show('otRateSection1', mode === 1);
  show('otRateSection2', mode === 2);
  show('otRateSection3', mode === 3);
}

// Set/clear the disabled state of a button for the duration of an async op.
async function withButtonLock(btn, fn) {
  if (!btn) return fn();
  const prev = btn.disabled;
  btn.disabled = true;
  try { return await fn(); } finally { btn.disabled = prev; }
}

window.NurseUI = {
  showLoading, showSuccess, showError, showWarn, showInfo, confirmAct,
  initSelectors, loadReqToUI, loadOTToUI, readReqFromUI, readOTFromUI,
  switchTab, renderShiftPalette, renderLeavePalette, updateBadgeCounts,
  withButtonLock, updateOTRateVisibility
};
})();


/* ==================== scheduler.js ==================== */
// Auto-scheduling algorithm. Pure logic — mutates state.schedule.

(function () {
  const { POSITIONS, SCORING_PENALTIES } = window.NurseConst;
  const {
    state, k, getShift, setShift, getLeave,
    isShiftLocked,
    isWorking, includesMorning, includesAfternoon, includesNight,
    daysInMonth, isWeekend, isOffDay
  } = window.NurseState;

  // Two shifts share a time-of-day category (morning/afternoon/night).
  // Compound shifts (ชบ/ดบ/ชด) match both halves.
  function sameCategory(a, b) {
    if (!a || !b) return false;
    if (includesMorning(a) && includesMorning(b)) return true;
    if (includesAfternoon(a) && includesAfternoon(b)) return true;
    if (includesNight(a) && includesNight(b)) return true;
    return false;
  }

  function hardRules() {
    return Object.assign({
      allowSingleAfternoonToNightWhenShort: false,
      forbidNightAfterOff: true,
      warnOnlyAfternoonToNight: false,
      warnOnlyNightAfterOff: false,
      disableDubaShift: true,
      maxWeeklyHours: 48
    }, state.appSettings?.hardRules || {});
  }

  function isCustomShiftCode(s) {
    if (!s) return false;
    return !!(state.appSettings?.customShifts || []).find(cs => cs.code === s);
  }

  function shiftHours(s) {
    if (!s || s === 'O') return 0;
    if (s === 'BD') return 4;
    if (['ชบ', 'ดบ', 'ชด', 'DN', 'ชBD', 'ดBD'].includes(s)) return 16;
    if (['D12', 'N12'].includes(s)) return 12;
    if (isWorking(s)) return 8;
    return 0;
  }

  function weekKey(d) {
    const date = new Date(state.year - 543, state.month - 1, d);
    const mondayOffset = (date.getDay() + 6) % 7;
    date.setDate(date.getDate() - mondayOffset);
    return date.toISOString().slice(0, 10);
  }

  function weeklyHoursAfter(nid, d, candidateShift) {
    const days = daysInMonth(state.year, state.month);
    const targetWeek = weekKey(d);
    let total = 0;
    for (let dd = 1; dd <= days; dd++) {
      if (weekKey(dd) !== targetWeek) continue;
      total += shiftHours(dd === d ? candidateShift : getShift(nid, dd));
    }
    return total;
  }

  function isAllowedAfternoonToNight(prevShift, nextShift) {
    const hr = hardRules();
    return !!hr.allowSingleAfternoonToNightWhenShort && prevShift === 'บ' && nextShift === 'ด';
  }

  // ----- Heads / Deputy enforcement: weekday → ช/ชบ only, weekend/holiday → O. -----
  function enforceHeadsWeekdayOnly() {
    const days = daysInMonth(state.year, state.month);
    let fixed = 0;
    state.nurses.forEach(n => {
      if (!POSITIONS[n.position]?.weekdayMorningOnly) return;
      for (let d = 1; d <= days; d++) {
        if (getLeave(n.id, d)) continue;
        if (isShiftLocked(n.id, d)) continue;
        const off = isOffDay(state.year, state.month, d);
        const cur = getShift(n.id, d);
        if (off) {
          if (cur !== 'O') { setShift(n.id, d, 'O'); fixed++; }
        } else {
          if (cur !== 'ช' && cur !== 'ชบ') { setShift(n.id, d, 'ช'); fixed++; }
        }
      }
    });
    return fixed;
  }

  // Backup: ensure every active nurse cell has SOMETHING (shift or leave).
  function fillAllEmpty() {
    const days = daysInMonth(state.year, state.month);
    let filled = 0;
    state.nurses.filter(n => n.active !== false).forEach(n => {
      for (let d = 1; d <= days; d++) {
        if (state.schedule[k(n.id, d)] || state.leaves[k(n.id, d)]) continue;
        if (isShiftLocked(n.id, d)) continue;
        state.schedule[k(n.id, d)] = 'O';
        filled++;
      }
    });
    if (filled > 0) window.NurseState.markDirty();
    return filled;
  }

  function countShiftOnDay(d, target) {
    let c = 0;
    state.nurses.filter(n => n.active !== false).forEach(n => {
      const s = getShift(n.id, d);
      if (target === 'ช' && includesMorning(s)) c++;
      else if (target === 'บ' && includesAfternoon(s)) c++;
      else if (target === 'ด' && includesNight(s)) c++;
    });
    return c;
  }

  function canPlace(nid, d, s) {
    if (getShift(nid, d) || getLeave(nid, d)) return false;
    if (isShiftLocked(nid, d)) return false;
    const hr = hardRules();
    if (hr.disableDubaShift && s === 'ดบ') return false;
    if (hr.forbidNightAfterOff && !hr.warnOnlyNightAfterOff && includesNight(s) && d - 1 >= 1 && getShift(nid, d - 1) === 'O') return false;
    const maxWeeklyHours = Number(hr.maxWeeklyHours) || 48;
    if (maxWeeklyHours > 0 && weeklyHoursAfter(nid, d, s) > maxWeeklyHours) return false;
    const nurse = state.nurses.find(n => n.id === nid);
    const p = POSITIONS[nurse?.position];
    if (p?.maxOne && isWorking(s)) {
      const others = state.nurses.filter(o => o.id !== nid && o.active !== false && POSITIONS[o.position]?.maxOne);
      for (const o of others) if (isWorking(getShift(o.id, d))) return false;
    }
    if (p?.weekdayMorningOnly) {
      const off = isOffDay(state.year, state.month, d);
      if (off) { if (s !== 'O') return false; }
      else { if (s !== 'ช' && s !== 'ชบ') return false; }
    }

    // --- AI PREMIUM RULES TUNING ---
    const ai = state.appSettings?.aiSettings || { noEveningToMorning: true, maxTwoConsecutiveCombined: true };

    // Rule 1: No Evening-to-Morning (ห้าม บ -> ช)
    if (ai.noEveningToMorning) {
      if (s === 'ช' || s === 'ชบ' || s === 'ชด') {
        if (d - 1 >= 1 && (getShift(nid, d - 1) === 'บ' || getShift(nid, d - 1) === 'ดบ' || getShift(nid, d - 1) === 'ชบ')) {
          return false;
        }
      }
      if (s === 'บ' || s === 'ดบ' || s === 'ชบ') {
        if (d + 1 <= daysInMonth(state.year, state.month) && (getShift(nid, d + 1) === 'ช' || getShift(nid, d + 1) === 'ชบ' || getShift(nid, d + 1) === 'ชด')) {
          return false;
        }
      }
    }

    // Rule 2: Max two consecutive combined shifts (ห้ามควบเวร หรือเวรควบคู่ติดกัน)
    if (ai.maxTwoConsecutiveCombined) {
      if (['ชบ', 'ดบ', 'ชด'].includes(s)) {
        if (d - 1 >= 1 && ['ชบ', 'ดบ', 'ชด'].includes(getShift(nid, d - 1))) {
          return false;
        }
        if (d + 1 <= daysInMonth(state.year, state.month) && ['ชบ', 'ดบ', 'ชด'].includes(getShift(nid, d + 1))) {
          return false;
        }
      }
    }

    if (includesAfternoon(s)) {
      if (d + 1 <= daysInMonth(state.year, state.month)) {
        const nextShift = getShift(nid, d + 1);
        if (includesNight(nextShift) && !isAllowedAfternoonToNight(s, nextShift) && !hr.warnOnlyAfternoonToNight) return false;
      }
    }
    if (includesNight(s)) {
      if (d - 1 >= 1) {
        const prevShift = getShift(nid, d - 1);
        if (includesAfternoon(prevShift) && !isAllowedAfternoonToNight(prevShift, s) && !hr.warnOnlyAfternoonToNight) return false;
      }
    }

    // Hard anti-lock-in: forbid a 3rd consecutive same-category shift.
    if (isWorking(s) && d - 2 >= 1) {
      if (sameCategory(s, getShift(nid, d - 1)) && sameCategory(s, getShift(nid, d - 2))) {
        return false;
      }
    }
    return true;
  }

  // Lower score = better candidate. Counts existing load, same-shift bias,
  // and consecutive-workday penalty. The consecutive count is the number of
  // already-worked days IMMEDIATELY BEFORE d, so placing at d would make it
  // (prevWork + 1) consecutive — penalize when that crosses the threshold.
  function scoreNurse(n, d, targetShift) {
    const days = daysInMonth(state.year, state.month);
    const P = SCORING_PENALTIES;
    let load = 0, sameCount = 0, penalty = 0;
    const isTargetMorning = includesMorning(targetShift);
    const isTargetAfternoon = includesAfternoon(targetShift);
    const isTargetNight = includesNight(targetShift);

    for (let dd = 1; dd <= days; dd++) {
      const s = getShift(n.id, dd);
      if (isWorking(s)) load++;
      
      // นับรวมเวรตามหมวดหมู่ช่วงเวลาจริงเพื่อเฉลี่ย เช้า/บ่าย/ดึก ให้เท่ากัน
      if (isTargetMorning && includesMorning(s)) {
        sameCount++;
      } else if (isTargetAfternoon && includesAfternoon(s)) {
        sameCount++;
      } else if (isTargetNight && includesNight(s)) {
        sameCount++;
      } else if (s === targetShift) {
        sameCount++;
      }
    }

    // --- EVEN SHIFT-TYPE BALANCE PENALTY/REWARD ---
    let m = 0, a = 0, nt = 0;
    for (let dd = 1; dd <= days; dd++) {
      const s = getShift(n.id, dd);
      if (includesMorning(s)) m++;
      if (includesAfternoon(s)) a++;
      if (includesNight(s)) nt++;
    }

    let m_new = m, a_new = a, nt_new = nt;
    if (includesMorning(targetShift)) m_new++;
    if (includesAfternoon(targetShift)) a_new++;
    if (includesNight(targetShift)) nt_new++;

    // Absolute deviation penalty: penalise proportionally to how far the
    // target shift type exceeds this nurse's own post-assignment average.
    const newTotal = m_new + a_new + nt_new;
    if (newTotal > 0) {
      const newAvg = newTotal / 3;
      const countOfType = isTargetMorning ? m_new : isTargetAfternoon ? a_new : nt_new;
      const dev = countOfType - newAvg;
      if (dev > 0) penalty += dev * 220; // strong push away from over-represented type
      else         penalty += dev * 60;  // mild reward for under-represented type
    }

    // Run-length penalty: how many consecutive prior days share this category.
    let catRun = 0;
    for (let dd = d - 1; dd >= 1; dd--) {
      const s = getShift(n.id, dd);
      if (!s) break;
      const matches =
        (isTargetMorning && includesMorning(s)) ||
        (isTargetAfternoon && includesAfternoon(s)) ||
        (isTargetNight && includesNight(s));
      if (matches) catRun++;
      else break;
    }
    if (catRun >= 1) penalty += catRun * 250;

    // --- AI PREMIUM RULES IN SCORING ---
    const ai = state.appSettings?.aiSettings || { fairWeekendDistribution: true, consecutiveDaysThreshold: 4 };
    const weights = ai.weights || { noEveningToMorning: 80, fairWeekend: 70, consecutiveBigPenalty: 80 };

    // Rule 1 Weight: Evening-to-Morning Soft Check
    if (targetShift === 'ช' || targetShift === 'ชบ' || targetShift === 'ชด') {
      if (d - 1 >= 1 && (getShift(n.id, d - 1) === 'บ' || getShift(n.id, d - 1) === 'ดบ' || getShift(n.id, d - 1) === 'ชบ')) {
        penalty += (weights.noEveningToMorning / 100) * 500;
      }
    }
    if (targetShift === 'บ' || targetShift === 'ดบ' || targetShift === 'ชบ') {
      if (d + 1 <= days && (getShift(n.id, d + 1) === 'ช' || getShift(n.id, d + 1) === 'ชบ' || getShift(n.id, d + 1) === 'ชด')) {
        penalty += (weights.noEveningToMorning / 100) * 500;
      }
    }

    // Rule 3: Fair Weekend Distribution (เฉลี่ยเวรวันหยุดเสาร์-อาทิตย์เท่ากัน)
    if (ai.fairWeekendDistribution && isWeekend(state.year, state.month, d)) {
      let weekendShiftsCount = 0;
      for (let dd = 1; dd <= days; dd++) {
        if (isWeekend(state.year, state.month, dd) && isWorking(getShift(n.id, dd))) {
          weekendShiftsCount++;
        }
      }
      let wWeight = weights.fairWeekend / 70; // normalized
      penalty += weekendShiftsCount * 30 * wWeight;
    }

    // Penalty for getting the same time-of-day category on consecutive days
    // (compound shifts ชบ/ดบ/ชด count toward both halves they overlap).
    if (d - 1 >= 1 && sameCategory(getShift(n.id, d - 1), targetShift)) {
      penalty += P.consecutiveDuPair || 200;
    }
    if (d - 2 >= 1 &&
        sameCategory(getShift(n.id, d - 1), targetShift) &&
        sameCategory(getShift(n.id, d - 2), targetShift)) {
      penalty += P.consecutiveDuTriple || 600;
    }
    let prevWork = 0;
    for (let dd = d - 1; dd >= Math.max(1, d - 6); dd--) {
      if (isWorking(getShift(n.id, dd))) prevWork++;
      else break;
    }
    // After placing at d the run length becomes prevWork + 1, so we compare
    // against threshold using >= threshold − 1 (i.e. 3 prev → 4 consecutive).
    const consThreshold = ai.consecutiveDaysThreshold ?? state.appSettings?.schedulerSettings?.consecutiveDaysThreshold ?? P.consecutiveDaysThreshold;
    let cWeight = weights.consecutiveBigPenalty / 80; // normalized
    if (prevWork >= consThreshold - 1) penalty += P.consecutiveBigPenalty * cWeight;
    else if (prevWork >= 2) penalty += P.consecutiveSmallPenalty;

    // --- NURSE SHIFT PREFERENCES BONUS / PENALTY ---
    if (n.prefShift && targetShift === n.prefShift) {
      penalty -= 150; // Reduction (bonus) for preferred shifts
    }
    if (n.avoidShift && targetShift === n.avoidShift) {
      penalty += 400; // Heavy penalty for avoided shifts
    }

    // Bonus: ถ้าเวรนี้ต่างจากเวรก่อนหน้าล่าสุด ให้ bonus (กระตุ้นให้สลับเวร)
    const prevShift1 = d - 1 >= 1 ? getShift(n.id, d - 1) : null;
    const prevShift2 = d - 2 >= 1 ? getShift(n.id, d - 2) : null;
    const prevShift3 = d - 3 >= 1 ? getShift(n.id, d - 3) : null;
    // หากไม่เคยได้ targetShift ใน 3 วันที่ผ่านมา ให้ลดคะแนน (จะถูกเลือกก่อน)
    if (prevShift1 !== targetShift && prevShift2 !== targetShift && prevShift3 !== targetShift) {
      penalty -= 80; // rotation bonus
    }

    return load * P.loadWeight + sameCount * P.sameShiftWeight + penalty + Math.random() * P.jitter;
  }

  // ----- Step 1+2: clear schedule (keep leaves) + apply heads -----
  function prepareSchedulingContext() {
    const days = daysInMonth(state.year, state.month);
    const nurses = state.nurses.filter(n => n.active !== false).sort((a, b) => (a.order || 999) - (b.order || 999));
    state.warnings = [];
    const prefix = `-${state.year}-${state.month}-`;
    for (const key in state.schedule) {
      if (state.lockedShifts?.[key]) continue;
      // Keep custom shifts already placed by users so Auto-Schedule respects them.
      if (isCustomShiftCode(state.schedule[key])) continue;
      if (key.includes(prefix)) delete state.schedule[key];
    }
    nurses.forEach(n => {
      const p = POSITIONS[n.position];
      if (!p || !p.weekdayMorningOnly) return;
      for (let d = 1; d <= days; d++) {
        if (getLeave(n.id, d)) continue;
        if (isShiftLocked(n.id, d)) continue;
        setShift(n.id, d, isOffDay(state.year, state.month, d) ? 'O' : 'ช');
      }
    });
    return { nurses, days };
  }

  // Candidate filter shared by main-pass + aggressive-fill.
  function buildCandidates(nurses, d, targetShift, days) {
    let cands = nurses.filter(n => {
      if (getShift(n.id, d)) return false;
      if (getLeave(n.id, d)) return false;
      if (POSITIONS[n.position]?.weekdayMorningOnly) return false;
      return canPlace(n.id, d, targetShift);
    });
    if (targetShift === 'ด') {
      cands = cands.filter(n => {
        if (d - 1 < 1) return true;
        const prevShift = getShift(n.id, d - 1);
        return !includesAfternoon(prevShift) || isAllowedAfternoonToNight(prevShift, targetShift);
      });
    }
    if (targetShift === 'บ') {
      cands = cands.filter(n => {
        if (d + 1 > days) return true;
        const nextShift = getShift(n.id, d + 1);
        return !includesNight(nextShift) || isAllowedAfternoonToNight(targetShift, nextShift);
      });
    }
    cands.forEach(n => { n._score = scoreNurse(n, d, targetShift); });
    cands.sort((a, b) => a._score - b._score);
    return cands;
  }

  // ----- Step 3: main fill pass (Chronological by Day) -----
  function mainFillPass(ctx) {
    const { nurses, days } = ctx;
    const passOrder = ['ด', 'ช', 'บ'];
    for (let d = 1; d <= days; d++) {
      for (const targetShift of passOrder) {
        const off = isOffDay(state.year, state.month, d);
        const req = off ? state.requirements.weekend : state.requirements.weekday;
        const have = countShiftOnDay(d, targetShift);
        const need = (targetShift === 'ช' ? req.ch : targetShift === 'บ' ? req.ba : req.du) - have;
        if (need <= 0) continue;
        const cands = buildCandidates(nurses, d, targetShift, days);
        for (let i = 0; i < need && i < cands.length; i++) {
          setShift(cands[i].id, d, targetShift);
        }
      }
    }
  }

  // ----- Step 3.5: distribute compound shifts (ชบ / ดบ) -----
  function distributeSpecialShifts(ctx) {
    const { nurses, days } = ctx;
    const hr = hardRules();
    nurses.forEach(n => {
      if (POSITIONS[n.position]?.weekdayMorningOnly) return;
      let chbaCount = 0, dubaCount = 0;
      for (let d = 1; d <= days; d++) {
        const s = getShift(n.id, d);
        if (s === 'ชบ') chbaCount++;
        if (s === 'ดบ') dubaCount++;
      }
      let needChba = Math.max(0, 1 - chbaCount);
      let needDuba = hr.disableDubaShift ? 0 : Math.max(0, 1 - dubaCount);

      // Phase A: upgrade ช → ชบ
      for (let d = 1; d <= days && needChba > 0; d++) {
        if (isShiftLocked(n.id, d)) continue;
        if (getShift(n.id, d) !== 'ช') continue;
        if (d + 1 <= days && includesNight(getShift(n.id, d + 1))) continue;
        setShift(n.id, d, 'ชบ');
        needChba--;
      }
      // Phase B: upgrade บ → ดบ
      for (let d = 1; d <= days && needDuba > 0; d++) {
        if (isShiftLocked(n.id, d)) continue;
        if (getShift(n.id, d) !== 'บ') continue;
        if (d - 1 >= 1 && includesAfternoon(getShift(n.id, d - 1))) continue;
        if (d + 1 <= days && includesNight(getShift(n.id, d + 1))) continue;
        setShift(n.id, d, 'ดบ');
        needDuba--;
      }
      // Phase C: fallback upgrade บ → ชบ
      if (needChba > 0) {
        for (let d = 1; d <= days && needChba > 0; d++) {
          if (isShiftLocked(n.id, d)) continue;
          if (getShift(n.id, d) !== 'บ') continue;
          if (d + 1 <= days && includesNight(getShift(n.id, d + 1))) continue;
          if (d - 1 >= 1 && includesAfternoon(getShift(n.id, d - 1))) continue;
          setShift(n.id, d, 'ชบ');
          needChba--;
        }
      }
    });
  }

  // ----- Step 3.7: fix afternoon→night by swap or replace -----
  function autoFixAfternoonNight(ctx) {
    const { nurses, days } = ctx;
    const hr = hardRules();
    if (hr.warnOnlyAfternoonToNight) return;
    for (const n of nurses) {
      for (let d = 1; d < days; d++) {
        const cur = getShift(n.id, d);
        const nxt = getShift(n.id, d + 1);
        if (!includesAfternoon(cur) || !includesNight(nxt)) continue;
        if (isAllowedAfternoonToNight(cur, nxt)) continue;
        if (isShiftLocked(n.id, d + 1)) continue;
        let swapped = false;
        for (const m of nurses) {
          if (m.id === n.id) continue;
          if (POSITIONS[m.position]?.weekdayMorningOnly) continue;
          const ms = getShift(m.id, d + 1);
          if (ms !== 'O') continue;
          if (isShiftLocked(m.id, d + 1)) continue;
          if (getLeave(m.id, d + 1)) continue;
          if (includesAfternoon(getShift(m.id, d))) continue;
          setShift(m.id, d + 1, nxt);
          setShift(n.id, d + 1, 'O');
          swapped = true;
          break;
        }
        if (swapped) continue;
        setShift(n.id, d + 1, 'O');
        state.warnings.push(`🔄 ${n.name}: ${cur}(${d})→${nxt}(${d + 1}) แก้เป็น O แทน`);
      }
    }
  }

  // ----- Step 4: aggressive fill (3 passes) -----
  function aggressiveFill(ctx) {
    const { nurses, days } = ctx;
    for (let pass = 0; pass < 3; pass++) {
      let added = 0;
      for (let d = 1; d <= days; d++) {
        const off = isOffDay(state.year, state.month, d);
        const req = off ? state.requirements.weekend : state.requirements.weekday;
        ['ช', 'บ', 'ด'].forEach(ts => {
          const r = ts === 'ช' ? req.ch : ts === 'บ' ? req.ba : req.du;
          const have = countShiftOnDay(d, ts);
          if (have >= r) return;
          const need = r - have;
          const cands = buildCandidates(nurses, d, ts, days);
          for (let i = 0; i < need && i < cands.length; i++) {
            setShift(cands[i].id, d, ts);
            added++;
          }
        });
      }
      if (added === 0) break;
    }
  }

  // ----- Step 4.5: Emergency Compound Fill (Force Double Shifts for Shortages) -----
  function emergencyCompoundFill(ctx) {
    const { nurses, days } = ctx;
    const ai = state.appSettings?.aiSettings || {};
    const hr = hardRules();
    const canUpgrade = (n, d, nextShift) => {
      if (hr.disableDubaShift && nextShift === 'ดบ') return false;
      const maxWeeklyHours = Number(hr.maxWeeklyHours) || 48;
      return maxWeeklyHours <= 0 || weeklyHoursAfter(n.id, d, nextShift) <= maxWeeklyHours;
    };

    for (let d = 1; d <= days; d++) {
      const off = isOffDay(state.year, state.month, d);
      const req = off ? state.requirements.weekend : state.requirements.weekday;

      // Fill missing บ่าย (Afternoon)
      let baHave = countShiftOnDay(d, 'บ');
      while (baHave < req.ba) {
        let upgraded = false;
        const shuffledNurses = [...nurses].sort(() => Math.random() - 0.5);
        for (const n of shuffledNurses) {
          if (POSITIONS[n.position]?.weekdayMorningOnly) continue;
          const cur = getShift(n.id, d);
          if (isShiftLocked(n.id, d)) continue;
          if (cur === 'ช') {
            if (!canUpgrade(n, d, 'ชบ')) continue;
            if (d + 1 <= days && includesNight(getShift(n.id, d + 1))) continue;
            if (ai.maxTwoConsecutiveCombined) {
              if (d - 1 >= 1 && ['ชบ', 'ดบ', 'ชด'].includes(getShift(n.id, d - 1))) continue;
              if (d + 1 <= days && ['ชบ', 'ดบ', 'ชด'].includes(getShift(n.id, d + 1))) continue;
            }
            setShift(n.id, d, 'ชบ');
            baHave++;
            upgraded = true;
            break;
          } else if (cur === 'ด') {
            if (!canUpgrade(n, d, 'ดบ')) continue;
            if (d - 1 >= 1 && includesAfternoon(getShift(n.id, d - 1))) continue;
            if (d + 1 <= days && includesNight(getShift(n.id, d + 1))) continue;
            if (ai.maxTwoConsecutiveCombined) {
              if (d - 1 >= 1 && ['ชบ', 'ดบ', 'ชด'].includes(getShift(n.id, d - 1))) continue;
              if (d + 1 <= days && ['ชบ', 'ดบ', 'ชด'].includes(getShift(n.id, d + 1))) continue;
            }
            setShift(n.id, d, 'ดบ');
            baHave++;
            upgraded = true;
            break;
          }
        }
        if (!upgraded) break;
      }

      // Fill missing ดึก (Night)
      let duHave = countShiftOnDay(d, 'ด');
      while (duHave < req.du) {
        let upgraded = false;
        const shuffledNurses = [...nurses].sort(() => Math.random() - 0.5);
        for (const n of shuffledNurses) {
          if (POSITIONS[n.position]?.weekdayMorningOnly) continue;
          const cur = getShift(n.id, d);
          if (isShiftLocked(n.id, d)) continue;
          if (cur === 'บ') {
            if (!canUpgrade(n, d, 'ดบ')) continue;
            if (d - 1 >= 1 && includesAfternoon(getShift(n.id, d - 1))) continue;
            if (d + 1 <= days && includesNight(getShift(n.id, d + 1))) continue;
            if (ai.maxTwoConsecutiveCombined) {
              if (d - 1 >= 1 && ['ชบ', 'ดบ', 'ชด'].includes(getShift(n.id, d - 1))) continue;
              if (d + 1 <= days && ['ชบ', 'ดบ', 'ชด'].includes(getShift(n.id, d + 1))) continue;
            }
            setShift(n.id, d, 'ดบ');
            duHave++;
            upgraded = true;
            break;
          } else if (cur === 'ช') {
            if (!canUpgrade(n, d, 'ชด')) continue;
            if (d - 1 >= 1 && includesAfternoon(getShift(n.id, d - 1))) continue;
            if (ai.maxTwoConsecutiveCombined) {
              if (d - 1 >= 1 && ['ชบ', 'ดบ', 'ชด'].includes(getShift(n.id, d - 1))) continue;
              if (d + 1 <= days && ['ชบ', 'ดบ', 'ชด'].includes(getShift(n.id, d + 1))) continue;
            }
            setShift(n.id, d, 'ชด');
            duHave++;
            upgraded = true;
            break;
          }
        }
        if (!upgraded) break;
      }

      // Fill missing เช้า (Morning)
      let chHave = countShiftOnDay(d, 'ช');
      while (chHave < req.ch) {
        let upgraded = false;
        const shuffledNurses = [...nurses].sort(() => Math.random() - 0.5);
        for (const n of shuffledNurses) {
          if (POSITIONS[n.position]?.weekdayMorningOnly) continue;
          const cur = getShift(n.id, d);
          if (isShiftLocked(n.id, d)) continue;
          if (cur === 'บ') {
            if (!canUpgrade(n, d, 'ชบ')) continue;
            if (d + 1 <= days && includesNight(getShift(n.id, d + 1))) continue;
            if (ai.noEveningToMorning && d - 1 >= 1 && (getShift(n.id, d - 1) === 'บ' || getShift(n.id, d - 1) === 'ดบ' || getShift(n.id, d - 1) === 'ชบ')) continue;
            if (ai.maxTwoConsecutiveCombined) {
              if (d - 1 >= 1 && ['ชบ', 'ดบ', 'ชด'].includes(getShift(n.id, d - 1))) continue;
              if (d + 1 <= days && ['ชบ', 'ดบ', 'ชด'].includes(getShift(n.id, d + 1))) continue;
            }
            setShift(n.id, d, 'ชบ');
            chHave++;
            upgraded = true;
            break;
          } else if (cur === 'ด') {
            if (!canUpgrade(n, d, 'ชด')) continue;
            if (ai.noEveningToMorning && d - 1 >= 1 && (getShift(n.id, d - 1) === 'บ' || getShift(n.id, d - 1) === 'ดบ' || getShift(n.id, d - 1) === 'ชบ')) continue;
            if (ai.maxTwoConsecutiveCombined) {
              if (d - 1 >= 1 && ['ชบ', 'ดบ', 'ชด'].includes(getShift(n.id, d - 1))) continue;
              if (d + 1 <= days && ['ชบ', 'ดบ', 'ชด'].includes(getShift(n.id, d + 1))) continue;
            }
            setShift(n.id, d, 'ชด');
            chHave++;
            upgraded = true;
            break;
          }
        }
        if (!upgraded) break;
      }
    }
  }

  // ----- Step 5: fill leftover with O -----
  function fillRemainingWithO(ctx) {
    const { nurses, days } = ctx;
    nurses.forEach(n => {
      for (let d = 1; d <= days; d++) {
        if (getShift(n.id, d) || getLeave(n.id, d)) continue;
        setShift(n.id, d, 'O');
      }
    });
  }

  // ----- Step 6+7: validation + coverage warnings -----
  function validateAndWarn(ctx) {
    const { nurses, days } = ctx;
    const hr = hardRules();
    nurses.forEach(n => {
      const weeklyTotals = {};
      for (let d = 1; d <= days; d++) {
        const cur = getShift(n.id, d);
        weeklyTotals[weekKey(d)] = (weeklyTotals[weekKey(d)] || 0) + shiftHours(cur);
        if (hr.disableDubaShift && cur === 'ดบ') {
          state.warnings.push(`⚠ ${n.name}: วันที่ ${d} พบ ดบ ทั้งที่ Policy ปิดใช้งาน`);
        }
        if (hr.forbidNightAfterOff && includesNight(cur) && d - 1 >= 1 && getShift(n.id, d - 1) === 'O') {
          state.warnings.push(`⚠ ${n.name}: วันที่ ${d} ขึ้นเวรดึกหลังวัน O`);
        }
        const pos = POSITIONS[n.position];
        if (pos?.weekdayMorningOnly && cur && cur !== 'O') {
          const off = isOffDay(state.year, state.month, d);
          if (off) {
            state.warnings.push(`⚠ ${n.name} (${n.position}): วันที่ ${d} ควรเป็น O (วันหยุด/เสาร์-อาทิตย์)`);
          } else if (cur !== 'ช' && cur !== 'ชบ') {
            state.warnings.push(`⚠ ${n.name} (${n.position}): วันที่ ${d} ขึ้น ${cur} — ตำแหน่งบริหารอนุญาตเฉพาะ ช หรือ ชบ ในวันทำการ`);
          }
        }
        if (!includesAfternoon(cur) || d + 1 > days) continue;
        const nxt = getShift(n.id, d + 1);
        if (includesNight(nxt) && !isAllowedAfternoonToNight(cur, nxt)) {
          state.warnings.push(`⚠ ${n.name} : ${cur}(วันที่ ${d}) → ${nxt}(วันที่ ${d + 1}) ผิดกฎ`);
        }
      }
      Object.values(weeklyTotals).forEach(total => {
        if (total > (Number(hr.maxWeeklyHours) || 48)) {
          state.warnings.push(`⏱ ${n.name}: ชั่วโมงทำงานสัปดาห์หนึ่งรวม ${total} ชม. เกิน ${Number(hr.maxWeeklyHours) || 48} ชม.`);
        }
      });
    });
    for (let d = 1; d <= days; d++) {
      const off = isOffDay(state.year, state.month, d);
      const req = off ? state.requirements.weekend : state.requirements.weekday;
      const ch = countShiftOnDay(d, 'ช');
      const ba = countShiftOnDay(d, 'บ');
      const du = countShiftOnDay(d, 'ด');
      if (ch < req.ch) state.warnings.push(`📅 วันที่ ${d}: เวรเช้าขาด ${req.ch - ch} คน`);
      if (ba < req.ba) state.warnings.push(`📅 วันที่ ${d}: เวรบ่ายขาด ${req.ba - ba} คน`);
      if (du < req.du) state.warnings.push(`📅 วันที่ ${d}: เวรดึกขาด ${req.du - du} คน`);
    }
  }

  // ----- Mode 2: office-style (ช every weekday, เย็น/OT rotated per track) -----
  function autoScheduleMode2() {
    const days = daysInMonth(state.year, state.month);
    const nurses = state.nurses.filter(n => n.active !== false).sort((a, b) => (a.order || 999) - (b.order || 999));
    const m2 = state.appSettings?.mode2Settings || { eveningReq: { 'วิชาชีพ': 1, 'สนับสนุน': 1 }, otReq: { 'วิชาชีพ': 1, 'สนับสนุน': 1 } };
    const randomSeed = Math.floor(Math.random() * 1_000_000);
    state.warnings = [];
    const prefix = `-${state.year}-${state.month}-`;
    for (const key in state.schedule) {
      if (state.lockedShifts?.[key]) continue;
      if (isCustomShiftCode(state.schedule[key])) continue;
      if (key.includes(prefix)) delete state.schedule[key];
    }

    // Step 1: assign ช to everyone on weekdays
    nurses.forEach(n => {
      for (let d = 1; d <= days; d++) {
        if (getLeave(n.id, d)) continue;
        if (isShiftLocked(n.id, d)) continue;
        if (!isOffDay(state.year, state.month, d)) setShift(n.id, d, 'ช');
      }
    });

    function countBefore(n, d, shiftCode) {
      let c = 0;
      for (let dd = 1; dd < d; dd++) if (getShift(n.id, dd) === shiftCode) c++;
      return c;
    }

    function totalPremiumBefore(n, d) {
      let total = 0;
      for (let dd = 1; dd < d; dd++) {
        const s = getShift(n.id, dd);
        if (s === 'เย็น') total += 1;
        else if (s === 'OT') total += 2;
      }
      return total;
    }

    function lastGap(n, d, shiftCode) {
      for (let dd = d - 1; dd >= 1; dd--) {
        if (getShift(n.id, dd) === shiftCode) return d - dd;
      }
      return 99;
    }

    function mode2Seed(track, shiftCode) {
      const yAD = state.year > 2500 ? state.year - 543 : state.year;
      return randomSeed + (yAD * 37) + (state.month * 17) + (track === 'สนับสนุน' ? 7 : 0) + (shiftCode === 'OT' ? 13 : 0);
    }

    function seededNoise(n, d, track, shiftCode) {
      let h = mode2Seed(track, shiftCode) + d * 101;
      const str = `${n.id}|${n.name}|${shiftCode}`;
      for (let i = 0; i < str.length; i++) h = ((h << 5) - h + str.charCodeAt(i)) | 0;
      const x = Math.sin(h) * 10000;
      return x - Math.floor(x);
    }

    function mode2RankValue(n, pool, d, track, shiftCode) {
      const idx = Math.max(0, pool.findIndex(x => x.id === n.id));
      const seed = mode2Seed(track, shiftCode);
      return ((idx - ((d + seed) % Math.max(pool.length, 1)) + pool.length) % Math.max(pool.length, 1)) / Math.max(pool.length, 1);
    }

    function mode2Score(n, pool, d, track, shiftCode) {
      const sameCount = countBefore(n, d, shiftCode);
      const premiumLoad = totalPremiumBefore(n, d);
      const gap = lastGap(n, d, shiftCode);
      const prev = d > 1 ? getShift(n.id, d - 1) : '';
      const next = d < days ? getShift(n.id, d + 1) : '';
      let score = 0;

      score += sameCount * 1000;       // primary fairness for this shift type
      score += premiumLoad * 110;      // balance evening + holiday OT together
      if (gap <= 1) score += 700;      // avoid same premium on adjacent days
      else if (gap <= 3) score += 220;
      if (shiftCode === 'OT' && prev === 'เย็น') score += 260;
      if (shiftCode === 'เย็น' && next === 'OT') score += 160;
      score += mode2RankValue(n, pool, d, track, shiftCode) * 50; // month/day rotation tie-breaker
      score += seededNoise(n, d, track, shiftCode) * 180; // real per-run variety, still fairness-weighted
      return score;
    }

    function pickRotating(track, d, shiftCode, count) {
      if (count <= 0) return [];
      const pool = nurses.filter(n => POSITIONS[n.position]?.track === track);
      const candidates = pool
        .filter(n => !getLeave(n.id, d) && !isShiftLocked(n.id, d));
      if (candidates.length < count) {
        state.warnings.push(`📅 วันที่ ${d}: ${shiftCode} (${track}) ต้องการ ${count} คน แต่มีผู้พร้อมจัด ${candidates.length} คน`);
      }
      return candidates
        .map(n => ({ n, score: mode2Score(n, pool, d, track, shiftCode) }))
        .sort((a, b) => a.score - b.score || (a.n.order || 999) - (b.n.order || 999))
        .slice(0, count)
        .map(x => x.n);
    }

    // Step 2: on each weekday, rotate เย็น per track (replace ช → เย็น)
    const eveningPro = Number(m2.eveningReq?.['วิชาชีพ']) || 0;
    const eveningSupp = Number(m2.eveningReq?.['สนับสนุน']) || 0;
    for (let d = 1; d <= days; d++) {
      if (isOffDay(state.year, state.month, d)) continue;
      pickRotating('วิชาชีพ', d, 'เย็น', eveningPro).forEach(n => setShift(n.id, d, 'เย็น'));
      pickRotating('สนับสนุน', d, 'เย็น', eveningSupp).forEach(n => setShift(n.id, d, 'เย็น'));
    }

    // Step 3: on each off-day, assign OT per track
    const otPro = Number(m2.otReq?.['วิชาชีพ']) || 0;
    const otSupp = Number(m2.otReq?.['สนับสนุน']) || 0;
    for (let d = 1; d <= days; d++) {
      if (!isOffDay(state.year, state.month, d)) continue;
      pickRotating('วิชาชีพ', d, 'OT', otPro).forEach(n => setShift(n.id, d, 'OT'));
      pickRotating('สนับสนุน', d, 'OT', otSupp).forEach(n => setShift(n.id, d, 'OT'));
    }

    function countAssigned(track, d, shiftCode) {
      return nurses.filter(n => POSITIONS[n.position]?.track === track && getShift(n.id, d) === shiftCode).length;
    }

    for (let d = 1; d <= days; d++) {
      if (isOffDay(state.year, state.month, d)) {
        const pro = countAssigned('วิชาชีพ', d, 'OT');
        const supp = countAssigned('สนับสนุน', d, 'OT');
        if (pro < otPro) state.warnings.push(`📅 วันที่ ${d}: OT วันหยุดสายวิชาชีพขาด ${otPro - pro} คน`);
        if (supp < otSupp) state.warnings.push(`📅 วันที่ ${d}: OT วันหยุดสายสนับสนุนขาด ${otSupp - supp} คน`);
      } else {
        const pro = countAssigned('วิชาชีพ', d, 'เย็น');
        const supp = countAssigned('สนับสนุน', d, 'เย็น');
        if (pro < eveningPro) state.warnings.push(`📅 วันที่ ${d}: เวรเย็นสายวิชาชีพขาด ${eveningPro - pro} คน`);
        if (supp < eveningSupp) state.warnings.push(`📅 วันที่ ${d}: เวรเย็นสายสนับสนุนขาด ${eveningSupp - supp} คน`);
      }
    }

    window.NurseState.invalidateStats();
  }

  // ----- Mode 3: 12-hour D12-D12-N12-N12-O-O rotating pattern -----
  function autoScheduleMode3() {
    const days = daysInMonth(state.year, state.month);
    const nurses = state.nurses.filter(n => n.active !== false).sort((a, b) => (a.order || 999) - (b.order || 999));
    const pattern = ['D12', 'D12', 'N12', 'N12', 'O', 'O'];
    state.warnings = [];
    const prefix = `-${state.year}-${state.month}-`;
    for (const key in state.schedule) {
      if (state.lockedShifts?.[key]) continue;
      if (isCustomShiftCode(state.schedule[key])) continue;
      if (key.includes(prefix)) delete state.schedule[key];
    }
    nurses.forEach((n, idx) => {
      const offset = (idx * 2) % pattern.length; // stagger each nurse by 2 positions
      for (let d = 1; d <= days; d++) {
        if (getLeave(n.id, d)) continue;
        if (isShiftLocked(n.id, d)) continue;
        const pos = ((d - 1) + offset) % pattern.length;
        setShift(n.id, d, pattern[pos]);
      }
    });
    window.NurseState.invalidateStats();
  }

  function autoScheduleCore() {
    window.NurseHistory.pushHistory();
    const mode = state.appSettings?.shiftMode || 1;
    if (mode === 2) { autoScheduleMode2(); return; }
    if (mode === 3) { autoScheduleMode3(); return; }
    // Mode 1: standard 8-hr rotating
    const ctx = prepareSchedulingContext();
    mainFillPass(ctx);
    distributeSpecialShifts(ctx);
    autoFixAfternoonNight(ctx);
    aggressiveFill(ctx);
    emergencyCompoundFill(ctx);
    fillRemainingWithO(ctx);
    validateAndWarn(ctx);
    enforceHeadsWeekdayOnly();
    fillAllEmpty();
    window.NurseState.invalidateStats();
  }

  window.NurseScheduler = {
    autoScheduleCore,
    enforceHeadsWeekdayOnly,
    fillAllEmpty,
    canPlace,
    countShiftOnDay,
    scoreNurse
  };
})();


/* ==================== render.js ==================== */
// Rendering: schedule, leaves, dashboard, summary, nurses list.
// Cell updates are surgical (data-attributes); only month/year changes
// trigger full-table rebuilds.

(function() {
const { SHIFT_TYPES, POSITIONS, THAI_MONTHS, WARNING_LIMIT } = window.NurseConst;
const {
  state, getShift, getLeave, isShiftLocked,
  isWorking, daysInMonth, isWeekend, dayLabel, todayBE, isOffDay,
  computeNurseStats
} = window.NurseState;
const H = window.NurseHolidays;

function shiftDef(code) {
  const base = SHIFT_TYPES[code];
  if (base) return base;
  const custom = (state.appSettings?.customShifts || []).find(s => s.code === code);
  if (custom) return { label: custom.code, name: custom.name, bg: custom.bg || '#e2e8f0', fg: custom.fg || '#334155' };
  return { label: code, name: code, bg: '#e2e8f0', fg: '#334155' };
}

// Minimal HTML escape — used everywhere user-controlled strings end up in
// innerHTML templates. textContent / appendChild is preferred where possible.
function esc(str) {
  if (str == null) return '';
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

// Stat column definitions per mode (shown in schedule table header & rows)
const MODE_STAT_COLS = {
  1: [
    { key: 'chTotal', label: 'ช<br><span style="font-size:9px;font-weight:300;opacity:0.85">(รวม)</span>' },
    { key: 'baTotal', label: 'บ<br><span style="font-size:9px;font-weight:300;opacity:0.85">(รวม)</span>' },
    { key: 'duTotal', label: 'ด<br><span style="font-size:9px;font-weight:300;opacity:0.85">(รวม)</span>' },
    { key: 'ชบ', label: 'ชบ' }, { key: 'ดบ', label: 'ดบ' }, { key: 'ชด', label: 'ชด' },
    { key: 'O', label: 'O' }, { key: 'V', label: 'V' }, { key: 'T', label: 'T' },
    { key: 'total', label: 'รวม', bold: true }
  ],
  2: [
    { key: 'ช',    label: 'ช' },
    { key: 'เย็น', label: 'เย็น' },
    { key: 'OT',   label: 'OT' },
    { key: 'O',    label: 'O' }, { key: 'V', label: 'V' }, { key: 'T', label: 'T' },
    { key: 'total', label: 'รวม', bold: true }
  ],
  3: [
    { key: 'D12',  label: 'D12' },
    { key: 'N12',  label: 'N12' },
    { key: 'O',    label: 'O' }, { key: 'V', label: 'V' }, { key: 'T', label: 'T' },
    { key: 'total', label: 'รวม', bold: true }
  ]
};

function cellContent(txt, locked) {
  const safe = esc(txt);
  return locked
    ? `<span class="locked-cell-content"><span>${safe}</span><i data-lucide="lock" class="locked-cell-icon"></i></span>`
    : safe;
}

// ========= SCHEDULE TABLE =========
function renderSchedule() {
  const tbl = document.getElementById('scheduleTable');
  const days = daysInMonth(state.year, state.month);
  const tdy = todayBE();
  const mode = state.appSettings?.shiftMode || 1;
  const statCols = MODE_STAT_COLS[mode] || MODE_STAT_COLS[1];

  let html = '<thead>';
  html += `<tr>
    <th rowspan="2" class="sticky-col" style="min-width:36px">ที่</th>
    <th rowspan="2" class="sticky-col-2" style="min-width:150px;left:36px">ชื่อ-นามสกุล</th>
    <th rowspan="2" class="sticky-col-3" style="min-width:110px;left:186px">ตำแหน่ง</th>`;
  for (let d = 1; d <= days; d++) {
    const we = isWeekend(state.year, state.month, d);
    const hn = H.getHolidayName(state.year, state.month, d);
    const today = tdy.y === state.year && tdy.m === state.month && tdy.d === d;
    let cls = '';
    if (hn) cls = 'holiday-header';
    else if (we) cls = 'weekend-header';
    const titleAttr = hn ? ` title="${esc(hn)}"` : '';
    const todayStyle = today ? 'background:linear-gradient(135deg,#f59e0b,#d97706)!important;' : '';
    html += `<th class="${cls}" style="min-width:38px;${todayStyle}"${titleAttr}>${d}</th>`;
  }
  statCols.forEach(c => {
    html += `<th rowspan="2" class="stat-col" style="min-width:36px;background:#0c4a6e">${c.label}</th>`;
  });
  html += '</tr><tr>';
  for (let d = 1; d <= days; d++) {
    const we = isWeekend(state.year, state.month, d);
    const hn = H.getHolidayName(state.year, state.month, d);
    let cls = '';
    if (hn) cls = 'holiday-header';
    else if (we) cls = 'weekend-header';
    html += `<th class="${cls}" style="font-size:10px;font-weight:400;opacity:0.85">${esc(dayLabel(state.year, state.month, d))}</th>`;
  }
  html += '</tr></thead><tbody>';

  state.nurses.filter(n => n.active !== false).sort((a, b) => (a.order || 999) - (b.order || 999)).forEach((n, idx) => {
    const posCls = POSITIONS[n.position]?.cls || 'pos-rn';
    
    let prefHtml = '';
    if (n.prefShift) {
      prefHtml += `<span class="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] px-1 rounded-sm ml-1 font-bold dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900" title="เวรที่ชอบ: ${n.prefShift}">ชอบ:${n.prefShift}</span>`;
    }
    if (n.avoidShift) {
      prefHtml += `<span class="inline-block bg-rose-50 text-rose-700 border border-rose-200 text-[9px] px-1 rounded-sm ml-1 font-bold dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-900" title="เวรที่เลี่ยง: ${n.avoidShift}">เลี่ยง:${n.avoidShift}</span>`;
    }

    html += `<tr data-nurse="${esc(n.id)}">
      <td class="sticky-col text-center text-slate-500">${idx + 1}</td>
      <td class="sticky-col-2 text-left px-2 font-medium text-slate-700" style="left:36px">
        <div class="flex flex-col">
          <span class="truncate">${esc(n.name)}</span>
          ${prefHtml ? `<div class="flex gap-0.5 mt-0.5">${prefHtml}</div>` : ''}
        </div>
      </td>
      <td class="sticky-col-3 px-2" style="left:186px"><span class="pos-badge ${posCls}">${esc(n.position)}</span></td>`;
    for (let d = 1; d <= days; d++) {
      const we = isWeekend(state.year, state.month, d);
      const hl = !!H.getHolidayName(state.year, state.month, d);
      const shift = getShift(n.id, d);
      const lv = getLeave(n.id, d);
      const locked = isShiftLocked(n.id, d);
      let bg = '', fg = '#475569', txt = '';
      if (lv) { const d = shiftDef(lv); bg = d.bg; fg = d.fg; txt = lv; }
      else if (shift) { const d = shiftDef(shift); bg = d.bg; fg = d.fg; txt = shift; }
      const cellCls = ['day-cell'];
      if (locked) cellCls.push('locked-shift-cell');
      if (hl) cellCls.push('holiday-cell');
      else if (we) cellCls.push('weekend-cell');
      html += `<td class="${cellCls.join(' ')}" style="background:${bg};color:${fg}" data-nurse="${esc(n.id)}" data-day="${d}">${cellContent(txt, locked)}</td>`;
    }
    const st = computeNurseStats(n.id);
    statCols.forEach(c => {
      const v = c.key === 'total' ? st.total : (st[c.key] || 0);
      const cls2 = c.bold ? 'stat-col font-bold text-cyan-700' : 'stat-col';
      html += `<td class="${cls2}">${v || ''}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody>';
  tbl.innerHTML = html;
  if (window.NurseState.isSystemLocked()) {
    tbl.classList.add('system-locked');
  } else {
    tbl.classList.remove('system-locked');
  }

  // Wire up cell clicks via delegation (single listener — set once)
  if (!tbl.dataset.bound) {
    tbl.addEventListener('click', e => {
      const td = e.target.closest('td[data-nurse][data-day]');
      if (!td) return;
      onCellClick(td.dataset.nurse, +td.dataset.day);
    });
    tbl.dataset.bound = '1';
  }
  lucide.createIcons();
}

function onCellClick(nid, d) {
  const U = window.NurseUI;
  if (window.NurseState.isSystemLocked()) {
    U.showError('🔒 ระบบจัดตารางเวรถูกล็อกอยู่! กรุณาปลดล็อกในเมนู "ตั้งค่าระบบ" ก่อนทำการแก้ไขข้อมูล');
    return;
  }
  if (state.lockMode) {
    if (getLeave(nid, d)) { U.showWarn(`วันที่ ${d} เป็นวันลา — ไม่ล็อกเวรทับวันลา`); return; }
    const cur = getShift(nid, d);
    if (!cur) { U.showWarn('กรุณาใส่เวรก่อนล็อกเซลล์ หรือใช้ปุ่ม “ล็อก จ/พ/ศ = เช้า”'); return; }
    window.NurseHistory.pushHistory();
    window.NurseState.setShiftLock(nid, d, !isShiftLocked(nid, d));
    updateCell(nid, d);
    U.showSuccess(isShiftLocked(nid, d) ? 'ล็อกเซลล์นี้แล้ว 🔒' : 'ปลดล็อกเซลล์นี้แล้ว');
    return;
  }
  if (state.selectedShift === null) { U.showWarn('เลือกประเภทเวรจาก palette ก่อน'); return; }
  if (isShiftLocked(nid, d)) { U.showWarn('เซลล์นี้ถูกล็อกอยู่ — เปิดโหมดล็อกแล้วคลิกอีกครั้งเพื่อปลดล็อกก่อน'); return; }
  if (getLeave(nid, d)) { U.showWarn(`วันที่ ${d} เป็นวันลา — ลบจากแท็บ "วันลา" ก่อน`); return; }
  const nurse = state.nurses.find(n => n.id === nid);
  if (!nurse) return;
  const pos = POSITIONS[nurse.position];
  const cur = getShift(nid, d);
  const s = state.selectedShift;

  if (s === '') { window.NurseHistory.pushHistory(); window.NurseState.setShift(nid, d, null); updateCell(nid, d); refreshStatsRow(nid); return; }
  if (cur === s) { window.NurseHistory.pushHistory(); window.NurseState.setShift(nid, d, null); updateCell(nid, d); refreshStatsRow(nid); return; }

  if (pos.weekdayMorningOnly) {
    const off = isOffDay(state.year, state.month, d);
    if (s !== 'O' && s !== 'ช') {
      if (off) { U.showWarn(`${nurse.position} เสาร์อาทิตย์/วันหยุดต้อง O เท่านั้น`); return; }
      else { U.showWarn(`${nurse.position} วันธรรมดาต้อง ช หรือ O เท่านั้น`); return; }
    }
    if (s === 'ช' && off) { U.showWarn(`${nurse.position} ขึ้น ช เฉพาะวันธรรมดา`); return; }
  }

  if (pos.maxOne && isWorking(s)) {
    const others = state.nurses.filter(o => o.id !== nid && o.active !== false && POSITIONS[o.position]?.maxOne);
    for (const o of others) {
      if (isWorking(getShift(o.id, d))) { U.showWarn(`${nurse.position} มีได้ 1 คนต่อวัน (${o.name} ขึ้นอยู่)`); return; }
    }
  }

  const { includesAfternoon, includesNight } = window.NurseState;
  if (includesAfternoon(s)) {
    if (d + 1 <= daysInMonth(state.year, state.month)) {
      const nxt = getShift(nid, d + 1);
      if (includesNight(nxt)) { U.showWarn(`ห้าม ${s} → ${nxt} (วันถัดไป)`); return; }
    }
  }
  if (includesNight(s)) {
    if (d - 1 >= 1) {
      const prev = getShift(nid, d - 1);
      if (includesAfternoon(prev)) { U.showWarn(`ห้าม ${prev} (เมื่อวาน) → ${s}`); return; }
    }
  }

  window.NurseHistory.pushHistory();
  window.NurseState.setShift(nid, d, s);
  updateCell(nid, d);
  refreshStatsRow(nid);
}

// Surgical update of a single cell.
function updateCell(nid, d) {
  const cell = document.querySelector(`#scheduleTable td[data-nurse="${CSS.escape(nid)}"][data-day="${d}"]`);
  if (!cell) return;
  const shift = getShift(nid, d);
  const lv = getLeave(nid, d);
  const locked = isShiftLocked(nid, d);
  let bg = '', fg = '#475569', txt = '';
  if (lv) { const d = shiftDef(lv); bg = d.bg; fg = d.fg; txt = lv; }
  else if (shift) { const d = shiftDef(shift); bg = d.bg; fg = d.fg; txt = shift; }
  cell.style.background = bg;
  cell.style.color = fg;
  cell.classList.toggle('locked-shift-cell', locked);
  cell.innerHTML = cellContent(txt, locked);
  lucide.createIcons();
}

function refreshStatsRow(nid) {
  const row = document.querySelector(`#scheduleTable tr[data-nurse="${CSS.escape(nid)}"]`);
  if (!row) return;
  const st = computeNurseStats(nid);
  const cells = row.querySelectorAll('.stat-col');
  const mode = state.appSettings?.shiftMode || 1;
  const statCols = MODE_STAT_COLS[mode] || MODE_STAT_COLS[1];
  statCols.forEach((c, i) => {
    if (!cells[i]) return;
    const v = c.key === 'total' ? st.total : (st[c.key] || 0);
    cells[i].textContent = v || '';
  });
  window.NurseUI.updateBadgeCounts();
}

// ========= LEAVES TABLE =========
function renderLeaves() {
  const tbl = document.getElementById('leavesTable');
  const days = daysInMonth(state.year, state.month);
  const tdy = todayBE();
  let html = '<thead><tr>';
  html += `<th class="sticky-col" style="min-width:36px">ที่</th>
    <th class="sticky-col-2" style="min-width:150px;left:36px">ชื่อ-นามสกุล</th>
    <th class="sticky-col-3" style="min-width:110px;left:186px">ตำแหน่ง</th>`;
  for (let d = 1; d <= days; d++) {
    const we = isWeekend(state.year, state.month, d);
    const hn = H.getHolidayName(state.year, state.month, d);
    const today = tdy.y === state.year && tdy.m === state.month && tdy.d === d;
    let cls = '';
    if (hn) cls = 'holiday-header';
    else if (we) cls = 'weekend-header';
    const titleAttr = hn ? ` title="${esc(hn)}"` : '';
    const todayStyle = today ? 'background:linear-gradient(135deg,#f59e0b,#d97706)!important;' : '';
    html += `<th class="${cls}" style="min-width:38px;${todayStyle}"${titleAttr}>${d}<br><span style="font-size:10px;opacity:0.85">${esc(dayLabel(state.year, state.month, d))}</span></th>`;
  }
  html += '<th class="stat-col" style="background:#0c4a6e">V</th><th class="stat-col" style="background:#0c4a6e">T</th></tr></thead><tbody>';

  state.nurses.filter(n => n.active !== false).sort((a, b) => (a.order || 999) - (b.order || 999)).forEach((n, idx) => {
    const posCls = POSITIONS[n.position]?.cls || 'pos-rn';
    
    let prefHtml = '';
    if (n.prefShift) {
      prefHtml += `<span class="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] px-1 rounded-sm ml-1 font-bold dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900" title="เวรที่ชอบ: ${n.prefShift}">ชอบ:${n.prefShift}</span>`;
    }
    if (n.avoidShift) {
      prefHtml += `<span class="inline-block bg-rose-50 text-rose-700 border border-rose-200 text-[9px] px-1 rounded-sm ml-1 font-bold dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-900" title="เวรที่เลี่ยง: ${n.avoidShift}">เลี่ยง:${n.avoidShift}</span>`;
    }

    html += `<tr data-leave-nurse="${esc(n.id)}">
      <td class="sticky-col text-center text-slate-500">${idx + 1}</td>
      <td class="sticky-col-2 text-left px-2 font-medium text-slate-700" style="left:36px">
        <div class="flex flex-col">
          <span class="truncate">${esc(n.name)}</span>
          ${prefHtml ? `<div class="flex gap-0.5 mt-0.5">${prefHtml}</div>` : ''}
        </div>
      </td>
      <td class="sticky-col-3 px-2" style="left:186px"><span class="pos-badge ${posCls}">${esc(n.position)}</span></td>`;
    let v = 0, t = 0;
    for (let d = 1; d <= days; d++) {
      const we = isWeekend(state.year, state.month, d);
      const hl = !!H.getHolidayName(state.year, state.month, d);
      const lv = getLeave(n.id, d);
      let bg = '', fg = '#475569', txt = '';
      if (lv) { const d = shiftDef(lv); bg = d.bg; fg = d.fg; txt = lv; if (lv === 'V') v++; else if (lv === 'T') t++; }
      const cellCls = ['day-cell'];
      if (hl) cellCls.push('holiday-cell');
      else if (we) cellCls.push('weekend-cell');
      html += `<td class="${cellCls.join(' ')}" style="background:${bg};color:${fg}" data-leave-nurse="${esc(n.id)}" data-lday="${d}">${txt}</td>`;
    }
    html += `<td class="stat-col font-bold text-emerald-700">${v || ''}</td><td class="stat-col font-bold text-pink-700">${t || ''}</td>`;
    html += '</tr>';
  });
  html += '</tbody>';
  tbl.innerHTML = html;
  if (window.NurseState.isSystemLocked()) {
    tbl.classList.add('system-locked');
  } else {
    tbl.classList.remove('system-locked');
  }

  if (!tbl.dataset.bound) {
    tbl.addEventListener('click', e => {
      const td = e.target.closest('td[data-leave-nurse][data-lday]');
      if (!td) return;
      onLeaveClick(td.dataset.leaveNurse, +td.dataset.lday);
    });
    tbl.dataset.bound = '1';
  }
}

function onLeaveClick(nid, d) {
  if (window.NurseState.isSystemLocked()) {
    window.NurseUI.showError('🔒 ระบบจัดตารางเวรถูกล็อกอยู่! กรุณาปลดล็อกในเมนู "ตั้งค่าระบบ" ก่อนทำการแก้ไขข้อมูลวันลา');
    return;
  }
  window.NurseHistory.pushHistory();
  const cur = getLeave(nid, d);
  const newL = state.selectedLeave;
  if (cur === newL || newL === '') {
    window.NurseState.setLeave(nid, d, null);
  } else {
    window.NurseState.setLeave(nid, d, newL);
    window.NurseState.setShift(nid, d, null);
    window.NurseState.setShiftLock(nid, d, false);
  }
  renderLeaves();
  window.NurseUI.updateBadgeCounts();
}

// ========= DASHBOARD =========
function renderDashboard() {
  const days = daysInMonth(state.year, state.month);
  document.getElementById('dashDays').textContent = days;
  document.getElementById('dashMonthLabel').textContent = `${THAI_MONTHS[state.month - 1]} ${state.year}`;
  document.getElementById('tabCountDays').textContent = days;

  const activeNurses = state.nurses.filter(n => n.active !== false);
  document.getElementById('dashNurses').textContent = activeNurses.length;
  const heads = activeNurses.filter(n => POSITIONS[n.position]?.weekdayMorningOnly).length;
  document.getElementById('dashNursesSub').textContent = `รวม ${heads} คนเป็นหัวหน้า`;
  document.getElementById('tabCountNurses').textContent = activeNurses.length;

  let totalShifts = 0, leaveCount = 0;
  const mode = state.appSettings?.shiftMode || 1;

  // Track shift types relevant to the current mode
  const modeShifts = {
    1: ['ช', 'บ', 'ด', 'ชบ', 'ดบ', 'ชด', 'O', 'V', 'T'],
    2: ['ช', 'เย็น', 'OT', 'O', 'V', 'T'],
    3: ['D12', 'N12', 'O', 'V', 'T']
  };
  const trackedShifts = modeShifts[mode] || modeShifts[1];
  const distribution = {};
  trackedShifts.forEach(s => { distribution[s] = 0; });

  activeNurses.forEach(n => {
    for (let d = 1; d <= days; d++) {
      const s = getShift(n.id, d);
      const l = getLeave(n.id, d);
      if (l) { if (distribution[l] !== undefined) distribution[l]++; leaveCount++; continue; }
      if (s) {
        if (distribution[s] !== undefined) distribution[s]++;
        if (isWorking(s)) totalShifts++;
      }
    }
  });
  document.getElementById('dashShifts').textContent = totalShifts;
  const totalNeeded = activeNurses.length * days;
  const pct = totalNeeded > 0 ? Math.round(((totalShifts + leaveCount + (distribution['O'] || 0)) / totalNeeded) * 100) : 0;
  document.getElementById('dashShiftPct').textContent = `${pct}% เติมแล้ว`;
  document.getElementById('dashLeaves').textContent = leaveCount;
  document.getElementById('tabCountLeaves').textContent = leaveCount;
  document.getElementById('dashWarnings').textContent = state.warnings.length;

  const ot = window.NurseOT.computeOT();
  document.getElementById('dashOTAmount').textContent = ot.totalAmount.toLocaleString();
  document.getElementById('dashOTCount').textContent = `${ot.totalUnits} เวร · ${ot.nursesWithOT} คน`;
  document.getElementById('tabCountOT').textContent = ot.nursesWithOT;

  // --- MONTHLY OT BUDGET CAP CHECK ---
  const cap = state.appSettings?.budgetCap ?? 50000;
  const alertEl = document.getElementById('dashAlertBanner');
  if (alertEl) {
    if (ot.totalAmount > cap) {
      alertEl.innerHTML = `
        <div class="flex items-center gap-3 p-4 bg-rose-50 border-l-4 border-rose-500 rounded-r-lg shadow-sm text-rose-800 animate-pulse">
          <i data-lucide="alert-octagon" class="w-5 h-5 flex-shrink-0 text-rose-600"></i>
          <div>
            <div class="font-bold text-sm">⚠️ แจ้งเตือน: ยอดงบประมาณค่าแรง OT เกินกำหนด!</div>
            <div class="text-xs text-rose-600 mt-0.5 font-medium">ยอดรวม OT ประจำเดือนนี้คือ ${ot.totalAmount.toLocaleString()} บาท ซึ่งสูงกว่าขีดจำกัดงบประมาณตึกที่ตั้งค่าไว้ (${cap.toLocaleString()} บาท)</div>
          </div>
        </div>`;
      alertEl.classList.remove('hidden');
    } else {
      alertEl.innerHTML = '';
      alertEl.classList.add('hidden');
    }
  }

  // Distribution bars
  const distEl = document.getElementById('shiftDistribution');
  const colors = {
    'ช': '#fef9c3', 'บ': '#bae6fd', 'ด': '#a5f3fc',
    'ชบ': '#fcd34d', 'ดบ': '#5eead4', 'ชด': '#c4b5fd',
    'O': '#e2e8f0', 'V': '#bbf7d0', 'T': '#fbcfe8',
    'เย็น': '#fed7aa', 'OT': '#fca5a5',
    'D12': '#fde68a', 'N12': '#818cf8'
  };
  const stroke = {
    'ช': '#854d0e', 'บ': '#075985', 'ด': '#155e75',
    'ชบ': '#78350f', 'ดบ': '#134e4a', 'ชด': '#4c1d95',
    'O': '#475569', 'V': '#14532d', 'T': '#831843',
    'เย็น': '#9a3412', 'OT': '#7f1d1d',
    'D12': '#78350f', 'N12': '#1e1b4b'
  };
  const maxV = Math.max(1, ...Object.values(distribution));
  distEl.innerHTML = Object.entries(distribution).map(([s, c]) => {
    const p = Math.round((c / maxV) * 100);
    return `<div class="flex items-center gap-2">
      <span class="px-2 py-0.5 rounded font-bold text-xs w-10 text-center" style="background:${colors[s]};color:${stroke[s]}">${s}</span>
      <div class="flex-1 h-5 bg-slate-100 rounded overflow-hidden">
        <div class="h-full flex items-center justify-end pr-2 text-xs font-semibold" style="width:${p}%;background:${colors[s]};color:${stroke[s]}">${c || ''}</div>
      </div>
      <span class="text-xs text-slate-500 w-12 text-right">${c} เวร</span>
    </div>`;
  }).join('');

  // Workload top 10
  const wl = activeNurses.map(n => {
    const st = computeNurseStats(n.id);
    return { name: n.name, position: n.position, total: st.total };
  }).sort((a, b) => b.total - a.total).slice(0, 10);
  const maxW = Math.max(1, ...wl.map(w => w.total));
  document.getElementById('workloadChart').innerHTML = wl.map((w, i) => {
    const p = Math.round((w.total / maxW) * 100);
    return `<div class="flex items-center gap-2 text-xs">
      <span class="w-5 text-slate-400 text-right">${i + 1}.</span>
      <span class="flex-1 truncate text-slate-700">${esc(w.name)}</span>
      <div class="w-32 h-4 bg-slate-100 rounded overflow-hidden">
        <div class="h-full bg-gradient-to-r from-cyan-400 to-blue-500" style="width:${p}%"></div>
      </div>
      <span class="w-10 text-right font-semibold text-cyan-700">${w.total}</span>
    </div>`;
  }).join('') || '<div class="text-sm text-slate-400 text-center py-6">ยังไม่มีข้อมูล</div>';

  renderWarnings();
}

function renderWarnings() {
  const wp = document.getElementById('warningPanel');
  const list = document.getElementById('warningList');
  if (state.warnings.length === 0) {
    wp.classList.add('hidden');
    list.replaceChildren();
    return;
  }
  wp.classList.remove('hidden');
  const items = state.warnings.slice(0, WARNING_LIMIT).map(w => {
    const li = document.createElement('li');
    li.textContent = w;  // safe: textContent prevents XSS
    return li;
  });
  if (state.warnings.length > WARNING_LIMIT) {
    const more = document.createElement('li');
    more.className = 'text-amber-600';
    more.textContent = `... และอีก ${state.warnings.length - WARNING_LIMIT} คำเตือน`;
    items.push(more);
  }
  list.replaceChildren(...items);
}

// ========= SUMMARY =========
function renderSummary() {
  const grid = document.getElementById('summaryGrid');
  const days = daysInMonth(state.year, state.month);
  const mode = state.appSettings?.shiftMode || 1;
  const nurses = state.nurses.filter(n => n.active !== false).sort((a, b) => (a.order || 999) - (b.order || 999));

  // Stat grid config per mode
  const modeStatRows = {
    1: [
      [
        { key: 'chTotal', bg: 'bg-yellow-50', fg: 'text-yellow-800', sub: 'text-yellow-700', label: 'ช <span class="opacity-60">(รวม)</span>', title: 'ช + ชบ + ชด' },
        { key: 'baTotal', bg: 'bg-sky-50',    fg: 'text-sky-800',    sub: 'text-sky-700',    label: 'บ <span class="opacity-60">(รวม)</span>', title: 'บ + ชบ + ดบ' },
        { key: 'duTotal', bg: 'bg-cyan-50',   fg: 'text-cyan-800',   sub: 'text-cyan-700',   label: 'ด <span class="opacity-60">(รวม)</span>', title: 'ด + ดบ + ชด' }
      ],
      [
        { key: 'ชบ', bg: 'bg-amber-50',  fg: 'text-amber-800',  sub: 'text-amber-700',  label: 'ชบ' },
        { key: 'ดบ', bg: 'bg-teal-50',   fg: 'text-teal-800',   sub: 'text-teal-700',   label: 'ดบ' },
        { key: 'ชด', bg: 'bg-purple-50', fg: 'text-purple-800', sub: 'text-purple-700', label: 'ชด' }
      ],
      [
        { key: 'O', bg: 'bg-slate-50',   fg: 'text-slate-700',  sub: 'text-slate-600',  label: 'O' },
        { key: 'V', bg: 'bg-emerald-50', fg: 'text-emerald-800',sub: 'text-emerald-700',label: 'V' },
        { key: 'T', bg: 'bg-pink-50',    fg: 'text-pink-800',   sub: 'text-pink-700',   label: 'T' }
      ]
    ],
    2: [
      [
        { key: 'ช',   bg: 'bg-yellow-50', fg: 'text-yellow-800', sub: 'text-yellow-700', label: 'ช (เช้า)' },
        { key: 'เย็น',bg: 'bg-orange-50', fg: 'text-orange-800', sub: 'text-orange-700', label: 'เย็น' },
        { key: 'OT',  bg: 'bg-red-50',    fg: 'text-red-800',    sub: 'text-red-700',    label: 'OT' }
      ],
      [
        { key: 'O', bg: 'bg-slate-50',   fg: 'text-slate-700',  sub: 'text-slate-600',  label: 'O' },
        { key: 'V', bg: 'bg-emerald-50', fg: 'text-emerald-800',sub: 'text-emerald-700',label: 'V' },
        { key: 'T', bg: 'bg-pink-50',    fg: 'text-pink-800',   sub: 'text-pink-700',   label: 'T' }
      ]
    ],
    3: [
      [
        { key: 'D12', bg: 'bg-yellow-50',  fg: 'text-yellow-800',  sub: 'text-yellow-700',  label: 'D12 (กลางวัน)' },
        { key: 'N12', bg: 'bg-indigo-50',  fg: 'text-indigo-800',  sub: 'text-indigo-700',  label: 'N12 (กลางคืน)' },
        { key: 'O',   bg: 'bg-slate-50',   fg: 'text-slate-700',   sub: 'text-slate-600',   label: 'OFF' }
      ],
      [
        { key: 'V', bg: 'bg-emerald-50', fg: 'text-emerald-800',sub: 'text-emerald-700',label: 'V' },
        { key: 'T', bg: 'bg-pink-50',    fg: 'text-pink-800',   sub: 'text-pink-700',   label: 'T' },
        { key: null, bg: 'bg-transparent', fg: '', sub: '', label: '' }
      ]
    ]
  };

  const rows = modeStatRows[mode] || modeStatRows[1];

  grid.innerHTML = nurses.map(n => {
    const st = computeNurseStats(n.id);
    const cls = POSITIONS[n.position]?.cls || 'pos-rn';
    const pct = Math.min(100, Math.round((st.total / 22) * 100));

    const cellsHTML = rows.map(row =>
      `<div class="grid grid-cols-3 gap-1 text-xs mt-1">` +
      row.map(c => c.key === null
        ? `<div></div>`
        : `<div class="${c.bg} p-1.5 rounded text-center" ${c.title ? `title="${c.title}"` : ''}>
             <div class="font-bold ${c.fg}">${st[c.key] || 0}</div>
             <div class="${c.sub}">${c.label}</div>
           </div>`
      ).join('') +
      `</div>`
    ).join('');

    return `<div class="summary-card">
      <div class="flex items-start justify-between mb-2">
        <div>
          <div class="font-semibold text-slate-800">${esc(n.name)}</div>
          <span class="pos-badge ${cls} mt-1 inline-block">${esc(n.position)}</span>
        </div>
        <div class="text-right">
          <div class="text-2xl font-bold text-cyan-700">${st.total}</div>
          <div class="text-xs text-slate-500">/${days} วัน</div>
        </div>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      ${cellsHTML}
    </div>`;
  }).join('');
}

// ========= NURSES LIST =========
function renderNursesList() {
  const list = document.getElementById('nursesList');
  const sorted = [...state.nurses].sort((a, b) => (a.order || 999) - (b.order || 999));
  list.innerHTML = sorted.map((n, i) => {
    const cls = POSITIONS[n.position]?.cls || 'pos-rn';
    const inactive = n.active === false;
    return `<div class="flex items-center gap-3 p-3 rounded-xl border ${inactive ? 'bg-slate-50 opacity-60' : 'bg-white'} hover:border-cyan-400 transition">
      <div class="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 font-semibold text-sm">${i + 1}</div>
      <div class="flex-1">
        <div class="font-medium text-slate-800">${esc(n.name)} ${inactive ? '<span class="text-xs text-slate-400">(ปิดใช้งาน)</span>' : ''}</div>
        <div class="flex items-center gap-2 mt-1">
          <span class="pos-badge ${cls}">${esc(n.position)}</span>
          <span class="text-xs text-slate-400">ID: ${esc(n.id)}</span>
          ${n.prefShift ? `<span class="bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] px-1.5 py-0.5 rounded font-bold dark:bg-emerald-950 dark:text-emerald-400 dark:border-emerald-900">ชอบ ${n.prefShift}</span>` : ''}
          ${n.avoidShift ? `<span class="bg-rose-50 text-rose-700 border border-rose-100 text-[10px] px-1.5 py-0.5 rounded font-bold dark:bg-rose-950 dark:text-rose-400 dark:border-rose-900">เลี่ยง ${n.avoidShift}</span>` : ''}
        </div>
      </div>
      <button data-action="toggle" data-id="${esc(n.id)}" class="btn-solid ${inactive ? 'btn-success' : 'btn-warning'} text-xs">
        <i data-lucide="${inactive ? 'check' : 'eye-off'}" class="w-3.5 h-3.5"></i> ${inactive ? 'เปิดใช้' : 'ปิดใช้'}
      </button>
      <button data-action="edit" data-id="${esc(n.id)}" class="btn-solid btn-primary text-xs">
        <i data-lucide="edit-2" class="w-3.5 h-3.5"></i> แก้ไข
      </button>
      <button data-action="delete" data-id="${esc(n.id)}" class="btn-solid btn-danger text-xs">
        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i> ลบ
      </button>
    </div>`;
  }).join('');
  lucide.createIcons();
  if (!list.dataset.bound) {
    list.addEventListener('click', e => {
      const btn = e.target.closest('button[data-action]');
      if (!btn) return;
      const { action, id } = btn.dataset;
      const N = window.NurseNurses;
      if (action === 'toggle') N.toggleNurseActive(id);
      else if (action === 'edit') N.editNurse(id);
      else if (action === 'delete') N.deleteNurse(id);
    });
    list.dataset.bound = '1';
  }
}

// ========= CALENDAR VIEW =========
function renderCalendar() {
  const grid = document.getElementById('calendarGrid');
  const monthLbl = document.getElementById('calendarMonthLabel');
  const subLbl = document.getElementById('calendarSubLabel');
  const legend = document.getElementById('calendarLegend');
  if (!grid) return;

  const { year, month } = state;
  const days = daysInMonth(year, month);
  const tdy = todayBE();
  const isCurrentMonth = tdy.y === year && tdy.m === month;

  // Update header labels
  if (monthLbl) monthLbl.textContent = `${THAI_MONTHS[month - 1]} ${year}`;
  if (subLbl) {
    const n = state.nurses.filter(n => n.active !== false).length;
    subLbl.textContent = `พยาบาลที่ใช้งาน ${n} คน`;
  }

  // Mode-aware shift groups
  const mode = state.appSettings?.shiftMode || 1;
  const modeShifts = {
    1: ['ช', 'บ', 'ด', 'ชบ', 'ดบ', 'ชด'],
    2: ['ช', 'เย็น', 'OT'],
    3: ['D12', 'N12']
  };
  const customCodes = (state.appSettings?.customShifts || []).map(s => s.code).filter(Boolean);
  const activeShifts = [...(modeShifts[mode] || modeShifts[1]), ...(mode === 1 ? customCodes : [])];

  // Render legend in header
  if (legend) {
    legend.innerHTML = activeShifts.map(s => {
      const d = shiftDef(s);
      const bg = d.bg || '#f1f5f9';
      const fg = d.fg || '#334155';
      return `<span class="cal-shift-badge" style="background:${bg};color:${fg}">${s}</span>`;
    }).join('');
  }

  const activeNurses = state.nurses.filter(n => n.active !== false)
    .sort((a, b) => (a.order || 999) - (b.order || 999));

  // Grid start offset
  const firstDay = new Date(year - 543, month - 1, 1).getDay();
  let html = '';

  // Leading empty cells
  for (let i = 0; i < firstDay; i++) {
    html += `<div class="cal-cell cal-empty"></div>`;
  }

  // Day cells
  for (let d = 1; d <= days; d++) {
    const hn = H.getHolidayName(year, month, d);
    const we = isWeekend(year, month, d);
    const isToday = isCurrentMonth && tdy.d === d;

    // Group nurses by their shift/leave for this day
    const groups = {};
    activeShifts.forEach(s => { groups[s] = []; });
    activeNurses.forEach(n => {
      const effective = getLeave(n.id, d) || getShift(n.id, d);
      if (effective && activeShifts.includes(effective)) {
        groups[effective].push(n.name.split(' ')[0]);
      }
    });

    // Build shift rows
    let shiftsHtml = '';
    let totalWorkers = 0;
    activeShifts.forEach(s => {
      if (!groups[s].length) return;
      totalWorkers += groups[s].length;
      const d = shiftDef(s);
      const bg = d.bg || '#f1f5f9';
      const fg = d.fg || '#334155';
      const chips = groups[s].map(name =>
        `<span class="cal-name-chip">${esc(name)}</span>`
      ).join('');
      shiftsHtml += `
        <div class="cal-shift-group">
          <span class="cal-shift-badge" style="background:${bg};color:${fg}">${s}</span>
          <div class="cal-names">${chips}</div>
        </div>`;
    });

    // Cell type class
    let cellCls = 'cal-cell';
    if (isToday) cellCls += ' cal-today';
    else if (hn) cellCls += ' cal-holiday';
    else if (we) cellCls += ' cal-weekend';

    // Date number class
    let dateCls = 'cal-date-num';
    if (isToday) dateCls += ' is-today';
    else if (hn) dateCls += ' is-holiday';
    else if (we) dateCls += ' is-weekend';

    // Count chip
    const countColor = totalWorkers >= 3 ? '#0d9488' : totalWorkers >= 1 ? '#d97706' : '#94a3b8';
    const countBg = totalWorkers >= 3 ? '#f0fdfa' : totalWorkers >= 1 ? '#fffbeb' : '#f8fafc';

    // Per-shift mini counts for mobile view
    const shiftCountChips = activeShifts
      .filter(s => groups[s].length > 0)
      .map(s => {
        const sd = shiftDef(s);
        return `<span class="cal-count-chip" style="background:${sd.bg||'#f1f5f9'};color:${sd.fg||'#334155'}">${s}·${groups[s].length}</span>`;
      }).join('');

    html += `
      <div class="${cellCls}">
        <div class="cal-date-badge">
          <span class="${dateCls}">${d}</span>
        </div>
        ${hn ? `<div class="cal-holiday-name">🎌 ${esc(hn)}</div>` : ''}
        <div class="cal-shifts">
          ${shiftsHtml || `<div style="color:#d1d5db;font-size:10px;text-align:center;padding:8px 0">—</div>`}
        </div>
        <div class="cal-count-bar">
          <span class="cal-count-chip cal-total-chip" style="background:${countBg};color:${countColor}">
            👤 ${totalWorkers} คน
          </span>
          <div class="cal-shift-counts">${shiftCountChips}</div>
        </div>
      </div>`;
  }

  // Trailing empty cells to fill last row
  const trailing = (7 - ((firstDay + days) % 7)) % 7;
  for (let i = 0; i < trailing; i++) {
    html += `<div class="cal-cell cal-empty"></div>`;
  }

  grid.innerHTML = html;
}

// ========= PRINT CALENDAR =========
function printCalendar() {
  // Temporarily add a class to body to signal "print-calendar mode"
  document.body.classList.add('printing-calendar');
  window.print();
  document.body.classList.remove('printing-calendar');
}

window.NurseRender = {
  renderSchedule, updateCell, refreshStatsRow,
  renderLeaves, renderDashboard, renderSummary, renderNursesList,
  renderWarnings, renderCalendar, printCalendar, esc
};
})();


/* ==================== nurses.js ==================== */
// CRUD operations for nurses.

(function() {
const { POSITIONS } = window.NurseConst;

const GROUP_LABELS = {
  0: 'โรงพยาบาล',
  1: 'รพ.สต. — บริหารและวิชาชีพหลัก',
  2: 'รพ.สต. — วิชาชีพเฉพาะทาง',
  3: 'รพ.สต. — สนับสนุนบริการ'
};

function buildPosOptions(selectedPos) {
  const byGroup = {};
  Object.entries(POSITIONS).forEach(([p, def]) => {
    const g = def.group ?? 0;
    (byGroup[g] = byGroup[g] || []).push([p, def]);
  });
  return Object.keys(byGroup).sort().map(g => {
    const opts = byGroup[g].map(([p, def]) =>
      `<option value="${p}" ${p === selectedPos ? 'selected' : ''}>${def.icon} ${p}</option>`
    ).join('');
    return `<optgroup label="${GROUP_LABELS[g] || 'อื่นๆ'}">${opts}</optgroup>`;
  }).join('');
}
const { state, persistAll, markDirty, invalidateStats } = window.NurseState;
const { confirmAct, showSuccess } = window.NurseUI;

const SHIFT_CHIPS = [
  { v: '',  label: 'ไม่ระบุ', bg: '#f1f5f9', fg: '#475569' },
  { v: 'ช', label: 'ช เช้า',  bg: '#fef9c3', fg: '#854d0e' },
  { v: 'บ', label: 'บ บ่าย',  bg: '#bae6fd', fg: '#075985' },
  { v: 'ด', label: 'ด ดึก',   bg: '#a5f3fc', fg: '#155e75' }
];

function chipsHTML(groupId, selectedValue, accent) {
  return SHIFT_CHIPS.map(c => {
    const on = c.v === (selectedValue || '');
    const ring = on ? `box-shadow:0 0 0 2px ${accent};` : '';
    return `<button type="button" data-group="${groupId}" data-val="${c.v}"
      class="nf-chip${on ? ' nf-chip-on' : ''}"
      style="background:${c.bg};color:${c.fg};${ring}">${c.label}</button>`;
  }).join('');
}

function attachChipHandlers(groupId, accent) {
  document.querySelectorAll(`button[data-group="${groupId}"]`).forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll(`button[data-group="${groupId}"]`).forEach(b => {
        b.classList.remove('nf-chip-on');
        b.style.boxShadow = '';
      });
      btn.classList.add('nf-chip-on');
      btn.style.boxShadow = `0 0 0 2px ${accent}`;
      document.getElementById(groupId + 'Val').value = btn.dataset.val;
    });
  });
}

function injectNurseFormStyles() {
  if (document.getElementById('nurse-form-style')) return;
  const s = document.createElement('style');
  s.id = 'nurse-form-style';
  s.textContent = `
    .nf-wrap { text-align:left; padding:4px 2px; }
    .nf-section { background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:12px 14px; margin-bottom:10px; }
    .nf-label { display:flex; align-items:center; gap:6px; font-size:13px; font-weight:600; color:#334155; margin-bottom:6px; }
    .nf-label .dot { width:6px; height:6px; border-radius:50%; background:#0ea5e9; }
    .nf-input { width:100%; padding:10px 12px; border:1.5px solid #cbd5e1; border-radius:10px; font-size:15px; background:white; outline:none; transition:border-color .15s; }
    .nf-input:focus { border-color:#0ea5e9; }
    .nf-select { width:100%; padding:10px 12px; border:1.5px solid #cbd5e1; border-radius:10px; font-size:14px; background:white; outline:none; cursor:pointer; }
    .nf-select:focus { border-color:#0ea5e9; }
    .nf-preview { margin-top:8px; padding:8px 10px; border-radius:8px; background:white; border:1px dashed #cbd5e1; display:flex; align-items:center; gap:8px; font-size:13px; color:#475569; }
    .nf-preview-icon { font-size:22px; }
    .nf-chips { display:flex; flex-wrap:wrap; gap:6px; }
    .nf-chip { padding:7px 12px; border-radius:999px; font-size:13px; font-weight:600; border:none; cursor:pointer; transition:transform .1s, box-shadow .15s; }
    .nf-chip:hover { transform:translateY(-1px); }
    .nf-chip-on { transform:translateY(-1px); }
    .nf-grid2 { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
    @media (max-width:520px) { .nf-grid2 { grid-template-columns:1fr; } }
  `;
  document.head.appendChild(s);
}

function buildNurseForm(idPrefix, values) {
  const posOptions = buildPosOptions(values.position);
  const escAttr = s => String(s || '').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
  const orderField = values.showOrder ? `
    <div class="nf-section">
      <div class="nf-label"><span class="dot" style="background:#8b5cf6"></span>ลำดับการแสดงผล</div>
      <input id="${idPrefix}Order" type="number" min="1" class="nf-input" value="${Number(values.order) || 1}">
    </div>` : '';
  return `<div class="nf-wrap">
    <div class="nf-section">
      <div class="nf-label"><span class="dot"></span>ชื่อ-นามสกุล</div>
      <input id="${idPrefix}Name" class="nf-input" placeholder="เช่น นางสาวสมหญิง พยาบาลดี" value="${escAttr(values.name)}" maxlength="100">
    </div>
    <div class="nf-section">
      <div class="nf-label"><span class="dot" style="background:#10b981"></span>ตำแหน่ง</div>
      <select id="${idPrefix}Pos" class="nf-select">${posOptions}</select>
      <div class="nf-preview" id="${idPrefix}PosPreview"></div>
    </div>
    <div class="nf-section">
      <div class="nf-label"><span class="dot" style="background:#059669"></span>เวรพึงประสงค์ <span style="color:#94a3b8;font-weight:400">(เวรที่ชอบ)</span></div>
      <div class="nf-chips">${chipsHTML(idPrefix + 'Pref', values.prefShift, '#059669')}</div>
      <input type="hidden" id="${idPrefix}PrefVal" value="${escAttr(values.prefShift)}">
    </div>
    <div class="nf-section">
      <div class="nf-label"><span class="dot" style="background:#e11d48"></span>เวรที่ต้องการหลีกเลี่ยง</div>
      <div class="nf-chips">${chipsHTML(idPrefix + 'Avoid', values.avoidShift, '#e11d48')}</div>
      <input type="hidden" id="${idPrefix}AvoidVal" value="${escAttr(values.avoidShift)}">
    </div>
    ${orderField}
  </div>`;
}

function wireNurseForm(idPrefix) {
  attachChipHandlers(idPrefix + 'Pref', '#059669');
  attachChipHandlers(idPrefix + 'Avoid', '#e11d48');
  const posSel = document.getElementById(idPrefix + 'Pos');
  const preview = document.getElementById(idPrefix + 'PosPreview');
  const updatePreview = () => {
    const def = POSITIONS[posSel.value];
    if (!def) { preview.innerHTML = ''; return; }
    const groupName = GROUP_LABELS[def.group ?? 0] || '';
    const trackLabel = def.track === 'สนับสนุน' ? 'สายสนับสนุน' : 'สายวิชาชีพ';
    preview.innerHTML = `<span class="nf-preview-icon">${def.icon}</span>
      <div>
        <div style="font-weight:600;color:#1e293b">${posSel.value}</div>
        <div style="font-size:11px;color:#64748b">${groupName} · ${trackLabel}</div>
      </div>`;
  };
  posSel.addEventListener('change', updatePreview);
  updatePreview();
}

function readNurseForm(idPrefix) {
  return {
    name: document.getElementById(idPrefix + 'Name').value.trim(),
    position: document.getElementById(idPrefix + 'Pos').value,
    prefShift: document.getElementById(idPrefix + 'PrefVal').value || '',
    avoidShift: document.getElementById(idPrefix + 'AvoidVal').value || '',
    order: idPrefix === 'e' ? (+document.getElementById('eOrder').value || 1) : null
  };
}

function validateNurseForm(v, opts = {}) {
  if (!v.name) return 'กรุณากรอกชื่อ';
  if (v.name.length > 100) return 'ชื่อยาวเกินไป (ไม่เกิน 100 ตัว)';
  if (!v.position) return 'กรุณาเลือกตำแหน่ง';
  if (v.prefShift && v.avoidShift && v.prefShift === v.avoidShift) return 'เวรพึงประสงค์กับเวรเลี่ยงห้ามเป็นเวรเดียวกัน';
  if (POSITIONS[v.position]?.maxOne && !opts.skipMaxOne) {
    const exists = state.nurses.find(n => n.position === v.position && n.active !== false && n.id !== opts.excludeId);
    if (exists) return `${v.position} มีอยู่แล้ว (${exists.name})`;
  }
  return null;
}

function openAddNurse() {
  injectNurseFormStyles();
  const defaults = {
    name: '',
    position: Object.keys(POSITIONS)[0],
    prefShift: '',
    avoidShift: '',
    showOrder: false
  };
  Swal.fire({
    title: '➕ เพิ่มพยาบาลใหม่',
    html: buildNurseForm('n', defaults),
    width: 540,
    showCancelButton: true,
    confirmButtonText: '✓ เพิ่ม',
    cancelButtonText: 'ยกเลิก',
    confirmButtonColor: '#0ea5e9',
    focusConfirm: false,
    didOpen: () => wireNurseForm('n'),
    preConfirm: () => {
      const v = readNurseForm('n');
      const err = validateNurseForm(v);
      if (err) { Swal.showValidationMessage(err); return false; }
      return v;
    }
  }).then(r => {
    if (!r.isConfirmed) return;
    const newId = 'N' + String(Date.now()).slice(-6);
    state.nurses.push({
      id: newId,
      name: r.value.name,
      position: r.value.position,
      order: state.nurses.length + 1,
      active: true,
      prefShift: r.value.prefShift,
      avoidShift: r.value.avoidShift
    });
    markDirty();
    persistAll();
    window.NurseRender.renderNursesList();
    window.NurseRender.renderDashboard();
    showSuccess('เพิ่มพยาบาลแล้ว');
  });
}

function editNurse(id) {
  const n = state.nurses.find(x => x.id === id);
  if (!n) return;
  injectNurseFormStyles();
  const values = {
    name: n.name,
    position: n.position,
    prefShift: n.prefShift || '',
    avoidShift: n.avoidShift || '',
    order: n.order,
    showOrder: true
  };
  Swal.fire({
    title: '✏️ แก้ไขพยาบาล',
    html: buildNurseForm('e', values),
    width: 540,
    showCancelButton: true,
    confirmButtonText: '✓ บันทึก',
    cancelButtonText: 'ยกเลิก',
    confirmButtonColor: '#0ea5e9',
    focusConfirm: false,
    didOpen: () => wireNurseForm('e'),
    preConfirm: () => {
      const v = readNurseForm('e');
      const err = validateNurseForm(v, { excludeId: id });
      if (err) { Swal.showValidationMessage(err); return false; }
      return v;
    }
  }).then(r => {
    if (!r.isConfirmed) return;
    Object.assign(n, {
      name: r.value.name,
      position: r.value.position,
      order: r.value.order,
      prefShift: r.value.prefShift,
      avoidShift: r.value.avoidShift
    });
    markDirty();
    persistAll();
    window.NurseRender.renderNursesList();
    showSuccess('แก้ไขแล้ว');
  });
}

function deleteNurse(id) {
  const n = state.nurses.find(x => x.id === id);
  if (!n) return;
  confirmAct(`ลบ ${n.name}?`, 'จะลบรายชื่อและตารางเวรของพยาบาลคนนี้').then(r => {
    if (!r.isConfirmed) return;
    window.NurseHistory.pushHistory();
    state.nurses = state.nurses.filter(x => x.id !== id);
    for (const key of Object.keys(state.schedule)) if (key.startsWith(id + '-')) delete state.schedule[key];
    for (const key of Object.keys(state.leaves)) if (key.startsWith(id + '-')) delete state.leaves[key];
    invalidateStats();
    markDirty();
    persistAll();
    window.NurseRender.renderNursesList();
    window.NurseRender.renderDashboard();
    showSuccess('ลบแล้ว');
  });
}

function toggleNurseActive(id) {
  const n = state.nurses.find(x => x.id === id);
  if (!n) return;
  n.active = n.active === false;
  markDirty();
  persistAll();
  window.NurseRender.renderNursesList();
  window.NurseRender.renderDashboard();
}

window.NurseNurses = { openAddNurse, editNurse, deleteNurse, toggleNurseActive };
})();


/* ==================== ot.js ==================== */
// OT calculation + rendering (mode-aware).

(function() {
const { POSITIONS, DEFAULT_OT } = window.NurseConst;
const { state, daysInMonth, getShift, getLeave, computeNurseStats, isWorking } = window.NurseState;
const { readOTFromUI, showSuccess } = window.NurseUI;

// ---- Holiday Multipliers Helpers ----
function getHolidayMultiplier(position) {
  const track = POSITIONS[position]?.track || 'วิชาชีพ';
  const trackKey = track === 'วิชาชีพ' ? 'Pro' : 'Supp';
  return state.appSettings?.holidayRates?.[trackKey] ?? 1.5;
}

function isPublicHolidayDay(d) {
  if (window.NurseHolidays?.isHoliday?.(state.year, state.month, d)) return true;
  if (state.appSettings?.customHolidays?.some(ch => ch.yBE === state.year && ch.m === state.month && ch.d === d)) return true;
  return false;
}

// ---- Mode 1: standard 8-hr rotating shifts ----
function computeOTMode1() {
  const nurses = state.nurses.filter(n => n.active !== false);
  const threshold = state.otSettings.threshold;
  const rates = state.otSettings.rates;
  const rows = [];
  let totalAmount = 0, totalUnits = 0, nursesWithOT = 0;
  
  nurses.forEach(n => {
    const st = computeNurseStats(n.id);
    const units = (st['ช'] || 0) + (st['บ'] || 0) + (st['ด'] || 0)
                + 2 * (st['ชบ'] || 0) + 2 * (st['ดบ'] || 0) + 2 * (st['ชด'] || 0);
    const otUnits = Math.max(0, units - threshold);
    
    let totalWeightedValue = 0;
    const days = daysInMonth(state.year, state.month);
    
    for (let d = 1; d <= days; d++) {
      if (getLeave(n.id, d)) continue;
      const s = getShift(n.id, d);
      if (!s || !isWorking(s)) continue;
      
      const factor = ['ชบ', 'ดบ', 'ชด'].includes(s) ? 2 : 1;
      let rate = rates[s] || 0;
      if (isPublicHolidayDay(d)) {
        rate = rate * getHolidayMultiplier(n.position);
      }
      totalWeightedValue += rate; // Summing up shift rates
    }

    const avgRate = units > 0 ? (totalWeightedValue / units) : 0;
    const amount = Math.round(otUnits * avgRate);
    if (amount > 0) nursesWithOT++;

    rows.push({
      id: n.id, name: n.name, position: n.position,
      ch: st.chTotal || 0, ba: st.baTotal || 0, du: st.duTotal || 0,
      chba: st['ชบ'] || 0, duba: st['ดบ'] || 0, dn: st['ชด'] || 0,
      totalUnits: units, otUnits, amount
    });
    totalAmount += amount;
    totalUnits += otUnits;
  });
  state.otReport = rows;
  return { rows, totalAmount, totalUnits: Math.round(totalUnits), nursesWithOT };
}

// Resolve Mode 2 rate for a position: position override → track default → hardcoded default
function getMode2Rate(position, shiftCode) {
  const m2 = state.otSettings.mode2 || DEFAULT_OT.mode2;
  if (m2?.positionRates?.[position]?.[shiftCode] !== undefined)
    return m2.positionRates[position][shiftCode];
  const track = POSITIONS[position]?.track || 'วิชาชีพ';
  return m2?.trackRates?.[track]?.[shiftCode] ?? (shiftCode === 'เย็น' ? 200 : 800);
}

// ---- Mode 2: office-style — count เย็น (evening OT) and OT (weekend OT) ----
function computeOTMode2() {
  const nurses = state.nurses.filter(n => n.active !== false);
  const days = daysInMonth(state.year, state.month);
  const rows = [];
  let totalAmount = 0, nursesWithOT = 0;
  
  nurses.forEach(n => {
    let eveningCount = 0, otCount = 0;
    let amount = 0;

    for (let d = 1; d <= days; d++) {
      if (getLeave(n.id, d)) continue;
      const s = getShift(n.id, d);
      if (s === 'เย็น') {
        eveningCount++;
        amount += getMode2Rate(n.position, 'เย็น');
      } else if (s === 'OT') {
        otCount++;
        amount += getMode2Rate(n.position, 'OT');
      }
    }
    
    amount = Math.round(amount);
    if (amount > 0) nursesWithOT++;
    
    rows.push({
      id: n.id, name: n.name, position: n.position,
      eveningCount, otCount, eveningRate: getMode2Rate(n.position, 'เย็น'), otRate: getMode2Rate(n.position, 'OT'),
      totalUnits: eveningCount + otCount,
      amount
    });
    totalAmount += amount;
  });
  state.otReport = rows;
  const totalUnits = rows.reduce((s, r) => s + r.totalUnits, 0);
  return { rows, totalAmount, totalUnits, nursesWithOT };
}

// ---- Mode 3: 12-hr shifts — D12/N12 vs threshold ----
function computeOTMode3() {
  const nurses = state.nurses.filter(n => n.active !== false);
  const threshold = state.otSettings.threshold;
  const rates = state.otSettings.rates;
  const rows = [];
  let totalAmount = 0, totalUnits = 0, nursesWithOT = 0;
  
  nurses.forEach(n => {
    const st = computeNurseStats(n.id);
    const d12 = st['D12'] || 0;
    const n12 = st['N12'] || 0;
    const units = d12 + n12;
    const otUnits = Math.max(0, units - threshold);
    
    let totalWeightedValue = 0;
    const days = daysInMonth(state.year, state.month);
    
    for (let d = 1; d <= days; d++) {
      if (getLeave(n.id, d)) continue;
      const s = getShift(n.id, d);
      if (!s || !isWorking(s)) continue;
      
      let rate = rates[s] || 0;
      if (isPublicHolidayDay(d)) {
        rate = rate * getHolidayMultiplier(n.position);
      }
      totalWeightedValue += rate;
    }

    const avgRate = units > 0 ? (totalWeightedValue / units) : 0;
    const amount = Math.round(otUnits * avgRate);
    if (amount > 0) nursesWithOT++;

    rows.push({
      id: n.id, name: n.name, position: n.position,
      d12, n12, totalUnits: units, otUnits, amount
    });
    totalAmount += amount;
    totalUnits += otUnits;
  });
  state.otReport = rows;
  return { rows, totalAmount, totalUnits: Math.round(totalUnits), nursesWithOT };
}

function computeOT() {
  readOTFromUI();
  const mode = state.appSettings?.shiftMode || 1;
  if (mode === 2) return computeOTMode2();
  if (mode === 3) return computeOTMode3();
  return computeOTMode1();
}

// ---- Render helpers ----
function summaryCards(ot) {
  return `
    <div class="stat-card card-cyan">
      <div class="flex items-start justify-between relative z-10"><div class="stat-icon-box"><i data-lucide="users"></i></div></div>
      <div class="relative z-10"><div class="stat-value">${ot.nursesWithOT}</div><div class="stat-label">พยาบาลได้ OT</div></div>
    </div>
    <div class="stat-card card-amber">
      <div class="flex items-start justify-between relative z-10"><div class="stat-icon-box"><i data-lucide="clock"></i></div></div>
      <div class="relative z-10"><div class="stat-value">${ot.totalUnits}</div><div class="stat-label">หน่วย OT รวม</div></div>
    </div>
    <div class="stat-card card-pink">
      <div class="flex items-start justify-between relative z-10"><div class="stat-icon-box"><i data-lucide="banknote"></i></div></div>
      <div class="relative z-10"><div class="stat-value">${ot.totalAmount.toLocaleString()}</div><div class="stat-label">บาท · OT รวม</div></div>
    </div>`;
}

function renderOTTableMode1(ot, esc) {
  const tbl = document.getElementById('otTable');
  let html = '<thead><tr>';
  ['ที่','ชื่อ-นามสกุล','ตำแหน่ง','ช (รวม)','บ (รวม)','ด (รวม)','ชบ','ดบ','ชด','รวมหน่วย','OT (หน่วย)','จำนวนเงิน'].forEach(h => html += `<th>${h}</th>`);
  html += '</tr></thead><tbody>';
  ot.rows.forEach((r, i) => {
    const cls = POSITIONS[r.position]?.cls || 'pos-rn';
    html += `<tr>
      <td>${i + 1}</td>
      <td class="text-left">${esc(r.name)}</td>
      <td><span class="pos-badge ${cls}">${esc(r.position)}</span></td>
      <td>${r.ch || ''}</td><td>${r.ba || ''}</td><td>${r.du || ''}</td>
      <td>${r.chba || ''}</td><td>${r.duba || ''}</td><td>${r.dn || ''}</td>
      <td class="font-semibold">${r.totalUnits}</td>
      <td class="font-bold ${r.otUnits > 0 ? 'text-orange-600' : 'text-slate-400'}">${r.otUnits > 0 ? Math.round(r.otUnits) : '-'}</td>
      <td class="font-bold ${r.amount > 0 ? 'text-emerald-700' : 'text-slate-400'}">${r.amount > 0 ? r.amount.toLocaleString() + ' ฿' : '-'}</td>
    </tr>`;
  });
  html += `</tbody><tfoot><tr>
    <td colspan="9" class="text-right">รวมทั้งหมด:</td>
    <td>${ot.totalUnits}</td>
    <td colspan="2" class="text-emerald-800">${ot.totalAmount.toLocaleString()} ฿</td>
  </tr></tfoot>`;
  tbl.innerHTML = html;
}

function renderOTTableMode2(ot, esc) {
  const tbl = document.getElementById('otTable');
  let html = '<thead><tr>';
  ['ที่','ชื่อ-นามสกุล','ตำแหน่ง','เวรเย็น','OT วันหยุด','รวมครั้ง','จำนวนเงิน'].forEach(h => html += `<th>${h}</th>`);
  html += '</tr></thead><tbody>';
  ot.rows.forEach((r, i) => {
    const cls = POSITIONS[r.position]?.cls || 'pos-rn';
    html += `<tr>
      <td>${i + 1}</td>
      <td class="text-left">${esc(r.name)}</td>
      <td><span class="pos-badge ${cls}">${esc(r.position)}</span></td>
      <td>${r.eveningCount || '-'}</td>
      <td>${r.otCount || '-'}</td>
      <td class="font-semibold">${r.totalUnits}</td>
      <td class="font-bold ${r.amount > 0 ? 'text-emerald-700' : 'text-slate-400'}">${r.amount > 0 ? r.amount.toLocaleString() + ' ฿' : '-'}</td>
    </tr>`;
  });
  html += `</tbody><tfoot><tr>
    <td colspan="5" class="text-right">รวมทั้งหมด:</td>
    <td>${ot.totalUnits}</td>
    <td class="text-emerald-800">${ot.totalAmount.toLocaleString()} ฿</td>
  </tr></tfoot>`;
  tbl.innerHTML = html;
}

function renderOTTableMode3(ot, esc) {
  const tbl = document.getElementById('otTable');
  let html = '<thead><tr>';
  ['ที่','ชื่อ-นามสกุล','ตำแหน่ง','D12','N12','รวมหน่วย','OT (หน่วย)','จำนวนเงิน'].forEach(h => html += `<th>${h}</th>`);
  html += '</tr></thead><tbody>';
  ot.rows.forEach((r, i) => {
    const cls = POSITIONS[r.position]?.cls || 'pos-rn';
    html += `<tr>
      <td>${i + 1}</td>
      <td class="text-left">${esc(r.name)}</td>
      <td><span class="pos-badge ${cls}">${esc(r.position)}</span></td>
      <td>${r.d12 || ''}</td><td>${r.n12 || ''}</td>
      <td class="font-semibold">${r.totalUnits}</td>
      <td class="font-bold ${r.otUnits > 0 ? 'text-orange-600' : 'text-slate-400'}">${r.otUnits > 0 ? Math.round(r.otUnits) : '-'}</td>
      <td class="font-bold ${r.amount > 0 ? 'text-emerald-700' : 'text-slate-400'}">${r.amount > 0 ? r.amount.toLocaleString() + ' ฿' : '-'}</td>
    </tr>`;
  });
  html += `</tbody><tfoot><tr>
    <td colspan="6" class="text-right">รวมทั้งหมด:</td>
    <td>${ot.totalUnits}</td>
    <td class="text-emerald-800">${ot.totalAmount.toLocaleString()} ฿</td>
  </tr></tfoot>`;
  tbl.innerHTML = html;
}

function renderOT() {
  try {
    const ot = computeOT();
    const esc = window.NurseRender.esc;
    document.getElementById('otSummaryCards').innerHTML = summaryCards(ot);
    const mode = state.appSettings?.shiftMode || 1;
    if (mode === 2) renderOTTableMode2(ot, esc);
    else if (mode === 3) renderOTTableMode3(ot, esc);
    else renderOTTableMode1(ot, esc);
    if (window.lucide) window.lucide.createIcons();
  } catch(e) {
    console.error(e);
    alert('Error in renderOT: ' + e.message);
  }
}

function saveOTSettings() {
  readOTFromUI();
  window.NurseState.persistAll();
  renderOT();
  showSuccess('บันทึกการตั้งค่า OT แล้ว');
}

window.NurseOT = { computeOT, renderOT, saveOTSettings };
})();


/* ==================== export.js ==================== */
// Export to Excel and PDF. PDF uses html2canvas → jsPDF.addImage so Thai
// fonts render correctly via the browser. A module-level lock prevents
// double-click from spawning two concurrent canvases.

(function() {
const { THAI_MONTHS, SHIFT_TYPES } = window.NurseConst;
const { state, daysInMonth, getShift, getLeave, dayLabel, computeNurseStats, isWeekend } = window.NurseState;
const { showLoading, showSuccess, showError, switchTab } = window.NurseUI;
const esc = s => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

let exportInProgress = false;

function shiftDef(code) {
  const base = SHIFT_TYPES[code];
  if (base) return base;
  const custom = (state.appSettings?.customShifts || []).find(s => s.code === code);
  if (custom) return { bg: custom.bg || '#f3f4f6', fg: custom.fg || '#000000', name: custom.name || custom.code };
  return { bg: '#f3f4f6', fg: '#000000', name: code };
}

function exportSchedule(format) {
  if (format === 'xlsx') exportScheduleExcel();
  else if (format === 'pdf') exportSchedulePDF();
}

function exportScheduleExcel() {
  try {
    const days = daysInMonth(state.year, state.month);
    const nurses = state.nurses.filter(n => n.active !== false).sort((a, b) => (a.order || 999) - (b.order || 999));
    const aoa = [];

    aoa.push([`ตารางการปฏิบัติงาน ${state.appSettings?.orgName || 'วิทยาลัยพยาบาลศรีมหาสารคาม'}`]);
    aoa.push([`ประจำเดือน ${THAI_MONTHS[state.month - 1]} พ.ศ. ${state.year}`]);
    const req = state.requirements;
    aoa.push([`อัตรากำลัง: วันธรรมดา ช=${req.weekday.ch} บ=${req.weekday.ba} ด=${req.weekday.du} | วันหยุด ช=${req.weekend.ch} บ=${req.weekend.ba} ด=${req.weekend.du}`]);
    aoa.push([]);

    const head1 = ['ที่', 'ชื่อ-นามสกุล', 'ตำแหน่ง'];
    for (let d = 1; d <= days; d++) head1.push(d);
    ['ช', 'บ', 'ด', 'ชบ', 'ดบ', 'ชด', 'O', 'V', 'T', 'รวม'].forEach(s => head1.push(s));
    aoa.push(head1);
    const head2 = ['', '', ''];
    for (let d = 1; d <= days; d++) head2.push(dayLabel(state.year, state.month, d));
    ['ช', 'บ', 'ด', 'ชบ', 'ดบ', 'ชด', 'O', 'V', 'T', 'รวม'].forEach(() => head2.push(''));
    aoa.push(head2);

    nurses.forEach((n, i) => {
      const row = [i + 1, n.name, n.position];
      for (let d = 1; d <= days; d++) {
        row.push(getShift(n.id, d) || getLeave(n.id, d) || '');
      }
      const st = computeNurseStats(n.id);
      row.push(st.chTotal || '', st.baTotal || '', st.duTotal || '',
               st['ชบ'] || '', st['ดบ'] || '', st['ชด'] || '',
               st['O'] || '', st['V'] || '', st['T'] || '');
      row.push(st.total);
      aoa.push(row);
    });

    aoa.push([]);
    const sig = state.appSettings?.signers || {};
    aoa.push(['', '', '', '', `ผู้จัดเวร: ${sig.scheduler || '........................'}`, '', '', '', '', `หัวหน้าหอผู้ป่วย: ${sig.headNurse || '........................'}`, '', '', '', '', `ผู้อำนวยการ: ${sig.director || '........................'}`]);

    const ws = XLSX.utils.aoa_to_sheet(aoa);
    const totalCols = 3 + days + 10;
    ws['!merges'] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: totalCols - 1 } },
      { s: { r: 1, c: 0 }, e: { r: 1, c: totalCols - 1 } },
      { s: { r: 2, c: 0 }, e: { r: 2, c: totalCols - 1 } }
    ];
    const cols = [{ wch: 5 }, { wch: 28 }, { wch: 18 }];
    for (let d = 1; d <= days; d++) cols.push({ wch: 4 });
    for (let i = 0; i < 10; i++) cols.push({ wch: 5 });
    ws['!cols'] = cols;
    ws['!freeze'] = { xSplit: 3, ySplit: 5 };

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'ตารางเวร');
    XLSX.writeFile(wb, `ตารางเวร_${THAI_MONTHS[state.month - 1]}_${state.year}.xlsx`);
    showSuccess('ดาวน์โหลด Excel แล้ว');
  } catch (e) {
    console.error('Excel export failed:', e);
    showError('ส่งออก Excel ไม่สำเร็จ กรุณาลองใหม่อีกครั้ง');
  }
}

async function exportSchedulePDF() {
  if (exportInProgress) return;
  exportInProgress = true;
  showLoading('กำลังสร้าง PDF ทางการ...');
  await new Promise(r => setTimeout(r, 80));
  try {
    const { jsPDF } = window.jspdf;
    const days = daysInMonth(state.year, state.month);
    const orgName = state.appSettings?.orgName || 'วิทยาลัยพยาบาลศรีมหาสารคาม';
    const monthName = THAI_MONTHS[state.month - 1];
    const yearName = state.year;
    const sig = state.appSettings?.signers || {};

    // Get active shift options based on active mode
    const mode = state.appSettings?.shiftMode || 1;
    const modeStatCols = {
      1: ['ช', 'บ', 'ด', 'ชบ', 'ดบ', 'ชด', 'O', 'V', 'T', 'รวม'],
      2: ['ช', 'เย็น', 'OT', 'O', 'V', 'T', 'รวม'],
      3: ['D12', 'N12', 'O', 'V', 'T', 'รวม']
    };
    const statCols = modeStatCols[mode] || modeStatCols[1];

    // Create a temporary beautiful off-screen document for PDF render
    const printArea = document.createElement('div');
    printArea.style.position = 'absolute';
    printArea.style.left = '-9999px';
    printArea.style.top = '-9999px';
    printArea.style.width = '1480px';
    printArea.style.backgroundColor = '#ffffff';
    printArea.style.padding = '45px 50px';
    printArea.style.fontFamily = "'Sarabun', 'TH Sarabun PSK', 'Noto Sans Thai', 'Helvetica Neue', Arial, sans-serif";
    printArea.style.boxSizing = 'border-box';

    let html = `
      <!-- Centered Official Header -->
      <div style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-bottom: 20px;">
        <!-- Stylized elegant official administrative crest representation -->
        <svg viewBox="0 0 64 64" style="width: 55px; height: 55px; fill: #111827; margin-bottom: 10px;">
          <path d="M32 2C15.43 2 2 15.43 2 32c0 16.57 13.43 30 30 30 16.57 0 30-13.43 30-30C62 15.43 48.57 2 32 2zm0 8c12.15 0 22 9.85 22 22 0 12.15-9.85 22-22 22-12.15 0-22-9.85-22-22 0-12.15 9.85-22 22-22z" fill="#1e293b"/>
          <path d="M32 18c-7.73 0-14 6.27-14 14s6.27 14 14 14 14-6.27 14-14-6.27-14-14-14zm0 6a8 8 0 1 1 0 16 8 8 0 0 1 0-16z" fill="#475569"/>
          <circle cx="32" cy="32" r="4" fill="#0f172a"/>
        </svg>
        <h1 style="font-size: 20px; font-weight: 700; color: #111827; margin: 0; line-height: 1.4; font-family: inherit;">ตารางปฏิบัติงานของบุคลากรทางการพยาบาล</h1>
        <h2 style="font-size: 16px; font-weight: 600; color: #374151; margin: 4px 0 0 0; font-family: inherit;">กลุ่มงานพยาบาล ${esc(orgName)}</h2>
        <p style="font-size: 14px; color: #4b5563; margin: 4px 0 0 0; font-family: inherit;">ประจำเดือน ${monthName} พ.ศ. ${yearName}</p>
      </div>

      <!-- Official Metadata Split Table -->
      <table style="width: 100%; border: none; margin-bottom: 12px; font-size: 12px; font-family: inherit; border-collapse: collapse;">
        <tr style="border: none;">
          <td style="border: none; padding: 2px 0; text-align: left; width: 50%; font-weight: 600;">
            ส่วนราชการ/หน่วยงาน: <span style="font-weight: 500;">กลุ่มงานพยาบาล / ฝ่ายการพยาบาล</span>
          </td>
          <td style="border: none; padding: 2px 0; text-align: right; width: 50%; font-weight: 600;">
            จำนวนบุคลากรในปฏิบัติงาน: <span style="font-weight: 500;">${state.nurses.filter(n => n.active !== false).length} คน</span>
          </td>
        </tr>
      </table>

      <!-- Grid Table -->
      <table style="width: 100%; border-collapse: collapse; font-size: 11px; border: 1.5px solid #000000; font-family: inherit;">
        <thead>
          <tr style="background-color: #f3f4f6; border-bottom: 1.5px solid #000000;">
            <th style="border: 0.5px solid #000000; padding: 8px 4px; text-align: center; font-weight: 700; width: 35px;" rowspan="2">ที่</th>
            <th style="border: 0.5px solid #000000; padding: 8px 6px; text-align: left; font-weight: 700; min-width: 160px;" rowspan="2">ชื่อ-นามสกุล</th>
            <th style="border: 0.5px solid #000000; padding: 8px 4px; text-align: center; font-weight: 700; min-width: 90px;" rowspan="2">ตำแหน่ง</th>
            <th style="border: 0.5px solid #000000; padding: 5px; text-align: center; font-weight: 700;" colspan="${days}">วันที่</th>
            <th style="border: 0.5px solid #000000; padding: 5px; text-align: center; font-weight: 700;" colspan="${statCols.length}">สรุปเวร</th>
          </tr>
          <tr style="background-color: #f9fafb; border-bottom: 1.5px solid #000000;">
    `;

    // Days subheaders
    for (let d = 1; d <= days; d++) {
      const isWe = isWeekend(yearName, state.month, d);
      const bg = isWe ? 'background-color: #e5e7eb;' : '';
      html += `<th style="border: 0.5px solid #000000; padding: 5px 2px; text-align: center; font-size: 9.5px; font-weight: 700; ${bg}">${d}</th>`;
    }

    // Stats subheaders
    statCols.forEach(c => {
      html += `<th style="border: 0.5px solid #000000; padding: 5px 2px; text-align: center; font-size: 9.5px; font-weight: 700; background-color: #e5e7eb;">${c}</th>`;
    });
    html += `</tr></thead><tbody>`;

    // Nurses rows
    const nurses = state.nurses.filter(n => n.active !== false).sort((a, b) => (a.order || 999) - (b.order || 999));
    nurses.forEach((n, idx) => {
      html += `<tr style="border-bottom: 0.5px solid #000000;">`;
      html += `<td style="border: 0.5px solid #000000; padding: 6px 4px; text-align: center; font-weight: 500;">${idx + 1}</td>`;
      html += `<td style="border: 0.5px solid #000000; padding: 6px 8px; text-align: left; font-weight: 700; white-space: nowrap;">${esc(n.name)}</td>`;
      html += `<td style="border: 0.5px solid #000000; padding: 6px 4px; text-align: center; font-size: 10px; color: #1f2937;">${esc(n.position)}</td>`;
      
      for (let d = 1; d <= days; d++) {
        const shift = getShift(n.id, d);
        const leave = getLeave(n.id, d);
        const code = leave || shift || '';
        const isWe = isWeekend(yearName, state.month, d);
        
        let style = 'border: 0.5px solid #000000; padding: 5px 2px; text-align: center; font-weight: 700; font-size: 11px;';
        if (code) {
          const typeDef = shiftDef(code);
          // Clean pastel colors with dark text for clear printing
          const bg = typeDef.bg || '#f3f4f6';
          const fg = typeDef.fg || '#000000';
          style += `background-color: ${bg}; color: ${fg};`;
        } else if (isWe) {
          style += 'background-color: #e5e7eb;';
        }
        
        html += `<td style="${style}">${code}</td>`;
      }
      
      // Calculate and insert stats
      const st = computeNurseStats(n.id);
      statCols.forEach(c => {
        let val = '';
        if (c === 'รวม') val = st.total;
        else if (c === 'ช') val = st.chTotal;
        else if (c === 'บ') val = st.baTotal;
        else if (c === 'ด') val = st.duTotal;
        else val = st[c] || '';
        
        html += `<td style="border: 0.5px solid #000000; padding: 5px 2px; text-align: center; font-weight: 700; color: #000000; background-color: #f9fafb;">${val || ''}</td>`;
      });
      
      html += `</tr>`;
    });

    html += `</tbody></table>`;

    // Official Government Signature Layout
    html += `
      <table style="width: 100%; margin-top: 45px; border: none; font-size: 13px; font-family: inherit; border-collapse: collapse;">
        <tr style="border: none;">
          <td style="width: 33%; text-align: center; border: none; padding: 10px; vertical-align: top; font-family: inherit;">
            <p style="margin: 0 0 50px 0;">เสนอเพื่อทราบและพิจารณาอนุมัติ</p>
            <p style="margin: 0 0 8px 0;">ลงชื่อ ............................................................ ผู้จัดทำ</p>
            <p style="margin: 0 0 4px 0; font-weight: 700;">( ${esc(sig.scheduler || '............................................................')} )</p>
            <p style="margin: 0; color: #4b5563; font-size: 11px;">ตำแหน่ง ............................................................</p>
            <p style="margin: 6px 0 0 0; font-size: 11px; color: #6b7280;">วันที่ ......../......................../................</p>
          </td>
          <td style="width: 33%; text-align: center; border: none; padding: 10px; vertical-align: top; font-family: inherit;">
            <p style="margin: 0 0 50px 0;">ได้ตรวจสอบความถูกต้องเรียบร้อยแล้ว</p>
            <p style="margin: 0 0 8px 0;">ลงชื่อ ............................................................ ผู้ตรวจสอบ</p>
            <p style="margin: 0 0 4px 0; font-weight: 700;">( ${esc(sig.headNurse || '............................................................')} )</p>
            <p style="margin: 0; color: #4b5563; font-size: 11px;">ตำแหน่ง หัวหน้าหอผู้ป่วย</p>
            <p style="margin: 6px 0 0 0; font-size: 11px; color: #6b7280;">วันที่ ......../......................../................</p>
          </td>
          <td style="width: 33%; text-align: center; border: none; padding: 10px; vertical-align: top; font-family: inherit;">
            <p style="margin: 0 0 50px 0;">อนุมัติตามเสนอ</p>
            <p style="margin: 0 0 8px 0;">ลงชื่อ ............................................................ ผู้อนุมัติ</p>
            <p style="margin: 0 0 4px 0; font-weight: 700;">( ${esc(sig.director || '............................................................')} )</p>
            <p style="margin: 0; color: #4b5563; font-size: 11px;">ตำแหน่ง ผู้อำนวยการ</p>
            <p style="margin: 6px 0 0 0; font-size: 11px; color: #6b7280;">วันที่ ......../......................../................</p>
          </td>
        </tr>
      </table>
    `;

    printArea.innerHTML = html;
    document.body.appendChild(printArea);

    // Create high-res canvas from clean template
    const canvas = await html2canvas(printArea, { scale: 2.2, backgroundColor: '#ffffff', useCORS: true });
    document.body.removeChild(printArea);

    const imgData = canvas.toDataURL('image/png');
    
    // Page dimensions for A4 Landscape
    const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();

    // Use safe margins of 7mm (gives 283mm x 196mm printable area)
    const margin = 7;
    const maxW = pageW - (margin * 2);
    const maxH = pageH - (margin * 2);

    let finalW = maxW;
    let finalH = (canvas.height / canvas.width) * finalW;

    // Scale down proportionally if height exceeds A4 bounds to guarantee single-sheet A4
    if (finalH > maxH) {
      finalH = maxH;
      finalW = (canvas.width / canvas.height) * finalH;
    }

    // Centering offsets
    const xOffset = margin + (maxW - finalW) / 2;
    const yOffset = margin + (maxH - finalH) / 2;

    pdf.addImage(imgData, 'PNG', xOffset, yOffset, finalW, finalH);
    pdf.save(`ตารางเวรทางการ_${monthName}_${yearName}.pdf`);
    
    Swal.close();
    showSuccess('ดาวน์โหลด PDF ทางราชการแล้ว');
  } catch (e) {
    console.error('PDF export failed:', e);
    Swal.close();
    showError('สร้าง PDF ไม่สำเร็จ กรุณาลองใหม่อีกครั้ง');
  } finally {
    exportInProgress = false;
  }
}

function exportOT(format) {
  if (format === 'xlsx') exportOTExcel();
  else exportOTPDF();
}

function exportOTExcel() {
  try {
    const ot = window.NurseOT.computeOT();
    const mode = state.appSettings?.shiftMode || 1;
    const org = state.appSettings?.orgName || 'วิทยาลัยพยาบาลศรีมหาสารคาม';
    const aoa = [];
    aoa.push([`รายงานการคำนวณ OT — ${THAI_MONTHS[state.month - 1]} ${state.year}`]);
    aoa.push([`${org} | เกณฑ์ภาระงานปกติ: ${state.otSettings.threshold} เวร/เดือน`]);
    aoa.push([]);

    let headers, rowFn, footerCols, totalCols;
    if (mode === 2) {
      headers = ['ที่','ชื่อ-นามสกุล','ตำแหน่ง','เวรเย็น','OT วันหยุด','รวมครั้ง','จำนวนเงิน (บาท)'];
      rowFn = (r, i) => [i+1, r.name, r.position, r.eveningCount||'', r.otCount||'', r.totalUnits, r.amount||''];
      footerCols = ['','','','','รวม:', ot.totalUnits, ot.totalAmount];
      totalCols = 7;
    } else if (mode === 3) {
      headers = ['ที่','ชื่อ-นามสกุล','ตำแหน่ง','D12','N12','รวมหน่วย','OT (หน่วย)','จำนวนเงิน (บาท)'];
      rowFn = (r, i) => [i+1, r.name, r.position, r.d12||'', r.n12||'', r.totalUnits, r.otUnits>0?Math.round(r.otUnits):'', r.amount||''];
      footerCols = ['','','','','','รวม:', ot.totalUnits, ot.totalAmount];
      totalCols = 8;
    } else {
      headers = ['ที่','ชื่อ-นามสกุล','ตำแหน่ง','ช (รวม)','บ (รวม)','ด (รวม)','ชบ','ดบ','ชด','รวมหน่วย','OT (หน่วย)','จำนวนเงิน (บาท)'];
      rowFn = (r, i) => [i+1, r.name, r.position, r.ch||'', r.ba||'', r.du||'', r.chba||'', r.duba||'', r.dn||'', r.totalUnits, r.otUnits>0?Math.round(r.otUnits):'', r.amount||''];
      footerCols = ['','','','','','','','','รวม:', ot.totalUnits, '', ot.totalAmount];
      totalCols = 12;
    }
    aoa.push(headers);
    ot.rows.forEach((r, i) => aoa.push(rowFn(r, i)));
    aoa.push(footerCols);

    const ws = XLSX.utils.aoa_to_sheet(aoa);
    ws['!merges'] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: totalCols - 1 } },
      { s: { r: 1, c: 0 }, e: { r: 1, c: totalCols - 1 } }
    ];
    ws['!cols'] = [{ wch: 5 }, { wch: 28 }, { wch: 18 }, ...Array(totalCols - 3).fill({ wch: 10 })];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'OT Report');
    XLSX.writeFile(wb, `OT_Report_${THAI_MONTHS[state.month - 1]}_${state.year}.xlsx`);
    showSuccess('ดาวน์โหลด OT Excel แล้ว');
  } catch (e) {
    console.error('OT Excel export failed:', e);
    showError('ส่งออก OT Excel ไม่สำเร็จ กรุณาลองใหม่อีกครั้ง');
  }
}

async function exportOTPDF() {
  if (exportInProgress) return;
  exportInProgress = true;
  showLoading('กำลังสร้าง PDF...');
  await new Promise(r => setTimeout(r, 80));
  try {
    const { jsPDF } = window.jspdf;
    const el = document.getElementById('tab-ot');
    const canvas = await html2canvas(el, { scale: 2, backgroundColor: '#f1f5f9', useCORS: true });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();
    const imgW = pageW - 16;
    const imgH = (canvas.height / canvas.width) * imgW;

    let heightLeft = imgH;
    let position = 8;
    pdf.addImage(imgData, 'PNG', 8, position, imgW, imgH);
    heightLeft -= (pageH - 16);
    while (heightLeft > 0) {
      pdf.addPage();
      position = -(imgH - heightLeft) + 8;
      pdf.addImage(imgData, 'PNG', 8, position, imgW, imgH);
      heightLeft -= (pageH - 16);
    }
    pdf.save(`OT_Report_${THAI_MONTHS[state.month - 1]}_${state.year}.pdf`);
    Swal.close();
    showSuccess('ดาวน์โหลด OT PDF แล้ว');
  } catch (e) {
    console.error('OT PDF export failed:', e);
    Swal.close();
    showError('สร้าง PDF ไม่สำเร็จ กรุณาลองใหม่อีกครั้ง');
  } finally {
    exportInProgress = false;
  }
}

window.NurseExport = { exportSchedule, exportOT };
})();


/* ==================== print-hub.js (v2) ==================== */
/* ศูนย์การพิมพ์ใหม่: WYSIWYG preview + 8 document types + multi-format export */
(function () {
  const { THAI_MONTHS, SHIFT_TYPES } = window.NurseConst;
  const state = window.NurseState.state;

  // Helpers (re-resolved at call time to avoid load-order issues)
  const helpers = () => ({
    getShift: window.NurseState.getShift,
    getLeave: window.NurseState.getLeave,
    daysInMonth: window.NurseState.daysInMonth,
    dayLabel: window.NurseState.dayLabel,
    isWeekend: window.NurseState.isWeekend,
    isHoliday: window.NurseHolidays?.isHoliday || (() => false),
    holidayName: window.NurseHolidays?.getHolidayName || (() => ''),
    computeNurseStats: window.NurseState.computeNurseStats,
    shiftDef: shiftDefLocal,
    esc: escLocal,
    showSuccess: window.NurseUI?.showSuccess || (msg => Swal.fire({icon:'success',title:msg,timer:1500,showConfirmButton:false})),
    showError: window.NurseUI?.showError || (msg => Swal.fire({icon:'error',title:msg})),
    showLoading: window.NurseUI?.showLoading || (msg => Swal.fire({title:msg,didOpen:()=>Swal.showLoading(),allowOutsideClick:false})),
  });

  function escLocal(s) {
    if (s == null) return '';
    return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }
  function shiftDefLocal(code) {
    if (!code) return { bg: '#fff', fg: '#000', name: '' };
    const base = SHIFT_TYPES[code];
    if (base) return base;
    const custom = (state.appSettings?.customShifts || []).find(s => s.code === code);
    if (custom) return { bg: custom.bg || '#f3f4f6', fg: custom.fg || '#000', name: custom.name || code };
    // Leave codes
    if (code === 'V') return { bg: '#ddd6fe', fg: '#5b21b6', name: 'ลา' };
    if (code === 'T') return { bg: '#fecaca', fg: '#991b1b', name: 'ลาป่วย' };
    if (code === 'O') return { bg: '#cffafe', fg: '#155e75', name: 'หยุด' };
    return { bg: '#f3f4f6', fg: '#000', name: code };
  }
  function yearAD(y) {
    return y > 2500 ? y - 543 : y;
  }

  // Garuda emblem (simplified public-domain stylized Garuda crest, monochrome)
  const GARUDA_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="ph-garuda">
    <g fill="#1e293b" stroke="#1e293b" stroke-width="0.5">
      <ellipse cx="50" cy="20" rx="6" ry="8"/>
      <circle cx="48" cy="18" r="1" fill="#fff"/>
      <circle cx="52" cy="18" r="1" fill="#fff"/>
      <path d="M44 25 Q40 30 38 38 L42 36 Z"/>
      <path d="M56 25 Q60 30 62 38 L58 36 Z"/>
      <path d="M30 35 Q20 45 18 60 Q25 55 35 50 Q32 42 30 35 Z"/>
      <path d="M70 35 Q80 45 82 60 Q75 55 65 50 Q68 42 70 35 Z"/>
      <path d="M35 50 Q30 60 28 72 Q35 65 42 60 Q38 55 35 50 Z"/>
      <path d="M65 50 Q70 60 72 72 Q65 65 58 60 Q62 55 65 50 Z"/>
      <path d="M44 28 Q40 45 42 65 L50 70 L58 65 Q60 45 56 28 Z"/>
      <path d="M50 35 L48 70 L50 80 L52 70 Z" fill="#475569"/>
      <path d="M42 70 L38 85 L44 80 L50 82 L56 80 L62 85 L58 70 Z"/>
      <path d="M44 78 L42 92 L50 88 L58 92 L56 78 Z"/>
    </g>
    <text x="50" y="98" text-anchor="middle" font-size="6" fill="#475569" font-weight="bold">ตราครุฑ</text>
  </svg>`;

  // ========================================================
  // Module state
  // ========================================================
  const hub = {
    activeDoc: 'master',
    zoom: 1,
    filter: {
      range: 'month',
      dayFrom: 1,
      dayTo: 31,
      nurseIds: null,           // null = all
      position: 'all',
      paper: 'A4',
      orient: 'landscape',
      incLogo: true,
      incGaruda: false,
      incSigs: true,
      incStats: true,
      incColors: true,
      incInactive: false,
    },
    telegram: {
      theme: 'clinical-dark',
      mode: 'individual',
      caption: '',          // user override; empty = auto from template
      sendImage: true,
    },
    initialized: false,
  };

  // ========================================================
  // Init
  // ========================================================
  function init() {
    if (hub.initialized) return;
    hub.initialized = true;

    // Bind filter inputs
    const $ = (id) => document.getElementById(id);
    $('phRange')?.addEventListener('change', e => {
      hub.filter.range = e.target.value;
      $('phCustomRangeWrap')?.classList.toggle('hidden', e.target.value !== 'custom');
      refreshPreview();
    });
    $('phDayFrom')?.addEventListener('input', e => { hub.filter.dayFrom = +e.target.value || 1; debouncedRefresh(); });
    $('phDayTo')?.addEventListener('input', e => { hub.filter.dayTo = +e.target.value || 31; debouncedRefresh(); });
    $('phPosition')?.addEventListener('change', e => { hub.filter.position = e.target.value; refreshPreview(); });
    $('phPaper')?.addEventListener('change', e => { hub.filter.paper = e.target.value; refreshPreview(); });
    $('phOrient')?.addEventListener('change', e => { hub.filter.orient = e.target.value; refreshPreview(); });
    ['phIncLogo','phIncGaruda','phIncSigs','phIncStats','phIncColors','phIncInactive'].forEach(id => {
      const k = id.replace('ph','').replace('Inc','inc').replace(/^./, c => 'inc' + c.slice(2));
      // simpler: map by id
    });
    const opts = {
      phIncLogo: 'incLogo', phIncGaruda: 'incGaruda', phIncSigs: 'incSigs',
      phIncStats: 'incStats', phIncColors: 'incColors', phIncInactive: 'incInactive'
    };
    Object.entries(opts).forEach(([id, key]) => {
      $(id)?.addEventListener('change', e => { hub.filter[key] = e.target.checked; refreshPreview(); });
    });

    // Doc tabs
    document.querySelectorAll('#printHub .ph-doctab').forEach(btn => {
      btn.addEventListener('click', () => {
        const doc = btn.dataset.doc;
        hub.activeDoc = doc;
        document.querySelectorAll('#printHub .ph-doctab').forEach(b => b.classList.toggle('active', b === btn));
        renderDocOptions();
        refreshPreview();
      });
    });

    populatePositionFilter();
    renderDocOptions();
    refreshPreview();
  }

  function onActivate() {
    init();
    populatePositionFilter();
    refreshPreview();
  }

  // Debounce
  let _t = null;
  function debouncedRefresh() {
    clearTimeout(_t);
    _t = setTimeout(refreshPreview, 250);
  }

  // ========================================================
  // Data helpers
  // ========================================================
  function getFilteredNurses() {
    const f = hub.filter;
    let list = state.nurses.slice();
    if (!f.incInactive) list = list.filter(n => n.active !== false);
    if (f.position !== 'all') list = list.filter(n => n.position === f.position);
    if (f.nurseIds && f.nurseIds.length) list = list.filter(n => f.nurseIds.includes(n.id));
    return list.sort((a, b) => (a.order || 999) - (b.order || 999));
  }

  function getFilteredDays() {
    const { daysInMonth } = helpers();
    const maxDay = daysInMonth(state.year, state.month);
    let from = 1, to = maxDay;
    const r = hub.filter.range;
    if (r === 'month') { from = 1; to = maxDay; }
    else if (r === 'w1') { from = 1; to = Math.min(7, maxDay); }
    else if (r === 'w2') { from = 8; to = Math.min(14, maxDay); }
    else if (r === 'w3') { from = 15; to = Math.min(21, maxDay); }
    else if (r === 'w4') { from = 22; to = Math.min(28, maxDay); }
    else if (r === 'w5') { from = 29; to = maxDay; if (from > maxDay) from = maxDay; }
    else if (r === 'custom') {
      from = Math.max(1, Math.min(hub.filter.dayFrom, maxDay));
      to = Math.max(from, Math.min(hub.filter.dayTo, maxDay));
    }
    const days = [];
    for (let d = from; d <= to; d++) days.push(d);
    return days;
  }

  function populatePositionFilter() {
    const sel = document.getElementById('phPosition');
    if (!sel) return;
    const positions = [...new Set(state.nurses.map(n => n.position).filter(Boolean))].sort();
    const cur = sel.value || 'all';
    sel.innerHTML = '<option value="all">ทุกตำแหน่ง</option>' +
      positions.map(p => `<option value="${escAttr(p)}">${escHtml(p)}</option>`).join('');
    sel.value = cur;
  }

  function escHtml(s) { return helpers().esc(s); }
  function escAttr(s) { return helpers().esc(s); }

  // ========================================================
  // Doc-specific option panels
  // ========================================================
  function renderDocOptions() {
    const el = document.getElementById('phDocOptions');
    if (!el) return;
    const doc = hub.activeDoc;
    let html = '';
    if (doc === 'memo') {
      html = `
        <div>
          <label class="text-[10px] font-bold text-slate-500 block mb-1 uppercase">เลขที่หนังสือ</label>
          <input type="text" id="phMemoNo" placeholder="เช่น สธ 0410.5/..." class="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs" oninput="window.NursePrintHub.refreshPreview()">
        </div>
        <div>
          <label class="text-[10px] font-bold text-slate-500 block mb-1 uppercase">วันที่ออกหนังสือ</label>
          <input type="text" id="phMemoDate" placeholder="${new Date().toLocaleDateString('th-TH')}" class="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs" oninput="window.NursePrintHub.refreshPreview()">
        </div>
        <div>
          <label class="text-[10px] font-bold text-slate-500 block mb-1 uppercase">เรื่อง</label>
          <input type="text" id="phMemoSubject" value="ขอส่งตารางปฏิบัติงานเวรประจำเดือน" class="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs" oninput="window.NursePrintHub.refreshPreview()">
        </div>
        <div>
          <label class="text-[10px] font-bold text-slate-500 block mb-1 uppercase">เรียน</label>
          <input type="text" id="phMemoTo" value="ผู้อำนวยการ" class="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs" oninput="window.NursePrintHub.refreshPreview()">
        </div>
        <div>
          <label class="text-[10px] font-bold text-slate-500 block mb-1 uppercase">เนื้อหา</label>
          <textarea id="phMemoBody" rows="5" class="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs" oninput="window.NursePrintHub.refreshPreview()">ตามที่กลุ่มงานการพยาบาลได้จัดทำตารางปฏิบัติงานเวรของบุคลากรประจำเดือนดังกล่าวข้างต้นแล้วนั้น เพื่อให้การปฏิบัติงานเป็นไปด้วยความเรียบร้อย จึงขอส่งตารางเวรดังกล่าวเพื่อโปรดทราบและพิจารณาอนุมัติ ดังรายละเอียดปรากฏตามเอกสารแนบท้าย</textarea>
        </div>`;
    } else if (doc === 'individual') {
      html = `<p class="text-[11px] text-slate-500">📌 จะพิมพ์ตารางเวรแยกเป็น <b>1 หน้าต่อ 1 คน</b> สำหรับแจกพยาบาลแต่ละท่าน ใช้ปุ่ม "บุคลากร" ด้านบนเพื่อเลือกเฉพาะคน</p>`;
    } else if (doc === 'signin') {
      html = `<p class="text-[11px] text-slate-500">📌 ใบลงเวลามีคอลัมน์ <b>เวลาเข้า / เวลาออก / ลายเซ็น</b> สำหรับให้พยาบาลเซ็นเมื่อมาทำงาน</p>`;
    } else if (doc === 'telegram') {
      html = renderTelegramOptions();
    } else {
      html = `<p class="text-[11px] text-slate-500">ใช้ตัวกรองด้านบนเพื่อปรับช่วงเวลา ตำแหน่ง และตัวเลือกเอกสาร</p>`;
    }
    el.innerHTML = html;
    // Action bar mode switch
    const actionBar = document.querySelector('#tab-print-center .sticky.bottom-2');
    if (actionBar) actionBar.classList.toggle('ph-telegram-mode', doc === 'telegram');
    if (window.lucide) lucide.createIcons();
  }

  // ========================================================
  // Renderers — each returns a list of HTML page strings
  // ========================================================
  function renderPages() {
    const doc = hub.activeDoc;
    if (doc === 'master') return [renderMaster()];
    if (doc === 'individual') return renderIndividual();
    if (doc === 'calendar') return [renderCalendar()];
    if (doc === 'memo') return [renderMemo()];
    if (doc === 'ot') return [renderOT()];
    if (doc === 'leave') return [renderLeave()];
    if (doc === 'signin') return [renderSignIn()];
    if (doc === 'stats') return [renderStats()];
    if (doc === 'telegram') return [renderTelegramPlaceholder()];
    return ['<p>ไม่พบเอกสาร</p>'];
  }

  function tplLetterhead(title, subtitle) {
    const f = hub.filter;
    const org = state.appSettings?.orgName || 'วิทยาลัยพยาบาลศรีมหาสารคาม';
    const monthName = THAI_MONTHS[state.month - 1];
    const buddhistYear = state.year > 2500 ? state.year : state.year + 543;
    let logoHtml = '';
    if (f.incGaruda) logoHtml = GARUDA_SVG;
    else if (f.incLogo && state.appSettings?.orgLogo) {
      logoHtml = `<img src="${state.appSettings.orgLogo}" alt="โลโก้" style="max-width:70px;max-height:70px;margin:0 auto 6px;display:block;">`;
    }
    return `
      <div class="ph-letterhead">
        ${logoHtml}
        <h1>${escHtml(title || 'ตารางปฏิบัติงานของบุคลากรทางการพยาบาล')}</h1>
        <h2>กลุ่มงานการพยาบาล ${escHtml(org)}</h2>
        <p class="ph-subtitle">${escHtml(subtitle || `ประจำเดือน${monthName} พ.ศ. ${buddhistYear}`)}</p>
      </div>`;
  }

  function tplSignatures() {
    if (!hub.filter.incSigs) return '';
    const sig = state.appSettings?.signers || {};
    const blank = '...........................................';
    return `
      <div class="ph-sig">
        <div class="col">
          <div class="role">เสนอเพื่อทราบและพิจารณา</div>
          <div class="line">ลงชื่อ ............................... ผู้จัดทำ</div>
          <div class="name">( ${escHtml(sig.scheduler || blank)} )</div>
          <div class="pos">ตำแหน่ง ${escHtml(sig.schedulerPos || 'พยาบาลวิชาชีพ')}</div>
          <div class="date">วันที่ ........./........./.........</div>
        </div>
        <div class="col">
          <div class="role">ได้ตรวจสอบความถูกต้องแล้ว</div>
          <div class="line">ลงชื่อ ............................... ผู้ตรวจสอบ</div>
          <div class="name">( ${escHtml(sig.headNurse || blank)} )</div>
          <div class="pos">ตำแหน่ง หัวหน้าหอผู้ป่วย</div>
          <div class="date">วันที่ ........./........./.........</div>
        </div>
        <div class="col">
          <div class="role">อนุมัติตามเสนอ</div>
          <div class="line">ลงชื่อ ............................... ผู้อนุมัติ</div>
          <div class="name">( ${escHtml(sig.director || blank)} )</div>
          <div class="pos">ตำแหน่ง ผู้อำนวยการ</div>
          <div class="date">วันที่ ........./........./.........</div>
        </div>
      </div>`;
  }

  function statCols() {
    const mode = state.appSettings?.shiftMode || 1;
    if (mode === 2) return ['ช','เย็น','OT','O','V','T','รวม'];
    if (mode === 3) return ['D12','N12','O','V','T','รวม'];
    return ['ช','บ','ด','ชบ','ดบ','ชด','O','V','T','รวม'];
  }

  function getStatValue(st, code) {
    if (code === 'รวม') return st.total || '';
    if (code === 'ช') return st.chTotal || '';
    if (code === 'บ') return st.baTotal || '';
    if (code === 'ด') return st.duTotal || '';
    return st[code] || '';
  }

  // ----- Master roster -----
  function renderMaster() {
    const H = helpers();
    const days = getFilteredDays();
    const nurses = getFilteredNurses();
    const cols = hub.filter.incStats ? statCols() : [];
    let html = tplLetterhead();
    const range = days[0] === 1 && days[days.length-1] === H.daysInMonth(state.year, state.month)
      ? '' : `<div style="text-align:right;font-size:11px;color:#475569;margin-bottom:6px;">ช่วงวันที่ ${days[0]} – ${days[days.length-1]}</div>`;
    html += range;
    // Compact mode when many columns (auto-fit ตารางในหน้ากระดาษ)
    const totalCols = 3 + days.length + cols.length;
    const compact = totalCols > 25;
    const ultraCompact = totalCols > 38;
    const fz = ultraCompact ? 8.5 : (compact ? 9.5 : 11);
    const fzDay = ultraCompact ? 8 : (compact ? 8.5 : 10);
    const pad = ultraCompact ? '2px 1px' : (compact ? '3px 2px' : '5px 4px');
    const nameW = ultraCompact ? 90 : (compact ? 110 : 140);
    const posW = ultraCompact ? 55 : (compact ? 65 : 80);
    const dayW = ultraCompact ? 17 : (compact ? 20 : 26);
    const statW = ultraCompact ? 22 : (compact ? 26 : 32);

    html += `<table class="ph-table" style="table-layout:fixed;width:100%;font-size:${fz}px;">
      <colgroup>
        <col style="width:26px;">
        <col style="width:${nameW}px;">
        <col style="width:${posW}px;">
        ${days.map(() => `<col style="width:${dayW}px;">`).join('')}
        ${cols.map(() => `<col style="width:${statW}px;">`).join('')}
      </colgroup>
      <thead>
      <tr>
        <th rowspan="2" style="padding:${pad};">ที่</th>
        <th rowspan="2" style="padding:${pad};">ชื่อ-นามสกุล</th>
        <th rowspan="2" style="padding:${pad};">ตำแหน่ง</th>
        <th colspan="${days.length}" style="padding:${pad};">วันที่</th>
        ${cols.length ? `<th colspan="${cols.length}" style="padding:${pad};">สรุปเวร</th>` : ''}
      </tr>
      <tr>`;
    days.forEach(d => {
      const we = H.isWeekend(state.year, state.month, d);
      const ho = H.isHoliday(state.year, state.month, d);
      const cls = ho ? 'ph-holiday' : (we ? 'ph-weekend' : '');
      html += `<th class="${cls}" style="font-size:${fzDay}px;padding:${ultraCompact?'1px':'2px'};line-height:1.15;">${d}${ultraCompact ? '' : `<br><span style="font-size:${fzDay-1.5}px;font-weight:400;">${H.dayLabel(state.year, state.month, d)}</span>`}</th>`;
    });
    cols.forEach(c => html += `<th style="font-size:${fzDay}px;background:#cbd5e1;padding:${pad};">${c}</th>`);
    html += `</tr></thead><tbody>`;
    nurses.forEach((n, i) => {
      const st = H.computeNurseStats(n.id);
      html += `<tr class="${i%2 ? 'ph-row-alt' : ''}">
        <td style="padding:${pad};">${i+1}</td>
        <td class="ph-name" style="padding:${pad};padding-left:${compact?4:8}px;font-size:${fz}px;overflow:hidden;text-overflow:ellipsis;">${escHtml(n.name)}</td>
        <td class="ph-pos" style="padding:${pad};font-size:${fzDay}px;overflow:hidden;text-overflow:ellipsis;">${escHtml(n.position || '')}</td>`;
      days.forEach(d => {
        const code = H.getLeave(n.id, d) || H.getShift(n.id, d) || '';
        const we = H.isWeekend(state.year, state.month, d);
        const ho = H.isHoliday(state.year, state.month, d);
        let style = `padding:${pad};font-size:${fz}px;`;
        let cls = '';
        if (code && hub.filter.incColors) {
          const def = H.shiftDef(code);
          style += `background:${def.bg};color:${def.fg};font-weight:700;`;
        }
        if (!code && ho) cls = 'ph-holiday';
        else if (!code && we) cls = 'ph-weekend';
        html += `<td class="${cls}" style="${style}">${escHtml(code)}</td>`;
      });
      cols.forEach(c => html += `<td style="background:#f1f5f9;font-weight:600;padding:${pad};font-size:${fz}px;">${getStatValue(st, c)}</td>`);
      html += `</tr>`;
    });
    html += `</tbody></table>`;
    html += tplSignatures();
    return html;
  }

  // ----- Individual (one page per nurse) -----
  function renderIndividual() {
    const H = helpers();
    const days = getFilteredDays();
    const nurses = getFilteredNurses();
    if (!nurses.length) return ['<p>ไม่มีพยาบาล</p>'];
    const monthName = THAI_MONTHS[state.month - 1];
    const buddhistYear = state.year > 2500 ? state.year : state.year + 543;
    return nurses.map(n => {
      const st = H.computeNurseStats(n.id);
      let html = tplLetterhead('ตารางปฏิบัติงานรายบุคคล', `${monthName} พ.ศ. ${buddhistYear}`);
      html += `<table style="width:100%;font-size:14px;margin-bottom:14px;">
        <tr><td style="padding:4px 8px;font-weight:700;width:100px;">ชื่อ–นามสกุล :</td><td style="padding:4px 8px;border-bottom:1px dotted #94a3b8;">${escHtml(n.name)}</td></tr>
        <tr><td style="padding:4px 8px;font-weight:700;">ตำแหน่ง :</td><td style="padding:4px 8px;border-bottom:1px dotted #94a3b8;">${escHtml(n.position || '-')}</td></tr>
      </table>`;
      // Week grid
      html += `<table class="ph-table" style="font-size:12px;">
        <thead><tr>
          <th style="width:50px;">วันที่</th>
          <th style="width:60px;">วัน</th>
          <th>ประเภทเวร</th>
          <th style="width:120px;">หมายเหตุ</th>
        </tr></thead><tbody>`;
      days.forEach(d => {
        const shift = H.getShift(n.id, d);
        const leave = H.getLeave(n.id, d);
        const code = leave || shift || '-';
        const we = H.isWeekend(state.year, state.month, d);
        const ho = H.isHoliday && H.isHoliday(state.year, state.month, d);
        const def = code !== '-' ? H.shiftDef(code) : null;
        const style = def && hub.filter.incColors ? `background:${def.bg};color:${def.fg};font-weight:700;` : '';
        const remark = ho ? (H.holidayName?.(state.year, state.month, d) || 'วันหยุด') : (leave ? 'ลา' : '');
        html += `<tr ${we && !ho ? 'style="background:#fef9c3;"' : ''} ${ho ? 'style="background:#fee2e2;"' : ''}>
          <td>${d}</td>
          <td>${H.dayLabel(state.year, state.month, d)}</td>
          <td style="${style}">${escHtml(code !== '-' ? (def?.name || code) : '-')}</td>
          <td style="text-align:left;padding-left:8px;font-size:11px;">${escHtml(remark)}</td>
        </tr>`;
      });
      html += `</tbody></table>`;
      // Stats summary
      if (hub.filter.incStats) {
        html += `<div style="margin-top:14px;padding:10px;background:#f1f5f9;border-radius:6px;font-size:12px;">
          <b>สรุปยอดเวรประจำเดือน:</b><br>
          ${statCols().map(c => `${c}: <b>${getStatValue(st, c) || 0}</b>`).join(' &nbsp;|&nbsp; ')}
        </div>`;
      }
      html += tplSignatures();
      return html;
    });
  }

  // ----- Calendar grid -----
  function renderCalendar() {
    const H = helpers();
    const days = H.daysInMonth(state.year, state.month);
    const firstDay = new Date(yearAD(state.year), state.month - 1, 1).getDay(); // 0=Sun
    const dayNames = ['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.'];
    let html = tplLetterhead('ปฏิทินปฏิบัติงาน', `${THAI_MONTHS[state.month-1]} พ.ศ. ${state.year > 2500 ? state.year : state.year + 543}`);
    html += `<div class="ph-cal">`;
    dayNames.forEach(d => html += `<div class="ph-cal-h">${d}</div>`);
    for (let i = 0; i < firstDay; i++) html += `<div class="ph-cal-c ph-cal-empty"></div>`;
    const nurses = getFilteredNurses();
    for (let d = 1; d <= days; d++) {
      const dow = (firstDay + d - 1) % 7;
      const we = dow === 0 || dow === 6;
      const ho = H.isHoliday(state.year, state.month, d);
      const cls = ho ? 'ph-cal-ho' : (we ? 'ph-cal-we' : '');
      const hname = ho ? (H.holidayName?.(state.year, state.month, d) || '') : '';
      // Group by shift code
      const groups = {};
      nurses.forEach(n => {
        const code = H.getShift(n.id, d);
        if (!code) return;
        (groups[code] = groups[code] || []).push(n.name);
      });
      let shifts = '';
      Object.keys(groups).sort().forEach(code => {
        shifts += `<div class="ph-cal-shift"><span class="lab">${escHtml(code)}</span>${groups[code].map(n => escHtml(n.split(' ')[0])).join(', ')}</div>`;
      });
      html += `<div class="ph-cal-c ${cls}">
        <div class="ph-cal-dnum">${d}</div>
        ${hname ? `<div class="ph-cal-hname">${escHtml(hname)}</div>` : ''}
        ${shifts}
      </div>`;
    }
    // Trailing empties
    const totalCells = firstDay + days;
    const trailing = (7 - (totalCells % 7)) % 7;
    for (let i = 0; i < trailing; i++) html += `<div class="ph-cal-c ph-cal-empty"></div>`;
    html += `</div>`;
    html += tplSignatures();
    return html;
  }

  // ----- Memo (บันทึกข้อความ มาตรฐาน นร.1305) -----
  function renderMemo() {
    const f = hub.filter;
    const H = helpers();
    const monthName = THAI_MONTHS[state.month - 1];
    const buddhistYear = state.year > 2500 ? state.year : state.year + 543;
    const org = state.appSettings?.orgName || 'วิทยาลัยพยาบาลศรีมหาสารคาม';
    const memoNo = document.getElementById('phMemoNo')?.value || '...........................';
    const memoDate = document.getElementById('phMemoDate')?.value || new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' });
    const subject = document.getElementById('phMemoSubject')?.value || 'ขอส่งตารางปฏิบัติงานเวร';
    const to = document.getElementById('phMemoTo')?.value || 'ผู้อำนวยการ';
    const body = document.getElementById('phMemoBody')?.value || '';

    // Compute summary
    const nurses = getFilteredNurses();
    const days = getFilteredDays();
    let totalShifts = 0;
    nurses.forEach(n => {
      const st = H.computeNurseStats(n.id);
      totalShifts += (st.total || 0);
    });

    let html = '';
    if (f.incGaruda) html += `<div style="text-align:center;">${GARUDA_SVG}</div>`;
    html += `<div class="ph-memo-title">บันทึกข้อความ</div>`;
    html += `<div class="ph-memo-meta">
      <div class="row"><span class="label">ส่วนราชการ</span><span class="value">กลุ่มงานการพยาบาล ${escHtml(org)} โทร. ........................</span></div>
      <div class="row"><span class="label">ที่</span><span class="value" style="max-width:40%;">${escHtml(memoNo)}</span><span class="label" style="margin-left:20px;">วันที่</span><span class="value">${escHtml(memoDate)}</span></div>
      <div class="row"><span class="label">เรื่อง</span><span class="value">${escHtml(subject)} ประจำเดือน${monthName} พ.ศ. ${buddhistYear}</span></div>
    </div>
    <div style="margin:14px 0 10px;font-size:15px;"><b>เรียน</b> ${escHtml(to)}</div>
    <div class="ph-memo-body"><p>${escHtml(body)}</p>
      <p>สรุปจำนวนบุคลากรในตารางทั้งสิ้น <b>${nurses.length}</b> คน รวมจำนวนเวรปฏิบัติงาน <b>${totalShifts}</b> เวร ในช่วงวันที่ ${days[0]} – ${days[days.length-1]} ${monthName} ${buddhistYear} ทั้งนี้ ได้แนบตารางปฏิบัติงานโดยละเอียดมาพร้อมหนังสือฉบับนี้แล้ว</p>
      <p>จึงเรียนมาเพื่อโปรดทราบและพิจารณาอนุมัติต่อไป จะเป็นพระคุณยิ่ง</p>
    </div>`;
    html += tplSignatures();
    return html;
  }

  // ----- OT -----
  function renderOT() {
    const H = helpers();
    let html = tplLetterhead('รายงานการคำนวณค่าตอบแทนการปฏิบัติงานนอกเวลาราชการ (OT)');
    const ot = window.NurseOT?.computeOT?.();
    if (!ot) return html + '<p style="text-align:center;color:#94a3b8;padding:30px;">ไม่มีข้อมูล OT</p>';
    const mode = state.appSettings?.shiftMode || 1;
    let headers, rowFn;
    if (mode === 2) {
      headers = ['ที่','ชื่อ-นามสกุล','ตำแหน่ง','เวรเย็น','OT วันหยุด','รวมครั้ง','จำนวนเงิน (บาท)'];
      rowFn = (r, i) => [i+1, r.name, r.position||'', r.eveningCount||0, r.otCount||0, r.totalUnits||0, fmt(r.amount||0)];
    } else if (mode === 3) {
      headers = ['ที่','ชื่อ-นามสกุล','ตำแหน่ง','D12','N12','รวมหน่วย','OT (หน่วย)','จำนวนเงิน (บาท)'];
      rowFn = (r, i) => [i+1, r.name, r.position||'', r.d12||0, r.n12||0, r.totalUnits||0, r.otUnits>0?Math.round(r.otUnits):0, fmt(r.amount||0)];
    } else {
      headers = ['ที่','ชื่อ-นามสกุล','ตำแหน่ง','ช','บ','ด','ชบ','ดบ','ชด','รวม','OT','จำนวนเงิน (บาท)'];
      rowFn = (r, i) => [i+1, r.name, r.position||'', r.ch||0, r.ba||0, r.du||0, r.chba||0, r.duba||0, r.dn||0, r.totalUnits||0, r.otUnits>0?Math.round(r.otUnits):0, fmt(r.amount||0)];
    }
    html += `<table class="ph-table"><thead><tr>${headers.map((h,i)=>`<th style="${i===1?'min-width:140px;text-align:left;padding-left:8px;':''}">${escHtml(h)}</th>`).join('')}</tr></thead><tbody>`;
    let totalAmt = 0, totalUnits = 0;
    ot.rows.forEach((r, i) => {
      totalAmt += (r.amount||0); totalUnits += (r.totalUnits||0);
      html += `<tr class="${i%2?'ph-row-alt':''}">${rowFn(r,i).map((v,idx)=>`<td style="${idx===1?'text-align:left;padding-left:8px;font-weight:600;':''}${idx===headers.length-1?'text-align:right;padding-right:8px;font-weight:700;color:#047857;':''}">${escHtml(v)}</td>`).join('')}</tr>`;
    });
    html += `<tfoot><tr><td colspan="${headers.length-1}" style="text-align:right;padding-right:10px;">รวมทั้งสิ้น</td><td style="text-align:right;padding-right:8px;color:#b91c1c;">${fmt(totalAmt)} บาท</td></tr></tfoot>`;
    html += `</tbody></table>`;
    html += `<p style="margin-top:14px;font-size:12px;color:#475569;">เกณฑ์ภาระงานปกติ: ${state.otSettings?.threshold || '-'} เวร/เดือน &nbsp;|&nbsp; ส่วนที่เกินจึงคิดเป็น OT</p>`;
    html += tplSignatures();
    return html;
  }

  function fmt(n) {
    return Number(n).toLocaleString('th-TH', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  }

  // ----- Leave report -----
  function renderLeave() {
    const H = helpers();
    const nurses = getFilteredNurses();
    const days = getFilteredDays();
    let html = tplLetterhead('สรุปวันลา / วันหยุดราชการ');
    html += `<table class="ph-table">
      <thead><tr>
        <th style="width:35px;">ที่</th>
        <th style="min-width:140px;">ชื่อ-นามสกุล</th>
        <th style="min-width:80px;">ตำแหน่ง</th>
        <th>วันลา (V)</th>
        <th>วันลาป่วย (T)</th>
        <th>วันหยุด (O)</th>
        <th>รายละเอียดวันที่ลา</th>
      </tr></thead><tbody>`;
    nurses.forEach((n, i) => {
      let vDays = [], tDays = [], oDays = [];
      days.forEach(d => {
        const l = H.getLeave(n.id, d);
        const s = H.getShift(n.id, d);
        if (l === 'V') vDays.push(d);
        else if (l === 'T') tDays.push(d);
        else if (s === 'O') oDays.push(d);
      });
      html += `<tr class="${i%2?'ph-row-alt':''}">
        <td>${i+1}</td>
        <td class="ph-name">${escHtml(n.name)}</td>
        <td class="ph-pos">${escHtml(n.position || '')}</td>
        <td>${vDays.length}</td>
        <td>${tDays.length}</td>
        <td>${oDays.length}</td>
        <td style="text-align:left;padding-left:8px;font-size:10.5px;">
          ${vDays.length ? `<b style="color:#7c3aed;">ลา:</b> ${vDays.join(', ')}` : ''}
          ${tDays.length ? ` &nbsp;<b style="color:#dc2626;">ป่วย:</b> ${tDays.join(', ')}` : ''}
          ${oDays.length ? ` &nbsp;<b style="color:#0891b2;">หยุด:</b> ${oDays.join(', ')}` : ''}
        </td>
      </tr>`;
    });
    html += `</tbody></table>`;
    html += tplSignatures();
    return html;
  }

  // ----- Sign-in sheet -----
  function renderSignIn() {
    const H = helpers();
    const days = getFilteredDays();
    const nurses = getFilteredNurses();
    let html = tplLetterhead('ใบลงเวลาปฏิบัติงาน', `${THAI_MONTHS[state.month-1]} พ.ศ. ${state.year > 2500 ? state.year : state.year + 543}`);
    // Show one nurse per row with all days OR group by day. We'll go: one day per page section, list of nurses for that day.
    // Simpler: one big table — ที่ | ชื่อ | ตำแหน่ง | เวร | เวลาเข้า | เวลาออก | ลายเซ็น (one row per nurse-day)
    html += `<table class="ph-table" style="font-size:11px;">
      <thead><tr>
        <th style="width:40px;">วันที่</th>
        <th style="width:30px;">ที่</th>
        <th style="min-width:130px;">ชื่อ-นามสกุล</th>
        <th style="width:60px;">เวร</th>
        <th style="width:70px;">เวลาเข้า</th>
        <th style="width:70px;">เวลาออก</th>
        <th style="min-width:120px;">ลายเซ็น</th>
      </tr></thead><tbody>`;
    days.forEach(d => {
      const onDuty = nurses.map(n => ({ n, code: H.getShift(n.id, d) })).filter(x => x.code && x.code !== 'O');
      if (!onDuty.length) {
        html += `<tr><td>${d} ${H.dayLabel(state.year, state.month, d)}</td><td colspan="6" style="color:#94a3b8;font-style:italic;">— ไม่มีเวร —</td></tr>`;
        return;
      }
      onDuty.forEach((x, i) => {
        const def = H.shiftDef(x.code);
        html += `<tr ${i%2?'class="ph-row-alt"':''}>
          ${i===0 ? `<td rowspan="${onDuty.length}" style="font-weight:700;background:#e2e8f0;">${d}<br><span style="font-weight:400;font-size:10px;">${H.dayLabel(state.year, state.month, d)}</span></td>` : ''}
          <td>${i+1}</td>
          <td class="ph-name">${escHtml(x.n.name)}</td>
          <td style="${hub.filter.incColors ? `background:${def.bg};color:${def.fg};font-weight:700;` : ''}">${escHtml(x.code)}</td>
          <td></td><td></td><td></td>
        </tr>`;
      });
    });
    html += `</tbody></table>`;
    html += tplSignatures();
    return html;
  }

  // ----- Stats -----
  function renderStats() {
    const H = helpers();
    const nurses = getFilteredNurses();
    let html = tplLetterhead('สรุปสถิติภาระงานบุคลากร');
    const cols = statCols();
    html += `<table class="ph-table">
      <thead><tr>
        <th style="width:35px;">ที่</th>
        <th style="min-width:140px;">ชื่อ-นามสกุล</th>
        <th style="min-width:80px;">ตำแหน่ง</th>
        ${cols.map(c => `<th>${c}</th>`).join('')}
      </tr></thead><tbody>`;
    const totals = {};
    cols.forEach(c => totals[c] = 0);
    nurses.forEach((n, i) => {
      const st = H.computeNurseStats(n.id);
      html += `<tr class="${i%2?'ph-row-alt':''}">
        <td>${i+1}</td>
        <td class="ph-name">${escHtml(n.name)}</td>
        <td class="ph-pos">${escHtml(n.position||'')}</td>
        ${cols.map(c => {
          const v = getStatValue(st, c) || 0;
          totals[c] += Number(v) || 0;
          return `<td>${v || ''}</td>`;
        }).join('')}
      </tr>`;
    });
    html += `<tfoot><tr><td colspan="3" style="text-align:right;padding-right:10px;">รวม</td>${cols.map(c => `<td style="background:#fef3c7;font-weight:700;">${totals[c] || ''}</td>`).join('')}</tr></tfoot>`;
    html += `</tbody></table>`;
    html += tplSignatures();
    return html;
  }

  // ===============================================================
  // TELEGRAM INFOGRAPHIC HUB
  // ===============================================================

  function renderTelegramOptions() {
    const tg = state.appSettings?.telegram || {};
    const targets = tg.chatTargets || [];
    const tokenSet = !!(tg.botToken && tg.botToken.length > 30);
    const t = hub.telegram;
    const themes = [
      { id: 'clinical-dark',  label: '🌌 Dark Neon',     desc: 'ดาร์กพรีเมียม',  swatch: 'linear-gradient(135deg,#0f172a,#1e40af 60%,#06b6d4)' },
      { id: 'clean-light',    label: '🏥 Medical Light',  desc: 'สะอาด สุภาพ',    swatch: 'linear-gradient(135deg,#f8fafc,#e0f2fe 60%,#bae6fd)' },
      { id: 'minimal-retro',  label: '📜 Minimal',        desc: 'ทางการ คลาสสิก', swatch: 'linear-gradient(135deg,#ffffff,#fef3c7 50%,#fde68a)' },
      { id: 'ocean-breeze',   label: '🌊 Ocean Breeze',   desc: 'ฟ้าทะเลสดชื่น',  swatch: 'linear-gradient(135deg,#0c4a6e,#0891b2 50%,#67e8f9)' },
      { id: 'sunset-gold',    label: '🌅 Sunset Gold',    desc: 'พระอาทิตย์ตก',   swatch: 'linear-gradient(135deg,#7c2d12,#ea580c 50%,#fbbf24)' },
      { id: 'forest-green',   label: '🌿 Forest',         desc: 'ป่าธรรมชาติ',    swatch: 'linear-gradient(135deg,#14532d,#16a34a 60%,#86efac)' },
      { id: 'royal-purple',   label: '👑 Royal Purple',   desc: 'ม่วงราชวงศ์',     swatch: 'linear-gradient(135deg,#3b0764,#7c3aed 60%,#c4b5fd)' },
      { id: 'rose-blossom',   label: '🌸 Rose Blossom',   desc: 'ชมพูอ่อนหวาน',   swatch: 'linear-gradient(135deg,#831843,#db2777 50%,#fbcfe8)' },
      { id: 'aurora-night',   label: '🌌 Aurora',         desc: 'แสงเหนือ',       swatch: 'linear-gradient(135deg,#020617,#065f46 40%,#22d3ee 80%,#a78bfa)' },
    ];
    const modes = [
      { id: 'table',      label: '📋 ตารางประจำเดือน',  desc: 'ตารางเวรเต็มรูปแบบรายเดือน' },
      { id: 'calendar',   label: '🗓️ ปฏิทินปฏิบัติงาน', desc: 'มุมมองปฏิทิน 7 วัน × สัปดาห์' },
      { id: 'individual', label: '👤 รายบุคคล',         desc: 'แสดงเวรของแต่ละคน' },
      { id: 'daily',      label: '📅 รายวันสรุป',       desc: 'สรุปเวรในแต่ละวัน' },
      { id: 'summary',    label: '📈 สถิติรวม',          desc: 'ยอดเวรสะสมของแต่ละคน' },
    ];
    return `
      <div class="ph-tg-section">
        <div class="ph-tg-label">🎨 ธีมการ์ด</div>
        <div class="grid grid-cols-3 gap-1.5">
          ${themes.map(th => `
            <button onclick="window.NursePrintHub.setTgTheme('${th.id}')" class="ph-tg-theme ${t.theme === th.id ? 'active' : ''}" title="${escAttr(th.desc)}">
              <span class="swatch" style="background:${th.swatch}"></span>
              <span class="label">${escHtml(th.label)}</span>
            </button>`).join('')}
        </div>
      </div>

      <div class="ph-tg-section">
        <div class="ph-tg-label">📊 รูปแบบการนำเสนอ</div>
        <div class="space-y-1">
          ${modes.map(m => `
            <button onclick="window.NursePrintHub.setTgMode('${m.id}')" class="ph-tg-mode ${t.mode === m.id ? 'active' : ''}">
              <div class="font-bold text-[11.5px]">${escHtml(m.label)}</div>
              <div class="text-[10px] text-slate-500">${escHtml(m.desc)}</div>
            </button>`).join('')}
        </div>
      </div>

      <div class="ph-tg-section">
        <div class="flex items-center justify-between mb-1">
          <span class="ph-tg-label !mb-0">💬 ข้อความแคปชั่น</span>
          <button onclick="window.NursePrintHub.previewTgText()" class="text-[10px] text-cyan-600 hover:underline font-bold">👁️ ดูเต็ม</button>
        </div>
        <textarea id="phTgCaption" rows="3" placeholder="ปล่อยว่างเพื่อใช้เทมเพลตอัตโนมัติ" class="w-full px-2 py-1.5 border border-slate-300 rounded text-[11px] font-mono leading-snug" oninput="window.NursePrintHub.setTgCaption(this.value)">${escHtml(t.caption)}</textarea>
        <p class="text-[9.5px] text-slate-400 mt-1">ใช้ {month} {year} {org} {scheduler} เป็นตัวแปร</p>
      </div>

      <div class="ph-tg-section">
        <div class="flex items-center justify-between mb-1">
          <span class="ph-tg-label !mb-0">📡 ปลายทาง Telegram</span>
          <span class="text-[10px] ${targets.length ? 'text-emerald-600' : 'text-rose-500'} font-bold">${targets.length} กลุ่ม</span>
        </div>
        ${targets.length ? `
          <div class="space-y-1 max-h-28 overflow-y-auto pr-1">
            ${targets.map(tg => `
              <div class="flex items-center gap-1.5 px-2 py-1 bg-slate-50 rounded border border-slate-200">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                <span class="text-[10.5px] font-semibold text-slate-700 truncate flex-1">${escHtml(tg.label || 'ไม่ระบุชื่อ')}</span>
                <span class="text-[9px] text-slate-400 font-mono">${escHtml(String(tg.id||'').substring(0,10))}...</span>
              </div>`).join('')}
          </div>
        ` : `
          <p class="text-[10px] text-amber-700 bg-amber-50 border border-amber-100 rounded p-1.5">⚠️ ยังไม่มีปลายทาง กรุณาเพิ่มก่อนส่ง</p>
        `}
        <button onclick="window.NursePrintHub.openTgDestinations()" class="w-full mt-1.5 text-[10px] text-cyan-700 hover:bg-cyan-50 border border-cyan-200 rounded py-1 font-bold">
          + เพิ่ม/จัดการปลายทาง
        </button>
      </div>

      <div class="ph-tg-section">
        <div class="ph-tg-label">⚙️ ตั้งค่า Bot</div>
        <div class="flex items-center gap-1.5 mb-1.5 px-2 py-1.5 ${tokenSet ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200'} border rounded">
          <span class="w-2 h-2 rounded-full ${tokenSet ? 'bg-emerald-500' : 'bg-rose-500'}"></span>
          <span class="text-[10.5px] font-bold ${tokenSet ? 'text-emerald-700' : 'text-rose-700'}">
            ${tokenSet ? `Token ตั้งค่าแล้ว` : 'ยังไม่ได้ตั้งค่า Token'}
          </span>
        </div>
        <button onclick="window.NursePrintHub.openTgTokenSetup()" class="w-full text-[10px] text-slate-700 hover:bg-slate-100 border border-slate-200 rounded py-1 font-bold">
          🔑 ${tokenSet ? 'เปลี่ยน Token' : 'ตั้งค่า Token'}
        </button>
      </div>

      <div class="ph-tg-section pt-2 border-t border-slate-200">
        <label class="flex items-center gap-2 cursor-pointer mb-2">
          <input type="checkbox" id="phTgSendImage" ${t.sendImage ? 'checked' : ''} onchange="window.NursePrintHub.setTgSendImage(this.checked)" class="w-4 h-4 accent-cyan-600">
          <span class="text-[11px] font-bold text-slate-700">📸 ส่งรูปอินโฟกราฟิกพร้อมข้อความ</span>
        </label>
        <button onclick="window.NursePrintHub.sendTelegram()" ${(tokenSet && targets.length) ? '' : 'disabled'} class="w-full btn-solid bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white text-xs font-bold py-2.5 rounded-lg flex items-center justify-center gap-1.5 mb-1.5 shadow-sm">
          <i data-lucide="send" class="w-3.5 h-3.5"></i> ⚡ ส่งเข้า Telegram ทันที
        </button>
        <div class="grid grid-cols-2 gap-1.5">
          <button onclick="window.NursePrintHub.downloadTgImage()" class="btn-solid bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10.5px] font-bold py-1.5 rounded-lg flex items-center justify-center gap-1">
            <i data-lucide="download" class="w-3 h-3"></i> ดาวน์โหลด PNG
          </button>
          <button onclick="window.NursePrintHub.copyTgText()" class="btn-solid bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10.5px] font-bold py-1.5 rounded-lg flex items-center justify-center gap-1">
            <i data-lucide="copy" class="w-3 h-3"></i> คัดลอกข้อความ
          </button>
        </div>
      </div>`;
  }

  function setTgTheme(v) { hub.telegram.theme = v; refreshPreview(); }
  function setTgMode(v) { hub.telegram.mode = v; refreshPreview(); }
  function setTgCaption(v) { hub.telegram.caption = v; }
  function setTgSendImage(v) { hub.telegram.sendImage = v; }

  // ----- Telegram preview (inline mini infographic) -----
  function renderTelegramPlaceholder() {
    const H = helpers();
    const t = hub.telegram;
    const tg = state.appSettings?.telegram || {};
    const monthName = THAI_MONTHS[state.month - 1];
    const yearBE = state.year > 2500 ? state.year : state.year + 543;
    const org = state.appSettings?.orgName || 'หน่วยงาน';
    const nurses = getFilteredNurses();
    const days = getFilteredDays();

    // Theme palette
    const palette = telegramPalette(t.theme);
    const card = `
      <div class="ph-tg-preview" style="background:${palette.cardBg};color:${palette.text};border:${palette.border};">
        <div class="ph-tg-header" style="border-bottom:${palette.divider};">
          <div class="ph-tg-title" style="color:${palette.title};"><span class="ph-tg-text-fix">📋 ตารางปฏิบัติงานบุคลากรพยาบาล</span></div>
          <div class="ph-tg-sub" style="color:${palette.muted};"><span class="ph-tg-text-fix">🏥 ${escHtml(org)}</span></div>
          <div class="ph-tg-period" style="background:${palette.badge};color:${palette.badgeText};"><span class="ph-tg-text-fix">${monthName} พ.ศ. ${yearBE}</span></div>
        </div>
        <div class="ph-tg-body">
          ${renderTgBody(nurses, days, t.mode, palette, H)}
        </div>
        <div class="ph-tg-footer" style="border-top:${palette.divider};color:${palette.muted};">
          <span>📊 ${nurses.length} คน · ${days.length} วัน</span>
          <span>✍️ ${escHtml(state.appSettings?.signers?.scheduler || '—')}</span>
        </div>
      </div>`;

    return `<div class="ph-tg-canvas-wrap" data-theme="${t.theme}" data-mode="${t.mode}">
      <div class="ph-tg-canvas" data-theme="${t.theme}" data-mode="${t.mode}">${card}</div>
      <div class="ph-tg-meta">
        <div class="row"><span>ธีม:</span> <b>${themeName(t.theme)}</b></div>
        <div class="row"><span>โหมด:</span> <b>${modeName(t.mode)}</b></div>
        <div class="row"><span>ขนาดภาพ:</span> <b>เหมือนพรีวิว · PNG คมชัด</b></div>
        <div class="row"><span>จะส่งไป:</span> <b>${(tg.chatTargets||[]).length} ปลายทาง</b></div>
      </div>
    </div>`;
  }

  function themeName(id) {
    return ({'clinical-dark':'Dark Neon','clean-light':'Medical Light','minimal-retro':'Minimal Elegant'})[id] || id;
  }
  function modeName(id) {
    return ({table:'ตารางประจำเดือน',calendar:'ปฏิทินปฏิบัติงาน',individual:'รายบุคคล',daily:'รายวันสรุป',summary:'สถิติรวม'})[id] || id;
  }

  function telegramPalette(theme) {
    if (theme === 'clean-light') {
      return {
        cardBg: 'linear-gradient(180deg,#ffffff,#f0f9ff)',
        border: '1px solid #bae6fd',
        text: '#0f172a',
        title: '#0c4a6e',
        muted: '#475569',
        divider: '1px dashed #cbd5e1',
        badge: '#0ea5e9',
        badgeText: '#fff',
        chipBg: '#e0f2fe',
        chipBorder: '1px solid #bae6fd',
        chipText: '#075985',
        accent: '#0284c7',
        rowBg: '#ffffff',
        rowBgAlt: '#f8fafc',
      };
    }
    if (theme === 'minimal-retro') {
      return {
        cardBg: 'linear-gradient(180deg,#fffbeb,#fef3c7)',
        border: '2px solid #b45309',
        text: '#451a03',
        title: '#78350f',
        muted: '#92400e',
        divider: '2px dotted #d97706',
        badge: '#b45309',
        badgeText: '#fffbeb',
        chipBg: '#fef3c7',
        chipBorder: '1px solid #d97706',
        chipText: '#78350f',
        accent: '#b45309',
        rowBg: '#fffbeb',
        rowBgAlt: '#fef3c7',
      };
    }
    if (theme === 'ocean-breeze') {
      return {
        cardBg: 'linear-gradient(180deg,#0c4a6e 0%,#0e7490 60%,#155e75 100%)',
        border: '1px solid rgba(103,232,249,0.5)',
        text: '#ecfeff',
        title: '#a5f3fc',
        muted: '#7dd3fc',
        divider: '1px dashed rgba(165,243,252,0.3)',
        badge: 'linear-gradient(90deg,#22d3ee,#0891b2)',
        badgeText: '#0c4a6e',
        chipBg: 'rgba(34,211,238,0.15)',
        chipBorder: '1px solid rgba(34,211,238,0.5)',
        chipText: '#cffafe',
        accent: '#22d3ee',
        rowBg: 'rgba(8,145,178,0.25)',
        rowBgAlt: 'rgba(14,116,144,0.35)',
      };
    }
    if (theme === 'sunset-gold') {
      return {
        cardBg: 'linear-gradient(180deg,#7c2d12 0%,#c2410c 50%,#ea580c 100%)',
        border: '1px solid #fbbf24',
        text: '#fff7ed',
        title: '#fef3c7',
        muted: '#fed7aa',
        divider: '1px dashed rgba(254,243,199,0.3)',
        badge: 'linear-gradient(90deg,#fbbf24,#f59e0b,#ea580c)',
        badgeText: '#7c2d12',
        chipBg: 'rgba(254,243,199,0.18)',
        chipBorder: '1px solid rgba(251,191,36,0.6)',
        chipText: '#fef3c7',
        accent: '#fbbf24',
        rowBg: 'rgba(194,65,12,0.45)',
        rowBgAlt: 'rgba(154,52,18,0.5)',
      };
    }
    if (theme === 'forest-green') {
      return {
        cardBg: 'linear-gradient(180deg,#14532d 0%,#166534 60%,#15803d 100%)',
        border: '1px solid #86efac',
        text: '#f0fdf4',
        title: '#bbf7d0',
        muted: '#86efac',
        divider: '1px dashed rgba(134,239,172,0.3)',
        badge: 'linear-gradient(90deg,#22c55e,#16a34a)',
        badgeText: '#14532d',
        chipBg: 'rgba(134,239,172,0.15)',
        chipBorder: '1px solid rgba(34,197,94,0.5)',
        chipText: '#bbf7d0',
        accent: '#4ade80',
        rowBg: 'rgba(22,101,52,0.35)',
        rowBgAlt: 'rgba(20,83,45,0.45)',
      };
    }
    if (theme === 'royal-purple') {
      return {
        cardBg: 'linear-gradient(180deg,#3b0764 0%,#581c87 50%,#6b21a8 100%)',
        border: '1px solid #c4b5fd',
        text: '#faf5ff',
        title: '#e9d5ff',
        muted: '#c4b5fd',
        divider: '1px dashed rgba(196,181,253,0.3)',
        badge: 'linear-gradient(90deg,#a855f7,#7c3aed,#fbbf24)',
        badgeText: '#3b0764',
        chipBg: 'rgba(196,181,253,0.15)',
        chipBorder: '1px solid rgba(168,85,247,0.5)',
        chipText: '#e9d5ff',
        accent: '#c084fc',
        rowBg: 'rgba(88,28,135,0.4)',
        rowBgAlt: 'rgba(59,7,100,0.5)',
      };
    }
    if (theme === 'rose-blossom') {
      return {
        cardBg: 'linear-gradient(180deg,#831843 0%,#9d174d 50%,#be185d 100%)',
        border: '1px solid #fbcfe8',
        text: '#fdf2f8',
        title: '#fce7f3',
        muted: '#fbcfe8',
        divider: '1px dashed rgba(251,207,232,0.3)',
        badge: 'linear-gradient(90deg,#f472b6,#db2777)',
        badgeText: '#831843',
        chipBg: 'rgba(251,207,232,0.15)',
        chipBorder: '1px solid rgba(244,114,182,0.5)',
        chipText: '#fce7f3',
        accent: '#f472b6',
        rowBg: 'rgba(157,23,77,0.4)',
        rowBgAlt: 'rgba(131,24,67,0.5)',
      };
    }
    if (theme === 'aurora-night') {
      return {
        cardBg: 'linear-gradient(160deg,#020617 0%,#064e3b 30%,#0c4a6e 60%,#312e81 100%)',
        border: '1px solid rgba(167,139,250,0.4)',
        text: '#f1f5f9',
        title: '#67e8f9',
        muted: '#a78bfa',
        divider: '1px dashed rgba(167,139,250,0.25)',
        badge: 'linear-gradient(90deg,#22d3ee,#10b981,#a78bfa)',
        badgeText: '#020617',
        chipBg: 'rgba(34,211,238,0.12)',
        chipBorder: '1px solid rgba(167,139,250,0.4)',
        chipText: '#cffafe',
        accent: '#22d3ee',
        rowBg: 'rgba(6,78,59,0.35)',
        rowBgAlt: 'rgba(49,46,129,0.35)',
      };
    }
    // clinical-dark (default)
    return {
      cardBg: 'linear-gradient(180deg,#0f172a,#020617)',
      border: '1px solid #1e40af',
      text: '#e2e8f0',
      title: '#67e8f9',
      muted: '#94a3b8',
      divider: '1px dashed #1e293b',
      badge: 'linear-gradient(90deg,#06b6d4,#3b82f6)',
      badgeText: '#0f172a',
      chipBg: 'rgba(6,182,212,0.12)',
      chipBorder: '1px solid rgba(6,182,212,0.35)',
      chipText: '#67e8f9',
      accent: '#06b6d4',
      rowBg: 'rgba(15,23,42,0.6)',
      rowBgAlt: 'rgba(30,41,59,0.4)',
    };
  }

  function shiftBadgeStyle(p, code) {
    const def = helpers().shiftDef(code);
    return `background:${def.bg};color:${def.fg};padding:2px 7px;border-radius:6px;font-size:10.5px;font-weight:800;`;
  }

  function renderTgBody(nurses, days, mode, p, H) {
    if (mode === 'table') {
      // Full monthly grid (compact infographic-style)
      const cols = statCols();
      const totalC = 2 + days.length + cols.length;
      const compact = totalC > 30;
      const fz = compact ? 9 : 10;
      const fzDay = compact ? 8 : 9;
      const pad = compact ? '2px 1px' : '3px 2px';
      const nameW = compact ? 90 : 110;
      const dayW = compact ? 18 : 22;
      const statW = compact ? 22 : 26;
      let html = `<table class="ph-tg-grid" style="width:100%;border-collapse:collapse;font-size:${fz}px;table-layout:fixed;color:${p.text};">
        <colgroup>
          <col style="width:24px;">
          <col style="width:${nameW}px;">
          ${days.map(() => `<col style="width:${dayW}px;">`).join('')}
          ${cols.map(() => `<col style="width:${statW}px;">`).join('')}
        </colgroup>
        <thead>
          <tr style="background:${p.badge};color:${p.badgeText};">
            <th style="padding:${pad};text-align:center;font-weight:800;" rowspan="2">#</th>
            <th style="padding:${pad};text-align:left;font-weight:800;" rowspan="2">ชื่อ</th>
            <th colspan="${days.length}" style="padding:${pad};font-weight:800;text-align:center;border-left:1px solid ${p.badgeText};">วันที่</th>
            <th colspan="${cols.length}" style="padding:${pad};font-weight:800;text-align:center;border-left:1px solid ${p.badgeText};">สรุป</th>
          </tr>
          <tr style="background:${p.badge};color:${p.badgeText};">`;
      days.forEach(d => {
        const we = H.isWeekend(state.year, state.month, d);
        const ho = H.isHoliday(state.year, state.month, d);
        const bg = ho ? 'background:rgba(220,38,38,0.4);' : (we ? 'background:rgba(255,255,255,0.15);' : '');
        html += `<th style="padding:${pad};text-align:center;font-size:${fzDay}px;font-weight:700;${bg}">${d}</th>`;
      });
      cols.forEach(c => html += `<th style="padding:${pad};text-align:center;font-size:${fzDay}px;font-weight:700;background:rgba(255,255,255,0.18);">${escHtml(c)}</th>`);
      html += `</tr></thead><tbody>`;
      nurses.forEach((n, i) => {
        const st = H.computeNurseStats(n.id);
        const rowBg = i % 2 ? p.rowBgAlt : p.rowBg;
        html += `<tr style="background:${rowBg};">
          <td style="padding:${pad};text-align:center;font-weight:700;font-size:${fzDay}px;border:1px solid ${p.chipBorder.replace('1px solid ','')};">${i+1}</td>
          <td style="padding:${pad} ${pad.split(' ')[1]} ${pad.split(' ')[0]} 6px;text-align:left;font-weight:700;font-size:${fz}px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border:1px solid ${p.chipBorder.replace('1px solid ','')};">${escHtml(n.name)}</td>`;
        days.forEach(d => {
          const c = H.getLeave(n.id, d) || H.getShift(n.id, d) || '';
          const we = H.isWeekend(state.year, state.month, d);
          const ho = H.isHoliday(state.year, state.month, d);
          let style = `padding:${pad};text-align:center;font-weight:700;font-size:${fz}px;border:1px solid ${p.chipBorder.replace('1px solid ','')};`;
          if (c) {
            const def = H.shiftDef(c);
            style += `background:${def.bg};color:${def.fg};`;
          } else if (ho) style += `background:rgba(220,38,38,0.15);`;
          else if (we) style += `background:${p.rowBgAlt};opacity:0.7;`;
          html += `<td style="${style}">${escHtml(c)}</td>`;
        });
        cols.forEach(c => {
          const v = getStatValue(st, c);
          html += `<td style="padding:${pad};text-align:center;font-weight:800;font-size:${fz}px;background:${p.chipBg};color:${p.chipText};border:1px solid ${p.chipBorder.replace('1px solid ','')};">${v || ''}</td>`;
        });
        html += `</tr>`;
      });
      html += `</tbody></table>
        <div style="margin-top:8px;display:flex;flex-wrap:wrap;gap:4px;font-size:9.5px;color:${p.muted};">
          <span style="padding:2px 6px;border-radius:4px;background:${p.chipBg};border:${p.chipBorder};color:${p.chipText};">🟦 = วันธรรมดา</span>
          <span style="padding:2px 6px;border-radius:4px;background:rgba(220,38,38,0.15);color:#dc2626;">🟥 = วันหยุดราชการ</span>
          <span>👥 ${nurses.length} คน · 📅 ${days.length} วัน</span>
        </div>`;
      return html;
    }
    if (mode === 'calendar') {
      // Full 7-col calendar grid
      const totalDays = H.daysInMonth(state.year, state.month);
      const firstDow = new Date(yearAD(state.year), state.month - 1, 1).getDay();
      const dayNames = ['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.'];
      let html = '<div class="ph-tg-cal-wrap">';
      html += '<div class="ph-tg-cal-grid">';
      // Header row
      dayNames.forEach((dn, i) => {
        const isWe = i === 0 || i === 6;
        html += `<div class="ph-tg-cal-head" style="background:${isWe ? p.badge : 'rgba(255,255,255,0.06)'};color:${isWe ? p.badgeText : p.title};border:${p.chipBorder};"><span class="ph-tg-text-fix">${dn}</span></div>`;
      });
      // Empty leading cells
      for (let i = 0; i < firstDow; i++) {
        html += `<div class="ph-tg-cal-empty" style="background:rgba(0,0,0,0.08);border:${p.chipBorder};"></div>`;
      }
      // Day cells
      for (let d = 1; d <= totalDays; d++) {
        const dow = (firstDow + d - 1) % 7;
        const we = dow === 0 || dow === 6;
        const ho = H.isHoliday(state.year, state.month, d);
        const hname = ho ? (H.holidayName(state.year, state.month, d) || 'วันหยุด') : '';
        // Group nurses by shift code
        const groups = {};
        nurses.forEach(n => {
          const c = H.getShift(n.id, d);
          if (c && c !== 'O') (groups[c] = groups[c] || []).push(n.name.split(' ')[0]);
        });
        const cellStyle = ho
          ? `background:linear-gradient(135deg,rgba(220,38,38,0.18),rgba(220,38,38,0.08));border:1px solid rgba(220,38,38,0.5);`
          : we
            ? `background:${p.rowBgAlt};border:${p.chipBorder};`
            : `background:${p.rowBg};border:${p.chipBorder};`;
        const dayNumColor = ho ? '#fca5a5' : (we ? p.accent : p.title);
        let cellHtml = `<div class="ph-tg-cal-cell" style="${cellStyle}">
          <div class="ph-tg-cal-dnum" style="color:${dayNumColor};"><span class="ph-tg-text-fix">${d}</span></div>
          ${hname ? `<div class="ph-tg-cal-hname" style="color:#fca5a5;"><span class="ph-tg-text-fix">${escHtml(hname)}</span></div>` : ''}
          <div class="ph-tg-cal-shifts">`;
        Object.keys(groups).sort().forEach(code => {
          const def = H.shiftDef(code);
          cellHtml += `<div class="ph-tg-cal-shift">
            <span class="ph-tg-cal-code" style="background:${def.bg};color:${def.fg};border-radius:5px;font-size:9px;font-weight:800;"><span class="ph-tg-code-fix">${escHtml(code)}</span></span>
            <span class="ph-tg-cal-names" style="font-size:9px;color:${p.text};"><span class="ph-tg-text-fix">${escHtml(groups[code].join(', '))}</span></span>
          </div>`;
        });
        cellHtml += `</div></div>`;
        html += cellHtml;
      }
      // Trailing
      const total = firstDow + totalDays;
      const trail = (7 - (total % 7)) % 7;
      for (let i = 0; i < trail; i++) html += `<div class="ph-tg-cal-empty" style="background:rgba(0,0,0,0.08);border:${p.chipBorder};"></div>`;
      html += '</div>';
      // Legend
      const allShifts = new Set();
      nurses.forEach(n => {
        for (let d = 1; d <= totalDays; d++) {
          const c = H.getShift(n.id, d);
          if (c && c !== 'O') allShifts.add(c);
        }
      });
      if (allShifts.size > 0) {
        html += `<div class="ph-tg-cal-legend" style="color:${p.muted};border-top:${p.divider};">
          <span style="font-weight:700;color:${p.title};">📖 รหัสเวร:</span>`;
        [...allShifts].sort().forEach(code => {
          const def = H.shiftDef(code);
          html += `<span style="display:inline-flex;align-items:center;gap:3px;"><span style="background:${def.bg};color:${def.fg};padding:1px 6px;border-radius:4px;font-size:10px;font-weight:800;"><span class="ph-tg-code-fix">${escHtml(code)}</span></span> <span class="ph-tg-text-fix">${escHtml(def.name || code)}</span></span>`;
        });
        html += `</div>`;
      }
      html += '</div>';
      return html;
    }
    if (mode === 'daily') {
      // Group by week — each week is a section with day cards
      const todayBE = new Date();
      const todayD = (todayBE.getFullYear() === (state.year > 2500 ? state.year - 543 : state.year) && todayBE.getMonth() + 1 === state.month) ? todayBE.getDate() : 0;
      const dayIcons = { 'ช':'☀️', 'บ':'🌆', 'ด':'🌙', 'ชบ':'☀️🌆', 'ดบ':'🌙🌆', 'ชด':'☀️🌙', 'เย็น':'🌇', 'OT':'⏰', 'D12':'🌞', 'N12':'🌃' };
      // Build weeks
      const weeks = []; let cur = [];
      days.forEach(d => {
        const dow = new Date(yearAD(state.year), state.month - 1, d).getDay();
        if (dow === 0 && cur.length) { weeks.push(cur); cur = []; }
        cur.push(d);
      });
      if (cur.length) weeks.push(cur);

      let html = '<div class="ph-tg-daily-v2">';
      weeks.forEach((week, wi) => {
        const wStart = week[0]; const wEnd = week[week.length-1];
        html += `<div class="ph-tg-week-section">
          <div class="ph-tg-week-banner" style="background:${p.badge};color:${p.badgeText};">
            <span>📆 สัปดาห์ที่ ${wi+1}</span>
            <span style="opacity:0.85;font-size:10px;">${wStart} – ${wEnd} ${THAI_MONTHS[state.month-1]}</span>
          </div>
          <div class="ph-tg-week-days">`;
        week.forEach(d => {
          const groups = {};
          let totalOnDuty = 0;
          nurses.forEach(n => {
            const c = H.getShift(n.id, d);
            if (c && c !== 'O') { (groups[c] = groups[c] || []).push(n.name.split(' ')[0]); totalOnDuty++; }
          });
          const we = H.isWeekend(state.year, state.month, d);
          const ho = H.isHoliday(state.year, state.month, d);
          const hname = ho ? (H.holidayName(state.year, state.month, d) || 'วันหยุด') : '';
          const dl = H.dayLabel(state.year, state.month, d);
          const isToday = d === todayD;
          const numColor = ho ? '#fca5a5' : (we ? p.accent : p.title);
          const cardStyle = isToday
            ? `background:${p.rowBg};border:2px solid ${p.accent};box-shadow:0 0 0 1px ${p.accent} inset, 0 6px 20px rgba(0,0,0,0.18);`
            : `background:${p.rowBg};border:${p.chipBorder};`;
          html += `<div class="ph-tg-dcard" style="${cardStyle}">
            <div class="ph-tg-dcard-head">
              <div class="ph-tg-dcard-date">
                <span class="dnum" style="color:${numColor};">${d}</span>
                <div style="display:flex;flex-direction:column;line-height:1;">
                  <span style="font-size:10px;font-weight:700;color:${p.muted};">${dl}</span>
                  ${isToday ? `<span style="font-size:8.5px;color:${p.accent};font-weight:800;">● วันนี้</span>` : ''}
                  ${ho ? `<span style="font-size:8.5px;color:#fca5a5;font-weight:700;">🚩 ${escHtml(hname)}</span>` : ''}
                </div>
              </div>
              <div class="ph-tg-coverage" style="background:${totalOnDuty ? p.chipBg : 'rgba(220,38,38,0.15)'};color:${totalOnDuty ? p.chipText : '#fca5a5'};border:${p.chipBorder};">
                👥 ${totalOnDuty} คน
              </div>
            </div>`;
          if (totalOnDuty === 0) {
            html += `<div style="text-align:center;padding:6px;font-size:10.5px;color:${p.muted};opacity:0.6;">— ไม่มีเวร —</div>`;
          } else {
            html += `<div class="ph-tg-dcard-shifts">`;
            Object.keys(groups).sort((a,b) => {
              const o = {'ช':1,'บ':2,'ด':3,'ชบ':4,'ดบ':5,'ชด':6,'เย็น':7,'OT':8};
              return (o[a]||99)-(o[b]||99);
            }).forEach(code => {
              const def = H.shiftDef(code);
              const icon = dayIcons[code] || '🔹';
              html += `<div class="ph-tg-shift-block" style="background:${def.bg}15;border-left:3px solid ${def.bg};">
                <div class="ph-tg-shift-head">
                  <span style="background:${def.bg};color:${def.fg};padding:2px 8px;border-radius:5px;font-size:10.5px;font-weight:800;">${icon} ${escHtml(code)}</span>
                  <span style="font-size:9.5px;color:${p.muted};">${groups[code].length} คน</span>
                </div>
                <div class="ph-tg-shift-names" style="color:${p.text};">${escHtml(groups[code].join(' · '))}</div>
              </div>`;
            });
            html += `</div>`;
          }
          html += `</div>`;
        });
        html += `</div></div>`;
      });
      html += '</div>';
      return html;
    }

    if (mode === 'summary') {
      // Build sorted list with totals + ranking
      const ranked = nurses.map(n => ({ n, st: H.computeNurseStats(n.id) }));
      const totals = ranked.map(r => r.st.total || 0);
      const maxTotal = Math.max(1, ...totals);
      const avgTotal = totals.length ? totals.reduce((a,b)=>a+b,0) / totals.length : 0;
      const threshold = state.otSettings?.threshold || 0;
      const medals = ['🥇','🥈','🥉'];

      // Rank by total desc (but keep original index for display number)
      const rankedByTotal = ranked.map((r, i) => ({...r, originalIdx: i})).sort((a, b) => (b.st.total||0) - (a.st.total||0));
      const rankMap = new Map(); rankedByTotal.forEach((r, rIdx) => rankMap.set(r.n.id, rIdx));

      let html = `<div class="ph-tg-summary-v2">
        <div class="ph-tg-summary-stats">
          <div class="ph-tg-stat-pill" style="background:${p.chipBg};border:${p.chipBorder};color:${p.chipText};">
            <span class="lbl">👥 บุคลากร</span><span class="val">${nurses.length} คน</span>
          </div>
          <div class="ph-tg-stat-pill" style="background:${p.chipBg};border:${p.chipBorder};color:${p.chipText};">
            <span class="lbl">📊 เวรเฉลี่ย</span><span class="val">${avgTotal.toFixed(1)} เวร/คน</span>
          </div>
          <div class="ph-tg-stat-pill" style="background:${p.chipBg};border:${p.chipBorder};color:${p.chipText};">
            <span class="lbl">🎯 เกณฑ์ OT</span><span class="val">${threshold || '-'} เวร</span>
          </div>
          <div class="ph-tg-stat-pill" style="background:${p.chipBg};border:${p.chipBorder};color:${p.chipText};">
            <span class="lbl">📈 รวมทั้งสิ้น</span><span class="val">${totals.reduce((a,b)=>a+b,0)} เวร</span>
          </div>
        </div>
        <div class="ph-tg-summary-list">`;

      ranked.forEach(({ n, st }, i) => {
        const total = st.total || 0;
        const rank = rankMap.get(n.id);
        const medal = rank < 3 ? medals[rank] : '';
        const rankBadge = medal || `#${rank + 1}`;
        const overThreshold = threshold && total > threshold;
        const barPct = (total / maxTotal) * 100;
        const initials = (n.name || '?').trim().charAt(0);

        // Build distribution mini-bars
        const dist = [
          { label: 'ช', val: st.chTotal || 0 },
          { label: 'บ', val: st.baTotal || 0 },
          { label: 'ด', val: st.duTotal || 0 },
          { label: 'ชบ', val: st['ชบ'] || 0 },
          { label: 'ดบ', val: st['ดบ'] || 0 },
          { label: 'ชด', val: st['ชด'] || 0 },
          { label: 'เย็น', val: st['เย็น'] || 0 },
          { label: 'OT', val: st['OT'] || 0 },
        ].filter(x => x.val > 0);
        const chipsHtml = dist.map(x => `<span style="${shiftBadgeStyle(p, x.label)}">${escHtml(x.label)} ${x.val}</span>`).join(' ');
        const leaveChips = [];
        if (st['V']) leaveChips.push(`<span style="background:rgba(139,92,246,0.2);color:#c4b5fd;padding:2px 6px;border-radius:4px;font-size:9.5px;font-weight:700;">ลา ${st['V']}</span>`);
        if (st['T']) leaveChips.push(`<span style="background:rgba(220,38,38,0.2);color:#fca5a5;padding:2px 6px;border-radius:4px;font-size:9.5px;font-weight:700;">ป่วย ${st['T']}</span>`);
        if (st['O']) leaveChips.push(`<span style="background:rgba(100,116,139,0.2);color:${p.muted};padding:2px 6px;border-radius:4px;font-size:9.5px;font-weight:700;">หยุด ${st['O']}</span>`);

        html += `<div class="ph-tg-sum-card" style="background:${i%2?p.rowBgAlt:p.rowBg};border:${p.chipBorder};">
          <div class="ph-tg-sum-rank" style="background:${rank<3?p.badge:p.chipBg};color:${rank<3?p.badgeText:p.chipText};border:${p.chipBorder};">
            ${medal ? `<span style="font-size:18px;">${medal}</span>` : `<span style="font-size:11px;font-weight:800;">${rankBadge}</span>`}
          </div>
          <div class="ph-tg-sum-avatar" style="background:${p.badge};color:${p.badgeText};">${escHtml(initials)}</div>
          <div class="ph-tg-sum-body">
            <div class="ph-tg-sum-name-row">
              <div>
                <span style="font-weight:800;color:${p.text};font-size:12.5px;">${escHtml(n.name)}</span>
                <span style="font-size:10px;color:${p.muted};margin-left:6px;">· ${escHtml(n.position||'')}</span>
              </div>
              <div class="ph-tg-sum-total-pill" style="background:${overThreshold?'linear-gradient(90deg,#dc2626,#f97316)':p.badge};color:${p.badgeText};">
                ${overThreshold ? '🔥' : '📊'} ${total} เวร
              </div>
            </div>
            <div class="ph-tg-sum-bar" style="background:rgba(0,0,0,0.2);">
              <div class="ph-tg-sum-bar-fill" style="width:${barPct}%;background:${overThreshold?'linear-gradient(90deg,#fbbf24,#dc2626)':p.badge};"></div>
              ${threshold ? `<div class="ph-tg-sum-bar-mark" style="left:${Math.min((threshold/maxTotal)*100, 100)}%;background:${p.accent};" title="เกณฑ์ ${threshold}"></div>` : ''}
            </div>
            <div class="ph-tg-sum-chips">
              ${chipsHtml || `<span style="color:${p.muted};font-size:10px;font-style:italic;">ไม่มีเวร</span>`}
              ${leaveChips.length ? `<span style="margin:0 4px;color:${p.muted};opacity:0.5;">|</span>${leaveChips.join(' ')}` : ''}
            </div>
          </div>
        </div>`;
      });
      html += `</div></div>`;
      return html;
    }

    // individual — fully redesigned
    const todayBE2 = new Date();
    const sameMonth = (todayBE2.getFullYear() === (state.year > 2500 ? state.year - 543 : state.year) && todayBE2.getMonth() + 1 === state.month);
    const todayDay = sameMonth ? todayBE2.getDate() : 0;
    const dayNamesShort = ['อา','จ','อ','พ','พฤ','ศ','ส'];

    let html = '<div class="ph-tg-individual-v2">';
    nurses.forEach((n, i) => {
      const st = H.computeNurseStats(n.id);
      const total = st.total || 0;
      // Collect shift items
      const items = [];
      let workDays = 0, offDays = 0, leaveDays = 0;
      days.forEach(d => {
        const c = H.getShift(n.id, d);
        const lv = H.getLeave(n.id, d);
        const dow = new Date(yearAD(state.year), state.month - 1, d).getDay();
        const we = dow === 0 || dow === 6;
        const ho = H.isHoliday(state.year, state.month, d);
        const code = lv || (c && c !== 'O' ? c : null);
        if (lv) leaveDays++;
        else if (c === 'O' || !c) offDays++;
        else workDays++;
        if (code) items.push({ d, dow, code, we, ho, isLeave: !!lv, isPast: todayDay && d < todayDay, isToday: d === todayDay, isFuture: todayDay && d > todayDay });
      });
      if (!items.length) return;

      const initials = (n.name || '?').trim().charAt(0);
      // Build mini stat chips
      const statChips = [];
      ['ช','บ','ด','ชบ','ดบ','ชด','เย็น','OT'].forEach(c => {
        const v = c==='ช'?st.chTotal : c==='บ'?st.baTotal : c==='ด'?st.duTotal : st[c];
        if (v) statChips.push(`<span style="${shiftBadgeStyle(p, c)}">${escHtml(c)} ${v}</span>`);
      });

      html += `<div class="ph-tg-ind-card" style="background:${i%2?p.rowBgAlt:p.rowBg};border:${p.chipBorder};">
        <div class="ph-tg-ind-header">
          <div class="ph-tg-ind-avatar" style="background:${p.badge};color:${p.badgeText};">${escHtml(initials)}</div>
          <div class="ph-tg-ind-name-block">
            <div style="font-weight:800;color:${p.text};font-size:13px;line-height:1.2;">${i+1}. ${escHtml(n.name)}</div>
            <div style="font-size:10px;color:${p.muted};margin-top:1px;">${escHtml(n.position||'')}</div>
          </div>
          <div class="ph-tg-ind-mini-stats">
            <div class="mini-stat" style="background:${p.chipBg};border:${p.chipBorder};">
              <span class="lbl" style="color:${p.muted};">เวร</span>
              <span class="val" style="color:${p.title};">${total}</span>
            </div>
            <div class="mini-stat" style="background:${p.chipBg};border:${p.chipBorder};">
              <span class="lbl" style="color:${p.muted};">ทำงาน</span>
              <span class="val" style="color:${p.text};">${workDays}</span>
            </div>
            <div class="mini-stat" style="background:${p.chipBg};border:${p.chipBorder};">
              <span class="lbl" style="color:${p.muted};">หยุด</span>
              <span class="val" style="color:${p.text};">${offDays}</span>
            </div>
            ${leaveDays ? `<div class="mini-stat" style="background:rgba(139,92,246,0.2);border:1px solid rgba(139,92,246,0.4);">
              <span class="lbl" style="color:${p.muted};">ลา</span>
              <span class="val" style="color:#c4b5fd;">${leaveDays}</span>
            </div>` : ''}
          </div>
        </div>

        <div class="ph-tg-ind-stat-row">
          ${statChips.join('') || `<span style="color:${p.muted};font-size:10.5px;">ไม่มีสถิติ</span>`}
        </div>

        <div class="ph-tg-ind-schedule">
          ${items.map(it => {
            const def = H.shiftDef(it.code);
            const stateCls = it.isToday ? 'today' : (it.isPast ? 'past' : 'future');
            const todayBorder = it.isToday ? `box-shadow:0 0 0 2px ${p.accent},0 4px 12px rgba(0,0,0,0.2);` : '';
            const opacity = it.isPast ? 'opacity:0.55;' : '';
            const weMark = it.we || it.ho ? `<span style="position:absolute;top:-3px;right:-3px;width:7px;height:7px;border-radius:50%;background:${it.ho?'#dc2626':p.accent};"></span>` : '';
            return `<div class="ph-tg-ind-day ${stateCls}" style="background:${def.bg};color:${def.fg};${todayBorder}${opacity}position:relative;">
              ${weMark}
              <div class="ph-tg-ind-d">${it.d}</div>
              <div class="ph-tg-ind-dow">${dayNamesShort[it.dow]}</div>
              <div class="ph-tg-ind-code">${escHtml(it.code)}</div>
            </div>`;
          }).join('')}
        </div>
      </div>`;
    });
    html += '</div>';
    return html;
  }

  // ----- Telegram actions -----
  async function sendTelegram() {
    const H = helpers();
    const tg = state.appSettings?.telegram || {};
    if (!tg.botToken) return H.showError('กรุณาตั้งค่า Bot Token ก่อน');
    if (!(tg.chatTargets||[]).length) return H.showError('กรุณาเพิ่มปลายทาง Telegram ก่อน');

    H.showLoading('กำลังเตรียมส่งข้อความ...');
    try {
      const message = buildTgMessage();
      const t = hub.telegram;
      let blob = null;
      if (t.sendImage) {
        H.showLoading('กำลังเรนเดอร์ภาพอินโฟกราฟิก (อาจใช้เวลา 5-10 วินาที)...');
        blob = await renderTgImageBlob();
      }
      H.showLoading(`กำลังส่งไปยัง ${tg.chatTargets.length} ปลายทาง...`);
      let ok = 0, fail = 0;
      for (const target of tg.chatTargets) {
        try {
          if (blob) {
            const fd = new FormData();
            fd.append('chat_id', target.id);
            fd.append('document', blob, 'infographic.png');
            if (message.length <= 1024) fd.append('caption', message);
            const r = await fetch(`https://api.telegram.org/bot${tg.botToken}/sendDocument`, { method:'POST', body: fd });
            const data = await r.json();
            if (!data.ok) throw new Error(data.description);
            if (message.length > 1024) {
              await fetch(`https://api.telegram.org/bot${tg.botToken}/sendMessage`, {
                method:'POST', headers:{'Content-Type':'application/json'},
                body: JSON.stringify({ chat_id: target.id, text: message })
              });
            }
          } else {
            const r = await fetch(`https://api.telegram.org/bot${tg.botToken}/sendMessage`, {
              method:'POST', headers:{'Content-Type':'application/json'},
              body: JSON.stringify({ chat_id: target.id, text: message })
            });
            const data = await r.json();
            if (!data.ok) throw new Error(data.description);
          }
          ok++;
        } catch (e) { fail++; console.error('Telegram send fail:', e); }
      }
      Swal.close();
      if (ok) H.showSuccess(`ส่งสำเร็จ ${ok} ปลายทาง${fail?` (ล้มเหลว ${fail})`:''}`);
      else H.showError(`ส่งไม่สำเร็จทั้งหมด ตรวจสอบ Token หรือ Chat ID`);
    } catch (e) {
      console.error(e); Swal.close();
      H.showError('ส่งไม่สำเร็จ: ' + (e.message || e));
    }
  }

  async function downloadTgImage() {
    const H = helpers();
    H.showLoading('กำลังสร้างภาพ...');
    try {
      const blob = await renderTgImageBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = `Telegram_Infographic_${THAI_MONTHS[state.month-1]}_${state.year}.png`;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      URL.revokeObjectURL(url);
      Swal.close();
      H.showSuccess('ดาวน์โหลดภาพแล้ว');
    } catch (e) {
      console.error(e); Swal.close();
      H.showError('สร้างภาพไม่สำเร็จ');
    }
  }

  async function renderTgImageBlob() {
    const t = hub.telegram;
    const bgMap = {
      'clinical-dark': '#0b1220', 'clean-light': '#f8fafc', 'minimal-retro': '#fffbeb',
      'ocean-breeze': '#082f49', 'sunset-gold': '#451a03', 'forest-green': '#052e16',
      'royal-purple': '#1e1b4b', 'rose-blossom': '#500724', 'aurora-night': '#020617',
    };
    const bg = bgMap[t.theme] || '#0b1220';

    const liveCard = document.querySelector('#phPreviewWrap .ph-tg-canvas');
    if (!liveCard) throw new Error('กรุณาเปิดพรีวิว Telegram Infographic ก่อนสร้างภาพ');

    if (document.fonts && document.fonts.ready) {
      try { await document.fonts.ready; } catch(_) {}
    }
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

    const scale = Math.max(3, Math.min(4, window.devicePixelRatio * 2));

    let canvas;
    try {
      canvas = await html2canvas(liveCard, {
        scale,
        backgroundColor: bg,
        useCORS: true,
        allowTaint: true,
        logging: false,
        imageTimeout: 0,
        scrollX: 0,
        scrollY: -window.scrollY,
        onclone: clonedDoc => {
          const clonedCard = clonedDoc.querySelector('#phPreviewWrap .ph-tg-canvas');
          if (!clonedCard) return;
          clonedCard.setAttribute('data-tg-export-fix', '1');
          const style = clonedDoc.createElement('style');
          style.textContent = `
            [data-tg-export-fix] .ph-tg-text-fix {
              position: relative;
              top: -5px;
            }
            [data-tg-export-fix] .ph-tg-code-fix {
              position: relative;
              top: -2px;
            }
            [data-tg-export-fix] .ph-tg-cal-code {
              padding-top: 0 !important;
              padding-bottom: 0 !important;
            }
            [data-tg-export-fix] .ph-tg-period {
              padding-top: 3px !important;
              padding-bottom: 7px !important;
            }
            [data-tg-export-fix] .ph-tg-footer span,
            [data-tg-export-fix] .ph-tg-cal-legend > span:first-child {
              position: relative;
              top: -5px;
            }
          `;
          clonedDoc.head.appendChild(style);
        },
      });
    } catch (err) {
      console.error('html2canvas failed:', err);
      throw err;
    }

    return new Promise((resolve, reject) => {
      canvas.toBlob(pngBlob => {
        if (!pngBlob) { reject(new Error('toBlob returned null')); return; }
        resolve(pngBlob);
      }, 'image/png');
    });
  }

  function buildTgMessage() {
    if (hub.telegram.caption && hub.telegram.caption.trim()) {
      return interpolate(hub.telegram.caption);
    }
    // Use existing template from settings if present
    const tpl = state.appSettings?.telegram?.template;
    if (tpl) return interpolate(tpl).replace('{schedule_list}', buildScheduleList());
    // Default
    return interpolate(`📋 ตารางปฏิบัติงาน — {month} {year}\n🏥 {org}\n\n${buildScheduleList()}\n\nจัดทำโดย: {scheduler}`);
  }

  function interpolate(s) {
    const monthName = THAI_MONTHS[state.month - 1];
    const yearBE = state.year > 2500 ? state.year : state.year + 543;
    const org = state.appSettings?.orgName || '';
    const scheduler = state.appSettings?.signers?.scheduler || '—';
    return s.replace(/\{month\}/g, monthName)
            .replace(/\{year\}/g, yearBE)
            .replace(/\{org\}/g, org)
            .replace(/\{scheduler\}/g, scheduler);
  }

  function buildScheduleList() {
    const H = helpers();
    const nurses = getFilteredNurses();
    const days = getFilteredDays();
    const mode = hub.telegram.mode;
    if (mode === 'table') {
      // Compact text-grid: one row per nurse, days as codes joined
      const lines = ['📋 ตารางเวรรายเดือน (รหัสเวรเรียงตามวันที่)'];
      nurses.forEach((n, i) => {
        const codes = days.map(d => H.getLeave(n.id, d) || H.getShift(n.id, d) || '-').join(' ');
        lines.push(`${i+1}. ${n.name}\n   ${codes}`);
      });
      lines.push('\n(* รหัสเวร: ช=เช้า บ=บ่าย ด=ดึก ชบ=เช้า+บ่าย ดบ=ดึก+บ่าย ชด=เช้า+ดึก O=หยุด V=ลา T=ลาป่วย)');
      return lines.join('\n');
    }
    if (mode === 'calendar') {
      const lines = ['🗓️ ปฏิทินปฏิบัติงาน'];
      days.forEach(d => {
        const groups = {};
        nurses.forEach(n => {
          const c = H.getShift(n.id, d);
          if (c && c !== 'O') (groups[c] = groups[c] || []).push(n.name.split(' ')[0]);
        });
        if (!Object.keys(groups).length) return;
        const dl = H.dayLabel(state.year, state.month, d);
        const ho = H.isHoliday(state.year, state.month, d);
        const tag = ho ? ' 🚩' : '';
        const parts = Object.keys(groups).sort().map(c => `[${c}] ${groups[c].join(', ')}`);
        lines.push(`📅 ${d} (${dl})${tag}\n   ${parts.join(' · ')}`);
      });
      return lines.join('\n');
    }
    if (mode === 'daily') {
      let lines = [];
      days.forEach(d => {
        const groups = {};
        nurses.forEach(n => {
          const c = H.getShift(n.id, d);
          if (c && c !== 'O') (groups[c] = groups[c] || []).push(n.name.split(' ')[0]);
        });
        const codes = Object.keys(groups).sort();
        if (!codes.length) return;
        const dl = H.dayLabel(state.year, state.month, d);
        lines.push(`📅 ${d}(${dl}): ` + codes.map(c => `[${c}] ${groups[c].join(',')}`).join(' · '));
      });
      return lines.join('\n');
    }
    if (mode === 'summary') {
      return nurses.map((n, i) => {
        const st = H.computeNurseStats(n.id);
        const parts = [];
        if (st.chTotal) parts.push(`ช${st.chTotal}`);
        if (st.baTotal) parts.push(`บ${st.baTotal}`);
        if (st.duTotal) parts.push(`ด${st.duTotal}`);
        if (st['เย็น']) parts.push(`เย็น${st['เย็น']}`);
        if (st['OT']) parts.push(`OT${st['OT']}`);
        return `${i+1}. ${n.name} — ${parts.join(' ')} (รวม ${st.total||0})`;
      }).join('\n');
    }
    return nurses.map((n, i) => {
      const items = [];
      days.forEach(d => {
        const c = H.getShift(n.id, d) || H.getLeave(n.id, d);
        if (c && c !== 'O') items.push(`${d}/${c}`);
      });
      return items.length ? `👤 ${i+1}. ${n.name}: ${items.join(', ')}` : '';
    }).filter(Boolean).join('\n');
  }

  function previewTgText() {
    const text = buildTgMessage();
    Swal.fire({
      title: '👁️ พรีวิวข้อความ Telegram',
      html: `<textarea readonly style="width:100%;height:300px;font-family:monospace;font-size:11px;padding:10px;background:#0f172a;color:#67e8f9;border-radius:8px;border:1px solid #334155;resize:none;line-height:1.6;">${helpers().esc(text)}</textarea>
        <div class="text-left text-[10.5px] text-slate-400 mt-2">📏 ${text.length} ตัวอักษร ${text.length > 4096 ? '<b class="text-rose-500">(เกิน 4096 — จะถูกตัด)</b>' : text.length > 1024 ? '<b class="text-amber-500">(เกิน 1024 — จะส่งภาพ+ข้อความแยกกัน)</b>' : ''}</div>`,
      width: '40rem',
      confirmButtonText: 'ปิด',
    });
  }

  async function copyTgText() {
    const H = helpers();
    try {
      await navigator.clipboard.writeText(buildTgMessage());
      H.showSuccess('คัดลอกข้อความแล้ว');
    } catch {
      H.showError('คัดลอกไม่สำเร็จ');
    }
  }

  function openTgDestinations() {
    const tg = state.appSettings?.telegram || {};
    const targets = tg.chatTargets || [];
    const rows = (id) => targets.map((t, i) => `
      <div class="flex gap-1.5 mb-1.5 items-center">
        <input type="text" data-i="${i}" class="tg-lbl flex-1 px-2 py-1 border border-slate-300 rounded text-xs" placeholder="ชื่อกลุ่ม" value="${escAttr(t.label||'')}">
        <input type="text" data-i="${i}" class="tg-id w-32 px-2 py-1 border border-slate-300 rounded text-xs font-mono" placeholder="Chat ID" value="${escAttr(t.id||'')}">
        <button class="tg-del text-rose-500 hover:bg-rose-50 rounded px-2 py-1" data-i="${i}">✕</button>
      </div>`).join('');
    Swal.fire({
      title: '📡 จัดการปลายทาง Telegram',
      html: `<div id="tgDestList" class="text-left max-h-72 overflow-y-auto">${rows()}</div>
        <button id="tgAddRow" class="w-full mt-2 px-3 py-1.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 rounded text-xs font-bold">+ เพิ่มปลายทาง</button>
        <div class="text-left text-[10px] text-slate-400 mt-3 leading-relaxed">
          💡 Chat ID สามารถดูได้จาก @userinfobot หรือเพิ่ม Bot เข้ากลุ่มแล้วเช็คผ่าน <code>getUpdates</code><br>
          📌 รองรับ User Chat (ตัวเลขบวก) และ Group/Channel (ขึ้นต้นด้วย -)
        </div>`,
      width: '38rem',
      showCancelButton: true,
      confirmButtonText: 'บันทึก',
      cancelButtonText: 'ยกเลิก',
      didOpen: () => {
        const list = document.getElementById('tgDestList');
        document.getElementById('tgAddRow').onclick = () => {
          const idx = list.querySelectorAll('.tg-lbl').length;
          const div = document.createElement('div');
          div.className = 'flex gap-1.5 mb-1.5 items-center';
          div.innerHTML = `<input type="text" data-i="${idx}" class="tg-lbl flex-1 px-2 py-1 border border-slate-300 rounded text-xs" placeholder="ชื่อกลุ่ม">
            <input type="text" data-i="${idx}" class="tg-id w-32 px-2 py-1 border border-slate-300 rounded text-xs font-mono" placeholder="Chat ID">
            <button class="tg-del text-rose-500 hover:bg-rose-50 rounded px-2 py-1">✕</button>`;
          div.querySelector('.tg-del').onclick = () => div.remove();
          list.appendChild(div);
        };
        list.addEventListener('click', e => {
          if (e.target.classList.contains('tg-del')) e.target.closest('div').remove();
        });
      },
      preConfirm: () => {
        const labels = Array.from(document.querySelectorAll('#tgDestList .tg-lbl'));
        const ids = Array.from(document.querySelectorAll('#tgDestList .tg-id'));
        const result = [];
        labels.forEach((l, i) => {
          const lbl = l.value.trim(); const id = (ids[i]?.value || '').trim();
          if (lbl && id) result.push({ label: lbl, id });
        });
        return result;
      }
    }).then(res => {
      if (res.isConfirmed) {
        if (!state.appSettings.telegram) state.appSettings.telegram = {};
        state.appSettings.telegram.chatTargets = res.value;
        window.NurseState?.markDirty?.();
        window.NurseState?.persistAll?.();
        renderDocOptions();
        helpers().showSuccess(`บันทึก ${res.value.length} ปลายทางแล้ว`);
      }
    });
  }

  function openTgTokenSetup() {
    const tg = state.appSettings?.telegram || {};
    Swal.fire({
      title: '🔑 ตั้งค่า Telegram Bot Token',
      html: `<input type="password" id="tgTokenInput" placeholder="123456:ABC-DEF..." value="${escAttr(tg.botToken||'')}" class="w-full px-3 py-2 border border-slate-300 rounded text-sm font-mono">
        <div class="text-left text-[10.5px] text-slate-500 mt-3 leading-relaxed">
          📖 <b>วิธีสร้าง Bot:</b><br>
          1. เปิดแชต <code>@BotFather</code> ใน Telegram<br>
          2. ส่ง <code>/newbot</code> → ตั้งชื่อ → รับ Token<br>
          3. คัดลอก Token มาวางในช่องด้านบน<br>
          4. เพิ่ม Bot เข้ากลุ่มที่ต้องการส่งข้อความ และให้สิทธิ์ส่งข้อความ
        </div>`,
      showCancelButton: true,
      confirmButtonText: 'บันทึก',
      cancelButtonText: 'ยกเลิก',
      preConfirm: () => document.getElementById('tgTokenInput').value.trim(),
    }).then(res => {
      if (res.isConfirmed && res.value) {
        if (!state.appSettings.telegram) state.appSettings.telegram = {};
        state.appSettings.telegram.botToken = res.value;
        window.NurseState?.markDirty?.();
        window.NurseState?.persistAll?.();
        renderDocOptions();
        helpers().showSuccess('บันทึก Token แล้ว');
      }
    });
  }

  // ========================================================
  // Preview rendering
  // ========================================================
  function refreshPreview() {
    if (!hub.initialized) return;
    const wrap = document.getElementById('phPreviewWrap');
    if (!wrap) return;
    const pages = renderPages();
    const f = hub.filter;
    const cls = `ph-page ${f.paper}-${f.orient}`;
    if (hub.activeDoc === 'telegram') {
      wrap.innerHTML = `<div style="transform:scale(${hub.zoom});transform-origin:top center;">${pages[0]}</div>`;
    } else {
      wrap.innerHTML = pages.map((p, i) => `
        <div class="${cls}" style="transform:scale(${hub.zoom});">
          ${p}
          <div class="ph-page-footer">หน้า ${i+1} / ${pages.length} — สร้างจากระบบจัดตารางเวรพยาบาล</div>
        </div>`).join('');
    }
    document.getElementById('phDocCount').textContent = `${pages.length} หน้า`;
    document.getElementById('phZoomVal').textContent = Math.round(hub.zoom * 100) + '%';
    if (window.lucide) lucide.createIcons();
    // Auto-fit tables that overflow page width
    requestAnimationFrame(() => autoFitTables(wrap));
  }

  function autoFitTables(wrap) {
    wrap.querySelectorAll('.ph-page').forEach(page => {
      const cs = getComputedStyle(page);
      const usable = page.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      page.querySelectorAll('table.ph-table, .ph-cal').forEach(tbl => {
        tbl.style.transformOrigin = 'top left';
        tbl.style.transform = '';
        const tw = tbl.scrollWidth;
        if (tw > usable) {
          const scale = usable / tw;
          tbl.style.transform = `scale(${scale})`;
          tbl.style.width = (100 / scale) + '%';
          tbl.style.marginBottom = `${(tbl.offsetHeight * (1 - scale)) - 20}px`;
        }
      });
    });
  }

  function zoom(delta, reset) {
    if (reset) hub.zoom = 1;
    else hub.zoom = Math.max(0.3, Math.min(2, hub.zoom + delta));
    refreshPreview();
  }

  // ========================================================
  // Exporters
  // ========================================================
  function printDoc() {
    const target = document.getElementById('phPrintTarget');
    if (!target) return;
    const pages = renderPages();
    const cls = `ph-page ${hub.filter.paper}-${hub.filter.orient}`;
    target.innerHTML = pages.map(p => `<div class="${cls}">${p}</div>`).join('');
    target.classList.remove('hidden');
    document.body.classList.add('ph-printing');
    if (hub.filter.orient === 'portrait') document.body.classList.add('ph-portrait');
    setTimeout(() => {
      window.print();
      setTimeout(() => {
        document.body.classList.remove('ph-printing','ph-portrait');
        target.classList.add('hidden');
        target.innerHTML = '';
      }, 200);
    }, 100);
  }

  async function exportPDF() {
    const H = helpers();
    H.showLoading('กำลังสร้าง PDF...');
    await new Promise(r => setTimeout(r, 50));
    try {
      const { jsPDF } = window.jspdf;
      const pages = renderPages();
      const f = hub.filter;
      const orient = f.orient;
      const paper = f.paper.toLowerCase();
      const pdf = new jsPDF({ orientation: orient, unit: 'mm', format: paper });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const margin = 6;

      // Render each page off-screen with html2canvas
      const sandbox = document.createElement('div');
      sandbox.style.cssText = 'position:absolute;left:-10000px;top:0;background:#fff;';
      document.body.appendChild(sandbox);

      for (let i = 0; i < pages.length; i++) {
        sandbox.innerHTML = `<div class="ph-page ${f.paper}-${f.orient}" style="margin:0;">${pages[i]}</div>`;
        const node = sandbox.firstElementChild;
        const canvas = await html2canvas(node, { scale: 2, backgroundColor: '#ffffff', useCORS: true });
        const imgData = canvas.toDataURL('image/jpeg', 0.92);
        if (i > 0) pdf.addPage(paper, orient);
        const maxW = pageW - margin * 2;
        const maxH = pageH - margin * 2;
        let w = maxW;
        let h = (canvas.height / canvas.width) * w;
        if (h > maxH) { h = maxH; w = (canvas.width / canvas.height) * h; }
        const x = margin + (maxW - w) / 2;
        const y = margin + (maxH - h) / 2;
        pdf.addImage(imgData, 'JPEG', x, y, w, h);
      }
      document.body.removeChild(sandbox);
      const fname = `${docFileName()}.pdf`;
      pdf.save(fname);
      Swal.close();
      H.showSuccess('ดาวน์โหลด PDF แล้ว');
    } catch (e) {
      console.error(e);
      Swal.close();
      H.showError('สร้าง PDF ไม่สำเร็จ');
    }
  }

  function docFileName() {
    const titleMap = {
      master: 'ตารางเวรประจำเดือน',
      individual: 'ตารางเวรรายบุคคล',
      calendar: 'ปฏิทินปฏิบัติงาน',
      memo: 'บันทึกข้อความ',
      ot: 'รายงาน_OT',
      leave: 'สรุปวันลา',
      signin: 'ใบลงเวลา',
      stats: 'สถิติภาระงาน',
      telegram: 'Telegram_Infographic',
    };
    return `${titleMap[hub.activeDoc] || 'เอกสาร'}_${THAI_MONTHS[state.month-1]}_${state.year}`;
  }

  // ----- XLSX export with styling (when xlsx-js-style isn't available, fall back to plain) -----
  function exportXLSX() {
    const H = helpers();
    try {
      const wb = XLSX.utils.book_new();
      const sheets = buildXLSXSheets();
      sheets.forEach(({ name, aoa, merges, cols, freeze }) => {
        const ws = XLSX.utils.aoa_to_sheet(aoa);
        if (merges) ws['!merges'] = merges;
        if (cols) ws['!cols'] = cols;
        if (freeze) ws['!freeze'] = freeze;
        applyBasicStyles(ws, aoa);
        XLSX.utils.book_append_sheet(wb, ws, name.substring(0, 31));
      });
      XLSX.writeFile(wb, `${docFileName()}.xlsx`);
      H.showSuccess('ดาวน์โหลด Excel แล้ว');
    } catch (e) {
      console.error(e);
      H.showError('ส่งออก Excel ไม่สำเร็จ');
    }
  }

  function applyBasicStyles(ws, aoa) {
    // XLSX community edition has limited styling — set column widths only.
    // For deeper styling users should upgrade to xlsx-js-style.
  }

  function buildXLSXSheets() {
    const H = helpers();
    const doc = hub.activeDoc;
    const monthName = THAI_MONTHS[state.month-1];
    const yr = state.year;
    const org = state.appSettings?.orgName || '';

    if (doc === 'master' || doc === 'stats') {
      const days = getFilteredDays();
      const nurses = getFilteredNurses();
      const cols = statCols();
      const aoa = [];
      aoa.push([`${doc === 'master' ? 'ตารางการปฏิบัติงาน' : 'สรุปสถิติภาระงาน'} ${org}`]);
      aoa.push([`ประจำเดือน${monthName} พ.ศ. ${yr}`]);
      aoa.push([]);
      const h1 = ['ที่','ชื่อ-นามสกุล','ตำแหน่ง', ...(doc==='master' ? days.map(String) : []), ...cols];
      aoa.push(h1);
      if (doc === 'master') aoa.push(['','','', ...days.map(d => H.dayLabel(yr, state.month, d)), ...cols.map(() => '')]);
      nurses.forEach((n, i) => {
        const st = H.computeNurseStats(n.id);
        const row = [i+1, n.name, n.position||''];
        if (doc === 'master') days.forEach(d => row.push(H.getLeave(n.id, d) || H.getShift(n.id, d) || ''));
        cols.forEach(c => row.push(getStatValue(st, c) || ''));
        aoa.push(row);
      });
      const totalCols = 3 + (doc==='master' ? days.length : 0) + cols.length;
      return [{
        name: doc === 'master' ? 'ตารางเวร' : 'สถิติ',
        aoa,
        merges: [
          { s: { r: 0, c: 0 }, e: { r: 0, c: totalCols - 1 } },
          { s: { r: 1, c: 0 }, e: { r: 1, c: totalCols - 1 } },
        ],
        cols: [{wch:5},{wch:28},{wch:18}, ...Array(totalCols-3).fill({wch:5})],
        freeze: { xSplit: 3, ySplit: 5 },
      }];
    }

    if (doc === 'individual') {
      // One sheet per nurse
      const days = getFilteredDays();
      const nurses = getFilteredNurses();
      return nurses.map(n => {
        const aoa = [];
        aoa.push([`ตารางปฏิบัติงานรายบุคคล — ${n.name}`]);
        aoa.push([`${n.position || ''} | ${monthName} พ.ศ. ${yr}`]);
        aoa.push([]);
        aoa.push(['วันที่','วัน','เวร','หมายเหตุ']);
        days.forEach(d => {
          const s = H.getShift(n.id, d);
          const l = H.getLeave(n.id, d);
          const ho = H.isHoliday && H.isHoliday(yr, state.month, d);
          aoa.push([d, H.dayLabel(yr, state.month, d), l || s || '-', ho ? (H.holidayName?.(yr, state.month, d) || 'วันหยุด') : (l ? 'ลา' : '')]);
        });
        return { name: n.name, aoa, cols: [{wch:8},{wch:8},{wch:10},{wch:30}] };
      });
    }

    if (doc === 'ot') {
      const ot = window.NurseOT?.computeOT?.();
      const aoa = [[`รายงาน OT ${monthName} ${yr}`], [org], []];
      const mode = state.appSettings?.shiftMode || 1;
      let headers;
      if (mode === 2) headers = ['ที่','ชื่อ-นามสกุล','ตำแหน่ง','เวรเย็น','OT วันหยุด','รวม','จำนวนเงิน'];
      else if (mode === 3) headers = ['ที่','ชื่อ-นามสกุล','ตำแหน่ง','D12','N12','รวม','OT','จำนวนเงิน'];
      else headers = ['ที่','ชื่อ-นามสกุล','ตำแหน่ง','ช','บ','ด','ชบ','ดบ','ชด','รวม','OT','จำนวนเงิน'];
      aoa.push(headers);
      let totalAmt = 0;
      (ot?.rows || []).forEach((r, i) => {
        const row = mode===2 ? [i+1, r.name, r.position||'', r.eveningCount||0, r.otCount||0, r.totalUnits||0, r.amount||0]
                   : mode===3 ? [i+1, r.name, r.position||'', r.d12||0, r.n12||0, r.totalUnits||0, r.otUnits>0?Math.round(r.otUnits):0, r.amount||0]
                   : [i+1, r.name, r.position||'', r.ch||0, r.ba||0, r.du||0, r.chba||0, r.duba||0, r.dn||0, r.totalUnits||0, r.otUnits>0?Math.round(r.otUnits):0, r.amount||0];
        aoa.push(row);
        totalAmt += (r.amount||0);
      });
      aoa.push([]);
      aoa.push([...Array(headers.length-2).fill(''), 'รวมทั้งสิ้น', totalAmt]);
      return [{ name: 'OT', aoa, cols: [{wch:5},{wch:28},{wch:18}, ...Array(headers.length-3).fill({wch:10})] }];
    }

    if (doc === 'leave') {
      const days = getFilteredDays();
      const nurses = getFilteredNurses();
      const aoa = [[`สรุปวันลา ${monthName} ${yr}`], [], ['ที่','ชื่อ-นามสกุล','ตำแหน่ง','ลา','ลาป่วย','หยุด','รายละเอียด']];
      nurses.forEach((n, i) => {
        let v=[], t=[], o=[];
        days.forEach(d => {
          const l = H.getLeave(n.id, d); const s = H.getShift(n.id, d);
          if (l==='V') v.push(d); else if (l==='T') t.push(d); else if (s==='O') o.push(d);
        });
        aoa.push([i+1, n.name, n.position||'', v.length, t.length, o.length, `ลา:${v.join(',')||'-'} ป่วย:${t.join(',')||'-'} หยุด:${o.join(',')||'-'}`]);
      });
      return [{ name: 'วันลา', aoa, cols: [{wch:5},{wch:28},{wch:18},{wch:8},{wch:10},{wch:8},{wch:40}] }];
    }

    if (doc === 'signin') {
      const days = getFilteredDays();
      const nurses = getFilteredNurses();
      const aoa = [[`ใบลงเวลา ${monthName} ${yr}`], [], ['วันที่','วัน','ที่','ชื่อ-นามสกุล','เวร','เวลาเข้า','เวลาออก','ลายเซ็น']];
      days.forEach(d => {
        const onDuty = nurses.map(n => ({n, code: H.getShift(n.id, d)})).filter(x => x.code && x.code !== 'O');
        onDuty.forEach((x, i) => {
          aoa.push([d, H.dayLabel(yr, state.month, d), i+1, x.n.name, x.code, '', '', '']);
        });
      });
      return [{ name: 'ใบลงเวลา', aoa, cols: [{wch:8},{wch:8},{wch:5},{wch:28},{wch:8},{wch:10},{wch:10},{wch:20}] }];
    }

    if (doc === 'calendar') {
      // Convert calendar to AoA — 7 cols per week
      const firstDay = new Date(yr, state.month-1, 1).getDay();
      const days = H.daysInMonth(yr, state.month);
      const aoa = [[`ปฏิทิน ${monthName} ${yr}`], [], ['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.']];
      let week = Array(firstDay).fill('');
      const nurses = getFilteredNurses();
      for (let d = 1; d <= days; d++) {
        const groups = {};
        nurses.forEach(n => { const c = H.getShift(n.id, d); if (c) (groups[c]=groups[c]||[]).push(n.name); });
        const cell = `${d}\n` + Object.entries(groups).map(([c, ns]) => `${c}: ${ns.map(x => x.split(' ')[0]).join(',')}`).join('\n');
        week.push(cell);
        if (week.length === 7) { aoa.push(week); week = []; }
      }
      if (week.length) { while (week.length < 7) week.push(''); aoa.push(week); }
      return [{ name: 'ปฏิทิน', aoa, cols: Array(7).fill({wch:25}) }];
    }

    if (doc === 'memo') {
      return [{ name: 'บันทึก', aoa: [['บันทึกข้อความ — โปรดดาวน์โหลดเป็น PDF เพื่อความสมบูรณ์ของฟอร์ม']] }];
    }

    return [{ name: 'Sheet1', aoa: [['—']] }];
  }

  function exportCSV() {
    const H = helpers();
    try {
      const sheets = buildXLSXSheets();
      const aoa = sheets[0].aoa;
      const csv = aoa.map(row => row.map(cell => {
        const s = String(cell ?? '').replace(/"/g, '""');
        return /[,"\n]/.test(s) ? `"${s}"` : s;
      }).join(',')).join('\r\n');
      const BOM = '﻿';
      const blob = new Blob([BOM + csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = `${docFileName()}.csv`;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      URL.revokeObjectURL(url);
      H.showSuccess('ดาวน์โหลด CSV แล้ว');
    } catch (e) {
      console.error(e);
      H.showError('ส่งออก CSV ไม่สำเร็จ');
    }
  }

  async function exportPNG() {
    const H = helpers();
    H.showLoading('กำลังสร้างภาพ...');
    await new Promise(r => setTimeout(r, 50));
    try {
      const pages = renderPages();
      const f = hub.filter;
      const sandbox = document.createElement('div');
      sandbox.style.cssText = 'position:absolute;left:-10000px;top:0;background:#fff;';
      document.body.appendChild(sandbox);
      sandbox.innerHTML = `<div class="ph-page ${f.paper}-${f.orient}" style="margin:0;">${pages[0]}</div>`;
      const canvas = await html2canvas(sandbox.firstElementChild, { scale: 2.5, backgroundColor: '#fff' });
      document.body.removeChild(sandbox);
      const a = document.createElement('a');
      a.href = canvas.toDataURL('image/png');
      a.download = `${docFileName()}.png`;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      Swal.close();
      H.showSuccess('ดาวน์โหลด PNG แล้ว');
    } catch (e) {
      console.error(e);
      Swal.close();
      H.showError('สร้างภาพไม่สำเร็จ');
    }
  }

  // ========================================================
  // Nurse selector modal
  // ========================================================
  function openNurseSelector() {
    const allNurses = state.nurses.filter(n => hub.filter.incInactive || n.active !== false)
      .sort((a,b) => (a.order||999) - (b.order||999));
    const selected = new Set(hub.filter.nurseIds || allNurses.map(n => n.id));
    const rows = allNurses.map(n => `
      <label class="ph-nurse-row">
        <input type="checkbox" data-id="${escAttr(n.id)}" ${selected.has(n.id)?'checked':''} class="w-4 h-4 accent-emerald-600">
        <span class="text-sm">${escHtml(n.name)} <span class="text-xs text-slate-400">— ${escHtml(n.position||'')}</span></span>
      </label>`).join('');
    Swal.fire({
      title: 'เลือกบุคลากร',
      html: `
        <div class="text-left mb-2 flex gap-2">
          <button id="phSelAll" class="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded font-bold">เลือกทั้งหมด</button>
          <button id="phSelNone" class="text-xs px-2 py-1 bg-rose-100 text-rose-700 rounded font-bold">ไม่เลือก</button>
        </div>
        <div class="ph-nurse-modal text-left">${rows}</div>`,
      showCancelButton: true,
      confirmButtonText: 'นำไปใช้',
      cancelButtonText: 'ยกเลิก',
      didOpen: () => {
        document.getElementById('phSelAll').onclick = () => document.querySelectorAll('.ph-nurse-modal input').forEach(i => i.checked = true);
        document.getElementById('phSelNone').onclick = () => document.querySelectorAll('.ph-nurse-modal input').forEach(i => i.checked = false);
      },
      preConfirm: () => {
        return Array.from(document.querySelectorAll('.ph-nurse-modal input:checked')).map(i => i.dataset.id);
      }
    }).then(res => {
      if (res.isConfirmed) {
        const ids = res.value;
        if (ids.length === allNurses.length) {
          hub.filter.nurseIds = null;
          document.getElementById('phNurseSelLabel').textContent = 'ทั้งหมด';
        } else {
          hub.filter.nurseIds = ids;
          document.getElementById('phNurseSelLabel').textContent = `เลือก ${ids.length} คน`;
        }
        refreshPreview();
      }
    });
  }

  // ========================================================
  // Expose
  // ========================================================
  window.NursePrintHub = {
    init, onActivate, refreshPreview, zoom,
    printDoc, exportPDF, exportXLSX, exportCSV, exportPNG,
    openNurseSelector,
    // Telegram
    setTgTheme, setTgMode, setTgCaption, setTgSendImage,
    sendTelegram, downloadTgImage, previewTgText, copyTgText,
    openTgDestinations, openTgTokenSetup,
  };

  // Auto-init when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 200);
  }
})();


/* ==================== settings.js ==================== */
// Settings panel: org info, backup/restore, custom holidays, scheduler tuning,
// display options, autosave interval, shift mode.

(function () {
  const { SHIFT_MODES } = window.NurseConst;
  const { state, persistAll, markDirty, invalidateStats, sanitizeAppSettings } = window.NurseState;
  const { showLoading, showSuccess, showError, confirmAct } = window.NurseUI;

  // ========= SETTINGS NAVIGATION =========
  // Map every panel ID to one of four categories used by the sub-nav tabs.
  const PANEL_CAT = {
    // ทั่วไป — basics and presentation
    panelSettMode:        'general',
    panelSettOrg:         'general',
    panelSettDisplay:     'general',
    panelSettAutosave:    'general',
    panelSettEntTheme:    'general',
    // จัดเวร & AI
    panelSettAuto:        'schedule',
    panelSettHardRules:   'schedule',
    panelSettHolidays:    'schedule',
    panelSettMode2OT:     'schedule',
    panelSettEntAiRule:   'schedule',
    panelSettEntAiWeights:'schedule',
    // ข้อมูล & แจ้งเตือน
    panelSettDataDashboard:'data',
    panelSettBackup:      'data',
    panelSettNotify:      'data',
    panelSettEntLine:     'data', // redirect card only
    panelSettEntIcal:     'data',
    panelSettEntSnapshots:'data',
    panelSettEntCalSync:  'data',
    // ขั้นสูง / Enterprise
    panelSettEntLock:     'enterprise',
    panelSettEntBudget:   'enterprise',
    panelSettEntMultiWard:'enterprise',
    panelSettEntAnalytics:'enterprise',
    // 🆕 v3.0 additions
    panelSettLogo:        'general',
    panelSettPrint:       'general',
    panelSettA11y:        'general',
    panelSettDailyReq:    'schedule',
    panelSettShortcuts:   'schedule',
    panelSettThaiHol:     'schedule',
    panelSettCustomShifts:'schedule',
    panelSettStorage:     'data',
    panelSettAnon:        'data'
  };

  // Display order within each category — lower number = appears first.
  // Logical ordering aligned with setup workflow.
  const PANEL_ORDER = {
    // ทั่วไป: foundational → identity → look → technical
    panelSettMode:        10,
    panelSettOrg:         20,
    panelSettLogo:        30,
    panelSettDisplay:     40,
    panelSettPrint:       50,
    panelSettEntTheme:    60,
    panelSettA11y:        70,
    panelSettAutosave:    80,
    // จัดเวร: core rules → AI tuning → mode-specific → daily → calendar → custom → reference
    panelSettAuto:        10,
    panelSettHardRules:   15,
    panelSettEntAiRule:   20,
    panelSettEntAiWeights:30,
    panelSettMode2OT:     40,
    panelSettDailyReq:    50,
    panelSettHolidays:    60,
    panelSettThaiHol:     70,
    panelSettCustomShifts:80,
    panelSettShortcuts:   90,
    // ข้อมูล: dashboard first → backup next → storage health → snapshots → notify
    panelSettDataDashboard:5,
    panelSettBackup:      10,
    panelSettStorage:     20,
    panelSettEntSnapshots:30,
    panelSettNotify:      40,
    panelSettEntLine:     50,
    panelSettEntIcal:     60,
    panelSettEntCalSync:  70,
    panelSettAnon:        80,
    // Enterprise: security → org → finance → analytics
    panelSettEntLock:     10,
    panelSettEntMultiWard:20,
    panelSettEntBudget:   30,
    panelSettEntAnalytics:40
  };
  const SETTING_CATEGORIES = ['general', 'schedule', 'data', 'enterprise'];
  let _activeSettCat = 'general';
  let _settNavWired = false;

  function _settingsPanels() {
    const root = document.getElementById('tab-settings');
    const grid = root?.querySelector('.settings-panel-grid');
    if (!grid) return [];
    return Array.from(grid.children).filter(panel => panel.id && panel.id !== 'panelSettEntHeader');
  }

  function _syncSettingsNavigation() {
    const panels = _settingsPanels();
    const grid = document.querySelector('#tab-settings .settings-panel-grid');
    const sortedPanels = [...panels].sort((a, b) => {
      const catA = PANEL_CAT[a.id] || 'general';
      const catB = PANEL_CAT[b.id] || 'general';
      const catIndexA = SETTING_CATEGORIES.indexOf(catA);
      const catIndexB = SETTING_CATEGORIES.indexOf(catB);
      const safeCatIndexA = catIndexA >= 0 ? catIndexA : 0;
      const safeCatIndexB = catIndexB >= 0 ? catIndexB : 0;
      return (safeCatIndexA - safeCatIndexB) || ((PANEL_ORDER[a.id] || 500) - (PANEL_ORDER[b.id] || 500));
    });

    sortedPanels.forEach(panel => {
      const cat = PANEL_CAT[panel.id] || 'general';
      const catIndex = SETTING_CATEGORIES.indexOf(cat);
      const safeCatIndex = catIndex >= 0 ? catIndex : 0;
      panel.style.order = String((safeCatIndex + 1) * 1000 + (PANEL_ORDER[panel.id] || 500));
      panel.dataset.settingCat = cat;
      if (grid) grid.appendChild(panel);
    });

    const counts = sortedPanels.reduce((acc, panel) => {
      const cat = panel.dataset.settingCat || PANEL_CAT[panel.id] || 'general';
      acc[cat] = (acc[cat] || 0) + 1;
      return acc;
    }, {});

    document.querySelectorAll('#settNavBar .set-tab').forEach(btn => {
      const count = counts[btn.dataset.setCat] || 0;
      const badge = btn.querySelector('.set-tab-count');
      if (badge) badge.textContent = String(count);
    });
  }

  function _applySettingsFilter() {
    const root = document.getElementById('tab-settings');
    if (!root) return;
    const q = (document.getElementById('settSearch')?.value || '').trim().toLowerCase();
    const panels = _settingsPanels();
    let visible = 0;
    // Hide the legacy Enterprise header — replaced by the new sub-nav tabs
    const entHeader = document.getElementById('panelSettEntHeader');
    if (entHeader) entHeader.classList.add('settings-panel-hide');
    panels.forEach(panel => {
      const cat = panel.dataset.settingCat || PANEL_CAT[panel.id] || 'general';
      let show = (cat === _activeSettCat);
      if (q) {
        // Search across heading + label + paragraph text
        const text = panel.textContent.toLowerCase();
        show = text.includes(q); // search overrides category filter
      }
      panel.classList.toggle('settings-panel-hide', !show);
      if (show) visible++;
    });
    const noRes = document.getElementById('settNoResult');
    if (noRes) noRes.classList.toggle('hidden', visible > 0 || !q);
  }

  function _switchSettCat(cat) {
    _activeSettCat = cat;
    const search = document.getElementById('settSearch');
    if (search) search.value = '';
    document.querySelectorAll('#settNavBar .set-tab').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.setCat === cat);
    });
    _applySettingsFilter();
    // Scroll back to top of settings tab
    const section = document.getElementById('tab-settings');
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function _wireSettingsNav() {
    if (_settNavWired) return;
    _settNavWired = true;
    document.querySelectorAll('#settNavBar .set-tab').forEach(btn => {
      btn.addEventListener('click', () => _switchSettCat(btn.dataset.setCat));
    });
    const search = document.getElementById('settSearch');
    if (search) {
      let t = null;
      search.addEventListener('input', () => {
        clearTimeout(t);
        t = setTimeout(_applySettingsFilter, 120);
      });
    }

    // 🆕 Roster Hub search filter wiring
    const rosterSearch = document.getElementById('rosterSearchInput');
    if (rosterSearch) {
      let rt = null;
      rosterSearch.addEventListener('input', () => {
        clearTimeout(rt);
        rt = setTimeout(() => {
          renderRosterHub(rosterSearch.value);
        }, 120);
      });
    }

    // 🆕 Drag and Drop Dropzone wiring
    const dropzone = document.getElementById('backup-dropzone');
    const fileInput = document.getElementById('backupFileInput');
    if (dropzone && fileInput) {
      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, e => {
          e.preventDefault();
          e.stopPropagation();
        }, false);
      });

      ['dragenter', 'dragover'].forEach(eventName => {
        dropzone.addEventListener(eventName, () => {
          dropzone.classList.add('border-cyan-500', 'bg-cyan-50/30');
        }, false);
      });

      ['dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, () => {
          dropzone.classList.remove('border-cyan-500', 'bg-cyan-50/30');
        }, false);
      });

      dropzone.addEventListener('drop', e => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files.length > 0) {
          fileInput.files = files;
          handleDroppedBackupFile(files[0]);
        }
      });

      fileInput.addEventListener('change', e => {
        if (e.target.files.length > 0) {
          handleDroppedBackupFile(e.target.files[0]);
        }
      });
    }
  }

  // ========= RENDER =========
  function renderSettings() {
    _wireSettingsNav();
    _syncSettingsNavigation();
    _applySettingsFilter();
    const ap = state.appSettings;
    _v('settAppTitle', ap.appTitle || 'ระบบจัดตารางเวรพยาบาล');
    _v('settAppVersion', ap.appVersionLabel || 'v3.1.2 Enterprise Suite');
    _v('settCopyrightYear', ap.copyrightYear || '2026');
    _v('settOrgName', ap.orgName || '');
    _v('settDeveloperName', ap.developerName || '');
    _v('settDeveloperRole', ap.developerRole || '');
    _v('settDeveloperPhone', ap.developerPhone || '');
    _v('settDeveloperEmail', ap.developerEmail || '');
    _v('settDeveloperOrg', ap.developerOrg || '');
    _v('settSignerScheduler', ap.signers?.scheduler || '');
    _v('settSignerHead', ap.signers?.headNurse || '');
    _v('settSignerDirector', ap.signers?.director || '');
    _v('settYearFrom', ap.yearFrom || 2568);
    _v('settYearTo', ap.yearTo || 2575);
    _v('settConsecutive', ap.schedulerSettings?.consecutiveDaysThreshold || 4);
    const sel = document.getElementById('settAutosave');
    if (sel) sel.value = String(ap.autosaveMs || 2000);
    // default year for new holiday form = current schedule year
    _v('newHolYear', state.year);
    renderCustomHolidaysList();
    renderMode2Settings();
    renderShiftModeSelector();
    // 🆕 v3.0 new panels
    renderLogo();
    renderPrintDefaults();
    renderAccessibility();
    renderHardRules();
    renderDailyReq();
    renderShortcuts();
    renderStorage();
    renderAnonymize();
    renderCustomShifts();

    // --- ACCESS CONTROL SECURITY PANEL ---
    const isLocked = window.NurseState.isSystemLocked();
    const secureStatusEl = document.getElementById('secureStatusText');
    if (secureStatusEl) {
      if (ap.accessControl?.enabled) {
        secureStatusEl.innerHTML = isLocked
          ? `<span class="text-rose-600 font-bold flex items-center gap-1.5"><i data-lucide="lock" class="w-4 h-4"></i> ล็อกตารางเวร (จำกัดสิทธิ์แก้ไข)</span>`
          : `<span class="text-emerald-600 font-bold flex items-center gap-1.5"><i data-lucide="unlock" class="w-4 h-4"></i> ปลดล็อกชั่วคราว (สิทธิ์ผู้จัดทำตาราง)</span>`;
      } else {
        secureStatusEl.innerHTML = `<span class="text-slate-500 flex items-center gap-1.5"><i data-lucide="shield-off" class="w-4 h-4"></i> ยังไม่ได้เปิดระบบรักษาความปลอดภัย</span>`;
      }
    }

    // Toggle state inputs
    const btnEnableLock = document.getElementById('btnEnableLock');
    const btnDisableLock = document.getElementById('btnDisableLock');
    const btnLockSession = document.getElementById('btnLockSession');
    const btnUnlockSession = document.getElementById('btnUnlockSession');

    if (ap.accessControl?.enabled) {
      if (btnEnableLock) btnEnableLock.classList.add('hidden');
      if (btnDisableLock) btnDisableLock.classList.remove('hidden');
      if (isLocked) {
        if (btnLockSession) btnLockSession.classList.add('hidden');
        if (btnUnlockSession) btnUnlockSession.classList.remove('hidden');
      } else {
        if (btnLockSession) btnLockSession.classList.remove('hidden');
        if (btnUnlockSession) btnUnlockSession.classList.add('hidden');
      }
    } else {
      if (btnEnableLock) btnEnableLock.classList.remove('hidden');
      if (btnDisableLock) btnDisableLock.classList.add('hidden');
      if (btnLockSession) btnLockSession.classList.add('hidden');
      if (btnUnlockSession) btnUnlockSession.classList.add('hidden');
    }

    // --- AI SETTINGS VALUES ---
    const ai = ap.aiSettings || {};
    const chkNoEvToMo = document.getElementById('settAiNoEvToMo');
    if (chkNoEvToMo) chkNoEvToMo.checked = ai.noEveningToMorning !== false;
    const chkMaxTwo = document.getElementById('settAiMaxTwo');
    if (chkMaxTwo) chkMaxTwo.checked = ai.maxTwoConsecutiveCombined !== false;
    const chkFairWe = document.getElementById('settAiFairWe');
    if (chkFairWe) chkFairWe.checked = ai.fairWeekendDistribution !== false;

    _v('settConsecutivePremium', ai.consecutiveDaysThreshold || 4);

    const w = ai.weights || { noEveningToMorning: 80, fairWeekend: 70, consecutiveBigPenalty: 80 };
    _v('settAiWeightEvToMo', w.noEveningToMorning);
    _v('settAiWeightFairWe', w.fairWeekend);
    _v('settAiWeightConsec', w.consecutiveBigPenalty);

    const elEv = document.getElementById('settAiWeightEvToMoVal');
    if (elEv) elEv.textContent = w.noEveningToMorning + '%';
    const elWe = document.getElementById('settAiWeightFairWeVal');
    if (elWe) elWe.textContent = w.fairWeekend + '%';
    const elCo = document.getElementById('settAiWeightConsecVal');
    if (elCo) elCo.textContent = w.consecutiveBigPenalty + '%';

    // --- BUDGET ---
    _v('settBudgetCap', ap.budgetCap ?? 50000);

    // --- HOLIDAY RATES ---
    const hr = ap.holidayRates || { Pro: 1.5, Supp: 1.5 };
    _v('settRatePro', hr.Pro);
    _v('settRateSupp', hr.Supp);

    // --- LOGO URL ---
    _v('settLogoUrl', ap.customLogoUrl || '');

    // --- SYSTEM THEME SELECTOR ---
    const thSel = document.getElementById('settSystemTheme');
    if (thSel) thSel.value = ap.theme || 'royal-blue';

    renderWardsList();
    renderTimeMachine();
    renderBudgetAnalytics();
    updateNotificationPreview();

    // 🆕 v3.0 Data & Roster additions
    renderDataDashboard();
    renderShiftTimings();
    renderRosterHub();
    renderAutoBackupsTimeline();

    if (window.lucide) window.lucide.createIcons();
  }

  function _v(id, val) {
    const el = document.getElementById(id);
    if (el) el.value = val;
  }

  // ========= หมวด 1: ข้อมูลหน่วยงาน =========
  function saveOrgSettings() {
    const ap = state.appSettings;
    ap.appTitle = document.getElementById('settAppTitle')?.value.trim() || 'ระบบจัดตารางเวรพยาบาล';
    ap.appVersionLabel = document.getElementById('settAppVersion')?.value.trim() || '';
    ap.copyrightYear = document.getElementById('settCopyrightYear')?.value.trim() || '2026';
    const name = document.getElementById('settOrgName').value.trim();
    ap.orgName = name || 'วิทยาลัยพยาบาลศรีมหาสารคาม';
    ap.developerName = document.getElementById('settDeveloperName')?.value.trim() || '';
    ap.developerRole = document.getElementById('settDeveloperRole')?.value.trim() || '';
    ap.developerPhone = document.getElementById('settDeveloperPhone')?.value.trim() || '';
    ap.developerEmail = document.getElementById('settDeveloperEmail')?.value.trim() || '';
    ap.developerOrg = document.getElementById('settDeveloperOrg')?.value.trim() || '';
    ap.signers = {
      scheduler: document.getElementById('settSignerScheduler').value.trim(),
      headNurse: document.getElementById('settSignerHead').value.trim(),
      director: document.getElementById('settSignerDirector').value.trim()
    };

    // Instantly reflect branding changes across header, footer and help.
    window.applyBranding?.();

    markDirty(); persistAll();
    showSuccess('บันทึกข้อมูลหน่วยงานแล้ว');
  }

  // ========= หมวด 2: Backup & Restore =========
  function exportBackup() {
    const { THAI_MONTHS } = window.NurseConst;
    const data = {
      _backupVersion: 'v2.8.0',
      _exportedAt: new Date().toISOString(),
      year: state.year,
      month: state.month,
      nurses: state.nurses,
      schedule: state.schedule,
      lockedShifts: state.lockedShifts,
      leaves: state.leaves,
      requirements: state.requirements,
      otSettings: state.otSettings,
      treatHolidayAsWeekend: state.treatHolidayAsWeekend,
      appSettings: state.appSettings
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup_${THAI_MONTHS[state.month - 1]}_${state.year}_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showSuccess('ส่งออก backup แล้ว');
  }

  function importBackup() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        try {
          const raw = JSON.parse(ev.target.result);
          const cleaned = window.NurseState.validateLoadedState(raw);
          if (!cleaned) { showError('ไฟล์ไม่ถูกต้องหรือข้อมูลเสียหาย'); return; }
          
          // Safety rollback
          window.NurseState.takeAutoBackup("ก่อนนำเข้าไฟล์ข้อมูล JSON");

          Object.assign(state, cleaned);
          if (raw.appSettings) {
            Object.assign(state.appSettings, sanitizeAppSettings(raw.appSettings));
          }
          invalidateStats();
          persistAll();
          window.NurseRender.renderSchedule();
          window.NurseRender.renderLeaves();
          window.NurseRender.renderDashboard();
          window.NurseUI.initSelectors();
          window.NurseUI.loadReqToUI();
          window.NurseUI.loadOTToUI();
          renderSettings();
          showSuccess('นำเข้าข้อมูลสำเร็จ');
        } catch (err) {
          console.error(err);
          showError('อ่านไฟล์ไม่สำเร็จ — กรุณาตรวจสอบไฟล์');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  function factoryReset() {
    confirmAct('รีเซ็ตทั้งหมด?', 'จะลบรายชื่อพยาบาล ตารางเวร และการตั้งค่าทุกอย่าง (จะสร้างจุดเซฟตี้โรลแบ็กไว้ให้กู้คืนได้)').then(r => {
      if (!r.isConfirmed) return;
      
      // Safety rollback
      window.NurseState.takeAutoBackup("ก่อนทำการรีเซ็ตระบบทั้งหมด");

      const { DEFAULT_NURSES, DEFAULT_OT, DEFAULT_REQ, DEFAULT_APP_SETTINGS, STORAGE_KEY } = window.NurseConst;
      localStorage.removeItem(STORAGE_KEY);
      state.nurses = structuredClone(DEFAULT_NURSES);
      state.schedule = {};
      state.lockedShifts = {};
      state.leaves = {};
      state.requirements = structuredClone(DEFAULT_REQ);
      state.otSettings = structuredClone(DEFAULT_OT);
      state.appSettings = structuredClone(DEFAULT_APP_SETTINGS);
      state.warnings = [];
      state.dirty = false;
      invalidateStats();
      window.NurseHistory?.clearHistory?.();
      window.NurseRender.renderSchedule();
      window.NurseRender.renderLeaves();
      window.NurseRender.renderDashboard();
      window.NurseUI.initSelectors();
      window.NurseUI.loadReqToUI();
      window.NurseUI.loadOTToUI();
      renderSettings();
      persistAll();
      showSuccess('รีเซ็ตเรียบร้อยแล้ว');
    });
  }

  // ========= หมวด 3: วันหยุดกำหนดเอง =========
  function renderCustomHolidaysList() {
    const list = document.getElementById('customHolidaysList');
    if (!list) return;
    const customs = state.appSettings.customHolidays || [];
    if (customs.length === 0) {
      list.innerHTML = '<p class="text-sm text-slate-400 text-center py-4">ยังไม่มีวันหยุดกำหนดเอง</p>';
      return;
    }
    const { THAI_MONTHS } = window.NurseConst;
    const esc = window.NurseRender?.esc || (s => String(s).replaceAll('<', '&lt;').replaceAll('>', '&gt;'));
    const sorted = [...customs].sort((a, b) => a.yBE !== b.yBE ? a.yBE - b.yBE : a.m !== b.m ? a.m - b.m : a.d - b.d);
    list.innerHTML = sorted.map((h, i) => `
    <div class="flex items-center gap-3 p-2 rounded-lg border border-slate-200 bg-white">
      <span class="text-sm text-slate-500 min-w-[150px]">${h.d} ${THAI_MONTHS[h.m - 1]} ${h.yBE}</span>
      <span class="flex-1 text-sm font-medium text-slate-700">${esc(h.name)}</span>
      <button onclick="window.NurseSettings._removeHoliday(${i})" class="btn-solid btn-danger text-xs py-1">
        <i data-lucide="trash-2" class="w-3 h-3"></i> ลบ
      </button>
    </div>`).join('');
    lucide.createIcons();
  }

  function addCustomHoliday() {
    const yBE = Number(document.getElementById('newHolYear').value);
    const m = Number(document.getElementById('newHolMonth').value);
    const d = Number(document.getElementById('newHolDay').value);
    const name = document.getElementById('newHolName').value.trim();
    if (!name) { showError('กรอกชื่อวันหยุดด้วย'); return; }
    if (yBE < 2500 || yBE > 2700) { showError('ปีต้องอยู่ในช่วง 2500–2700'); return; }
    if (m < 1 || m > 12) { showError('เดือนต้องอยู่ในช่วง 1–12'); return; }
    if (d < 1 || d > 31) { showError('วันที่ต้องอยู่ในช่วง 1–31'); return; }
    const customs = state.appSettings.customHolidays;
    const exists = customs.find(h => h.yBE === yBE && h.m === m && h.d === d);
    if (exists) { exists.name = name; }
    else { customs.push({ yBE, m, d, name }); }
    markDirty(); persistAll();
    document.getElementById('newHolName').value = '';
    renderCustomHolidaysList();
    window.NurseRender?.renderSchedule();
    window.NurseRender?.renderLeaves();
    showSuccess('เพิ่มวันหยุดแล้ว');
  }

  function _removeHoliday(idx) {
    const customs = state.appSettings.customHolidays;
    if (idx < 0 || idx >= customs.length) return;
    customs.splice(idx, 1);
    markDirty(); persistAll();
    renderCustomHolidaysList();
    window.NurseRender?.renderSchedule();
    window.NurseRender?.renderLeaves();
    showSuccess('ลบวันหยุดแล้ว');
  }

  // ========= หมวด 4: การจัดเวรอัตโนมัติ =========
  function saveSchedulerSettings(opts = {}) {
    const th = Number(document.getElementById('settConsecutive').value);
    if (!Number.isFinite(th) || th < 2 || th > 14) { showError('ค่าต้องอยู่ในช่วง 2–14 วัน'); return false; }
    if (!state.appSettings.schedulerSettings) state.appSettings.schedulerSettings = {};
    state.appSettings.schedulerSettings.consecutiveDaysThreshold = th;
    markDirty(); persistAll();
    if (!opts.silent) showSuccess('บันทึกการตั้งค่าการจัดเวรแล้ว');
    return true;
  }

  function renderHardRules() {
    const hr = state.appSettings.hardRules || {};
    const setChecked = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.checked = !!val;
    };
    setChecked('hardAllowBaToDu', !!hr.allowSingleAfternoonToNightWhenShort);
    setChecked('hardForbidNightAfterOff', hr.forbidNightAfterOff !== false);
    setChecked('hardWarnAfternoonToNight', !!hr.warnOnlyAfternoonToNight);
    setChecked('hardWarnNightAfterOff', !!hr.warnOnlyNightAfterOff);
    setChecked('hardDisableDuba', hr.disableDubaShift !== false);
    _v('hardMaxWeeklyHours', Number(hr.maxWeeklyHours) || 48);
  }

  function saveHardRules(opts = {}) {
    const wh = Number(document.getElementById('hardMaxWeeklyHours')?.value);
    state.appSettings.hardRules = {
      allowSingleAfternoonToNightWhenShort: !!document.getElementById('hardAllowBaToDu')?.checked,
      forbidNightAfterOff: document.getElementById('hardForbidNightAfterOff')?.checked !== false,
      warnOnlyAfternoonToNight: !!document.getElementById('hardWarnAfternoonToNight')?.checked,
      warnOnlyNightAfterOff: !!document.getElementById('hardWarnNightAfterOff')?.checked,
      disableDubaShift: document.getElementById('hardDisableDuba')?.checked !== false,
      maxWeeklyHours: Number.isFinite(wh) && wh >= 8 && wh <= 96 ? wh : 48
    };
    markDirty(); persistAll();
    if (!opts.silent) showSuccess('บันทึก Hard Rules / Policy แล้ว');
    return true;
  }

  // ========= หมวด 5: การแสดงผล =========
  function saveDisplaySettings() {
    const yFrom = Number(document.getElementById('settYearFrom').value);
    const yTo = Number(document.getElementById('settYearTo').value);
    if (!Number.isFinite(yFrom) || yFrom < 2500 || yFrom > 2700) { showError('ปีเริ่มต้นไม่ถูกต้อง'); return; }
    if (!Number.isFinite(yTo) || yTo < yFrom || yTo > 2800) { showError('ปีสิ้นสุดต้องมากกว่าหรือเท่ากับปีเริ่มต้น'); return; }
    state.appSettings.yearFrom = yFrom;
    state.appSettings.yearTo = yTo;
    markDirty(); persistAll();
    window.NurseUI.initSelectors();
    showSuccess('บันทึกการแสดงผลแล้ว · ช่วงปีอัปเดตแล้ว');
  }

  // ========= หมวด 6: การบันทึกอัตโนมัติ =========
  function saveAutosaveSettings() {
    const ms = Number(document.getElementById('settAutosave').value);
    const valid = [1000, 2000, 5000, 10000, 30000];
    if (!valid.includes(ms)) { showError('ค่าไม่ถูกต้อง'); return; }
    state.appSettings.autosaveMs = ms;
    markDirty(); persistAll();
    showSuccess('บันทึกการตั้งค่า autosave แล้ว');
  }

  // ========= หมวด 7: โหมด 2 — จำนวนคนต่อเวรและอัตรา OT =========
  function renderMode2Settings() {
    const m2s = state.appSettings.mode2Settings || {};
    const m2ot = state.otSettings.mode2 || {};
    const sv = (id, v) => { const el = document.getElementById(id); if (el) el.value = v; };
    sv('m2EveningPro', m2s.eveningReq?.['วิชาชีพ'] ?? 1);
    sv('m2EveningSupp', m2s.eveningReq?.['สนับสนุน'] ?? 1);
    sv('m2OTPro', m2s.otReq?.['วิชาชีพ'] ?? 1);
    sv('m2OTSupp', m2s.otReq?.['สนับสนุน'] ?? 1);
    sv('m2PosPhysioEvening', m2ot.positionRates?.['นักกายภาพบำบัด']?.['เย็น'] ?? 300);
    sv('m2PosPhysioOT', m2ot.positionRates?.['นักกายภาพบำบัด']?.['OT'] ?? 1200);
    sv('m2PosDriverEvening', m2ot.positionRates?.['พนักงานขับรถ']?.['เย็น'] ?? 200);
    sv('m2PosDriverOT', m2ot.positionRates?.['พนักงานขับรถ']?.['OT'] ?? 800);
  }

  function saveMode2Settings() {
    const gn = (id, def, max = 999) => {
      const el = document.getElementById(id);
      if (!el) return def;
      const v = Number(el.value);
      return (Number.isFinite(v) && v >= 0 && v <= max) ? v : def;
    };
    if (!state.appSettings.mode2Settings) state.appSettings.mode2Settings = {};
    state.appSettings.mode2Settings.eveningReq = { 'วิชาชีพ': gn('m2EveningPro', 1, 20), 'สนับสนุน': gn('m2EveningSupp', 1, 20) };
    state.appSettings.mode2Settings.otReq = { 'วิชาชีพ': gn('m2OTPro', 1, 20), 'สนับสนุน': gn('m2OTSupp', 1, 20) };
    if (!state.otSettings.mode2) state.otSettings.mode2 = { trackRates: { 'วิชาชีพ': {}, 'สนับสนุน': {} }, positionRates: {} };
    if (!state.otSettings.mode2.positionRates) state.otSettings.mode2.positionRates = {};
    const pr = state.otSettings.mode2.positionRates;
    if (!pr['นักกายภาพบำบัด']) pr['นักกายภาพบำบัด'] = {};
    if (!pr['พนักงานขับรถ']) pr['พนักงานขับรถ'] = {};
    pr['นักกายภาพบำบัด']['เย็น'] = gn('m2PosPhysioEvening', 300);
    pr['นักกายภาพบำบัด']['OT'] = gn('m2PosPhysioOT', 1200);
    pr['พนักงานขับรถ']['เย็น'] = gn('m2PosDriverEvening', 200);
    pr['พนักงานขับรถ']['OT'] = gn('m2PosDriverOT', 800);
    markDirty(); persistAll();
    showSuccess('บันทึกการตั้งค่า โหมด 2 แล้ว');
  }

  // ========= หมวด 8: โหมดการทำงาน =========
  function renderShiftModeSelector() {
    const sel = document.getElementById('settShiftMode');
    if (sel) sel.value = String(state.appSettings.shiftMode || 1);
    _updateShiftModeDesc();
  }

  function _updateShiftModeDesc() {
    const sel = document.getElementById('settShiftMode');
    const desc = document.getElementById('shiftModeDesc');
    if (!sel || !desc) return;
    const mode = Number(sel.value);
    const descs = {
      1: 'เวรเช้า (ช), บ่าย (บ), ดึก (ด), โย้หน้า (ชบ), โย้หลัง (ดบ), เช้าดึก (ชด) — ระบบจัดเวรอัตโนมัติตามอัตรากำลัง',
      2: 'เวรเช้า (ช) ทุกวันทำการ, เวรเย็น (เย็น) 16:30–18:30, OT วันหยุด — วันหยุดปล่อยว่างสำหรับ admin',
      3: 'เวร 12 ชม. กลางวัน D12 (08:00–20:00) และกลางคืน N12 (20:00–08:00) — หมุนเวียน D12-D12-N12-N12-O-O'
    };
    desc.textContent = descs[mode] || '';
  }

  // Default requirements per mode
  const MODE_DEFAULT_REQ = {
    1: { weekday: { ch: 4, ba: 3, du: 3 }, weekend: { ch: 4, ba: 3, du: 3 } },
    2: { weekday: { ch: 1, ba: 0, du: 0 }, weekend: { ch: 0, ba: 0, du: 0 } },
    3: { weekday: { ch: 1, ba: 1, du: 0 }, weekend: { ch: 1, ba: 1, du: 0 } }
  };

  function saveShiftMode() {
    const newMode = Number(document.getElementById('settShiftMode').value);
    if (![1, 2, 3].includes(newMode)) { showError('โหมดไม่ถูกต้อง'); return; }
    const oldMode = state.appSettings.shiftMode || 1;
    if (newMode === oldMode) { showSuccess('โหมดเดิม ไม่มีการเปลี่ยนแปลง'); return; }
    confirmAct(`เปลี่ยนเป็น ${SHIFT_MODES[newMode].name}?`, 'การเปลี่ยนโหมดจะล้างตารางเวรเดือนนี้ (วันลายังคงอยู่)\nกด Undo เพื่อย้อนกลับได้').then(r => {
      if (!r.isConfirmed) return;
      window.NurseHistory?.pushHistory?.();
      state.appSettings.shiftMode = newMode;

      // Reset requirements to mode-appropriate defaults
      const defReq = MODE_DEFAULT_REQ[newMode] || MODE_DEFAULT_REQ[1];
      state.requirements = structuredClone(defReq);

      const prefix = `-${state.year}-${state.month}-`;
      for (const key in state.schedule) {
        if (key.includes(prefix)) delete state.schedule[key];
      }
      for (const key in state.lockedShifts) {
        if (key.includes(prefix)) delete state.lockedShifts[key];
      }
      state.selectedShift = null;
      invalidateStats();
      markDirty(); persistAll();

      // Sync all UI panels
      window.NurseUI.loadReqToUI();
      window.NurseUI.renderShiftPalette();
      window.NurseUI.updateOTRateVisibility();
      _updateReqFieldsVisibility(newMode);
      window.NurseRender.renderSchedule();
      window.NurseRender.renderLeaves();
      window.NurseRender.renderDashboard();
      window.NurseRender.renderSummary();
      showSuccess(`เปลี่ยนเป็น ${SHIFT_MODES[newMode].name} แล้ว`);
    });
  }

  // Hide/show บ and ด requirement inputs in the sub-header based on mode
  function _updateReqFieldsVisibility(mode) {
    const idsBa = ['reqWdBa', 'reqWeBa'];
    const idsDu = ['reqWdDu', 'reqWeDu'];

    if (mode === 1) {
      [...idsBa, ...idsDu].forEach(id => { const el = document.getElementById(id); if (el) el.style.display = ''; });
    } else if (mode === 2) {
      [...idsBa, ...idsDu].forEach(id => { const el = document.getElementById(id); if (el) el.style.display = 'none'; });
    } else if (mode === 3) {
      idsBa.forEach(id => { const el = document.getElementById(id); if (el) el.style.display = ''; });
      idsDu.forEach(id => { const el = document.getElementById(id); if (el) el.style.display = 'none'; });
    }

    const lblWd = document.getElementById('lblReqWd');
    const lblWe = document.getElementById('lblReqWe');
    let labelText = ' ช/บ/ด';
    if (mode === 2) labelText = ' ช';
    if (mode === 3) labelText = ' D12/N12';
    if (lblWd) lblWd.innerHTML = `<i data-lucide="sun" class="w-3 h-3"></i> วันธรรมดา${labelText}`;
    if (lblWe) lblWe.innerHTML = `<i data-lucide="moon" class="w-3 h-3"></i> วันหยุด${labelText}`;

    // Update Settings Panels Visibility based on mode
    // Mode 1: show advanced AI/policy/daily menus
    // Mode 2: show only Mode 2 OT panel
    // Mode 3: hide Mode 2 OT and hide Mode1-only advanced menus
    const mode1OnlyPanels = [
      'panelSettAuto',
      'panelSettHardRules',
      'panelSettEntAiRule',
      'panelSettEntAiWeights',
      'panelSettDailyReq'
    ];
    const mode2OnlyPanels = ['panelSettMode2OT'];

    mode1OnlyPanels.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = (mode === 1) ? '' : 'none';
    });
    mode2OnlyPanels.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = (mode === 2) ? '' : 'none';
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // ========= หมวด 8: Template แจ้งเตือนเวร =========
  function generateNotification() {
    const { THAI_MONTHS } = window.NurseConst;
    const { daysInMonth, getShift, getLeave, dayLabel, computeNurseStats } = window.NurseState;
    const mode = state.appSettings?.shiftMode || 1;
    const days = daysInMonth(state.year, state.month);
    const org = state.appSettings?.orgName || 'หน่วยงาน';
    const monthName = THAI_MONTHS[state.month - 1];
    const nurses = state.nurses.filter(n => n.active !== false).sort((a, b) => (a.order || 999) - (b.order || 999));

    const layoutMode = state.appSettings?.telegram?.layoutMode || 'individual';
    let scheduleList = '';

    if (layoutMode === 'daily') {
      const shiftNames = {
        'ช': '☀️ เวรเช้า (Morning)',
        'บ': '⛅ เวรบ่าย (Afternoon)',
        'ด': '🌙 เวรดึก (Night)',
        'เย็น': '🌆 เวรเย็น (Evening)',
        'OT': '⏱️ เวรนอกเวลา (OT)',
        'D12': '⏳ เวร 12 ชม. เช้า (Day 12h)',
        'N12': '⌛ เวร 12 ชม. ดึก (Night 12h)'
      };
      
      let lines = [];
      lines.push('━━━━━━━━━━━━━━━━━━');
      lines.push('📋 ตารางปฏิบัติงานรายวัน (Daily Duty Rota)');
      lines.push('━━━━━━━━━━━━━━━━━━');

      for (let d = 1; d <= days; d++) {
        const dayShifts = {};
        nurses.forEach(n => {
          const s = getShift(n.id, d) || '';
          if (s && s !== 'O') {
            if (!dayShifts[s]) dayShifts[s] = [];
            dayShifts[s].push(n.name.split(' ')[0]);
          }
        });
        
        const shiftKeys = Object.keys(dayShifts).sort((a, b) => {
          const order = { 'ช': 1, 'บ': 2, 'ด': 3, 'เย็น': 4, 'OT': 5, 'D12': 6, 'N12': 7 };
          return (order[a] || 99) - (order[b] || 99);
        });

        if (shiftKeys.length > 0) {
          const dow = dayLabel(state.year, state.month, d);
          lines.push(`📅 วันที่ ${d} (${dow}):`);
          shiftKeys.forEach((s, idx) => {
            const isLast = idx === shiftKeys.length - 1;
            const prefix = isLast ? '  └─ ' : '  ├─ ';
            const label = shiftNames[s] || `เวร ${s}`;
            lines.push(`${prefix}${label}: ${dayShifts[s].join(', ')}`);
          });
          lines.push(''); // Add blank line between days
        }
      }
      lines.push('━━━━━━━━━━━━━━━━━━');
      scheduleList = lines.join('\n');
    } else if (layoutMode === 'summary') {
      let lines = [];
      lines.push('━━━━━━━━━━━━━━━━━━');
      lines.push('📊 สรุปยอดภาระงานปฏิบัติการรายบุคคล (Workload Summary)');
      lines.push('━━━━━━━━━━━━━━━━━━');

      nurses.forEach((n, index) => {
        const stats = computeNurseStats(n.id);
        const parts = [];
        if (stats['ช']) parts.push(`เช้า ${stats['ช']}`);
        if (stats['บ']) parts.push(`บ่าย ${stats['บ']}`);
        if (stats['ด']) parts.push(`ดึก ${stats['ด']}`);
        if (stats['ชบ']) parts.push(`ชบ ${stats['ชบ']}`);
        if (stats['ดบ']) parts.push(`ดบ ${stats['ดบ']}`);
        if (stats['ชด']) parts.push(`ชด ${stats['ชด']}`);
        if (stats['เย็น']) parts.push(`เย็น ${stats['เย็น']}`);
        if (stats['OT']) parts.push(`OT ${stats['OT']}`);
        if (stats['D12']) parts.push(`D12 ${stats['D12']}`);
        if (stats['N12']) parts.push(`N12 ${stats['N12']}`);
        const workDesc = parts.length > 0 ? parts.join(', ') : 'ไม่มีเวร';
        
        lines.push(`👤 ${index + 1}. ${n.name}`);
        lines.push(`  ├─ รายละเอียดเวร: ${workDesc}`);
        lines.push(`  └─ รวมปฏิบัติงาน: ${stats.total || 0} เวร`);
        lines.push('');
      });
      lines.push('━━━━━━━━━━━━━━━━━━');
      scheduleList = lines.join('\n');
    } else {
      // 'individual'
      let lines = [];
      lines.push('━━━━━━━━━━━━━━━━━━');
      lines.push('👤 รายละเอียดปฏิบัติการรายบุคคล (Individual Shift List)');
      lines.push('━━━━━━━━━━━━━━━━━━');

      nurses.forEach((n, index) => {
        let shifts = [];
        if (mode === 2) {
          // Mode 2 OT and Leaves
          for (let d = 1; d <= days; d++) {
            const s = getShift(n.id, d);
            if (s === 'เย็น') shifts.push(`${d}(เย็น)`);
            else if (s === 'OT') shifts.push(`${d}(OT)`);
          }
          for (let d = 1; d <= days; d++) {
            if (getLeave(n.id, d)) shifts.push(`${d}(ลา)`);
          }
        } else {
          // Mode 1 and Mode 3
          for (let d = 1; d <= days; d++) {
            const s = getShift(n.id, d) || getLeave(n.id, d) || '';
            if (s && s !== 'O') shifts.push(`${d}/${s}`);
          }
        }
        
        if (shifts.length > 0) {
          lines.push(`👤 ${index + 1}. ${n.name}`);
          lines.push(`  📌 เวรขึ้นปฏิบัติงาน: ${shifts.join(', ')}`);
          lines.push('');
        }
      });
      
      lines.push('━━━━━━━━━━━━━━━━━━');
      scheduleList = lines.join('\n');
    }

    const template = state.appSettings?.telegram?.template || '📋 ตารางเวร {month} {year}\n🏥 {org}\n\n{schedule_list}\n\n(จัดโดย {scheduler})';
    return template
      .replace(/{org}/g, org)
      .replace(/{month}/g, monthName)
      .replace(/{year}/g, String(state.year))
      .replace(/{scheduler}/g, state.appSettings?.signers?.scheduler || '—')
      .replace(/{schedule_list}/g, scheduleList);
  }

  function updateNotificationPreview() {
    const el = document.getElementById('notificationPreview');
    if (!el) return;
    el.textContent = generateNotification();
  }

  function copyNotification() {
    const text = generateNotification();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => showSuccess('คัดลอก template แล้ว'));
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showSuccess('คัดลอก template แล้ว');
    }
  }

  // ========= PREMIUM ENTERPRISE FEATURES =========

  // Reversible Base64-hashing for front-end lock safety
  const hashPw = str => btoa(encodeURIComponent(str)).split('').reverse().join('');

  function enableSecurity(pw) {
    if (!pw) { showError('กรุณากรอกรหัสผ่าน'); return; }
    state.appSettings.accessControl.passwordHash = hashPw(pw);
    state.appSettings.accessControl.enabled = true;
    state.appSettings.accessControl.isUnlocked = false; // Lock immediately on activation!
    markDirty(); persistAll();
    showSuccess('เปิดระบบล็อกความปลอดภัยเรียบร้อยแล้ว 🔒');
    renderSettings();
    window.NurseRender.renderSchedule();
    window.NurseRender.renderLeaves();
    window.NurseRender.renderDashboard();
  }

  function disableSecurity(pw) {
    if (!state.appSettings.accessControl.enabled) return;
    if (!pw) { showError('กรุณากรอกรหัสผ่านเพื่อปิดระบบ'); return; }
    if (hashPw(pw) !== state.appSettings.accessControl.passwordHash) {
      showError('รหัสผ่านไม่ถูกต้อง ไม่สามารถยกเลิกการล็อกได้');
      return;
    }
    state.appSettings.accessControl.passwordHash = '';
    state.appSettings.accessControl.enabled = false;
    state.appSettings.accessControl.isUnlocked = false;
    markDirty(); persistAll();
    showSuccess('ยกเลิกระบบล็อกความปลอดภัยเรียบร้อยแล้ว 🔓');
    renderSettings();
    window.NurseRender.renderSchedule();
    window.NurseRender.renderLeaves();
    window.NurseRender.renderDashboard();
  }

  function unlockSession(pw) {
    if (!state.appSettings.accessControl.enabled) return;
    if (!pw) { showError('กรุณากรอกรหัสผ่าน'); return; }
    if (hashPw(pw) === state.appSettings.accessControl.passwordHash) {
      state.appSettings.accessControl.isUnlocked = true;
      showSuccess('ปลดล็อกระบบสำหรับการแก้ไขตารางเรียบร้อยแล้ว ✅');
      renderSettings();
      window.NurseRender.renderSchedule();
      window.NurseRender.renderLeaves();
      window.NurseRender.renderDashboard();
    } else {
      showError('รหัสผ่านไม่ถูกต้อง');
    }
  }

  function lockSession() {
    state.appSettings.accessControl.isUnlocked = false;
    showSuccess('ล็อกระบบสำหรับการแก้ไขตารางเรียบร้อยแล้ว 🔒');
    renderSettings();
    window.NurseRender.renderSchedule();
    window.NurseRender.renderLeaves();
    window.NurseRender.renderDashboard();
  }

  function changeSystemTheme(newTheme) {
    const themes = ['royal-blue', 'emerald-er', 'sakura-maternity', 'amethyst-icu'];
    if (!themes.includes(newTheme)) return;
    state.appSettings.theme = newTheme;
    document.documentElement.setAttribute('data-color-theme', newTheme);
    markDirty(); persistAll();
    showSuccess('เปลี่ยนสีธีมระบบเรียบร้อยแล้ว ✨');
  }

  function savePremiumSettings(opts = {}) {
    // AI Settings strictness
    const ai = state.appSettings.aiSettings || {};
    ai.noEveningToMorning = document.getElementById('settAiNoEvToMo')?.checked;
    ai.maxTwoConsecutiveCombined = document.getElementById('settAiMaxTwo')?.checked;
    ai.fairWeekendDistribution = document.getElementById('settAiFairWe')?.checked;

    const th = Number(document.getElementById('settConsecutivePremium')?.value);
    if (Number.isFinite(th) && th >= 2 && th <= 14) {
      ai.consecutiveDaysThreshold = th;
      if (state.appSettings.schedulerSettings) {
        state.appSettings.schedulerSettings.consecutiveDaysThreshold = th;
      }
    }

    // AI Weights
    if (!ai.weights) {
      ai.weights = {
        noEveningToMorning: 80,
        fairWeekend: 70,
        consecutiveBigPenalty: 80
      };
    }
    const wEv = Number(document.getElementById('settAiWeightEvToMo')?.value);
    const wWe = Number(document.getElementById('settAiWeightFairWe')?.value);
    const wCo = Number(document.getElementById('settAiWeightConsec')?.value);
    if (Number.isFinite(wEv) && wEv >= 0 && wEv <= 100) ai.weights.noEveningToMorning = wEv;
    if (Number.isFinite(wWe) && wWe >= 0 && wWe <= 100) ai.weights.fairWeekend = wWe;
    if (Number.isFinite(wCo) && wCo >= 0 && wCo <= 100) ai.weights.consecutiveBigPenalty = wCo;

    // Budget
    const cap = Number(document.getElementById('settBudgetCap')?.value);
    if (Number.isFinite(cap) && cap >= 0) state.appSettings.budgetCap = cap;

    // Holiday Rates
    const ratePro = Number(document.getElementById('settRatePro')?.value);
    const rateSupp = Number(document.getElementById('settRateSupp')?.value);
    if (Number.isFinite(ratePro) && ratePro >= 0.5 && ratePro <= 5.0) state.appSettings.holidayRates.Pro = ratePro;
    if (Number.isFinite(rateSupp) && rateSupp >= 0.5 && rateSupp <= 5.0) state.appSettings.holidayRates.Supp = rateSupp;


    // Custom Logo URL
    state.appSettings.customLogoUrl = document.getElementById('settLogoUrl')?.value.trim();
    const logoImg = document.getElementById('orgCustomLogo');
    if (logoImg) {
      if (state.appSettings.customLogoUrl) {
        logoImg.src = state.appSettings.customLogoUrl;
        logoImg.classList.remove('hidden');
      } else {
        logoImg.src = '';
        logoImg.classList.add('hidden');
      }
    }

    markDirty(); persistAll();
    if (!opts.silent) showSuccess('บันทึกการตั้งค่าพรีเมียมทั้งหมดสำเร็จแล้ว');
    window.NurseRender.renderDashboard();
    return true;
  }

  function saveAutoBundleSettings() {
    const okScheduler = saveSchedulerSettings({ silent: true });
    if (!okScheduler) return;
    saveHardRules({ silent: true });
    savePremiumSettings({ silent: true });
    showSuccess('บันทึกการตั้งค่า "จัดเวรอัตโนมัติ + Policy + AI Tuning + AI Weights" แล้ว');
  }

  function sendLineNotification() {
    const token = state.appSettings.lineNotifyToken;
    if (!token) { showError('กรุณากรอก LINE Notify Token ในการตั้งค่าก่อน'); return; }

    const message = generateNotification();
    showLoading('กำลังส่งแจ้งเตือนไปยัง LINE...');

    const proxyUrl = 'https://corsproxy.io/?' + encodeURIComponent('https://notify-api.line.me/api/notify');

    fetch(proxyUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({ message })
    })
      .then(r => r.json())
      .then(res => {
        Swal.close();
        if (res.status === 200 || res.status === '200') {
          showSuccess('ส่งแจ้งเตือนไปยัง LINE สำเร็จแล้ว! 🟢');
        } else {
          showError(`ส่งไม่สำเร็จ: ${res.message || 'รหัส Token อาจไม่ถูกต้อง'}`);
        }
      })
      .catch(err => {
        console.error(err);
        Swal.close();
        confirmAct('ส่งตรงผ่าน CORS proxy ไม่สำเร็จ', 'ข้อจำกัดความปลอดภัยของ LINE (CORS)\nต้องการคัดลอกข้อความเพื่อนำไปวางส่งด้วยตนเองหรือไม่?').then(choice => {
          if (choice.isConfirmed) copyNotification();
        });
      });
  }

  function changeTelegramLayoutMode(mode, skipPersist = false) {
    if (!state.appSettings.telegram) state.appSettings.telegram = {};
    state.appSettings.telegram.layoutMode = mode;

    document.querySelectorAll('.tele-layout-btn').forEach(btn => {
      btn.classList.remove('bg-white', 'shadow-sm', 'text-slate-800');
      btn.classList.add('text-slate-600');
    });

    const activeBtn = document.getElementById(
      mode === 'daily' ? 'btnTeleLayoutDaily' :
      mode === 'summary' ? 'btnTeleLayoutSummary' :
      'btnTeleLayoutIndividual'
    );
    if (activeBtn) {
      activeBtn.classList.remove('text-slate-600');
      activeBtn.classList.add('bg-white', 'shadow-sm', 'text-slate-800');
    }

    if (!skipPersist) {
      markDirty(); persistAll();
    }
    refreshNotifPreview();
  }

  function escapeHtml(unsafe) {
    return String(unsafe)
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
  }

  function renderNotificationsTab() {
    const ap = state.appSettings;
    if (ap.telegram) {
      _v('notifTeleToken', ap.telegram.botToken || '');
      const autoEl = document.getElementById('notifTeleAutoSend');
      if (autoEl) autoEl.checked = !!ap.telegram.autoSend;
      
      if (!ap.telegram.chatTargets) {
        // Migration from old single chat ID
        if (ap.telegram.chatId) {
          ap.telegram.chatTargets = [{ id: ap.telegram.chatId, label: 'Main Group' }];
        } else {
          ap.telegram.chatTargets = [];
        }
      }
      renderChatTargets();

      _v('notifTeleTemplate', ap.telegram.template || '');
    }

    // Initialize layout preset button active state
    const layoutMode = ap.telegram?.layoutMode || 'individual';
    changeTelegramLayoutMode(layoutMode, true);

    // Add real-time event listener to update preview as you type
    const templateEl = document.getElementById('notifTeleTemplate');
    if (templateEl && !templateEl.dataset.wired) {
      templateEl.dataset.wired = 'true';
      templateEl.addEventListener('input', () => {
        if (!state.appSettings.telegram) state.appSettings.telegram = {};
        state.appSettings.telegram.template = templateEl.value;
        refreshNotifPreview();
      });
    }

    refreshNotifPreview();
    window.NurseSettings.checkTelegramStatus();
    window.NurseNotify?.renderRichLog?.('notifRichLog');
    window.NurseNotify?.renderOfflineQueue?.();
    if (window.lucide) window.lucide.createIcons();
  }

  function renderChatTargets() {
    const ap = state.appSettings;
    const container = document.getElementById('chatTargetChips');
    const emptyHint = document.getElementById('chatTargetEmptyHint');
    if (!container || !emptyHint) return;

    const targets = ap.telegram?.chatTargets || [];
    
    // Clear existing chips
    Array.from(container.children).forEach(child => {
      if (child.id !== 'chatTargetEmptyHint') child.remove();
    });

    if (targets.length === 0) {
      emptyHint.style.display = 'inline-block';
    } else {
      emptyHint.style.display = 'none';
      targets.forEach((target, index) => {
        const chip = document.createElement('div');
        chip.className = 'chat-target-chip';
        chip.innerHTML = `
          <div class="chat-target-chip-label">
            <span class="font-bold text-sky-800">${escapeHtml(target.label)}</span>
            <span class="text-sky-600/70 text-[9px] font-mono">${escapeHtml(target.id)}</span>
          </div>
          <button type="button" class="chat-target-chip-remove" onclick="window.NurseSettings.removeChatTarget(${index})" title="ลบ">
            <i data-lucide="x" class="w-3 h-3"></i>
          </button>
        `;
        container.appendChild(chip);
      });
      if (window.lucide) window.lucide.createIcons({root: container});
    }
  }

  function addChatTarget() {
    const idInput = document.getElementById('newChatTargetId');
    const labelInput = document.getElementById('newChatTargetLabel');
    if (!idInput || !labelInput) return;

    const id = idInput.value.trim();
    let label = labelInput.value.trim();

    if (!id) {
      showError('กรุณากรอก Chat ID');
      return;
    }
    if (!label) label = 'Group';

    if (!state.appSettings.telegram) state.appSettings.telegram = {};
    if (!state.appSettings.telegram.chatTargets) state.appSettings.telegram.chatTargets = [];
    
    // Check for duplicates
    if (state.appSettings.telegram.chatTargets.some(t => t.id === id)) {
      showError('Chat ID นี้ถูกเพิ่มไปแล้ว');
      return;
    }

    state.appSettings.telegram.chatTargets.push({ id, label });
    idInput.value = '';
    labelInput.value = '';
    
    renderChatTargets();
    saveTelegramSettings();
  }

  function removeChatTarget(index) {
    if (!state.appSettings.telegram?.chatTargets) return;
    state.appSettings.telegram.chatTargets.splice(index, 1);
    renderChatTargets();
    saveTelegramSettings();
  }

  async function checkTelegramStatus() {
    const badge = document.getElementById('teleStatusBadge');
    const text = document.getElementById('teleStatusText');
    const groupNameEl = document.getElementById('telePreviewGroupName');
    if (!badge || !text) return;

    const token = document.getElementById('notifTeleToken')?.value.trim();
    if (!token) {
      badge.className = 'tele-status-badge disconnected';
      text.textContent = 'ยังไม่ได้ตั้งค่า';
      if (groupNameEl) groupNameEl.textContent = 'บอร์ดแจ้งเตือนเวร';
      return;
    }

    badge.className = 'tele-status-badge connecting';
    text.textContent = 'กำลังตรวจสอบ...';

    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/getMe`);
      const data = await response.json();

      if (data.ok) {
        badge.className = 'tele-status-badge connected';
        text.textContent = 'เชื่อมต่อแล้ว';
        const botName = data.result.first_name || 'Bot';
        if (groupNameEl) {
           const ap = state.appSettings;
           const targets = ap.telegram?.chatTargets || [];
           if (targets.length > 0) {
              groupNameEl.textContent = targets[0].label;
           } else {
              groupNameEl.textContent = botName;
           }
        }
      } else {
        badge.className = 'tele-status-badge disconnected';
        text.textContent = 'Token ไม่ถูกต้อง';
      }
    } catch (e) {
      badge.className = 'tele-status-badge disconnected';
      text.textContent = 'ตรวจสอบไม่ได้ (Offline)';
    }
  }

  function _onTelegramCredentialInput() {
    const badge = document.getElementById('teleStatusBadge');
    const text = document.getElementById('teleStatusText');
    if (badge && text) {
      badge.className = 'tele-status-badge disconnected';
      text.textContent = 'ยังไม่บันทึก';
    }
  }

  function applyTemplatePreset(presetType) {
    const templates = {
      formal: "🏥 ประกาศตารางปฏิบัติงาน\nหอผู้ป่วย: {org}\nประจำเดือน: {month} {year}\n\n(กรุณาตรวจสอบตารางเวรของท่านจากรูปภาพที่แนบมาด้านบน)\n\n📌 หมายเหตุ:\n- กรุณาตรวจสอบและแจ้งขอแลกเวรภายในวันที่ 25 ของเดือน\n- หากมีข้อสงสัยติดต่อ: {scheduler}\n\n{schedule_list}",
      compact: "⚡ ตารางเวร {month} {year} | 🏥 {org}\n\n{schedule_list}",
      emoji: "🌟 ประกาศตารางเวร 🌟\n📅 ประจำเดือน: {month} {year}\n🏥 หอผู้ป่วย: {org}\n\n{schedule_list}\n\n👩‍⚕️ ผู้จัดเวร: {scheduler}",
      minimal: "{schedule_list}"
    };

    const tmpl = templates[presetType];
    if (tmpl) {
      const el = document.getElementById('notifTeleTemplate');
      if (el) {
        el.value = tmpl;
        if (!state.appSettings.telegram) state.appSettings.telegram = {};
        state.appSettings.telegram.template = tmpl;
        refreshNotifPreview();
      }
    }
  }

  function insertTemplateVar(variable) {
    const el = document.getElementById('notifTeleTemplate');
    if (!el) return;
    
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const text = el.value;
    
    const newText = text.substring(0, start) + variable + text.substring(end);
    el.value = newText;
    
    // Move cursor after inserted variable
    el.selectionStart = el.selectionEnd = start + variable.length;
    el.focus();
    
    if (!state.appSettings.telegram) state.appSettings.telegram = {};
    state.appSettings.telegram.template = newText;
    refreshNotifPreview();
  }

  function refreshNotifPreview() {
    const text = generateNotification();
    const el = document.getElementById('notifPagePreview');
    if (el) el.textContent = text;
    
    // Update time
    const timeEl = document.getElementById('telePreviewTime');
    if (timeEl) {
      const now = new Date();
      timeEl.textContent = now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
    }

    // Character Counter & Limit Alert
    const charCountEl = document.getElementById('teleCharCount');
    const alertEl = document.getElementById('teleCharLimitAlert');
    const charBar = document.getElementById('teleCharBar');
    const charPercent = document.getElementById('teleCharPercent');
    
    if (charCountEl) {
      const len = text.length;
      const limit = 4096;
      const pct = Math.min(100, Math.round((len / limit) * 100));
      
      charCountEl.textContent = `${len.toLocaleString()} / 4,096 อักษร`;
      
      if (charPercent) {
        charPercent.textContent = `${pct}%`;
      }
      
      if (charBar) {
        charBar.style.width = `${pct}%`;
        
        // Color coding
        charBar.className = 'tele-char-bar';
        if (pct > 100) charBar.classList.add('bg-rose-500');
        else if (pct > 80) charBar.classList.add('bg-amber-400');
        else charBar.classList.add('bg-sky-500');
      }

      if (len > limit) {
        charCountEl.classList.add('text-rose-500');
        charCountEl.classList.remove('text-slate-400');
        if (alertEl) alertEl.classList.remove('hidden');
      } else {
        charCountEl.classList.remove('text-rose-500');
        charCountEl.classList.add('text-slate-400');
        if (alertEl) alertEl.classList.add('hidden');
      }
    }

    updateNotificationPreview();
  }

  function testTelegramConnectionPage() { return testTelegramConnection(); }
  function sendTelegramPage() { return previewTelegramNotification(); }
  function sendTelegramNotification() { return previewTelegramNotification(); }


  async function testTelegramConnection() {
    const token  = document.getElementById('notifTeleToken')?.value.trim();
    const targets = state.appSettings?.telegram?.chatTargets || [];

    function stepHtml(steps) {
      return steps.map(s => {
        const icon = s.status === 'ok'      ? '✅'
                   : s.status === 'fail'    ? '❌'
                   : s.status === 'loading' ? '⏳'
                   :                          '⬜';
        const color = s.status === 'ok' ? '#166534' : s.status === 'fail' ? '#991b1b' : '#475569';
        return `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:10px;">
          <span style="font-size:16px;min-width:22px">${icon}</span>
          <div>
            <div style="font-size:12px;font-weight:700;color:${color}">${s.title}</div>
            ${s.detail ? `<div style="font-size:11px;color:#64748b;margin-top:2px">${s.detail}</div>` : ''}
          </div>
        </div>`;
      }).join('');
    }

    function show(steps) {
      Swal.update({
        html: `<div style="text-align:left;padding:4px 0;max-height:60vh;overflow-y:auto">${stepHtml(steps)}</div>`,
        showConfirmButton: false, showCancelButton: false
      });
    }

    // ── เปิด dialog ──
    Swal.fire({
      title: '<span style="font-size:1rem;font-weight:700">ทดสอบการเชื่อมต่อ Telegram</span>',
      html: '<div style="text-align:left;padding:4px 0"><div style="font-size:12px;color:#64748b">กำลังเริ่มการทดสอบ...</div></div>',
      showConfirmButton: false, showCancelButton: false,
      allowOutsideClick: false, width: '34rem'
    });

    const steps = [
      { title: 'ตรวจสอบ Bot Token',      status: 'loading', detail: '' },
      { title: 'ตรวจสอบปลายทาง (Chat Targets)', status: 'pending', detail: '' },
    ];
    show(steps);

    // ── Step 1: Token ──
    if (!token) {
      steps[0] = { title: 'ตรวจสอบ Bot Token', status: 'fail', detail: 'ไม่ได้กรอก Bot Token' };
      show(steps);
      Swal.update({ showConfirmButton: true, confirmButtonText: 'ปิด', confirmButtonColor: '#64748b' });
      return;
    }
    const botInfo = await window.NurseNotify?.verifyBotToken(token);
    if (!botInfo?.ok) {
      steps[0] = { title: 'ตรวจสอบ Bot Token', status: 'fail',
        detail: botInfo?.description || 'Token ไม่ถูกต้อง — ตรวจสอบใหม่ผ่าน @BotFather' };
      show(steps);
      Swal.update({ showConfirmButton: true, confirmButtonText: 'ปิด', confirmButtonColor: '#64748b' });
      return;
    }
    steps[0] = { title: 'ตรวจสอบ Bot Token', status: 'ok',
      detail: `Bot: <b>@${botInfo.result.username}</b> (${botInfo.result.first_name})` };
    steps[1].status = 'loading';
    show(steps);

    // ── Step 2: Chat ID ──
    await new Promise(r => setTimeout(r, 300));
    if (targets.length === 0) {
      steps[1] = { title: 'ตรวจสอบปลายทาง', status: 'fail', detail: 'ไม่ได้ระบุกลุ่มปลายทางเลย' };
      show(steps);
      Swal.update({ showConfirmButton: true, confirmButtonText: 'ปิด', confirmButtonColor: '#64748b' });
      return;
    }
    
    steps[1] = { title: 'ตรวจสอบปลายทาง', status: 'ok', detail: `พบ ${targets.length} กลุ่มปลายทาง` };
    
    // ── Step 3: ส่งข้อความทดสอบทีละอัน ──
    if (!window.NurseState.state.appSettings.telegram) window.NurseState.state.appSettings.telegram = {};
    window.NurseState.state.appSettings.telegram.botToken = token;

    for (let i = 0; i < targets.length; i++) {
      const target = targets[i];
      steps.push({ title: `ส่งทดสอบ: ${target.label}`, status: 'loading', detail: '' });
      show(steps);
      
      const testMsg = `✅ ทดสอบการส่งจากระบบจัดตารางเวร\nBot: @${botInfo.result.username}\nChat ID: ${target.id}\nเวลา: ${new Date().toLocaleString('th-TH')}`;
      try {
        const res  = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: target.id, text: testMsg })
        });
        const data = await res.json();
        
        if (data.ok) {
          steps[steps.length - 1] = { title: `ส่งทดสอบ: ${target.label}`, status: 'ok', detail: 'ข้อความถึง Telegram เรียบร้อยแล้ว' };
        } else {
          steps[steps.length - 1] = { title: `ส่งทดสอบ: ${target.label}`, status: 'fail',
            detail: data.description || 'ส่งไม่สำเร็จ — Bot อาจยังไม่ได้ถูกเพิ่มเข้ากลุ่ม หรือ Chat ID ผิด' };
        }
      } catch (e) {
        steps[steps.length - 1] = { title: `ส่งทดสอบ: ${target.label}`, status: 'fail', detail: 'ไม่มีอินเทอร์เน็ต หรือ Token ผิด' };
      }
      show(steps);
    }
    
    saveTelegramSettings();
    Swal.update({
      showConfirmButton: true, confirmButtonText: 'ปิด', confirmButtonColor: '#0284c7'
    });
  }

  function saveTelegramSettings() {
    if (!state.appSettings.telegram) state.appSettings.telegram = {};
    state.appSettings.telegram.botToken = document.getElementById('notifTeleToken')?.value.trim() || '';
    state.appSettings.telegram.autoSend = !!(document.getElementById('notifTeleAutoSend')?.checked);
    state.appSettings.telegram.template = document.getElementById('notifTeleTemplate')?.value || '';
    markDirty(); persistAll();
    showSuccess('บันทึกการตั้งค่า Telegram สำเร็จแล้ว');
    refreshNotifPreview();
  }

  async function generateBeautifulScheduleCardBlob(forcedTheme, forcedLayoutMode) {
    const { THAI_MONTHS } = window.NurseConst;
    const { daysInMonth, getShift, getLeave, dayLabel, computeNurseStats, isWeekend } = window.NurseState;
    const mode = state.appSettings?.shiftMode || 1;
    const days = daysInMonth(state.year, state.month);
    const orgName = state.appSettings?.orgName || 'วิทยาลัยพยาบาลศรีมหาสารคาม';
    const monthName = THAI_MONTHS[state.month - 1];
    const yearName = state.year;
    const esc = s => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    // Read selected parameters
    const activeTheme = forcedTheme || document.getElementById('printInfographicTheme')?.value || 'clinical-dark';
    const layoutMode = forcedLayoutMode || document.getElementById('printInfographicMode')?.value || state.appSettings?.telegram?.layoutMode || 'individual';

    // Create card container
    const card = document.createElement('div');
    card.style.position = 'absolute';
    card.style.left = '-9999px';
    card.style.top = '-9999px';
    card.style.width = '1080px';
    card.style.padding = '48px';
    card.style.borderRadius = '28px';
    card.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.4)';
    card.style.fontFamily = "'Sarabun', 'Noto Sans Thai', sans-serif";
    card.style.boxSizing = 'border-box';

    // Theme values configuration
    let colors = {};
    let badgeStyle = (s) => '';

    if (activeTheme === 'clean-light') {
      card.style.backgroundColor = '#f8fafc';
      card.style.backgroundImage = 'none';
      card.style.color = '#0f172a';
      card.style.border = '1px solid #cbd5e1';

      colors = {
        bgHeader: '#ffffff',
        borderHeader: '2px solid rgba(15,23,42,0.06)',
        titleColor: 'linear-gradient(to right, #0ea5e9, #4f46e5)',
        orgColor: '#475569',
        badgeBg: 'rgba(15,23,42,0.15)',
        badgeText: '#4f46e5',
        cardBg: '#ffffff',
        cardBorder: '1px solid rgba(15,23,42,0.06)',
        nurseIndexBg: '#e2e8f0',
        nurseIndexText: '#334155',
        statsTotalBg: 'linear-gradient(to right, #0ea5e9, #4f46e5)',
        statsTotalText: '#ffffff',
        weekendBg: 'rgba(239, 68, 68, 0.04)',
        weekendBorder: 'rgba(239, 68, 68, 0.15)',
        weekendTitle: '#ef4444',
        footerText: '#64748b'
      };

      badgeStyle = (s) => {
        const c = {
          'ช': { text: '#854d0e', bg: '#fef9c3', border: '#fef08a' },
          'บ': { text: '#9a3412', bg: '#ffedd5', border: '#fed7aa' },
          'ด': { text: '#3730a3', bg: '#e0e7ff', border: '#c7d2fe' },
          'เย็น': { text: '#9d174d', bg: '#fce7f3', border: '#fbcfe8' },
          'OT': { text: '#065f46', bg: '#d1fae5', border: '#a7f3d0' }
        };
        const active = c[s] || { text: '#334155', bg: '#f1f5f9', border: '#cbd5e1' };
        return `color: ${active.text}; background: ${active.bg}; border: 1px solid ${active.border}; border-radius: 8px; padding: 2px 6px; font-weight: 700; display: inline-block;`;
      };
    } else if (activeTheme === 'minimal-retro') {
      card.style.backgroundColor = '#ffffff';
      card.style.backgroundImage = 'none';
      card.style.color = '#1e293b';
      card.style.border = '1px solid #1e293b';

      colors = {
        bgHeader: '#ffffff',
        borderHeader: '2px solid #1e293b',
        titleColor: 'none',
        titleColorRaw: '#1e293b',
        orgColor: '#475569',
        badgeBg: '#ffffff',
        badgeText: '#1e293b',
        cardBg: '#ffffff',
        cardBorder: '1px solid #1e293b',
        nurseIndexBg: '#1e293b',
        nurseIndexText: '#ffffff',
        statsTotalBg: '#1e293b',
        statsTotalText: '#ffffff',
        weekendBg: '#ffffff',
        weekendBorder: '1px dashed #ef4444',
        weekendTitle: '#ef4444',
        footerText: '#475569'
      };

      badgeStyle = (s) => {
        return `color: #1e293b; background: #ffffff; border: 1px solid #1e293b; border-radius: 4px; padding: 1px 5px; font-weight: 700; display: inline-block; font-family: monospace;`;
      };
    } else {
      // Default: clinical-dark
      card.style.backgroundColor = '#0f172a';
      card.style.backgroundImage = 'radial-gradient(circle at 10% 20%, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 1) 90%)';
      card.style.color = '#f1f5f9';

      colors = {
        bgHeader: 'transparent',
        borderHeader: '2px solid rgba(255,255,255,0.07)',
        titleColor: 'linear-gradient(to right, #38bdf8, #818cf8)',
        orgColor: '#94a3b8',
        badgeBg: 'rgba(99,102,241,0.15)',
        badgeText: '#a5b4fc',
        cardBg: 'rgba(255,255,255,0.02)',
        cardBorder: '1px solid rgba(255,255,255,0.05)',
        nurseIndexBg: '#334155',
        nurseIndexText: '#cbd5e1',
        statsTotalBg: 'linear-gradient(to right, #0284c7, #6366f1)',
        statsTotalText: '#ffffff',
        weekendBg: 'rgba(239, 68, 68, 0.06)',
        weekendBorder: 'rgba(239, 68, 68, 0.25)',
        weekendTitle: '#fca5a5',
        footerText: '#64748b'
      };

      badgeStyle = (s) => {
        const c = {
          'ช': { text: '#eab308', bg: 'rgba(234,179,8,0.12)', border: 'rgba(234,179,8,0.25)' },
          'บ': { text: '#f97316', bg: 'rgba(249,115,22,0.12)', border: 'rgba(249,115,22,0.25)' },
          'ด': { text: '#818cf8', bg: 'rgba(129,140,248,0.12)', border: 'rgba(129,140,248,0.25)' },
          'เย็น': { text: '#ec4899', bg: 'rgba(236,72,153,0.12)', border: 'rgba(236,72,153,0.25)' },
          'OT': { text: '#34d399', bg: 'rgba(52,211,153,0.12)', border: 'rgba(52,211,153,0.25)' }
        };
        const active = c[s] || { text: '#cbd5e1', bg: 'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.08)' };
        return `color: ${active.text}; background: ${active.bg}; border: 1px solid ${active.border}; border-radius: 8px; padding: 2px 6px; font-weight: 700; display: inline-block;`;
      };
    }

    const titleHtml = colors.titleColor !== 'none'
      ? `<h1 style="font-size: 20px; font-weight: 800; margin: 0; background: ${colors.titleColor}; -webkit-background-clip: text; -webkit-text-fill-color: transparent;">ตารางเวรปฏิบัติงานบุคลากร</h1>`
      : `<h1 style="font-size: 20px; font-weight: 800; margin: 0; color: ${colors.titleColorRaw};">ตารางเวรปฏิบัติงานบุคลากร</h1>`;

    let html = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 25px; border-bottom: ${colors.borderHeader}; padding-bottom: 20px;">
        <div style="display: flex; align-items: center; gap: 15px;">
          <div style="background: linear-gradient(135deg, #0284c7 0%, #6366f1 100%); width: 50px; height: 50px; border-radius: 16px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 20px rgba(99,102,241,0.3)">
            <span style="font-size: 24px;">🏥</span>
          </div>
          <div>
            ${titleHtml}
            <p style="font-size: 13px; color: ${colors.orgColor}; margin: 2px 0 0 0;">🏥 ${esc(orgName)}</p>
          </div>
        </div>
        <div style="text-align: right;">
          <span style="background: ${colors.badgeBg}; border: 1px solid rgba(99,102,241,0.1); color: ${colors.badgeText}; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 700;">
            📅 ประจำเดือน${monthName} ${yearName}
          </span>
        </div>
      </div>
    `;

    const nurses = state.nurses.filter(n => n.active !== false).sort((a, b) => (a.order || 999) - (b.order || 999));

    if (layoutMode === 'daily') {
      const shiftNames = {
        'ช': '☀️ เช้า', 'บ': '⛅ บ่าย', 'ด': '🌙 ดึก',
        'เย็น': '🌆 เย็น', 'OT': '⏱️ OT', 'D12': '⏳ D12', 'N12': '⌛ N12'
      };

      html += `<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">`;
      for (let d = 1; d <= days; d++) {
        const dayShifts = {};
        nurses.forEach(n => {
          const s = getShift(n.id, d) || '';
          if (s && s !== 'O') {
            if (!dayShifts[s]) dayShifts[s] = [];
            dayShifts[s].push(n.name.split(' ')[0]);
          }
        });
        const shiftKeys = Object.keys(dayShifts).sort((a, b) => {
          const order = { 'ช': 1, 'บ': 2, 'ด': 3, 'เย็น': 4, 'OT': 5, 'D12': 6, 'N12': 7 };
          return (order[a] || 99) - (order[b] || 99);
        });

        if (shiftKeys.length > 0) {
          const dow = dayLabel(state.year, state.month, d);
          const isWe = isWeekend(state.year, state.month, d);
          const borderCol = isWe ? colors.weekendBorder : colors.cardBorder;
          const bgCol = isWe ? colors.weekendBg : colors.cardBg;
          const titleStyle = isWe ? `color: ${colors.weekendTitle}; font-weight: 800;` : `color: ${colors.orgColor}; font-weight: 700;`;

          html += `
            <div style="background: ${bgCol}; border: ${borderCol}; border-radius: 18px; padding: 14px; box-sizing: border-box;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                <span style="font-size: 13px; ${titleStyle}">📅 วันที่ ${d} (${dow})</span>
              </div>
              <div style="display: flex; flex-direction: column; gap: 6px;">
          `;

          shiftKeys.forEach(s => {
            const label = shiftNames[s] || `เวร ${s}`;
            html += `
              <div style="display: flex; align-items: center; gap: 8px; font-size: 12px;">
                <span style="${badgeStyle(s)}; min-width: 55px; text-align: center;">${label}</span>
                <span style="color: ${activeTheme === 'clean-light' ? '#1e293b' : '#cbd5e1'}; font-weight: 500;">: ${dayShifts[s].join(', ')}</span>
              </div>
            `;
          });

          html += `</div></div>`;
        }
      }
      html += `</div>`;
    } else if (layoutMode === 'summary') {
      html += `<div style="display: flex; flex-direction: column; gap: 10px;">`;
      nurses.forEach((n, idx) => {
        const stats = computeNurseStats(n.id);
        const parts = [];
        if (stats['ช']) parts.push(`<span style="${badgeStyle('ช')}">ช ${stats['ช']}</span>`);
        if (stats['บ']) parts.push(`<span style="${badgeStyle('บ')}">บ ${stats['บ']}</span>`);
        if (stats['ด']) parts.push(`<span style="${badgeStyle('ด')}">ด ${stats['ด']}</span>`);
        if (stats['เย็น']) parts.push(`<span style="${badgeStyle('เย็น')}">เย็น ${stats['เย็น']}</span>`);
        if (stats['OT']) parts.push(`<span style="${badgeStyle('OT')}">OT ${stats['OT']}</span>`);
        const workDesc = parts.length > 0 ? parts.join(' · ') : 'ไม่มีเวร';

        html += `
          <div style="display: flex; align-items: center; justify-content: space-between; background: ${colors.cardBg}; border: ${colors.cardBorder}; border-radius: 14px; padding: 10px 18px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 24px; height: 24px; border-radius: 50%; background: ${colors.nurseIndexBg}; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: ${colors.nurseIndexText};">${idx + 1}</div>
              <span style="font-weight: 700; font-size: 13.5px; color: ${card.style.color || '#fff'};">${n.name}</span>
              <span style="font-size: 10.5px; color: ${colors.orgColor}; background: rgba(128,128,128,0.06); padding: 1px 6px; border-radius: 6px;">${n.position}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 16px;">
              <span style="font-size: 12.5px; color: ${colors.orgColor};">${workDesc}</span>
              <span style="background: ${colors.statsTotalBg}; color: ${colors.statsTotalText}; padding: 3px 10px; border-radius: 8px; font-size: 11.5px; font-weight: 800; box-shadow: 0 4px 10px rgba(99,102,241,0.2)">รวม ${stats.total || 0} เวร</span>
            </div>
          </div>
        `;
      });
      html += `</div>`;
    } else {
      html += `<div style="display: flex; flex-direction: column; gap: 10px;">`;
      nurses.forEach((n, idx) => {
        let shifts = [];
        if (mode === 2) {
          for (let d = 1; d <= days; d++) {
            const s = getShift(n.id, d);
            if (s === 'เย็น') shifts.push(`<span style="${badgeStyle('เย็น')}">${d}/เย็น</span>`);
            else if (s === 'OT') shifts.push(`<span style="${badgeStyle('OT')}">${d}/OT</span>`);
          }
          for (let d = 1; d <= days; d++) {
            if (getLeave(n.id, d)) shifts.push(`<span style="color: ${colors.orgColor};">${d}/ลา</span>`);
          }
        } else {
          for (let d = 1; d <= days; d++) {
            const s = getShift(n.id, d) || getLeave(n.id, d) || '';
            if (s && s !== 'O') {
              shifts.push(`<span style="${badgeStyle(s)}">${d}/${s}</span>`);
            }
          }
        }

        if (shifts.length > 0) {
          html += `
            <div style="background: ${colors.cardBg}; border: ${colors.cardBorder}; border-radius: 14px; padding: 12px 18px;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
                <span style="font-weight: 700; font-size: 13.5px; color: ${card.style.color || '#fff'};">👤 ${idx + 1}. ${n.name} <span style="font-size: 11px; font-weight: normal; color: ${colors.orgColor}; margin-left: 6px;">(${n.position})</span></span>
              </div>
              <div style="display: flex; flex-wrap: wrap; gap: 6px; font-size: 12px; color: ${colors.orgColor}; line-height: 1.5; align-items: center;">
                📌 เวรปฏิบัติการ: <div style="display: inline-flex; flex-wrap: wrap; gap: 4px; margin-left: 6px;">${shifts.join(' ')}</div>
              </div>
            </div>
          `;
        }
      });
      html += `</div>`;
    }

    const scheduler = state.appSettings?.signers?.scheduler || '—';
    html += `
      <div style="margin-top: 25px; border-top: 1px dashed ${colors.borderHeader.split(' ').slice(2).join(' ') || 'rgba(128,128,128,0.2)'}; padding-top: 15px; display: flex; align-items: center; justify-content: space-between; font-size: 11px; color: ${colors.footerText};">
        <span>จัดทำโดยระบบจัดตารางเวรพยาบาลอัตโนมัติ (Enterprise Suite)</span>
        <span>ลงชื่อผู้จัดทำ: <b>${esc(scheduler)}</b></span>
      </div>
    `;

    card.innerHTML = html;
    document.body.appendChild(card);

    const canvas = await html2canvas(card, {
      scale: 3,
      backgroundColor: activeTheme === 'clean-light' ? '#f8fafc' : activeTheme === 'minimal-retro' ? '#ffffff' : '#0f172a',
      useCORS: true
    });
    document.body.removeChild(card);

    return new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
  }

  async function executeTelegramSend(arg, ..._rest) {
    // ⭐ Accept simple string input: executeTelegramSend('ข้อความที่จะส่ง')
    if (typeof arg === 'string') {
      const tg = state.appSettings?.telegram || {};
      const token = tg.token;
      const targets = (tg.chatTargets && tg.chatTargets.length) ? tg.chatTargets
                    : (tg.chatId ? [{ id: tg.chatId, label: 'default' }] : []);
      if (!token) {
        window.NurseNotify?.add('error', 'Telegram ล้มเหลว', 'ยังไม่ได้ตั้งค่า Bot Token');
        return showError('ยังไม่ได้ตั้งค่า Bot Token');
      }
      if (!targets.length) {
        window.NurseNotify?.add('error', 'Telegram ล้มเหลว', 'ไม่พบปลายทาง (Chat Targets)');
        return showError('ไม่พบปลายทาง — เพิ่ม Chat ID ก่อน');
      }
      arg = {
        sendWithImage: false,
        token,
        chatTargets: targets,
        message: arg,
        org: state.appSettings?.orgName || '',
        monthName: (window.NurseConst?.THAI_MONTHS || [])[state.month - 1] || '',
        yearName: state.year,
      };
    }
    const { sendWithImage, token, chatTargets, message, org, monthName, yearName } = arg || {};
    if (!chatTargets || chatTargets.length === 0) {
      window.NurseNotify?.add('error', 'Telegram ล้มเหลว', 'ไม่พบปลายทาง (Chat Targets)');
      showError('ไม่พบปลายทาง (Chat Targets)');
      return;
    }

    if (sendWithImage) {
      showLoading('กำลังประมวลผลรูปภาพอินโฟกราฟิกความละเอียดสูง...');
      try {
        const blob = await generateBeautifulScheduleCardBlob();
        showLoading(`กำลังส่งตารางเวรพร้อมรูปภาพไปยัง ${chatTargets.length} กลุ่ม...`);
        
        let successCount = 0;
        let failCount = 0;
        
        for (const target of chatTargets) {
          const formData = new FormData();
          formData.append('chat_id', target.id);
          formData.append('document', blob, 'schedule_card.png');

          if (message.length <= 1024) {
            formData.append('caption', message);
            const res = await fetch(`https://api.telegram.org/bot${token}/sendDocument`, {
              method: 'POST',
              body: formData
            });
            const data = await res.json();
            if (data.ok) successCount++; else failCount++;
          } else {
            const shortCaption = `📋 ตารางปฏิบัติงานประจำเดือน ${monthName} พ.ศ. ${yearName}\n🏥 ${org}\n\n(รายละเอียดตารางเวรตัวเต็มจะแสดงในข้อความถัดไปด้านล่าง)`;
            formData.append('caption', shortCaption);

            const resPhoto = await fetch(`https://api.telegram.org/bot${token}/sendDocument`, {
              method: 'POST',
              body: formData
            });
            const dataPhoto = await resPhoto.json();

            if (dataPhoto.ok) {
              const resText = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: target.id, text: message })
              });
              const dataText = await resText.json();
              if (dataText.ok) successCount++; else failCount++;
            } else {
              failCount++;
            }
          }
        }
        
        Swal.close();
        if (successCount > 0) {
          window.NurseNotify?.add('success', 'Telegram (รูปภาพ)', `ส่งรูปภาพพร้อมข้อความสำเร็จ ${successCount} กลุ่ม`);
          showSuccess(`ส่งรูปภาพพร้อมข้อความไปยัง Telegram สำเร็จแล้ว ${successCount} กลุ่ม! 🔵🎨`);
          if (failCount > 0) showError(`มีข้อผิดพลาด ${failCount} กลุ่ม`);
        } else {
          throw new Error('เกิดข้อผิดพลาดในการส่งรูปภาพทั้งหมด');
        }
      } catch (err) {
        Swal.close();
        console.error(err);
        window.NurseNotify?.add('error', 'Telegram ล้มเหลว', err.message || err);
        showError(`ส่งไม่สำเร็จ: ${err.message || err}`);
      }
    } else {
      showLoading(`กำลังส่งแจ้งเตือนไปยัง ${chatTargets.length} กลุ่ม...`);
      try {
        let successCount = 0;
        let failCount = 0;
        
        for (const target of chatTargets) {
          const res  = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: target.id, text: message })
          });
          const data = await res.json();
          if (data.ok) successCount++; else failCount++;
        }
        
        Swal.close();
        if (successCount > 0) {
          window.NurseNotify?.add('success', 'Telegram', `ส่งแจ้งเตือนสำเร็จ ${successCount} กลุ่ม`);
          showSuccess(`ส่งแจ้งเตือนไปยัง Telegram สำเร็จแล้ว ${successCount} กลุ่ม! 🔵`);
          if (failCount > 0) showError(`มีข้อผิดพลาด ${failCount} กลุ่ม`);
        } else {
          window.NurseNotify?.add('error', 'Telegram ล้มเหลว', 'ส่งไม่สำเร็จทั้งหมด');
          showError(`ส่งไม่สำเร็จ: ตรวจสอบ Token / Chat ID`);
        }
      } catch (e) {
        Swal.close();
        window.NurseNotify?.add('error', 'Telegram ล้มเหลว', 'ไม่มีอินเทอร์เน็ต หรือ Token ผิด');
        showError('ส่งไม่สำเร็จ: ไม่มีอินเทอร์เน็ต หรือ Token ผิด');
      }
    }
  }

  async function previewTelegramNotification() {
    const { THAI_MONTHS } = window.NurseConst;
    const message = generateNotification();
    const escaped = message.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const token  = document.getElementById('notifTeleToken')?.value.trim()
                   || state.appSettings?.telegram?.botToken?.trim();
                   
    const targets = state.appSettings?.telegram?.chatTargets || [];
    const targetLabels = targets.length > 0 
      ? targets.map(t => t.label).join(', ') 
      : 'ยังไม่ได้ระบุปลายทาง';

    await Swal.fire({
      title: '<span style="font-size:1.1rem;font-weight:700">🔍 พรีวิวข้อความตารางเวร</span>',
      html: `
        <p style="font-size:11px;color:#64748b;margin-bottom:8px;text-align:left">
          กำหนดจัดส่งไปยัง: <b>${escapeHtml(targetLabels)}</b>
        </p>
        <textarea readonly style="width:100%;height:220px;padding:10px;font-size:11px;
          font-family:monospace;background:#f8fafc;border:1px solid #e2e8f0;
          border-radius:10px;resize:none;line-height:1.6;color:#334155">${escaped}</textarea>
        <div class="mt-2.5 text-left text-[10.5px] text-slate-400">
          💡 ข้อความนี้จัดรูปแบบตามโหมดการแสดงผลที่ท่านเลือก (Layout Mode)
        </div>
      `,
      confirmButtonText: 'ปิดหน้าต่างพรีวิว',
      confirmButtonColor: '#64748b',
      width: '38rem'
    });
  }

  async function sendTelegramNotificationImmediately() {
    const { THAI_MONTHS } = window.NurseConst;
    const token  = document.getElementById('notifTeleToken')?.value.trim()
                   || state.appSettings?.telegram?.botToken?.trim();
    
    const targets = state.appSettings?.telegram?.chatTargets || [];

    if (!token || targets.length === 0) {
      showError('กรุณากรอก Bot Token และกำหนดปลายทาง (Destinations) ให้ครบก่อน');
      return;
    }

    const org = state.appSettings?.orgName || 'หน่วยงาน';
    const monthName = THAI_MONTHS[state.month - 1];
    const yearName = state.year;
    
    const targetLabels = targets.map(t => t.label).join(', ');

    const { isConfirmed, value } = await Swal.fire({
      title: '<span style="font-size:1.1rem;font-weight:700">⚡ ยืนยันส่งตารางเวรทันที</span>',
      html: `
        <p style="font-size:12px;color:#64748b;margin-bottom:15px;">
          ระบบจะจัดส่งตารางปฏิบัติงานตรงไปยังกลุ่ม: <b>${escapeHtml(targetLabels)}</b>
        </p>
        <div class="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-left">
          <div>
            <div class="font-bold text-slate-800 text-xs flex items-center gap-1.5">
              🎨 แนบรูปภาพตารางเวรตกแต่งสวยงาม
            </div>
            <div class="text-[10px] text-slate-400 mt-0.5">ระบบจะแปลงตารางเวรปัจจุบันเป็นรูปภาพอินโฟกราฟิกความละเอียดสูงนำส่งพร้อมข้อความ</div>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" id="teleSendWithImageDirect" class="sr-only peer" checked>
            <div class="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:height-4 after:width-4 after:h-4 after:w-4 after:transition-all peer-checked:bg-sky-600"></div>
          </label>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: '✈️ ส่งข้อมูลทันที',
      cancelButtonText: 'ยกเลิก',
      confirmButtonColor: '#0284c7',
      cancelButtonColor: '#94a3b8',
      width: '33rem',
      preConfirm: () => {
        return {
          sendWithImage: document.getElementById('teleSendWithImageDirect')?.checked
        };
      }
    });

    if (!isConfirmed) return;

    // Save credentials to state + localStorage
    if (!state.appSettings.telegram) state.appSettings.telegram = {};
    state.appSettings.telegram.botToken = token;
    markDirty(); persistAll();

    const message = generateNotification();
    await executeTelegramSend({ sendWithImage: value.sendWithImage, token, chatTargets: targets, message, org, monthName, yearName });
  }

  function exportIndividualCalendar(nurseId, isTimed = false) {
    const { daysInMonth, getShift, getLeave } = window.NurseState;
    const nurse = state.nurses.find(n => n.id === nurseId);
    if (!nurse) { showError('ไม่พบพยาบาลในระบบ'); return; }

    const days = daysInMonth(state.year, state.month);
    const yearAD = state.year - 543;
    const monthStr = String(state.month).padStart(2, '0');
    const ap = state.appSettings || {};
    const st = ap.shiftTimes || {};

    let icsLines = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PROID:-//Nurse Scheduler v3.0//TH',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH'
    ];

    const formatLocalTime = (date) => {
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, '0');
      const d = String(date.getDate()).padStart(2, '0');
      const h = String(date.getHours()).padStart(2, '0');
      const min = String(date.getMinutes()).padStart(2, '0');
      const s = String(date.getSeconds()).padStart(2, '0');
      return `${y}${m}${d}T${h}${min}${s}`;
    };

    const SHIFT_TYPES = window.NurseConst.SHIFT_TYPES;

    for (let d = 1; d <= days; d++) {
      const s = getShift(nurse.id, d);
      const l = getLeave(nurse.id, d);

      if (l) {
        // Leave is always All-Day event
        const dayStr = String(d).padStart(2, '0');
        const dtstart = `${yearAD}${monthStr}${dayStr}`;
        const nextDate = new Date(yearAD, state.month - 1, d + 1);
        const nextY = nextDate.getFullYear();
        const nextM = String(nextDate.getMonth() + 1).padStart(2, '0');
        const nextD = String(nextDate.getDate()).padStart(2, '0');
        const dtend = `${nextY}${nextM}${nextD}`;

        const label = `ลา (${l})`;
        const uid = `${nurse.id}-${dtstart}-leave@nursesch.local`;

        icsLines.push('BEGIN:VEVENT');
        icsLines.push(`UID:${uid}`);
        icsLines.push(`DTSTAMP:${yearAD}${monthStr}${dayStr}T000000Z`);
        icsLines.push(`DTSTART;VALUE=DATE:${dtstart}`);
        icsLines.push(`DTEND;VALUE=DATE:${dtend}`);
        icsLines.push(`SUMMARY:${label}`);
        icsLines.push(`DESCRIPTION:ตารางวันลาของคุณ ${nurse.name} วันที่ ${d}/${state.month}/${state.year} ประเภท: ${l}`);
        icsLines.push('END:VEVENT');
      } else if (s && s !== 'O') {
        const shifts = parseShiftsFromCode(s);

        shifts.forEach((sCode, sIdx) => {
          const dayStr = String(d).padStart(2, '0');
          const uid = `${nurse.id}-${yearAD}${monthStr}${dayStr}-${sCode}-${sIdx}@nursesch.local`;
          const def = SHIFT_TYPES[sCode] || {};
          const label = `เวร ${def.label || sCode}`;

          icsLines.push('BEGIN:VEVENT');
          icsLines.push(`UID:${uid}`);
          icsLines.push(`DTSTAMP:${yearAD}${monthStr}${dayStr}T000000Z`);

          if (isTimed && st[sCode]) {
            const startVal = st[sCode].start;
            const endVal = st[sCode].end;

            const [shH, shM] = startVal.split(':').map(Number);
            let [ehH, ehM] = endVal === '24:00' ? [0, 0] : endVal.split(':').map(Number);

            const startD = new Date(yearAD, state.month - 1, d, shH, shM, 0);
            let endD = new Date(yearAD, state.month - 1, d, ehH, ehM, 0);

            if (endVal === '24:00' || (ehH < shH || (ehH === shH && ehM < shM))) {
              endD = new Date(yearAD, state.month - 1, d + 1, ehH, ehM, 0);
            }

            icsLines.push(`DTSTART;TZID=Asia/Bangkok:${formatLocalTime(startD)}`);
            icsLines.push(`DTEND;TZID=Asia/Bangkok:${formatLocalTime(endD)}`);
          } else {
            // All day
            const dtstart = `${yearAD}${monthStr}${dayStr}`;
            const nextDate = new Date(yearAD, state.month - 1, d + 1);
            const nextY = nextDate.getFullYear();
            const nextM = String(nextDate.getMonth() + 1).padStart(2, '0');
            const nextD = String(nextDate.getDate()).padStart(2, '0');
            const dtend = `${nextY}${nextM}${nextD}`;

            icsLines.push(`DTSTART;VALUE=DATE:${dtstart}`);
            icsLines.push(`DTEND;VALUE=DATE:${dtend}`);
          }

          icsLines.push(`SUMMARY:${label} (${nurse.position})`);
          icsLines.push(`DESCRIPTION:ตารางเวรส่วนบุคคลของคุณ ${nurse.name} วันที่ ${d}/${state.month}/${state.year} ปฏิบัติหน้าที่: ${def.name || label}`);
          icsLines.push('END:VEVENT');
        });
      }
    }

    icsLines.push('END:VCALENDAR');
    const icsText = icsLines.join('\r\n');
    const blob = new Blob([icsText], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `calendar_${nurse.name}_${state.month}_${state.year}_${isTimed ? 'timed' : 'allday'}.ics`;
    a.click();
    URL.revokeObjectURL(url);
    showSuccess(`ส่งออกปฏิทินแบบ${isTimed ? 'ระบุเวลาเวรจริง' : 'ตลอดทั้งวัน'}สำหรับคุณ ${nurse.name} สำเร็จแล้ว`);
  }

  // --------- MULTI-WARD UI ---------
  function renderWardsList() {
    const wards = window.NurseState.getWardsList();
    const active = window.NurseState.getActiveWard();
    const el = document.getElementById('settWardsList');
    if (!el) return;

    let html = `<div class="divide-y divide-slate-100 dark:divide-slate-700">`;
    wards.forEach(w => {
      const isActive = w === active;
      const activeBadge = isActive
        ? `<span class="bg-emerald-100 text-emerald-800 text-xs px-2 py-0.5 rounded-full font-semibold flex items-center gap-1 dark:bg-emerald-950 dark:text-emerald-300">
           <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> แผนกปัจจุบัน
         </span>`
        : '';
      const switchBtn = isActive
        ? `<button disabled class="opacity-50 btn-solid bg-slate-100 dark:bg-slate-800 text-slate-400 text-xs py-1 px-3 rounded-lg cursor-not-allowed">ใช้งานอยู่</button>`
        : `<button onclick="window.NurseSettings.handleSwitchWard('${w}')" type="button" class="btn-solid bg-cyan-600 hover:bg-cyan-700 text-white text-xs py-1 px-3 rounded-lg font-bold">สลับแผนก</button>`;

      // Only show delete button if we have more than 1 ward and it is not active
      const deleteBtn = (wards.length > 1 && !isActive)
        ? `<button onclick="window.NurseSettings.handleDeleteWard('${w}')" type="button" class="text-rose-600 hover:text-rose-800 dark:hover:text-rose-400 p-1.5 hover:bg-rose-50 dark:hover:bg-rose-950 rounded-lg transition-colors"><i data-lucide="trash-2" class="w-4 h-4"></i></button>`
        : '';

      html += `
      <div class="flex items-center justify-between py-3 gap-3">
        <div class="flex items-center gap-2.5">
          <i data-lucide="hotel" class="w-4.5 h-4.5 text-cyan-600"></i>
          <div>
            <span class="font-medium text-slate-700 dark:text-slate-200 text-sm">${w}</span>
            <div class="mt-0.5 flex gap-2">${activeBadge}</div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          ${switchBtn}
          ${deleteBtn}
        </div>
      </div>`;
    });
    html += `</div>`;
    el.innerHTML = html;

    // Update header dropdown as well!
    const selectHeader = document.getElementById('headerWardSelector');
    if (selectHeader) {
      selectHeader.innerHTML = wards.map(w => `<option value="${w}" ${w === active ? 'selected' : ''}>${w}</option>`).join('');
    }

    if (window.lucide) window.lucide.createIcons();
  }

  function handleSwitchWard(name) {
    window.NurseState.switchWard(name);
    showSuccess(`สลับแผนกไปยัง "${name}" เรียบร้อยแล้ว ✨`);
    // Re-render entire app & apply branding theme!
    window.applyBranding?.();
    window.NurseRender.renderSchedule();
    window.NurseRender.renderLeaves();
    window.NurseRender.renderDashboard();
    renderSettings();
  }

  function handleAddWard() {
    Swal.fire({
      title: 'เพิ่มหอผู้ป่วย / แผนกใหม่ 🏥',
      input: 'text',
      inputPlaceholder: 'กรอกชื่อแผนก (เช่น แผนกฉุกเฉิน ER, OPD)',
      showCancelButton: true,
      confirmButtonText: 'สร้างแผนก',
      cancelButtonText: 'ยกเลิก',
      confirmButtonColor: '#0284c7',
      inputValidator: (value) => {
        if (!value || value.trim() === '') return 'กรุณากรอกชื่อแผนก';
        const list = window.NurseState.getWardsList();
        if (list.includes(value.trim())) return 'แผนกนี้มีอยู่แล้วในระบบ';
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const name = result.value.trim();
        window.NurseState.addWard(name);
        showSuccess(`สร้างแผนก "${name}" เรียบร้อยแล้ว`);
        renderWardsList();
      }
    });
  }

  function handleDeleteWard(name) {
    confirmAct(`คุณต้องการลบแผนก "${name}" ใช่หรือไม่? Data ทั้งหมดของแผนกนี้จะสูญหายถาวร!`, () => {
      window.NurseState.deleteWard(name);
      showSuccess(`ลบแผนก "${name}" เรียบร้อยแล้ว`);
      // Re-render
      window.NurseRender.renderSchedule();
      window.NurseRender.renderLeaves();
      window.NurseRender.renderDashboard();
      renderSettings();
    });
  }

  // --------- SNAPSHOTS UI ---------
  function renderTimeMachine() {
    const list = window.NurseState.loadSnapshots();
    const el = document.getElementById('settSnapshotsList');
    if (!el) return;
    if (list.length === 0) {
      el.innerHTML = `
      <div class="text-center py-6 text-slate-400 dark:text-slate-500 text-sm">
        <i data-lucide="history" class="w-8 h-8 mx-auto mb-2 opacity-60"></i>
        ยังไม่มีจุดเก็บบันทึกประวัติตารางเวรชั่วคราว
      </div>`;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    let html = `<div class="space-y-3">`;
    list.forEach((snap, idx) => {
      html += `
      <div class="flex flex-col sm:flex-row sm:items-center justify-between p-3 border border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-800/30 gap-3 hover:border-cyan-500/30 transition-all">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-950/50 text-cyan-600 flex items-center justify-center font-bold text-sm">
            ${idx + 1}
          </div>
          <div>
            <div class="font-bold text-sm text-slate-700 dark:text-slate-200">${snap.label}</div>
            <div class="text-xs text-slate-400 mt-0.5 flex items-center gap-2">
              <span class="flex items-center gap-0.5"><i data-lucide="clock" class="w-3.5 h-3.5"></i> ${snap.timestamp}</span>
            </div>
          </div>
        </div>
        <div class="flex gap-1.5 self-end sm:self-auto">
          <button onclick="window.NurseSettings.handleRestoreSnapshot(${idx})" type="button" class="btn-solid bg-cyan-600 hover:bg-cyan-700 text-white text-xs py-1 px-2.5 rounded-lg font-bold shadow-sm">
            กู้คืน
          </button>
          <button onclick="window.NurseSettings.handleDownloadSnapshot(${idx})" type="button" class="btn-solid bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs py-1 px-2.5 rounded-lg font-bold border border-slate-200">
            โหลด .json
          </button>
          <button onclick="window.NurseSettings.handleDeleteSnapshot(${idx})" type="button" class="text-rose-600 hover:text-rose-800 dark:hover:text-rose-455 p-1 bg-slate-100 hover:bg-rose-50 rounded-lg transition-colors">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
      </div>`;
    });
    html += `</div>`;
    el.innerHTML = html;
    if (window.lucide) window.lucide.createIcons();
  }

  function handleCreateManualSnapshot() {
    Swal.fire({
      title: 'บันทึกประวัติตารางเวรย้อนหลัง 💾',
      input: 'text',
      inputPlaceholder: 'กรอกชื่อกำกับ (เช่น ก่อนแต่งตั้งเวร, ตารางฉบับเคาะ)',
      showCancelButton: true,
      confirmButtonText: 'บันทึก',
      cancelButtonText: 'ยกเลิก',
      confirmButtonColor: '#0284c7',
      inputValidator: (value) => {
        if (!value || value.trim() === '') return 'กรุณากรอกชื่อบันทึกกำกับ';
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const label = result.value.trim();
        window.NurseState.takeSnapshot(label);
        showSuccess(`บันทึกเวอร์ชัน "${label}" สำเร็จแล้ว ✨`);
        renderTimeMachine();
      }
    });
  }

  function handleRestoreSnapshot(index) {
    confirmAct('คุณแน่ใจหรือไม่ว่าจะทำการกู้คืนตารางเวรจากเวอร์ชันนี้? ข้อมูลปัจจุบันในตารางเวรจะถูกเขียนทับ!', () => {
      const res = window.NurseState.restoreSnapshot(index);
      if (res) {
        showSuccess('กู้คืนตารางเวรจากเวอร์ชันที่คุณเลือกสำเร็จแล้ว! 🎉');
        window.NurseRender.renderSchedule();
        window.NurseRender.renderLeaves();
        window.NurseRender.renderDashboard();
        renderSettings();
      } else {
        showError('ไม่สามารถกู้คืนเวอร์ชันนี้ได้');
      }
    });
  }

  // --------- BUDGET & OT ANALYTICS ---------
  function renderBudgetAnalytics() {
    const ap = state.appSettings;
    const budgetCap = ap.budgetCap ?? 50000;

    // Calculate current OT budget using the NurseOT module!
    let ot = { totalAmount: 0, rows: [] };
    if (window.NurseOT?.computeOT) {
      ot = window.NurseOT.computeOT();
    }

    // 1. Budget Progress Bar
    const totalOt = ot.totalAmount || 0;
    const percent = Math.min(100, Math.round((totalOt / budgetCap) * 100));

    // Determine gradient color based on percent: Green (<=60) -> Orange (<=85) -> Red (>85)
    let barColor = 'from-emerald-500 to-teal-500';
    let badgeColor = 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300';
    if (percent > 60 && percent <= 85) {
      barColor = 'from-amber-500 to-orange-500';
      badgeColor = 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300';
    } else if (percent > 85) {
      barColor = 'from-rose-500 to-red-600';
      badgeColor = 'bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300';
    }

    const progressEl = document.getElementById('budgetProgressContainer');
    if (progressEl) {
      progressEl.innerHTML = `
      <div class="flex items-center justify-between text-sm mb-2">
        <span class="font-medium text-slate-500 dark:text-slate-400">ใช้ไปแล้ว ${totalOt.toLocaleString()} ฿ จาก ${budgetCap.toLocaleString()} ฿</span>
        <span class="text-xs font-bold px-2 py-0.5 rounded-full ${badgeColor}">${percent}%</span>
      </div>
      <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-3 overflow-hidden shadow-inner flex">
        <div class="bg-gradient-to-r ${barColor} h-full transition-all duration-500 rounded-full" style="width: ${percent}%"></div>
      </div>
    `;
    }

    // 2. Top 5 OT Earners list
    const earnersEl = document.getElementById('budgetTopEarnersList');
    if (earnersEl) {
      // Sort rows descending by amount
      const sorted = [...(ot.rows || [])]
        .filter(r => r.amount > 0)
        .sort((a, b) => b.amount - a.amount)
        .slice(0, 5);

      if (sorted.length === 0) {
        earnersEl.innerHTML = `
        <div class="text-center py-4 text-slate-400 dark:text-slate-500 text-xs">
          ยังไม่มีข้อมูลค่าตอบแทนเวรเสริมสะสมในเดือนนี้
        </div>`;
      } else {
        let html = `<div class="space-y-2">`;
        sorted.forEach((r, idx) => {
          const cls = POSITIONS[r.position]?.cls || 'pos-rn';
          html += `
          <div class="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all text-xs">
            <div class="flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold">${idx + 1}</span>
              <div>
                <span class="font-semibold text-slate-700 dark:text-slate-200">${r.name}</span>
                <span class="ml-1.5 pos-badge ${cls} text-[10px] py-0 px-1.5">${r.position}</span>
              </div>
            </div>
            <span class="font-bold text-slate-600 dark:text-slate-300">${r.amount.toLocaleString()} ฿</span>
          </div>`;
        });
        html += `</div>`;
        earnersEl.innerHTML = html;
      }
    }

    // 3. Position Cost Distribution breakdown
    const distEl = document.getElementById('budgetCostDistribution');
    if (distEl) {
      const posCosts = {};
      let totalCost = 0;
      (ot.rows || []).forEach(r => {
        if (r.amount > 0) {
          posCosts[r.position] = (posCosts[r.position] || 0) + r.amount;
          totalCost += r.amount;
        }
      });

      if (totalCost === 0) {
        distEl.innerHTML = `
        <div class="text-center py-4 text-slate-400 dark:text-slate-500 text-xs">
          ไม่มีสัดส่วนค่าใช้จ่ายสะสม
        </div>`;
      } else {
        let html = `<div class="space-y-2.5">`;
        Object.keys(posCosts).forEach(pos => {
          const cost = posCosts[pos];
          const pPct = Math.round((cost / totalCost) * 100);
          const cls = POSITIONS[pos]?.cls || 'pos-rn';
          // Map positions to colors
          let pColor = 'bg-cyan-500';
          if (pos.includes('หัวหน้า') || pos.includes('APN')) pColor = 'bg-purple-500';
          else if (pos.includes('PN')) pColor = 'bg-amber-500';
          else if (pos.includes('ผู้ช่วยเหลือ')) pColor = 'bg-pink-500';

          html += `
          <div class="text-xs">
            <div class="flex justify-between font-medium text-slate-500 dark:text-slate-400 mb-1">
              <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full ${pColor}"></span> ${pos}</span>
              <span>${cost.toLocaleString()} ฿ (${pPct}%)</span>
            </div>
            <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div class="${pColor} h-full" style="width: ${pPct}%"></div>
            </div>
          </div>`;
        });
        html += `</div>`;
        distEl.innerHTML = html;
      }
    }
  }

  // ============================================================
  //  🆕 v3.0 ADDITIONS — Logo / Print / A11y / Daily / Shortcuts
  //                       Storage / Anonymize / Thai Holidays
  //                       Custom Shift Types
  // ============================================================
  const THAI_DOW_LABELS = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'];
  const THAI_PUBLIC_HOLIDAYS = [
    { m: 1, d: 1,  name: 'วันขึ้นปีใหม่' },
    { m: 2, d: 12, name: 'วันมาฆบูชา (โดยประมาณ)' },
    { m: 4, d: 6,  name: 'วันจักรี' },
    { m: 4, d: 13, name: 'วันสงกรานต์ (1)' },
    { m: 4, d: 14, name: 'วันสงกรานต์ (2)' },
    { m: 4, d: 15, name: 'วันสงกรานต์ (3)' },
    { m: 5, d: 1,  name: 'วันแรงงาน' },
    { m: 5, d: 4,  name: 'วันฉัตรมงคล' },
    { m: 5, d: 22, name: 'วันวิสาขบูชา (โดยประมาณ)' },
    { m: 6, d: 3,  name: 'วันเฉลิมพระชนมพรรษา สมเด็จพระราชินี' },
    { m: 7, d: 28, name: 'วันเฉลิมพระชนมพรรษา ร.10' },
    { m: 8, d: 12, name: 'วันแม่แห่งชาติ' },
    { m: 10, d: 13, name: 'วันคล้ายวันสวรรคต ร.9' },
    { m: 10, d: 23, name: 'วันปิยมหาราช' },
    { m: 12, d: 5, name: 'วันพ่อแห่งชาติ' },
    { m: 12, d: 10, name: 'วันรัฐธรรมนูญ' },
    { m: 12, d: 31, name: 'วันสิ้นปี' }
  ];

  // ----- LOGO -----
  function renderLogo() {
    const url = state.appSettings?.customLogoUrl || '';
    const prev = document.getElementById('logoPreview');
    if (!prev) return;
    if (url) {
      prev.innerHTML = `<img src="${url}" class="w-full h-full object-contain" alt="logo">`;
    } else {
      prev.innerHTML = 'ยังไม่มีโลโก้';
    }
  }
  function handleLogoUpload(ev) {
    const f = ev.target.files?.[0];
    if (!f) return;
    if (f.size > 500 * 1024) return showError('ไฟล์ใหญ่เกิน 500KB');
    if (!f.type.startsWith('image/')) return showError('ต้องเป็นไฟล์รูปภาพ');
    const reader = new FileReader();
    reader.onload = e => {
      state.appSettings.customLogoUrl = e.target.result;
      markDirty(); persistAll();
      renderLogo();
      showSuccess('อัปโหลดโลโก้แล้ว');
    };
    reader.readAsDataURL(f);
  }
  function removeLogo() {
    if (!state.appSettings.customLogoUrl) return;
    state.appSettings.customLogoUrl = '';
    markDirty(); persistAll();
    renderLogo();
    showSuccess('ลบโลโก้แล้ว');
  }

  // ----- PRINT DEFAULTS -----
  function renderPrintDefaults() {
    const p = state.appSettings.printDefaults || {};
    _v('printPaperSize', p.paperSize || 'A4');
    _v('printOrientation', p.orientation || 'portrait');
    const il = document.getElementById('printIncludeLogo');
    const isig = document.getElementById('printIncludeSignatures');
    if (il) il.checked = p.includeLogo !== false;
    if (isig) isig.checked = p.includeSignatures !== false;
  }
  function savePrintDefaults() {
    state.appSettings.printDefaults = {
      paperSize: document.getElementById('printPaperSize').value,
      orientation: document.getElementById('printOrientation').value,
      includeLogo: document.getElementById('printIncludeLogo').checked,
      includeSignatures: document.getElementById('printIncludeSignatures').checked
    };
    markDirty(); persistAll();
    showSuccess('บันทึกตัวเลือกการพิมพ์แล้ว');
  }

  // ----- ACCESSIBILITY -----
  function applyAccessibility() {
    const a = state.appSettings.accessibility || {};
    const scale = a.fontScale || 100;
    document.documentElement.style.setProperty('--font-scale', (scale / 100).toFixed(2));
    document.body.classList.toggle('reduce-motion', !!a.reduceMotion);
    document.body.classList.toggle('high-contrast', !!a.highContrast);
  }
  function renderAccessibility() {
    const a = state.appSettings.accessibility || {};
    const scale = a.fontScale || 100;
    _v('a11yFontScale', scale);
    const lbl = document.getElementById('a11yFontScaleVal');
    if (lbl) lbl.textContent = scale + '%';
    const rm = document.getElementById('a11yReduceMotion');
    const hc = document.getElementById('a11yHighContrast');
    if (rm) rm.checked = !!a.reduceMotion;
    if (hc) hc.checked = !!a.highContrast;
  }
  function _previewFontScale(v) {
    document.getElementById('a11yFontScaleVal').textContent = v + '%';
    document.documentElement.style.setProperty('--font-scale', (v / 100).toFixed(2));
  }
  function saveAccessibility() {
    state.appSettings.accessibility = {
      fontScale: +document.getElementById('a11yFontScale').value || 100,
      reduceMotion: document.getElementById('a11yReduceMotion').checked,
      highContrast: document.getElementById('a11yHighContrast').checked
    };
    markDirty(); persistAll();
    applyAccessibility();
    showSuccess('บันทึก Accessibility แล้ว');
  }

  // ----- DAILY REQUIREMENTS -----
  function renderDailyReq() {
    const grid = document.getElementById('dailyReqGrid');
    if (!grid) return;
    const dr = state.appSettings.dailyRequirements || { enabled: false, days: {} };
    document.getElementById('dailyReqEnabled').checked = !!dr.enabled;
    grid.innerHTML = '';
    for (let dow = 0; dow < 7; dow++) {
      const d = dr.days?.[dow] || { ch: 0, ba: 0, du: 0 };
      const isWeekend = (dow === 0 || dow === 6);
      const accent = isWeekend ? 'bg-rose-50 border-rose-200' : 'bg-cyan-50 border-cyan-100';
      grid.innerHTML += `
        <div class="${accent} border rounded-xl p-2">
          <div class="text-center font-bold text-slate-700 text-sm mb-1.5">${THAI_DOW_LABELS[dow]}</div>
          <label class="block text-[10px] text-slate-500 mb-0.5">ช</label>
          <input type="number" data-dr-dow="${dow}" data-dr-shift="ch" min="0" max="50" value="${d.ch || 0}"
            class="w-full px-1.5 py-1 mb-1 border border-slate-300 rounded text-xs text-center">
          <label class="block text-[10px] text-slate-500 mb-0.5">บ</label>
          <input type="number" data-dr-dow="${dow}" data-dr-shift="ba" min="0" max="50" value="${d.ba || 0}"
            class="w-full px-1.5 py-1 mb-1 border border-slate-300 rounded text-xs text-center">
          <label class="block text-[10px] text-slate-500 mb-0.5">ด</label>
          <input type="number" data-dr-dow="${dow}" data-dr-shift="du" min="0" max="50" value="${d.du || 0}"
            class="w-full px-1.5 py-1 border border-slate-300 rounded text-xs text-center">
        </div>`;
    }
  }
  function saveDailyReq() {
    const enabled = document.getElementById('dailyReqEnabled').checked;
    const days = {};
    for (let dow = 0; dow < 7; dow++) days[dow] = { ch: 0, ba: 0, du: 0 };
    document.querySelectorAll('#dailyReqGrid input[data-dr-dow]').forEach(inp => {
      const dow = +inp.dataset.drDow;
      const sh = inp.dataset.drShift;
      const v = Math.max(0, Math.min(50, +inp.value || 0));
      days[dow][sh] = v;
    });
    state.appSettings.dailyRequirements = { enabled, days };
    markDirty(); persistAll();
    showSuccess('บันทึก Requirement รายวันแล้ว');
  }

  // ----- KEYBOARD SHORTCUTS -----
  function renderShortcuts() {
    const grid = document.getElementById('shortcutsGrid');
    if (!grid) return;
    const mode = state.appSettings?.shiftMode || 1;
    const map = SHIFT_MODES[mode]?.keyboardMap || {};
    const SHIFT_TYPES = window.NurseConst.SHIFT_TYPES;
    grid.innerHTML = '';
    Object.entries(map).forEach(([key, shift]) => {
      const def = SHIFT_TYPES[shift] || {};
      grid.innerHTML += `
        <div class="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-200">
          <kbd class="px-2.5 py-1 bg-white border border-slate-300 rounded font-mono text-sm font-bold text-slate-700 shadow-sm">${key}</kbd>
          <span class="text-slate-400">→</span>
          <span class="px-2 py-0.5 rounded font-bold text-xs" style="background:${def.bg};color:${def.fg}">${def.label || shift}</span>
          <span class="text-xs text-slate-500 truncate">${def.name || ''}</span>
        </div>`;
    });
  }

  // ----- STORAGE USAGE -----
  function renderStorage() {
    const sizeEl = document.getElementById('storageSize');
    const bar = document.getElementById('storageBar');
    if (!sizeEl) return;
    let bytes = 0;
    try {
      for (const k in localStorage) {
        if (Object.hasOwn(localStorage, k)) bytes += (localStorage[k]?.length || 0) * 2;
      }
    } catch {}
    const kb = bytes / 1024;
    const mb = kb / 1024;
    sizeEl.textContent = kb < 1024 ? kb.toFixed(1) + ' KB' : mb.toFixed(2) + ' MB';
    const cap = 5 * 1024 * 1024;
    const pct = Math.min(100, (bytes / cap) * 100);
    bar.style.width = pct + '%';

    // Update Data Overview Dashboard Storage Meter
    const diagCircle = document.getElementById('diagStorageCircle');
    const diagPercent = document.getElementById('diagStoragePercent');
    const diagBytes = document.getElementById('diagStorageBytes');
    if (diagPercent) diagPercent.textContent = pct.toFixed(1) + '%';
    if (diagBytes) diagBytes.textContent = kb < 1024 ? kb.toFixed(1) + ' KB' : mb.toFixed(2) + ' MB';
    if (diagCircle) {
      const offset = 251.2 * (1 - pct / 100);
      diagCircle.style.strokeDashoffset = offset;
    }
  }
  function cleanupStorage() {
    confirmAct('ลบ snapshots และ history เก่า?', 'จะคงเหลือเฉพาะข้อมูลตารางเวรปัจจุบัน').then(r => {
      if (!r.isConfirmed) return;
      state.historySnapshots = [];
      if (state.timeMachine) state.timeMachine = [];
      markDirty(); persistAll();
      renderStorage();
      showSuccess('ล้างข้อมูลเก่าแล้ว');
    });
  }

  // ----- ANONYMIZE EXPORT -----
  function renderAnonymize() {
    const cb = document.getElementById('anonExport');
    if (cb) cb.checked = !!state.appSettings.anonymizeExport;
  }
  function saveAnonymize() {
    state.appSettings.anonymizeExport = document.getElementById('anonExport').checked;
    markDirty(); persistAll();
    showSuccess(state.appSettings.anonymizeExport ? 'เปิดโหมดนิรนาม' : 'ปิดโหมดนิรนาม');
  }

  // ----- THAI PUBLIC HOLIDAY PRESET -----
  function applyThaiHolidayPreset() {
    const yBE = +document.getElementById('thaiHolYear').value;
    if (!yBE || yBE < 2566 || yBE > 2700) return showError('กรุณากรอกปี พ.ศ. ที่ถูกต้อง');
    if (!Array.isArray(state.appSettings.customHolidays)) state.appSettings.customHolidays = [];
    const existing = new Set(state.appSettings.customHolidays.map(h => `${h.yBE}-${h.m}-${h.d}`));
    let added = 0, skipped = 0;
    THAI_PUBLIC_HOLIDAYS.forEach(h => {
      const key = `${yBE}-${h.m}-${h.d}`;
      if (existing.has(key)) { skipped++; return; }
      state.appSettings.customHolidays.push({ yBE, m: h.m, d: h.d, name: h.name });
      added++;
    });
    markDirty(); persistAll();
    renderCustomHolidaysList();
    showSuccess(`เพิ่ม ${added} วัน (ข้าม ${skipped} วันที่ซ้ำ)`);
  }

  // ----- CUSTOM SHIFT TYPES -----
  function renderCustomShifts() {
    const list = document.getElementById('customShiftsList');
    if (!list) return;
    const arr = state.appSettings.customShifts || [];
    if (arr.length === 0) {
      list.innerHTML = `<div class="text-center py-6 text-slate-400 text-sm border-2 border-dashed border-slate-200 rounded-xl">
        ยังไม่มีประเภทเวรกำหนดเอง — กด "เพิ่มประเภทเวรใหม่" เพื่อเริ่ม
      </div>`;
      return;
    }
    list.innerHTML = arr.map((s, i) => `
      <div class="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
        <span class="px-3 py-1.5 rounded-lg font-bold text-sm" style="background:${s.bg};color:${s.fg}">${s.code}</span>
        <div class="flex-1 min-w-0">
          <div class="font-semibold text-slate-700 text-sm truncate">${s.name}</div>
          <div class="text-[11px] text-slate-500">⏰ ${s.startTime || '—'} - ${s.endTime || '—'} · AI:${s.aiBucket === 'morning' ? 'เช้า' : s.aiBucket === 'afternoon' ? 'บ่าย' : s.aiBucket === 'night' ? 'ดึก' : 'ไม่นับ'}</div>
        </div>
        <button onclick="window.NurseSettings.openCustomShiftDialog(${i})" type="button"
          class="text-xs px-2.5 py-1 bg-cyan-100 hover:bg-cyan-200 text-cyan-800 rounded font-bold">แก้ไข</button>
        <button onclick="window.NurseSettings.removeCustomShift(${i})" type="button"
          class="text-xs px-2.5 py-1 bg-rose-100 hover:bg-rose-200 text-rose-700 rounded font-bold">ลบ</button>
      </div>`).join('');
  }
  function openCustomShiftDialog(editIdx) {
    const arr = state.appSettings.customShifts || (state.appSettings.customShifts = []);
    const isEdit = editIdx !== undefined && editIdx !== null && arr[editIdx];
    const cur = isEdit ? arr[editIdx] : { code: '', name: '', bg: '#fef9c3', fg: '#854d0e', startTime: '08:00', endTime: '16:00', aiBucket: '' };
    Swal.fire({
      title: isEdit ? '✏️ แก้ไขประเภทเวร' : '➕ เพิ่มประเภทเวรใหม่',
      width: 480,
      html: `<div class="text-left space-y-3">
        <div>
          <label class="text-xs font-semibold text-slate-600 block mb-1">รหัสเวร (1-3 ตัวอักษร)</label>
          <input id="csCode" type="text" maxlength="3" value="${cur.code}" placeholder="เช่น ICU"
            class="w-full px-3 py-2 border border-slate-300 rounded-lg text-base font-bold uppercase">
        </div>
        <div>
          <label class="text-xs font-semibold text-slate-600 block mb-1">ชื่อเต็ม</label>
          <input id="csName" type="text" maxlength="40" value="${cur.name}" placeholder="เช่น เวรห้องผ่าตัด"
            class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="text-xs font-semibold text-slate-600 block mb-1">สีพื้นหลัง</label>
            <input id="csBg" type="color" value="${cur.bg}" class="w-full h-10 border border-slate-300 rounded-lg cursor-pointer">
          </div>
          <div>
            <label class="text-xs font-semibold text-slate-600 block mb-1">สีตัวอักษร</label>
            <input id="csFg" type="color" value="${cur.fg}" class="w-full h-10 border border-slate-300 rounded-lg cursor-pointer">
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="text-xs font-semibold text-slate-600 block mb-1">เวลาเริ่ม</label>
            <input id="csStart" type="time" value="${cur.startTime || '08:00'}"
              class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
          </div>
          <div>
            <label class="text-xs font-semibold text-slate-600 block mb-1">เวลาสิ้นสุด</label>
            <input id="csEnd" type="time" value="${cur.endTime || '16:00'}"
              class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
          </div>
        </div>
        <div>
          <label class="text-xs font-semibold text-slate-600 block mb-1">นับเป็นกะ AI</label>
          <select id="csAiBucket" class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
            <option value="" ${!cur.aiBucket ? 'selected' : ''}>ไม่นับในกะ เช้า/บ่าย/ดึก</option>
            <option value="morning" ${cur.aiBucket === 'morning' ? 'selected' : ''}>เช้า</option>
            <option value="afternoon" ${cur.aiBucket === 'afternoon' ? 'selected' : ''}>บ่าย</option>
            <option value="night" ${cur.aiBucket === 'night' ? 'selected' : ''}>ดึก</option>
          </select>
        </div>
        <div id="csPreview" class="text-center py-2 rounded-lg font-bold text-sm" style="background:${cur.bg};color:${cur.fg}">${cur.code || 'PREVIEW'}</div>
      </div>`,
      showCancelButton: true,
      confirmButtonText: isEdit ? 'บันทึก' : 'เพิ่ม',
      cancelButtonText: 'ยกเลิก',
      confirmButtonColor: '#0ea5e9',
      didOpen: () => {
        const sync = () => {
          const p = document.getElementById('csPreview');
          p.style.background = document.getElementById('csBg').value;
          p.style.color = document.getElementById('csFg').value;
          p.textContent = (document.getElementById('csCode').value || 'PREVIEW').toUpperCase();
        };
        ['csCode','csBg','csFg'].forEach(id => document.getElementById(id).addEventListener('input', sync));
      },
      preConfirm: () => {
        const code = document.getElementById('csCode').value.trim().toUpperCase();
        const name = document.getElementById('csName').value.trim();
        if (!code) { Swal.showValidationMessage('กรุณากรอกรหัสเวร'); return false; }
        if (!name) { Swal.showValidationMessage('กรุณากรอกชื่อเวร'); return false; }
        const dup = arr.findIndex((s, i) => s.code === code && i !== editIdx);
        if (dup >= 0) { Swal.showValidationMessage(`รหัส "${code}" มีอยู่แล้ว`); return false; }
        return {
          code, name,
          bg: document.getElementById('csBg').value,
          fg: document.getElementById('csFg').value,
          startTime: document.getElementById('csStart').value,
          endTime: document.getElementById('csEnd').value,
          aiBucket: document.getElementById('csAiBucket').value
        };
      }
    }).then(r => {
      if (!r.isConfirmed) return;
      if (isEdit) arr[editIdx] = r.value; else arr.push(r.value);
      markDirty(); persistAll();
      renderCustomShifts();
      window.NurseUI?.renderShiftPalette?.();
      window.NurseRender?.renderSchedule?.();
      window.NurseRender?.renderCalendar?.();
      showSuccess(isEdit ? 'บันทึกแล้ว' : 'เพิ่มประเภทเวรแล้ว');
    });
  }
  function removeCustomShift(idx) {
    const arr = state.appSettings.customShifts || [];
    if (!arr[idx]) return;
    confirmAct(`ลบประเภทเวร "${arr[idx].code}"?`, '').then(r => {
      if (!r.isConfirmed) return;
      arr.splice(idx, 1);
      markDirty(); persistAll();
      renderCustomShifts();
      window.NurseUI?.renderShiftPalette?.();
      window.NurseRender?.renderSchedule?.();
      window.NurseRender?.renderCalendar?.();
      showSuccess('ลบแล้ว');
    });
  }



  // 🆕 v3.0 Data Overview Dashboard & Diagnostics
  function renderDataDashboard() {
    const isLocked = window.NurseState.isSystemLocked();
    const isSecEnabled = !!state.appSettings.accessControl?.enabled;
    const healthSecIcon = document.getElementById('healthSecIcon');
    const healthSecText = document.getElementById('healthSecText');
    const healthSaveIcon = document.getElementById('healthSaveIcon');
    const healthSaveText = document.getElementById('healthSaveText');
    const healthWardIcon = document.getElementById('healthWardIcon');
    const healthWardText = document.getElementById('healthWardText');

    if (healthSecText && healthSecIcon) {
      if (isSecEnabled) {
        if (isLocked) {
          healthSecText.innerHTML = 'ความปลอดภัย: <span class="text-rose-350 font-bold">ล็อกตารางเวร (จำกัดสิทธิ์แก้ไข)</span>';
          healthSecIcon.className = 'w-4 h-4 text-rose-400';
          healthSecIcon.setAttribute('data-lucide', 'lock');
        } else {
          healthSecText.innerHTML = 'ความปลอดภัย: <span class="text-emerald-350 font-bold">ปลดล็อก (พร้อมแก้ไข)</span>';
          healthSecIcon.className = 'w-4 h-4 text-emerald-400';
          healthSecIcon.setAttribute('data-lucide', 'unlock');
        }
      } else {
        healthSecText.innerHTML = 'ความปลอดภัย: ยังไม่ได้เปิดระบบ';
        healthSecIcon.className = 'w-4 h-4 text-slate-400';
        healthSecIcon.setAttribute('data-lucide', 'shield-off');
      }
    }

    if (healthSaveText && healthSaveIcon) {
      const autosaveMs = state.appSettings.autosaveMs || 2000;
      healthSaveText.innerHTML = `บันทึกอัตโนมัติ: <span class="text-emerald-350 font-bold">เปิดใช้งาน (${(autosaveMs / 1000).toFixed(1)} วินาที)</span>`;
      healthSaveIcon.className = 'w-4 h-4 text-emerald-400';
      healthSaveIcon.setAttribute('data-lucide', 'check-circle');
    }

    if (healthWardText && healthWardIcon) {
      const activeWard = window.NurseState.getActiveWard() || 'ICU Ward';
      healthWardText.innerHTML = `แผนกตึกปัจจุบัน: <span class="text-cyan-300 font-bold">${activeWard}</span>`;
      healthWardIcon.className = 'w-4 h-4 text-cyan-300';
      // lucide ไม่มี 'hospital' — ใช้ 'building-2' แทน (ตึก)
      healthWardIcon.setAttribute('data-lucide', 'building-2');
    }

    // Stats
    const diagNurseCount = document.getElementById('diagNurseCount');
    const diagScheduleFill = document.getElementById('diagScheduleFill');
    const diagIcsEstSize = document.getElementById('diagIcsEstSize');

    const activeNurses = state.nurses.filter(n => n.active !== false);
    if (diagNurseCount) diagNurseCount.textContent = `${activeNurses.length} คน`;

    const days = window.NurseState.daysInMonth(state.year, state.month);
    let totalWorkableSlots = activeNurses.length * days;
    let filledSlots = 0;
    activeNurses.forEach(n => {
      for (let d = 1; d <= days; d++) {
        const s = window.NurseState.getShift(n.id, d);
        if (s && s !== 'O') filledSlots++;
      }
    });

    const fillRate = totalWorkableSlots > 0 ? (filledSlots / totalWorkableSlots) * 100 : 0;
    if (diagScheduleFill) diagScheduleFill.textContent = `${fillRate.toFixed(1)}%`;

    const estBytes = 150 + filledSlots * 250;
    if (diagIcsEstSize) diagIcsEstSize.textContent = `${(estBytes / 1024).toFixed(1)} KB`;

    if (window.lucide) window.lucide.createIcons();
  }

  // 🆕 v3.0 Local Safety Rollbacks
  function renderAutoBackupsTimeline() {
    const list = window.NurseState.loadAutoBackups();
    const el = document.getElementById('autoBackupsTimeline');
    if (!el) return;
    if (list.length === 0) {
      el.innerHTML = `<p class="text-[11px] text-slate-400 text-center py-2">ยังไม่มีจุดสำรองข้อมูลอัตโนมัติสำรองไว้</p>`;
      return;
    }
    let html = `<div class="space-y-2">`;
    list.forEach((b, idx) => {
      html += `
      <div class="flex items-center justify-between p-2.5 border border-slate-100 rounded-xl bg-slate-50/70 gap-2 hover:border-amber-500/20 transition-all text-xs">
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-[10px]">
            ${idx + 1}
          </div>
          <div>
            <div class="font-bold text-slate-700">${b.label}</div>
            <div class="text-[10px] text-slate-400 flex items-center gap-0.5 mt-0.5"><i data-lucide="clock" class="w-3.5 h-3.5"></i> ${b.timestamp}</div>
          </div>
        </div>
        <div class="flex gap-1.5">
          <button onclick="window.NurseSettings.handleRestoreAutoBackup(${idx})" type="button" class="px-2 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded text-[10px] font-bold">
            กู้คืน
          </button>
          <button onclick="window.NurseSettings.handleDeleteAutoBackup(${idx})" type="button" class="px-2 py-1 bg-slate-100 hover:bg-rose-100 text-slate-500 hover:text-rose-700 rounded text-[10px] font-bold transition-all">
            ลบ
          </button>
        </div>
      </div>`;
    });
    html += `</div>`;
    el.innerHTML = html;
    if (window.lucide) window.lucide.createIcons();
  }

  function handleRestoreAutoBackup(index) {
    confirmAct('ยืนยันย้อนข้อมูลจากจุดโรลแบ็ก?', 'ข้อมูลปัจจุบันของคุณจะถูกย้อนกลับไปยังก่อนการดำเนินการนี้').then(r => {
      if (!r.isConfirmed) return;
      const res = window.NurseState.restoreAutoBackup(index);
      if (res) {
        showSuccess('ย้อนข้อมูลสำเร็จ! 🎉');
        window.NurseRender.renderSchedule();
        window.NurseRender.renderLeaves();
        window.NurseRender.renderDashboard();
        renderSettings();
      } else {
        showError('ไม่สามารถกู้คืนได้');
      }
    });
  }

  function handleDeleteAutoBackup(index) {
    const res = window.NurseState.deleteAutoBackup(index);
    if (res) {
      showSuccess('ลบประวัติการย้อนกลับเรียบร้อย');
      renderAutoBackupsTimeline();
    }
  }

  // 🆕 v3.0 Shift Timings Drawer
  function renderShiftTimings() {
    const grid = document.getElementById('shiftTimesGrid');
    if (!grid) return;
    const ap = state.appSettings;
    if (!ap.shiftTimes) {
      ap.shiftTimes = {
        'ช': { start: '08:00', end: '16:00' },
        'บ': { start: '16:00', end: '24:00' },
        'ด': { start: '00:00', end: '08:00' },
        'เย็น': { start: '16:30', end: '20:30' },
        'OT': { start: '08:00', end: '16:00' },
        'D12': { start: '08:00', end: '20:00' },
        'N12': { start: '20:00', end: '08:00' }
      };
    }
    const st = ap.shiftTimes;
    grid.innerHTML = Object.entries(st).map(([code, time]) => `
      <div class="p-2.5 bg-white border border-purple-200/60 rounded-xl flex flex-col gap-1.5 shadow-sm">
        <span class="font-black text-purple-950 text-xs flex items-center gap-1">
          <span class="px-1.5 py-0.5 bg-purple-100 rounded text-[10px]">${code}</span>
        </span>
        <div class="grid grid-cols-2 gap-1">
          <div>
            <label class="text-[9px] font-bold text-slate-400 block">เริ่ม</label>
            <input type="text" id="st_start_${code}" value="${time.start}" placeholder="08:00" class="w-full text-center px-1 py-0.5 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-purple-400 font-mono">
          </div>
          <div>
            <label class="text-[9px] font-bold text-slate-400 block">สิ้นสุด</label>
            <input type="text" id="st_end_${code}" value="${time.end}" placeholder="16:00" class="w-full text-center px-1 py-0.5 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-purple-400 font-mono">
          </div>
        </div>
      </div>
    `).join('');
  }

  function saveShiftTimings() {
    const ap = state.appSettings;
    if (!ap.shiftTimes) ap.shiftTimes = {};
    const st = ap.shiftTimes;
    const regex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
    let valid = true;
    const newTimes = {};
    
    for (const code of Object.keys(st)) {
      const startEl = document.getElementById(`st_start_${code}`);
      const endEl = document.getElementById(`st_end_${code}`);
      if (!startEl || !endEl) continue;
      
      const startVal = startEl.value.trim();
      const endVal = endEl.value.trim();
      
      if (!regex.test(startVal) && startVal !== '24:00') {
        showError(`เวลาเริ่มต้นเวร "${code}" ไม่ถูกต้อง (รูปแบบ HH:MM)`);
        valid = false;
        break;
      }
      if (!regex.test(endVal) && endVal !== '24:00') {
        showError(`เวลาสิ้นสุดเวร "${code}" ไม่ถูกต้อง (รูปแบบ HH:MM หรือ 24:00)`);
        valid = false;
        break;
      }
      newTimes[code] = { start: startVal, end: endVal };
    }
    
    if (valid) {
      ap.shiftTimes = newTimes;
      markDirty();
      persistAll();
      showSuccess('บันทึกเวลาปฏิบัติงานในเวรจริงเรียบร้อยแล้ว ✨');
      renderShiftTimings();
      renderDataDashboard();
    }
  }

  // 🆕 v3.0 Roster & iCalendar Hub
  let selectedRosterNurseId = null;

  function parseShiftsFromCode(code) {
    if (!code) return [];
    const singleKeys = ['เย็น', 'D12', 'N12', 'OT', 'ช', 'บ', 'ด', 'O', 'V', 'T'];
    const customCodes = (state.appSettings.customShifts || []).map(s => s.code);
    const tokens = Array.from(new Set([...customCodes, ...singleKeys])).sort((a, b) => b.length - a.length);
    
    let temp = code;
    const result = [];
    while (temp.length > 0) {
      let matched = false;
      for (const token of tokens) {
        if (temp.startsWith(token)) {
          result.push(token);
          temp = temp.slice(token.length);
          matched = true;
          break;
        }
      }
      if (!matched) {
        result.push(temp[0]);
        temp = temp.slice(1);
      }
    }
    return result.filter(t => t !== 'O');
  }

  function renderRosterHub() {
    const searchInput = document.getElementById('rosterSearchInput');
    const q = searchInput ? searchInput.value : '';
    const container = document.getElementById('rosterNursesContainer');
    if (!container) return;
    
    let nurses = state.nurses.filter(n => n.active !== false);
    nurses.sort((a, b) => (a.order || 999) - (b.order || 999));
    
    if (q) {
      const term = q.toLowerCase().trim();
      nurses = nurses.filter(n => 
        n.name.toLowerCase().includes(term) || 
        n.position.toLowerCase().includes(term) || 
        n.id.toLowerCase().includes(term)
      );
    }
    
    if (nurses.length === 0) {
      container.innerHTML = `<p class="text-xs text-slate-400 text-center py-8">ไม่พบพยาบาลตรงตามเงื่อนไขการค้นหา</p>`;
      return;
    }
    
    container.innerHTML = nurses.map(n => {
      const stats = window.NurseState.computeNurseStats(n.id);
      const isSelected = selectedRosterNurseId === n.id;
      const initial = n.name.replace(/^(นางสาว|นาง|นาย)/, '').slice(0, 2);
      
      return `
        <div onclick="window.NurseSettings.selectRosterNurse('${n.id}')" 
          class="group flex flex-col md:flex-row md:items-center justify-between p-3 mb-2 rounded-xl border transition-all cursor-pointer ${
            isSelected 
              ? 'bg-purple-50 border-purple-300 ring-2 ring-purple-200' 
              : 'bg-white border-slate-100 hover:bg-slate-50 hover:border-purple-200'
          }">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-purple-100 text-purple-700 font-black text-xs flex items-center justify-center border border-purple-200/50">
              ${initial}
            </div>
            <div>
              <div class="font-bold text-slate-700 text-sm flex items-center gap-1.5">
                ${n.name}
                <span class="text-[10px] px-2 py-0.5 rounded-full font-bold bg-slate-100 text-slate-650 border border-slate-200">${n.position}</span>
              </div>
              <div class="text-[10px] text-slate-400 mt-1 flex items-center gap-2">
                <span>ID: <strong class="text-slate-600 font-mono">${n.id}</strong></span>
                <span class="text-slate-300">|</span>
                <span>เวรปฏิบัติงานทั้งหมด: <strong class="text-purple-700 font-extrabold">${stats.total || 0} เวร</strong></span>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-1.5 mt-2.5 md:mt-0 items-center" onclick="event.stopPropagation()">
            <button onclick="window.NurseSettings.exportIndividualCalendar('${n.id}', false)" type="button" 
              class="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[10px] flex items-center gap-1">
              <i data-lucide="calendar" class="w-3 h-3 text-slate-500"></i> โหลด .ics (ทั้งวัน)
            </button>
            <button onclick="window.NurseSettings.exportIndividualCalendar('${n.id}', true)" type="button" 
              class="px-2 py-1 rounded bg-purple-600 hover:bg-purple-700 text-white font-bold text-[10px] flex items-center gap-1 shadow-sm transition-colors">
              <i data-lucide="clock" class="w-3 h-3 text-purple-200"></i> โหลด .ics (เวลาเวร)
            </button>
            <button onclick="window.NurseSettings.copyNurseScheduleText('${n.id}')" type="button" 
              class="px-2 py-1 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-[10px] flex items-center gap-1 border border-emerald-200/50">
              <i data-lucide="clipboard" class="w-3 h-3 text-emerald-600"></i> คัดลอกสรุปเวร
            </button>
          </div>
        </div>
      `;
    }).join('');
    
    if (window.lucide) window.lucide.createIcons();
  }

  function selectRosterNurse(id) {
    selectedRosterNurseId = id;
    renderRosterHub();
    
    const nurse = state.nurses.find(n => n.id === id);
    if (!nurse) return;
    
    const namePreviewEl = document.getElementById('previewNurseName');
    if (namePreviewEl) {
      namePreviewEl.textContent = nurse.name.replace(/^(นางสาว|นาง|นาย)/, '');
    }
    
    const monthPreviewEl = document.getElementById('previewCalMonth');
    if (monthPreviewEl) {
      const { THAI_MONTHS } = window.NurseConst;
      monthPreviewEl.textContent = THAI_MONTHS[state.month - 1];
    }
    
    const eventsEl = document.getElementById('iphonePreviewEvents');
    if (!eventsEl) return;
    
    const days = window.NurseState.daysInMonth(state.year, state.month);
    const st = state.appSettings.shiftTimes || {};
    const SHIFT_TYPES = window.NurseConst.SHIFT_TYPES;
    
    let eventsHtml = '';
    
    for (let d = 1; d <= days; d++) {
      const s = window.NurseState.getShift(nurse.id, d);
      const l = window.NurseState.getLeave(nurse.id, d);
      
      if (l) {
        eventsHtml += `
          <div class="p-2 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-start gap-2 shadow-sm">
            <div class="w-1 h-8 rounded bg-emerald-500 self-stretch"></div>
            <div class="flex-1 min-w-0">
              <div class="font-black text-emerald-950 text-[10px]">วันลา (${l})</div>
              <div class="text-[8px] text-emerald-600 font-bold mt-0.5">วันที่ ${d} · ทั้งวัน</div>
            </div>
          </div>
        `;
      } else if (s && s !== 'O') {
        const subShifts = parseShiftsFromCode(s);
        subShifts.forEach(sCode => {
          const def = SHIFT_TYPES[sCode] || {};
          const timeStr = st[sCode] ? `${st[sCode].start} - ${st[sCode].end}` : 'ตลอดทั้งวัน (All-Day)';
          const bg = def.bg || '#f1f5f9';
          const fg = def.fg || '#334155';
          
          eventsHtml += `
            <div class="p-2 rounded-xl flex items-start gap-2 shadow-sm border border-slate-100" style="background: ${bg}30">
              <div class="w-1 h-8 rounded self-stretch" style="background: ${bg}"></div>
              <div class="flex-1 min-w-0">
                <div class="font-extrabold text-[10px] truncate" style="color: ${fg}">เวร ${def.label || sCode} · ${def.name || ''}</div>
                <div class="text-[8px] font-bold mt-0.5" style="color: ${fg}aa">
                  📅 วันที่ ${d} · ⏰ ${timeStr}
                </div>
              </div>
            </div>
          `;
        });
      }
    }
    
    if (eventsHtml === '') {
      eventsEl.innerHTML = `
        <div class="text-[10px] text-slate-400 text-center py-10">
          <i data-lucide="smile" class="w-8 h-8 mx-auto mb-2 opacity-40"></i>
          ไม่มีกิจกรรมปฏิบัติงานในเดือนนี้
        </div>`;
      if (window.lucide) window.lucide.createIcons();
    } else {
      eventsEl.innerHTML = eventsHtml;
    }
  }

  function copyNurseScheduleText(nurseId) {
    const nurse = state.nurses.find(n => n.id === nurseId);
    if (!nurse) return;
    
    const { THAI_MONTHS } = window.NurseConst;
    const days = window.NurseState.daysInMonth(state.year, state.month);
    
    let text = `🏥 สรุปตารางเวรส่วนบุคคล: ${nurse.name} (${nurse.position})\n`;
    text += `📅 ประจำเดือน: ${THAI_MONTHS[state.month - 1]} ${state.year}\n`;
    text += `──────────────────\n`;
    
    let hasDuty = false;
    for (let d = 1; d <= days; d++) {
      const s = window.NurseState.getShift(nurse.id, d);
      const l = window.NurseState.getLeave(nurse.id, d);
      
      if (l) {
        text += `📅 วันที่ ${String(d).padStart(2, '0')}: ❌ ลา (${l})\n`;
        hasDuty = true;
      } else if (s && s !== 'O') {
        const subShifts = parseShiftsFromCode(s);
        const shiftLabels = subShifts.map(sCode => {
          const def = window.NurseConst.SHIFT_TYPES[sCode] || {};
          const timeStr = state.appSettings.shiftTimes?.[sCode] 
            ? ` (${state.appSettings.shiftTimes[sCode].start}-${state.appSettings.shiftTimes[sCode].end} น.)`
            : '';
          return `เวร${def.label || sCode}${timeStr}`;
        }).join(', ');
        
        text += `📅 วันที่ ${String(d).padStart(2, '0')}: 📋 ${shiftLabels}\n`;
        hasDuty = true;
      }
    }
    
    if (!hasDuty) {
      text += `🎉 เดือนนี้ไม่มีเวรปฏิบัติงาน (พักผ่อน)\n`;
    }
    
    text += `──────────────────\n`;
    text += `*สร้างโดยระบบจัดตารางเวรพยาบาลอัจฉริยะ`;
    
    navigator.clipboard.writeText(text).then(() => {
      showSuccess(`คัดลอกสรุปเวรของคุณ ${nurse.name} ลงคลิปบอร์ดแล้ว! Clipboard Copied!`);
    }).catch(err => {
      console.error(err);
      showError('ไม่สามารถคัดลอกข้อความได้');
    });
  }

  // 🆕 v3.0 Drag and Drop & Guide Operations
  function handleDroppedBackupFile(file) {
    const dropzoneContent = document.getElementById('dropzoneContent');
    const dropzoneSpinner = document.getElementById('dropzoneSpinner');
    
    if (dropzoneContent && dropzoneSpinner) {
      dropzoneContent.classList.add('hidden');
      dropzoneSpinner.classList.remove('hidden');
    }
    
    const reader = new FileReader();
    reader.onload = ev => {
      setTimeout(() => {
        try {
          const raw = JSON.parse(ev.target.result);
          const cleaned = window.NurseState.validateLoadedState(raw);
          if (!cleaned) {
            showError('นำเข้าไม่สำเร็จ: โครงสร้างไฟล์ .json ไม่ถูกต้อง หรือไม่มีข้อมูลที่ต้องการ');
            resetDropzoneUI();
            return;
          }
          
          window.NurseState.takeAutoBackup("ก่อนนำเข้าไฟล์ข้อมูล JSON (ลากวาง)");
          
          Object.assign(state, cleaned);
          if (raw.appSettings) {
            Object.assign(state.appSettings, sanitizeAppSettings(raw.appSettings));
          }
          
          invalidateStats();
          persistAll();
          
          window.NurseRender.renderSchedule();
          window.NurseRender.renderLeaves();
          window.NurseRender.renderDashboard();
          if (window.NurseUI) {
            window.NurseUI.initSelectors();
            window.NurseUI.loadReqToUI();
            window.NurseUI.loadOTToUI();
          }
          
          renderSettings();
          showSuccess('นำเข้าข้อมูลสำเร็จและสร้างจุด rollback สำรองเรียบร้อยแล้ว! 🎉');
          resetDropzoneUI();
        } catch (err) {
          console.error(err);
          showError('เกิดข้อผิดพลาดในการอ่านไฟล์ JSON');
          resetDropzoneUI();
        }
      }, 800);
    };
    reader.readAsText(file);
  }
  
  function resetDropzoneUI() {
    const dropzoneContent = document.getElementById('dropzoneContent');
    const dropzoneSpinner = document.getElementById('dropzoneSpinner');
    if (dropzoneContent && dropzoneSpinner) {
      dropzoneSpinner.classList.add('hidden');
      dropzoneContent.classList.remove('hidden');
    }
    const fileInput = document.getElementById('backupFileInput');
    if (fileInput) fileInput.value = '';
  }

  function toggleSyncGuideTab(tab) {
    const btnGoogle = document.getElementById('syncBtnGoogle');
    const btnApple = document.getElementById('syncBtnApple');
    const guideGoogle = document.getElementById('syncGuideGoogle');
    const guideApple = document.getElementById('syncGuideApple');
    
    if (!btnGoogle || !btnApple || !guideGoogle || !guideApple) return;
    
    if (tab === 'google') {
      btnGoogle.className = "flex-1 text-center py-1.5 rounded-lg text-xs font-bold bg-white text-slate-800 transition-all";
      btnApple.className = "flex-1 text-center py-1.5 rounded-lg text-xs font-bold text-cyan-100 hover:text-white transition-all";
      guideGoogle.classList.remove('hidden');
      guideApple.classList.add('hidden');
    } else {
      btnApple.className = "flex-1 text-center py-1.5 rounded-lg text-xs font-bold bg-white text-slate-800 transition-all";
      btnGoogle.className = "flex-1 text-center py-1.5 rounded-lg text-xs font-bold text-cyan-100 hover:text-white transition-all";
      guideApple.classList.remove('hidden');
      guideGoogle.classList.add('hidden');
    }
  }

  // 🆕 v3.0 Individual Snapshot operations
  function handleDeleteSnapshot(index) {
    confirmAct('คุณแน่ใจหรือไม่ว่าจะลบจุดเซฟนี้?', 'เมื่อลบแล้วจะไม่สามารถกู้คืนจุดเซฟนี้ได้อีก').then(r => {
      if (!r.isConfirmed) return;
      const res = window.NurseState.deleteSnapshot(index);
      if (res) {
        showSuccess('ลบจุดเซฟเสร็จสมบูรณ์');
        renderTimeMachine();
        renderStorage();
      }
    });
  }

  function handleDownloadSnapshot(index) {
    const list = window.NurseState.loadSnapshots();
    const snap = list[index];
    if (!snap) { showError('ไม่พบจุดเซฟนี้'); return; }
    
    const data = {
      _backupVersion: 'v2.8.0',
      _exportedAt: new Date().toISOString(),
      _isSnapshotExport: true,
      _snapshotLabel: snap.label,
      year: state.year,
      month: state.month,
      nurses: state.nurses,
      schedule: snap.schedule,
      lockedShifts: snap.lockedShifts || {},
      leaves: snap.leaves,
      requirements: state.requirements,
      otSettings: state.otSettings,
      treatHolidayAsWeekend: state.treatHolidayAsWeekend,
      appSettings: state.appSettings
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `snapshot_${snap.label.replace(/\s+/g, '_')}_${state.month}_${state.year}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showSuccess(`ดาวน์โหลดจุดเซฟ "${snap.label}" ในรูปแบบไฟล์ .json สำเร็จแล้ว`);
  }

  function exportToExcelCSV() {
    if (window.NursePrintHub && typeof window.NursePrintHub.exportCSV === 'function') {
      window.NursePrintHub.exportCSV();
    } else {
      showError('ไม่สามารถดึงโมดูลการส่งออก CSV ได้');
    }
  }

  window.NurseSettings = {
    renderSettings,
    switchSettingsCategory: _switchSettCat,
    // 🆕 v3.0
    handleLogoUpload, removeLogo,
    savePrintDefaults,
    saveAccessibility, _previewFontScale, applyAccessibility,
    saveDailyReq,
    cleanupStorage,
    saveAnonymize,
    applyThaiHolidayPreset,
    openCustomShiftDialog, removeCustomShift,
    saveOrgSettings, exportBackup, importBackup, factoryReset,
    addCustomHoliday, _removeHoliday,
    saveSchedulerSettings, saveHardRules, saveDisplaySettings, saveAutosaveSettings,
    saveAutoBundleSettings,
    renderMode2Settings, saveMode2Settings,
    renderShiftModeSelector, saveShiftMode, _updateShiftModeDesc, _updateReqFieldsVisibility,
    generateNotification, updateNotificationPreview, copyNotification,
    enableSecurity, disableSecurity, unlockSession, lockSession,
    changeSystemTheme, savePremiumSettings, saveTelegramSettings, testTelegramConnection,
    sendLineNotification, sendTelegramNotification,
    renderNotificationsTab, refreshNotifPreview,
    testTelegramConnectionPage, sendTelegramPage,
    exportIndividualCalendar, changeTelegramLayoutMode,
    previewTelegramNotification, sendTelegramNotificationImmediately,
    
    // Telegram Hub New Exports
    checkTelegramStatus, addChatTarget, removeChatTarget,
    applyTemplatePreset, insertTemplateVar, _onTelegramCredentialInput,

    // Enterprise exports
    renderWardsList, handleSwitchWard, handleAddWard, handleDeleteWard,
    renderTimeMachine, handleCreateManualSnapshot, handleRestoreSnapshot,
    renderBudgetAnalytics,

    // 🆕 v3.0 Additional Exports
    renderDataDashboard,
    renderAutoBackupsTimeline,
    handleRestoreAutoBackup,
    handleDeleteAutoBackup,
    renderShiftTimings,
    saveShiftTimings,
    renderRosterHub,
    selectRosterNurse,
    copyNurseScheduleText,
    handleDroppedBackupFile,
    resetDropzoneUI,
    toggleSyncGuideTab,
    handleDeleteSnapshot,
    handleDownloadSnapshot,
    exportToExcelCSV,

    // 🤖 Bot integration — image generator
    generateBeautifulScheduleCardBlob,
    executeTelegramSend,
  };
})();


/* ==================== NursePrintCenter Namespace ==================== */
(function() {
  function getSelectedTheme() {
    return document.getElementById('printInfographicTheme')?.value || 'clinical-dark';
  }

  function getSelectedMode() {
    return document.getElementById('printInfographicMode')?.value || 'individual';
  }

  function updatePreview() {
    const screen = document.getElementById('printCenterLivePreviewScreen');
    if (!screen) return;

    const { state } = window.NurseState;
    const { THAI_MONTHS } = window.NurseConst;
    const mode = getSelectedMode();
    const theme = getSelectedTheme();
    const org = state.appSettings?.orgName || 'วิทยาลัยพยาบาลศรีมหาสารคาม';
    const monthName = THAI_MONTHS[state.month - 1];
    const yearName = state.year;

    // Generate simulated phone screen content
    let previewText = `📱 [Telegram Preview - ${theme.toUpperCase()}]\n`;
    previewText += `🏥 ${org}\n`;
    previewText += `📅 ประจำเดือน${monthName} ${yearName}\n`;
    previewText += `──────────────────\n`;

    const nurses = state.nurses.filter(n => n.active !== false).sort((a, b) => (a.order || 999) - (b.order || 999));

    if (mode === 'daily') {
      const days = window.NurseState.daysInMonth(state.year, state.month);
      let count = 0;
      for (let d = 1; d <= days; d++) {
        const shifts = [];
        nurses.forEach(n => {
          const s = window.NurseState.getShift(n.id, d);
          if (s && s !== 'O') {
            shifts.push(`${n.name.split(' ')[0]}(${s})`);
          }
        });
        if (shifts.length > 0 && count < 5) {
          previewText += `📅 วันที่ ${d}: ${shifts.slice(0, 3).join(', ')}${shifts.length > 3 ? '...' : ''}\n`;
          count++;
        }
      }
      if (days > 5) {
        previewText += `... (และวันอื่นๆ รวม ${days} วัน)\n`;
      }
    } else if (mode === 'summary') {
      nurses.slice(0, 6).forEach(n => {
        const stats = window.NurseState.computeNurseStats(n.id);
        previewText += `👤 ${n.name.split(' ')[0]}: รวม ${stats.total || 0} เวร (ช:${stats['ช'] || 0} บ:${stats['บ'] || 0} ด:${stats['ด'] || 0})\n`;
      });
      if (nurses.length > 6) {
        previewText += `... (และบุคลากรท่านอื่นๆ อีก ${nurses.length - 6} คน)\n`;
      }
    } else {
      // individual
      nurses.slice(0, 5).forEach(n => {
        const days = window.NurseState.daysInMonth(state.year, state.month);
        const activeShifts = [];
        for (let d = 1; d <= days; d++) {
          const s = window.NurseState.getShift(n.id, d);
          if (s && s !== 'O') {
            activeShifts.push(`${d}/${s}`);
          }
        }
        previewText += `👤 ${n.name.split(' ')[0]}: ${activeShifts.slice(0, 4).join(', ')}${activeShifts.length > 4 ? '...' : ''}\n`;
      });
      if (nurses.length > 5) {
        previewText += `... (และพยาบาลท่านอื่นๆ รวม ${nurses.length} คน)\n`;
      }
    }

    previewText += `──────────────────\n`;
    previewText += `🎨 ธีมรูปภาพ: ${theme === 'clean-light' ? ' Medical Clean' : theme === 'minimal-retro' ? ' Minimalist Retro' : ' Clinical Dark'}\n`;
    previewText += `🖼️ แนบรูปภาพอินโฟกราฟิกความละเอียดสูง\n`;

    screen.textContent = previewText;
  }

  function printCalendarGrid() {
    window.NurseUI.switchTab('calendar');
    setTimeout(() => {
      window.print();
    }, 450);
  }

  function printOTReport() {
    window.NurseUI.switchTab('ot');
    setTimeout(() => {
      window.print();
    }, 450);
  }

  function generateLocalText() {
    const { state } = window.NurseState;
    const { THAI_MONTHS } = window.NurseConst;
    const mode = getSelectedMode();
    const org = state.appSettings?.orgName || 'วิทยาลัยพยาบาลศรีมหาสารคาม';
    const monthName = THAI_MONTHS[state.month - 1];
    const yearName = state.year;
    const nurses = state.nurses.filter(n => n.active !== false).sort((a, b) => (a.order || 999) - (b.order || 999));

    let text = `🏥 ตารางปฏิบัติงานบุคลากร: ${org}\n📅 ประจำเดือน${monthName} ${yearName}\n\n`;

    if (mode === 'daily') {
      const days = window.NurseState.daysInMonth(state.year, state.month);
      for (let d = 1; d <= days; d++) {
        const shifts = {};
        nurses.forEach(n => {
          const s = window.NurseState.getShift(n.id, d);
          if (s && s !== 'O') {
            if (!shifts[s]) shifts[s] = [];
            shifts[s].push(n.name.split(' ')[0]);
          }
        });
        const keys = Object.keys(shifts);
        if (keys.length > 0) {
          text += `📅 วันที่ ${d} (${window.NurseState.dayLabel(state.year, state.month, d)}):\n`;
          keys.forEach(s => {
            text += `  ├─ เวร ${s}: ${shifts[s].join(', ')}\n`;
          });
        }
      }
    } else if (mode === 'summary') {
      nurses.forEach((n, idx) => {
        const stats = window.NurseState.computeNurseStats(n.id);
        const parts = [];
        if (stats['ช']) parts.push(`ช:${stats['ช']}`);
        if (stats['บ']) parts.push(`บ:${stats['บ']}`);
        if (stats['ด']) parts.push(`ด:${stats['ด']}`);
        if (stats['เย็น']) parts.push(`เย็น:${stats['เย็น']}`);
        if (stats['OT']) parts.push(`OT:${stats['OT']}`);
        text += `${idx + 1}. ${n.name} (${n.position}): ${parts.join(' · ')} | รวม ${stats.total || 0} เวร\n`;
      });
    } else {
      // individual
      nurses.forEach((n, idx) => {
        const days = window.NurseState.daysInMonth(state.year, state.month);
        const activeShifts = [];
        for (let d = 1; d <= days; d++) {
          const s = window.NurseState.getShift(n.id, d);
          if (s && s !== 'O') {
            activeShifts.push(`${d}/${s}`);
          }
        }
        text += `${idx + 1}. ${n.name} (${n.position}):\n  └─ เวร: ${activeShifts.join(', ')}\n`;
      });
    }

    const scheduler = state.appSettings?.signers?.scheduler || '—';
    text += `\nจัดทำโดยระบบจัดตารางเวรพยาบาลอัตโนมัติ (Enterprise Suite)\nลงชื่อผู้จัดทำ: ${scheduler}`;
    return text;
  }

  function previewNotificationText() {
    const text = generateLocalText();
    const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    Swal.fire({
      title: '<span style="font-size:1.1rem;font-weight:700">🔍 พรีวิวข้อความประชาสัมพันธ์</span>',
      html: `
        <textarea readonly style="width:100%;height:250px;padding:12px;font-size:11.5px;
          font-family:monospace;background:#f8fafc;border:1px solid #e2e8f0;
          border-radius:12px;resize:none;line-height:1.6;color:#334155">${escaped}</textarea>
      `,
      confirmButtonText: 'ปิด',
      confirmButtonColor: '#64748b',
      width: '36rem'
    });
  }

  function copyNotificationText() {
    const text = generateLocalText();
    navigator.clipboard.writeText(text).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'คัดลอกสำเร็จ!',
        text: 'คัดลอกข้อความประชาสัมพันธ์ไปยังคลิปบอร์ดแล้ว พร้อมนำไปวางส่งได้ทันที 📋',
        timer: 2000,
        showConfirmButton: false
      });
    }).catch(err => {
      Swal.fire({
        icon: 'error',
        title: 'ไม่สามารถคัดลอกได้',
        text: String(err)
      });
    });
  }

  async function sendTelegramDirect() {
    const { state } = window.NurseState;
    const { THAI_MONTHS } = window.NurseConst;
    const token = state.appSettings?.telegram?.botToken || '';
    const targets = state.appSettings?.telegram?.chatTargets || [];

    if (!token || targets.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'ยังไม่ได้เชื่อมต่อ Telegram API',
        text: 'กรุณาตั้งค่า Bot Token และ Chat Targets ของกลุ่มรับแจ้งเตือนที่เมนู "แจ้งเตือน" ก่อนใช้งาน 🔌',
        confirmButtonText: 'ไปหน้าตั้งค่าการแจ้งเตือน',
        confirmButtonColor: '#0284c7',
        showCancelButton: true,
        cancelButtonText: 'ยกเลิก'
      }).then(r => {
        if (r.isConfirmed) {
          window.NurseUI.switchTab('notifications');
        }
      });
      return;
    }

    const org = state.appSettings?.orgName || 'วิทยาลัยพยาบาลศรีมหาสารคาม';
    const monthName = THAI_MONTHS[state.month - 1];
    const yearName = state.year;
    const theme = getSelectedTheme();
    const mode = getSelectedMode();
    const targetLabels = targets.map(t => t.label).join(', ');

    const choice = await Swal.fire({
      title: '<span style="font-size:1.1rem;font-weight:700">⚡ ยืนยันยิงประกาศตารางเวร</span>',
      text: `ต้องการสั่งแปลงภาพตารางเวรในธีม ${theme.toUpperCase()} และส่งแจ้งเตือนไปยัง Telegram ทันทีหรือไม่?\n(ส่งไปยัง: ${targetLabels})`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: '🚀 ยิงประกาศเลย!',
      cancelButtonText: 'ยกเลิก',
      confirmButtonColor: '#0284c7',
      cancelButtonColor: '#94a3b8'
    });

    if (!choice.isConfirmed) return;

    Swal.fire({
      title: 'กำลังแปลงรูปภาพอินโฟกราฟิก...',
      html: 'กรุณารอสักครู่ ระบบกำลังเรนเดอร์ภาพกราฟิกความละเอียดสูงอย่างประณีต 🎨🌌',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      // 1. Render card image blob
      const blob = await window.NurseSettings.generateBeautifulScheduleCardBlob(theme, mode);
      
      // 2. Prepare message text
      const message = generateLocalText();

      Swal.update({
        title: 'กำลังส่งข้อมูลไปยัง Telegram...',
        html: `กำลังอัปโหลดรูปภาพพร้อมส่งข้อความอ้างอิงไปยัง ${targets.length} กลุ่ม ✈️🔵`
      });

      let successCount = 0;
      let failCount = 0;

      for (const target of targets) {
        const formData = new FormData();
        formData.append('chat_id', target.id);
        formData.append('document', blob, 'infographic_schedule.png');

        if (message.length <= 1024) {
          formData.append('caption', message);
          const res = await fetch(`https://api.telegram.org/bot${token}/sendDocument`, {
            method: 'POST',
            body: formData
          });
          const data = await res.json();
          if (data.ok) successCount++; else failCount++;
        } else {
          const shortCaption = `📋 ตารางปฏิบัติงานประจำเดือน ${monthName} พ.ศ. ${yearName}\n🏥 ${org}\n\n(รายละเอียดตารางเวรแบบเต็มจะแสดงในข้อความถัดไปด้านล่าง)`;
          formData.append('caption', shortCaption);

          const resPhoto = await fetch(`https://api.telegram.org/bot${token}/sendDocument`, {
            method: 'POST',
            body: formData
          });
          const dataPhoto = await resPhoto.json();

          if (dataPhoto.ok) {
            const resText = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ chat_id: target.id, text: message })
            });
            const dataText = await resText.json();
            if (dataText.ok) successCount++; else failCount++;
          } else {
            failCount++;
          }
        }
      }

      Swal.close();
      if (successCount > 0) {
        window.NurseNotify?.add('success', 'Telegram Direct', `ส่งตารางเวรพร้อมรูปภาพสำเร็จ ${successCount} กลุ่ม`);
        Swal.fire({
          icon: 'success',
          title: 'ยิงประกาศสำเร็จเรียบร้อย! 🎉',
          text: `ภาพอินโฟกราฟิกสุดพรีเมียมถูกส่งไปยัง ${successCount} กลุ่มเรียบร้อยแล้ว` + (failCount > 0 ? ` (ไม่สำเร็จ ${failCount} กลุ่ม)` : ''),
          confirmButtonColor: '#10b981'
        });
      } else {
        throw new Error('เกิดข้อผิดพลาดในการส่งรูปภาพไปยังทุกกลุ่มเป้าหมาย');
      }
    } catch (err) {
      Swal.close();
      console.error(err);
      window.NurseNotify?.add('error', 'Telegram Direct ล้มเหลว', err.message || err);
      Swal.fire({
        icon: 'error',
        title: 'ส่งไม่สำเร็จ',
        text: `ไม่สามารถส่งไปยัง Telegram ได้: ${err.message || err}`,
        confirmButtonColor: '#ef4444'
      });
    }
  }

  // Export to global namespace
  window.NursePrintCenter = {
    init: updatePreview,
    updatePreview,
    printCalendarGrid,
    printOTReport,
    previewNotificationText,
    copyNotificationText,
    sendTelegramDirect
  };
})();


/* ==================== notifications.js ==================== */
/* =========================================================
   NurseNotify — In-app · Telegram
   ========================================================= */
window.NurseNotify = (function () {
  'use strict';

  const KEY = 'smnc_notifs_v1';
  const MAX = 50;

  /* ── Store ────────────────────────────────────────────── */
  function getAll() {
    try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; }
  }
  function save(list) {
    localStorage.setItem(KEY, JSON.stringify(list.slice(0, MAX)));
  }
  function add(type, title, body) {
    const list = getAll();
    list.unshift({
      id: Date.now(), type, title, body,
      ts: new Date().toLocaleString('th-TH', { dateStyle: 'short', timeStyle: 'short' }),
      read: false
    });
    save(list);
    renderBell();
  }
  function markAllRead() {
    save(getAll().map(n => ({ ...n, read: true })));
    renderBell();
  }
  function unreadCount() { return getAll().filter(n => !n.read).length; }
  function clearAll() { save([]); renderBell(); }

  function esc(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function _renderList(el, filter) {
    if (!el) return;
    let all = getAll();
    if (filter && filter !== 'all') {
      if (filter === 'unread') all = all.filter(n => !n.read);
      else all = all.filter(n => n.type === filter);
    }
    if (all.length === 0) {
      el.innerHTML = `
        <div class="notif-empty-state">
          <div class="notif-empty-state-icon">🔕</div>
          <p style="font-size:13px;font-weight:600;color:var(--text-muted);margin:0">ไม่มีการแจ้งเตือน</p>
          <p style="font-size:11px;color:var(--text-muted);margin:4px 0 0;opacity:0.7">${filter && filter !== 'all' ? 'ไม่มีในหมวดนี้' : 'ระบบจะแจ้งเตือนเมื่อมีเหตุการณ์'}</p>
        </div>`;
      return;
    }
    const icons = { success: '✅', warning: '⚠️', error: '❌', info: 'ℹ️' };
    el.innerHTML = all.slice(0, 20).map(n => `
      <div class="notif-panel-item${n.read ? '' : ' unread'}" onclick="window.NurseNotify._markRead(${n.id})">
        <div class="notif-type-icon ${n.type || 'info'}">${icons[n.type] || '🔔'}</div>
        <div class="notif-panel-content">
          <div class="notif-panel-title">${esc(n.title)}</div>
          <div class="notif-panel-body">${esc(n.body)}</div>
          <div class="notif-panel-ts">${n.ts}</div>
        </div>
        ${!n.read ? '<div class="notif-unread-dot"></div>' : ''}
      </div>`).join('');
  }

  function renderRichLog(elId) {
    const el = document.getElementById(elId);
    if (!el) return;
    const all = getAll();
    if (all.length === 0) {
      el.innerHTML = `
        <div class="notif-empty-state" style="padding:24px 16px">
          <div class="notif-empty-state-icon">📭</div>
          <p style="font-size:12px;font-weight:600;color:var(--text-muted);margin:0">ยังไม่มีประวัติ</p>
        </div>`;
      return;
    }
    const icons = { success: '✅', warning: '⚠️', error: '❌', info: 'ℹ️' };
    const typeColors = {
      success: 'rgba(16,185,129,0.12)',
      warning: 'rgba(245,158,11,0.12)',
      error: 'rgba(239,68,68,0.1)',
      info: 'rgba(14,165,233,0.1)'
    };
    el.innerHTML = all.map(n => `
      <div class="notif-rich-item">
        <div class="notif-rich-icon ${n.type || 'info'}" style="background:${typeColors[n.type] || typeColors.info}">
          ${icons[n.type] || '🔔'}
        </div>
        <div class="notif-rich-body">
          <div class="notif-rich-title">${esc(n.title)}</div>
          <div class="notif-rich-desc">${esc(n.body)}</div>
          <div class="notif-rich-ts"><i data-lucide="clock" class="w-3 h-3"></i> ${n.ts}</div>
        </div>
        <div class="notif-rich-actions">
          <button onclick="window.NurseNotify.resendNotification(${n.id})" type="button"
            class="notif-resend-btn" title="ส่งไปยัง Telegram อีกครั้ง">
            <i data-lucide="send" class="w-3 h-3"></i>
          </button>
        </div>
      </div>`).join('');
    if (window.lucide) window.lucide.createIcons();
  }

  function resendNotification(id) {
    const list = getAll();
    const item = list.find(x => x.id === id);
    if (!item) return;

    Swal.fire({
      title: 'ต้องการส่งแจ้งเตือนนี้ไปยัง Telegram หรือไม่?',
      text: 'ข้อความดั้งเดิมจะถูกส่งซ้ำ',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: '✈️ ส่งเลย',
      cancelButtonText: 'ยกเลิก',
      confirmButtonColor: '#0284c7',
      cancelButtonColor: '#94a3b8'
    }).then(r => {
      if (r.isConfirmed) {
        if (window.NurseSettings && window.NurseSettings.executeTelegramSend) {
          window.NurseSettings.executeTelegramSend(item.body);
        }
      }
    });
  }

  function renderLog(elId) { _renderList(document.getElementById(elId)); }

  /* ── Bell / Dropdown UI ──────────────────────────────── */
  function renderBell() {
    const badge = document.getElementById('notifBadge');
    const tabBadge = document.getElementById('tabNotifBadge');
    const unreadCountEl = document.getElementById('notifUnreadCount');
    const listEl = document.getElementById('notifList');
    const count = unreadCount();

    if (badge) {
      badge.textContent = count > 9 ? '9+' : String(count);
      badge.classList.toggle('hidden', count === 0);
    }
    if (tabBadge) {
      tabBadge.textContent = count > 9 ? '9+' : String(count);
      tabBadge.classList.toggle('hidden', count === 0);
    }
    if (unreadCountEl) {
      unreadCountEl.textContent = count > 9 ? '9+' : String(count);
      unreadCountEl.classList.toggle('hidden', count === 0);
    }

    // Get current active filter
    const activeFilter = document.querySelector('.notif-filter-btn.active')?.dataset.filter || 'all';
    _renderList(listEl, activeFilter);
    updateHubStats();
  }

  function _markRead(id) {
    const list = getAll().map(n => n.id === id ? { ...n, read: true } : n);
    save(list);
    renderBell();
  }

  function updateHubStats() {
    const all = getAll();
    const el = id => document.getElementById(id);
    if (el('notifStatTotal')) el('notifStatTotal').textContent = all.length;
    if (el('notifStatUnread')) el('notifStatUnread').textContent = all.filter(n => !n.read).length;
    if (el('notifStatSuccess')) el('notifStatSuccess').textContent = all.filter(n => n.type === 'success').length;
    if (el('notifStatWarning')) el('notifStatWarning').textContent = all.filter(n => n.type === 'warning').length;
    if (el('notifStatTelegram')) el('notifStatTelegram').textContent = all.filter(n => n.title.includes('Telegram')).length;
  }

  let _dropdownOpen = false;
  function toggleDropdown() {
    const d = document.getElementById('notifDropdown');
    if (!d) return;
    _dropdownOpen = !_dropdownOpen;
    d.classList.toggle('hidden', !_dropdownOpen);
    if (_dropdownOpen) {
      markAllRead();
      renderBell();
      setTimeout(() => {
        document.addEventListener('click', _outsideClose);
      }, 10);
    } else {
      document.removeEventListener('click', _outsideClose);
    }
  }
  function _outsideClose(e) {
    if (!document.getElementById('notifBellWrapper')?.contains(e.target)) {
      _dropdownOpen = false;
      document.getElementById('notifDropdown')?.classList.add('hidden');
      document.removeEventListener('click', _outsideClose);
    }
  }

  /* ── Telegram ─────────────────────────────────────────── */
  function telegramBase(token) {
    return `https://api.telegram.org/bot${token}`;
  }

  async function verifyBotToken(token) {
    try {
      const res  = await fetch(`${telegramBase(token)}/getMe`);
      const data = await res.json();
      return data; // { ok, result: { username, first_name, ... } } or { ok: false, description }
    } catch (e) {
      return { ok: false, description: 'ไม่มีอินเทอร์เน็ต หรือ Token ไม่ถูกต้อง' };
    }
  }

  function renderOfflineQueue() {
    const panel = document.getElementById('offlineQueuePanel');
    const listEl = document.getElementById('offlineQueueList');
    if (!panel || !listEl) return;

    try {
      const q = JSON.parse(localStorage.getItem('smnc_tele_queue') || '[]');
      if (q.length === 0) {
        panel.classList.add('hidden');
        return;
      }

      panel.classList.remove('hidden');
      listEl.innerHTML = q.map((item, idx) => `
        <div class="p-2 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-between gap-2">
          <div class="truncate flex-1">
            <span class="font-bold text-slate-700">รายการที่ ${idx + 1}</span>
            <span class="text-[10px] text-slate-400">(${new Date(item.id).toLocaleTimeString()})</span>
            <p class="truncate text-[10px] text-slate-500 mt-0.5">${esc(item.message)}</p>
          </div>
          <button onclick="window.NurseNotify.removeQueueItem(${item.id})" type="button" class="text-rose-500 hover:text-rose-700 p-1">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      `).join('');
      if (window.lucide) window.lucide.createIcons();
    } catch(e) {}
  }

  function removeQueueItem(id) {
    try {
      let q = JSON.parse(localStorage.getItem('smnc_tele_queue') || '[]');
      q = q.filter(x => x.id !== id);
      localStorage.setItem('smnc_tele_queue', JSON.stringify(q));
      add('info', 'คิวแจ้งเตือน', 'ลบข้อความออกจากคิวชั่วคราวแล้ว');
      renderOfflineQueue();
    } catch(e) {}
  }

  function flushOfflineQueueNow() {
    processOfflineQueue();
  }

  function addToOfflineQueue(message) {
    try {
      const q = JSON.parse(localStorage.getItem('smnc_tele_queue') || '[]');
      if (!q.some(x => x.message === message)) {
        q.push({ id: Date.now(), message });
        localStorage.setItem('smnc_tele_queue', JSON.stringify(q));
      }
      add('warning', 'อินเทอร์เน็ตออฟไลน์', 'บันทึกการส่ง Telegram ลงในคิวชั่วคราวแล้ว');
      renderOfflineQueue();
    } catch(e) {}
  }

  async function processOfflineQueue() {
    if (!navigator.onLine) return;
    try {
      const q = JSON.parse(localStorage.getItem('smnc_tele_queue') || '[]');
      if (q.length === 0) {
        renderOfflineQueue();
        return;
      }
      add('info', 'เชื่อมต่อออนไลน์', `กำลังส่งข้อความตกค้าง ${q.length} รายการ...`);
      
      const s = window.NurseState?.state?.appSettings;
      const botToken = s?.telegram?.botToken?.trim();
      const targets  = s?.telegram?.chatTargets || [];
      
      if (!botToken || targets.length === 0) return;

      let remaining = [];
      for (const item of q) {
        let allSuccess = true;
        for (const target of targets) {
          try {
            const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ chat_id: target.id, text: item.message })
            });
            const data = await res.json();
            if (data.ok) {
              add('success', 'Telegram (ตกค้าง)', `ส่งข้อความตกค้างไป ${target.label} สำเร็จ`);
            } else {
              allSuccess = false;
              add('error', 'Telegram (ตกค้าง) ล้มเหลว', data.description || `ข้อมูลผิดพลาด (${target.label})`);
            }
          } catch (e) {
            allSuccess = false;
          }
        }
        if (!allSuccess) {
           remaining.push(item);
        }
      }
      localStorage.setItem('smnc_tele_queue', JSON.stringify(remaining));
      renderOfflineQueue();
    } catch (e) {}
  }

  async function sendTelegram(message, opts = {}) {
    const s = window.NurseState?.state?.appSettings;
    const botToken = s?.telegram?.botToken?.trim();
    const chatId   = s?.telegram?.chatId?.trim();
    if (!botToken || !chatId) {
      if (!opts.silent) {
        Swal.fire({
          title: 'ส่งไม่สำเร็จ',
          text: 'กรุณากรอก Bot Token และ Chat ID ให้ครบถ้วนในการตั้งค่าก่อน',
          icon: 'error',
          confirmButtonColor: '#ef4444'
        });
      }
      return false;
    }

    if (!navigator.onLine) {
      addToOfflineQueue(message);
      if (!opts.silent) {
        Swal.fire({
          title: 'ส่งไม่สำเร็จ (ออฟไลน์)',
          text: 'ระบบออฟไลน์อยู่ ได้จัดเก็บข้อความนี้ไว้ในคิวรอดำเนินการชั่วคราวแล้ว',
          icon: 'warning',
          confirmButtonColor: '#f59e0b'
        });
      }
      return false;
    }

    if (!opts.silent) {
      Swal.fire({
        title: 'กำลังส่งข้อมูลไปยัง Telegram...',
        allowOutsideClick: false,
        didOpen: () => { Swal.showLoading(); }
      });
    }

    try {
      const res = await fetch(`${telegramBase(botToken)}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message })
      });
      const data = await res.json();
      if (data.ok) {
        add('success', 'Telegram', 'ส่งแจ้งเตือนสำเร็จ');
        if (!opts.silent) {
          Swal.fire({
            title: 'ส่งสำเร็จแล้ว! 🎉',
            text: 'ระบบจัดส่งประกาศแจ้งเตือนไปยังกลุ่ม Telegram ของคุณเรียบร้อยแล้ว',
            icon: 'success',
            confirmButtonColor: '#10b981'
          });
        }
        return true;
      }
      const reason = data.description || 'Token หรือ Chat ID ไม่ถูกต้อง';
      add('error', 'Telegram ล้มเหลว', reason);
      if (!opts.silent) {
        Swal.fire({
          title: 'ส่งไม่สำเร็จ',
          text: `เกิดข้อผิดพลาดจาก Telegram: ${reason}`,
          icon: 'error',
          confirmButtonColor: '#ef4444'
        });
      }
      return false;
    } catch (e) {
      addToOfflineQueue(message);
      if (!opts.silent) {
        Swal.fire({
          title: 'ส่งไม่สำเร็จ',
          text: 'การเชื่อมต่ออินเทอร์เน็ตล้มเหลว หรือสัญญาณเซิร์ฟเวอร์ขัดข้อง',
          icon: 'error',
          confirmButtonColor: '#ef4444'
        });
      }
      return false;
    }
  }

  /* ── High-level event hooks ──────────────────────────── */
  function onScheduleGenerated(warningCount) {
    const msg = warningCount > 0
      ? `จัดเวรเสร็จ มี ${warningCount} คำเตือน`
      : 'จัดเวรอัตโนมัติสำเร็จ';
    add('success', 'จัดเวรสำเร็จ', msg);
    const s = window.NurseState?.state?.appSettings;
    if (s?.telegram?.autoSend) {
      const text = typeof window.NurseSettings?.generateNotification === 'function'
        ? window.NurseSettings.generateNotification()
        : msg;
      sendTelegram(text, { silent: true });
    }
  }

  function onAutoSave() {
    add('info', 'บันทึกอัตโนมัติ', 'ข้อมูลถูกบันทึกเรียบร้อยแล้ว');
  }

  function onWarnings(list) {
    if (!list?.length) return;
    const preview = list.slice(0, 2).join(' · ') + (list.length > 2 ? ' …' : '');
    add('warning', `พบ ${list.length} คำเตือน`, preview);
  }

  /* ── Init ─────────────────────────────────────────────── */
  function init() {
    renderBell();
    const bell = document.getElementById('notifBell');
    if (bell) bell.addEventListener('click', e => { e.stopPropagation(); toggleDropdown(); });

    // Clear all button
    const clearBtn = document.getElementById('notifClearAll');
    if (clearBtn) clearBtn.addEventListener('click', e => {
      e.stopPropagation();
      clearAll();
      renderBell();
    });

    // Mark all read button
    const markReadBtn = document.getElementById('notifMarkAllRead');
    if (markReadBtn) markReadBtn.addEventListener('click', e => {
      e.stopPropagation();
      markAllRead();
      renderBell();
    });

    // Filter tab buttons
    document.addEventListener('click', e => {
      const btn = e.target.closest('.notif-filter-btn');
      if (!btn) return;
      document.querySelectorAll('.notif-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const listEl = document.getElementById('notifList');
      _renderList(listEl, btn.dataset.filter);
    });

    // Listen to online events and auto-flush offline queues
    window.addEventListener('online', processOfflineQueue);
    processOfflineQueue();
    renderOfflineQueue();
    updateHubStats();
  }

  return {
    add, init, renderBell, renderLog, clearAll, markAllRead,
    sendTelegram, verifyBotToken,
    onScheduleGenerated, onAutoSave, onWarnings,
    resendNotification, removeQueueItem, flushOfflineQueueNow, renderOfflineQueue,
    renderRichLog, updateHubStats, _markRead
  };
})();


/* ==================== main.js ==================== */
// Wiring + global actions. Loaded last; bootstraps everything.

(function() {
const { KEYBOARD_SHIFT_MAP, APP_VERSION, SHIFT_MODES, DEFAULT_APP_SETTINGS, THAI_MONTHS } = window.NurseConst;
const {
  state, loadFromStorage, persistAll, invalidateStats, onSaveStatusChange
} = window.NurseState;
const U = window.NurseUI;
const R = window.NurseRender;
const N = window.NurseNurses;
const E = window.NurseExport;
const Hist = window.NurseHistory;

function syncLockModeUI() {
  document.body.classList.toggle('lock-mode-active', !!state.lockMode);
  document.querySelectorAll('#btnLockMode').forEach(btn => {
    btn.classList.toggle('lock-toggle-active', !!state.lockMode);
    btn.innerHTML = state.lockMode
      ? '<i data-lucide="unlock" class="w-3.5 h-3.5"></i> กำลังล็อกเวร'
      : '<i data-lucide="lock" class="w-3.5 h-3.5"></i> โหมดล็อก';
  });
  lucide.createIcons();
}

// ========= GLOBAL ACTIONS =========
function runAutoSchedule() {
  if (window.NurseState.isSystemLocked()) {
    U.showError('🔒 ระบบจัดตารางเวรถูกล็อกอยู่! กรุณาปลดล็อกในเมนู "ตั้งค่าระบบ" ก่อนจัดเวรอัตโนมัติ');
    return;
  }
  U.readReqFromUI();
  if (state.nurses.filter(n => n.active !== false).length === 0) {
    U.showError('ยังไม่มีพยาบาลในระบบ — กรุณาเพิ่มพยาบาลก่อน'); return;
  }
  U.confirmAct('จัดเวรอัตโนมัติ?', 'ระบบจะล้างตารางเวรเดิม แต่จะไม่แตะเซลล์ที่ล็อกไว้ (วันลายังคงอยู่)\nคุณสามารถกด Undo (Ctrl+Z) เพื่อย้อนกลับได้').then(r => {
    if (!r.isConfirmed) return;
    U.showLoading('กำลังจัดเวรอัตโนมัติ...');
    setTimeout(() => {
      try {
        window.NurseScheduler.autoScheduleCore();
        window.NurseState.takeSnapshot("บันทึกอัตโนมัติ (AI จัดเวร)");
        window.NurseSettings?.renderTimeMachine?.();
        Swal.close();
        R.renderSchedule();
        R.renderDashboard();
        R.renderCalendar();
        const wc = state.warnings.length;
        if (wc === 0) U.showSuccess('จัดเวรเสร็จสมบูรณ์ ✓');
        else U.showInfo(`จัดเวรเสร็จ แต่มี ${wc} คำเตือน — ดูที่แท็บภาพรวม`);
        window.NurseNotify?.onScheduleGenerated(wc);
        if (wc > 0) window.NurseNotify?.onWarnings(state.warnings.slice());
      } catch (e) {
        console.error('autoSchedule failed:', e);
        Swal.close();
        U.showError('จัดเวรไม่สำเร็จ กรุณาลองใหม่อีกครั้ง');
      }
    }, 100);
  });
}

function saveAll() {
  if (window.NurseState.isSystemLocked()) {
    U.showError('🔒 ระบบจัดตารางเวรถูกล็อกอยู่! กรุณาปลดล็อกในเมนู "ตั้งค่าระบบ" ก่อนทำการบันทึก');
    return;
  }
  U.readReqFromUI();
  U.readOTFromUI();
  persistAll();
  R.renderDashboard();
  U.showSuccess('บันทึกข้อมูลทั้งหมดแล้ว');
}

function clearAll() {
  if (window.NurseState.isSystemLocked()) {
    U.showError('🔒 ระบบจัดตารางเวรถูกล็อกอยู่! กรุณาปลดล็อกในเมนู "ตั้งค่าระบบ" ก่อนทำการล้างตาราง');
    return;
  }
  U.confirmAct('ล้างตารางเดือนนี้?', 'จะลบข้อมูลตารางเวรและวันลาของเดือนนี้ (รายชื่อพยาบาลยังอยู่)').then(r => {
    if (!r.isConfirmed) return;
    Hist.pushHistory();
    const prefix = `-${state.year}-${state.month}-`;
    for (const key in state.schedule) {
      if (key.includes(prefix)) delete state.schedule[key];
    }
    for (const key in state.leaves) {
      if (key.includes(prefix)) delete state.leaves[key];
    }
    for (const key in state.lockedShifts) {
      if (key.includes(prefix)) delete state.lockedShifts[key];
    }
    state.warnings = [];
    invalidateStats();
    window.NurseState.markDirty();
    persistAll();
    R.renderSchedule();
    R.renderLeaves();
    R.renderDashboard();
    R.renderCalendar();
    U.showSuccess('ล้างเรียบร้อย');
  });
}

function toggleLockMode() {
  state.lockMode = !state.lockMode;
  syncLockModeUI();
  U.showInfo(state.lockMode ? 'เปิดโหมดล็อกแล้ว — คลิกเซลล์ที่มีเวรเพื่อล็อก/ปลดล็อก' : 'ปิดโหมดล็อกแล้ว');
}

function quickLockHeadsMorningMay2569() {
  const targetYear = state.year;
  const targetMonth = state.month;
  const days = window.NurseState.daysInMonth(targetYear, targetMonth);
  const monthLabel = `${THAI_MONTHS[targetMonth - 1]} ${targetYear}`;
  const active = state.nurses
    .filter(n => n.active !== false)
    .sort((a, b) => (a.order || 999) - (b.order || 999));
  const headNurses = active.filter(n => /(หัวหน้า|รองหัวหน้า)/.test(String(n.position || '')));
  if (headNurses.length === 0) {
    U.showWarn('ไม่พบพยาบาลตำแหน่งหัวหน้า/รองหัวหน้า');
    return;
  }
  const nurseOptions = headNurses.map(n => `
    <label class="flex items-start gap-2 text-sm text-slate-700 py-1.5">
      <input type="checkbox" class="quick-head-nurse mt-1" value="${n.id}" checked>
      <span><b>${n.name}</b><br><span class="text-xs text-slate-500">(${n.position})</span></span>
    </label>
  `).join('');

  Swal.fire({
    title: '⭐ ล็อกหัวหน้า/รองหัวหน้า = ช วันทำการ',
    width: 760,
    html: `
      <div class="text-left space-y-3">
        <p class="text-xs text-slate-600">💡 ใช้งาน: ล็อกตามเงื่อนไขหัวหน้า/รองหัวหน้าขึ้นเวรเช้าในวันทำการ</p>
        <p class="text-xs text-slate-600">🔓 ล็อกแล้วยังปลดล็อก cell รายช่องได้ โดยเปิดโหมดล็อกแล้วคลิก cell</p>
        <div class="text-sm font-semibold text-slate-700">🗓 ครอบคลุมทั้งเดือน: ${monthLabel} (${days} วัน) โดยจะแสดงข้อมูลเดือนนั้น</div>
        <div>
          <label class="text-xs font-bold text-slate-600 block mb-1">เลือกพยาบาลที่ต้องการล็อก:</label>
          <div class="rounded-xl border border-slate-200 bg-white p-2 max-h-44 overflow-y-auto">${nurseOptions}</div>
        </div>
        <div>
          <label class="text-xs font-bold text-slate-600 block mb-1">ขอบเขตวันที่:</label>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <label class="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg px-2 py-2">
              <input type="radio" name="quickHeadScope" value="workday" checked> เฉพาะวันทำการ
            </label>
            <label class="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg px-2 py-2">
              <input type="radio" name="quickHeadScope" value="all"> ทั้งเดือน (1-${days})
            </label>
            <label class="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg px-2 py-2">
              <input type="radio" name="quickHeadScope" value="offday"> เฉพาะวันหยุด (เสาร์-อาทิตย์/นักขัตฤกษ์)
            </label>
          </div>
        </div>
      </div>
    `,
    showCancelButton: true,
    showDenyButton: true,
    confirmButtonText: '🔒 ล็อก ช',
    denyButtonText: '🔓 ปลดล็อกหัวหน้าทั้งหมด',
    cancelButtonText: 'ยกเลิก',
    preConfirm: () => {
      const nurseIds = [...document.querySelectorAll('.quick-head-nurse:checked')].map(el => el.value);
      const scope = document.querySelector('input[name="quickHeadScope"]:checked')?.value || 'all';
      if (nurseIds.length === 0) return Swal.showValidationMessage('กรุณาเลือกพยาบาลอย่างน้อย 1 คน');
      return { nurseIds, scope };
    }
  }).then(r => {
    if (!r.isConfirmed && !r.isDenied) return;
    Hist.pushHistory();
    let count = 0;
    let skipped = 0;
    const nurseIds = r.isDenied ? headNurses.map(n => n.id) : (r.value?.nurseIds || []);
    const scope = r.isDenied ? 'all' : (r.value?.scope || 'all');
    const inScope = (d) => {
      if (scope === 'all') return true;
      if (scope === 'workday') return !window.NurseState.isOffDay(targetYear, targetMonth, d);
      return window.NurseState.isOffDay(targetYear, targetMonth, d);
    };
    nurseIds.forEach(nid => {
      for (let d = 1; d <= days; d++) {
        if (!inScope(d)) continue;
        if (r.isDenied) {
          if (!window.NurseState.isShiftLocked(nid, d)) continue;
          window.NurseState.setShiftLock(nid, d, false);
        } else {
          if (window.NurseState.getLeave(nid, d)) { skipped++; continue; }
          window.NurseState.setShift(nid, d, 'ช');
          window.NurseState.setShiftLock(nid, d, true);
        }
        count++;
      }
    });
    invalidateStats();
    persistAll();
    R.renderSchedule();
    R.renderDashboard();
    R.renderCalendar();
    if (r.isDenied) U.showSuccess(`ปลดล็อกหัวหน้าทั้งหมด ${monthLabel} แล้ว ${count} ช่อง`);
    else U.showSuccess(`ล็อกเวรเช้าหัวหน้า/รองหัวหน้า ${monthLabel} แล้ว ${count} ช่อง${skipped ? ` · ข้ามวันลา ${skipped} ช่อง` : ''}`);
  });
}

function quickUnlockHeadsMay2569() {
  const targetYear = state.year;
  const targetMonth = state.month;
  const monthLabel = `${THAI_MONTHS[targetMonth - 1]} ${targetYear}`;
  const active = state.nurses.filter(n => n.active !== false);
  const headIds = active.filter(n => /(หัวหน้า|รองหัวหน้า)/.test(String(n.position || ''))).map(n => n.id);
  if (headIds.length === 0) {
    U.showWarn('ไม่พบพยาบาลตำแหน่งหัวหน้า/รองหัวหน้า');
    return;
  }
  U.confirmAct(`ปลดล็อกหัวหน้า/รองหัวหน้า (${monthLabel})?`, `ระบบจะปลดล็อกทุกเซลล์ของหัวหน้า/รองหัวหน้าในเดือน ${monthLabel} (ไม่ลบเวร)`).then(r => {
    if (!r.isConfirmed) return;
    Hist.pushHistory();
    const days = window.NurseState.daysInMonth(targetYear, targetMonth);
    let count = 0;
    headIds.forEach(nid => {
      for (let d = 1; d <= days; d++) {
        if (!window.NurseState.isShiftLocked(nid, d)) continue;
        window.NurseState.setShiftLock(nid, d, false);
        count++;
      }
    });
    invalidateStats();
    persistAll();
    R.renderSchedule();
    R.renderDashboard();
    R.renderCalendar();
    U.showSuccess(`ปลดล็อกหัวหน้า/รองหัวหน้า ${monthLabel} แล้ว ${count} ช่อง`);
  });
}

function openBulkLockDialog() {
  const active = state.nurses.filter(n => n.active !== false).sort((a, b) => (a.order || 999) - (b.order || 999));
  const heads = active.filter(n => /(หัวหน้า|รองหัวหน้า)/.test(String(n.position || '')));
  const monthLabel = `${THAI_MONTHS[state.month - 1]} ${state.year}`;
  const days = window.NurseState.daysInMonth(state.year, state.month);
  const nurseDefaultIds = new Set((heads.length ? heads : active).map(n => n.id));
  const nurseOptions = active.map(n => `
    <label class="flex items-center gap-2 text-xs text-slate-700 py-1">
      <input type="checkbox" class="bulk-lock-nurse" value="${n.id}" ${nurseDefaultIds.has(n.id) ? 'checked' : ''}>
      <span>${n.name} <span class="text-slate-400">(${n.position})</span></span>
    </label>
  `).join('');
  Swal.fire({
    title: '🔒 ล็อกเวร (Bulk Pin)',
    width: 760,
    html: `
      <div class="text-left space-y-4">
        <p class="text-xs text-slate-500">ค่าเริ่มต้น: <b>หัวหน้า/รองหัวหน้า</b> + <b>เวรเช้า</b> + <b>ทั้งเดือน</b> (${monthLabel})</p>
        <div>
          <label class="text-xs font-bold text-slate-600 block mb-1">1. โหมดการทำงาน</label>
          <select id="bulkLockAction" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm">
            <option value="lock" selected>🔒 ล็อกเวร</option>
            <option value="unlock">🔓 ปลดล็อกตามเงื่อนไข</option>
            <option value="unlock-heads">🔓 ปลดล็อกหัวหน้าทั้งหมด</option>
          </select>
        </div>
        <div>
          <label class="text-xs font-bold text-slate-600 block mb-1">2. เวรที่ต้องการล็อก</label>
          <select id="bulkLockShift" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm">
            <option value="ช" selected>ช - เช้า</option>
            <option value="บ">บ - บ่าย</option>
            <option value="ด">ด - ดึก</option>
            <option value="ชบ">ชบ - โย้หน้า</option>
            <option value="ชด">ชด - เช้าดึก</option>
            <option value="O">O - OFF</option>
          </select>
        </div>
        <div>
          <label class="text-xs font-bold text-slate-600 block mb-1">3. ขอบเขตวันที่</label>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-2">
            <label class="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg px-2 py-2">
              <input type="radio" name="bulkScope" value="all" checked> ทั้งเดือน
            </label>
            <label class="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg px-2 py-2">
              <input type="radio" name="bulkScope" value="workday"> เฉพาะวันทำการ
            </label>
            <label class="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg px-2 py-2">
              <input type="radio" name="bulkScope" value="weekend"> เฉพาะเสาร์-อาทิตย์
            </label>
            <label class="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg px-2 py-2 sm:col-span-2">
              <input type="radio" name="bulkScope" value="holiday"> เฉพาะนักขัตฤกษ์
            </label>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <label class="text-xs text-slate-600">จากวันที่
              <input id="bulkStartDay" type="number" min="1" max="${days}" value="1" class="mt-1 w-full border border-slate-300 rounded-lg px-2 py-1.5 text-sm">
            </label>
            <label class="text-xs text-slate-600">ถึงวันที่
              <input id="bulkEndDay" type="number" min="1" max="${days}" value="${days}" class="mt-1 w-full border border-slate-300 rounded-lg px-2 py-1.5 text-sm">
            </label>
          </div>
        </div>
        <div>
          <div class="text-xs font-bold text-slate-600 mb-2">4. วันของสัปดาห์</div>
          <div class="grid grid-cols-4 gap-2 text-xs">
            ${[
              [0, 'อาทิตย์', false], [1, 'จันทร์', true], [2, 'อังคาร', false], [3, 'พุธ', true],
              [4, 'พฤหัสฯ', false], [5, 'ศุกร์', true], [6, 'เสาร์', false]
            ].map(([v, label, checked]) => `
              <label class="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5">
                <input type="checkbox" class="bulk-lock-dow" value="${v}" ${checked ? 'checked' : ''}> ${label}
              </label>
            `).join('')}
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between mb-2">
            <div class="text-xs font-bold text-slate-600">5. พยาบาล</div>
            <button type="button" id="bulkSelectAllNurses" class="text-xs text-cyan-700 font-bold">เลือก/ยกเลิกทั้งหมด</button>
          </div>
          <div class="max-h-56 overflow-y-auto rounded-xl border border-slate-200 bg-white p-2">${nurseOptions}</div>
        </div>
      </div>
    `,
    showCancelButton: true,
    showDenyButton: true,
    confirmButtonText: '🔒 ล็อก',
    denyButtonText: '🗑 ล้างล็อกทั้งหมด',
    cancelButtonText: 'ยกเลิก',
    didOpen: () => {
      document.getElementById('bulkSelectAllNurses')?.addEventListener('click', () => {
        const boxes = [...document.querySelectorAll('.bulk-lock-nurse')];
        const shouldCheck = boxes.some(b => !b.checked);
        boxes.forEach(b => { b.checked = shouldCheck; });
      });
    },
    preConfirm: () => {
      const action = document.getElementById('bulkLockAction')?.value || 'lock';
      const nurseIds = [...document.querySelectorAll('.bulk-lock-nurse:checked')].map(el => el.value);
      const dows = [...document.querySelectorAll('.bulk-lock-dow:checked')].map(el => Number(el.value));
      const shift = document.getElementById('bulkLockShift')?.value || 'ช';
      const scope = document.querySelector('input[name="bulkScope"]:checked')?.value || 'all';
      const startDay = Number(document.getElementById('bulkStartDay')?.value || 1);
      const endDay = Number(document.getElementById('bulkEndDay')?.value || 31);
      if (action !== 'unlock-heads' && nurseIds.length === 0) return Swal.showValidationMessage('กรุณาเลือกพยาบาลอย่างน้อย 1 คน');
      if (action !== 'unlock-heads' && dows.length === 0) return Swal.showValidationMessage('กรุณาเลือกวันอย่างน้อย 1 วัน');
      if (!Number.isFinite(startDay) || !Number.isFinite(endDay) || startDay < 1 || endDay < 1 || startDay > days || endDay > days || startDay > endDay) {
        return Swal.showValidationMessage('ช่วงวันที่ไม่ถูกต้อง');
      }
      return { action, nurseIds, dows, shift, scope, startDay, endDay };
    }
  }).then(res => {
    if (res.isDenied) {
      U.confirmAct('ล้างล็อกทั้งหมด?', 'จะปลดล็อกทุกเซลล์ของเดือนนี้ แต่ไม่ลบเวรเดิม').then(r => {
        if (!r.isConfirmed) return;
        const prefix = `-${state.year}-${state.month}-`;
        let removed = 0;
        Hist.pushHistory();
        for (const key of Object.keys(state.lockedShifts)) {
          if (!key.includes(prefix)) continue;
          delete state.lockedShifts[key];
          removed++;
        }
        invalidateStats();
        persistAll();
        R.renderSchedule();
        R.renderDashboard();
        R.renderCalendar();
        U.showSuccess(`ปลดล็อกทั้งหมดแล้ว ${removed} ช่อง`);
      });
      return;
    }
    if (!res.isConfirmed || !res.value) return;
    const { action, nurseIds, dows, shift, scope, startDay, endDay } = res.value;
    const to = Math.min(endDay, days);
    const inScope = (d) => {
      if (scope === 'all') return true;
      if (scope === 'workday') return !window.NurseState.isOffDay(state.year, state.month, d);
      if (scope === 'weekend') return window.NurseState.isWeekend(state.year, state.month, d);
      if (scope === 'holiday') return !!window.NurseHolidays?.isHoliday?.(state.year, state.month, d);
      return true;
    };
    Hist.pushHistory();
    let count = 0, skipped = 0, affectedNurses = 0;
    const targetNurseIds = action === 'unlock-heads'
      ? active.filter(n => /(หัวหน้า|รองหัวหน้า)/.test(String(n.position || ''))).map(n => n.id)
      : nurseIds;
    const touched = new Set();
    targetNurseIds.forEach(nid => {
      for (let d = startDay; d <= to; d++) {
        if (!inScope(d)) continue;
        if (action !== 'unlock-heads' && !dows.includes(window.NurseState.dayOfWeek(state.year, state.month, d))) continue;
        if (action === 'lock') {
          if (window.NurseState.getLeave(nid, d)) { skipped++; continue; }
          window.NurseState.setShift(nid, d, shift);
          window.NurseState.setShiftLock(nid, d, true);
        } else {
          window.NurseState.setShiftLock(nid, d, false);
        }
        count++;
        touched.add(nid);
      }
    });
    affectedNurses = touched.size;
    invalidateStats();
    persistAll();
    R.renderSchedule();
    R.renderDashboard();
    R.renderCalendar();
    if (action === 'lock') {
      U.showSuccess(`ล็อกเวรแล้ว ${count} ช่อง (${affectedNurses} คน)${skipped ? ` · ข้ามวันลา ${skipped} ช่อง` : ''}`);
    } else if (action === 'unlock-heads') {
      U.showSuccess(`ปลดล็อกหัวหน้าทั้งหมดแล้ว ${count} ช่อง`);
    } else {
      U.showSuccess(`ปลดล็อกตามเงื่อนไขแล้ว ${count} ช่อง (${affectedNurses} คน)`);
    }
  });
}

function onMonthChange() {
  const newMonth = +document.getElementById('monthSelect').value;
  const newYear = +document.getElementById('yearSelect').value;
  if (!(newMonth >= 1 && newMonth <= 12)) return;
  if (!(newYear >= 2500 && newYear <= 2700)) return;
  state.month = newMonth;
  state.year = newYear;
  invalidateStats();
  R.renderSchedule();
  R.renderLeaves();
  R.renderDashboard();
  R.renderCalendar();
  updateQuickHeadButtonsLabel();
}

function updateQuickHeadButtonsLabel() {
  const quickLock = document.getElementById('quickLockHeadsLabel');
  if (quickLock) quickLock.textContent = 'ลัด: หัวหน้า/รอง = เช้า';
}

function toggleHolidayMode() {
  state.treatHolidayAsWeekend = !state.treatHolidayAsWeekend;
  window.NurseState.markDirty();
  R.renderSchedule();
  R.renderDashboard();
  R.renderCalendar();
  updateHolidayButton();
}

function updateHolidayButton() {
  const btn = document.getElementById('btnHolidayMode');
  if (!btn) return;
  const label = btn.querySelector('.holiday-mode-label');
  if (label) label.textContent = state.treatHolidayAsWeekend ? 'วันหยุดราชการ: ON' : 'วันหยุดราชการ: OFF';
}

// ========= SAVE INDICATOR =========
function bindSaveIndicator() {
  const indicators = document.querySelectorAll('#saveIndicator');
  if (indicators.length === 0) return;
  let lastSavedAt = 0;
  onSaveStatusChange(status => {
    indicators.forEach(el => {
      el.classList.remove('saving', 'saved', 'dirty');
      if (status === 'saving') { el.classList.add('saving'); el.textContent = 'กำลังบันทึก…'; }
      else if (status === 'saved') {
        el.classList.add('saved');
        lastSavedAt = Date.now();
        el.textContent = 'บันทึกแล้ว ✓';
      }
      else if (status === 'dirty') { el.classList.add('dirty'); el.textContent = 'มีการเปลี่ยนแปลง'; }
      else if (status === 'error') { el.classList.add('dirty'); el.textContent = 'บันทึกล้มเหลว'; }
    });
  });
}

// ========= HISTORY BUTTONS =========
function bindHistoryButtons() {
  const undoBtns = document.querySelectorAll('#btnUndo, #btnMobileUndo, #mobileUndo');
  const redoBtns = document.querySelectorAll('#btnRedo, #btnMobileRedo, #mobileRedo');
  
  const syncAfterHistory = () => {
    R.renderSchedule(); R.renderLeaves(); R.renderDashboard(); R.renderSummary(); R.renderCalendar();
    U.loadReqToUI();
    U.updateOTRateVisibility();
    window.NurseSettings?._updateReqFieldsVisibility?.(state.appSettings?.shiftMode || 1);
    U.renderShiftPalette();
  };

  undoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (Hist.undo()) { syncAfterHistory(); U.showSuccess('ย้อนกลับการทำรายการแล้ว'); }
    });
  });

  redoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (Hist.redo()) { syncAfterHistory(); U.showSuccess('ทำซ้ำรายการสำเร็จ'); }
    });
  });

  Hist.onHistoryChange(({ canUndo, canRedo }) => {
    undoBtns.forEach(btn => { btn.disabled = !canUndo; });
    redoBtns.forEach(btn => { btn.disabled = !canRedo; });
  });
}

// ========= KEYBOARD =========
function bindKeyboard() {
  document.addEventListener('keydown', e => {
    // Ignore when typing in inputs
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
    if (Swal.isVisible()) return;

    if (window.NurseState.isSystemLocked()) {
      // Prevent any editing/action shortcuts
      const cmd = e.ctrlKey || e.metaKey;
      if (cmd && ['s', 'z', 'y'].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
      return;
    }

    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
      e.preventDefault();
      saveAll();
      return;
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z' && !e.shiftKey) {
      e.preventDefault();
      if (Hist.undo()) { 
        R.renderSchedule(); R.renderLeaves(); R.renderDashboard(); R.renderCalendar();
        U.loadReqToUI(); U.renderShiftPalette();
      }
      return;
    }
    if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === 'y' || (e.key.toLowerCase() === 'z' && e.shiftKey))) {
      e.preventDefault();
      if (Hist.redo()) { 
        R.renderSchedule(); R.renderLeaves(); R.renderDashboard(); R.renderCalendar();
        U.loadReqToUI(); U.renderShiftPalette();
      }
      return;
    }
    // Quick-select shifts when on schedule tab (mode-aware)
    const activeKeyMap = SHIFT_MODES[state.appSettings?.shiftMode || 1]?.keyboardMap || KEYBOARD_SHIFT_MAP;
    if (activeKeyMap[e.key]) {
      const scheduleVisible = !document.getElementById('tab-schedule').classList.contains('hidden');
      if (scheduleVisible) {
        state.selectedShift = activeKeyMap[e.key];
        U.renderShiftPalette();
      }
    }
  });
}

// ========= MOBILE DRAWER LOGIC =========
function toggleMobileMoreMenu() {
  const menu = document.getElementById('mobileMoreMenu');
  const backdrop = document.getElementById('mobileSheetBackdrop');
  if (menu && backdrop) {
    const isOpen = menu.classList.contains('open');
    if (isOpen) {
      menu.classList.remove('open');
      backdrop.classList.remove('open');
    } else {
      menu.classList.add('open');
      backdrop.classList.add('open');
    }
  }
}

function closeMobileMoreMenu() {
  const menu = document.getElementById('mobileMoreMenu');
  const backdrop = document.getElementById('mobileSheetBackdrop');
  if (menu && backdrop) {
    menu.classList.remove('open');
    backdrop.classList.remove('open');
  }
}

// ========= THEME (LIGHT/DARK) LOGIC =========
function initTheme() {
  const savedTheme = localStorage.getItem('nurse-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeUI(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('nurse-theme', newTheme);
  updateThemeUI(newTheme);
  showSuccess(newTheme === 'dark' ? 'สลับเข้าสู่โหมดมืด (Dark Mode)' : 'สลับเข้าสู่โหมดสว่าง (Light Mode)');
}

function updateThemeUI(theme) {
  const isDark = theme === 'dark';
  document.querySelectorAll('.theme-mode-text').forEach(el => {
    el.textContent = isDark ? 'ดาร์กโหมด' : 'ไลต์โหมด';
  });
}

// ========= WIRE HEADER / SUB-HEADER BUTTONS =========
function bindButtons() {
  document.querySelectorAll('[data-act]').forEach(btn => {
    btn.addEventListener('click', () => {
      const a = btn.dataset.act;
      if (a === 'add-nurse') N.openAddNurse();
      else if (a === 'export-xlsx') E.exportSchedule('xlsx');
      else if (a === 'export-pdf') U.withButtonLock(btn, () => E.exportSchedule('pdf'));
      else if (a === 'print') window.print();
      else if (a === 'run-auto') runAutoSchedule();
      else if (a === 'save-all') saveAll();
      else if (a === 'clear-all') clearAll();
      else if (a === 'clear-shift') { state.selectedShift = null; U.renderShiftPalette(); }
      else if (a === 'toggle-lock-mode') toggleLockMode();
      else if (a === 'bulk-lock-mwf') openBulkLockDialog();
      else if (a === 'quick-lock-heads-may2569') quickLockHeadsMorningMay2569();
      else if (a === 'export-ot-xlsx') E.exportOT('xlsx');
      else if (a === 'export-ot-pdf') U.withButtonLock(btn, () => E.exportOT('pdf'));
      else if (a === 'save-ot') window.NurseOT.saveOTSettings();
      else if (a === 'add-nurse-tab') N.openAddNurse();
      else if (a === 'toggle-holiday') toggleHolidayMode();
    });
  });

  // Bind all navigation links (Desktop sidebar, mobile bottom, mobile sheets)
  document.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      U.switchTab(tab);
      closeMobileMoreMenu();
    });
  });

  // Ward selector change listener
  const headerSel = document.getElementById('headerWardSelector');
  if (headerSel) {
    headerSel.addEventListener('change', (e) => {
      window.NurseSettings.handleSwitchWard(e.target.value);
    });
  }

  // Theme Toggles
  const btnToggleDesktop = document.getElementById('desktopThemeToggle');
  if (btnToggleDesktop) btnToggleDesktop.addEventListener('click', toggleTheme);

  const btnToggleMobile = document.getElementById('mobileThemeToggle');
  if (btnToggleMobile) btnToggleMobile.addEventListener('click', toggleTheme);

  // Mobile More Drawer Toggle
  const btnMobileMore = document.getElementById('btnMobileMore');
  if (btnMobileMore) btnMobileMore.addEventListener('click', toggleMobileMoreMenu);

  const mobileSheetBackdrop = document.getElementById('mobileSheetBackdrop');
  if (mobileSheetBackdrop) mobileSheetBackdrop.addEventListener('click', closeMobileMoreMenu);

  document.getElementById('monthSelect').addEventListener('change', onMonthChange);
  document.getElementById('yearSelect').addEventListener('change', onMonthChange);
}

// ========= STARTUP =========
window.addEventListener('DOMContentLoaded', () => {
  // Initialize theme first
  initTheme();

  const result = loadFromStorage();
  if (result.corrupted) U.showError('ข้อมูลที่บันทึกไว้เสียหาย ระบบจะใช้ข้อมูลตัวอย่างแทน');
  else if (result.migrated) U.showInfo('ย้ายข้อมูลจากเวอร์ชันก่อนหน้าแล้ว');

  U.initSelectors();
  U.loadReqToUI();
  U.loadOTToUI();
  U.renderShiftPalette();
  U.renderLeavePalette();
  
  // Set branding, theme & logo dynamically
  applyBranding();

  // Apply persisted accessibility settings (font scale, motion, contrast)
  window.NurseSettings?.applyAccessibility?.();

  bindButtons();
  bindHistoryButtons();
  bindSaveIndicator();
  bindKeyboard();
  updateHolidayButton();
  updateQuickHeadButtonsLabel();
  U.updateOTRateVisibility();
  
  // Apply req-fields visibility for the saved mode
  window.NurseSettings?._updateReqFieldsVisibility?.(state.appSettings?.shiftMode || 1);
  R.renderDashboard();
  window.NurseSettings?.renderSettings();
  syncLockModeUI();
  lucide.createIcons();

  // Initialize undo/redo button states safely
  document.querySelectorAll('#btnUndo, #btnMobileUndo, #mobileUndo').forEach(btn => btn.disabled = true);
  document.querySelectorAll('#btnRedo, #btnMobileRedo, #mobileRedo').forEach(btn => btn.disabled = true);

  window.addEventListener('beforeunload', e => {
    if (state.dirty) { e.preventDefault(); e.returnValue = ''; }
  });

  window.NurseNotify?.init();
  console.log(`Nurse Scheduling v3.0.4 ready.`);
});

function applyBranding() {
  const ap = state.appSettings || {};
  const appTitle = ap.appTitle || DEFAULT_APP_SETTINGS.appTitle;
  const appVersionLabel = ap.appVersionLabel || DEFAULT_APP_SETTINGS.appVersionLabel;
  const copyrightYear = ap.copyrightYear || DEFAULT_APP_SETTINGS.copyrightYear;
  const orgName = ap.orgName || DEFAULT_APP_SETTINGS.orgName;
  const developerName = ap.developerName || DEFAULT_APP_SETTINGS.developerName;
  const developerRole = ap.developerRole || DEFAULT_APP_SETTINGS.developerRole;
  const developerPhone = ap.developerPhone || DEFAULT_APP_SETTINGS.developerPhone;
  const developerEmail = ap.developerEmail || DEFAULT_APP_SETTINGS.developerEmail;
  const developerOrg = ap.developerOrg || DEFAULT_APP_SETTINGS.developerOrg;

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };
  const joinClean = (parts, separator = ' · ') => parts.filter(Boolean).join(separator);

  setText('desktopAppTitle', appTitle);
  setText('desktopAppVersion', appVersionLabel);
  const orgNameEl = document.getElementById('desktopOrgName');
  if (orgNameEl) orgNameEl.textContent = orgName;
  document.title = joinClean([joinClean([appTitle, appVersionLabel], ' '), orgName], ' — ');

  setText('helpDeveloperName', developerName);
  setText('helpDeveloperRole', developerRole);
  setText('helpDeveloperPhone', developerPhone);
  setText('helpDeveloperEmail', developerEmail);
  setText('helpDeveloperOrg', developerOrg);
  setText('footerSystemText', `© ${copyrightYear} ${joinClean([appTitle, appVersionLabel], ' ')} · ${orgName}`);
  setText('footerDeveloperText', joinClean([developerName ? `พัฒนาโดย ${developerName}` : '', developerPhone, developerEmail]));

  const logoImg = document.getElementById('orgCustomLogo');
  if (logoImg) {
    if (ap.customLogoUrl) {
      logoImg.src = ap.customLogoUrl;
      logoImg.classList.remove('hidden');
    } else {
      logoImg.src = '';
      logoImg.classList.add('hidden');
    }
  }

  if (ap.theme) {
    document.documentElement.setAttribute('data-color-theme', ap.theme);
  } else {
    document.documentElement.removeAttribute('data-color-theme');
  }
}

// Expose for inline handlers if any remain
window.applyBranding = applyBranding;
window.runAutoSchedule = runAutoSchedule;
window.saveAll = saveAll;
window.clearAll = clearAll;
window.onMonthChange = onMonthChange;
})();


/* ==================== notify-hub.js ==================== */
/* Notification Center v2 enhancements: filter/search/export, desktop+sound+quiet,
   quick-send presets. Wraps window.NurseNotify (already exposed) and adds new UI hooks. */
(function () {
  const PREFS_KEY = 'smnc_notify_hub_prefs_v1';
  const defaultPrefs = { desktop: false, sound: true, quiet: false };
  let prefs = loadPrefs();
  let activeFilter = 'all';
  let searchTerm = '';

  function loadPrefs() {
    try { return Object.assign({}, defaultPrefs, JSON.parse(localStorage.getItem(PREFS_KEY) || '{}')); }
    catch { return Object.assign({}, defaultPrefs); }
  }
  function savePrefs() { localStorage.setItem(PREFS_KEY, JSON.stringify(prefs)); }

  function escHtml(s) {
    return String(s ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }

  // ── Filter / Search ───────────────────────────────────
  function setFilter(filter, alsoUpdateStatChips) {
    activeFilter = filter || 'all';
    // Sync pill UI
    document.querySelectorAll('[data-log-filter]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.logFilter === activeFilter);
    });
    if (alsoUpdateStatChips) {
      document.querySelectorAll('[data-stat-filter]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.statFilter === activeFilter);
      });
    } else {
      // Map filter to stat chip if possible
      const map = {all:'all', success:'success', warning:'warning', error:null, telegram:'telegram'};
      document.querySelectorAll('[data-stat-filter]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.statFilter === map[activeFilter]);
      });
    }
    applyFilter();
  }

  function applyFilter() {
    const el = document.getElementById('notifRichLog');
    if (!el || !window.NurseNotify) return;
    const search = (document.getElementById('notifLogSearch')?.value || '').trim().toLowerCase();
    searchTerm = search;

    // Get raw list via render then post-filter DOM, OR re-implement render with filter
    let all = [];
    try { all = JSON.parse(localStorage.getItem('smnc_notifs_v1') || '[]'); } catch {}

    // Apply filter
    if (activeFilter === 'unread') all = all.filter(n => !n.read);
    else if (activeFilter === 'telegram') all = all.filter(n => /telegram/i.test(n.title || '') || /telegram/i.test(n.body || ''));
    else if (activeFilter !== 'all') all = all.filter(n => n.type === activeFilter);

    // Apply search
    if (search) {
      all = all.filter(n =>
        (n.title || '').toLowerCase().includes(search) ||
        (n.body  || '').toLowerCase().includes(search)
      );
    }

    if (all.length === 0) {
      const msg = search
        ? `ไม่พบประวัติที่ตรงกับ "${escHtml(search)}"`
        : (activeFilter === 'all' ? 'ยังไม่มีประวัติ' : 'ไม่มีรายการในหมวดนี้');
      el.innerHTML = `<div class="notif-empty-state" style="padding:32px 16px;">
        <div class="notif-empty-state-icon">${search ? '🔍' : '📭'}</div>
        <p style="font-size:12px;font-weight:600;color:var(--text-muted);margin:0">${msg}</p>
        ${(search || activeFilter !== 'all') ? `<button onclick="window.NurseNotifyHub.resetFilter()" style="margin-top:10px;padding:5px 12px;background:var(--accent-color);color:#fff;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;">ล้างตัวกรอง</button>` : ''}
      </div>`;
      return;
    }

    const icons = { success: '✅', warning: '⚠️', error: '❌', info: 'ℹ️' };
    const typeColors = {
      success: 'rgba(16,185,129,0.12)', warning: 'rgba(245,158,11,0.12)',
      error: 'rgba(239,68,68,0.1)', info: 'rgba(14,165,233,0.1)'
    };
    el.innerHTML = all.map(n => {
      const isTele = /telegram/i.test(n.title || '') || /telegram/i.test(n.body || '');
      const teleTag = isTele ? `<span style="display:inline-block;padding:1px 6px;border-radius:4px;background:rgba(14,165,233,0.15);color:#0284c7;font-size:9px;font-weight:800;margin-left:4px;">TG</span>` : '';
      const unreadTag = !n.read ? `<span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#ef4444;margin-left:4px;vertical-align:middle;"></span>` : '';
      return `<div class="notif-rich-item ${n.read?'':'unread'}">
        <div class="notif-rich-icon ${n.type || 'info'}" style="background:${typeColors[n.type] || typeColors.info}">
          ${icons[n.type] || '🔔'}
        </div>
        <div class="notif-rich-body">
          <div class="notif-rich-title">${escHtml(n.title)} ${teleTag} ${unreadTag}</div>
          <div class="notif-rich-desc">${escHtml(n.body)}</div>
          <div class="notif-rich-ts"><i data-lucide="clock" class="w-3 h-3"></i> ${escHtml(n.ts)}</div>
        </div>
        <div class="notif-rich-actions">
          <button onclick="window.NurseNotify.resendNotification(${n.id})" type="button"
            class="notif-resend-btn" title="ส่งไปยัง Telegram อีกครั้ง">
            <i data-lucide="send" class="w-3 h-3"></i>
          </button>
        </div>
      </div>`;
    }).join('');
    if (window.lucide) window.lucide.createIcons();
  }

  function resetFilter() {
    activeFilter = 'all';
    const s = document.getElementById('notifLogSearch'); if (s) s.value = '';
    setFilter('all', true);
  }

  // ── Export ───────────────────────────────────────────
  function exportLog() {
    let all = [];
    try { all = JSON.parse(localStorage.getItem('smnc_notifs_v1') || '[]'); } catch {}
    if (!all.length) { (window.NurseUI?.showError || alert)('ไม่มีประวัติให้ส่งออก'); return; }
    const blob = new Blob([JSON.stringify(all, null, 2)], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `notification_log_${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    (window.NurseUI?.showSuccess || (msg => Swal.fire({icon:'success',title:msg,timer:1500,showConfirmButton:false})))('ดาวน์โหลดประวัติแล้ว');
  }

  // ── Desktop notifications ────────────────────────────
  async function toggleDesktop(on) {
    const status = document.getElementById('notifSysDesktopStatus');
    if (on) {
      if (!('Notification' in window)) {
        if (status) status.textContent = 'เบราว์เซอร์ไม่รองรับ';
        document.getElementById('notifSysDesktop').checked = false;
        return;
      }
      if (Notification.permission === 'granted') {
        prefs.desktop = true; savePrefs();
        if (status) status.textContent = '✅ เปิดใช้งานแล้ว';
        showDesktop('🔔 เปิดการแจ้งเตือนแล้ว', 'ระบบจะแจ้งบนเดสก์ท็อปเมื่อมีกิจกรรม');
      } else if (Notification.permission === 'denied') {
        if (status) status.textContent = '❌ ถูกบล็อก — กรุณาเปิดในตั้งค่าเบราว์เซอร์';
        document.getElementById('notifSysDesktop').checked = false;
      } else {
        const res = await Notification.requestPermission();
        if (res === 'granted') {
          prefs.desktop = true; savePrefs();
          if (status) status.textContent = '✅ เปิดใช้งานแล้ว';
          showDesktop('🔔 เปิดการแจ้งเตือนแล้ว', 'ระบบจะแจ้งบนเดสก์ท็อปเมื่อมีกิจกรรม');
        } else {
          document.getElementById('notifSysDesktop').checked = false;
          if (status) status.textContent = '❌ ผู้ใช้ไม่อนุญาต';
        }
      }
    } else {
      prefs.desktop = false; savePrefs();
      if (status) status.textContent = 'ปิดอยู่';
    }
  }

  function showDesktop(title, body) {
    if (!prefs.desktop || prefs.quiet) return;
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    try {
      new Notification(title, { body, icon: '/favicon.ico', silent: false });
    } catch(_) {}
  }

  // ── Sound ────────────────────────────────────────────
  let _audioCtx = null;
  function getAudio() {
    if (_audioCtx) return _audioCtx;
    try { _audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch {}
    return _audioCtx;
  }
  function playBeep(freq = 880, dur = 0.18, type = 'sine') {
    if (prefs.quiet) return;
    const ctx = getAudio(); if (!ctx) return;
    try {
      const o = ctx.createOscillator(); const g = ctx.createGain();
      o.type = type; o.frequency.value = freq;
      g.gain.value = 0; o.connect(g); g.connect(ctx.destination);
      const now = ctx.currentTime;
      g.gain.linearRampToValueAtTime(0.18, now + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
      o.start(now); o.stop(now + dur + 0.02);
    } catch(_) {}
  }
  function playNotificationSound(type) {
    if (!prefs.sound || prefs.quiet) return;
    if (type === 'error') { playBeep(440, 0.15, 'sawtooth'); setTimeout(() => playBeep(330, 0.18, 'sawtooth'), 130); }
    else if (type === 'warning') { playBeep(660, 0.12); setTimeout(() => playBeep(880, 0.14), 100); }
    else { playBeep(988, 0.1); setTimeout(() => playBeep(1318, 0.12), 80); }
  }
  function toggleSound(on) { prefs.sound = !!on; savePrefs(); }
  function testSound() {
    const wasQuiet = prefs.quiet;
    prefs.quiet = false;
    playNotificationSound('success');
    prefs.quiet = wasQuiet;
  }

  // ── Quiet mode ───────────────────────────────────────
  function toggleQuiet(on) {
    prefs.quiet = !!on; savePrefs();
    let banner = document.getElementById('notifQuietBanner');
    if (on) {
      if (!banner) {
        banner = document.createElement('div');
        banner.id = 'notifQuietBanner';
        banner.className = 'notif-quiet-banner';
        banner.innerHTML = '🌙 โหมดเงียบเปิดอยู่ — ไม่มี toast / desktop / sound';
        const hero = document.querySelector('.notif-hub-hero');
        if (hero) hero.insertAdjacentElement('afterend', banner);
      }
    } else if (banner) banner.remove();
  }

  // ── Quick send presets ───────────────────────────────
  const PRESETS = {
    urgent: '🚨 *ประกาศด่วน* 🚨\n\nเรียนทีมงานทุกท่าน\n[กรอกข้อความที่นี่]\n\n_ส่งจากระบบจัดตารางเวร_',
    reminder: '⏰ *เตือนเวร*\n\nกรุณาตรวจสอบตารางเวรในวันถัดไป\nหากมีการเปลี่ยนแปลงโปรดแจ้งล่วงหน้า\n\nขอบคุณค่ะ/ครับ 🙏',
    swap: '🔄 *ขอแลกเวร*\n\nต้องการแลกเวรวันที่: [DD/MM/YYYY]\nเวร: [ประเภทเวร]\nเหตุผล: [กรอกเหตุผล]\n\nผู้แลกเปลี่ยนกรุณาแจ้งกลับโดยตรง 🙏',
    thanks: '💚 *ขอบคุณทีมงาน*\n\nขอบคุณทุกท่านสำหรับความทุ่มเทในการทำงาน\nที่ผ่านมาตารางเวรเป็นไปด้วยความเรียบร้อย\nขอบคุณค่ะ/ครับ 🌹',
  };
  async function quickSend(presetId) {
    const msg = PRESETS[presetId];
    if (!msg) return;
    const titles = { urgent:'🚨 ประกาศด่วน', reminder:'⏰ เตือนเวร', swap:'🔄 ขอแลกเวร', thanks:'💚 ขอบคุณทีมงาน' };
    const result = await Swal.fire({
      title: titles[presetId],
      html: `<textarea id="qsBody" rows="8" style="width:100%;padding:10px;border:1px solid #cbd5e1;border-radius:8px;font-size:13px;font-family:inherit;line-height:1.6;">${escHtml(msg)}</textarea>
        <p style="font-size:11px;color:#64748b;margin-top:8px;text-align:left;">📨 จะส่งไปยัง Destinations ที่ตั้งค่าไว้ (Telegram)</p>`,
      showCancelButton: true,
      confirmButtonText: '📨 ส่งทันที',
      cancelButtonText: 'ยกเลิก',
      confirmButtonColor: '#0284c7',
      width: 560,
      preConfirm: () => document.getElementById('qsBody').value.trim(),
    });
    if (!result.isConfirmed) return;
    const text = result.value;
    if (!text) return;
    if (window.NurseSettings?.executeTelegramSend) {
      window.NurseSettings.executeTelegramSend(text);
    } else {
      Swal.fire({ icon: 'error', title: 'ส่งไม่สำเร็จ', text: 'โมดูล Telegram ยังไม่พร้อม' });
    }
  }

  // ── Hook into NurseNotify.add so we trigger desktop/sound on new alerts ──
  function installHook() {
    if (!window.NurseNotify || window.NurseNotify._hubHooked) return;
    const _origRenderBell = (() => {
      // We can't directly monkey-patch add() since it's inside closure.
      // Strategy: watch storage changes via interval polling of length+latest id
      let lastTopId = null;
      try { lastTopId = (JSON.parse(localStorage.getItem('smnc_notifs_v1') || '[]')[0]||{}).id || null; } catch {}
      setInterval(() => {
        if (prefs.quiet) return;
        let list = []; try { list = JSON.parse(localStorage.getItem('smnc_notifs_v1') || '[]'); } catch {}
        const top = list[0];
        if (top && top.id !== lastTopId) {
          lastTopId = top.id;
          playNotificationSound(top.type);
          showDesktop(top.title || 'แจ้งเตือน', top.body || '');
        } else if (!top) lastTopId = null;
      }, 1500);
    })();
    window.NurseNotify._hubHooked = true;
  }

  // ── Init ─────────────────────────────────────────────
  function init() {
    // Restore preferences to checkboxes
    const dt = document.getElementById('notifSysDesktop');
    const sd = document.getElementById('notifSysSound');
    const qt = document.getElementById('notifSysQuiet');
    if (dt) dt.checked = !!prefs.desktop;
    if (sd) sd.checked = prefs.sound !== false;
    if (qt) qt.checked = !!prefs.quiet;
    const status = document.getElementById('notifSysDesktopStatus');
    if (status) {
      if (!('Notification' in window)) status.textContent = 'เบราว์เซอร์ไม่รองรับ';
      else if (Notification.permission === 'denied') status.textContent = '❌ ถูกบล็อก';
      else if (prefs.desktop && Notification.permission === 'granted') status.textContent = '✅ เปิดใช้งานแล้ว';
      else status.textContent = 'ปิดอยู่ — เปิดเพื่อขออนุญาต';
    }
    if (prefs.quiet) toggleQuiet(true);

    // Wire search input
    const search = document.getElementById('notifLogSearch');
    if (search) search.addEventListener('input', applyFilter);

    installHook();
    applyFilter();
  }

  window.NurseNotifyHub = {
    init, setFilter, applyFilter, resetFilter, exportLog,
    toggleDesktop, toggleSound, testSound, toggleQuiet, quickSend,
    showDesktop, playNotificationSound,
  };

  // Auto-init
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(init, 300));
  else setTimeout(init, 300);
})();


/* ==================== bot-cmd.js ==================== */
/* Telegram Bot Command Center — long-polling + command parser + inline keyboard.
   Lets nurses control the system via Telegram: /today, /myshifts, /swap, /pair, etc. */
(function () {
  const STATE_KEY = 'smnc_bot_cmd_state_v1';
  const MODE_KEY = 'smnc_bot_cmd_mode_v1';
  const POLL_INTERVAL_MS = 3000;
  const MAX_ACTIVITY = 50;

  let runtime = {
    enabled: false,
    mode: 'auto',
    polling: false,
    lastUpdateId: 0,
    abortCtrl: null,
    paired: {},          // { chat_id: { nurseId, name, chatId, pairedAt, isAdmin } }
    swapRequests: [],    // { id, fromChatId, fromName, date, shift, status, ts }
    activity: [],        // { ts, kind, msg }
    pendingCmd: {},      // per chat_id: { cmd: 'swap', step: 1, data: {...} }
    stats: { cmdsTotal: 0, cmdsToday: 0, ok: 0, err: 0, pings: [], lastErr: '', dayKey: '' },
    config: {
      welcomeTpl: '',          // custom welcome message
      autoNotifySwap: true,    // auto-notify admins when new swap request
      requireAdminForSwap: true,
    },
  };

  function loadState() {
    try {
      const s = JSON.parse(localStorage.getItem(STATE_KEY) || '{}');
      runtime.lastUpdateId = s.lastUpdateId || 0;
      runtime.paired = s.paired || {};
      runtime.swapRequests = s.swapRequests || [];
      runtime.activity = s.activity || [];
      runtime.pendingCmd = s.pendingCmd || {};
      runtime.wasEnabled = !!s.wasEnabled;       // ⭐ remember toggle state across reloads
      runtime.mode = s.mode || localStorage.getItem(MODE_KEY) || 'auto';
      if (!['auto', 'live'].includes(runtime.mode)) runtime.mode = 'auto';
      Object.assign(runtime.stats, s.stats || {});
      Object.assign(runtime.config, s.config || {});
      // Reset daily counter if day changed
      const today = new Date().toDateString();
      if (runtime.stats.dayKey !== today) {
        runtime.stats.cmdsToday = 0;
        runtime.stats.dayKey = today;
      }
    } catch {}
  }
  function saveState() {
    try {
      localStorage.setItem(STATE_KEY, JSON.stringify({
        lastUpdateId: runtime.lastUpdateId,
        paired: runtime.paired,
        swapRequests: runtime.swapRequests.slice(0, 50),
        activity: runtime.activity.slice(0, MAX_ACTIVITY),
        pendingCmd: runtime.pendingCmd,
        wasEnabled: runtime.enabled,            // ⭐ persist toggle state
        mode: runtime.mode,
        stats: runtime.stats,
        config: runtime.config,
      }));
      localStorage.setItem(MODE_KEY, runtime.mode);
    } catch {}
  }

  function trackCmd() {
    const today = new Date().toDateString();
    if (runtime.stats.dayKey !== today) { runtime.stats.cmdsToday = 0; runtime.stats.dayKey = today; }
    runtime.stats.cmdsTotal++; runtime.stats.cmdsToday++;
    renderStats();
  }
  function trackSuccess(ms) {
    runtime.stats.ok++;
    if (ms) { runtime.stats.pings.push(ms); if (runtime.stats.pings.length > 20) runtime.stats.pings.shift(); }
    renderStats();
  }
  function trackError(msg) { runtime.stats.err++; runtime.stats.lastErr = msg || ''; renderStats(); }

  function renderStats() {
    const e = id => document.getElementById(id);
    if (!e('botCtlStatCmds')) return;
    e('botCtlStatCmds').textContent = runtime.stats.cmdsTotal;
    e('botCtlStatCmdsToday').textContent = `วันนี้ ${runtime.stats.cmdsToday}`;
    e('botCtlStatOk').textContent = runtime.stats.ok;
    const total = runtime.stats.ok + runtime.stats.err;
    e('botCtlStatRate').textContent = total ? Math.round(runtime.stats.ok / total * 100) + '%' : '-%';
    e('botCtlStatErr').textContent = runtime.stats.err;
    e('botCtlStatLastErr').textContent = runtime.stats.lastErr ? (runtime.stats.lastErr.slice(0, 18) + (runtime.stats.lastErr.length > 18 ? '...' : '')) : '-';
    const avg = runtime.stats.pings.length ? Math.round(runtime.stats.pings.reduce((a,b)=>a+b,0) / runtime.stats.pings.length) : 0;
    e('botCtlStatPing').textContent = avg || '-';
  }

  function isAdmin(chatId) {
    const p = runtime.paired[chatId];
    if (p?.isAdmin) return true;
    // First paired user becomes admin by default
    const entries = Object.entries(runtime.paired);
    if (entries.length > 0 && entries[0][0] === String(chatId)) return true;
    return false;
  }

  function getToken() {
    const tg = window.NurseState?.state?.appSettings?.telegram;
    return tg?.botToken || '';
  }

  function escHtml(s) {
    return String(s ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }
  function escMD(s) {
    // Telegram MarkdownV2 escape
    return String(s ?? '').replace(/([_*\[\]()~`>#+\-=|{}.!\\])/g, '\\$1');
  }

  function activityLog(kind, msg) {
    runtime.activity.unshift({ ts: new Date().toLocaleTimeString('th-TH'), kind, msg });
    runtime.activity = runtime.activity.slice(0, MAX_ACTIVITY);
    saveState();
    renderActivity();
  }

  // ── Telegram API helpers ─────────────────────────────
  async function tgCall(method, params) {
    const token = getToken();
    if (!token) throw new Error('No bot token');
    const res = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    });
    const data = await res.json();
    if (!data.ok) throw new Error(data.description || 'Telegram API error');
    return data.result;
  }

  async function sendMessage(chatId, text, opts = {}) {
    try {
      return await tgCall('sendMessage', {
        chat_id: chatId,
        text,
        parse_mode: opts.parse_mode || 'HTML',
        reply_markup: opts.reply_markup,
        disable_web_page_preview: true,
      });
    } catch (e) {
      // Retry without parse_mode (strip HTML) if parse error
      if (/parse|entity|tag/i.test(e.message || '')) {
        try {
          const plain = String(text).replace(/<[^>]+>/g, '').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'");
          return await tgCall('sendMessage', {
            chat_id: chatId, text: plain,
            reply_markup: opts.reply_markup, disable_web_page_preview: true,
          });
        } catch (e2) {
          activityLog('err', `ส่งไม่สำเร็จ (retry): ${e2.message}`);
          trackError(e2.message);
        }
      } else {
        activityLog('err', `ส่งไม่สำเร็จ: ${e.message}`);
        trackError(e.message);
      }
    }
  }

  async function answerCallback(callbackQueryId, text = '') {
    try { await tgCall('answerCallbackQuery', { callback_query_id: callbackQueryId, text }); } catch {}
  }

  async function editMessage(chatId, messageId, text, opts = {}) {
    try {
      await tgCall('editMessageText', {
        chat_id: chatId, message_id: messageId, text,
        parse_mode: opts.parse_mode || 'HTML',
        reply_markup: opts.reply_markup,
      });
    } catch (e) {
      activityLog('err', `Edit ไม่สำเร็จ: ${e.message}`);
    }
  }

  // ── Inline Keyboard builders ─────────────────────────
  function kbMainMenu(chatId) {
    const rows = [
      [{ text: '📅 เวรวันนี้', callback_data: 'cmd:today' }, { text: '📆 พรุ่งนี้', callback_data: 'cmd:tomorrow' }],
      [{ text: '🎯 เวรถัดไป', callback_data: 'cmd:next' }, { text: '😴 วันหยุด', callback_data: 'cmd:off' }],
      [{ text: '🗓️ สัปดาห์', callback_data: 'cmd:week' }, { text: '👤 เวรของฉัน', callback_data: 'cmd:myshifts' }],
      [{ text: '🖼️ ภาพตารางเวร', callback_data: 'cmd:img' }, { text: '🗓️ ภาพปฏิทิน', callback_data: 'cmd:imgcal' }],
      [{ text: '📊 สรุปเดือน', callback_data: 'cmd:summary' }, { text: '📋 วันลา', callback_data: 'cmd:leaves' }],
      [{ text: '💰 รายงาน OT', callback_data: 'cmd:ot' }, { text: '📚 ทะเบียนพยาบาล', callback_data: 'cmd:nurses' }],
      [{ text: '🔄 ขอแลกเวร', callback_data: 'cmd:swap' }, { text: '📝 ขอลา', callback_data: 'cmd:leave' }],
      [{ text: '🔗 ผูกบัญชี', callback_data: 'cmd:pair' }, { text: '⚙️ สถานะ', callback_data: 'cmd:status' }],
    ];
    if (chatId && isAdmin(chatId)) {
      rows.push([{ text: '🖨️ ศูนย์การพิมพ์', callback_data: 'cmd:print' }, { text: '⚙️ จัดเวรอัตโนมัติ', callback_data: 'cmd:generate' }]);
      rows.push([{ text: '👑 เมนูแอดมิน', callback_data: 'cmd:admin' }]);
    }
    rows.push([{ text: '❓ วิธีใช้', callback_data: 'cmd:help' }]);
    return { inline_keyboard: rows };
  }

  // ── Command implementations ──────────────────────────
  const state = () => window.NurseState?.state;
  const H = () => ({
    getShift: window.NurseState?.getShift,
    getLeave: window.NurseState?.getLeave,
    daysInMonth: window.NurseState?.daysInMonth,
    dayLabel: window.NurseState?.dayLabel,
    computeNurseStats: window.NurseState?.computeNurseStats,
    isHoliday: window.NurseHolidays?.isHoliday || (() => false),
    holidayName: window.NurseHolidays?.getHolidayName || (() => ''),
  });

  function getPairedNurse(chatId) {
    const p = runtime.paired[chatId];
    if (!p) return null;
    return state().nurses.find(n => n.id === p.nurseId);
  }

  function fmtShiftCode(code) {
    const names = { 'ช':'☀️ เช้า', 'บ':'🌆 บ่าย', 'ด':'🌙 ดึก', 'ชบ':'☀️🌆 เช้า+บ่าย', 'ดบ':'🌙🌆 ดึก+บ่าย', 'ชด':'☀️🌙 เช้า+ดึก', 'O':'😴 หยุด', 'V':'🟣 ลา', 'T':'🔴 ลาป่วย' };
    return names[code] || code;
  }

  const COMMANDS = {
    start: cmdStart, menu: cmdStart, help: cmdHelp,
    today: cmdToday, tomorrow: cmdTomorrow, week: cmdWeek,
    myshifts: cmdMyShifts, summary: cmdSummary,
    swap: cmdSwap, pair: cmdPair, status: cmdStatus, cancel: cmdCancel,
    next: cmdNext, off: cmdOff, find: cmdFind,
    admin: cmdAdmin, broadcast: cmdBroadcast, grant: cmdGrant,
    // v3: visual + reports + workflows
    calendar: cmdCalendar, img: cmdImg, imgcal: cmdImgCal, imgme: cmdImgMe,
    image: cmdImg, // alias
    leaves: cmdLeaves, myleaves: cmdMyLeaves,
    ot: cmdOT, myot: cmdMyOT,
    nurses: cmdNurses, registry: cmdNurses, // alias
    leave: cmdLeave,
    print: cmdPrint, generate: cmdGenerate, auto: cmdGenerate,
  };

  function header() {
    const s = state();
    const orgName = s?.appSettings?.orgName || 'กลุ่มงานการพยาบาล';
    return `🏥 <b>${escHtml(orgName)}</b>\n────────────────`;
  }

  async function cmdStart(chatId, msg, args) {
    const userName = msg.from?.first_name || 'คุณ';
    const nurse = getPairedNurse(chatId);
    const adminTag = isAdmin(chatId) ? ' 👑' : '';
    let text;
    if (runtime.config.welcomeTpl) {
      text = runtime.config.welcomeTpl
        .replaceAll('{name}', userName)
        .replaceAll('{org}', state()?.appSettings?.orgName || 'หน่วยงาน')
        .replaceAll('{nurse}', nurse?.name || '(ยังไม่ผูกบัญชี)');
    } else {
      const pairLine = nurse ? `🔗 ผูกบัญชี: <b>${escHtml(nurse.name)}</b>${adminTag}\n` : '⚠️ <i>ยังไม่ได้ผูกบัญชี — พิมพ์ /pair ชื่อ-นามสกุล</i>\n';
      text = `${header()}\n\n👋 สวัสดีคุณ <b>${escHtml(userName)}</b>!${adminTag}\n${pairLine}\nยินดีต้อนรับสู่ <b>ระบบจัดตารางเวรพยาบาล</b> 🌹\nกรุณาเลือกคำสั่งจากเมนูด้านล่าง หรือพิมพ์ /help เพื่อดูวิธีใช้`;
    }
    return sendMessage(chatId, text, { reply_markup: kbMainMenu(chatId) });
  }

  async function cmdHelp(chatId) {
    const adminHelp = isAdmin(chatId) ? `\n\n👑 <b>คำสั่งแอดมิน</b>
• /admin — เมนูแอดมิน
• /print — ศูนย์การพิมพ์
• /generate — จัดเวรอัตโนมัติ
• /broadcast — กระจายข่าวให้ทุกคน
• /grant chatid — ให้สิทธิ์แอดมิน` : '';
    const text = `${header()}\n\n❓ <b>คู่มือใช้งาน Bot</b>\n
📅 <b>ดูตารางเวร (Text)</b>
• /today — เวรวันนี้
• /tomorrow — เวรพรุ่งนี้
• /week — ตาราง 7 วันข้างหน้า
• /myshifts — เวรของคุณเดือนนี้
• /next — เวรถัดไปของคุณ
• /off — วันหยุด 5 วันถัดไป
• /calendar — ปฏิทินรายเดือน

🖼️ <b>ดูเป็นภาพ Infographic</b>
• /img — ภาพตารางเวรเต็มเดือน
• /imgcal — ภาพปฏิทิน
• /imgme — ภาพตารางเวรของฉัน

📊 <b>รายงาน & สถิติ</b>
• /summary — สรุปอันดับเวร
• /leaves — สรุปวันลาทั้งหมด
• /myleaves — วันลาของฉัน
• /ot — รายงาน OT
• /myot — OT ของฉัน
• /nurses — ทะเบียนพยาบาล
• /find ชื่อ — ค้นหาคน

🔄 <b>ยื่นคำขอ</b>
• /swap — ขอแลกเวร (3 ขั้น)
• /leave — ขอลา (3 ขั้น)
• /pair ชื่อ-นามสกุล — ผูกบัญชี

⚙️ <b>ระบบ</b>
• /status — สถานะระบบ
• /menu — เปิดเมนูหลัก
• /cancel — ยกเลิกการกระทำ${adminHelp}`;
    return sendMessage(chatId, text, { reply_markup: kbMainMenu(chatId) });
  }

  async function cmdToday(chatId) {
    const h = H(); if (!state()) return sendMessage(chatId, '❌ ระบบยังไม่พร้อม');
    const now = new Date();
    if (!isCurrentMonth(now)) return sendMessage(chatId, `${header()}\n\n📅 ตารางเดือนปัจจุบันยังไม่ใช่ ${now.getMonth()+1}/${now.getFullYear()}`);
    const d = now.getDate();
    return sendDayShifts(chatId, d, '📅 <b>เวรวันนี้</b>');
  }

  async function cmdTomorrow(chatId) {
    const h = H(); if (!state()) return sendMessage(chatId, '❌ ระบบยังไม่พร้อม');
    const now = new Date(); now.setDate(now.getDate() + 1);
    if (!isCurrentMonth(now)) return sendMessage(chatId, `${header()}\n\n📅 พรุ่งนี้อยู่ในเดือนถัดไป — กรุณาเปลี่ยนเดือนในระบบก่อน`);
    return sendDayShifts(chatId, now.getDate(), '📆 <b>เวรพรุ่งนี้</b>');
  }

  function isCurrentMonth(d) {
    const s = state();
    if (!s) return false;
    // state.year may be either AD (e.g. 2026) or BE (e.g. 2569)
    const stateYearAD = s.year > 2500 ? s.year - 543 : s.year;
    return stateYearAD === d.getFullYear() && s.month === d.getMonth() + 1;
  }

  async function sendDayShifts(chatId, d, title) {
    const s = state(); const h = H();
    const groups = {};
    s.nurses.filter(n => n.active !== false).forEach(n => {
      const c = h.getShift(n.id, d);
      if (c && c !== 'O') (groups[c] = groups[c] || []).push(n.name);
    });
    const ho = h.isHoliday(s.year, s.month, d);
    const hname = ho ? h.holidayName(s.year, s.month, d) : '';
    const dl = h.dayLabel(s.year, s.month, d);
    let text = `${header()}\n\n${title}\n📆 วันที่ ${d}/${s.month}/${s.year} (${dl})${hname ? ` 🚩 <i>${escHtml(hname)}</i>` : ''}\n\n`;
    if (!Object.keys(groups).length) {
      text += '😴 <i>ไม่มีเวรในวันนี้</i>';
    } else {
      Object.keys(groups).sort().forEach(code => {
        text += `<b>${escHtml(fmtShiftCode(code))}</b> (${groups[code].length} คน)\n`;
        groups[code].forEach(name => text += `  • ${escHtml(name)}\n`);
        text += '\n';
      });
    }
    return sendMessage(chatId, text, { reply_markup: { inline_keyboard: [[{text:'🔄 รีเฟรช', callback_data:`cmd:${title.includes('พรุ่งนี้')?'tomorrow':'today'}`}, {text:'🏠 เมนู', callback_data:'cmd:menu'}]] }});
  }

  async function cmdWeek(chatId) {
    const s = state(); const h = H();
    const now = new Date();
    if (!isCurrentMonth(now)) return sendMessage(chatId, `${header()}\n\nไม่ใช่เดือนปัจจุบัน`);
    const today = now.getDate();
    const dayNames = ['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.'];
    let text = `${header()}\n\n🗓️ <b>ตาราง 7 วันข้างหน้า</b>\n\n`;
    for (let i = 0; i < 7; i++) {
      const d = today + i;
      if (d > h.daysInMonth(s.year, s.month)) break;
      const dow = new Date(s.year, s.month - 1, d).getDay();
      const groups = {};
      s.nurses.filter(n => n.active !== false).forEach(n => {
        const c = h.getShift(n.id, d);
        if (c && c !== 'O') (groups[c] = groups[c] || []).push(n.name.split(' ')[0]);
      });
      const ho = h.isHoliday(s.year, s.month, d);
      text += `<b>${i===0?'📍 ':''}${d}/${s.month} (${dayNames[dow]})${ho?' 🚩':''}</b>\n`;
      const groupKeys = Object.keys(groups).sort();
      if (!groupKeys.length) text += '  <i>ไม่มีเวร</i>\n';
      else groupKeys.forEach(c => text += `  ${escHtml(c)}: ${groups[c].map(n => escHtml(n)).join(', ')}\n`);
      text += '\n';
    }
    return sendMessage(chatId, text, { reply_markup: { inline_keyboard: [[{text:'🏠 เมนู', callback_data:'cmd:menu'}]] }});
  }

  async function cmdMyShifts(chatId) {
    const nurse = getPairedNurse(chatId);
    if (!nurse) {
      return sendMessage(chatId, `${header()}\n\n⚠️ คุณยังไม่ได้ผูกบัญชี\nกรุณาพิมพ์: <code>/pair ชื่อ-นามสกุล</code>\n\nเช่น <code>/pair สมหญิง ใจดี</code>`,
        { reply_markup: { inline_keyboard: [[{text:'🔗 ผูกบัญชี', callback_data:'cmd:pair'}]] }});
    }
    const s = state(); const h = H();
    const days = h.daysInMonth(s.year, s.month);
    const st = h.computeNurseStats(nurse.id);
    let text = `${header()}\n\n👤 <b>${escHtml(nurse.name)}</b>\n📋 ${escHtml(nurse.position || '')}\n📅 เดือน ${s.month}/${s.year}\n\n`;
    text += `📊 <b>สรุป:</b> รวม ${st.total||0} เวร (ช:${st.chTotal||0} บ:${st.baTotal||0} ด:${st.duTotal||0})\n\n`;
    text += `<b>ตารางเวร:</b>\n`;
    const lines = [];
    for (let d = 1; d <= days; d++) {
      const code = h.getLeave(nurse.id, d) || h.getShift(nurse.id, d);
      if (code && code !== 'O') {
        const dow = ['อา','จ','อ','พ','พฤ','ศ','ส'][new Date(s.year, s.month-1, d).getDay()];
        const ho = h.isHoliday(s.year, s.month, d);
        lines.push(`  • <b>${d}</b> (${dow})${ho?' 🚩':''} — ${escHtml(fmtShiftCode(code))}`);
      }
    }
    text += lines.length ? lines.join('\n') : '  <i>ไม่มีเวร</i>';
    return sendMessage(chatId, text, { reply_markup: { inline_keyboard: [[{text:'🔄 รีเฟรช', callback_data:'cmd:myshifts'}, {text:'🏠 เมนู', callback_data:'cmd:menu'}]] }});
  }

  async function cmdSummary(chatId) {
    const s = state(); const h = H();
    const nurses = s.nurses.filter(n => n.active !== false);
    const ranked = nurses.map(n => ({ n, st: h.computeNurseStats(n.id) })).sort((a, b) => (b.st.total||0) - (a.st.total||0));
    let text = `${header()}\n\n📊 <b>สรุปสถิติเดือน ${s.month}/${s.year}</b>\n👥 บุคลากร ${nurses.length} คน\n\n`;
    const medals = ['🥇','🥈','🥉'];
    ranked.slice(0, 10).forEach((r, i) => {
      const m = medals[i] || `${i+1}.`;
      text += `${m} <b>${escHtml(r.n.name)}</b> — ${r.st.total||0} เวร\n   ช:${r.st.chTotal||0} บ:${r.st.baTotal||0} ด:${r.st.duTotal||0}\n`;
    });
    if (ranked.length > 10) text += `\n<i>... และอีก ${ranked.length - 10} คน</i>`;
    return sendMessage(chatId, text, { reply_markup: { inline_keyboard: [[{text:'🏠 เมนู', callback_data:'cmd:menu'}]] }});
  }

  async function cmdPair(chatId, msg, args) {
    if (!args) {
      return sendMessage(chatId, `${header()}\n\n🔗 <b>ผูกบัญชี Telegram</b>\n\nกรุณาพิมพ์ชื่อ-นามสกุลของคุณตามตารางเวร เช่น\n<code>/pair สมหญิง ใจดี</code>\n\nหากชื่อตรงกัน ระบบจะผูกบัญชีอัตโนมัติ`);
    }
    const name = args.trim();
    const s = state();
    const nurse = s.nurses.find(n => n.name === name || n.name.includes(name) || name.includes(n.name));
    if (!nurse) {
      return sendMessage(chatId, `${header()}\n\n❌ ไม่พบชื่อ "<b>${escHtml(name)}</b>" ในระบบ\nกรุณาตรวจสอบการสะกดอีกครั้ง`);
    }
    // Check if already paired to someone else
    const existing = Object.entries(runtime.paired).find(([cid, p]) => p.nurseId === nurse.id && cid !== String(chatId));
    if (existing) {
      return sendMessage(chatId, `${header()}\n\n⚠️ ชื่อนี้ถูกผูกกับบัญชี Telegram อื่นแล้ว\nกรุณาติดต่อผู้ดูแลระบบ`);
    }
    runtime.paired[chatId] = { nurseId: nurse.id, name: nurse.name, chatId, pairedAt: Date.now() };
    saveState(); renderPairedUsers();
    activityLog('cmd', `🔗 ผูก ${nurse.name} ← chat ${chatId}`);
    window.NurseNotify?.add('success', '🔗 ผูกบัญชีใหม่', `${nurse.name} (Telegram ${chatId})`);
    return sendMessage(chatId, `${header()}\n\n✅ <b>ผูกบัญชีสำเร็จ!</b>\n\n👤 <b>${escHtml(nurse.name)}</b>\n📋 ${escHtml(nurse.position || '')}\n\nตอนนี้คุณสามารถใช้ /myshifts เพื่อดูเวรของตัวเองได้แล้ว 🎉`,
      { reply_markup: { inline_keyboard: [[{text:'👤 ดูเวรของฉัน', callback_data:'cmd:myshifts'}, {text:'🏠 เมนู', callback_data:'cmd:menu'}]] }});
  }

  async function cmdStatus(chatId) {
    const s = state();
    const onlineNurses = s.nurses.filter(n => n.active !== false).length;
    const pairedCount = Object.keys(runtime.paired).length;
    const pendingCount = runtime.swapRequests.filter(r => r.status === 'pending').length;
    const text = `${header()}\n\n⚙️ <b>สถานะระบบ</b>\n\n📅 เดือน: <b>${s.month}/${s.year}</b>\n👥 บุคลากร: <b>${onlineNurses}</b> คน\n🔗 บัญชีที่ผูกแล้ว: <b>${pairedCount}</b> คน\n🔄 คำขอแลกเวรค้าง: <b>${pendingCount}</b> รายการ\n⏰ เวลาเซิร์ฟเวอร์: ${new Date().toLocaleString('th-TH')}\n\n✅ ระบบทำงานปกติ`;
    return sendMessage(chatId, text, { reply_markup: { inline_keyboard: [[{text:'🏠 เมนู', callback_data:'cmd:menu'}]] }});
  }

  async function cmdCancel(chatId) {
    delete runtime.pendingCmd[chatId];
    return sendMessage(chatId, `${header()}\n\n❎ ยกเลิกการกระทำเรียบร้อย`,
      { reply_markup: { inline_keyboard: [[{text:'🏠 เมนู', callback_data:'cmd:menu'}]] }});
  }

  // ── /next — find user's next upcoming shift ──────────
  async function cmdNext(chatId) {
    const nurse = getPairedNurse(chatId);
    if (!nurse) return sendMessage(chatId, `${header()}\n\n⚠️ ต้องผูกบัญชีก่อน — /pair ชื่อ-นามสกุล`);
    const s = state(); const h = H();
    const now = new Date();
    if (!isCurrentMonth(now)) return sendMessage(chatId, `${header()}\n\n📅 ไม่ใช่เดือนปัจจุบัน`);
    const days = h.daysInMonth(s.year, s.month);
    const today = now.getDate();
    for (let d = today; d <= days; d++) {
      const code = h.getShift(nurse.id, d);
      if (code && code !== 'O') {
        const dow = ['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.'][new Date(s.year, s.month-1, d).getDay()];
        const isToday = d === today;
        const daysAway = d - today;
        const ho = h.isHoliday(s.year, s.month, d);
        const text = `${header()}\n\n🎯 <b>เวรถัดไปของคุณ</b>\n\n👤 ${escHtml(nurse.name)}\n📅 <b>${d}/${s.month}/${s.year}</b> (${dow})${ho?' 🚩':''}\n${isToday ? '⏰ <b>วันนี้!</b>' : `⏳ อีก <b>${daysAway}</b> วัน`}\n📋 เวร: <b>${escHtml(fmtShiftCode(code))}</b>`;
        return sendMessage(chatId, text, { reply_markup: { inline_keyboard: [[{text:'👤 ดูทั้งเดือน', callback_data:'cmd:myshifts'}, {text:'🏠 เมนู', callback_data:'cmd:menu'}]] }});
      }
    }
    return sendMessage(chatId, `${header()}\n\n🎉 <b>ไม่มีเวรในเดือนนี้แล้ว!</b>\nพักผ่อนสบาย ๆ ค่ะ/ครับ 😴`, { reply_markup: { inline_keyboard: [[{text:'🏠 เมนู', callback_data:'cmd:menu'}]] }});
  }

  // ── /off — find user's next day off ──────────────────
  async function cmdOff(chatId) {
    const nurse = getPairedNurse(chatId);
    if (!nurse) return sendMessage(chatId, `${header()}\n\n⚠️ ต้องผูกบัญชีก่อน — /pair ชื่อ-นามสกุล`);
    const s = state(); const h = H();
    const now = new Date();
    if (!isCurrentMonth(now)) return sendMessage(chatId, `${header()}\n\n📅 ไม่ใช่เดือนปัจจุบัน`);
    const days = h.daysInMonth(s.year, s.month);
    const today = now.getDate();
    const offs = [];
    for (let d = today; d <= days; d++) {
      const code = h.getShift(nurse.id, d);
      if (!code || code === 'O') offs.push(d);
      if (offs.length >= 5) break;
    }
    if (!offs.length) return sendMessage(chatId, `${header()}\n\n💪 ไม่มีวันหยุดเหลือในเดือนนี้`);
    const dayLabels = offs.map(d => {
      const dow = ['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.'][new Date(s.year, s.month-1, d).getDay()];
      const ho = h.isHoliday(s.year, s.month, d);
      return `  • <b>${d}/${s.month}</b> (${dow})${ho?' 🚩 '+escHtml(h.holidayName(s.year, s.month, d)):''}`;
    });
    return sendMessage(chatId, `${header()}\n\n😴 <b>วันหยุด 5 วันถัดไป</b>\n\n👤 ${escHtml(nurse.name)}\n\n${dayLabels.join('\n')}`, { reply_markup: { inline_keyboard: [[{text:'🏠 เมนู', callback_data:'cmd:menu'}]] }});
  }

  // ── /find <name> — search for nurse and their shifts ──
  async function cmdFind(chatId, msg, args) {
    if (!args || args.length < 2) return sendMessage(chatId, `${header()}\n\n🔍 กรุณาระบุชื่อที่ต้องการค้นหา\nเช่น <code>/find สมหญิง</code>`);
    const s = state(); const h = H();
    const q = args.toLowerCase();
    const matches = s.nurses.filter(n => n.name.toLowerCase().includes(q) || (n.position||'').toLowerCase().includes(q));
    if (!matches.length) return sendMessage(chatId, `${header()}\n\n❌ ไม่พบใครที่ตรงกับ "<b>${escHtml(args)}</b>"`);
    if (matches.length > 5) return sendMessage(chatId, `${header()}\n\n🔍 พบ <b>${matches.length}</b> คน — กรุณาระบุชื่อให้เฉพาะเจาะจงกว่านี้`);
    let text = `${header()}\n\n🔍 <b>ผลค้นหา "${escHtml(args)}"</b> — พบ ${matches.length} คน\n\n`;
    const now = new Date();
    const todayDay = isCurrentMonth(now) ? now.getDate() : 0;
    matches.forEach(n => {
      const st = h.computeNurseStats(n.id);
      const todayShift = todayDay ? (h.getShift(n.id, todayDay) || '-') : '-';
      text += `👤 <b>${escHtml(n.name)}</b>\n📋 ${escHtml(n.position || '-')}\n📊 เวร: ${st.total||0} ครั้ง (ช:${st.chTotal||0} บ:${st.baTotal||0} ด:${st.duTotal||0})\n📅 วันนี้: ${escHtml(fmtShiftCode(todayShift))}\n\n`;
    });
    return sendMessage(chatId, text, { reply_markup: { inline_keyboard: [[{text:'🏠 เมนู', callback_data:'cmd:menu'}]] }});
  }

  // ── /admin — show admin menu ─────────────────────────
  async function cmdAdmin(chatId) {
    if (!isAdmin(chatId)) return sendMessage(chatId, `${header()}\n\n🚫 <b>คุณไม่มีสิทธิ์แอดมิน</b>\nกรุณาติดต่อผู้ดูแลระบบ`);
    const pending = runtime.swapRequests.filter(r => r.status === 'pending');
    const text = `${header()}\n\n👑 <b>เมนูแอดมิน</b>\n\n📊 สถานะ:\n• ผู้ใช้ที่ผูก: <b>${Object.keys(runtime.paired).length}</b> คน\n• คำขอแลกเวรค้าง: <b>${pending.length}</b> รายการ\n• คำสั่งวันนี้: <b>${runtime.stats.cmdsToday}</b>\n\nเลือกการกระทำ:`;
    const kb = { inline_keyboard: [
      [{text:`📋 คำขอค้าง (${pending.length})`, callback_data:'admin:pending'}, {text:'👥 รายชื่อทั้งหมด', callback_data:'admin:users'}],
      [{text:'📢 ประกาศข่าว', callback_data:'admin:broadcast'}, {text:'📊 สถิติเต็ม', callback_data:'admin:stats'}],
      [{text:'🏠 เมนูหลัก', callback_data:'cmd:menu'}],
    ]};
    return sendMessage(chatId, text, { reply_markup: kb });
  }

  // ── /broadcast — admin only ──────────────────────────
  async function cmdBroadcast(chatId, msg, args) {
    if (!isAdmin(chatId)) return sendMessage(chatId, `🚫 ต้องเป็นแอดมินเท่านั้น`);
    if (args && args.trim()) {
      // Inline mode: /broadcast ข้อความ ที่นี่
      return doBroadcast(chatId, args.trim());
    }
    // No args — show options (works in groups too)
    return sendMessage(chatId,
      `${header()}\n\n📢 <b>กระจายข่าวสาร</b>\n\n💡 <b>วิธีใช้:</b>\n1️⃣ พิมพ์ <code>/broadcast ข้อความที่ต้องการส่ง</code> ในบรรทัดเดียว\n   ตัวอย่าง: <code>/broadcast ประชุมพรุ่งนี้ 10 โมง</code>\n\n2️⃣ หรือกดปุ่มด้านล่างเลือกข้อความสำเร็จรูป\n\n3️⃣ หรือเปิดเว็บ → ศูนย์แจ้งเตือน → กด "📢 กระจายข่าวสาร" (มีกล่องพิมพ์ในเว็บ)`,
      { reply_markup: { inline_keyboard: [
        [{ text: '🚨 ประกาศด่วน', callback_data: 'bc:p:0' }],
        [{ text: '📅 ประชุมพรุ่งนี้', callback_data: 'bc:p:1' }],
        [{ text: '⏰ ตรวจตารางเวร', callback_data: 'bc:p:2' }],
        [{ text: '💚 ขอบคุณทีมงาน', callback_data: 'bc:p:3' }],
        [{ text: '❌ ยกเลิก', callback_data: 'cmd:cancel' }],
      ]}}
    );
  }

  const BROADCAST_PRESETS = [
    '🚨 *ประกาศด่วน* 🚨\nกรุณาตรวจสอบข้อมูลด่วน',
    '📅 *แจ้งประชุม* 📅\nประชุมประจำเดือนพรุ่งนี้ เวลา 10:00 น. ณ ห้องประชุมหอผู้ป่วย กรุณาเข้าร่วมพร้อมเพรียง 🙏',
    '⏰ *แจ้งเตือน*\nกรุณาตรวจสอบตารางเวรของท่านในเดือนนี้ — หากมีข้อสงสัยโปรดติดต่อหัวหน้าหอผู้ป่วย',
    '💚 *ขอบคุณทีมงาน*\nขอบคุณทุกท่านสำหรับการทุ่มเทปฏิบัติงาน — เดือนที่ผ่านมาตารางเวรเป็นไปด้วยความเรียบร้อย 🌹',
  ];

  async function doBroadcast(adminChatId, text) {
    const targets = Object.keys(runtime.paired);
    let sent = 0, failed = 0;
    const msg = `📢 <b>ประกาศจากผู้ดูแลระบบ</b>\n────────────────\n\n${escHtml(text)}\n\n<i>— ${escHtml(runtime.paired[adminChatId]?.name || 'Admin')} — ${new Date().toLocaleString('th-TH')}</i>`;
    for (const cid of targets) {
      if (String(cid) === String(adminChatId)) continue;
      try { await sendMessage(cid, msg); sent++; } catch { failed++; }
    }
    activityLog('cmd', `📢 broadcast → ${sent} (failed ${failed})`);
    return sendMessage(adminChatId, `${header()}\n\n✅ <b>ส่งประกาศแล้ว</b>\n• สำเร็จ: ${sent} คน\n• ไม่สำเร็จ: ${failed} คน`);
  }

  // ── /grant <chatid> — promote to admin ───────────────
  async function cmdGrant(chatId, msg, args) {
    if (!isAdmin(chatId)) return sendMessage(chatId, `🚫 ต้องเป็นแอดมินเท่านั้น`);
    const target = (args || '').trim();
    if (!target) return sendMessage(chatId, `กรุณาระบุ Chat ID\nเช่น <code>/grant 123456789</code>`);
    if (!runtime.paired[target]) return sendMessage(chatId, `❌ ไม่พบบัญชีที่ผูกกับ Chat ID นี้`);
    runtime.paired[target].isAdmin = true;
    saveState(); renderPairedUsers();
    activityLog('cmd', `👑 grant admin → ${runtime.paired[target].name}`);
    await sendMessage(target, `${header()}\n\n👑 <b>คุณได้รับสิทธิ์แอดมินแล้ว</b>\nพิมพ์ /admin เพื่อเข้าสู่เมนูแอดมิน`);
    return sendMessage(chatId, `✅ ให้สิทธิ์แอดมินกับ ${runtime.paired[target].name} แล้ว`);
  }

  // ── Swap workflow (multi-step conversational) ────────
  // Preset reasons (works for both swap and leave — short for callback_data limit)
  const SWAP_REASONS = ['ติดธุระสำคัญ', 'ไปงานครอบครัว', 'นัดแพทย์', 'ป่วย/ไม่สบาย', 'เหตุฉุกเฉิน', 'อื่น ๆ'];
  const LEAVE_REASONS = ['ลากิจ - ติดธุระ', 'ลากิจ - งานครอบครัว', 'นัดแพทย์', 'ไม่สบาย/ป่วย', 'พักผ่อน', 'อื่น ๆ'];

  function buildDateKeyboard(prefix, validDays) {
    // 5 columns of date buttons
    const rows = [];
    let row = [];
    validDays.forEach(d => {
      row.push({ text: String(d), callback_data: `${prefix}:d:${d}` });
      if (row.length === 5) { rows.push(row); row = []; }
    });
    if (row.length) rows.push(row);
    rows.push([{ text: '❌ ยกเลิก', callback_data: 'cmd:cancel' }, { text: '🏠 เมนู', callback_data: 'cmd:menu' }]);
    return { inline_keyboard: rows };
  }

  function buildReasonKeyboard(prefix, reasons) {
    const rows = reasons.map((r, i) => [{ text: r, callback_data: `${prefix}:r:${i}` }]);
    rows.push([{ text: '⬅️ ย้อนกลับ', callback_data: `${prefix}:back:1` }, { text: '❌ ยกเลิก', callback_data: 'cmd:cancel' }]);
    return { inline_keyboard: rows };
  }

  // Get days where a nurse has working shifts (excluding O/V/T)
  function getWorkingDays(nurseId) {
    const s = state(); const h = H();
    const out = [];
    const days = h.daysInMonth(s.year, s.month);
    for (let d = 1; d <= days; d++) {
      const c = h.getShift(nurseId, d);
      if (c && c !== 'O' && !h.getLeave(nurseId, d)) out.push(d);
    }
    return out;
  }

  // Step 1 entry — pick MY day to give up
  async function cmdSwap(chatId, msg, args) {
    const nurse = getPairedNurse(chatId);
    if (!nurse) {
      activityLog('err', `❌ /swap rejected: chat ${chatId} ยังไม่ผูกบัญชี`);
      return sendMessage(chatId, `${header()}\n\n⚠️ <b>ต้องผูกบัญชีก่อนใช้ /swap</b>\n\n📝 พิมพ์: <code>/pair ชื่อ-นามสกุล</code>`,
        { reply_markup: { inline_keyboard: [
          [{text:'🔗 ผูกบัญชีตอนนี้', callback_data:'cmd:pair'}],
          [{text:'🏠 เมนู', callback_data:'cmd:menu'}],
        ]}});
    }
    const validDays = getWorkingDays(nurse.id);
    if (!validDays.length) {
      return sendMessage(chatId, `${header()}\n\n😴 คุณไม่มีเวรในเดือนนี้เลย ไม่ต้องขอแลกเวร`,
        { reply_markup: { inline_keyboard: [[{text:'🏠 เมนู', callback_data:'cmd:menu'}]] }});
    }
    runtime.pendingCmd[chatId] = { cmd: 'swap', step: 1, data: { nurseId: nurse.id, nurseName: nurse.name } };
    saveState();
    activityLog('cmd', `🔄 swap step 1/5 → ${nurse.name}`);
    return sendMessage(chatId,
      `${header()}\n\n🔄 <b>ขอแลกเวร — ขั้นที่ 1/5</b>\n👤 ${escHtml(nurse.name)}\n\n👇 <b>เลือกวันที่ฉันต้องการยกเวร (วันของฉัน):</b>`,
      { reply_markup: buildDateKeyboard('sw', validDays) }
    );
  }

  // Build paginated nurse picker (8 per page, 1 col)
  function buildNursePicker(myNurseId, page = 0) {
    const s = state();
    const all = s.nurses.filter(n => n.active !== false && n.id !== myNurseId)
      .sort((a, b) => (a.order || 999) - (b.order || 999));
    const perPage = 8;
    const totalPages = Math.max(1, Math.ceil(all.length / perPage));
    page = Math.max(0, Math.min(page, totalPages - 1));
    const slice = all.slice(page * perPage, (page + 1) * perPage);
    const startIdx = page * perPage;
    const rows = slice.map((n, i) => [{ text: `👤 ${n.name}`.slice(0, 50), callback_data: `sw:p:${startIdx + i}` }]);
    const nav = [];
    if (page > 0) nav.push({ text: '◀️', callback_data: `sw:pg:${page - 1}` });
    nav.push({ text: `📄 ${page + 1}/${totalPages}`, callback_data: 'sw:noop' });
    if (page < totalPages - 1) nav.push({ text: '▶️', callback_data: `sw:pg:${page + 1}` });
    rows.push(nav);
    rows.push([{ text: '⬅️ ย้อน', callback_data: 'sw:back:2' }, { text: '❌ ยกเลิก', callback_data: 'cmd:cancel' }]);
    return { keyboard: { inline_keyboard: rows }, list: all };
  }

  async function swapHandleCallback(chatId, parts) {
    const action = parts[1];
    const value = parts.slice(2).join(':');
    const p = runtime.pendingCmd[chatId];
    if (!p || p.cmd !== 'swap') {
      return sendMessage(chatId, `⚠️ ไม่พบคำขอ /swap ที่ค้างอยู่ — กรุณาเริ่มใหม่`,
        { reply_markup: { inline_keyboard: [[{text:'🔄 เริ่มใหม่', callback_data:'cmd:swap'}, {text:'🏠 เมนู', callback_data:'cmd:menu'}]] }});
    }
    const s = state(); const h = H();

    if (action === 'noop') return;

    // === Step 1: my day picked ===
    if (action === 'd') {
      const d = parseInt(value);
      const code = h.getShift(p.data.nurseId, d);
      if (!code || code === 'O') return sendMessage(chatId, '❌ วันที่ไม่ถูกต้อง');
      p.data.date = d; p.data.shift = code; p.step = 2; saveState();
      activityLog('cmd', `🔄 swap step 2/5: วันของฉัน=${d}`);
      return sendMessage(chatId,
        `${header()}\n\n🔄 <b>ขอแลกเวร — ขั้นที่ 2/5</b>\n👤 ${escHtml(p.data.nurseName)}\n📅 วันของฉัน: <b>${d}/${s.month}</b> — เวร <b>${escHtml(fmtShiftCode(code))}</b>\n\n👇 <b>เลือกรูปแบบการแลก:</b>`,
        { reply_markup: { inline_keyboard: [
          [{ text: '👥 แลกกับคนใดคนหนึ่งโดยเฉพาะ', callback_data: 'sw:m:s' }],
          [{ text: '📢 ประกาศหาใครก็ได้ที่ว่าง', callback_data: 'sw:m:a' }],
          [{ text: '⬅️ ย้อน', callback_data: 'sw:back:1' }, { text: '❌ ยกเลิก', callback_data: 'cmd:cancel' }],
        ]}}
      );
    }

    // === Step 2: mode picked ===
    if (action === 'm') {
      p.data.mode = value === 's' ? 'specific' : 'any';
      if (p.data.mode === 'any') {
        // Skip to reason
        p.step = 4; saveState();
        activityLog('cmd', `🔄 swap step 4/5: mode=any → เลือกเหตุผล`);
        return sendMessage(chatId,
          `${header()}\n\n🔄 <b>ขอแลกเวร — ขั้นที่ 4/5</b>\n📢 แบบประกาศหาใครก็ได้\n\n👇 <b>เลือกเหตุผล:</b>`,
          { reply_markup: buildReasonKeyboard('sw', SWAP_REASONS) }
        );
      }
      // specific — show nurse picker
      p.step = 3; saveState();
      activityLog('cmd', `🔄 swap step 3/5: เลือกคู่แลก`);
      const { keyboard } = buildNursePicker(p.data.nurseId, 0);
      return sendMessage(chatId,
        `${header()}\n\n🔄 <b>ขอแลกเวร — ขั้นที่ 3/5</b>\n📅 ฉันยก: ${p.data.date}/${s.month} (${escHtml(fmtShiftCode(p.data.shift))})\n\n👇 <b>เลือกคนที่จะแลกกับ:</b>`,
        { reply_markup: keyboard }
      );
    }

    // === Step 3: nurse picker pagination ===
    if (action === 'pg') {
      const page = parseInt(value);
      const { keyboard } = buildNursePicker(p.data.nurseId, page);
      return sendMessage(chatId,
        `${header()}\n\n🔄 <b>ขอแลกเวร — ขั้นที่ 3/5</b>\n📅 ฉันยก: ${p.data.date}/${s.month} (${escHtml(fmtShiftCode(p.data.shift))})\n\n👇 <b>เลือกคนที่จะแลกกับ:</b>`,
        { reply_markup: keyboard }
      );
    }

    // === Step 3: partner selected → step 3b pick partner's day ===
    if (action === 'p') {
      const idx = parseInt(value);
      const { list } = buildNursePicker(p.data.nurseId, 0);
      const partner = list[idx];
      if (!partner) return sendMessage(chatId, '❌ ไม่พบบุคคล');
      p.data.partnerId = partner.id;
      p.data.partnerName = partner.name;
      const partnerDays = getWorkingDays(partner.id).filter(d => d !== p.data.date);
      activityLog('cmd', `🔄 swap step 3b: partner=${partner.name} (${partnerDays.length} วัน)`);
      const rows = [];
      if (partnerDays.length) {
        let row = [];
        partnerDays.forEach(d => {
          const code = h.getShift(partner.id, d);
          row.push({ text: `${d} (${code})`, callback_data: `sw:pd:${d}` });
          if (row.length === 4) { rows.push(row); row = []; }
        });
        if (row.length) rows.push(row);
      }
      rows.push([{ text: '🤝 รับเวรของฉันอย่างเดียว (ไม่แลกกลับ)', callback_data: 'sw:pdn' }]);
      rows.push([{ text: '⬅️ เลือกคนใหม่', callback_data: 'sw:back:2b' }, { text: '❌ ยกเลิก', callback_data: 'cmd:cancel' }]);
      return sendMessage(chatId,
        `${header()}\n\n🔄 <b>ขอแลกเวร — ขั้นที่ 3/5 (b)</b>\n📅 ฉันยก: ${p.data.date}/${s.month} (${escHtml(fmtShiftCode(p.data.shift))})\n👤 คู่แลก: <b>${escHtml(partner.name)}</b>\n\n👇 <b>เลือกเวรของ ${escHtml(partner.name)} ที่ฉันจะรับแทน:</b>${partnerDays.length ? '' : '\n<i>(เขาไม่มีเวรเหลือให้แลก)</i>'}`,
        { reply_markup: { inline_keyboard: rows } }
      );
    }

    // === Step 3b: partner's day picked ===
    if (action === 'pd' || action === 'pdn') {
      if (action === 'pd') {
        const d = parseInt(value);
        const code = h.getShift(p.data.partnerId, d);
        if (!code || code === 'O') return sendMessage(chatId, '❌ วันไม่ถูกต้อง');
        p.data.partnerDate = d;
        p.data.partnerShift = code;
      } else {
        p.data.partnerDate = null;
        p.data.partnerShift = null;
      }
      p.step = 4; saveState();
      activityLog('cmd', `🔄 swap step 4/5: เลือกเหตุผล (partner day=${p.data.partnerDate || 'none'})`);
      const partnerLine = p.data.partnerDate
        ? `🔁 แลกกับเวรของ ${escHtml(p.data.partnerName)} วันที่ ${p.data.partnerDate} (${escHtml(fmtShiftCode(p.data.partnerShift))})`
        : `🤝 ${escHtml(p.data.partnerName)} รับเวรของฉันอย่างเดียว`;
      return sendMessage(chatId,
        `${header()}\n\n🔄 <b>ขอแลกเวร — ขั้นที่ 4/5</b>\n📅 ฉันยก: ${p.data.date}/${s.month} (${escHtml(fmtShiftCode(p.data.shift))})\n${partnerLine}\n\n👇 <b>เลือกเหตุผล:</b>`,
        { reply_markup: buildReasonKeyboard('sw', SWAP_REASONS) }
      );
    }

    // === Step 4: reason ===
    if (action === 'r') {
      const idx = parseInt(value);
      p.data.reason = SWAP_REASONS[idx] || 'อื่น ๆ';
      p.step = 5; saveState();
      activityLog('cmd', `🔄 swap step 5/5: ยืนยัน`);
      let summary = `👤 <b>ผู้ขอ:</b> ${escHtml(p.data.nurseName)}\n📅 <b>ยกเวร:</b> ${p.data.date}/${s.month} (${escHtml(fmtShiftCode(p.data.shift))})\n`;
      if (p.data.mode === 'specific') {
        summary += `👥 <b>คู่แลก:</b> ${escHtml(p.data.partnerName)}\n`;
        summary += p.data.partnerDate
          ? `🔁 <b>รับเวรกลับ:</b> ${p.data.partnerDate}/${s.month} (${escHtml(fmtShiftCode(p.data.partnerShift))})\n`
          : `🤝 <b>คู่แลกรับฝ่ายเดียว</b> (ไม่แลกกลับ)\n`;
      } else {
        summary += `📢 <b>รูปแบบ:</b> ประกาศหาใครก็ได้\n`;
      }
      summary += `📝 <b>เหตุผล:</b> ${escHtml(p.data.reason)}`;
      return sendMessage(chatId,
        `${header()}\n\n🔄 <b>ยืนยันคำขอแลกเวร 5/5</b>\n\n${summary}\n\nกดยืนยันเพื่อส่ง ↓`,
        { reply_markup: { inline_keyboard: [
          [{ text: '✅ ยืนยันส่งคำขอ', callback_data: 'sw:c' }],
          [{ text: '⬅️ เปลี่ยนเหตุผล', callback_data: 'sw:back:4' }, { text: '❌ ยกเลิก', callback_data: 'cmd:cancel' }],
        ]}}
      );
    }

    // === Back navigation ===
    if (action === 'back') {
      const to = value;
      if (to === '1') { p.step = 1; saveState();
        const v = getWorkingDays(p.data.nurseId);
        return sendMessage(chatId, `${header()}\n\n🔄 ขั้นที่ 1/5 — เลือกวันของฉัน:`, { reply_markup: buildDateKeyboard('sw', v) });
      }
      if (to === '2') { p.step = 2; saveState();
        return sendMessage(chatId, `${header()}\n\n🔄 ขั้นที่ 2/5 — เลือกรูปแบบการแลก:`,
          { reply_markup: { inline_keyboard: [
            [{ text: '👥 แลกกับคนใดคนหนึ่ง', callback_data: 'sw:m:s' }],
            [{ text: '📢 ประกาศหาใครก็ได้', callback_data: 'sw:m:a' }],
            [{ text: '⬅️ ย้อน', callback_data: 'sw:back:1' }, { text: '❌ ยกเลิก', callback_data: 'cmd:cancel' }],
          ]}});
      }
      if (to === '2b') { p.step = 3; saveState();
        const { keyboard } = buildNursePicker(p.data.nurseId, 0);
        return sendMessage(chatId, `${header()}\n\n🔄 ขั้นที่ 3/5 — เลือกคู่แลก:`, { reply_markup: keyboard });
      }
      if (to === '4') { p.step = 4; saveState();
        return sendMessage(chatId, `${header()}\n\n🔄 ขั้นที่ 4/5 — เลือกเหตุผล:`, { reply_markup: buildReasonKeyboard('sw', SWAP_REASONS) });
      }
    }

    if (action === 'c') return swapConfirm(chatId);
    return sendMessage(chatId, `⚠️ ไม่รู้จัก action: ${action}`);
  }

  async function handleBroadcastStep(chatId, text) {
    const p = runtime.pendingCmd[chatId];
    if (!p || p.cmd !== 'broadcast') return false;
    delete runtime.pendingCmd[chatId]; saveState();
    await doBroadcast(chatId, text);
    return true;
  }

  async function handleSwapStep(chatId, text) {
    const p = runtime.pendingCmd[chatId];
    if (!p || p.cmd !== 'swap') return false;
    const s = state(); const h = H();

    if (p.step === 1) {
      const d = parseInt(text);
      if (!d || d < 1 || d > h.daysInMonth(s.year, s.month)) {
        await sendMessage(chatId, '❌ วันที่ไม่ถูกต้อง กรุณาพิมพ์เลข 1-' + h.daysInMonth(s.year, s.month));
        return true;
      }
      const code = h.getShift(p.data.nurseId, d);
      if (!code || code === 'O') {
        await sendMessage(chatId, `❌ คุณไม่มีเวรในวันที่ ${d} — กรุณาเลือกวันอื่น`);
        return true;
      }
      p.data.date = d; p.data.shift = code; p.step = 2; saveState();
      await sendMessage(chatId, `${header()}\n\n🔄 <b>ขอแลกเวร — ขั้นที่ 2/3</b>\n\n📅 วันที่ <b>${d}/${s.month}</b> — เวร <b>${escHtml(fmtShiftCode(code))}</b>\n\nกรุณาระบุ <b>เหตุผล</b> (พิมพ์ข้อความสั้นๆ)\nเช่น "ติดธุระสำคัญ", "ไปงานครอบครัว"`);
      return true;
    }
    if (p.step === 2) {
      p.data.reason = text.trim().slice(0, 200); p.step = 3; saveState();
      await sendMessage(chatId, `${header()}\n\n🔄 <b>ขอแลกเวร — ขั้นที่ 3/3</b>\n\nยืนยันคำขอ?\n\n📅 วันที่ ${p.data.date}/${s.month}\n📋 เวร: ${escHtml(fmtShiftCode(p.data.shift))}\n📝 เหตุผล: ${escHtml(p.data.reason)}\n👤 ผู้ขอ: ${escHtml(p.data.nurseName)}`,
        { reply_markup: { inline_keyboard: [
          [{text:'✅ ยืนยันส่งคำขอ', callback_data:'swap:confirm'}],
          [{text:'❌ ยกเลิก', callback_data:'cmd:cancel'}],
        ]}});
      return true;
    }
    return false;
  }

  async function swapConfirm(chatId) {
    console.log('[BotCmd] swapConfirm called for', chatId, 'pendingCmd:', runtime.pendingCmd[chatId]);
    activityLog('cmd', `▶️ swap:confirm จาก ${chatId}`);

    // Validate state
    const p = runtime.pendingCmd[chatId];
    if (!p) {
      activityLog('err', `swap:confirm — ไม่พบ pendingCmd[${chatId}]`);
      return sendPlain(chatId, '⚠️ ไม่พบข้อมูลคำขอ (อาจหมดอายุ)\nพิมพ์ /swap เพื่อเริ่มใหม่');
    }
    if (p.cmd !== 'swap') {
      activityLog('err', `swap:confirm — cmd is ${p.cmd}, ไม่ใช่ swap`);
      return sendPlain(chatId, `⚠️ ขณะนี้คุณกำลังทำ ${p.cmd} อยู่\nพิมพ์ /cancel เพื่อยกเลิกก่อน`);
    }
    // Step 5 = new button-only flow confirm step; step 3 = legacy text flow
    if (p.step !== 5 && p.step !== 3) {
      activityLog('err', `swap:confirm — อยู่ขั้น ${p.step} (ต้องเป็น 5)`);
      return sendPlain(chatId, `⚠️ ขั้นตอนไม่ถูกต้อง (อยู่ขั้น ${p.step})\nพิมพ์ /cancel แล้ว /swap ใหม่`);
    }
    // Ensure required fields are present
    if (!p.data?.date || !p.data?.shift) {
      activityLog('err', `swap:confirm — ข้อมูลไม่ครบ (date=${p.data?.date}, shift=${p.data?.shift})`);
      return sendPlain(chatId, `⚠️ ข้อมูลไม่ครบ — กรุณาเริ่ม /swap ใหม่`);
    }

    // Immediate ack so user knows something happened
    try { await sendPlain(chatId, '⏳ กำลังบันทึกคำขอ...'); } catch (e) { console.warn('[BotCmd] ack send failed:', e); }

    try {
      // Build request (includes partner info for full swap)
      const req = {
        id: 'sr_' + Date.now(),
        fromChatId: chatId,
        fromName: String(p.data?.nurseName || '-'),
        nurseId: p.data?.nurseId,
        date: p.data?.date,
        shift: String(p.data?.shift || '-'),
        mode: p.data?.mode || 'any',
        partnerId: p.data?.partnerId || null,
        partnerName: p.data?.partnerName || null,
        partnerDate: p.data?.partnerDate || null,
        partnerShift: p.data?.partnerShift || null,
        reason: String(p.data?.reason || '-'),
        status: 'pending',
        ts: new Date().toLocaleString('th-TH'),
      };
      console.log('[BotCmd] new swap request:', req);
      runtime.swapRequests.unshift(req);
      delete runtime.pendingCmd[chatId];

      try { saveState(); } catch (e) { console.warn('[BotCmd] saveState failed:', e); }
      try { renderPendingRequests(); } catch (e) { console.warn('[BotCmd] renderPendingRequests failed:', e); }
      activityLog('cmd', `🔄 คำขอแลกเวร: ${req.fromName} วันที่ ${req.date} (${req.id})`);
      try { window.NurseNotify?.add('warning', '🔄 คำขอแลกเวรใหม่', `${req.fromName} — วันที่ ${req.date}, เวร ${req.shift}`); } catch {}

      // Notify admins (non-blocking; errors swallowed individually)
      if (runtime.config?.autoNotifySwap) {
        try {
          const adminCids = Object.keys(runtime.paired).filter(cid => isAdmin(cid));
          let partnerLine = '';
          if (req.mode === 'specific') {
            partnerLine = `👥 คู่แลก: <b>${escHtml(req.partnerName)}</b>\n`;
            partnerLine += req.partnerDate
              ? `🔁 รับเวรกลับ: วันที่ ${req.partnerDate} (${escHtml(fmtShiftCode(req.partnerShift))})\n`
              : `🤝 (รับฝ่ายเดียว)\n`;
          } else {
            partnerLine = `📢 แบบประกาศหาใครก็ได้\n`;
          }
          const notifyMsg = `🔔 <b>คำขอแลกเวรใหม่!</b>\n\n👤 ผู้ขอ: <b>${escHtml(req.fromName)}</b>\n📅 ยกเวร: วันที่ ${req.date} (${escHtml(fmtShiftCode(req.shift))})\n${partnerLine}📝 เหตุผล: ${escHtml(req.reason)}\n🆔 <code>${req.id}</code>`;
          const kb = { inline_keyboard: [[
            { text: '✅ อนุมัติ', callback_data: `admin:approve:${req.id}` },
            { text: '❌ ปฏิเสธ', callback_data: `admin:reject:${req.id}` },
          ]]};
          for (const acid of adminCids) {
            if (String(acid) === String(chatId)) continue;
            try { await sendMessage(acid, notifyMsg, { reply_markup: kb }); } catch (e) { console.warn('[BotCmd] admin notify failed:', acid, e); }
          }
        } catch (e) { console.warn('[BotCmd] admin notify section failed:', e); }
      }

      // Reply to user (try HTML first, fall back to plain)
      let partnerLineU = '';
      if (req.mode === 'specific') {
        partnerLineU = `👥 คู่แลก: ${escHtml(req.partnerName)}\n`;
        partnerLineU += req.partnerDate ? `🔁 รับเวรกลับ: วันที่ ${req.partnerDate} (${escHtml(fmtShiftCode(req.partnerShift))})\n` : `🤝 รับฝ่ายเดียว\n`;
      } else {
        partnerLineU = `📢 แบบประกาศหาใครก็ได้\n`;
      }
      const successMsg = `✅ <b>ส่งคำขอแลกเวรเรียบร้อย</b>\n\n🆔 รหัส: <code>${req.id}</code>\n📅 ยกเวร: ${req.date} (${escHtml(fmtShiftCode(req.shift))})\n${partnerLineU}📝 ${escHtml(req.reason)}\n\nรอผู้ดูแลพิจารณา`;
      const result = await sendMessage(chatId, successMsg, { reply_markup: { inline_keyboard: [[{text:'🏠 เมนู', callback_data:'cmd:menu'}]] }});
      if (!result) {
        // sendMessage swallowed an error — try plain
        await sendPlain(chatId, `✅ ส่งคำขอแลกเวรเรียบร้อย\nรหัส: ${req.id}\nวันที่ ${req.date}\nเวร ${req.shift}\nรอผู้ดูแลพิจารณา`);
      }
      console.log('[BotCmd] swapConfirm completed for', req.id);
    } catch (err) {
      console.error('[BotCmd] swapConfirm error:', err);
      activityLog('err', `swap:confirm ล้มเหลว: ${err.message}`);
      trackError(err.message);
      try { await sendPlain(chatId, `❌ บันทึกคำขอไม่สำเร็จ: ${err.message}\nกรุณาลองใหม่อีกครั้ง`); } catch {}
    }
  }

  // Plain text fallback (no HTML, no reply_markup) — most reliable
  async function sendPlain(chatId, text) {
    try {
      const token = getToken();
      if (!token) return;
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: String(text), disable_web_page_preview: true }),
      });
      const data = await res.json();
      if (!data.ok) console.warn('[BotCmd] sendPlain failed:', data.description);
      return data;
    } catch (e) { console.warn('[BotCmd] sendPlain error:', e); }
  }

  // ── Photo helper (sends image via multipart) ─────────
  async function sendPhoto(chatId, blob, caption, opts = {}) {
    const token = getToken();
    if (!token) throw new Error('No token');
    const fd = new FormData();
    fd.append('chat_id', String(chatId));
    fd.append('photo', blob, opts.filename || 'image.png');
    if (caption) {
      fd.append('caption', caption.slice(0, 1024));
      fd.append('parse_mode', 'HTML');
    }
    if (opts.reply_markup) fd.append('reply_markup', JSON.stringify(opts.reply_markup));
    const res = await fetch(`https://api.telegram.org/bot${token}/sendPhoto`, { method:'POST', body: fd });
    const data = await res.json();
    if (!data.ok) throw new Error(data.description || 'sendPhoto failed');
    return data.result;
  }

  async function sendDocument(chatId, blob, caption, opts = {}) {
    const token = getToken();
    if (!token) throw new Error('No token');
    const fd = new FormData();
    fd.append('chat_id', String(chatId));
    fd.append('document', blob, opts.filename || 'file.png');
    if (caption) { fd.append('caption', caption.slice(0, 1024)); fd.append('parse_mode', 'HTML'); }
    if (opts.reply_markup) fd.append('reply_markup', JSON.stringify(opts.reply_markup));
    const res = await fetch(`https://api.telegram.org/bot${token}/sendDocument`, { method:'POST', body: fd });
    const data = await res.json();
    if (!data.ok) throw new Error(data.description || 'sendDocument failed');
    return data.result;
  }

  // ── /calendar — text calendar grid 7 col × weeks ─────
  async function cmdCalendar(chatId) {
    const s = state(); const h = H();
    const days = h.daysInMonth(s.year, s.month);
    const firstDow = new Date(s.year, s.month - 1, 1).getDay();
    const dayNames = ['อา','จ','อ','พ','พฤ','ศ','ส'];
    let text = `${header()}\n\n🗓️ <b>ปฏิทินปฏิบัติงาน — ${THAI_MONTHS[s.month-1]} ${s.year > 2500 ? s.year : s.year + 543}</b>\n\n<pre>`;
    text += dayNames.map(n => n.padEnd(3)).join('') + '\n';
    for (let i = 0; i < firstDow; i++) text += '   ';
    let col = firstDow;
    for (let d = 1; d <= days; d++) {
      const groups = {};
      s.nurses.filter(n => n.active !== false).forEach(n => {
        const c = h.getShift(n.id, d);
        if (c && c !== 'O') (groups[c] = groups[c] || 0); groups[c] = (groups[c] || 0) + (c && c !== 'O' ? 1 : 0);
      });
      const ho = h.isHoliday(s.year, s.month, d);
      text += String(d).padStart(2) + (ho ? '*' : ' ');
      col++;
      if (col === 7) { text += '\n'; col = 0; }
    }
    text += '</pre>\n\n<i>* = วันหยุดราชการ</i>\n\n📋 พิมพ์ <code>/today</code> ดูเวรวันนี้, <code>/imgcal</code> ขอภาพปฏิทินสี';
    return sendMessage(chatId, text, { reply_markup: { inline_keyboard: [
      [{text:'🖼️ ขอภาพปฏิทิน', callback_data:'cmd:imgcal'}, {text:'🏠 เมนู', callback_data:'cmd:menu'}],
    ]}});
  }

  // ── /img — full schedule infographic ─────────────────
  async function cmdImg(chatId) {
    await sendMessage(chatId, '⏳ <i>กำลังสร้างภาพ Infographic ตารางเวร...</i>');
    try {
      const gen = window.NurseSettings?.generateBeautifulScheduleCardBlob;
      if (!gen) throw new Error('ระบบ infographic ยังไม่พร้อม');
      const blob = await gen();
      const cap = `🏥 <b>ตารางเวร ${THAI_MONTHS[state().month-1]} ${state().year}</b>\n📋 จัดทำโดยระบบจัดตารางเวร`;
      await sendPhoto(chatId, blob, cap, { filename: 'schedule.png', reply_markup: { inline_keyboard: [
        [{text:'🗓️ ขอภาพปฏิทิน', callback_data:'cmd:imgcal'}, {text:'🏠 เมนู', callback_data:'cmd:menu'}],
      ]}});
      activityLog('cmd', `🖼️ /img → chat ${chatId}`);
    } catch (e) {
      await sendMessage(chatId, `❌ สร้างภาพไม่สำเร็จ: ${escHtml(e.message)}`);
      throw e;
    }
  }

  // ── /imgcal — calendar infographic ───────────────────
  async function cmdImgCal(chatId) {
    await sendMessage(chatId, '⏳ <i>กำลังสร้างภาพปฏิทิน...</i>');
    try {
      const gen = window.NurseSettings?.generateBeautifulScheduleCardBlob;
      // Use 'daily' layout if available — falls back to default
      const blob = await gen(null, 'daily');
      const cap = `🗓️ <b>ปฏิทินปฏิบัติงาน ${THAI_MONTHS[state().month-1]} ${state().year}</b>`;
      await sendPhoto(chatId, blob, cap, { filename: 'calendar.png', reply_markup: { inline_keyboard: [
        [{text:'🖼️ ขอภาพตารางเต็ม', callback_data:'cmd:img'}, {text:'🏠 เมนู', callback_data:'cmd:menu'}],
      ]}});
      activityLog('cmd', `🖼️ /imgcal → chat ${chatId}`);
    } catch (e) {
      await sendMessage(chatId, `❌ สร้างภาพไม่สำเร็จ: ${escHtml(e.message)}`);
      throw e;
    }
  }

  // ── /imgme — personal infographic ───────────────────
  async function cmdImgMe(chatId) {
    const nurse = getPairedNurse(chatId);
    if (!nurse) return sendMessage(chatId, `${header()}\n\n⚠️ ต้องผูกบัญชีก่อน — /pair ชื่อ-นามสกุล`);
    await sendMessage(chatId, '⏳ <i>กำลังสร้างภาพตารางเวรของคุณ...</i>');
    try {
      const gen = window.NurseSettings?.generateBeautifulScheduleCardBlob;
      const blob = await gen(null, 'individual');
      const cap = `👤 <b>${escHtml(nurse.name)}</b>\n📅 ${THAI_MONTHS[state().month-1]} ${state().year}`;
      await sendPhoto(chatId, blob, cap, { filename: 'my_schedule.png', reply_markup: { inline_keyboard: [
        [{text:'📋 ดูแบบข้อความ', callback_data:'cmd:myshifts'}, {text:'🏠 เมนู', callback_data:'cmd:menu'}],
      ]}});
      activityLog('cmd', `🖼️ /imgme → ${nurse.name}`);
    } catch (e) {
      await sendMessage(chatId, `❌ สร้างภาพไม่สำเร็จ: ${escHtml(e.message)}`);
      throw e;
    }
  }

  // ── /leaves — all leaves summary ─────────────────────
  async function cmdLeaves(chatId) {
    const s = state(); const h = H();
    const days = h.daysInMonth(s.year, s.month);
    const data = [];
    s.nurses.filter(n => n.active !== false).forEach(n => {
      const v = [], t = [], o = [];
      for (let d = 1; d <= days; d++) {
        const l = h.getLeave(n.id, d); const sh = h.getShift(n.id, d);
        if (l === 'V') v.push(d); else if (l === 'T') t.push(d); else if (sh === 'O') o.push(d);
      }
      if (v.length || t.length) data.push({ n, v, t, o });
    });
    if (!data.length) return sendMessage(chatId, `${header()}\n\n📋 <b>สรุปวันลาเดือน ${s.month}/${s.year}</b>\n\n✅ ไม่มีใครลาในเดือนนี้`);
    let text = `${header()}\n\n📋 <b>สรุปวันลาเดือน ${s.month}/${s.year}</b>\n👥 มีผู้ลา ${data.length} คน\n\n`;
    data.slice(0, 15).forEach(({ n, v, t }) => {
      text += `👤 <b>${escHtml(n.name)}</b>\n`;
      if (v.length) text += `   🟣 ลา: ${v.join(', ')} (${v.length} วัน)\n`;
      if (t.length) text += `   🔴 ป่วย: ${t.join(', ')} (${t.length} วัน)\n`;
      text += '\n';
    });
    if (data.length > 15) text += `<i>... และอีก ${data.length - 15} คน</i>`;
    return sendMessage(chatId, text, { reply_markup: { inline_keyboard: [[{text:'🏠 เมนู', callback_data:'cmd:menu'}]] }});
  }

  // ── /myleaves — user's leaves ────────────────────────
  async function cmdMyLeaves(chatId) {
    const nurse = getPairedNurse(chatId);
    if (!nurse) return sendMessage(chatId, `${header()}\n\n⚠️ ต้องผูกบัญชีก่อน — /pair ชื่อ-นามสกุล`);
    const s = state(); const h = H();
    const days = h.daysInMonth(s.year, s.month);
    const v = [], t = [], o = [];
    for (let d = 1; d <= days; d++) {
      const l = h.getLeave(nurse.id, d); const sh = h.getShift(nurse.id, d);
      if (l === 'V') v.push(d); else if (l === 'T') t.push(d); else if (sh === 'O') o.push(d);
    }
    let text = `${header()}\n\n👤 <b>${escHtml(nurse.name)}</b>\n📅 วันลาเดือน ${s.month}/${s.year}\n\n`;
    text += `🟣 ลา: <b>${v.length}</b> วัน${v.length ? ' (' + v.join(', ') + ')' : ''}\n`;
    text += `🔴 ป่วย: <b>${t.length}</b> วัน${t.length ? ' (' + t.join(', ') + ')' : ''}\n`;
    text += `🟢 หยุด: <b>${o.length}</b> วัน${o.length ? ' (' + o.join(', ') + ')' : ''}\n\n`;
    text += `📊 รวม: <b>${v.length + t.length + o.length}</b> วัน`;
    return sendMessage(chatId, text, { reply_markup: { inline_keyboard: [[
      {text:'📝 ขอลา', callback_data:'cmd:leave'}, {text:'🏠 เมนู', callback_data:'cmd:menu'},
    ]]}});
  }

  // ── /ot — OT report ──────────────────────────────────
  async function cmdOT(chatId) {
    const s = state();
    const ot = window.NurseOT?.computeOT?.();
    if (!ot) return sendMessage(chatId, `${header()}\n\n❌ ระบบ OT ยังไม่พร้อม`);
    const mode = s.appSettings?.shiftMode || 1;
    const hasOT = r => mode === 2
      ? ((r.eveningCount || 0) + (r.otCount || 0) > 0 || (r.amount || 0) > 0)
      : ((r.otUnits || 0) > 0 || (r.amount || 0) > 0);
    const rowSummary = r => {
      if (mode === 2) {
        return `เวรเย็น ${r.eveningCount || 0} · OT วันหยุด ${r.otCount || 0} · รวม ${r.totalUnits || 0} ครั้ง`;
      }
      if (mode === 3) {
        return `D12 ${r.d12 || 0} · N12 ${r.n12 || 0} · OT ${Math.round(r.otUnits || 0)} หน่วย`;
      }
      return `รวม ${r.totalUnits || 0} เวร · OT ${Math.round(r.otUnits || 0)} หน่วย`;
    };
    const rows = (ot.rows || []).filter(hasOT).sort((a,b) => (b.amount||0) - (a.amount||0));
    if (!rows.length) return sendMessage(chatId, `${header()}\n\n📊 <b>รายงาน OT ${s.month}/${s.year}</b>\n\n💰 ไม่มีใครได้รับ OT ในเดือนนี้`);
    const criteriaLine = mode === 2
      ? '📌 โหมด 2: คิดตามจำนวนเวรเย็นและ OT วันหยุด'
      : `🎯 เกณฑ์: ${s.otSettings?.threshold || '-'} เวร/เดือน`;
    let text = `${header()}\n\n💰 <b>รายงาน OT ${s.month}/${s.year}</b>\n${criteriaLine}\n💵 ยอดรวม: <b>${(ot.totalAmount || 0).toLocaleString('th-TH')}</b> บาท\n\n<b>ผู้ที่ได้รับ OT (${rows.length} คน):</b>\n\n`;
    rows.slice(0, 15).forEach((r, i) => {
      text += `${i+1}. <b>${escHtml(r.name)}</b>\n   📊 ${escHtml(rowSummary(r))}\n   💰 <b>${(r.amount||0).toLocaleString('th-TH')}</b> บาท\n\n`;
    });
    if (rows.length > 15) text += `<i>... และอีก ${rows.length - 15} คน</i>`;
    return sendMessage(chatId, text, { reply_markup: { inline_keyboard: [[{text:'🏠 เมนู', callback_data:'cmd:menu'}]] }});
  }

  // ── /myot — personal OT ─────────────────────────────
  async function cmdMyOT(chatId) {
    const nurse = getPairedNurse(chatId);
    if (!nurse) return sendMessage(chatId, `${header()}\n\n⚠️ ต้องผูกบัญชีก่อน — /pair ชื่อ-นามสกุล`);
    const s = state();
    const ot = window.NurseOT?.computeOT?.();
    if (!ot) return sendMessage(chatId, `${header()}\n\n❌ ระบบ OT ยังไม่พร้อม`);
    const my = ot.rows.find(r => r.id === nurse.id || r.name === nurse.name);
    if (!my) return sendMessage(chatId, `${header()}\n\n📊 ไม่พบข้อมูล OT ของคุณ`);
    const mode = s.appSettings?.shiftMode || 1;
    const overThreshold = mode === 2 ? (my.amount || 0) > 0 : (my.otUnits || 0) > 0;
    let text = `${header()}\n\n👤 <b>${escHtml(nurse.name)}</b>\n💰 OT เดือน ${s.month}/${s.year}\n\n`;
    if (mode === 2) {
      text += `📊 เวรเย็น: <b>${my.eveningCount || 0}</b> ครั้ง\n`;
      text += `📊 OT วันหยุด: <b>${my.otCount || 0}</b> ครั้ง\n`;
      text += `📊 รวม: <b>${my.totalUnits || 0}</b> ครั้ง\n`;
    } else {
      text += `📊 จำนวนเวรรวม: <b>${my.totalUnits || 0}</b>\n`;
      text += `🎯 เกณฑ์ปกติ: <b>${s.otSettings?.threshold || '-'}</b> เวร\n`;
    }
    if (overThreshold) {
      const label = mode === 2 ? 'ได้รับ OT' : `เกินเกณฑ์ ${Math.round(my.otUnits)} หน่วย`;
      text += `\n🔥 <b>${label}</b>\n💵 รับเพิ่ม: <b>${(my.amount || 0).toLocaleString('th-TH')}</b> บาท`;
    } else {
      text += `\n✅ ยังไม่เกินเกณฑ์ — ไม่มี OT`;
    }
    return sendMessage(chatId, text, { reply_markup: { inline_keyboard: [[{text:'🏠 เมนู', callback_data:'cmd:menu'}]] }});
  }

  // ── /nurses — registry ──────────────────────────────
  async function cmdNurses(chatId, msg, args) {
    const s = state();
    const page = Math.max(1, parseInt(args) || 1);
    const all = s.nurses.filter(n => n.active !== false).sort((a,b) => (a.order||999) - (b.order||999));
    const perPage = 15;
    const totalPages = Math.ceil(all.length / perPage);
    const pageNurses = all.slice((page-1)*perPage, page*perPage);
    let text = `${header()}\n\n📚 <b>ทะเบียนพยาบาล</b>\n👥 รวม ${all.length} คน (หน้า ${page}/${totalPages})\n\n`;
    pageNurses.forEach((n, i) => {
      const idx = (page-1)*perPage + i + 1;
      const adm = Object.values(runtime.paired).some(p => p.nurseId === n.id) ? ' 🔗' : '';
      text += `${idx}. <b>${escHtml(n.name)}</b>${adm}\n   📋 ${escHtml(n.position || '-')}\n`;
    });
    text += `\n<i>🔗 = ผูกบัญชี Telegram แล้ว</i>`;
    const kb = [];
    if (totalPages > 1) {
      const navRow = [];
      if (page > 1) navRow.push({text:`◀️ ${page-1}`, callback_data:`cmd:nurses:${page-1}`});
      if (page < totalPages) navRow.push({text:`${page+1} ▶️`, callback_data:`cmd:nurses:${page+1}`});
      if (navRow.length) kb.push(navRow);
    }
    kb.push([{text:'🏠 เมนู', callback_data:'cmd:menu'}]);
    return sendMessage(chatId, text, { reply_markup: { inline_keyboard: kb }});
  }

  // ── /leave — button-only request leave ───────────────
  async function cmdLeave(chatId) {
    const nurse = getPairedNurse(chatId);
    if (!nurse) {
      return sendMessage(chatId, `${header()}\n\n⚠️ <b>ต้องผูกบัญชีก่อนใช้ /leave</b>\n\n📝 พิมพ์: <code>/pair ชื่อ-นามสกุล</code>`,
        { reply_markup: { inline_keyboard: [
          [{text:'🔗 ผูกบัญชีตอนนี้', callback_data:'cmd:pair'}],
          [{text:'🏠 เมนู', callback_data:'cmd:menu'}],
        ]}});
    }
    const s = state(); const h = H();
    const days = h.daysInMonth(s.year, s.month);
    const allDays = []; for (let d = 1; d <= days; d++) allDays.push(d);
    runtime.pendingCmd[chatId] = { cmd: 'leave', step: 1, data: { nurseId: nurse.id, nurseName: nurse.name } };
    saveState();
    activityLog('cmd', `📝 leave step 1/4 → ${nurse.name}`);
    return sendMessage(chatId,
      `${header()}\n\n📝 <b>ขอลา — ขั้นที่ 1/4</b>\n👤 ${escHtml(nurse.name)}\n\n👇 <b>กดเลือกวันที่ต้องการลา:</b>`,
      { reply_markup: buildDateKeyboard('lv', allDays) }
    );
  }

  async function leaveHandleCallback(chatId, parts) {
    const action = parts[1];
    const value = parts.slice(2).join(':');
    const p = runtime.pendingCmd[chatId];
    if (!p || p.cmd !== 'leave') {
      return sendMessage(chatId, `⚠️ ไม่พบคำขอ /leave ที่ค้างอยู่ — กรุณาเริ่มใหม่`,
        { reply_markup: { inline_keyboard: [[{text:'📝 เริ่มใหม่', callback_data:'cmd:leave'}, {text:'🏠 เมนู', callback_data:'cmd:menu'}]] }});
    }
    const s = state(); const h = H();
    if (action === 'd') {
      const d = parseInt(value);
      if (!d || d < 1 || d > h.daysInMonth(s.year, s.month)) return sendMessage(chatId, '❌ วันที่ไม่ถูกต้อง');
      p.data.date = d; p.step = 2; saveState();
      activityLog('cmd', `📝 leave step 2/4: วันที่ ${d}`);
      return sendMessage(chatId,
        `${header()}\n\n📝 <b>ขอลา — ขั้นที่ 2/4</b>\n📅 วันที่ <b>${d}/${s.month}</b>\n\n👇 <b>เลือกประเภทการลา:</b>`,
        { reply_markup: { inline_keyboard: [
          [{ text: '🟣 ลากิจ (V)', callback_data: 'lv:t:V' }],
          [{ text: '🔴 ลาป่วย (T)', callback_data: 'lv:t:T' }],
          [{ text: '⬅️ ย้อนกลับ', callback_data: 'lv:back:1' }, { text: '❌ ยกเลิก', callback_data: 'cmd:cancel' }],
        ]}}
      );
    }
    if (action === 't') {
      p.data.leaveType = value; p.step = 3; saveState();
      activityLog('cmd', `📝 leave step 3/4: ประเภท ${value}`);
      return sendMessage(chatId,
        `${header()}\n\n📝 <b>ขอลา — ขั้นที่ 3/4</b>\n📅 วันที่ ${p.data.date}/${s.month}\n${value === 'V' ? '🟣 ลากิจ' : '🔴 ลาป่วย'}\n\n👇 <b>เลือกเหตุผล:</b>`,
        { reply_markup: buildReasonKeyboard('lv', LEAVE_REASONS) }
      );
    }
    if (action === 'r') {
      const idx = parseInt(value);
      p.data.reason = LEAVE_REASONS[idx] || 'อื่น ๆ';
      p.step = 4; saveState();
      activityLog('cmd', `📝 leave step 4/4: เหตุผล "${p.data.reason}"`);
      return sendMessage(chatId,
        `${header()}\n\n📝 <b>ขอลา — ยืนยัน 4/4</b>\n\n👤 ${escHtml(p.data.nurseName)}\n📅 วันที่ <b>${p.data.date}/${s.month}</b>\n${p.data.leaveType === 'V' ? '🟣 ลากิจ' : '🔴 ลาป่วย'}\n📝 เหตุผล: <b>${escHtml(p.data.reason)}</b>\n\nกดยืนยันเพื่อส่งคำขอ ↓`,
        { reply_markup: { inline_keyboard: [
          [{ text: '✅ ยืนยันส่งคำขอ', callback_data: 'lv:c' }],
          [{ text: '⬅️ เปลี่ยนเหตุผล', callback_data: 'lv:back:3' }, { text: '❌ ยกเลิก', callback_data: 'cmd:cancel' }],
        ]}}
      );
    }
    if (action === 'back') {
      const toStep = parseInt(value) || 1;
      if (toStep === 1) {
        p.step = 1; saveState();
        const days = h.daysInMonth(s.year, s.month);
        const allDays = []; for (let d = 1; d <= days; d++) allDays.push(d);
        return sendMessage(chatId, `${header()}\n\n📝 <b>ขอลา — ขั้นที่ 1/4</b>\n\n👇 <b>กดเลือกวันที่:</b>`,
          { reply_markup: buildDateKeyboard('lv', allDays) });
      }
      if (toStep === 3) {
        p.step = 3; saveState();
        return sendMessage(chatId, `${header()}\n\n📝 <b>ขอลา — ขั้นที่ 3/4</b>\n\n👇 <b>เลือกเหตุผล:</b>`,
          { reply_markup: buildReasonKeyboard('lv', LEAVE_REASONS) });
      }
    }
    if (action === 'c') {
      return leaveConfirm(chatId);
    }
    return sendMessage(chatId, `⚠️ ไม่รู้จัก action: ${action}`);
  }

  async function leaveConfirm(chatId) {
    const p = runtime.pendingCmd[chatId];
    if (!p || p.cmd !== 'leave' || p.step !== 4) {
      return sendPlain(chatId, '⚠️ ไม่พบข้อมูลคำขอลา\nพิมพ์ /leave เพื่อเริ่มใหม่');
    }
    try { await sendPlain(chatId, '⏳ กำลังบันทึกคำขอลา...'); } catch {}
    try {
      const req = {
        id: 'lr_' + Date.now(), type: 'leave',
        fromChatId: chatId, fromName: String(p.data.nurseName || '-'),
        nurseId: p.data.nurseId, date: p.data.date,
        leaveType: p.data.leaveType,
        shift: p.data.leaveType,  // for compatibility with renderer
        reason: String(p.data.reason || '-'),
        status: 'pending', ts: new Date().toLocaleString('th-TH'),
      };
      runtime.swapRequests.unshift(req);
      delete runtime.pendingCmd[chatId];
      saveState(); renderPendingRequests();
      activityLog('cmd', `📝 ขอลา: ${req.fromName} วันที่ ${req.date} (${req.id})`);
      window.NurseNotify?.add('warning', '📝 คำขอลาใหม่', `${req.fromName} — วันที่ ${req.date}, ${req.leaveType === 'V' ? 'ลากิจ' : 'ลาป่วย'}`);
      // Notify admins
      try {
        const adminCids = Object.keys(runtime.paired).filter(cid => isAdmin(cid));
        const notifyMsg = `🔔 <b>คำขอลาใหม่!</b>\n\n👤 ${escHtml(req.fromName)}\n📅 วันที่ ${req.date}\n${req.leaveType === 'V' ? '🟣 ลากิจ' : '🔴 ลาป่วย'}\n📝 ${escHtml(req.reason)}\n🆔 <code>${req.id}</code>`;
        const kb = { inline_keyboard: [[
          { text: '✅ อนุมัติ', callback_data: `admin:approve:${req.id}` },
          { text: '❌ ปฏิเสธ', callback_data: `admin:reject:${req.id}` },
        ]]};
        for (const acid of adminCids) {
          if (String(acid) === String(chatId)) continue;
          try { await sendMessage(acid, notifyMsg, { reply_markup: kb }); } catch {}
        }
      } catch {}
      await sendMessage(chatId, `✅ <b>ส่งคำขอลาเรียบร้อย</b>\n\n🆔 รหัส: <code>${req.id}</code>\n📅 วันที่ ${req.date}\n${req.leaveType === 'V' ? '🟣 ลากิจ' : '🔴 ลาป่วย'}\n📝 ${escHtml(req.reason)}\n\nรอผู้ดูแลพิจารณา`,
        { reply_markup: { inline_keyboard: [[{text:'🏠 เมนู', callback_data:'cmd:menu'}]] }});
    } catch (err) {
      activityLog('err', `leave confirm ล้มเหลว: ${err.message}`);
      await sendPlain(chatId, `❌ บันทึกไม่สำเร็จ: ${err.message}`);
    }
  }

  async function handleLeaveStep(chatId, text) {
    const p = runtime.pendingCmd[chatId];
    if (!p || p.cmd !== 'leave') return false;
    const s = state(); const h = H();
    if (p.step === 1) {
      const d = parseInt(text);
      if (!d || d < 1 || d > h.daysInMonth(s.year, s.month)) {
        await sendMessage(chatId, `❌ วันที่ไม่ถูกต้อง — พิมพ์เลข 1-${h.daysInMonth(s.year, s.month)}`);
        return true;
      }
      p.data.date = d; p.step = 2; saveState();
      await sendMessage(chatId, `${header()}\n\n📝 <b>ขอลา — ขั้นที่ 2/3</b>\n\n📅 วันที่ ${d}/${s.month}\n\nเลือกประเภทการลา:`, {
        reply_markup: { inline_keyboard: [[
          { text: '🟣 ลา (V)', callback_data: 'leave:type:V' },
          { text: '🔴 ลาป่วย (T)', callback_data: 'leave:type:T' },
        ], [{ text: '❌ ยกเลิก', callback_data: 'cmd:cancel' }]]}
      });
      return true;
    }
    if (p.step === 3) {
      p.data.reason = text.trim().slice(0, 200);
      // Submit
      const req = {
        id: 'lr_' + Date.now(), type: 'leave',
        fromChatId: chatId, fromName: p.data.nurseName, nurseId: p.data.nurseId,
        date: p.data.date, leaveType: p.data.leaveType, reason: p.data.reason,
        status: 'pending', ts: new Date().toLocaleString('th-TH'),
      };
      runtime.swapRequests.unshift(req);
      delete runtime.pendingCmd[chatId];
      saveState(); renderPendingRequests();
      activityLog('cmd', `📝 ขอลาจาก ${p.data.nurseName} วันที่ ${p.data.date}`);
      window.NurseNotify?.add('warning', '📝 คำขอลาใหม่', `${p.data.nurseName} — วันที่ ${p.data.date}, ${p.data.leaveType==='V'?'ลา':'ลาป่วย'}`);
      // Notify admins
      const adminCids = Object.keys(runtime.paired).filter(cid => isAdmin(cid));
      const notifyMsg = `${header()}\n\n🔔 <b>คำขอลาใหม่!</b>\n\n👤 ${escHtml(p.data.nurseName)}\n📅 วันที่ ${p.data.date}\n${p.data.leaveType === 'V' ? '🟣 ลา' : '🔴 ลาป่วย'}\n📝 ${escHtml(p.data.reason)}\n🆔 <code>${req.id}</code>`;
      const kb = { inline_keyboard: [[
        { text: '✅ อนุมัติ', callback_data: `admin:approve:${req.id}` },
        { text: '❌ ปฏิเสธ', callback_data: `admin:reject:${req.id}` },
      ]]};
      for (const acid of adminCids) {
        if (String(acid) === String(chatId)) continue;
        try { await sendMessage(acid, notifyMsg, { reply_markup: kb }); } catch {}
      }
      await sendMessage(chatId, `${header()}\n\n✅ <b>ส่งคำขอลาเรียบร้อย</b>\n\n🆔 รหัสคำขอ: <code>${req.id}</code>\n\nรอผู้ดูแลพิจารณา`, { reply_markup: { inline_keyboard: [[{text:'🏠 เมนู', callback_data:'cmd:menu'}]] }});
      return true;
    }
    return false;
  }

  // ── /print — admin print menu ────────────────────────
  async function cmdPrint(chatId) {
    if (!isAdmin(chatId)) return sendMessage(chatId, `${header()}\n\n🚫 ต้องเป็นแอดมิน`);
    const text = `${header()}\n\n🖨️ <b>ศูนย์การพิมพ์</b>\n\nเลือกรูปแบบเอกสารที่ต้องการ:`;
    return sendMessage(chatId, text, { reply_markup: { inline_keyboard: [
      [{text:'🖼️ ตารางเวรเต็ม (PNG)', callback_data:'cmd:img'}],
      [{text:'🗓️ ปฏิทินรายเดือน (PNG)', callback_data:'cmd:imgcal'}],
      [{text:'📋 รายงาน OT', callback_data:'cmd:ot'}, {text:'📋 รายงานลา', callback_data:'cmd:leaves'}],
      [{text:'📚 ทะเบียนพยาบาล', callback_data:'cmd:nurses'}, {text:'📊 สรุปสถิติ', callback_data:'cmd:summary'}],
      [{text:'🏠 เมนูแอดมิน', callback_data:'cmd:admin'}],
    ]}});
  }

  // ── /generate — admin auto-schedule ──────────────────
  function scheduleModeLabel(mode) {
    return ({
      1: 'โหมด 1 — เวร 8 ชม. เช้า/บ่าย/ดึก',
      2: 'โหมด 2 — สำนักงาน/เวรเย็น/OT วันหยุด',
      3: 'โหมด 3 — เวร 12 ชม. D12/N12',
    })[mode] || `โหมด ${mode}`;
  }

  function buildGenerateSummary() {
    const s = state();
    const h = H();
    const days = h.daysInMonth(s.year, s.month);
    const active = s.nurses.filter(n => n.active !== false);
    const prefix = `-${s.year}-${s.month}-`;
    const lockedCount = Object.keys(s.lockedShifts || {}).filter(k => k.includes(prefix)).length;
    const leaveCount = Object.keys(s.leaves || {}).filter(k => k.includes(prefix)).length;
    const mode = s.appSettings?.shiftMode || 1;
    let reqText = '';
    if (mode === 2) {
      const m2 = s.appSettings?.mode2Settings || {};
      reqText = `🌆 เวรเย็น: วิชาชีพ ${m2.eveningReq?.['วิชาชีพ'] ?? 1}, สนับสนุน ${m2.eveningReq?.['สนับสนุน'] ?? 1}\n` +
        `⏱️ OT วันหยุด: วิชาชีพ ${m2.otReq?.['วิชาชีพ'] ?? 1}, สนับสนุน ${m2.otReq?.['สนับสนุน'] ?? 1}`;
    } else if (mode === 3) {
      reqText = '🔁 รูปแบบหมุนเวร: D12, D12, N12, N12, O, O';
    } else {
      reqText = `📌 วันธรรมดา ช/บ/ด: ${s.requirements.weekday.ch}/${s.requirements.weekday.ba}/${s.requirements.weekday.du}\n` +
        `📌 วันหยุด ช/บ/ด: ${s.requirements.weekend.ch}/${s.requirements.weekend.ba}/${s.requirements.weekend.du}`;
    }
    return {
      mode, days, activeCount: active.length, lockedCount, leaveCount, reqText,
      text: `${header()}\n\n⚙️ <b>จัดเวรอัตโนมัติ</b>\n\n` +
        `📅 เดือน: <b>${s.month}/${s.year}</b> (${days} วัน)\n` +
        `🧭 โหมด: <b>${escHtml(scheduleModeLabel(mode))}</b>\n` +
        `👥 บุคลากรใช้งาน: <b>${active.length}</b> คน\n` +
        `🔒 ช่องล็อกในเดือนนี้: <b>${lockedCount}</b>\n` +
        `📝 วันลาในเดือนนี้: <b>${leaveCount}</b>\n\n` +
        `${reqText}\n\n` +
        `⚠️ <b>คำเตือน:</b> การจัดเวรจะเขียนทับช่องที่ไม่ได้ล็อกในเดือนนี้ แต่จะคงวันลาและช่องที่ล็อกไว้`
    };
  }

  async function cmdGenerate(chatId, msg, args = '') {
    if (!isAdmin(chatId)) return sendMessage(chatId, `${header()}\n\n🚫 ต้องเป็นแอดมิน`);
    const action = String(args || '').trim().toLowerCase();
    if (['now', 'run', 'confirm', 'start', 'จัดเลย'].includes(action)) return doGenerate(chatId);
    if (['image', 'img', 'runimg', 'photo', 'ภาพ'].includes(action)) return doGenerate(chatId, { sendImage: true });
    if (['check', 'preview', 'ตรวจ', 'ready'].includes(action)) return cmdGenerateCheck(chatId);
    if (['warnings', 'warning', 'warn', 'เตือน'].includes(action)) return cmdGenerateWarnings(chatId);
    const summary = buildGenerateSummary();
    runtime.pendingCmd[chatId] = { cmd: 'generate', step: 'menu' };
    saveState();
    return sendMessage(chatId, summary.text, {
      reply_markup: { inline_keyboard: [
        [{ text: '✅ จัดเวรทันที', callback_data: 'gen:run' }, { text: '✅ จัดเวร + ส่งภาพ', callback_data: 'gen:runimg' }],
        [{ text: '🔎 ตรวจความพร้อม', callback_data: 'gen:check' }, { text: '⚠️ ดูคำเตือนล่าสุด', callback_data: 'gen:warnings' }],
        [{ text: '🖨️ ศูนย์การพิมพ์', callback_data: 'cmd:print' }, { text: '❌ ยกเลิก', callback_data: 'cmd:cancel' }],
      ]}
    });
  }

  async function cmdGenerateCheck(chatId) {
    const s = state();
    const summary = buildGenerateSummary();
    const problems = [];
    if (window.NurseState?.isSystemLocked?.()) problems.push('ระบบถูกล็อกอยู่ ต้องปลดล็อกในหน้าเว็บก่อน');
    if (!window.NurseScheduler?.autoScheduleCore) problems.push('Scheduler core ยังไม่พร้อม');
    if (summary.activeCount <= 0) problems.push('ยังไม่มีบุคลากรที่เปิดใช้งาน');
    if ((summary.mode === 1) && summary.activeCount < 3) problems.push('บุคลากรน้อยมาก อาจจัด ช/บ/ด ได้ไม่ครบ');
    const okText = problems.length
      ? `❌ <b>พบปัญหา ${problems.length} รายการ</b>\n` + problems.map((p, i) => `${i+1}. ${escHtml(p)}`).join('\n')
      : '✅ <b>พร้อมจัดเวร</b> — ไม่พบปัญหาหลัก';
    return sendMessage(chatId, `${summary.text}\n\n${okText}`, {
      reply_markup: { inline_keyboard: [
        [{ text: '✅ จัดเวรทันที', callback_data: 'gen:run' }, { text: '✅ จัดเวร + ส่งภาพ', callback_data: 'gen:runimg' }],
        [{ text: '🏠 เมนู', callback_data: 'cmd:menu' }],
      ]}
    });
  }

  async function cmdGenerateWarnings(chatId) {
    const s = state();
    const warnings = s.warnings || [];
    if (!warnings.length) {
      return sendMessage(chatId, `${header()}\n\n✅ ยังไม่มีคำเตือนจากการจัดเวรล่าสุด`, {
        reply_markup: { inline_keyboard: [[{ text: '⚙️ จัดเวร', callback_data: 'cmd:generate' }, { text: '🏠 เมนู', callback_data: 'cmd:menu' }]] }
      });
    }
    let text = `${header()}\n\n⚠️ <b>คำเตือนจากการจัดเวรล่าสุด (${warnings.length})</b>\n\n`;
    text += warnings.slice(0, 20).map((w, i) => `${i+1}. ${escHtml(w)}`).join('\n');
    if (warnings.length > 20) text += `\n\n<i>... และอีก ${warnings.length - 20} รายการ</i>`;
    return sendMessage(chatId, text, {
      reply_markup: { inline_keyboard: [[{ text: '🖼️ ส่งภาพตาราง', callback_data: 'cmd:img' }, { text: '🏠 เมนู', callback_data: 'cmd:menu' }]] }
    });
  }

  async function doGenerate(chatId, opts = {}) {
    delete runtime.pendingCmd[chatId];
    try {
      if (window.NurseState?.isSystemLocked?.()) throw new Error('ระบบถูกล็อกอยู่ กรุณาปลดล็อกในหน้าเว็บก่อนจัดเวรอัตโนมัติ');
      const scheduler = window.NurseScheduler?.autoScheduleCore;
      if (typeof scheduler !== 'function') throw new Error('ระบบจัดเวรอัตโนมัติยังไม่พร้อม');
      const s0 = state();
      if (s0.nurses.filter(n => n.active !== false).length === 0) throw new Error('ยังไม่มีบุคลากรที่เปิดใช้งาน');
      await sendMessage(chatId, `${header()}\n\n⏳ <i>กำลังจัดตารางเวร...</i>`);
      scheduler();
      const s = state();
      window.NurseState?.takeSnapshot?.('บันทึกอัตโนมัติจาก Telegram /generate');
      window.NurseState?.markDirty?.();
      window.NurseState?.persistAll?.();
      window.NurseRender?.renderSchedule?.();
      window.NurseRender?.renderDashboard?.();
      window.NurseRender?.renderCalendar?.();
      activityLog('cmd', `⚙️ /generate by chat ${chatId}`);
      const wc = s.warnings?.length || 0;
      window.NurseNotify?.add('success', '⚙️ จัดเวรจาก Bot', `Admin จัดเวรอัตโนมัติเดือน ${s.month}/${s.year}${wc ? ` มี ${wc} คำเตือน` : ''}`);
      if (wc > 0) window.NurseNotify?.onWarnings?.(s.warnings.slice());
      await sendMessage(chatId, `${header()}\n\n✅ <b>จัดตารางเวรเรียบร้อย!</b>\n\n📅 เดือน: <b>${s.month}/${s.year}</b>\n🧭 โหมด: <b>${escHtml(scheduleModeLabel(s.appSettings?.shiftMode || 1))}</b>\n⚠️ คำเตือน: <b>${wc}</b> รายการ\n\nสามารถดูผลผ่านปุ่มด้านล่าง`, {
        reply_markup: { inline_keyboard: [
          [{text:'🖼️ ดูภาพ', callback_data:'cmd:img'}, {text:'🗓️ ปฏิทิน', callback_data:'cmd:imgcal'}],
          [{text:'📊 สถิติ', callback_data:'cmd:summary'}, {text:'⚠️ คำเตือน', callback_data:'gen:warnings'}],
          [{text:'💰 รายงาน OT', callback_data:'cmd:ot'}, {text:'🏠 เมนู', callback_data:'cmd:menu'}],
        ]}
      });
      if (opts.sendImage) await cmdImg(chatId);
    } catch (e) {
      await sendMessage(chatId, `❌ จัดเวรไม่สำเร็จ: ${escHtml(e.message)}`);
      throw e;
    }
  }

  // ── Update processing ────────────────────────────────
  async function processUpdate(update) {
    runtime.lastUpdateId = Math.max(runtime.lastUpdateId, update.update_id + 1);

    if (update.callback_query) {
      const cq = update.callback_query;
      const chatId = cq.message?.chat?.id; if (!chatId) return;
      const t0 = Date.now();
      await answerCallback(cq.id);
      activityLog('cmd', `[btn] ${cq.data} ← ${cq.from?.first_name || chatId}`);
      trackCmd();
      try {
        // New button-only workflows (works in groups w/ privacy mode)
        if (cq.data?.startsWith('sw:')) { await swapHandleCallback(chatId, cq.data.split(':')); trackSuccess(Date.now()-t0); return; }
        if (cq.data?.startsWith('lv:')) { await leaveHandleCallback(chatId, cq.data.split(':')); trackSuccess(Date.now()-t0); return; }
        if (cq.data?.startsWith('bc:p:')) {
          if (!isAdmin(chatId)) { await sendMessage(chatId, '🚫 ต้องเป็นแอดมิน'); return; }
          const idx = parseInt(cq.data.split(':')[2]);
          const tpl = BROADCAST_PRESETS[idx];
          if (tpl) { await doBroadcast(chatId, tpl); trackSuccess(Date.now()-t0); }
          return;
        }
        // Legacy text-step confirmations (still work in private chats)
        if (cq.data === 'swap:confirm') { await swapConfirm(chatId); trackSuccess(Date.now()-t0); return; }
        if (cq.data?.startsWith('gen:')) {
          const action = cq.data.split(':')[1];
          if (action === 'run' || action === 'confirm') { await doGenerate(chatId); trackSuccess(Date.now()-t0); return; }
          if (action === 'runimg') { await doGenerate(chatId, { sendImage: true }); trackSuccess(Date.now()-t0); return; }
          if (action === 'check') { await cmdGenerateCheck(chatId); trackSuccess(Date.now()-t0); return; }
          if (action === 'warnings') { await cmdGenerateWarnings(chatId); trackSuccess(Date.now()-t0); return; }
        }
        if (cq.data?.startsWith('leave:type:')) {
          const leaveType = cq.data.split(':')[2];
          const p = runtime.pendingCmd[chatId];
          if (p && p.cmd === 'leave' && p.step === 2) {
            p.data.leaveType = leaveType; p.step = 3; saveState();
            await sendMessage(chatId, `${header()}\n\n📝 <b>ขอลา — ขั้นที่ 3/3</b>\n\n${leaveType === 'V' ? '🟣 ลา' : '🔴 ลาป่วย'} วันที่ ${p.data.date}\n\nกรุณาพิมพ์ <b>เหตุผล</b> (เช่น "ติดธุระสำคัญ", "ไม่สบาย")`);
            trackSuccess(Date.now()-t0); return;
          }
        }
        if (cq.data?.startsWith('cmd:')) {
          const parts = cq.data.split(':');
          const cmd = parts[1];
          const arg = parts.slice(2).join(':');
          const fn = COMMANDS[cmd];
          if (fn) { await fn(chatId, { from: cq.from }, arg); trackSuccess(Date.now()-t0); return; }
          await sendMessage(chatId, `❓ ไม่รู้จักปุ่ม: ${escHtml(cmd)}`);
          trackError('unknown btn'); return;
        }
        if (cq.data?.startsWith('admin:')) { await handleAdminCallback(cq); trackSuccess(Date.now()-t0); return; }
      } catch (e) {
        trackError(e.message);
        activityLog('err', `callback ${cq.data}: ${e.message}`);
        try { await sendMessage(chatId, `❌ เกิดข้อผิดพลาด: ${escHtml(e.message)}\nพิมพ์ /menu เพื่อกลับเมนูหลัก`); } catch {}
      }
      return;
    }

    if (update.message) {
      const msg = update.message;
      const chatId = msg.chat?.id;
      const text = (msg.text || '').trim();
      if (!chatId) return;

      // Check pending multi-step command
      if (runtime.pendingCmd[chatId] && !text.startsWith('/')) {
        const p = runtime.pendingCmd[chatId];
        activityLog('cmd', `📝 ${p.cmd} step ${p.step}: "${text.slice(0,30)}" ← ${msg.from?.first_name||chatId}`);
        if (await handleBroadcastStep(chatId, text)) return;
        if (await handleSwapStep(chatId, text)) return;
        if (await handleLeaveStep(chatId, text)) return;
      } else if (!text.startsWith('/')) {
        activityLog('cmd', `💬 text "${text.slice(0,30)}" ← ${msg.from?.first_name||chatId} (ไม่มี pendingCmd)`);
      }

      if (text.startsWith('/')) {
        const t0 = Date.now();
        const parts = text.split(/\s+/);
        const cmd = parts[0].substring(1).split('@')[0].toLowerCase();
        const args = parts.slice(1).join(' ');
        const fn = COMMANDS[cmd];
        trackCmd();
        activityLog('cmd', `/${cmd} ← ${msg.from?.first_name || chatId}`);
        if (fn) {
          try {
            await fn(chatId, msg, args);
            trackSuccess(Date.now() - t0);
          } catch (e) { trackError(e.message); activityLog('err', `${cmd}: ${e.message}`); }
          return;
        }
        trackError('unknown cmd');
        return sendMessage(chatId, `❓ ไม่รู้จักคำสั่ง <code>/${escHtml(cmd)}</code>\nพิมพ์ /help เพื่อดูคำสั่งทั้งหมด`);
      }

      // Plain text - respond with menu
      return sendMessage(chatId, `${header()}\n\n👋 พิมพ์ /menu เพื่อเปิดเมนูหลัก หรือ /help เพื่อดูคำสั่ง`,
        { reply_markup: kbMainMenu(chatId) });
    }
  }

  async function handleAdminCallback(cq) {
    const chatId = cq.message.chat.id;
    if (!isAdmin(chatId)) return sendMessage(chatId, '🚫 ต้องเป็นแอดมิน');
    const parts = cq.data.split(':');
    const action = parts[1];

    if (action === 'pending') {
      const pending = runtime.swapRequests.filter(r => r.status === 'pending');
      if (!pending.length) return sendMessage(chatId, `${header()}\n\n✅ ไม่มีคำขอค้าง`);
      let text = `${header()}\n\n📋 <b>คำขอแลกเวรค้าง (${pending.length})</b>\n\n`;
      pending.slice(0, 5).forEach((r, i) => {
        text += `${i+1}. <b>${escHtml(r.fromName)}</b>\n   📅 วันที่ ${r.date} · เวร ${escHtml(r.shift)}\n   📝 ${escHtml(r.reason||'-')}\n   🆔 <code>${r.id}</code>\n\n`;
      });
      // Build approval buttons for first 3
      const buttons = pending.slice(0, 3).map(r => [
        { text: `✅ อนุมัติ #${r.id.slice(-4)}`, callback_data: `admin:approve:${r.id}` },
        { text: `❌ ปฏิเสธ #${r.id.slice(-4)}`, callback_data: `admin:reject:${r.id}` },
      ]);
      buttons.push([{ text: '🏠 เมนูแอดมิน', callback_data: 'cmd:admin' }]);
      return sendMessage(chatId, text, { reply_markup: { inline_keyboard: buttons } });
    }
    if (action === 'users') {
      const entries = Object.entries(runtime.paired);
      let text = `${header()}\n\n👥 <b>ผู้ใช้ที่ผูกบัญชี (${entries.length})</b>\n\n`;
      entries.slice(0, 20).forEach(([cid, p], i) => {
        const adm = p.isAdmin ? ' 👑' : '';
        text += `${i+1}. <b>${escHtml(p.name)}</b>${adm}\n   🆔 <code>${cid}</code>\n\n`;
      });
      return sendMessage(chatId, text, { reply_markup: { inline_keyboard: [[{text:'🏠 เมนูแอดมิน', callback_data:'cmd:admin'}]] }});
    }
    if (action === 'broadcast') {
      runtime.pendingCmd[chatId] = { cmd: 'broadcast', step: 1 };
      saveState();
      return sendMessage(chatId, `${header()}\n\n📢 <b>กระจายข่าวสาร</b>\n\nกรุณาพิมพ์ข้อความที่ต้องการส่งให้ทุกคน\nหรือ /cancel เพื่อยกเลิก`);
    }
    if (action === 'stats') {
      const total = runtime.stats.ok + runtime.stats.err;
      const rate = total ? Math.round(runtime.stats.ok / total * 100) : 0;
      const avg = runtime.stats.pings.length ? Math.round(runtime.stats.pings.reduce((a,b)=>a+b,0)/runtime.stats.pings.length) : 0;
      const text = `${header()}\n\n📊 <b>สถิติ Bot</b>\n\n📥 รับคำสั่งทั้งหมด: <b>${runtime.stats.cmdsTotal}</b>\n📅 วันนี้: <b>${runtime.stats.cmdsToday}</b>\n✅ สำเร็จ: <b>${runtime.stats.ok}</b> (${rate}%)\n❌ ผิดพลาด: <b>${runtime.stats.err}</b>\n⏱️ เวลาตอบเฉลี่ย: <b>${avg}</b> ms\n\n${runtime.stats.lastErr ? `🐛 ข้อผิดพลาดล่าสุด:\n<code>${escHtml(runtime.stats.lastErr)}</code>` : ''}`;
      return sendMessage(chatId, text, { reply_markup: { inline_keyboard: [[{text:'🏠 เมนูแอดมิน', callback_data:'cmd:admin'}]] }});
    }
    // approve / reject — uses unified approveSwap/rejectSwap (which also applies the change)
    if (action === 'approve' || action === 'reject') {
      const reqId = parts.slice(2).join(':');
      const req = runtime.swapRequests.find(r => r.id === reqId);
      if (!req) return sendMessage(chatId, '❌ ไม่พบคำขอ');
      if (req.status !== 'pending') return sendMessage(chatId, `⚠️ คำขอนี้ถูกดำเนินการไปแล้ว (สถานะ: ${req.status})`);
      try {
        if (action === 'approve') await approveSwap(reqId);
        else await rejectSwap(reqId);
      } catch (e) {
        return sendMessage(chatId, `❌ ดำเนินการไม่สำเร็จ: ${escHtml(e.message)}`);
      }
      const icon = action === 'approve' ? '✅' : '❌';
      const label = action === 'approve' ? 'อนุมัติ + อัปเดตตาราง' : 'ปฏิเสธ';
      return sendMessage(chatId, `${icon} ${label}คำขอ <code>${reqId}</code> เรียบร้อย`);
    }
  }

  // ── Long polling ─────────────────────────────────────
  async function pollOnce() {
    if (!runtime.enabled) return;
    const token = getToken();
    if (!token) { setStatus('error', 'ไม่พบ Bot Token'); return; }
    try {
      runtime.abortCtrl = new AbortController();
      const res = await fetch(`https://api.telegram.org/bot${token}/getUpdates?offset=${runtime.lastUpdateId}&timeout=25`, {
        signal: runtime.abortCtrl.signal,
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.description);
      blinkIndicator();
      for (const upd of data.result) {
        try { await processUpdate(upd); } catch (e) { activityLog('err', `process: ${e.message}`); }
      }
      saveState();
      setStatus('on', 'ออนไลน์');
    } catch (e) {
      if (e.name !== 'AbortError') {
        activityLog('err', `poll: ${e.message}`);
        setStatus('error', 'ผิดพลาด');
        if (/conflict|webhook is active|deleteWebhook/i.test(e.message || '')) {
          runtime.enabled = false;
          runtime.wasEnabled = false;
          saveState();
          const cb = document.getElementById('botCtlEnabled'); if (cb) cb.checked = false;
          setStatus('off', 'Webhook');
          window.NurseNotify?.add('warning', '⚡ Live Polling หยุดแล้ว', 'Telegram ยังมี webhook active อยู่ ให้เลือก Live Polling ใหม่เพื่อปิด webhook ก่อน');
          return;
        }
      }
    } finally {
      if (runtime.enabled) setTimeout(pollOnce, POLL_INTERVAL_MS);
    }
  }

  function setStatus(cls, label) {
    const badge = document.getElementById('botCtlStatusBadge');
    if (!badge) return;
    badge.className = `botctl-status ${cls}`;
    badge.innerHTML = `<span class="dot"></span><span>${escHtml(label)}</span>`;
  }
  function blinkIndicator() {
    const i = document.getElementById('botCtlPollIndicator');
    if (!i) return;
    i.classList.remove('hidden');
    setTimeout(() => i.classList.add('hidden'), 600);
  }

  function callGas(fnName) {
    return new Promise((resolve, reject) => {
      const runner = window.google?.script?.run;
      if (!runner || typeof runner[fnName] !== 'function') return reject(new Error('google.script.run ไม่พร้อม'));
      runner.withSuccessHandler(resolve).withFailureHandler(reject)[fnName]();
    });
  }

  function renderMode() {
    const autoBtn = document.getElementById('botCtlModeAuto');
    const liveBtn = document.getElementById('botCtlModeLive');
    const hint = document.getElementById('botCtlModeHint');
    const cb = document.getElementById('botCtlEnabled');
    if (autoBtn && liveBtn) {
      autoBtn.className = runtime.mode === 'auto' ? 'botctl-btn botctl-btn-primary' : 'botctl-btn botctl-btn-ghost';
      liveBtn.className = runtime.mode === 'live' ? 'botctl-btn botctl-btn-primary' : 'botctl-btn botctl-btn-ghost';
    }
    if (hint) {
      hint.textContent = runtime.mode === 'auto'
        ? 'Auto Webhook เปิดรับคำสั่งผ่าน Apps Script 24/7 ไม่ต้องเปิดเว็บค้างไว้'
        : 'Live Polling จะใช้หน้าเว็บรับคำสั่งทุก 3 วินาที ต้องเปิดเว็บค้างไว้ และ webhook จะถูกปิดชั่วคราว';
    }
    if (cb) cb.disabled = runtime.mode !== 'live';
    if (runtime.mode === 'auto') setStatus('off', 'Webhook');
  }

  async function setMode(mode) {
    const nextMode = mode === 'live' ? 'live' : 'auto';
    if (nextMode === runtime.mode) { renderMode(); return; }
    runtime.mode = nextMode;
    if (runtime.mode === 'auto') {
      if (runtime.enabled) await toggle(false, { silent: true });
      try {
        await callGas('setWebhook');
        activityLog('cmd', '☁️ switched to Auto Webhook');
        window.NurseNotify?.add('success', '☁️ Auto Webhook พร้อมใช้งาน', 'Bot จะทำงานผ่าน Apps Script โดยไม่ต้องเปิดเว็บค้างไว้');
      } catch (e) {
        activityLog('err', `set webhook: ${e.message}`);
        window.NurseNotify?.add('warning', '☁️ เลือก Auto Webhook แล้ว', 'ถ้า webhook ยังไม่ทำงาน ให้รัน setWebhook() ใน Apps Script');
      }
    } else {
      try {
        await tgCall('deleteWebhook', { drop_pending_updates: false });
        activityLog('cmd', '⚡ switched to Live Polling (webhook disabled)');
        window.NurseNotify?.add('info', '⚡ Live Polling พร้อมใช้งาน', 'เปิดสวิตช์ Live เพื่อเริ่ม poll คำสั่งจาก Telegram');
      } catch (e) {
        activityLog('err', `delete webhook: ${e.message}`);
        window.NurseNotify?.add('warning', 'ปิด webhook ไม่สำเร็จ', e.message);
      }
      setStatus('off', 'Live');
    }
    saveState();
    renderMode();
  }

  // ── Public API ───────────────────────────────────────
  async function toggle(on, opts = {}) {
    if (on && runtime.mode !== 'live') {
      runtime.enabled = false;
      runtime.wasEnabled = false;
      saveState();
      const cb = document.getElementById('botCtlEnabled'); if (cb) cb.checked = false;
      setStatus('off', 'Webhook');
      if (!opts.silent) window.NurseNotify?.add('info', '☁️ อยู่ในโหมด Auto Webhook', 'ถ้าต้องการ poll ด้วยหน้าเว็บ ให้เลือก Live Polling ก่อน');
      return;
    }
    runtime.enabled = !!on;
    saveState();   // ⭐ persist state immediately
    if (on) {
      const token = getToken();
      if (!token) {
        const cb = document.getElementById('botCtlEnabled'); if (cb) cb.checked = false;
        runtime.enabled = false;
        saveState();
        if (!opts.silent) Swal.fire({ icon: 'warning', title: 'ยังไม่มี Bot Token', text: 'กรุณาตั้งค่า Token ในการ์ด Telegram Bot ก่อน' });
        return;
      }
      try {
        await tgCall('deleteWebhook', { drop_pending_updates: false });
      } catch (e) {
        runtime.enabled = false;
        saveState();
        const cb = document.getElementById('botCtlEnabled'); if (cb) cb.checked = false;
        setStatus('error', 'Webhook');
        if (!opts.silent) window.NurseNotify?.add('warning', 'ปิด Webhook ไม่สำเร็จ', e.message);
        return;
      }
      activityLog('cmd', opts.silent ? '🟢 เริ่มรับคำสั่ง (auto-resume)' : '🟢 เริ่มรับคำสั่ง');
      setStatus('on', 'ออนไลน์');
      pollOnce();
      if (!opts.silent) window.NurseNotify?.add('success', '🤖 Bot Listener เปิดแล้ว', 'ระบบกำลังรับฟังคำสั่งจาก Telegram');
    } else {
      if (runtime.abortCtrl) try { runtime.abortCtrl.abort(); } catch {}
      activityLog('cmd', '⛔ หยุดรับคำสั่ง');
      setStatus('off', 'ปิดอยู่');
      if (!opts.silent) window.NurseNotify?.add('info', '🤖 Bot Listener ปิดแล้ว', '');
    }
  }

  async function installCommands() {
    const token = getToken();
    if (!token) return Swal.fire({ icon: 'warning', title: 'ไม่มี Bot Token' });
    try {
      await tgCall('setMyCommands', {
        commands: [
          { command: 'start',     description: '🏠 เริ่มใช้งาน + เมนู' },
          { command: 'menu',      description: '📋 เปิดเมนูหลัก' },
          { command: 'today',     description: '📅 เวรวันนี้' },
          { command: 'tomorrow',  description: '📆 เวรพรุ่งนี้' },
          { command: 'week',      description: '🗓️ ตารางสัปดาห์' },
          { command: 'myshifts',  description: '👤 เวรของฉัน' },
          { command: 'next',      description: '🎯 เวรถัดไป' },
          { command: 'off',       description: '😴 วันหยุดถัดไป' },
          { command: 'calendar',  description: '🗓️ ปฏิทินรายเดือน' },
          { command: 'img',       description: '🖼️ ภาพตารางเวรทั้งหมด' },
          { command: 'imgcal',    description: '🖼️ ภาพปฏิทินรายเดือน' },
          { command: 'imgme',     description: '🖼️ ภาพตารางเวรของฉัน' },
          { command: 'summary',   description: '📊 สรุปสถิติเดือน' },
          { command: 'leaves',    description: '📋 สรุปวันลาทั้งหมด' },
          { command: 'myleaves',  description: '📋 วันลาของฉัน' },
          { command: 'ot',        description: '💰 รายงาน OT' },
          { command: 'myot',      description: '💰 OT ของฉัน' },
          { command: 'nurses',    description: '📚 ทะเบียนพยาบาล' },
          { command: 'find',      description: '🔍 ค้นหาคน (find ชื่อ)' },
          { command: 'swap',      description: '🔄 ขอแลกเวร' },
          { command: 'leave',     description: '📝 ขอลา' },
          { command: 'pair',      description: '🔗 ผูกบัญชี' },
          { command: 'status',    description: '⚙️ สถานะระบบ' },
          { command: 'admin',     description: '👑 เมนูแอดมิน' },
          { command: 'print',     description: '🖨️ ศูนย์การพิมพ์ (admin)' },
          { command: 'generate',  description: '⚙️ จัดตารางเวรอัตโนมัติ (admin)' },
          { command: 'broadcast', description: '📢 กระจายข่าว (admin)' },
          { command: 'grant',     description: '👑 ให้สิทธิ์แอดมิน (admin)' },
          { command: 'help',      description: '❓ วิธีใช้' },
          { command: 'cancel',    description: '❎ ยกเลิก' },
        ]
      });
      Swal.fire({ icon: 'success', title: '✅ ติดตั้ง 30 คำสั่งสำเร็จ', text: 'เมนูจะแสดงในแชต Bot Telegram', timer: 2000, showConfirmButton: false });
      activityLog('cmd', '📥 ติดตั้ง 30 commands');
    } catch (e) {
      Swal.fire({ icon: 'error', title: 'ติดตั้งไม่สำเร็จ', text: e.message });
    }
  }

  async function sendMainMenu() {
    const targets = Object.keys(runtime.paired);
    if (!targets.length) {
      // Send to first chatTarget in settings
      const tg = state()?.appSettings?.telegram;
      const fallback = tg?.chatTargets?.[0]?.id;
      if (!fallback) return Swal.fire({ icon: 'warning', title: 'ไม่มีผู้รับ', text: 'ยังไม่มีบัญชีที่ผูก และไม่มี Chat Target ในการตั้งค่า' });
      await cmdStart(fallback, { from: { first_name: 'ผู้ใช้' } });
      return Swal.fire({ icon: 'success', title: '✅ ส่งเมนูแล้ว', timer: 1500, showConfirmButton: false });
    }
    let sent = 0;
    for (const cid of targets) {
      try { await cmdStart(cid, { from: { first_name: runtime.paired[cid].name } }); sent++; } catch {}
    }
    Swal.fire({ icon: 'success', title: `✅ ส่งเมนูไปยัง ${sent} บัญชี`, timer: 1500, showConfirmButton: false });
  }

  // ── UI rendering ─────────────────────────────────────
  function renderPairedUsers() {
    const el = document.getElementById('botCtlPairedList');
    const cnt = document.getElementById('botCtlPairedCount');
    if (!el || !cnt) return;
    const entries = Object.entries(runtime.paired);
    cnt.textContent = `${entries.length} คน`;
    if (!entries.length) {
      el.innerHTML = `<p class="text-[10.5px] italic text-center py-3" style="color:var(--text-muted)">ยังไม่มีผู้ใช้ที่ผูกบัญชี — บอกพยาบาลให้พิมพ์ <code class="bg-slate-200/40 px-1 rounded">/pair ชื่อ-นามสกุล</code> ใน Bot</p>`;
      return;
    }
    const searchQ = (document.getElementById('botCtlPairedSearch')?.value || '').toLowerCase().trim();
    const filtered = searchQ ? entries.filter(([cid, p]) => p.name.toLowerCase().includes(searchQ) || cid.includes(searchQ)) : entries;
    if (!filtered.length) {
      el.innerHTML = `<p class="text-[10.5px] italic text-center py-3" style="color:var(--text-muted)">🔍 ไม่พบ "${escHtml(searchQ)}"</p>`;
      return;
    }
    el.innerHTML = filtered.map(([cid, p]) => {
      const initial = (p.name||'?').trim().charAt(0);
      const adminBadge = p.isAdmin || (entries[0] && entries[0][0] === cid) ? '<span class="botctl-admin-badge">ADMIN</span>' : '';
      return `<div class="botctl-paired-item">
        <div class="botctl-avatar-sm">${escHtml(initial)}</div>
        <span class="name">${escHtml(p.name)}${adminBadge}</span>
        <span class="chatid">${escHtml(cid)}</span>
        <div class="botctl-paired-actions">
          <button class="ping" onclick="window.NurseBotCmd.pingUser('${escHtml(cid)}')" title="ส่ง Ping ทดสอบ">📡</button>
          <button class="msg" onclick="window.NurseBotCmd.messageUser('${escHtml(cid)}')" title="ส่งข้อความ">💬</button>
          <button class="view" onclick="window.NurseBotCmd.viewUserShifts('${escHtml(cid)}')" title="ดูเวรของผู้ใช้นี้">📋</button>
          <button class="rm" onclick="window.NurseBotCmd.unpair('${escHtml(cid)}')" title="ยกเลิกการผูก">✕</button>
        </div>
      </div>`;
    }).join('');
    if (window.lucide) window.lucide.createIcons();
  }

  function filterPaired() { renderPairedUsers(); }

  async function pingUser(cid) {
    await sendMessage(cid, `${header()}\n\n📡 <b>Ping จากผู้ดูแลระบบ</b>\nเวลา: ${new Date().toLocaleString('th-TH')}\n\nหากเห็นข้อความนี้ แสดงว่า Bot ทำงานปกติ ✅`);
    activityLog('cmd', `📡 ping → ${runtime.paired[cid]?.name}`);
  }

  async function messageUser(cid) {
    const p = runtime.paired[cid]; if (!p) return;
    const res = await Swal.fire({
      title: `💬 ส่งข้อความถึง ${p.name}`,
      input: 'textarea',
      inputPlaceholder: 'พิมพ์ข้อความ...',
      inputAttributes: { 'aria-label': 'message' },
      showCancelButton: true, confirmButtonText: '📨 ส่ง', cancelButtonText: 'ยกเลิก',
      confirmButtonColor: '#0284c7',
    });
    if (!res.isConfirmed || !res.value) return;
    await sendMessage(cid, `${header()}\n\n💬 <b>ข้อความจากผู้ดูแล</b>\n\n${escHtml(res.value)}\n\n<i>— ${new Date().toLocaleString('th-TH')} —</i>`);
    activityLog('cmd', `💬 msg → ${p.name}`);
    Swal.fire({ icon: 'success', title: 'ส่งแล้ว', timer: 1200, showConfirmButton: false });
  }

  async function viewUserShifts(cid) {
    const p = runtime.paired[cid]; if (!p) return;
    const s = state(); const h = H();
    const nurse = s.nurses.find(n => n.id === p.nurseId);
    if (!nurse) return Swal.fire({ icon: 'error', title: 'ไม่พบพยาบาลในระบบ' });
    const st = h.computeNurseStats(nurse.id);
    const days = h.daysInMonth(s.year, s.month);
    let rows = '';
    for (let d = 1; d <= days; d++) {
      const c = h.getShift(nurse.id, d) || h.getLeave(nurse.id, d);
      if (c && c !== 'O') rows += `<tr><td style="padding:3px 8px;">${d}</td><td style="padding:3px 8px;font-weight:700;">${c}</td></tr>`;
    }
    Swal.fire({
      title: `📋 ${p.name}`,
      html: `<div style="text-align:left;font-size:13px;">
        <p><b>ตำแหน่ง:</b> ${nurse.position || '-'}</p>
        <p><b>เดือน:</b> ${s.month}/${s.year}</p>
        <p><b>สถิติ:</b> รวม ${st.total||0} เวร (ช:${st.chTotal||0} บ:${st.baTotal||0} ด:${st.duTotal||0})</p>
        <table style="width:100%;border-collapse:collapse;margin-top:8px;border:1px solid #e2e8f0;">
          <thead><tr style="background:#f1f5f9;"><th style="padding:4px 8px;">วันที่</th><th style="padding:4px 8px;">เวร</th></tr></thead>
          <tbody>${rows || '<tr><td colspan="2" style="padding:10px;text-align:center;color:#94a3b8;">ไม่มีเวร</td></tr>'}</tbody>
        </table>
      </div>`,
      width: 480,
    });
  }

  // ── Broadcast modal ──────────────────────────────────
  async function openBroadcast() {
    const count = Object.keys(runtime.paired).length;
    if (!count) return Swal.fire({ icon: 'warning', title: 'ไม่มีผู้รับ', text: 'ยังไม่มีผู้ใช้ที่ผูกบัญชี' });
    const res = await Swal.fire({
      title: `📢 กระจายข่าวสาร`,
      html: `<p style="font-size:12px;color:#64748b;margin-bottom:8px;">ส่งไปยัง <b>${count}</b> คนที่ผูกบัญชี</p>
        <textarea id="bcMsg" rows="6" placeholder="พิมพ์ข้อความประกาศ..." style="width:100%;padding:10px;border:1px solid #cbd5e1;border-radius:8px;font-size:13px;font-family:inherit;line-height:1.6;"></textarea>
        <label style="display:flex;align-items:center;gap:6px;margin-top:8px;font-size:12px;cursor:pointer;">
          <input type="checkbox" id="bcUrgent" style="accent-color:#dc2626;"> ⚠️ ทำเครื่องหมายเร่งด่วน
        </label>`,
      showCancelButton: true, confirmButtonText: `📨 ส่งให้ ${count} คน`, cancelButtonText: 'ยกเลิก',
      confirmButtonColor: '#dc2626', width: 520,
      preConfirm: () => ({
        msg: document.getElementById('bcMsg').value.trim(),
        urgent: document.getElementById('bcUrgent').checked,
      }),
    });
    if (!res.isConfirmed || !res.value.msg) return;
    const { msg, urgent } = res.value;
    const targets = Object.keys(runtime.paired);
    let sent = 0, failed = 0;
    const finalMsg = `${urgent ? '🚨 <b>ประกาศเร่งด่วน</b> 🚨\n' : '📢 <b>ประกาศ</b>\n'}────────────────\n\n${escHtml(msg)}\n\n<i>— จากผู้ดูแลระบบ — ${new Date().toLocaleString('th-TH')}</i>`;
    Swal.fire({ title: 'กำลังส่ง...', didOpen: () => Swal.showLoading(), allowOutsideClick: false });
    for (const cid of targets) {
      try { await sendMessage(cid, finalMsg); sent++; } catch { failed++; }
    }
    activityLog('cmd', `📢 broadcast UI → ${sent} (failed ${failed})`);
    window.NurseNotify?.add('success', '📢 กระจายข่าวเรียบร้อย', `ส่งสำเร็จ ${sent} คน ${failed?`(ล้มเหลว ${failed})`:''}`);
    Swal.fire({ icon: 'success', title: `✅ ส่งแล้ว ${sent} คน`, text: failed ? `ล้มเหลว ${failed} คน` : '', timer: 2000, showConfirmButton: false });
  }

  // ── Customize modal ──────────────────────────────────
  async function openCustomize() {
    const tpl = runtime.config.welcomeTpl || '';
    const res = await Swal.fire({
      title: '⚙️ ปรับแต่งบอท',
      html: `<div style="text-align:left;font-size:12px;">
        <label style="font-weight:700;display:block;margin-bottom:4px;">📝 ข้อความต้อนรับ (เมื่อกด /start)</label>
        <textarea id="cfTpl" rows="6" placeholder="ปล่อยว่าง = ใช้ค่าเริ่มต้น" style="width:100%;padding:8px;border:1px solid #cbd5e1;border-radius:6px;font-size:12px;font-family:inherit;">${escHtml(tpl)}</textarea>
        <p style="font-size:10.5px;color:#64748b;margin-top:4px;">ตัวแปร: <code>{name}</code> ชื่อผู้ใช้ Telegram, <code>{nurse}</code> ชื่อพยาบาลที่ผูก, <code>{org}</code> ชื่อหน่วยงาน</p>
        <hr style="margin:14px 0;">
        <label style="display:flex;align-items:center;gap:6px;margin-bottom:6px;cursor:pointer;">
          <input type="checkbox" id="cfAutoNotify" ${runtime.config.autoNotifySwap?'checked':''}> 🔔 แจ้งเตือนแอดมินอัตโนมัติเมื่อมีคำขอแลกเวรใหม่
        </label>
      </div>`,
      showCancelButton: true, confirmButtonText: '💾 บันทึก', cancelButtonText: 'ยกเลิก',
      width: 560,
      preConfirm: () => ({
        tpl: document.getElementById('cfTpl').value.trim(),
        autoNotify: document.getElementById('cfAutoNotify').checked,
      }),
    });
    if (!res.isConfirmed) return;
    runtime.config.welcomeTpl = res.value.tpl;
    runtime.config.autoNotifySwap = res.value.autoNotify;
    saveState();
    Swal.fire({ icon: 'success', title: '✅ บันทึกแล้ว', timer: 1200, showConfirmButton: false });
  }

  // ── Export ──────────────────────────────────────────
  function downloadJSON(filename, obj) {
    const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }
  function exportPaired() {
    if (!Object.keys(runtime.paired).length) return Swal.fire({ icon: 'info', title: 'ไม่มีข้อมูล' });
    downloadJSON(`paired_users_${new Date().toISOString().slice(0,10)}.json`, runtime.paired);
    window.NurseNotify?.add('success', '⬇️ ดาวน์โหลดรายชื่อผูกบัญชี', '');
  }
  function exportRequests() {
    if (!runtime.swapRequests.length) return Swal.fire({ icon: 'info', title: 'ไม่มีข้อมูล' });
    downloadJSON(`swap_requests_${new Date().toISOString().slice(0,10)}.json`, runtime.swapRequests);
    window.NurseNotify?.add('success', '⬇️ ดาวน์โหลดคำขอแลกเวร', '');
  }

  function renderPendingRequests() {
    const el = document.getElementById('botCtlPendingList');
    const cnt = document.getElementById('botCtlPendingCount');
    if (!el || !cnt) return;
    const pending = runtime.swapRequests.filter(r => r.status === 'pending');
    cnt.textContent = `${pending.length} รายการ`;
    if (!pending.length) {
      el.innerHTML = `<p class="text-[10.5px] italic text-center py-3" style="color:var(--text-muted)">— ไม่มีคำขอที่รอ —</p>`;
      return;
    }
    el.innerHTML = pending.map(r => {
      const isLeave = r.type === 'leave';
      let detail = '';
      if (isLeave) {
        detail = `📅 ลาวันที่ ${r.date} · ${r.leaveType === 'V' ? '🟣 ลากิจ' : '🔴 ลาป่วย'}`;
      } else {
        // swap
        detail = `📅 ยก: วันที่ ${r.date} (${escHtml(r.shift)})`;
        if (r.mode === 'specific') {
          detail += `<br>👥 คู่แลก: <b>${escHtml(r.partnerName || '-')}</b>`;
          if (r.partnerDate) detail += `<br>🔁 รับกลับ: วันที่ ${r.partnerDate} (${escHtml(r.partnerShift || '-')})`;
          else detail += `<br>🤝 รับฝ่ายเดียว`;
        } else if (r.mode === 'any') {
          detail += `<br>📢 ประกาศหาใครก็ได้`;
        }
      }
      return `<div class="botctl-pending-item">
        <div class="pq-head">
          <span>${isLeave ? '📝' : '🔄'} ${escHtml(r.fromName)}</span>
          <span style="font-size:9px;color:var(--text-muted);">${escHtml(r.ts)}</span>
        </div>
        <div class="pq-detail">${detail}<br>📝 ${escHtml(r.reason || '-')}</div>
        <div class="pq-actions">
          <button class="pq-btn approve" onclick="window.NurseBotCmd.approveSwap('${r.id}')">✅ อนุมัติ</button>
          <button class="pq-btn reject" onclick="window.NurseBotCmd.rejectSwap('${r.id}')">❌ ปฏิเสธ</button>
        </div>
      </div>`;
    }).join('');
  }

  function renderActivity() {
    const el = document.getElementById('botCtlActivityLog');
    if (!el) return;
    if (!runtime.activity.length) {
      el.innerHTML = `<p class="text-[10.5px] italic text-center py-3" style="color:var(--text-muted)">ยังไม่มีกิจกรรม</p>`;
      return;
    }
    el.innerHTML = runtime.activity.slice(0, 10).map(a => `<div class="botctl-activity-item ${a.kind}">
      <span class="ts">${escHtml(a.ts)}</span>
      <span class="msg">${escHtml(a.msg)}</span>
    </div>`).join('');
  }

  function unpair(chatId) {
    Swal.fire({ icon: 'question', title: 'ยกเลิกการผูกบัญชี?', text: runtime.paired[chatId]?.name, showCancelButton: true, confirmButtonText: 'ยกเลิก', cancelButtonText: 'ปิด' })
      .then(r => {
        if (r.isConfirmed) {
          delete runtime.paired[chatId]; saveState(); renderPairedUsers();
          activityLog('cmd', `🔓 unpair ${chatId}`);
        }
      });
  }
  // Apply changes to the actual schedule — returns descriptive change log
  function applyApprovedChange(r) {
    const NS = window.NurseState;
    if (!NS?.setShift) throw new Error('NurseState API ไม่พร้อม');
    const changes = [];

    if (r.type === 'leave') {
      // Set leave (V or T) — auto-clears existing shift
      const prevShift = NS.getShift(r.nurseId, r.date);
      if (NS.setShift) NS.setShift(r.nurseId, r.date, '');   // clear shift
      NS.setLeave(r.nurseId, r.date, r.leaveType);            // set leave code
      changes.push(`📝 ${r.fromName} — วันที่ ${r.date}: ${prevShift || '(ว่าง)'} → ${r.leaveType === 'V' ? 'ลากิจ' : 'ลาป่วย'}`);
    } else {
      // swap
      if (r.mode === 'specific' && r.partnerId) {
        const myShift = NS.getShift(r.nurseId, r.date) || '';
        if (r.partnerDate && r.partnerShift) {
          // Two-way swap: A's date1 ↔ B's date2
          // Before:  A.date1=X, B.date2=Y
          // After:   A.date1=empty, B.date1=X, B.date2=empty, A.date2=Y
          const partnerShift = NS.getShift(r.partnerId, r.partnerDate) || '';
          NS.setShift(r.nurseId, r.date, '');
          NS.setShift(r.partnerId, r.date, myShift);
          NS.setShift(r.partnerId, r.partnerDate, '');
          NS.setShift(r.nurseId, r.partnerDate, partnerShift);
          changes.push(`🔁 ${r.fromName} ↔ ${r.partnerName}`);
          changes.push(`   วันที่ ${r.date}: ${myShift} → ${r.partnerName} รับแทน`);
          changes.push(`   วันที่ ${r.partnerDate}: ${partnerShift} → ${r.fromName} รับแทน`);
        } else {
          // One-way: partner takes my shift, I get cleared
          NS.setShift(r.nurseId, r.date, '');
          NS.setShift(r.partnerId, r.date, myShift);
          changes.push(`🤝 ${r.fromName} — วันที่ ${r.date}: ${myShift} → ${r.partnerName} รับแทน`);
        }
      } else {
        // mode = 'any' — just clear requester's shift; admin will assign later
        const myShift = NS.getShift(r.nurseId, r.date) || '';
        NS.setShift(r.nurseId, r.date, '');
        changes.push(`📢 ${r.fromName} — วันที่ ${r.date}: ยกเวร ${myShift} (รออัสซายน์ใหม่)`);
      }
    }

    // Persist & refresh UI
    NS.invalidateStats?.();
    NS.persistAll?.();
    try { window.renderSchedule?.(); window.renderLeaves?.(); window.renderDashboard?.(); window.renderSummary?.(); } catch {}

    return changes;
  }

  async function approveSwap(reqId) {
    const r = runtime.swapRequests.find(x => x.id === reqId);
    if (!r) return;
    if (r.status !== 'pending') {
      return Swal.fire({ icon: 'info', title: 'คำขอนี้ถูกดำเนินการไปแล้ว', text: `สถานะ: ${r.status}` });
    }
    let changes = [];
    try {
      changes = applyApprovedChange(r);
    } catch (e) {
      activityLog('err', `apply change ล้มเหลว: ${e.message}`);
      return Swal.fire({ icon: 'error', title: 'แก้ตารางเวรไม่สำเร็จ', text: e.message });
    }
    r.status = 'approved';
    r.approvedAt = new Date().toLocaleString('th-TH');
    saveState(); renderPendingRequests();
    activityLog('cmd', `✅ approve ${reqId} — แก้ตาราง ${changes.length} จุด`);
    window.NurseNotify?.add('success', '✅ อนุมัติ + เปลี่ยนตารางแล้ว', `${r.fromName} วันที่ ${r.date} — ${changes.length} จุด`);

    // Notify requester
    const detailText = (r.type === 'leave')
      ? `\n📅 วันที่ ${r.date}\n${r.leaveType === 'V' ? '🟣 ลากิจ' : '🔴 ลาป่วย'}`
      : `\n📅 ยกเวร: ${r.date} (${escHtml(fmtShiftCode(r.shift))})` +
        (r.mode === 'specific' ? `\n👥 คู่แลก: ${escHtml(r.partnerName)}` + (r.partnerDate ? `\n🔁 รับกลับ: ${r.partnerDate} (${escHtml(fmtShiftCode(r.partnerShift))})` : '') : '');
    await sendMessage(r.fromChatId, `✅ <b>คำขอของคุณได้รับการอนุมัติแล้ว!</b>${detailText}\n\n🔄 <b>ตารางเวรถูกอัปเดตเรียบร้อย</b>\nพิมพ์ /myshifts เพื่อดูตารางใหม่`,
      { reply_markup: { inline_keyboard: [[{text:'👤 ดูเวรของฉัน', callback_data:'cmd:myshifts'}, {text:'🏠 เมนู', callback_data:'cmd:menu'}]] }});

    // Notify partner if specific swap
    if (r.type !== 'leave' && r.mode === 'specific' && r.partnerId) {
      const partnerChat = Object.entries(runtime.paired).find(([cid, p]) => p.nurseId === r.partnerId)?.[0];
      if (partnerChat) {
        const partnerMsg = `🔔 <b>คุณได้รับเวรใหม่จากการแลก</b>\n\n👤 คู่แลก: ${escHtml(r.fromName)}\n📅 รับเวรวันที่ ${r.date} (${escHtml(fmtShiftCode(r.shift))})` +
          (r.partnerDate ? `\n🔁 ยกเวรวันที่ ${r.partnerDate} ให้ ${escHtml(r.fromName)}` : '') +
          `\n\n🔄 ตารางเวรของคุณถูกอัปเดตแล้ว — พิมพ์ /myshifts ดูได้`;
        try { await sendMessage(partnerChat, partnerMsg, { reply_markup: { inline_keyboard: [[{text:'👤 ดูเวรของฉัน', callback_data:'cmd:myshifts'}]] }}); } catch {}
      }
    }
  }

  async function rejectSwap(reqId) {
    const r = runtime.swapRequests.find(x => x.id === reqId); if (!r) return;
    if (r.status !== 'pending') {
      return Swal.fire({ icon: 'info', title: 'คำขอนี้ถูกดำเนินการไปแล้ว', text: `สถานะ: ${r.status}` });
    }
    r.status = 'rejected';
    r.rejectedAt = new Date().toLocaleString('th-TH');
    saveState(); renderPendingRequests();
    await sendMessage(r.fromChatId, `❌ <b>คำขอของคุณถูกปฏิเสธ</b>\n\n📅 วันที่ ${r.date}\n\nกรุณาติดต่อผู้ดูแลโดยตรงสำหรับรายละเอียดเพิ่มเติม`);
    activityLog('cmd', `❌ reject ${reqId}`);
    window.NurseNotify?.add('warning', '❌ ปฏิเสธคำขอ', `${r.fromName} วันที่ ${r.date}`);
  }

  function init() {
    loadState();
    if (runtime.mode === 'auto') {
      runtime.enabled = false;
      runtime.wasEnabled = false;
      saveState();
    }
    renderPairedUsers();
    renderPendingRequests();
    renderActivity();
    renderStats();
    setStatus('off', 'ปิดอยู่');
    renderMode();
    if (runtime.mode === 'auto') {
      const cb = document.getElementById('botCtlEnabled');
      if (cb) cb.checked = false;
      setStatus('off', 'Webhook');
    }
    // ⭐ Auto-resume if was enabled before page reload
    if (runtime.wasEnabled && runtime.mode === 'live') {
      const cb = document.getElementById('botCtlEnabled');
      if (cb) cb.checked = true;
      // Delay slightly to let NurseState load first (for token)
      setTimeout(() => toggle(true, { silent: true }), 800);
    }
  }

  window.NurseBotCmd = {
    init, toggle, setMode, installCommands, sendMainMenu,
    unpair, approveSwap, rejectSwap,
    pingUser, messageUser, viewUserShifts,
    filterPaired, exportPaired, exportRequests,
    openBroadcast, openCustomize,
    _state: runtime,
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(init, 400));
  else setTimeout(init, 400);
})();
