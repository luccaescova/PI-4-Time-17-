package main.java.leiturar.controller;

import leiturar.model.Questao;
import leiturar.service.QuestaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/questoes")
@CrossOrigin("*")
public class QuestaoController {

    @Autowired
    private QuestaoService questaoService;

    @PostMapping("/criar")
    public Questao criar(@RequestBody Questao questao) {
        return questaoService.criarQuestao(questao);
    }

    @GetMapping("/livro/{idLivro}")
    public List<Questao> listarPorLivro(@PathVariable String idLivro) {
        return questaoService.listarPorLivro(idLivro);
    }
}
