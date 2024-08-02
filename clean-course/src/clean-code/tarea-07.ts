(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';

    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ){}
    }

    class InputEvents {
        constructor() {};
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement

    interface InputElementProp {
        id: string;
        type: HtmlType;
        value: string;
        placeholder: string;
    }

    class InputElement {
        html: HtmlElement;
        attributes: InputAttributes;
        events: InputEvents;
        constructor({id, type, placeholder, value }:InputElementProp) {
            this.html = new HtmlElement( id, type);
            this.attributes = new InputAttributes(value, placeholder);
            this.events = new InputEvents();
        }
    }

    const nameField = new InputElement({
        id:'txtName',
        type:'input',
        value:'Clara',
        placeholder: 'Enter first name',
    });



    console.log({ nameField });

})()