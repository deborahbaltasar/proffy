import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://instagram.ffor8-2.fna.fbcdn.net/v/t51.2885-19/s150x150/13721051_313697058973568_1298614962_a.jpg?_nc_ht=instagram.ffor8-2.fna.fbcdn.net&_nc_ohc=vtoNB03NAgIAX_4FqTe&oh=6f0a1588ccf4070aeeb5d11ee4d6c2f2&oe=5F539119" alt=""/>
                <div>
                    <strong>Sarah Baltasar</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada
                <br /><br />
                Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões
            </p>

            <footer>
                <p>
                    Preço/Hora 
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;