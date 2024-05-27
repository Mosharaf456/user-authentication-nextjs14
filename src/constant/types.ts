export const USER_TYPES = Object.freeze({
    GUEST: 'guest',
    ADMIN: 'admin',
    DOCTOR: 'doctor',
    PATIENT: 'patient',
    USER: 'user',
    MONITOR: 'monitor',
});
export const APPOINTMENT_STATE_TYPES = Object.freeze({
    requested: 'requested',
    cancelled: 'cancelled',
    completed: 'completed',
    expired: 'expired',
    scheduled: 'scheduled',
    open: 'open',
});
export const APPOINTMENT_STATE_TYPES_FOR_WHICH_THE_TABLE_CELL_IS_NOT_CLICKABLE = Object.freeze([
    'requested',
]);
export const PATH_TYPES = Object.freeze({
    SIDE_BAR: 0,
    TOP_BAR_SIGN_ICON: 1,
    BEFORE_SIGN_IN: 2,
    DETAILS_VIEW: 3,
    SUB_PAGE: 4,
});
export const CONFERENCE_TYPES = Object.freeze({
    FLOAT: 'float',
    TAB: 'tab',
    NONE: 'none',
});

export const ALERT_MODAL_TYPES = {
    update: 'update',
    create: 'create',
};
export const weekDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

export const patientHistoryTabsKey = {
    latestReading: 0,
    vitalSigns: 1,
    treatments: 2,
    patientInfo: 3,
    reports: 4,
};

export const { SIDE_BAR, TOP_BAR_SIGN_ICON, BEFORE_SIGN_IN, DETAILS_VIEW } = PATH_TYPES;
export const { GUEST, ADMIN, DOCTOR, PATIENT, USER, MONITOR } = USER_TYPES;

