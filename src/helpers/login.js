
export const login = async( url ) => {
    
    const data = await  fetch( url, { 
        method: 'POST',
    })

    console.log( await data.json() );
};