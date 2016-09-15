/*
 *  Container for constants
 */
var redirect = window.location.origin + window.location.pathname;

const PIN = {
    APP: '4856836359995802992', //4855819497409359779
    BOARD_FIELDS: 'id,name,image[large]',
    PIN_FIELDS: 'id,board,note,color,media,attribution,image[small],metadata',  
    SCOPE: 'read_public, write_public'
};

export default PIN;
