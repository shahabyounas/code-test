
import { ServerHealth } from "./Server.health"


describe("ServerHealth", () => {

     let serverHealth = new ServerHealth()
     test('Should be able to access server', async () => {
        const isServerUp = await serverHealth.serverStatus()
        expect(isServerUp).toBe(true)

    })
})