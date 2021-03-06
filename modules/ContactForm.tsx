import React, { useEffect, useState } from 'react'
import OptionMotive from '../components/OptionMotive'
import styles from '../styles/ContactForm.module.css'
import good from '../public/img/correct-l.svg'
import before from '../public/img/question-circle.svg'
import queja from '../public/img/exclamation.svg'
import suge from '../public/img/face-happy.svg'
import pl from '../public/img/question-circle-l.svg'
import ql from '../public/img/exclamation-l.svg'
import sugl from '../public/img/face-happy-l.svg'

const ContactForm = () => {

  const [motives, setMotives] = useState({p: true, q:false, sug:false})
    
  /* const changeMotive = (motive:string)=>{
    switch (motive) {
        case 'p':
            setMotives({p: true, q:false, sug:false})
            break;
        case 'q':
            setMotives({p: false, q:true, sug:false})
            break;
        case 's':
            setMotives({p: false, q:false, sug:true})
            break;
        default:
            setMotives({p: true, q:false, sug:false})
            break;
    }
  } */
  /* useEffect(() => {
    console.log(motives);
    
  }, [motives]) */
  

  return (
    <div className={styles.wrapperForm}>
        {/* <div className={styles.motives}>
            <OptionMotive txt='Pregunta' iconA={good} iconB={before} iconBL={pl} active={motives.p} callback={changeMotive} type='p'/>
            <OptionMotive txt='Queja' iconA={good} iconB={queja} iconBL={ql} active={motives.q} callback={changeMotive} type='q'/>
            <OptionMotive txt='Sugerencia' iconA={good} iconB={suge} iconBL={sugl} active={motives.sug} callback={changeMotive} type='s'/>
        </div> */}
        <div className={styles.form}>
            {/* {
                motives.p && <> <label htmlFor="preguntas sobre">Una pregunta sobre...</label>
                                <select name="preguntas sobre" id="">
                                    <option value="Option 1">Selecciona un motivo de contacto</option>
                                    <option value="Option 2">Option 2</option>
                                    <option value="Option 3">Option 3</option>
                                    <option value="Option 4">Option 4</option>
                                    <option value="Option 5">Option 5</option>
                                </select> </>
            } */}
            <div className={styles.wrapperName}>
                <div className={styles.inputCont}>
                        <label htmlFor="numero">Tu marca comercial es:</label>
                        <input type="text" name='numero' placeholder='Mi marca' />
                </div>
                <div className={styles.inputCont}>
                        <label htmlFor="numero">Tu p??gina web:</label>
                        <input type="text" name='numero' placeholder='www.miweb.com' />
                </div>
            </div>

            <div className={styles.wrapperName}>
                <div className={styles.inputCont}>
                <label htmlFor="ubicacion">Producto:</label>
                <select name="ubicacion" id="">
                    <option value="Option 1">Hardline</option>
                    <option value="Option 2">SoftLine</option>
                </select></div>
                <div className={styles.inputCont}>
                <label htmlFor="ubicacion">Servicios:</label>
                <select name="ubicacion" id="">
                    <option value="Option 1">Log??sticos</option>
                    <option value="Option 2">Reparaci??n y Mantenimiento</option>
                    <option value="Option 3">Limpieza</option>
                    <option value="Option 4">Almacenaje</option>
                    <option value="Option 5">Mercadotecnia y Publicidad</option>
                    <option value="Option 5">Financieros</option>
                    <option value="Option 5">Otros</option>
                </select></div>
                
            </div>
            <label htmlFor="nombre">Marketplace</label>
            <input type="text" name='nombre' placeholder='www.mimarketplace.com' />
            {/* <label htmlFor="Mensaje">Tu mensaje</label>
            <textarea name="Mensaje" id="" cols={30} rows={5}></textarea> */}
            <h4 className={styles.subtitle}>Gracias ??C??mo te gustar??a que nos pusi??ramos en contacto contigo?</h4>
         
            <label htmlFor="nombre">Nombre completo</label>
            <input type="text" name='nombre' placeholder='Nombre' />
            
            
            <div className={styles.wrapperName}>
                <div className={styles.inputCont}>
                    <label htmlFor="email">Enviarme un correo electr??nico*</label>
                    <input type="text" name='email' placeholder='email@ejemplo.com' />
                </div>
                <div className={styles.inputCont}>
                    <label htmlFor="numero">Llamarme</label>
                    <input type="text" name='numero' placeholder='N??mero de tel??fono' />
                </div>
            </div>
            <div className={styles.wrapperCheck} style={{marginBottom: '24px'}}>
                <input type="checkbox" id="cbox2" value="second_checkbox"/> <label>He le??do y Acepto que BODESA; SAPI DE CV proteger?? mis datos como se detalla en el Aviso de privacidad</label>
            </div>
        </div>
        
        
    </div>
  )
}

export default ContactForm