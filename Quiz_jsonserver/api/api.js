export const Quiz = {
    post: async (data) => {
        let req = await fetch(`http://localhost:3000/Quiz`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        })
        let res = await req.json()
    },

    Get: async () => {
        let req = await fetch(`http://localhost:3000/Quiz`);
        let res = await req.json();
        return res;
        
    }
}

// https://json-server-sb6s.onrender.com/Quiz