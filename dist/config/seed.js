"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = seedDatabase;
const Book_1 = __importDefault(require("../models/Book"));
const Question_1 = __importDefault(require("../models/Question"));
const User_1 = __importDefault(require("../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
async function seedDatabase() {
    // cria usuário exemplo (RA + senha 123456)
    const ra = '24011609';
    const existingUser = await User_1.default.findOne({ ra });
    if (!existingUser) {
        const hash = await bcrypt_1.default.hash('123456', 10);
        await User_1.default.create({ ra, nome: 'Lucca Scovini', senha: hash });
        console.log('✓ usuário seed criado:', ra);
    }
    else {
        console.log('usuário seed já existe');
    }
    // cria livro magico_oz
    const bookId = 'magico_oz';
    const existingBook = await Book_1.default.findById(bookId);
    if (!existingBook) {
        await Book_1.default.create({ _id: bookId, titulo: 'O Mágico de Oz', autor: 'L. Frank Baum' });
        console.log('✓ livro seed criado:', bookId);
    }
    else {
        console.log('livro seed já existe');
    }
    // questões do mágico de oz (não duplicar)
    const count = await Question_1.default.countDocuments({ idLivro: bookId });
    if (count === 0) {
        const questions = [
            {
                idLivro: bookId,
                pergunta: 'Como Dorothy chega à Terra de Oz?',
                alternativas: [
                    'Através de um portal escondido na floresta',
                    'Após cair em um poço mágico',
                    'Sendo levada por um ciclone junto com sua casa',
                    'Seguindo a estrada de tijolos amarelos'
                ],
                correta: 2
            },
            {
                idLivro: bookId,
                pergunta: 'Por que o Espantalho decide acompanhar Dorothy até a Cidade das Esmeraldas?',
                alternativas: [
                    'Ele quer fugir da fazenda onde vivia',
                    'Ele deseja ganhar um cérebro',
                    'Ele precisa salvar sua família',
                    'Ele deseja se tornar rei dos Munchkins'
                ],
                correta: 1
            },
            {
                idLivro: bookId,
                pergunta: 'Ao início da história, Dorothy vive no Kansas cinzento. Isso pode ser interpretado como crítica a:',
                alternativas: [
                    'À falta de educação entre os moradores do interior',
                    'À modernização excessiva das cidades grandes',
                    'À pobreza e às condições duras de trabalho das famílias rurais',
                    'Ao clima seco do Kansas'
                ],
                correta: 2
            },
            {
                idLivro: bookId,
                pergunta: 'Qual é a reação dos Munchkins ao verem Dorothy pela primeira vez?',
                alternativas: [
                    'Acham que ela é uma princesa e pedem ajuda',
                    'Ficam com medo porque nunca viram humanos',
                    'Acreditam que ela é uma feiticeira que libertou o povo',
                    'Pensam que ela veio tomar o lugar da Bruxa Má'
                ],
                correta: 2
            },
            {
                idLivro: bookId,
                pergunta: 'A marca brilhante na testa de Dorothy, deixada pelo beijo da Bruxa do Norte, tem a função de:',
                alternativas: [
                    'Torná-la invisível aos inimigos',
                    'Identificar Dorothy como rainha do Norte',
                    'Proteger Dorothy de qualquer mal',
                    'Dar poderes mágicos temporários'
                ],
                correta: 2
            }
        ];
        await Question_1.default.insertMany(questions);
        console.log('✓ questões seed inseridas para', bookId);
    }
    else {
        console.log('questões seed já existem para', bookId);
    }
}
