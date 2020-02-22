import PostReducer from "./post-reducer";

let store = {
    _state: {
        postPage: {
            posts: [
                {
                    id: 1,
                    title: 'Первый пост',
                    text: 'Это текст первого поста от Гришина Рената',
                    author: 'Renat Grishin'
                },
                {   id: 2,
                    title: 'Второй пост',
                    text: 'Тут текст второго поста от администратора сайта',
                    author: 'Admin'
                }
            ],
            textareaPostDefault: 'Write your post'
        }
    },
    getState(){
        return this._state;
    },
    _rerenderTreeSite() {
    },
    rerenderFn(observer) {
        this._rerenderTreeSite = observer;
    },

    dispatch(action) {
        this._state.postPage = PostReducer(this._state.postPage, action);

        this._rerenderTreeSite(this._state);

        /*switch (action.type){
            case 'ADD-POST':
                let addPost = {
                    id: 3,
                    title: 'new title',
                    text: this._state.postPage.textareaPostDefault,
                    author: 'Renat Grishin'
                };
                this._state.postPage.posts.push(addPost);
                this._state.postPage.textareaPostDefault = '101';
                this._rerenderTreeSite(this._state);
            case 'TEXTAREA-POST':
                this._state.postPage.textareaPostDefault = action.newText;
                this._rerenderTreeSite(this._state);
            default: console.log('case end')
        }*/
    },
}

export const addPostActionCreator =()=>{
    return{
        type: 'ADD-POST'
    }
}
export const editPostTextActionCreator =(text)=>{
    return{
        type: 'TEXTAREA-POST', newText: text
    }
}


export default store;