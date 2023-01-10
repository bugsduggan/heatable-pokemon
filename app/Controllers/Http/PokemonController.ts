// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pokemon from "App/Models/Pokemon";
import PokemonCreateValidator from "App/Validators/PokemonCreateValidator";
import PokemonUpdateValidator from "App/Validators/PokemonUpdateValidator";

export default class PokemonController {

    public async show({ params }) {
        if (!params.id) {
            return await Pokemon.all();
        } else {
            return await Pokemon.findOrFail(params.id);
        }
    }

    public async create({ request }) {
        const payload = await request.validate(PokemonCreateValidator);
        const result = await Pokemon.create(payload);
        return result;
    }

    public async update({ request, params}) {
        const payload = await request.validate(PokemonUpdateValidator);
        const pokemon = await Pokemon.findOrFail(params.id);
        pokemon.merge(payload);
        return await pokemon.save();
    }

    public async remove({ params }) {
        const pokemon = await Pokemon.findOrFail(params.id);
        return await pokemon.delete();
    }

}
