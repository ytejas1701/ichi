import type { StyleConfig } from "../interfaces/general"

const style : StyleConfig = {
    'BODY_COLOR' : '#1A1A1A',
    'BACKGROUND_COLOR' : '#202020',
    'PRIMARY_COLOR': '#FF633E',
    'TEXT_COLOR': '#CCCCCC',
    'FADED_TEXT_COLOR': '#888888',
    'BOX_SHADOW': 'rgba(0, 0, 0, 0.125) 0 2px 2px 2px',

    'CELL_SIZE' : '4vw',
    'GAP_SIZE' : 'calc(var(--CELL_SIZE) * 0.2)',
    'CORNER_SIZE' : 'calc(var(--CELL_SIZE) * 0.2)',
    'PADDING_SIZE' : 'calc(var(--CELL_SIZE) * 0.4)',
    'MIN_SIZE' : '12.5px',
    'MID_SIZE' : '20px',
}

export default style