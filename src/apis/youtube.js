import axios from 'axios';

const KEY = 'AIzaSyCue6oBnDm1wqLPph-yJcLgSyefqqn7FPk';

export default axios.create({
baseURL : 'https://www.googleapis.com/youtube/v3',
params : {
    part : 'snippet',
    type : 'video',
    maxResult : 5,
    key : KEY
}
});