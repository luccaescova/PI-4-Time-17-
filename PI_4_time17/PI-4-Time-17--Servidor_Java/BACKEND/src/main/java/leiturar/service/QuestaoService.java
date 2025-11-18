package main.java.leiturar.service;

import leiturar.model.Questao;
import leiturar.repository.QuestaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class QuestaoService {

    @Autowired
    private QuestaoRepository questaoRepository;

    public Questao criarQuestao(Questao questao) {
        return questaoRepository.save(questao);
    }

    public List<Questao> listarPorLivro(String idLivro) {
        return questaoRepository.findByIdLivro(idLivro);
    }
}
