import {profileReducer, addPost, deletePost} from "../redux/profile-reducer";
import {ProfileStateType} from "../redux/store";


describe('tests',()=>{
    let initialState:ProfileStateType;

    beforeEach(()=>{
        initialState = {
            postData: [
                {id: 1, message: "First post!!!!", likes: 125},
                {id: 2, message: "Second post!!!!", likes: 17},
            ],
            newPostText: "",
            aboutMe: "",
            contacts: {vk: '', twitter: ''},
            fullName: "",
            lookingForAJob: true,
            lookingForAJobDescription: "",
            photos: {
                small: '',
                large: ''
            },
            userId: 2,
            status: ''
        }
    })


    it('post should be added',()=>{
        expect(initialState.postData.length).toBe(2)
        let newState = profileReducer(initialState ,addPost('newPost'))
        newState = profileReducer(newState ,addPost('newPost2'))
        expect(newState.postData.length).toBe(4)
    })

    it('post should be deleted',()=>{
        expect(initialState.postData.length).toBe(2)
        let newState = profileReducer(initialState,deletePost(1))
    expect(newState.postData.length).toBe(1)
    expect(newState.postData[0].id).toBe(2)

    })

})

