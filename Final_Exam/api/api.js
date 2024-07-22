export const user = {
    post: async (data) => {
        let req = await fetch(`http://localhost:3000/user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        let res = await req.json()
    },

    Get: async () => {
        let req = await fetch(`http://localhost:3000/user`);
        let res = await req.json();
        return res;
    }
}