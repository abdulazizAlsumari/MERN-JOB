export default {
   createEmployee : (jahez)=>{
        return fetch(`/jahez`,
            {method : 'post',
            body: JSON.stringify(jahez),
            headers : {
                "Content-Type" : "application/json"
            }}).then(res => res.json())
                .then(data => data);
    }
}