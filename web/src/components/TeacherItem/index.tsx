import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQEFpDoOKgx1YA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=4Kf-_k_kYv6K1SZqrlLFbXACnM5PATqzMDk2TPKWViE" alt="Breno Bispo"/>
                <div>
                    <strong>Breno Bispo</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br/> <br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong> 
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;