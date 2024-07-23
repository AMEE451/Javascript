export const users = {
    post: async (data) => {
        let req = await fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        let res = await req.json()
    },

    Get: async () => {
        let req = await fetch(`http://localhost:3000/users`);
        let res = await req.json();
        return res;
    },

    post2: async (data) => {
        let req = await fetch(`http://localhost:3000/cart`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        let res = await req.json()
    },

    Get2: async () => {
        let req = await fetch(`http://localhost:3000/cart`);
        let res = await req.json();
        return res;
    }

}