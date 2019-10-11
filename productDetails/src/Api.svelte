<script context="module">
    const host = "http://trippyak-mobile:3000";

    const headers = {
        "Content-Type": "application/json"
    };

    export let getProductDetails = async (product) => {
        const endpoint = "/api/getProductDetails";
        let data;
        try
        {
            const res = await fetch(`${host}${endpoint}`, {
                method: "POST",
                headers,
                body: JSON.stringify({
                    product
                })
            });
            data = await res.json();
        }
        catch (err)
        {
            console.log(err)
        }

        return data;
    }
</script>