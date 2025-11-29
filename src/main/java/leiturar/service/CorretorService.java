package leiturar.service;

import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.Map;

@Service
public class CorretorService {

    private final Map<String, String[]> gabaritos = new HashMap<>();

    public CorretorService() {

        gabaritos.put("magico-oz", new String[]{
                "C", "B", "C", "C", "C"
        });

        gabaritos.put("vidas-secas", new String[]{
                "B", "C", "B", "C", "C"
        });

        gabaritos.put("dom-casmurro", new String[]{
                "C", "C", "B", "C", "B"
        });
    }

    public int corrigir(String livro, String[] respostasAluno) {
        String[] corretas = gabaritos.get(livro);

        if (corretas == null) return -1;

        int acertos = 0;

        for (int i = 0; i < corretas.length; i++) {
            if (respostasAluno[i].equalsIgnoreCase(corretas[i])) {
                acertos++;
            }
        }

        return acertos;
    }
}
