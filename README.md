Pour avoir la commande `code .` qui ouvre Code-Insiders, vous pouvez suivre les étapes suivantes :

1. Ouvrez votre terminal.
2. Tapez la commande suivante pour ouvrir votre fichier de configuration de shell dans l'éditeur de texte Nano :

   ```bash
   nano ~/.bashrc
   ```

   Si vous utilisez Zsh, tapez plutôt la commande suivante :

   ```bash
   nano ~/.zshrc
   ```

3. Ajoutez la ligne suivante à la fin du fichier :

   ```bash
   alias code="code-insiders"
   ```

4. Enregistrez les modifications en appuyant sur `Ctrl+O`, puis appuyez sur `Enter`.
5. Fermez l'éditeur de texte en appuyant sur `Ctrl+X`.
6. Rechargez votre fichier de configuration de shell en tapant la commande suivante :

   ```bash
   source ~/.bashrc
   ```

   Si vous utilisez Zsh, tapez plutôt la commande suivante :

   ```bash
   source ~/.zshrc
   ```

Après avoir suivi ces étapes, vous devriez être en mesure d'utiliser la commande `code .` pour ouvrir un dossier dans VSCode Insiders à la place de VSCode.