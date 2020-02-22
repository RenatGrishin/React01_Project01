let initialState = {
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
};

const PostReducer =(state=initialState, action)=>{
    switch (action.type) {
        case 'ADD-POST':
            let addPost = {
                id: 3,
                title: 'new title',
                text: state.textareaPostDefault,
                author: 'Renat Grishin'
            };
            return{
                ...state,
                posts: [...state.posts, addPost],
                textareaPostDefault: ''
            }

        case 'TEXTAREA-POST':
            return {
                ...state,
                textareaPostDefault: action.textareaPostDefault
            }

        default: return state;
    }
};

export const addPostActionCreator =()=>({type: 'ADD-POST'});
export const editPostTextActionCreator =(text)=>(
    {
        type:  'TEXTAREA-POST',
        textareaPostDefault: text
    });

export default PostReducer;