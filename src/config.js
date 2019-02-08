const baseUrl=process.env.ROOT_API
const config={
    server:baseUrl,
    api:baseUrl+'/api'    
}

global.config=config

export default config