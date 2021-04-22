'use strict'
const Jogo = use("App/Models/Jogo")

class JogoController {

  async index({ request, response, auth }) {

    const { nome, concluido, _console, genero, limite, pagina } = request._qs


    const jogos = await Jogo.query().where((qb) => {
      if (nome) {
        qb.where('nome', 'like', `%${nome}%`);
      }
      
      if (_console) {
        qb.orWhere('console', 'like', `%${console}%`);
      }
      
      if (genero) {
        qb.orWhere('genero', 'like', `%${genero}%`);
      }
      if (concluido) {
        qb.andWhere('concluido', 'like', `%${concluido}%`);
      }
    }).where('user_id', auth.user.id)
      .limit(limite ? limite : 99)
      .offset(pagina ? (pagina * limite - limite) : 0).fetch()
    return response.json(jogos)
  }





  async store({ request, auth, response }) {
    try {
      const data = request.only(['nome', 'genero', 'console', 'concluido', 'dataTermino'])
      const newJogo = await Jogo.create({ user_id: auth.user.id, ...data })
      return response.status(201).json(newJogo)
    } catch (error) {
      return response.status(500).json(error)
    }
  }


  async show({ params, response, auth }) {
    const jogo = await Jogo.findOrFail(params.id)
    if(jogo.user_id !== auth.user.id) 
    {
      return response.status(401).json({'erro': "não autorizado"})
    }
    
    return response.status(200).json(jogo)

  }


  async update({ params, request, response, auth }) {
    const data = request.only(['nome', 'genero', 'console', 'concluido', 'dataTermino'])
    const jogo = await Jogo.findOrFail(params.id)
    if (jogo.user_id !== auth.user.id) {
      return response.status(401).json({'erro': "não autorizado"})
    }

    await jogo.merge({ user_id: auth.user.id, ...data })
    await jogo.save()

    return jogo

  }


  async destroy({ params, response, auth }) {

    const jogo = await Jogo.findOrFail(params.id)
    if (jogo.user_id !== auth.user.id) {
      return response.status(401).json({'erro': "não autorizado"})
    }

    await jogo.delete()

  }
}
module.exports = JogoController



