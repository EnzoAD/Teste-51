import Veiculo from "../models/veiculo.mjs";

const VeiculoController = {
    "new": async (req, res) => {
        const created = await Veiculo.create({
            fabricante: req.body.fabricante,
            modelo: req.body.modelo
        });
         res.send(created);
    },

    "all": async (req, res) => {
        res.json(await Veiculo.findAll());
    },
    "edit": async (req, res) => {
        const v = await Veiculo.findOne({
            where: {id: req.body.id }
        });
        v.fabricante = req.body.fabricante;
        v.modelo = req.body.modelo;
        await v.save();
        res.json(v);
    },
    "remove": async (req, res) => {
        const rem = await Veiculo.findOne({
            where: {id: req.body.id }
        });
        await rem.destroy();
        res.json(rem);

    },
    "one": async (req, res) => {
        const o = await Veiculo.findOne({
            where: {id: req.params.id }
        });
        res.json(o);
    }
};
export default VeiculoController;