package main.java.leiturar.repository;

import leiturar.model.Questao;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface QuestaoRepository extends MongoRepository<Questao, String> {
    List<Questao> findByIdLivro(String idLivro);
}
