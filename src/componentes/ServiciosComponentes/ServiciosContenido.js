import React, {useState} from 'react';
import { ServiciosItem1 } from './ServiciosItems/ServiciosItem1';
import { ServiciosItem2 } from './ServiciosItems/ServiciosItem2';
import { ServiciosItem3 } from './ServiciosItems/ServiciosItem3';
import { ServiciosItem4 } from './ServiciosItems/ServiciosItem4';
import { ServiciosItem5 } from './ServiciosItems/ServiciosItem5';
import { ServiciosItem6 } from './ServiciosItems/ServiciosItem6';
import { ServiciosItem7 } from './ServiciosItems/ServiciosItem7';


export const ServiciosContenido = () =>{

    const [dropDownMenu, setDropDownMenu] = useState(0);

    function lista(e,item) {
        e.preventDefault();
        switch (item) {
            case 1:
                if (dropDownMenu ===1) {
                    setDropDownMenu(0);
                } else {
                    setDropDownMenu(1);
                }
                break;
            case 2:
                if (dropDownMenu ===2) {
                    setDropDownMenu(0);
                } else {
                    setDropDownMenu(2);
                }
            break;
            case 3:
                if (dropDownMenu ===3) {
                    setDropDownMenu(0);
                } else {
                    setDropDownMenu(3);
                }
                break;
            case 4:
                if (dropDownMenu ===4) {
                    setDropDownMenu(0);
                } else {
                    setDropDownMenu(4);
                }
                break;
            case 5:
                if (dropDownMenu ===5) {
                    setDropDownMenu(0);
                } else {
                    setDropDownMenu(5);
                }
                break;
            case 6:
                if (dropDownMenu ===6) {
                    setDropDownMenu(0);
                } else {
                    setDropDownMenu(6);
                }
                break;
            case 7:
                if (dropDownMenu ===7) {
                    setDropDownMenu(0);
                } else {
                    setDropDownMenu(7);
                }
                break;
            default:
                setDropDownMenu(0);
                break;
        }
    }

    return(
      
        <div className="serviciosContenido">
            <ServiciosItem2 lista={lista} dropDownMenu={dropDownMenu} />
            <ServiciosItem1 lista={lista} dropDownMenu={dropDownMenu} />
            <ServiciosItem3 lista={lista} dropDownMenu={dropDownMenu} />
            <ServiciosItem4 lista={lista} dropDownMenu={dropDownMenu} />
            <ServiciosItem5 lista={lista} dropDownMenu={dropDownMenu} />
            <ServiciosItem6 lista={lista} dropDownMenu={dropDownMenu} />
            <ServiciosItem7 lista={lista} dropDownMenu={dropDownMenu} />
        </div>
    );
}