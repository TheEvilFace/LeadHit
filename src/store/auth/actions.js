
export default {
    getAnalytics(context){
        return new Promise((resolve,reject) =>{
            // eslint-disable-next-line no-undef
            axios.get("https://track-api.leadhit.io/client/test_auth", {
                headers: {
                    'Api-Key': '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo',
                    'Leadhit-Site-Id': '5f8475902b0be670555f1bb3',
                }}).then(response =>{
                if (response.data.message == "ok"){
                    context.commit('SET_TOKEN', '5f8475902b0be670555f1bb3')
                    resolve()
                }
                reject('Неизвестная ошибка!')
            }).catch(error =>{
                reject('Ошибка: ', error)
            })
        })
    }
}