async function data() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "hello",
                body: "hello is new body",
                userId: 10
            })
        });

        if (!res.ok) {
            throw new Error("Wrong API");
        }

        const result = await res.json();
        console.log(result);
    
        return result; // ✅ return API data

    } catch (err) {
        if (err.name === "TypeError") {
            console.log("Network error");
        } else {
            console.log(err.message);
        }

        return null; // ✅ consistent return
    }
}
module.exports = data();

// data();
// module.exports = {
//     title: result.title,
//     body: "data.body",
//     userId: "datauserId"
// };