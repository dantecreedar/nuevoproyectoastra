import { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [typing, setTyping] = useState(false);

    const chatContainerRef = useRef(null);

    const responses = {
        greetings: {
        hi: '¡Hola! ¿En qué puedo ayudarte?',
        hello: '¡Hola! ¿Cómo puedo ayudarte hoy?',
        },
        weather: {
        temperature: 'Lo siento, no puedo decirte la temperatura en este momento.',
        forecast: 'No tengo información sobre el pronóstico del tiempo ahora mismo.',
        },
        users: {
        error: 'Lo siento, no pude obtener la información de los usuarios.',
        },
        payments: {
        register: 'Hola, Al momento de realizar su pago en línea de caja podrá consultar al personal que le atenderá si esta registrado en su sistema. De no ser así, podrá pedirle que la registe brindándole unos pocos datos personales.',
        debitCard: 'Hola, podrá abonar con cualquier tarjeta de débito bancaria que usted disponga, con la misma también podrá retirar dinero hasta un monto máximo de $70.000. De ser una tarjeta de billetera virtual hasta la fecha aceptamos Personal Pay, Mercado Pago o Uala, recuerda que las mismas al no ser bancarias no se podrá retirar dinero.',
        qrPayment: 'Podrá abonar con Qr de cuentas bancarias utilizando Modo de su Home Banking, Mercado Pago, Personal Pay, Uala a la fecha solo con tarjeta. Por cualquier otra aplicación consulte antes con un representante de la sucursal.',
        discounts: 'Modo - Todos los días tope de $1.000\nNaranja 3 Cuotas - Plan Z valido hasta el 31/12\nModo Macro - 25% de descuento con Tarjeta de crédito Valido los dias Miércoles\nModo Bna+ -30% de descuento tope $2.000 Valido hasta el 31/12\nPersonal Pay -  De jueves a domingos 25% de descuento tope $1.000\nExclusivo Misiones -  Jubilados 30% de descuento tope $3.000/mes',
        },
        productInfo: {
        price: '-Hola, Podría decirme la marca del producto\n-...\n-Perfecto, estos son los resultados de los productos de esa marca\n-...',
        quantityLimit: 'Hola, los productos que están limitados son:\n-Yerbas 5 bultos\n-Azúcar 5 bultos\n-Aceite 5 bultos\nLos demás productos no tienen restricciones a la fecha.',
        refrigeratedProducts: 'Hola si, los productos que se pueden vender fraccionado son los productos que se exhiben por hormas. Podrá pedir al personal que se encuentra en el sector de frigorífico en el horario de 9 a 14hs.',
        },
        services: {
        expressCheckout: 'Hola, lo lamentamos por el momento disponemos solo de cajas únicas. Si usted tiene alguna discapacidad, embarazo o es una persona mayor de edad podrá acercarse directamente a una caja la cual será atendida con prioridad.',
        bulkDiscount: 'Hola, lo lamentamos los precios por llevar productos por cantidad se efectúa llevando productos iguales.',
        },
        default: 'No entendí tu pregunta. ¿Puedes ser más específico?',
        
            commerce: {
                businessHours: 'Nuestro horario de atención al cliente es de lunes a viernes de 9:00 a 18:00. Los sábados estamos abiertos de 10:00 a 14:00.',
                paymentMethods: 'Aceptamos los siguientes métodos de pago: efectivo, tarjetas de crédito y débito (Visa, MasterCard, American Express), transferencias bancarias y pagos electrónicos.',
                deliveryOptions: 'Ofrecemos servicio de entrega a domicilio. Puedes realizar tu pedido en línea o contactar a nuestro servicio al cliente para más detalles.',
                returnsPolicy: 'Si no estás satisfecho con tu compra, puedes devolver el producto en un plazo de 15 días y te reembolsaremos el monto total.',
                productAvailability: 'La disponibilidad de productos puede variar. Te recomendamos verificar la disponibilidad en línea o llamar a nuestro servicio al cliente para obtener información actualizada.',
                promotions: 'Regularmente ofrecemos promociones especiales. Puedes consultar nuestras ofertas actuales en nuestro sitio web o visitar nuestra tienda.',
            },
            
            customerService: {
                contactMethods: 'Puedes ponerte en contacto con nuestro servicio al cliente a través de correo electrónico a info@tuempresa.com o llamando al 123-456-789.',
                orderTracking: 'Si deseas realizar un seguimiento de tu pedido, puedes ingresar al área de clientes en nuestro sitio web o comunicarte con nuestro servicio al cliente para obtener asistencia.',
                complaints: 'Lamentamos cualquier inconveniente que hayas experimentado. Si tienes alguna queja, por favor, contáctanos para que podamos abordar y resolver la situación.',
                productInquiries: 'Si tienes alguna pregunta específica sobre nuestros productos, no dudes en preguntar. Estamos aquí para proporcionarte toda la información que necesitas.',
                feedback: 'Agradecemos tus comentarios. Si tienes alguna sugerencia o comentario sobre nuestros productos o servicios, háznoslo saber. Valoramos tu opinión.',
            },
        
    };

    const fetchBotResponse = async (userMessage) => {
        return new Promise((resolve) => {
        setTimeout(async () => {
            let botResponse;

            if (userMessage.toLowerCase().includes('hola')) {
            botResponse = {
                text: responses.greetings.hi,
                sender: 'bot',
            };
            } else if (userMessage.toLowerCase().includes('hello')) {
            botResponse = {
                text: responses.greetings.hello,
                sender: 'bot',
            };
            } else if (userMessage.toLowerCase().includes('temperatura')) {
            botResponse = {
                text: responses.weather.temperature,
                sender: 'bot',
            };
            } else if (userMessage.toLowerCase().includes('pronostico')) {
            botResponse = {
                text: responses.weather.forecast,
                sender: 'bot',
            };
            } else if (userMessage.toLowerCase().includes('registrarme como cliente')) {
            botResponse = {
                text: responses.payments.register,
                sender: 'bot',
            };
            } else if (userMessage.toLowerCase().includes('tarjeta de debito')) {
            botResponse = {
                text: responses.payments.debitCard,
                sender: 'bot',
            };
            } else if (userMessage.toLowerCase().includes('pagar con qr')) {
            botResponse = {
                text: responses.payments.qrPayment,
                sender: 'bot',
            };
            } else if (userMessage.toLowerCase().includes('días tienen descuentos')) {
            botResponse = {
                text: responses.payments.discounts,
                sender: 'bot',
            };
            } else if (userMessage.toLowerCase().includes('precio de un producto')) {
            botResponse = {
                text: responses.productInfo.price,
                sender: 'bot',
            };
            } else if (userMessage.toLowerCase().includes('cajas puedo comprar')) {
            botResponse = {
                text: responses.productInfo.quantityLimit,
                sender: 'bot',
            };
            } else if (userMessage.toLowerCase().includes('productos de las heladeras')) {
            botResponse = {
                text: responses.productInfo.refrigeratedProducts,
                sender: 'bot',
            };
            } else if (userMessage.toLowerCase().includes('cajas rapidas')) {
            botResponse = {
                text: responses.services.expressCheckout,
                sender: 'bot',
            };
            } else if (userMessage.toLowerCase().includes('productos de diferentes gustos')) {
            botResponse = {
                text: responses.services.bulkDiscount,
                sender: 'bot',
            };
            } else {
            botResponse = {
                text: responses.default,
                sender: 'bot',
            };
            }
            
            // Nueva lógica para respuestas relacionadas con comercio y servicio al cliente
            if (userMessage.toLowerCase().includes('horario') || userMessage.toLowerCase().includes('atencion al cliente')) {
                botResponse = {
                text: responses.commerce.businessHours,
                sender: 'bot',
                };
            } else if (userMessage.toLowerCase().includes('metodos de pago')) {
                botResponse = {
                text: responses.commerce.paymentMethods,
                sender: 'bot',
                };
            } else if (userMessage.toLowerCase().includes('entrega') || userMessage.toLowerCase().includes('envio')) {
                botResponse = {
                text: responses.commerce.deliveryOptions,
                sender: 'bot',
                };
            }

            resolve(botResponse);
        }, 1000);
        });
    };

    const handleSendMessage = async () => {
        if (inputValue.trim() === '') return;

        const userMessage = inputValue;
        setMessages((prevMessages) => [...prevMessages, { text: userMessage, sender: 'user' }]);
        setInputValue('');
        setLoading(true);

        const botResponse = await fetchBotResponse(userMessage);

        setLoading(false);
        setTyping(true);

        const typingDelay = 50;

        for (let i = 0; i <= botResponse.text.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, typingDelay));
        const typingMessage = botResponse.text.slice(0, i);
        setMessages((prevMessages) => [
            ...prevMessages.slice(0, -1),
            {
            text: typingMessage,
            sender: 'bot',
            },
        ]);
        }

        setTyping(false);

        // Desplazar automáticamente hacia abajo para mostrar el último mensaje
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    };

    useEffect(() => {
        if (typing) {
        setMessages((prevMessages) => [
            ...prevMessages.slice(0, -1),
            {
            text: `${prevMessages[prevMessages.length - 1].text}|`,
            sender: 'bot',
            },
        ]);
        }
    }, [typing]);

    return (
        <div className="max-w-md mx-auto bg-gradient-to-tr from-black to-slate-900 border p-4 rounded-lg shadow-md">
        <div className="mb-4">
            <div className="font-bold text-2xl mb-2">Quasar-Astra IA</div>
            <div
            ref={chatContainerRef}
            className="chatbot-messages max-h-[200px] overflow-y-auto mb-2"
            >
            {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                {message.text}
                </div>
            ))}
            </div>
            {loading && (
            <div className="text-center mt-2 text-gray-500 loading loading-ring loading-md">
                Cargando...
            </div>
            )}
        </div>
        <div className="flex items-center">
            <input
            type="text"
            className="flex-1 rounded-l-md p-2"
            placeholder="Escribe un mensaje..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
            <button
            onClick={handleSendMessage}
            className="bg-black text-white p-2 rounded-r-md hover:bg-blue-600 tooltip" data-tip="¡Hablame! :)"
            >
            Consultar
            </button>
        </div>
        </div>
    );
};

export default Chatbot;
