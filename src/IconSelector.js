import image1 from './assets/Cat Icons/photo (1).jpg'
import image2 from './assets/Cat Icons/photo (2).jpg'
import image3 from './assets/Cat Icons/photo (3).jpg'
import image4 from './assets/Cat Icons/photo (4).jpg'
import image5 from './assets/Cat Icons/photo (5).jpg'
import image6 from './assets/Cat Icons/photo (6).jpg'
import image7 from './assets/Cat Icons/photo (7).jpg'
import image8 from './assets/Cat Icons/photo (8).jpg'
import image9 from './assets/Cat Icons/photo (9).jpg'
import image10 from './assets/Cat Icons/photo (10).jpg'
import image11 from './assets/Cat Icons/photo (11).jpg'
import image12 from './assets/Cat Icons/photo (12).jpg'
import image13 from './assets/Cat Icons/photo (13).jpg'
import image14 from './assets/Cat Icons/photo (14).jpg'
import image15 from './assets/Cat Icons/photo (15).jpg'
import image16 from './assets/Cat Icons/photo (16).jpg'
import image17 from './assets/Cat Icons/photo (17).jpg'
import image18 from './assets/Cat Icons/photo (18).jpg'

import red from './assets/red.png'

function IconSelector(index) {
    index = Math.abs(index)
    switch (index) {
        case 1:
            return image1;
        case 2:
            return image2;
        case 3:
            return image3;
        case 4:
            return image4;
        case 5:
            return image5;
        case 6:
            return image6;
        case 7:
            return image7;
        case 8:
            return image8;
        case 9:
            return image9;
        case 10:
            return image10;
        case 11:
            return image11;
        case 12:
            return image12;
        case 13:
            return image13;
        case 14:
            return image14;
        case 15:
            return image15;
        case 16:
            return image16;
        case 17:
            return image17;
        case 18:
            return image18;
        default:
            return red;
    }
}

export default IconSelector;