/*
 *  Container for constants
 */
var redirect = window.location.origin + window.location.pathname;

const PIN = {
    APP: '4856836359995802992',
    BOARD_FIELDS: 'id,name,image[large],creator',
    PIN_FIELDS: 'id,board,note,color,media,attribution,image[large],metadata',  
    SCOPE: 'read_public, write_public'
};

export default PIN;
