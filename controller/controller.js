const db = require('../db.js');

class TestController{
    async createTest(req, res){
        const {name, description, price, img} = req.body;
        const newTest = await db.query(`INSERT INTO test (name, description, price, img)
            VALUES ($1, $2, $3, $4) RETURNING *`, [name, description, price, img]);
        res.json(newTest.rows[0]);
    }
    async getTests(req, res){
        const tests = await db.query(`SELECT id, name, description, price, img FROM test`);
        res.json(tests.rows);
    }
    async getTest(req, res){
        const id = req.params.id;
        const test = await db.query(`SELECT id, name, description, price, img FROM test 
                                    WHERE id = $1`, [id]);
        res.json(test.rows[0]);
    }
    async updateTest(req, res){
        const {id, name, description, price, img} = req.body;
        const test = await db.query(`UPDATE test SET name=$1, description=$2, price=$3, img=$4 
                                    WHERE id = $5 RETURNING *`, [name, description, price, img, id]);
        res.json(test.rows[0]);
    }
    async deleteTest(req, res){
        const id = req.params.id;
        await db.query(`DELETE FROM test WHERE id = $1`, [id]);
    }
}
module.exports = new TestController();
