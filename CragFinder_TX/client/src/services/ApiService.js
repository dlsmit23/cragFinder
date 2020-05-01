import Api from '@/services/Api';

export default {
    fetchTest() { //checking for return response
        return Api().get('/test'); 
    },

    //user login, checks for email + pass
    login(email, password) {
        return Api().post('/login', 
             {
                email,
                password
            }
        );
    },

    //user signup - 
    signup(email, password) {
        return Api().post('/profile', 
            {        
                email,
                password
            }
        );
    },

    //user profile, pulls all data from the backend and displays
    profile() {
        let token = localStorage.getItem('rc-token');
        return Api().get('/profile', {
            headers: {
                'rc-auth-token' : token
            }
        });
    },

    //update profile, pushes all changes as they are made
    updateProfile(profile) {
        let token = localStorage.getItem('rc-token');
        return Api().put('/profile', profile, {
            headers: {
                'rc-auth-token' : token
            }
        });
    },

    // // logout of profile - NOT FUNCTIONAL
    // logoutProfile(profile) {
    // let token = localStorage.getItem('rc-token');
    // return Api().put('/profile', profile, {
    // headers: {
    //        removeItem('rc-token')
    //       }
    //   });
    // },

    //delete user - NOT FUNCTIONAL
    deleteProfile() {
        let token = localStorage.getItem('rc-token');
        return Api().delete('/profile', 
             {
                headers: {
                    'rc-auth-token' : token
                }
                 
             }
        );
    },
}