async function getImplementations() {
    try {
        const manifest = (await fetch("/implementations/manifestByStarset.json"));
        if (!manifest.ok) throw new Error("uhhh shit failed, " + manifest.status);
        const jason = await manifest.json();
        const items = jason.implementations;
        let objects = [];
        for (let i = 0; i < items.length; i++) {
            const stuff = await fetch("/implementations/" + items[i] + "/about.json");
            if (!stuff.ok) throw new Error("uhhh shit failed, " + manifest.status);
            const jason2 = await stuff.json();
            objects.push(jason2);
        }
        return objects;
    } catch {
        console.error("implementations died :(");
    }
}