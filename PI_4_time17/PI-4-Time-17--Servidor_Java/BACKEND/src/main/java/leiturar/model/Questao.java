package main.java.leiturar.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
@Document(collection = "questoes")
public class Questao {
    @Id
    private String id;
    private String pergunta;
    private String[] alternativas;
    private int respostaCorreta; // índice da alternativa certa
    private String idLivro; // referência ao livro
}
