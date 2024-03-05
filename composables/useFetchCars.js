export default async(city, filters) => {
    const { data, error, refresh } = await useFetch(`/api/cars/${city}`, {
        params: { ...filters }
    })

    if(error.value) {
        throw createError({
            ...error.value,
            statusMessage: 'Unable to get cars'
        })
    }
    return {data, refresh}
}