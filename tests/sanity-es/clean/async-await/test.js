const a = 3;

async function identity(x) {
    return x;
}

const z = await identity(1);