import { GiDiamondsSmile } from "react-icons/gi";
import Resp from "./Resp"
import Start from "../Tasks/Start";



function Chat() {

    /* object */
    function ChatNeuron() {
        this.logic = {
            "hola": ["¡Hola! ¿En qué puedo ayudarte?", "¡Hola, buen día! ¿En qué puedo ayudarte hoy?"],
            "adios": ["¡Hasta luego!", "¡Que tengas un día increíble!", "Hasta luego, cuídate."],
            "feliz": ["¡Qué bueno verte tan feliz!", "¡Me alegra que estés contento!"],
            "¿como estas?": ["Oh no, ¿qué sucedió?", "Estoy aquí si necesitas hablar."],  
            "¿hay precios?": ["Oh no, ¿qué sucedió?", "Estoy aquí si necesitas hablar."],  
            
            "saludo": ["¡Bienvenido a nuestra distribuidora!", "¡Hola! ¿En qué podemos colaborar hoy?", "¡Saludos! ¿Cómo podemos ayudarte?"],
            "despedida": ["¡Gracias por elegirnos!", "¡Hasta luego! Esperamos verte pronto.", "¡Que tengas un día excelente!"],
            "consulta de producto": ["¡Claro! ¿Qué producto estás buscando?", "¿En qué podemos asistirte con respecto a nuestros productos?", "Estamos aquí para responder tus preguntas sobre nuestros productos."],
            "horarios de entrega": ["Nuestros horarios de entrega son de lunes a viernes de 9 am a 6 pm.", "Puedes revisar nuestros horarios de entrega en la sección correspondiente de nuestra página web.", "¿Necesitas información específica sobre nuestros horarios de entrega?"],
            "precios": ["Para obtener información sobre los precios, te recomendamos visitar nuestra página web o contactarnos directamente.", "Los precios pueden variar, ¿tienes un producto en mente para proporcionarte detalles específicos?", "Estamos encantados de brindarte información sobre los precios. ¿De qué producto te gustaría saber?"],
    
            "estado del pedido": ["¿Cuál es el número de tu pedido? Con gusto verificaremos su estado.", "Para conocer el estado de tu pedido, por favor, proporciónanos el número correspondiente.", "Para rastrear tu pedido, necesitamos el número de seguimiento. ¿Puedes proporcionarlo?"],
            "gracias": ["¡Gracias por tu preferencia!", "Apreciamos tu negocio y estamos aquí para ayudarte en lo que necesites.", "Nos sentimos agradecidos de tenerte como cliente. ¿Hay algo más en lo que podamos ayudarte?"],
            "tengo una consulta": ["¿En qué podemos ayudarte hoy?", "Estamos aquí para responder cualquier pregunta que tengas. Adelante, pregúntanos.", "Tu satisfacción es nuestra prioridad. ¿En qué podemos colaborar contigo?"],
            "no entendido": ["Lo siento, no entendí tu solicitud. ¿Podrías reformularla?", "Parece que hubo un malentendido. ¿Podrías proporcionar más detalles?", "No estoy seguro de entender. ¿Puedes especificar o preguntar de otra manera?"],
            "error": ["¡Ups! Algo salió mal. Por favor, inténtalo de nuevo más tarde.", "Parece que hay un problema. ¿Podemos ayudarte con algo más?", "Lo siento, pero parece que hay un error. ¿Cómo podemos asistirte?"],
            "nuevos productos": ["¡Tenemos nuevos productos en stock!", "¡Descubre nuestras últimas adiciones al catálogo!", "¿Te gustaría conocer nuestros productos más recientes?"],
            "oferta_especial": ["¡No te pierdas nuestras ofertas especiales!", "Tenemos ofertas exclusivas por tiempo limitado. ¿Quieres conocer más?", "¡Aprovecha nuestras ofertas especiales antes de que se agoten!"],
            "sugerencia del producto": ["¿Necesitas recomendaciones? Cuéntanos tus preferencias y te sugeriremos productos ideales para ti.", "Estamos aquí para ayudarte a encontrar el producto perfecto. ¿Tienes alguna preferencia específica?", "¿Quieres algunas sugerencias de productos? ¡Pregúntanos!"],
            "quiero hacer un reclamacion": ["Lamentamos cualquier inconveniente. Por favor, proporciónanos más detalles sobre tu reclamación para que podamos ayudarte mejor.", "Estamos aquí para resolver cualquier problema que puedas tener. ¿Cuál es tu reclamación?", "Lamentamos escuchar sobre tu experiencia negativa. ¿En qué podemos mejorar?"],
            "promocion": ["¡No te pierdas nuestras promociones actuales!", "Descubre las promociones vigentes y ahorra en tus compras. ¿Quieres más detalles?", "Te invitamos a revisar nuestras promociones para obtener descuentos exclusivos."],
            "tiempo de entrega": ["El tiempo de entrega estándar es de 3 a 5 días hábiles. ¿Necesitas entrega express?", "Podemos ajustar el tiempo de entrega según tus necesidades. ¿Tienes alguna preferencia?", "Trabajamos para garantizar entregas rápidas y seguras. ¿En qué más podemos ayudarte?"],
            "agotado": ["Lamentablemente, el producto que buscas está agotado en este momento. ¿Te gustaría considerar alguna alternativa?", "Nuestros productos son populares y a veces se agotan rápidamente. ¿Podemos ayudarte con algo más?", "Estamos trabajando para reabastecer nuestro inventario. ¿Hay algo más en lo que podamos colaborar?"],
            "problema en el pago": ["Si experimentas problemas con el pago, por favor, revisa la información de tu tarjeta o método de pago. ¿Necesitas ayuda adicional?", "Entendemos que los problemas de pago pueden ser frustrantes. ¿En qué podemos asistirte para resolverlos?", "Para resolver problemas de pago, te recomendamos ponerte en contacto con nuestro equipo de soporte. Estamos aquí para ayudarte."],
            "cuenta del cliente": ["¿Necesitas ayuda con tu cuenta? Puedes gestionar tu información personal y pedidos desde tu cuenta en línea.", "Tu cuenta es importante para nosotros. ¿Hay algo específico que te gustaría hacer o cambiar en tu cuenta?", "Estamos aquí para ayudarte con cualquier pregunta o solicitud relacionada con tu cuenta."],
            "garantia del producto": ["Todos nuestros productos cuentan con garantía. ¿Necesitas información detallada sobre la garantía de un producto específico?", "La garantía de nuestros productos varía. ¿Cuál es el producto para el que necesitas información de garantía?", "Puedes consultar la información de garantía en la página del producto o contactarnos para obtener detalles adicionales."],
            "envio internacional": ["Realizamos envíos internacionales. ¿En qué país te encuentras para proporcionarte detalles sobre los costos de envío?", "¡Buenas noticias! Realizamos envíos a nivel internacional. ¿Dónde te gustaría recibir tu pedido?", "¿Necesitas información sobre envíos internacionales? Estamos aquí para ayudarte."],
        
            /* cliente respuesta */
            "¿Como hago para registrarme como cliente?": ["Al momento de realizar su pago en línea de caja podrá consultar al personal que le atenderá si esta registrado en su sistema. De no ser así, podrá pedirle que la registe brindándole unos pocos datos personales"],
            "¿Puedo pagar con mi tarjeta de debito?": ["podrá abonar con cualquier tarjeta de debito bancaria que usted disponga, con la misma también podrá retirar dinero hasta un monto máximo de $70.000. De ser una tarjeta de billetera virtual hasta la fecha aceptamos Personal Pay, Mercado pago o Uala, recuerda que las mismas al no ser bancarias no se podrá retirar dinero."],
            "¿Con Qr puedo pagar?": ["Podrá abonar con Qr de cuentas bancarias utilizando Modo de su Home Banking, Mercado Pago, Personal Pay, Uala a la fecha solo con tarjeta. Por cualquier otra aplicación consulte antes con un representante de la sucursal."],
            "¿Qué dias tienen descuentos? ": ["Modo - Todos los días tope de $1.000, Naranja 3 Cuotas - Plan Z valido hasta el 31/12. Modo Macro - 25% de descuento con Tarjeta de crédito Valido los dias Miércoles. Modo Bna+ -30% de descuesto tope $2.000 Valido hasta el 31/12. Personal Pay -  De jueves a domingos 25% de descuento tope $1.000.Exclusivo Msiones -  Jubilados 30% de descuento tope $3.000/mes"],
        };
    
        this.getResponse = async function (message) {
            const lowerCaseMessage = message.toLowerCase();
        
            // Simular retraso en la respuesta
            await this.sleep(1000);
        
            // Buscar la palabra clave en this.logic
            for (const keyword in this.logic) {
                if (lowerCaseMessage.includes(keyword)) {
                    const availableResponses = this.logic[keyword];
                    return this.getRandomResponse(availableResponses);
                }
            }
    
            ////////////////////////////////////////////////////////
    
    
            for (const word in this.logic) {
                if (lowerCaseMessage.includes(word)) {
                    // eslint-disable-next-line no-undef
                    const availableResponses = this.logic[word][mood];
                    if (availableResponses) {
                        return this.getRandomResponse(availableResponses);
                    }
                }
            }
    
    
    
            // Verificar si el mensaje contiene la palabra clave para consumir la API
            if (lowerCaseMessage.includes("usuarios")) {
                try {
                    const data = await this.fetchUserData();
                    const userNames = data.map(user => user.name);
                    return `Usuarios disponibles: ${userNames.join(', ')}`;
                } catch (error) {
                    console.error('Error al obtener datos de la API:', error);
                    return 'Ocurrió un error al obtener los datos de la API.';
                }
            }
            // Verificar si el mensaje contiene la palabra clave para consumir la API
            if (lowerCaseMessage.includes("caja")) {
                try {
                    const data = await this.fetchUserData();
                    const userNames = data.map(user => user.name);
                    return `Cajas disponibles: ${userNames.join(', ')}`;
                } catch (error) {
                    console.error('Error al obtener datos de la API:', error);
                    return 'Ocurrió un error al obtener los datos de la API.';
                }
            }
            // Verificar si el mensaje contiene la palabra clave para consumir la API
            if (lowerCaseMessage.includes("precios a ver")) {
                try {
                    const data = await this.fetchUserData();
                    const userNames = data.map(user => user.name);
                    return `Precios a ver y disponibles: ${userNames.join(', ')}`;
                } catch (error) {
                    console.error('Error al obtener datos de la API:', error);
                    return 'Ocurrió un error al obtener los datos de la API.';
                }
            }
    
    
    
            // Verificar similitud de incoherencias
            const similarWords = this.findSimilarWords(lowerCaseMessage);
            if (similarWords.length > 0) {
                return `¿Quisiste decir "${similarWords.join('", "')}"?`;
            }
    
            return "Lo siento, no entiendo ese mensaje. ¿Puedes ser más claro?";
        };
    
    
    
        this.fetchUserData = async function() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            return response.json();
        };
    
        this.calculateJaccardSimilarity = function(a, b) {
            const setA = new Set(a);
            const setB = new Set(b);
            const intersection = new Set([...setA].filter(x => setB.has(x)));
            const union = new Set([...setA, ...setB]);
            return intersection.size / union.size;
        };
    
        this.calculateLevenshteinDistance = function(a, b) {
            if (a.length === 0) return b.length;
            if (b.length === 0) return a.length;
    
            const matrix = [];
    
            for (let i = 0; i <= b.length; i++) {
                matrix[i] = [i];
            }
    
            for (let j = 0; j <= a.length; j++) {
                matrix[0][j] = j;
            }
    
            for (let i = 1; i <= b.length; i++) {
                for (let j = 1; j <= a.length; j++) {
                    const cost = a[j - 1] === b[i - 1] ? 0 : 1;
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j - 1] + cost
                    );
                }
            }
    
            return 1 - matrix[b.length][a.length] / Math.max(a.length, b.length);
        };
    
        this.findSimilarWords = function(message) {
            const threshold = 0.5;
            const similarWords = [];
    
            for (const word in this.logic) {
                const similarityJaccard = this.calculateJaccardSimilarity(message, word);
                const similarityLevenshtein = this.calculateLevenshteinDistance(message, word);
    
                if (similarityJaccard > threshold || similarityLevenshtein > threshold) {
                    similarWords.push(word);
                }
            }
    
            return similarWords;
        };
    
        this.getRandomResponse = function(responses) {
            const randomIndex = Math.floor(Math.random() * responses.length);
            return responses[randomIndex];
        };
    
        this.sleep = function(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        };
    }
    /* model */
    const chatNeuron = new ChatNeuron();
    let currentMood = "feliz";
    /* response */
    function sendMessage() {
        const userInput = document.getElementById("user-input");
        const chat = document.getElementById("chat");
    
        // Eliminar la respuesta anterior
        const previousResponse = chat.querySelector('.typing-effect');
        if (previousResponse) {
            previousResponse.remove();
        }
    
        // Mostrar el efecto de "cargando"
        const loadingMessage = document.createElement('div');
        loadingMessage.textContent = 'Cargando...';
        loadingMessage.classList.add('loading');
        chat.appendChild(loadingMessage);
    
        const userMessage = userInput.value;
        chatNeuron.getResponse(userMessage, currentMood)
            .then(botResponse => {
                // Eliminar el mensaje de "cargando"
                loadingMessage.remove();
    
                // Agregar el efecto de máquina de escribir a la nueva respuesta
                const responseContainer = document.createElement('div');
                responseContainer.classList.add('typing-effect');
                // Aplicar el estilo CSS al contenedor de chat
                responseContainer.style.maxWidth = '100%';
                responseContainer.style.wordWrap = 'break-word';
                responseContainer.style.overflowWrap = 'break-word';
                responseContainer.style.whiteSpace = 'pre-line';
                chat.appendChild(responseContainer);
    
                const characters = botResponse.split('');
                characters.forEach((char, index) => {
                    setTimeout(() => {
                        responseContainer.textContent += char;
                    }, index * 50);
                });
            })
            .catch(error => console.error('Error:', error));
    
        userInput.value = "";
    }
    
    // Función para iniciar el reconocimiento de voz
    // eslint-disable-next-line no-unused-vars
    function startSpeechRecognition() {
        // eslint-disable-next-line no-undef
        const recognition = new webkitSpeechRecognition() || SpeechRecognition();
        recognition.lang = 'es-ES';
    
        recognition.onresult = function (event) {
            const transcript = event.results[0][0].transcript;
            const userInput = document.getElementById("user-input");
            userInput.value = transcript;
            sendMessage(); // Llama a la función sendMessage después de reconocer la voz
        };
    
        recognition.start();
    }
    
   
    return ( 
        <>
            <div id="chat-container" className="shadow-sm">
                <div className="text-5xl flex pb-5 p-3"><GiDiamondsSmile/><div className="">AstraBot</div></div>

                <Resp/>

                <Start/>

                <div className="join p-3">
                    <input type="text" id="user-input" className="input input-sm join-item bg-white" placeholder="Ingrese la Cosulta"/>
                    {/*  <input type="text" id="user-input" placeholder="Ingrese su mensaje"> */}
                    <button onClick={sendMessage} className="btn-sm join-item btn-ghost tooltip" data-tip="¡Hablame! :)">Consultar</button>
                </div>

                
                {/* <button onClick={startSpeechRecognition}>Hablar</button> */}
            </div>
        </>
    );
}

export default Chat;