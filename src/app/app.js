import { Chat } from './../chat/chat.js';
import { Form } from './../form/form.js';

export class App {
    constructor(el) {
        this.el = el;
        this.chat = new Chat({
            el: document.createElement('div')
        });
        this.form = new Form({
            el: document.createElement('div'),
            onSubmit: this._onFormSubmit.bind(this)
        });

        this.el.append(this.chat.el, this.form.el);
        this.chat.add([
            {
                name: 'Sofia',
                text: 'Привет! Хочу показать свой чат!'
            },
            {
                name: 'Tim',
                text: 'Привет! Мне нравится!'
            },
            {
                name: 'Kate',
                text: 'Привет! ураааа!'
            },
        ])

        this.render();
    }

    render() {
        this.chat.render();
        this.form.render();
    }

    _onFormSubmit({ text }) {
        this.chat.addOne({
            text,
            name: 'me'
        })
        this.render();
    }
}