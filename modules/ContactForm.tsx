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
    
  const changeMotive = (motive:string)=>{
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
  }
  useEffect(() => {
    console.log(motives);
    
  }, [motives])
  

  return (
    <div className={styles.wrapperForm}>
        <div className={styles.motives}>
            <OptionMotive txt='Pregunta' iconA={good} iconB={before} iconBL={pl} active={motives.p} callback={changeMotive} type='p'/>
            <OptionMotive txt='Queja' iconA={good} iconB={queja} iconBL={ql} active={motives.q} callback={changeMotive} type='q'/>
            <OptionMotive txt='Sugerencia' iconA={good} iconB={suge} iconBL={sugl} active={motives.sug} callback={changeMotive} type='s'/>
        </div>
        <div className={styles.form}>
            {
                motives.p && <> <label htmlFor="preguntas sobre">Una pregunta sobre...</label>
                                <select name="preguntas sobre" id="">
                                    <option value="Option 1">Selecciona un motivo de contacto</option>
                                    <option value="Option 2">Option 2</option>
                                    <option value="Option 3">Option 3</option>
                                    <option value="Option 4">Option 4</option>
                                    <option value="Option 5">Option 5</option>
                                </select> </>
            }
            <label htmlFor="Mensaje">Tu mensaje</label>
            <textarea name="Mensaje" id="" cols={30} rows={5}></textarea>
            <label htmlFor="ubicacion">¿Dónde estás?</label>
            <select name="ubicacion" id="">
                <option value="Option 1">Selecciona un estado</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
                <option value="Option 5">Option 5</option>
            </select>
            <div className={styles.wrapperName}>
                <div className={styles.inputCont}>
                    <label htmlFor="nombre">Tu nombre</label>
                    <input type="text" name='nombre' placeholder='Nombre' />
                </div>
                <div className={styles.inputCont}>
                    <label htmlFor="apellido">Tu apellido</label>
                    <input type="text" name='apellido' placeholder='Apellido' />
                </div>
            </div>
            <h4 className={styles.subtitle}>Gracias ¿Cómo te gustaría que nos pusiéramos en contacto contigo?</h4>
            <div className={styles.wrapperName}>
                <div className={styles.inputCont}>
                    <label htmlFor="email">Enviarme un correo electrónico*</label>
                    <input type="text" name='email' placeholder='email@ejemplo.com' />
                </div>
                <div className={styles.inputCont}>
                    <label htmlFor="numero">Llamarme</label>
                    <input type="text" name='numero' placeholder='Número de teléfono' />
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default ContactForm