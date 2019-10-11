<script context="module">
    const host = "http://trippyak-mobile:3001";
    
    const headers = {
        "Content-Type": "application/json",
    };

    export const getRelatedProducts = async (product) => {
        const endpoint = "/api/getRelatedProducts";
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
            console.log(err);
        }
        return data;
    };
</script>